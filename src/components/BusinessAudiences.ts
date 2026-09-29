type AudienceNode = {
  tag: string;
  props: Record<string, string>;
  children: Array<AudienceNode | string>;
};

const audiences = [
  {
    title: 'Customer-facing teams',
    description: 'Spend more time helping customers and winning business. AgentPress handles the research, paperwork, system updates, and follow-through that fill your day.',
    benefits: [
      'More time for customers and relationships',
      'Less manual work across disconnected systems',
      'Faster responses and follow-through',
    ],
  },
  {
    title: 'Operations & finance teams',
    description: 'Keep work moving across departments and systems. AgentPress follows your business rules, completes routine tasks, and brings exceptions to the right person.',
    benefits: [
      'Fewer bottlenecks and manual handoffs',
      'Less chasing information and correcting records',
      'Clear visibility into completed work and exceptions',
    ],
  },
  {
    title: 'Business leaders',
    description: 'Turn AI into measurable business results. We help you prioritize opportunities, implement the workflows, and track their impact as your business grows.',
    benefits: [
      'More capacity without proportional hiring',
      'Investment tied to business outcomes',
      'One accountable partner from strategy through delivery',
    ],
  },
];

function childNode(node: AudienceNode, index: number): AudienceNode {
  const child = node.children[index];
  if (typeof child === 'string' || !child) throw new Error('Audience section template is missing an element.');
  return child;
}

function benefitRow(template: AudienceNode, benefit: string): AudienceNode {
  return {
    ...template,
    children: template.children.map((child) => {
      if (typeof child === 'string') return child;
      if (child.tag === 'span') return { ...child, children: [benefit] };
      if (child.tag !== 'svg') return child;
      return {
        ...child,
        children: child.children.map((glyph) => {
          if (typeof glyph === 'string') return glyph;
          if (glyph.tag === 'circle') return { ...glyph, props: { ...glyph.props, fill: 'var(--ink)' } };
          if (glyph.tag === 'path') return { ...glyph, props: { ...glyph.props, stroke: 'var(--action-primary-ink)' } };
          return glyph;
        }),
      };
    }),
  };
}

function audienceCards(row: AudienceNode): AudienceNode {
  const template = childNode(row, 0);
  const title = childNode(template, 0);
  const description = childNode(template, 1);
  const benefits = childNode(template, 2);
  const check = childNode(benefits, 0);

  return {
    ...row,
    props: { ...row.props, class: `${row.props.class} ap-business-audience-grid` },
    children: audiences.map((audience) => ({
      ...template,
      props: { class: 'ap-business-audience-card' },
      children: [
        { ...title, children: [audience.title] },
        { ...description, children: [audience.description] },
        {
          ...benefits,
          props: { ...benefits.props, class: 'ap-business-audience-benefits' },
          children: audience.benefits.map((benefit) => benefitRow(check, benefit)),
        },
      ],
    })),
  };
}

/** Retain the homepage's role-card anatomy while expanding it to three teams. */
export function updateHomepageAudiences(node: AudienceNode): AudienceNode {
  const isAudienceSection = node.children.some((child) => (
    typeof child !== 'string'
    && child.children.includes('One system for the whole revenue team')
  ));

  if (isAudienceSection) {
    return {
      ...node,
      props: {
        ...node.props,
        id: 'business-audiences',
        class: `${node.props.class ?? ''} ap-business-audiences`.trim(),
      },
      children: node.children.flatMap<AudienceNode | string>((child) => {
        if (typeof child === 'string') return [child];
        if (child.children.includes("Whether you're closing in three weeks or nine months")) return [];
        if (child.children.includes('One system for the whole revenue team')) {
          return [{ ...child, children: ['AI built around the work your teams do every day.'] }];
        }
        if (String(child.props.class ?? '').split(/\s+/).includes('rolesrow')) return [audienceCards(child)];
        return [child];
      }),
    };
  }

  return {
    ...node,
    children: node.children.map((child) => (
      typeof child === 'string' ? child : updateHomepageAudiences(child)
    )),
  };
}
