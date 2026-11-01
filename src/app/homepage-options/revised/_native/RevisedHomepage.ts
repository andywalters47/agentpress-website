import type { DesignerNode } from './NativeDesignerPage';
import interviewer from '../../_assets/employee-interview.png';
import apfm from '../_assets/apfm-logo.svg';
import hivemq from '../_assets/hivemq.png';
import databank from '../_assets/databank.png';
import noridian from '../_assets/noridian.png';
import subsplash from '../_assets/subsplash.svg';

type Node = DesignerNode;
const booking = 'https://calendar.app.google/AwUNqYVrSpUf1XeK8';
const clone = <T,>(value: T): T => structuredClone(value);
const hasClass = (node: Node, name: string) => (node.props.class ?? '').split(/\s+/).includes(name);
function find(node: Node, predicate: (node: Node) => boolean): Node {
  if (predicate(node)) return node;
  for (const child of node.children) {
    if (typeof child === 'string') continue;
    try { return find(child, predicate); } catch { /* Search the next sibling. */ }
  }
  throw new Error('Existing homepage template not found.');
}
const tpl = (node: Node, id: string) => find(node, part => part.props['data-dc-tpl'] === id);
function copyText(template: Node, copy: string, tag = template.tag): Node {
  return { ...clone(template), tag, children: [copy] };
}
function element(tag: string, props: Record<string, string>, children: Array<Node | string>): Node {
  return { tag, props, children };
}
function words(template: Node, copy: string): Node {
  const span = template.children.find((child): child is Node => typeof child !== 'string');
  if (!span) return copyText(template, copy);
  return { ...clone(template), children: copy.split(/\s+/).flatMap((word, i, all) => [
    copyText(span, word), ...(i < all.length - 1 ? [' '] : []),
  ]) };
}
function withoutEyebrows(node: Node): Node {
  return { ...node, children: node.children.filter(child => typeof child === 'string' || !hasClass(child, 'eyebrow')).map(child => typeof child === 'string' ? child : withoutEyebrows(child)) };
}

const faqs = [
  ['What does AgentPress do?', 'We help mid-market companies find valuable automation opportunities, build the business case and implement the workflows. Our engineers combine existing platform capabilities with custom development and ongoing support.'],
  ['We already know our pain points. Why do the interviews?', 'Your existing work gives us a starting point. Employee interviews reveal the steps, exceptions and handoffs that determine whether an automation will work and create value.'],
  ['Who checks the AI’s findings?', 'Our consultants and engineers validate the findings and business assumptions with your team. They are responsible for the recommendations and delivery.'],
  ['How much involvement does our team need?', 'The assessment includes input from up to 500 employees, discussions with up to three department leads, review of three high-volume workflows and a two-to-three-hour executive workshop.'],
  ['How long does the assessment take?', 'About three weeks, depending on participant availability. We cover discovery, workflow analysis and a presentation of the findings.'],
  ['What does the assessment include?', 'Employee interviews, prioritized opportunities, estimated ROI, a costed roadmap, a board-ready report and executive workshop, and one sample-data prototype. The assessment costs $15,000, with 50% credited toward your first build. Production builds are scoped separately.'],
  ['Do you guarantee the estimated ROI?', 'No. We validate the assumptions with your team, but actual results depend on implementation, adoption and how the resulting capacity is used.'],
  ['Can our own team implement the roadmap?', 'Yes. Your team can use the roadmap and workflow requirements to guide implementation, or you can have AgentPress build and support the workflows.'],
];

/** Native site composition, with only the three earlier treatments the user
 * explicitly requested restored and the requested numbering/logo alignment. */
