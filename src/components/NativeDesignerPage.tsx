import { createElement, type CSSProperties, type ReactNode } from 'react';
import designerPagesJson from '@/generated/designer-pages.json';
import { DesignerInteractions } from '@/components/DesignerInteractions';

export type DesignerPageKey =
  | 'home'
  | 'pricing'
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
  if (typeof node === 'string') return node;
  if (node.tag === 'image-slot') return <NativeImageSlot key={nodeKey} node={node} nodeKey={nodeKey} />;

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

  const children = node.children.map((child, index) => renderNode(child, `${nodeKey}.${index}`));
  const reactProps = toReactProps(node.props);
  if (node.tag === 'img') {
    const originalSource = String(reactProps.src ?? '');
    const className = String(reactProps.className ?? '');
    const isHeroBackground = className.includes('ap-hero-background');
    const isHeroLayer = className.includes('ap-hero-layer');
    const isNavigationLogo = originalSource.includes('AP_landscape_for_light_bg.svg');
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
      {renderNode(design.tree, page)}
      <DesignerInteractions home={page === 'home'} />
    </>
  );
}
