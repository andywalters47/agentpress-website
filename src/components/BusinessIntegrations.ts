type IntegrationNode = {
  tag: string;
  props: Record<string, string>;
  children: Array<IntegrationNode | string>;
};

// Restore the earlier wall and extend it with Nango-supported Microsoft systems, without
// importing that branch's unrelated product-page and generated-page changes.
const addedIntegrations = [
  { alt: 'monday.com', src: '/assets/logos/monday.png' },
  { alt: 'Apollo', src: '/assets/logos/apollo.png' },
  { alt: 'CrustData', src: '/assets/logos/crustdata-wordmark.png' },
  { alt: 'Clay', src: '/assets/logos/clay.png' },
  { alt: 'HeyReach', src: '/assets/logos/heyreach.svg' },
  { alt: 'Instantly', src: '/assets/logos/instantly.svg' },
  { alt: 'Aimfox', src: '/assets/logos/aimfox-wordmark.png' },
  { alt: 'Read AI', src: '/assets/logos/read-ai.svg' },
  { alt: 'Microsoft Dynamics 365', src: '/assets/logos/microsoft-dynamics-365.svg' },
  { alt: 'SharePoint', src: '/assets/logos/sharepoint-online.svg' },
];

const rows = [
  ['Salesforce', 'HubSpot', 'Microsoft Dynamics 365', 'monday.com', 'Apollo', 'CrustData', 'Clay'],
  ['HeyReach', 'Instantly', 'Aimfox', 'Gmail', 'Google Calendar', 'Outlook'],
  ['Slack', 'Confluence', 'SharePoint', 'Fireflies.ai', 'Gong', 'Granola', 'Read AI'],
];

function find(node: IntegrationNode, predicate: (node: IntegrationNode) => boolean): IntegrationNode | undefined {
  if (predicate(node)) return node;
  for (const child of node.children) {
    if (typeof child === 'string') continue;
    const match = find(child, predicate);
    if (match) return match;
  }
}

function hasClass(node: IntegrationNode, name: string) {
  return String(node.props.class ?? '').split(/\s+/).includes(name);
}

function restoreGrid(section: IntegrationNode): IntegrationNode {
  const cards = new Map<string, IntegrationNode>();
  function collect(node: IntegrationNode) {
    if (hasClass(node, 'ap-integration-tool')) {
      const logo = find(node, (part) => part.tag === 'img');
      if (logo?.props.alt) cards.set(logo.props.alt, node);
    }
    node.children.forEach((child) => { if (typeof child !== 'string') collect(child); });
  }
  collect(section);
  const template = cards.get('Salesforce');
  if (!template) throw new Error('Homepage is missing its integration card template.');
  addedIntegrations.forEach(({ alt, src }) => cards.set(alt, {
    ...template,
    props: { ...template.props, class: `ap-integration-tool${alt === 'Microsoft Dynamics 365' || alt === 'SharePoint' ? ' ap-integration-tool--microsoft' : ''}` },
    children: alt === 'Microsoft Dynamics 365' || alt === 'SharePoint'
      ? [
        { tag: 'img', props: { src, alt, style: 'width: 42px; height: 42px; display: block;' }, children: [] },
        { tag: 'span', props: { 'aria-hidden': 'true', style: 'font-size: 11px; line-height: 1.2; color: var(--ink-body);' }, children: [alt === 'SharePoint' ? 'SharePoint' : 'Dynamics 365'] },
      ]
      : [{ tag: 'img', props: { src, alt, style: 'width: 88.6px; display: block;' }, children: [] }],
  }));
  const grid = find(section, (part) => part.children.some((row) => (
    typeof row !== 'string' && row.children.some((card) => typeof card !== 'string' && hasClass(card, 'ap-integration-tool'))
  )));
  if (!grid) throw new Error('Homepage is missing its integration grid.');
  const integrationGrid = grid;
  const firstRow = grid.children.find((child) => typeof child !== 'string');
  const divider = typeof firstRow !== 'string' ? firstRow?.children[0] : undefined;
  if (!divider || typeof divider === 'string') throw new Error('Integration grid is missing its row divider.');
  const rowDivider = divider;

  function visit(node: IntegrationNode): IntegrationNode {
    if (node.children.length === 1 && node.children[0] === 'Connect the tools you already use, in 10 minutes or less') {
      return { ...node, children: ['Built around the systems your business already uses.'] };
    }
    if (node === integrationGrid) return {
      ...node,
      props: { ...node.props, class: 'ap-integrations-grid', style: 'width: 1188px; height: 274px; transform-origin: left top; display: flex; flex-direction: column; gap: 17px;' },
      children: rows.map((names, index) => ({
        tag: 'div',
        props: {
          class: 'ap-integrations-row',
          style: `position: relative; width: ${index === 1 ? 1064 : 1188}px; ${index === 1 ? 'margin-left: 62px;' : ''} display: flex; justify-content: space-between;`,
        },
        children: [rowDivider, ...names.map((name) => {
          const card = cards.get(name);
          if (!card) throw new Error(`Missing integration: ${name}`);
          return card;
        })],
      })),
    };
    const isViewport = node.children.includes(integrationGrid);
    return {
      ...node,
      props: isViewport ? { ...node.props, class: 'ap-integrations-viewport', style: 'height: 274px;' } : node.props,
      children: node.children.map((child) => typeof child === 'string' ? child : visit(child)),
    };
  }
  return { ...visit(section), props: { ...section.props, id: 'business-integrations' } };
}

export function updateHomepageIntegrations(node: IntegrationNode): IntegrationNode {
  if (hasClass(node, 'ap-integrations-section')) return restoreGrid(node);
  return { ...node, children: node.children.map((child) => typeof child === 'string' ? child : updateHomepageIntegrations(child)) };
}
