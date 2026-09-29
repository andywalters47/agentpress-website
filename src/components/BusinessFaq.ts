type FaqNode = {
  tag: string;
  props: Record<string, string>;
  children: Array<FaqNode | string>;
};

const questions = [
  {
    original: 'Is AgentPress built for a team our size?',
    question: 'Is AgentPress a fit for our company?',
    answer: 'We work with midmarket companies that want to grow without adding more manual work. If your teams spend hours chasing information, processing requests, or moving data between systems, we can help identify where AI will create the most value.',
  },
  {
    original: 'What does AgentPress actually do for a seller?',
    question: 'What does AgentPress actually do?',
    answer: 'We combine AI consulting, custom engineering, and an auditable agent platform to automate business workflows. We work with your team to understand the process, build the solution, and keep it running as your needs evolve.',
  },
  {
    original: 'Does AgentPress replace our CRM?',
    question: 'Do we need to replace our existing systems?',
    answer: 'We build around the systems you already use, including CRMs, email, business applications, and homegrown software. Your agents connect those systems and carry out work across them.',
  },
  {
    original: 'What can we connect, and how long does setup take?',
    question: 'How do we get started, and how long does implementation take?',
    answer: 'We start with a consultation to identify a valuable workflow and assess your systems. From there, we define the scope, success measures, and implementation timeline based on the integrations and complexity involved.',
  },
  {
    original: 'Does AgentPress send anything without approval?',
    question: 'Can we control what agents do without approval?',
    answer: 'Yes. We configure permissions, approval steps, and escalation rules around your requirements. Agents can handle approved routine work while your team reviews sensitive actions and exceptions.',
  },
  {
    original: 'What results should we expect?',
    question: 'What results should we expect?',
    answer: 'We agree on measurable outcomes before building, such as faster turnaround, fewer manual hours, greater capacity, or shorter time to billing. We track results against that baseline and refine the workflow over time.',
  },
  {
    original: 'Is our customer and deal data secure?',
    question: 'How do you protect our data?',
    answer: 'AgentPress has completed a SOC 2 Type II audit and supports self-hosted deployment in your own environment. Access controls, defined agent permissions, and auditable actions help you maintain oversight of your data and workflows.',
  },
];

function text(node: FaqNode | string): string {
  return typeof node === 'string' ? node : node.children.map(text).join('');
}

function findHeroCta(node: FaqNode): FaqNode | undefined {
  if (String(node.props.class ?? '').split(/\s+/).includes('btn-dark')) return node;
  for (const child of node.children) {
    if (typeof child === 'string') continue;
    const found = findHeroCta(child);
    if (found) return found;
  }
}

function rewriteFaq(node: FaqNode | string, heroCta: FaqNode): FaqNode | string {
  if (typeof node === 'string') {
    return node === 'Straight answers for lean B2B sales teams evaluating AgentPress.'
      ? 'Straight answers about putting AI to work in your business.'
      : node;
  }
  if (node.tag === 'details') {
    const summary = node.children.find((child) => typeof child !== 'string' && child.tag === 'summary');
    const copy = summary && questions.find((item) => item.original === text(summary));
    if (!copy) throw new Error('Homepage FAQ template contains an unexpected question.');
    return { ...node, children: node.children.map((child) => {
      if (typeof child === 'string') return child;
      if (child.tag === 'p') return { ...child, children: [copy.answer] };
      if (child.tag !== 'summary') return child;
      return { ...child, children: child.children.map((part) => (
        typeof part !== 'string' && part.tag === 'b' ? { ...part, children: [copy.question] } : part
      )) };
    }) };
  }
  if (node.tag === 'a' && text(node) === 'Schedule Demo') {
    return {
      ...node,
      props: { ...heroCta.props, style: `${heroCta.props.style} margin-top: 20px;` },
      children: ['Book a Free Consultation'],
    };
  }
  return { ...node, children: node.children.map((child) => rewriteFaq(child, heroCta)) };
}

/** Preserve the existing FAQ disclosure behavior and reuse the hero CTA. */
export function updateHomepageFaq(node: FaqNode): FaqNode {
  const heroCta = findHeroCta(node);
  if (!heroCta) throw new Error('Homepage is missing its primary consultation CTA.');
  function visit(section: FaqNode): FaqNode {
    if (String(section.props.class ?? '').split(/\s+/).includes('faqrow')) {
      return { ...section, props: { ...section.props, id: 'business-faq' }, children: section.children.map((child) => rewriteFaq(child, heroCta!)) };
    }
    return { ...section, children: section.children.map((child) => typeof child === 'string' ? child : visit(child)) };
  }
  return visit(node);
}
