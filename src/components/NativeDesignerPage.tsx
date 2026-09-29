import { createElement, type CSSProperties, type ReactNode } from 'react';
import designerPagesJson from '@/generated/designer-pages.json';
import { DesignerInteractions } from '@/components/DesignerInteractions';
import { RevenueWorkflowCards } from '@/components/RevenueWorkflowCards';
import { AutomationFeatureArt } from '@/components/AutomationArtwork';
import { updateHomepageCapabilities } from '@/components/BusinessCapabilities';
import { updateHomepageAudiences } from '@/components/BusinessAudiences';
import { updateHomepageFaq } from '@/components/BusinessFaq';
import { updateHomepageIntegrations } from '@/components/BusinessIntegrations';
import { updateBusinessSiteChrome } from '@/components/BusinessSiteChrome';
import { updateBusinessStory } from '@/components/BusinessStory';
import '@/components/BusinessAudiences.css';

export type DesignerPageKey =
  | 'home'
  | 'resources'
  | 'article'
  | 'our-story'
  | 'careers'
  | 'founding-ai-gtm-engineer'
  | 'full-stack-ai-engineer'
  | 'privacy'
  | 'terms';

type DesignerNode = {
  tag: string;
  props: Record<string, string>;
  children: Array<DesignerNode | string>;
};

type DesignerPage = {
  key: DesignerPageKey;
  title: string;
  tree: DesignerNode;
  styles: string[];
};

const designerPages = designerPagesJson as unknown as Record<DesignerPageKey, DesignerPage>;

const apfmLogoSource = 'https://www.aplaceformom.com/image/apfm-web-api/v2/static/apfm-logo-horizontal.svg';

const homepageCopyOverrides: Record<string, string> = {
  'Keep every deal moving': 'AI built around your business',
  'Complex deals rarely stall in meetings. They stall between them, waiting on a follow-up, a deck, a business case, or a next step no one has pushed forward. AgentPress delivers what the opportunity needs next before momentum disappears.': 'We identify where AI can create the most value, then build agents around your workflows, business rules, and existing systems.',
  'Make great execution repeatable': 'Automate with control and visibility',
  'Your best sellers prepare deeply, uncover value, build champions, and follow through. AgentPress turns those behaviors into a consistent operating standard across the team, so every rep executes every opportunity with the same discipline.': 'Set permissions, review exceptions, and trace agent actions. Self-hosting lets you run AgentPress in your own environment.',
  'Your best sellers prepare deeply, uncover value, build champions, and follow through. AgentPress turns those behaviors into a consistent operating standard, so every rep executes every opportunity with the same discipline.': 'Set permissions, review exceptions, and trace agent actions. Self-hosting lets you run AgentPress in your own environment.',
  'More deals with the same team': 'Grow without scaling headcount',
  'Complex opportunities require real attention, even when the pipeline is full. AgentPress handles the preparation, assets, and follow-through behind each deal, giving the same team the capacity to pursue more opportunities without lowering the standard.': 'Give your team more capacity by automating the work that slows them down. We build and evolve your agents as your business grows.',
  "AgentPress was built around the way enterprise deals move, by people who've run them.": 'AgentPress is built for midmarket companies looking to accelerate revenue',
  'What AgentPress does between meetings': 'We automate the work that keeps revenue moving',
  'Win more deals with the team you already have': 'We help B2B companies automate revenue generating work',
  'AgentPress gives every complex B2B deal an AI agent that prepares your team, uncovers the business case, and does the legwork behind every close.': 'AgentPress combines AI consulting, custom engineering, and an auditable agent platform to automate your workflows, connect your existing systems, and grow revenue.',
  'SaaS teams selling into enterprise': 'Midmarket firms using AgentPress',
};

const homepageBlockCopyOverrides: Record<string, string> = {
  'The first AI sales agent that proactively delivers what your team needs to win': 'Your business has its own way of working. Your AI should understand it.',
  'The next generation of great sellers will have great agents.': 'Your systems, processes, and people reflect years of experience. Putting AI to work starts with understanding how your business actually runs.',
  "But a great agent is not a chatbot bolted to a CRM. It's a chief of staff that understands complex B2B deals and constantly works ahead to deliver the guidance, assets, and follow-through great execution requires.": 'We work alongside your team to find the highest-value opportunities, build automation around your workflows, and keep it delivering as your business evolves.',
};

function nodeText(node: DesignerNode | string): string {
  return typeof node === 'string' ? node : node.children.map(nodeText).join('');
}

