type ChromeNode = {
  tag: string;
  props: Record<string, string>;
  children: Array<ChromeNode | string>;
};

const consultationUrl = 'https://calendar.app.google/AwUNqYVrSpUf1XeK8';
const loginUrl = 'https://console.agent.press/sign-in';

function text(node: ChromeNode | string): string {
  return typeof node === 'string' ? node : node.children.map(text).join('');
}

/** Update shared desktop/mobile navigation, CTA bands and footers on every page. */
export function updateBusinessSiteChrome(node: ChromeNode, inNav = false, inFooter = false, inCta = false): ChromeNode {
  const nav = inNav || node.props['data-sc-name'] === 'TopNav';
  const footer = inFooter || node.props['data-sc-name'] === 'Footer';
  const cta = inCta || node.props['data-sc-name'] === 'CtaBand';
  const classes = String(node.props.class ?? '').split(/\s+/);
  if (node.tag === 'a' && node.props.href === consultationUrl) {
    return { ...node, children: [nav ? 'Book Consultation' : 'Book a Free Consultation'] };
  }
  if (cta && classes.includes('ctahead')) {
    return { ...node, children: ['Put AI to work in your business'] };
  }
  if (footer && classes.includes('fcol') && node.children.some((child) => typeof child !== 'string' && child.tag === 'b' && text(child) === 'Product')) {
    return {
      ...node,
      children: [
        { tag: 'b', props: {}, children: ['AgentPress'] },
        { tag: 'a', props: { href: consultationUrl, target: '_blank', rel: 'noopener' }, children: ['Book a Free Consultation'] },
        { tag: 'a', props: { href: loginUrl, target: '_blank', rel: 'noopener' }, children: ['Login'] },
      ],
    };
  }
  return {
    ...node,
    children: node.children
      .filter((child) => typeof child === 'string' || !(child.tag === 'a' && (
        child.props.href === '/pricing' || (nav && child.props.href === loginUrl)
      )))
      .map((child) => typeof child === 'string' ? child : updateBusinessSiteChrome(child, nav, footer, cta)),
  };
}
