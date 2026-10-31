type StoryNode = {
  tag: string;
  props: Record<string, string>;
  children: Array<StoryNode | string>;
};

const node = (tag: string, copy: string): StoryNode => ({ tag, props: {}, children: [copy] });
const text = (part: StoryNode | string): string => typeof part === 'string' ? part : part.children.map(text).join('');

const learned = [
  node('h2', 'What we learned from the work'),
  node('p', 'We launched AgentPress on Labor Day 2025. Our early plans covered several customer-facing agents, from onboarding to renewals. The customer work that came before the launch gave us a useful starting point.'),
  node('p', 'The HiveMQ project made the value of a well-chosen workflow easy to see. It gave us a way to think about where to start with a customer: find work that matters to the business and understand what it takes to get it done.'),
  node('p', 'That means spending time with the team using the software. Their systems, approval rules, and exceptions are part of the job. We build around those details so the agent can complete useful work.'),
];

const direction = [
  node('p', "We're focused on midmarket companies that have more work than their teams can comfortably handle. Customer requests, paperwork, and system updates can take hours out of a day. That work affects how quickly a business can respond, get customers started, and collect revenue."),
  node('p', 'We begin by choosing a workflow with your team and agreeing on the result you want. Then we build the automation, connect it to your systems, and decide where a person needs to review or approve its work.'),
  node('p', 'The platform gives you a record of what each agent has done and control over what it can do next. Our team stays involved as your processes change and you find more opportunities to automate.'),
  node('p', "I want AgentPress to be the partner you can call when there's work you know AI could help with. We'll understand the process with you, take responsibility for building it, and keep improving it once it's running."),
];

const replacements: Record<string, string> = {
  'How a standing ovation changed everything': 'What customer work taught us about building useful AI',
  'Before AgentPress, we were a services firm. We built bespoke AI agents for B2B SaaS revenue teams, but we were a body shop. We built what clients asked for, collected the check, and moved on.': "Before AgentPress, we were a services firm building custom AI agents for B2B SaaS revenue teams. Each project started with a customer's process and the work they wanted to improve.",
  "I was at the company kickoff for one of our customers, HiveMQ — an enterprise SaaS business. Their executive leadership team was demoing the suite of agents we'd built for them. One by one they walked through the tools: onboarding agent, support agent, SDR agent. Polite applause. Good stuff.": "I was at the company kickoff for one of our customers, HiveMQ, an enterprise SaaS business. Their executive leadership team was demoing the agents we'd built for onboarding, support, and sales development. People applauded as they walked through the tools.",
  'Then they showed the last one — our business value assessment agent. It generates a fully quantified business case for any prospect in seconds. Custom to the account. Backed by real financial data.': 'Then they showed our business value assessment agent. It generates a quantified business case for a prospect in seconds, using financial data specific to that account.',
  "After the event, investors and partners who had been in the room started contacting me. They didn't care about the other agents. They wanted to talk about value selling.": 'After the event, investors and partners who had been in the room contacted me to talk about the business case agent and how it could help their teams.',
  "The wedge isn't agents. The wedge is value.": 'People could see how the agent would help them do their work.',
  '— Andy': 'Andy',
  'Small team, enterprise customers, and a product that changes how revenue teams prove value. If you want to own outcomes end to end and use AI as a daily operating advantage, we should talk.': "We're a small team working closely with customers to build useful AI. If you like understanding how a business works and taking responsibility for what you build, we'd like to meet you.",
};

/** Keep the founder's customer experience, then connect it to today's business. */
export function updateBusinessStory(part: StoryNode): StoryNode {
  const classes = String(part.props.class ?? '').split(/\s+/);
  if (classes.includes('story')) {
    const pivot = part.children.findIndex((child) => typeof child !== 'string' && child.tag === 'h2' && text(child) === 'What we learned the hard way');
    if (pivot >= 0) return {
      ...part,
      children: [...part.children.slice(0, pivot).map((child) => typeof child === 'string' ? child : updateBusinessStory(child)), ...learned],
    };
    if (part.children.some((child) => typeof child !== 'string' && child.tag === 'h2' && text(child) === 'Where this is going')) {
      return { ...part, children: [node('h2', "Where we're taking AgentPress")] };
    }
    if (text(part).startsWith('Not in some distant future.')) return { ...part, children: direction };
  }
  const copy = replacements[text(part)];
  if (copy) return { ...part, children: [copy] };
  return {
    ...part,
    children: part.children.filter((child) => {
      if (typeof child === 'string') return true;
      const copy = text(child);
      return !copy.startsWith('Inbound SDR AgentQualifies using value story')
        && !copy.startsWith('Nobody else is doing this.')
        && copy !== 'AI agents are going to control purchasing decisions.';
    }).map((child) => typeof child === 'string' ? child : updateBusinessStory(child)),
  };
}
