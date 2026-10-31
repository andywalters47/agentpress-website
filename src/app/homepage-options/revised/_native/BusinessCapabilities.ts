type CapabilityNode = {
  tag: string;
  props: Record<string, string>;
  children: Array<CapabilityNode | string>;
};

const originalHeading = "AgentPress was built around the way enterprise deals move, by people who've run them.";
const currentHeading = 'AgentPress is built for midmarket companies looking to accelerate revenue';
const capabilityHeading = 'AI expertise, custom engineering, and a platform built for your business';

const capabilityCopy: Record<string, string> = {
  [originalHeading]: capabilityHeading,
  [currentHeading]: capabilityHeading,
  'Built for enterprise': 'Built for your business',
  'Buyer Collaboration & Value': 'Find the right opportunities',
  'Interactive Business Cases': 'Workflow & Process Discovery',
  'Buyer-Validated ROI Models': 'Business Impact & ROI Assessment',
  'Champion-Ready Value Stories': 'Automation Strategy & Roadmap',
  'Mutual Action Plans': 'Hands-On AI Consulting',
  'Digital Deal Rooms': 'Ongoing Optimization',
  'Rep Enablement & Execution': 'Build around your business',
  'Proactive Meeting Prep': 'Custom AI Agent Development',
  'Tailored Sales Assets': 'Existing System Integrations',
  'Automated Follow-Up': 'Your Business Rules & Logic',
  'Deal-Specific Coaching': 'End-to-End Workflow Automation',
  'Next-Best-Action Execution': 'Forward-Deployed Engineering',
  'Deal Intelligence & Governance': 'Run with confidence',
  'Complete Deal Memory': 'Auditable Agent Actions',
  'Stakeholder & Power Mapping': 'Human Review & Approvals',
  'Winning-Pattern Intelligence': 'Monitoring & Ongoing Support',
  'Process & Methodology Governance': 'Self-Hosted Deployment',
  'Risk & Momentum Signals': 'Access & Permission Controls',
};

const capabilityPillars: Record<string, string> = {
  'buyer-collaboration-value': 'opportunity-discovery',
  'rep-enablement-execution': 'business-engineering',
  'deal-intelligence-governance': 'platform-confidence',
};

function rewriteCapabilitySection(node: CapabilityNode | string): CapabilityNode | string {
  if (typeof node === 'string') return capabilityCopy[node] ?? node;

  const props = { ...node.props };
  const pillar = props['data-ap-pillar'];
  if (pillar && capabilityPillars[pillar]) props['data-ap-pillar'] = capabilityPillars[pillar];

  // Keep the existing check artwork, using its canonical token instead of a
  // raw color or the old column-specific, non-system color overrides.
  if (node.tag === 'circle' && props.fill === '#2DC4A8') props.fill = 'var(--brand-teal)';
  if (node.tag === 'path' && props.stroke === '#fff') props.stroke = 'var(--action-primary-ink)';

  const isColumnHeading = node.children.length === 1
    && typeof node.children[0] === 'string'
    && ['Buyer Collaboration & Value', 'Rep Enablement & Execution', 'Deal Intelligence & Governance'].includes(node.children[0]);
  if (isColumnHeading) {
    props.style = props.style.replace('font-weight: 500;', 'font-weight: 400;');
  }

  return { ...node, props, children: node.children.map(rewriteCapabilitySection) };
}

/** Update only the homepage capability block, retaining its authored layout. */
export function updateHomepageCapabilities(node: CapabilityNode): CapabilityNode {
  const isCapabilitySection = node.children.some((child) => (
    typeof child !== 'string'
    && child.children.some((text) => text === originalHeading || text === currentHeading)
  ));

  if (isCapabilitySection) {
    return {
      ...node,
      props: { ...node.props, id: 'business-capabilities' },
      children: node.children.map(rewriteCapabilitySection),
    };
  }

  return {
    ...node,
    children: node.children.map((child) => (
      typeof child === 'string' ? child : updateHomepageCapabilities(child)
    )),
  };
}