function overriddenWordChildren(node: DesignerNode, copy: string): Array<DesignerNode | string> {
  const template = node.children.find((child): child is DesignerNode => typeof child !== 'string');
  if (!template) return [copy];

  return copy.split(/\s+/).flatMap((word, index, words) => [
    { ...template, props: { ...template.props }, children: [word] },
    ...(index < words.length - 1 ? [' '] : []),
  ]);
}

const reactAttributeNames: Record<string, string> = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  srcset: 'srcSet',
  crossorigin: 'crossOrigin',
  frameborder: 'frameBorder',
  allowfullscreen: 'allowFullScreen',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-miterlimit': 'strokeMiterlimit',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
};

const booleanAttributes = new Set([
  'allowFullScreen',
  'async',
  'autoFocus',
  'autoPlay',
  'controls',
  'default',
  'defer',
  'disabled',
  'hidden',
  'loop',
  'multiple',
  'muted',
  'open',
  'playsInline',
  'readOnly',
  'required',
  'reversed',
  'scoped',
  'selected',
]);

const optimizedAssetSources: Record<string, string> = {
  '/assets/grad1.jpg': '/assets/grad1.webp',
  '/assets/grad2.jpg': '/assets/grad2.webp',
  '/assets/grad3.jpg': '/assets/grad3.webp',
  '/assets/feature-2-screenshot.png': '/assets/feature-2-screenshot.webp',
  '/assets/feature-3-screenshot.png': '/assets/feature-3-screenshot.webp',
  '/assets/badge-soc2.png': '/assets/badge-soc2.webp',
  '/assets/badge-iso.png': '/assets/badge-iso.webp',
  '/assets/badge-hipaa.png': '/assets/badge-hipaa.webp',
  '/assets/badge-gdpr.png': '/assets/badge-gdpr.webp',
  '/assets/quivly-logo.png': '/assets/quivly-logo.webp',
};

const responsiveAssetSources: Record<string, string> = {
  '/assets/feature-2-screenshot.png': '/assets/feature-2-screenshot-mobile.webp 360w, /assets/feature-2-screenshot.webp 693w',
  '/assets/feature-3-screenshot.png': '/assets/feature-3-screenshot-mobile.webp 360w, /assets/feature-3-screenshot.webp 690w',
};

const assetDimensions: Record<string, { width: number; height: number }> = {
  '/assets/grad1.jpg': { width: 521, height: 521 },
  '/assets/grad2.jpg': { width: 520, height: 521 },
  '/assets/grad3.jpg': { width: 521, height: 521 },
  '/assets/feature-2-screenshot.png': { width: 693, height: 537 },
  '/assets/feature-3-screenshot.png': { width: 690, height: 537 },
  '/assets/badge-soc2.png': { width: 121, height: 121 },
  '/assets/badge-iso.png': { width: 121, height: 121 },
  '/assets/badge-hipaa.png': { width: 121, height: 121 },
  '/assets/badge-gdpr.png': { width: 121, height: 121 },
  '/assets/quivly-logo.png': { width: 298, height: 90 },
};

function optimizedAssetSource(source: string) {
  return optimizedAssetSources[source] ?? source;
}

function optimizeStyleAssetReferences(style: string) {
  return style.replaceAll('assets/sub-footer.jpg', '/assets/sub-footer.webp');
}

function splitDeclarations(style: string) {
  const declarations: string[] = [];
  let current = '';
  let quote = '';
  let depth = 0;

  for (const character of style) {
    if (quote) {
      current += character;
      if (character === quote) quote = '';
      continue;
    }
    if (character === '"' || character === "'") {
      quote = character;
      current += character;
      continue;
    }
    if (character === '(') depth += 1;
    if (character === ')') depth = Math.max(0, depth - 1);
    if (character === ';' && depth === 0) {
      if (current.trim()) declarations.push(current);
      current = '';
      continue;
    }
    current += character;
  }
  if (current.trim()) declarations.push(current);
  return declarations;
}

function cssPropertyName(property: string) {
  if (property.startsWith('--')) return property;
  if (property.startsWith('-webkit-')) {
    return `Webkit${property.slice(8).replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase())}`;
  }
  if (property.startsWith('-moz-')) {
    return `Moz${property.slice(5).replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase())}`;
  }
  return property.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
}

