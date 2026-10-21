#!/usr/bin/env python3
"""Crawl rendered routes and local assets, then verify key runtime behaviors."""
import argparse, concurrent.futures, hashlib, http.client, json, re, socket, ssl, sys, urllib.error, urllib.parse, urllib.request
from html.parser import HTMLParser
from pathlib import Path
parser = argparse.ArgumentParser()
parser.add_argument('base')
parser.add_argument('output', nargs='?', default='/tmp/agentpress-preview-verification.json')
parser.add_argument('--production', action='store_true')
parser.add_argument('--connect-to', help='Override connection target for this process only; keep URL host and TLS SNI unchanged')
args = parser.parse_args()
base = args.base.rstrip('/')
output = Path(args.output)
class VerifiedConnection(http.client.HTTPSConnection):
    def connect(self):
        self.sock = self._context.wrap_socket(socket.create_connection((args.connect_to, 443), self.timeout), server_hostname=self.host)

routes = ['/', '/careers', '/careers/founding-ai-gtm-engineer', '/careers/full-stack-ai-engineer', '/our-story', '/pricing', '/privacy', '/resources', '/resources/enterprise-deals-between-meetings', '/support', '/terms', '/why-ai-transformation-hires-fail']
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.assets=set(); self.links=set(); self.ids=set(); self.in_style=False; self.css=[]
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if a.get('id'): self.ids.add(a['id'])
        if tag in ('img','script','iframe','source') and a.get('src'): self.assets.add(a['src'])
        if tag=='link' and a.get('href') and a.get('rel') in ('stylesheet','preload','icon','apple-touch-icon'): self.assets.add(a['href'])
        if tag=='a' and a.get('href'): self.links.add(a['href'])
        if a.get('srcset'):
            for candidate in a['srcset'].split(','):
                self.assets.add(candidate.strip().split()[0])
        if a.get('style'): self.css.append(a['style'])
        if tag=='style': self.in_style=True
    def handle_endtag(self,tag):
        if tag=='style': self.in_style=False
    def handle_data(self,data):
        if self.in_style: self.css.append(data)
def fetch(url, redirects=0):
    try:
        if redirects > 5: raise RuntimeError('Too many redirects')
        if args.connect_to and urllib.parse.urlsplit(url).netloc == urllib.parse.urlsplit(base).netloc:
            parsed = urllib.parse.urlsplit(url)
            connection = VerifiedConnection(parsed.hostname, timeout=30, context=ssl.create_default_context())
            target = parsed.path or '/'
            if parsed.query: target += '?' + parsed.query
            connection.request('GET', target, headers={'User-Agent':'AgentPress-Production-Readiness-QA/1.0'})
            r = connection.getresponse()
            result = {'url':url,'status':r.status,'headers':dict(r.headers),'body':r.read(),'final_url':url}
            connection.close()
            location = next((value for key,value in result['headers'].items() if key.lower() == 'location'), None)
            if result['status'] in (301,302,303,307,308) and location:
                destination = urllib.parse.urljoin(url, location)
                final = fetch(destination, redirects + 1)
                final['redirects'] = [{'from':url,'status':result['status'],'to':destination}] + final.get('redirects', [])
                return final
            return result
        with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'AgentPress-Preview-QA/1.0'}),timeout=30) as r:
            return {'url':url,'status':r.status,'headers':dict(r.headers),'body':r.read(),'final_url':r.url}
    except urllib.error.HTTPError as e: return {'url':url,'status':e.code,'headers':dict(e.headers),'body':e.read()}
    except Exception as e: return {'url':url,'status':0,'error':str(e),'headers':{},'body':b''}
def local_url(ref, origin):
    url=urllib.parse.urljoin(origin,ref)
    if urllib.parse.urlsplit(url).netloc == urllib.parse.urlsplit(base).netloc:
        return urllib.parse.urldefrag(url)[0]
results=[]; assets=set(); links=set(); fragments=[]; parsed={}; failures=[]
for route in routes:
    r=fetch(base+route); results.append({'path':route,'status':r['status'], **({'redirects':r['redirects']} if r.get('redirects') else {})})
    if r['status']!=200: failures.append({'route':route,'status':r['status']}); continue
    robots = next((value for key,value in r['headers'].items() if key.lower() == 'x-robots-tag'), '')
    if args.production:
        if 'noindex' in robots: failures.append({'route':route,'error':'production is marked noindex'})
    elif 'noindex' not in robots: failures.append({'route':route,'error':'missing preview noindex'})
    text=r['body'].decode(); p=Page();p.feed(text);parsed[base+route]=p
    for ref in p.assets:
        url=local_url(ref,base+route)
        if url: assets.add(url)
    for css in p.css:
        for ref in re.findall(r'url\([\s\'"]*([^\)\'"\s]+)',css):
            url=local_url(ref,base+route)
            if url:assets.add(url)
    for ref in p.links:
        url=local_url(ref,base+route)
        if url:
            links.add(url)
            if '#' in ref: fragments.append((url,urllib.parse.urlsplit(urllib.parse.urljoin(base+route,ref)).fragment))
    if route=='/why-ai-transformation-hires-fail':
        assert 'Workflows get automated without anyone agreeing on the ROI' in text
        assert 'Why AI transformation hires fail (and how to screen for it)' in text
        assert 'agentpress_og_ai_transformation_hires.png' in text
        assert 'https://www.agent.press/why-ai-transformation-hires-fail' in text
        assert 'Redeploy it.' in text and 'Reserve it.' in text and 'Waste it.' in text
        assert '"@type":"BlogPosting"' in text
checks=assets|links
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as pool:
    for r in pool.map(fetch,sorted(checks)):
        if r['status'] not in (200,204): failures.append({'url':r['url'],'status':r['status'],'error':r.get('error')})
        if 'text/css' in r['headers'].get('Content-Type',''):
            for ref in re.findall(r'url\([\s\'"]*([^\)\'"\s]+)',r['body'].decode()):
                url=local_url(ref,r['url'])
                if url and url not in checks: assets.add(url)
for url in assets-checks:
    r=fetch(url)
    if r['status']!=200:failures.append({'url':url,'status':r['status']})
for url,fragment in fragments:
    if url in parsed and fragment and fragment.lower() != 'top' and fragment not in parsed[url].ids: failures.append({'url':url+'#'+fragment,'error':'missing anchor target'})
for asset in ['/agentpress_og_ai_transformation_hires.png','/_next/image?url=%2Fassets%2Fbadge-soc2.png&w=256&q=75']:
    r=fetch(base+asset)
    if r['status']!=200 or not r['headers'].get('Content-Type','').startswith('image/'):failures.append({'url':asset,'error':'image runtime failed','status':r['status']})
r=fetch(base+'/this-page-must-not-exist-qa')
if r['status']!=404:failures.append({'error':'Unknown URL must return 404','status':r['status']})
report={'base':base,'connection_target_override':args.connect_to,'production_mode':args.production,'routes':results,'assets_checked':len(assets),'internal_urls_checked':len(links),'failures':failures}
output.write_text(json.dumps(report,indent=2)+'\n'); print(json.dumps(report,indent=2));sys.exit(bool(failures))
