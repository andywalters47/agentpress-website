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
  for (const declaration of splitDeclarations(style)) {
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
    if (htmlName === 'ref' || htmlName.startsWith('on')) continue;
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
        <img src={src} alt={placeholder} draggable={false} />
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

  const children = node.children.map((child, index) => renderNode(child, `${nodeKey}.${index}`));
  return createElement(node.tag, { ...toReactProps(node.props), key: nodeKey }, ...children);
}

export function NativeDesignerPage({ page }: { page: DesignerPageKey }) {
  const design = designerPages[page];
  if (!design) throw new Error(`Unknown designer page: ${page}`);

  return (
    <>
      {design.styles.map((css, index) => (
        <style key={`${page}-style-${index}`} data-designer-style={page}>{css}</style>
      ))}
      {renderNode(design.tree, page)}
      <DesignerInteractions home={page === 'home'} />
    </>
  );
}