function parseStyle(style: string): CSSProperties {
  const parsed: Record<string, string> = {};
  for (const declaration of splitDeclarations(optimizeStyleAssetReferences(style))) {
    const colon = declaration.indexOf(':');
    if (colon < 0) continue;
    const property = declaration.slice(0, colon).trim();
    const value = declaration.slice(colon + 1).trim();
    if (property && value) parsed[cssPropertyName(property)] = value;
  }
  return parsed as CSSProperties;
}

function toReactProps(props: Record<string, string>) {
  const converted: Record<string, unknown> = {};
  for (const [htmlName, value] of Object.entries(props)) {
    if (
      htmlName === 'ref'
      || htmlName.startsWith('on')
      || htmlName === 'data-dc-tpl'
      || htmlName === 'data-sc-name'
    ) continue;
    const reactName = reactAttributeNames[htmlName] ?? htmlName;
    if (reactName === 'style') {
      converted.style = parseStyle(value);
      continue;
    }
    converted[reactName] = booleanAttributes.has(reactName) ? value !== 'false' : value;
  }
  return converted;
}

function NativeImageSlot({ node, nodeKey }: { node: DesignerNode; nodeKey: string }) {
  const { src = '', placeholder = 'Image', radius = '12', id, style = '' } = node.props;
  const outerStyle = parseStyle(style);
  const borderRadius = node.props.shape === 'circle'
    ? '50%'
    : node.props.shape === 'pill'
      ? '9999px'
      : `${Number.parseFloat(radius) || 12}px`;

  return (
    <div
      key={nodeKey}
      id={id}
      className={`native-image-slot${src ? ' native-image-slot--filled' : ''}`}
      data-designer-image-slot=""
      style={{ ...outerStyle, borderRadius }}
      aria-label={placeholder}
    >
      {src ? (
        // Designer image slots need their exported geometry and styling intact.
        // Responsive variants and lazy loading are assigned directly here.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={optimizedAssetSource(src)}
          alt={placeholder}
          draggable={false}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="native-image-slot__empty">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <span>{placeholder}</span>
        </div>
      )}
    </div>
  );
}