export function buildRevisedHomepage(original: Node): Node {
  const tree = clone(original);
  const page = find(tree, node => node.props['data-screen-label'] === 'Home');
  page.props.id = 'top';
  page.props['data-homepage-preview'] = '';
  const prelude = page.children.find((child): child is Node => typeof child !== 'string' && child.props['data-dc-tpl'] === '19')!;
  const h1 = find(prelude, node => node.tag === 'h1');
  h1.children = ['We help ', element('span', { class: 'hp-hero-market' }, ['mid-market']), ' companies grow revenue and reduce costs with AI'];
  h1.props.style = h1.props.style.replace('font-size: 50px', 'font-size: 46px');
  const heroParagraph = find(prelude, node => node.tag === 'p');
  heroParagraph.children = ['Improve cash flow, grow margins, and cut manual work. We identify the right opportunities, then customize our prebuilt AI workflows and software for your business.'];
  heroParagraph.props.style = heroParagraph.props.style.replace('font-size: 20px', 'font-size: 18px');
  const heroCta = find(prelude, node => hasClass(node, 'btn-dark'));
  heroCta.children = ['Book a consultation'];
  const button = () => clone(heroCta);
  const intro = find(prelude, node => hasClass(node, 'introrow'));
  const left = intro.children[0] as Node;
  const logoTemplate = tpl(original, '89');
  // Ink bounds and optical centers measured from the unchanged original files.
  // Each logo sits in a uniform row; the correction removes intrinsic whitespace.
  const logos = [
    ['A Place for Mom', apfm.src, 136.38, 2.37, -1.33],
    ['HiveMQ', hivemq.src, 138.98, 3.39, .07],
    ['DataBank', databank.src, 142, 2.78, .39],
    ['Noridian Healthcare Solutions', noridian.src, 187.20, .43, 1.28],
    ['Subsplash', subsplash.src, 190, 1.38, .17],
    ['Anaconda', '/logos/anaconda.png', 148.58, .62, .21],
    ['Reis Construction', '/assets/logos/reis-construction.svg', 98, 0, 0],
  ] as const;
  left.children = [element('div', { class: 'hp-customer-logos', 'aria-label': 'Client companies' }, logos.map(([alt, src, width, x, y]) =>
    element('div', { class: 'hp-logo-frame', style: `--logo-width:${width}px; --logo-x:${x}px; --logo-y:${y}px;` }, [{
      ...clone(logoTemplate), props: { ...logoTemplate.props, src, alt,
        style: `filter: grayscale(1)${alt.startsWith('Noridian') ? ' invert(1)' : alt === 'Anaconda' ? ' brightness(.35)' : ''};` },
    }]),
  ))];
  const manifestoCopy = [
    'Our clients choose us because we put ROI first.',
    'reduce expenses with streamlined operations, support, and HR',
    'grow revenue with automated invoicing and collections',
    'and more prebuilt AI workflows, customized for your business',
  ];
  const manifestoColumn = intro.children[1] as Node;
  const manifestoTemplate = find(manifestoColumn, node => node.props['data-ap-words-wrapped'] === 'true');
  intro.props.class += ' hp-manifesto-all-headline';
  const manifestoStatements = manifestoCopy.map((copy, index) => {
    const block = words(manifestoTemplate, copy);
    block.props.class = 'hp-manifesto-statement';
    block.props.style += '; margin: 0; color: var(--ink);';
    if (index > 0) {
      block.children.filter((child): child is Node => typeof child !== 'string').slice(0, 2)
        .forEach(word => { word.props.class += ' hp-manifesto-benefit'; });
    }
    block.children.forEach(child => {
      if (typeof child !== 'string' && /^\$\d/.test(String(child.children[0]))) {
        child.props.class += ' hp-manifesto-number';
      }
      if (typeof child !== 'string' && child.children[0] === 'ROI') {
        child.props.class += ' hp-manifesto-roi';
        child.children.push(element('svg', { class: 'hp-roi-underline', viewBox: '0 0 120 18', preserveAspectRatio: 'none', 'aria-hidden': 'true' }, [
          element('path', { d: 'M3 10C33 2 78 2 116 6', pathLength: '1', class: 'hp-roi-stroke-main' }, []),
          element('path', { d: 'M10 16C43 10 84 8 110 11', pathLength: '1', class: 'hp-roi-stroke-tail' }, []),
        ]));
      }
    });
    return block;
  });
  manifestoColumn.children = [manifestoStatements[0], element('ul', { class: 'hp-manifesto-results' }, manifestoStatements.slice(1).map((block, index) => ({
    ...block, tag: 'li', props: { ...block.props, style: `${block.props.style}; margin-top: ${index ? 12 : 0}px;` },
  })))];
  const adaptedPrelude = prelude;

  const nativeFeature = find(original, node => hasClass(node, 'frow'));
  const nativeSection = tpl(original, '116');
  const nativeHeading = tpl(original, '120');
  const nativeParagraph = tpl(original, '121');
  const nativeColumn = find(original, node => hasClass(node, 'trustrow')).children[0] as Node;
  const nativeCheck = find(nativeColumn, node => hasClass(node, 'check'));
  const section = (id: string, children: Array<Node | string>): Node => ({
    ...clone(nativeSection), props: { ...nativeSection.props, id }, children,
  });
  const heading = (copy: string) => copyText(nativeHeading, copy, 'h2');
  const paragraph = (copy: string) => copyText(nativeParagraph, copy);
  const processNumber = (value: string) => element('span', { class: 'hp-process-inline-number hp-process-nav-number', 'aria-label': `Step ${value}` }, [value]);
  function fullScreen(node: Node, name: string): Node {
    const stage = clone(node);
    stage.props.class = `${stage.props.class ?? ''} hp-screen-stage hp-screen-${name}`.trim();
    return element('div', { class: 'hp-screen-track', id: `${name}-screen`, 'data-pinned-screen': name }, [stage]);
  }
  function feature(id: string, title: string, copy: string, image: Node, reverse = false): Node {
    const row = clone(nativeFeature);
    const art = clone(row.children[0] as Node);
    art.props.class += ' ap-business-art';
    if (reverse) row.props.style = 'grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);';
    art.children = [image];
    const text = row.children[1] as Node;
    const fade = text.children[0] as Node;
    const h = find(fade, node => node.tag === 'h2');
    const p = find(fade, node => node.tag === 'p');
    fade.children = [processNumber(id === 'discovery' ? '1' : '3'), copyText(h, title), copyText(p, copy)];
    row.children = reverse ? [text, art] : [art, text];
    // Existing fstage/frow responsive behavior, released from the multi-panel pin.
    const stage = find(original, node => hasClass(node, 'fstage'));
    return section(id, [{ ...clone(stage), props: { ...stage.props, style: 'position: relative; display: block; height: auto;' }, children: [row] }]);
  }
  const discovery = feature('discovery', 'AI agents interview your team to speed up discovery',
    'Our AI agents interview your employees about repetitive tasks, bottlenecks and exceptions. Our consultants validate the findings with your team before recommending what to automate.',
    element('img', { src: interviewer.src, alt: 'The original AgentPress employee workflow interviewer', style: 'width: 100%; height: 100%; object-fit: contain; display: block;' }, []));

  const timeline = clone(find(original, node => node.props['data-sc-name'] === 'DealTimeline'));
  timeline.props.id = 'evaluation';
  find(timeline, node => node.tag === 'h2').children = ['We rank automation opportunities by ROI'];
  find(timeline, node => hasClass(node, 'ap-timeline-heading')).children.unshift(processNumber('2'));
  const roiCopy = paragraph('We estimate each workflow’s impact on revenue, costs, capacity and risk, then weigh that value against the cost to build and run it. We validate the assumptions with your team and prioritize the opportunities worth investing in.');
  roiCopy.props.style += '; margin: 24px 0 0; font-size: 18px; line-height: 1.6;';
  find(timeline, node => hasClass(node, 'ap-timeline-heading')).children.push(roiCopy);
  const flight = find(timeline, node => hasClass(node, 'ap-timeline-flight-scroll'));
  flight.props.style += '; height: 697.13svh;';
  const roiBackdrop = clone(find(timeline, node => hasClass(node, 'ap-timeline-backdrop')));
  function withoutBackdrop(node: Node): Node {
    return { ...node, children: node.children
      .filter(child => typeof child === 'string' || !hasClass(child, 'ap-timeline-backdrop'))
      .map(child => typeof child === 'string' ? child : withoutBackdrop(child)) };
  }
  timeline.children = withoutBackdrop(timeline).children;
  timeline.children.forEach(child => {
    if (typeof child !== 'string') child.props.class = `${child.props.class ?? ''} hp-roi-content`.trim();
  });
  timeline.children.unshift(element('div', { class: 'hp-roi-background', 'aria-hidden': 'true' }, [roiBackdrop]));

  const reportSection = feature('deliverables', 'We deliver a roadmap and a working prototype',
    'Get prioritized workflows, estimated business value and a phased implementation plan. Test one workflow with a sample-data prototype before committing to production.',
    element('div', { 'data-homepage-block': 'roadmap-report-art' }, []));

  const caseStudy = element('section', { class: 'hp-case hp-restored-section', id: 'results' }, [
    element('div', { class: 'hp-restored-container hp-case-layout' }, [
      element('div', { class: 'hp-case-metric' }, [
        element('img', { src: apfm.src, alt: 'A Place for Mom' }, []),
        element('strong', {}, ['$2.1M']),
        element('p', { class: 'hp-case-metric-label' }, ['Labor savings']),
      ]),
      element('div', { class: 'hp-case-copy' }, [
        element('h2', {}, ['We helped find & deliver $2.1M per year in ROI for A Place for Mom']),
        element('ul', { class: 'hp-case-outcomes', 'aria-label': 'Business outcomes for A Place for Mom' }, [
          ['Reduced manual workflow times by 80%', '80% less manual workflow time'],
          ['Faster invoicing to accelerate cash collection', 'Faster invoicing and collections'],
          ['Protected revenue by catching billing errors', 'Revenue protected from billing errors'],
        ].map(([copy, compact]) => {
          const check = clone(nativeCheck);
          check.tag = 'li';
          find(check, node => node.tag === 'span').children = [
            element('span', { class: 'hp-case-outcome-full' }, [copy]),
            element('span', { class: 'hp-case-outcome-compact' }, [compact]),
          ];
          return check;
        })),
      ]),
    ]),
  ]);

  const processHeading = heading('In three weeks, we deliver a business case, a costed roadmap and a working prototype');
  processHeading.props.id = 'hp-initial-engagement-heading';
  const processIntro = section('process', [processHeading]);
  processIntro.props.class = 'hp-process-intro';
  const initialEngagement = element('section', {
    id: 'initial-engagement', class: 'hp-initial-engagement', 'aria-labelledby': 'hp-initial-engagement-heading',
  }, [element('div', { 'data-homepage-block': 'process-experience' }, [processIntro, discovery, timeline, reportSection])]);

  const checklist = [
    ['Validated automation opportunities', 'ranked by value and feasibility'],
    ['Estimated ROI', 'based on business value, build costs and running costs'],
    ['Board-ready AI transformation plan', 'with an executive workshop'],
    ['Working prototype', 'of a priority workflow, built with sample data'],
    ['Implementation roadmap', 'with priorities and a phased rollout plan'],
  ];
  const checks = checklist.map(([benefit, detail]) => {
    const check = clone(nativeCheck);
    find(check, part => part.tag === 'span').children = [element('strong', {}, [benefit]), ...(detail ? [` ${detail}`] : [])];
    return check;
  });
  const offer = element('section', { class: 'hp-offer hp-restored-section', id: 'engagement' }, [
    element('div', { class: 'hp-restored-container hp-offer-panel' }, [
      element('div', { class: 'hp-offer-intro' }, [element('h2', {}, ['Get a board-ready AI transformation plan and working prototype before committing to a full build']), button()]),
      element('div', { class: 'hp-offer-includes' }, [...checks,
        element('div', { class: 'hp-offer-price' }, [element('strong', {}, ['$15,000']), element('p', {}, ['50% credited to first build'])]),
      ]),
    ]),
  ]);
  const implementation = element('section', { 'data-homepage-block': 'implementation' }, []);

  const backOfficeSystems = [
    ['Salesforce', 'salesforce.svg', 'salesforce'],
    ['Microsoft Dynamics 365', 'dynamics-365-wordmark.svg', 'dynamics'],
    ['SAP', 'sap.svg', 'sap'],
    ['Oracle NetSuite', 'netsuite-wordmark.svg', 'netsuite'],
    ['Outlook', 'outlook.svg', 'outlook'],
    ['Workday', 'workday.png', 'workday'],
  ];
  const platform = element('section', { id: 'platform', class: 'hp-platform hp-platform-summary hp-screen-stage', 'aria-labelledby': 'hp-platform-heading' }, [
    element('div', { class: 'hp-restored-container' }, [
      element('h2', { id: 'hp-platform-heading' }, ['Our secure platform connects your SaaS and homegrown back-office systems']),
      element('div', { class: 'hp-platform-foundations' }, [
        element('div', { class: 'hp-platform-foundation', id: 'security' }, [
          element('div', { class: 'hp-platform-visual' }, [
            element('img', { class: 'hp-platform-soc-badge', src: '/assets/platform-soc-ii.svg?v=3', alt: '', width: '80', height: '80' }, []),
          ]),
          element('h3', {}, ['SOC 2 Type II audited']),
        ]),
        element('div', { class: 'hp-platform-foundation' }, [
          element('div', { class: 'hp-platform-visual hp-platform-visual--deployment', role: 'img', 'aria-label': 'AWS cloud or on-premise deployment' }, [
            element('img', { class: 'hp-platform-server-circle', src: '/assets/self-hosted-deployment.svg', alt: '', width: '80', height: '80' }, []),
            element('div', { class: 'hp-platform-aws-circle' }, [
              element('img', { src: '/assets/logos/aws.png', alt: '', width: '176', height: '92' }, []),
            ]),
          ]),
          element('h3', {}, ['Self-hosted or on-prem']),
        ]),
      ]),
      element('div', { class: 'hp-platform-integrations', id: 'business-integrations' }, [
        element('div', { class: 'hp-platform-logos', 'aria-label': 'Common back office systems' }, backOfficeSystems.map(([name, file, brand]) =>
          element('div', { class: `hp-platform-logo hp-platform-logo--${brand}` }, [
            element('img', { src: `/assets/logos/${file}`, alt: name }, []),
          ]),
        )),
      ]),
    ]),
  ]);

  const faqSection = clone(tpl(original, '162'));
  const faqRow = find(faqSection, node => hasClass(node, 'faqrow'));
  function removeFaqPrompt(node: Node) {
    node.children = node.children.filter(child => typeof child === 'string'
      || (child.props['data-dc-tpl'] !== '168'
        && !(child.children.length === 1 && child.children[0] === 'Still have questions?')));
    node.children.forEach(child => { if (typeof child !== 'string') removeFaqPrompt(child); });
  }
  removeFaqPrompt(faqRow);
  faqSection.props.id = 'faq';
  faqRow.props.id = 'business-faq';
  find(faqRow, node => node.tag === 'h2').children = [
    'Questions about working with ',
    element('img', { class: 'hp-inline-wordmark', src: '/assets/agentpress-wordmark.svg', alt: 'AgentPress' }, []),
  ];
  const faqCta = tpl(faqRow, '171');
  faqCta.children = ['Book a consultation'];
  faqCta.props = { ...button().props, style: button().props.style + '; margin-top: 20px;' };
  const disclosures = faqRow.children[1] as Node;
  const disclosureTemplate = disclosures.children[0] as Node;
  disclosures.children = faqs.map(([question, answer]) => {
    const disclosure = clone(disclosureTemplate);
    find(disclosure, node => node.tag === 'b').children = [question];
    find(disclosure, node => node.tag === 'p').children = [answer];
    return disclosure;
  });
  const closing = clone(find(original, node => node.props['data-sc-name'] === 'CtaBand'));
  find(closing, node => hasClass(node, 'ctahead')).children = ['Find your next valuable automation'];
  find(closing, node => node.tag === 'a').children = ['Book a consultation'];

  const topNav = find(page, node => node.props['data-sc-name'] === 'TopNav');
  const footer = find(page, node => node.props['data-sc-name'] === 'Footer');
  const backToTop = find(page, node => node.props['aria-label'] === 'Back to top');
  page.children = [topNav, adaptedPrelude, fullScreen(caseStudy, 'case-study'), initialEngagement, fullScreen(offer, 'offer'), implementation, fullScreen(platform, 'platform'), faqSection, closing, footer, backToTop];
  function normalizeCtas(node: Node): Node {
    if (node.tag === 'a' && node.props.href === booking) node.children = ['Book a consultation'];
    return { ...node, children: node.children.map(child => typeof child === 'string' ? child : normalizeCtas(child)) };
  }
  return normalizeCtas(withoutEyebrows(tree));
}
