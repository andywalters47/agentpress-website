import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '/', '/our-story', '/resources', '/resources/enterprise-deals-between-meetings',
    '/why-ai-transformation-hires-fail', '/careers', '/careers/founding-ai-gtm-engineer',
    '/careers/full-stack-ai-engineer', '/support', '/privacy', '/terms',
  ].map(path => ({ url: new URL(path, siteUrl).href }));
}