function renderNode(node: DesignerNode | string, nodeKey: string): ReactNode {
  if (typeof node === 'string') {
    return nodeKey.startsWith('home.') ? (homepageCopyOverrides[node] ?? node) : node;
  }
  if (node.tag === 'image-slot') return <NativeImageSlot key={nodeKey} node={node} nodeKey={nodeKey} />;

  const isHomepageNode = nodeKey.startsWith('home.');
  const nodeClasses = String(node.props.class ?? '').split(/\s+/);
  const featureArtSources = ['/assets/feature-1-approval.svg', '/assets/feature-2-roleplay.svg', '/assets/feature-3-pipeline.svg'];
  const originalFeatureArt = isHomepageNode ? node.children.find((child) => (
    typeof child !== 'string' && child.tag === 'object' && featureArtSources.includes(child.props.data)
  )) : undefined;
  if (originalFeatureArt && typeof originalFeatureArt !== 'string') {
    return <div {...toReactProps(node.props)} className={`${node.props.class ?? ''} ap-business-art`} key={nodeKey}>
      <AutomationFeatureArt step={featureArtSources.indexOf(originalFeatureArt.props.data)} />
    </div>;
  }
  if (isHomepageNode && nodeClasses.includes('ap-timeline-original-overview')) return null;
  if (isHomepageNode && nodeClasses.includes('ap-timeline-scene')) {
    const backdrop = node.children.find((child) => typeof child !== 'string' && String(child.props.class ?? '').includes('ap-timeline-backdrop'));
    return <div {...toReactProps(node.props)} className="ap-timeline-scene ap-revenue-scene" key={nodeKey}>
      {backdrop ? renderNode(backdrop, `${nodeKey}.backdrop`) : null}
      <RevenueWorkflowCards key={`${nodeKey}.cards`} />
    </div>;
  }
  const blockCopyOverride = isHomepageNode ? homepageBlockCopyOverrides[nodeText(node)] : undefined;
  const isHeroCta = isHomepageNode && String(node.props.class ?? '').split(/\s+/).includes('btn-dark');
  const isCustomerLogoWall = isHomepageNode && node.children.some((child) => (
    typeof child !== 'string'
    && child.tag === 'img'
    && child.props.src === '/assets/logos.svg'
  ));
  const hasApfmLogo = isCustomerLogoWall && node.children.some((child) => (
    typeof child !== 'string'
    && child.tag === 'img'
    && child.props.src === apfmLogoSource
  ));
  const apfmLogoNode: DesignerNode = {
    tag: 'img',
    props: {
      src: apfmLogoSource,
      alt: 'A Place for Mom',
      width: '493',
      height: '169',
      style: 'position: absolute; left: 0%; width: 18%; top: 0px; height: 100%; object-fit: contain; filter: grayscale(1) contrast(1.1);',
    },
    children: [],
  };
  const childNodes = blockCopyOverride
    ? overriddenWordChildren(node, blockCopyOverride)
    : isHeroCta && nodeText(node) === 'Schedule Demo'
      ? ['Book a Free Consultation']
      : isCustomerLogoWall && !hasApfmLogo
        ? [apfmLogoNode, ...node.children.filter((child) => (
          typeof child === 'string' || child.props.src !== '/assets/quivly-logo.png'
        ))]
        : isCustomerLogoWall
          ? node.children.filter((child) => (
            typeof child === 'string' || child.props.src !== '/assets/quivly-logo.png'
          ))
          : node.children;

  if (node.tag === 'object' && String(node.props.data ?? '').endsWith('.svg')) {
    const objectProps = toReactProps(node.props);
    delete objectProps.data;
    delete objectProps.type;
    const source = String(node.props.data);
    return createElement('img', {
      ...objectProps,
      key: nodeKey,
      className: `${String(objectProps.className ?? '')} ap-lazy-svg-object`.trim(),
      src: source,
      alt: String(objectProps['aria-label'] ?? ''),
      loading: 'lazy',
      decoding: 'async',
    });
  }

  const children = childNodes.map((child, index) => renderNode(child, `${nodeKey}.${index}`));
  const reactProps = toReactProps(node.props);
  if (isHomepageNode && nodeClasses.includes('ap-timeline-heading')) {
    reactProps.id = 'revenue-workflows';
  }
  if (isHomepageNode && nodeClasses.includes('ap-timeline-flight-scroll')) {
    reactProps.className = `${reactProps.className} ap-revenue-workflows`;
    reactProps['aria-label'] = 'Six revenue automation workflows';
  }
  if (isCustomerLogoWall) {
    reactProps.style = {
      ...(reactProps.style as CSSProperties),
      width: '780px',
      overflow: 'hidden',
    };
  }
  if (node.tag === 'img') {
    const originalSource = String(reactProps.src ?? '');
    const className = String(reactProps.className ?? '');
    const isHeroBackground = className.includes('ap-hero-background');
    const isHeroLayer = className.includes('ap-hero-layer');
    const isNavigationLogo = originalSource.includes('AP_landscape_for_light_bg.svg');
    if (isHomepageNode && originalSource === '/assets/logos.svg') {
      reactProps.style = {
        ...(reactProps.style as CSSProperties),
        width: '91.3659%',
        marginLeft: '20%',
      };
    }
    reactProps.src = optimizedAssetSource(originalSource);
    if (responsiveAssetSources[originalSource]) {
      reactProps.srcSet = responsiveAssetSources[originalSource];
      reactProps.sizes = '(max-width: 600px) 92vw, 639px';
    }
    if (assetDimensions[originalSource]) {
      reactProps.width ??= assetDimensions[originalSource].width;
      reactProps.height ??= assetDimensions[originalSource].height;
    }
    reactProps.loading = isHeroBackground || isHeroLayer || isNavigationLogo ? 'eager' : 'lazy';
    reactProps.decoding = isHeroBackground ? 'sync' : 'async';
    reactProps.fetchPriority = isHeroBackground ? 'high' : isHeroLayer ? 'low' : 'auto';
  }
  if (node.tag === 'iframe') reactProps.loading = 'lazy';
  return createElement(node.tag, { ...reactProps, key: nodeKey }, ...children);
}

export function NativeDesignerPage({ page }: { page: DesignerPageKey }) {
  const design = designerPages[page];
  if (!design) throw new Error(`Unknown designer page: ${page}`);

  return (
    <>
      {design.styles.filter((css) => (
        !css.includes('html.sc-dc-streaming') && css.trim() !== 'x-dc{display:none!important}'
      )).map((css, index) => (
        <style key={`${page}-style-${index}`} data-designer-style={page}>{css}</style>
      ))}
      {renderNode(updateBusinessSiteChrome(page === 'home'
        ? updateHomepageIntegrations(updateHomepageFaq(updateHomepageAudiences(updateHomepageCapabilities(design.tree))))
        : page === 'our-story' ? updateBusinessStory(design.tree) : design.tree), page)}
      <DesignerInteractions home={page === 'home'} />
    </>
  );
}
