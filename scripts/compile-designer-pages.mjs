import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const captureDirectory = process.argv[2] ?? '/tmp/agentpress-native-capture-full';
const projectRoot = path.resolve(import.meta.dirname, '..');
const outputPath = path.join(projectRoot, 'src/generated/designer-pages.json');
const legacyHomepagePath = path.resolve(projectRoot, '..', 'agentpress-website-new-3.legacy-index.html');
const manifestoCopy = {
  title: 'AgentPress is the first AI sales agent that proactively delivers what your team needs to win.',
  paragraphs: [
    'The next generation of great sellers will have great agents.',
    "But a great agent is not a chatbot bolted to a CRM. It's a chief of staff that understands complex B2B deals and constantly works ahead to deliver the guidance, assets, and follow-through great execution requires.",
  ],
};
const heroDescription = 'AgentPress gives every complex B2B deal an AI agent that prepares your team, uncovers the business case, and does the legwork behind every close.';
const featureCopy = [
  {
    number: '01',
    title: 'Keep every deal moving',
    paragraph: 'Complex deals rarely stall in meetings. They stall between them, waiting on a follow-up, a deck, a business case, or a next step no one has pushed forward. AgentPress delivers what the opportunity needs next before momentum disappears.',
  },
  {
    number: '02',
    title: 'Make great execution repeatable',
    paragraph: 'Your best sellers prepare deeply, uncover value, build champions, and follow through. AgentPress turns those behaviors into a consistent operating standard, so every rep executes every opportunity with the same discipline.',
  },
  {
    number: '03',
    title: 'Carry more deals with the same team',
    paragraph: 'Complex opportunities require real attention, even when the pipeline is full. AgentPress handles the preparation, assets, and follow-through behind each deal, giving the same team the capacity to pursue more opportunities without lowering the standard.',
  },
];
const featureArt = [
  {
    src: '/assets/feature-1-approval.svg',
    label: 'Agent approval flow for a follow-up on the AlertMedia opportunity',
  },
  {
    src: '/assets/feature-2-roleplay.svg',
    label: 'Roleplay session for an upcoming enterprise meeting',
  },
  {
    src: '/assets/feature-3-pipeline.svg',
    label: 'Pipeline overview with the AlertMedia opportunity assessment',
  },
];
const timelineCardTitles = [
  'Pre-call research and roleplay',
  'Deck preparation',
  'Live on-screen assistance',
  'Post-call coaching and scorecard',
  'Automatic stakeholder map',
  'Follow-up emails',
  'One-page value hypothesis',
  'CFO-ready business case',
  'Deal room and action plan',
  'Quiet deal nudges',
];
const removedTimelineCardTitles = new Set([
  'Live on-screen assistance',
  'One-page value hypothesis',
  'Quiet deal nudges',
]);
const roleCopy = {
  Sellers: {
    paragraph: 'AgentPress works ahead of every opportunity. It prepares you for each meeting, turns discovery into a credible business case, and delivers the follow-through that keeps complex deals moving.',
    bullets: [
      'Walk into every meeting prepared',
      'Turn discovery into a compelling business case',
      'Keep stakeholders and next steps moving',
    ],
  },
  'Sales managers': {
    paragraph: 'AgentPress turns the habits of your best sellers into a consistent operating standard across the team. See where every deal is strong, where it’s exposed, and what needs to happen next, while the agent works ahead to close the gaps.',
    bullets: [
      'Consistent execution across every rep',
      'Earlier visibility into risk and deal gaps',
      'Coaching focused on the moments that matter',
    ],
  },
};
const trustCopy = {
  'Buyer Collaboration & Value': [
    'Interactive Business Cases',
    'Buyer-Validated ROI Models',
    'Champion-Ready Value Stories',
    'Mutual Action Plans',
    'Digital Deal Rooms',
  ],
  'Rep Enablement & Execution': [
    'Proactive Meeting Prep',
    'Tailored Sales Assets',
    'Automated Follow-Up',
    'Deal-Specific Coaching',
    'Next-Best-Action Execution',
  ],
  'Deal Intelligence & Governance': [
    'Complete Deal Memory',
    'Stakeholder & Power Mapping',
    'Risk & Momentum Signals',
    'Process & Methodology Governance',
    'Winning-Pattern Intelligence',
  ],
};
const faqCopy = [
  {
    question: 'Is AgentPress built for a team our size?',
    answer: 'Yes. AgentPress is designed to give lean B2B sales teams the leverage of a much larger revenue organization, especially when every seller is managing complex, multi-stakeholder deals.',
  },
  {
    question: 'What does AgentPress actually do for a seller?',
    answer: 'It works ahead across the deal: preparing call briefs, drafting follow-up, building buyer-ready assets, tracking stakeholders and next steps, and surfacing the guidance your team needs before a deal slips.',
  },
  {
    question: 'Does AgentPress replace our CRM?',
    answer: 'AgentPress can be your complete standalone CRM. If your team already uses HubSpot or Salesforce, AgentPress can also work with either platform as the CRM system of record while it handles the work around the deal.',
  },
  {
    question: 'What can we connect, and how long does setup take?',
    answer: 'You can connect the core tools already in your workflow, including Salesforce or HubSpot, email, calendar, Slack, and meeting intelligence platforms. Most teams can connect the essentials in 10 minutes or less.',
  },
  {
    question: 'Does AgentPress send anything without approval?',
    answer: 'Not unless you want it to. Customer-facing communication can stay in draft for a seller to review, while your team chooses exactly where approved automation should run.',
  },
  {
    question: 'What results should we expect?',
    answer: 'The immediate gains are less seller busywork, fewer dropped follow-ups, stronger buyer-ready materials, and clearer next steps on every deal. Over time, that should translate into faster cycles and more consistent execution across the pipeline.',
  },
  {
    question: 'Is our customer and deal data secure?',
    answer: 'Yes. AgentPress is SOC 2 Type II certified and built for the security expectations that come with selling into enterprise accounts.',
  },
];

function walk(node, visit) {
  if (!node || typeof node === 'string') return;
  visit(node);
  for (const child of node.children ?? []) walk(child, visit);
}

function textContent(node) {
  if (typeof node === 'string') return node;
  return (node.children ?? []).map(textContent).join('');
}

function findFirst(root, predicate) {
  let match;
  walk(root, (node) => {
    if (!match && predicate(node)) match = node;
  });
  return match;
}

function findParent(root, target) {
  let match;
  const visit = (node) => {
    if (!node || typeof node === 'string' || match) return;
    if ((node.children ?? []).includes(target)) {
      match = node;
      return;
    }
    for (const child of node.children ?? []) visit(child);
  };
  visit(root);
  return match;
}

function hasClass(node, className) {
  return String(node?.props?.class ?? '').split(/\s+/).includes(className);
}

function addClass(node, className) {
  if (!node || typeof node === 'string' || hasClass(node, className)) return;
  node.props ??= {};
  node.props.class = [node.props.class, className].filter(Boolean).join(' ');
}

function replaceText(node, value) {
  if (!node || typeof node === 'string') return;
  node.children = [value];
}

function removeNodes(root, predicate) {
  if (!root || typeof root === 'string') return;
  root.children = (root.children ?? []).filter((child) => (
    typeof child === 'string' || !predicate(child)
  ));
  for (const child of root.children) removeNodes(child, predicate);
}

function removeTextFragment(root, fragment) {
  if (!root || typeof root === 'string') return;
  root.children = (root.children ?? []).map((child) => (
    typeof child === 'string' && child.includes(fragment)
      ? child.replace(fragment, '').trim()
      : child
  ));
  for (const child of root.children) removeTextFragment(child, fragment);
}

function decodeHtmlText(value) {
  return value
    .replace(/<br\s*\/?\s*>/gi, '\n')
    .replace(/&nbsp;/gi, '\u00a0')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/<[^>]+>/g, '');
}

function extractLegacyHomepageHero(html) {
  const hero = html.match(/<h1 class="h1 herorise" style="([^"]+)">([\s\S]*?)<\/h1>/);

  if (!hero) {
    throw new Error(`Could not extract the authoritative homepage hero from ${legacyHomepagePath}`);
  }

  return {
    heroStyle: hero[1],
    heroTitle: decodeHtmlText(hero[2]),
  };
}

function wordNodes(text, className, style) {
  return text.split(/(\s+)/).filter(Boolean).map((part) => {
    if (/^\s+$/.test(part)) return part;
    return { tag: 'span', props: { class: className, style }, children: [part] };
  });
}

function faqNode({ question, answer }) {
  return {
    tag: 'details',
    props: { class: 'faq' },
    children: [
      {
        tag: 'summary',
        props: {},
        children: [
          { tag: 'b', props: {}, children: [question] },
          { tag: 'i', props: { class: 'ti ti-plus cl' }, children: [] },
          { tag: 'i', props: { class: 'ti ti-minus op' }, children: [] },
        ],
      },
      { tag: 'p', props: {}, children: [answer] },
    ],
  };
}

function pricingCheckNode(label) {
  return {
    tag: 'div',
    props: { class: 'check' },
    children: [
      {
        tag: 'svg',
        props: {
          width: '17',
          height: '17',
          viewBox: '0 0 17 17',
          style: 'flex: 0 0 auto;',
          'aria-hidden': 'true',
        },
        children: [
          {
            tag: 'circle',
            props: { cx: '8.5', cy: '8.5', r: '8', fill: '#212121' },
            children: [],
          },
          {
            tag: 'path',
            props: {
              d: 'M5 8.7 L7.4 11 L12 6.3',
              fill: 'none',
              stroke: '#fff',
              'stroke-width': '1.6',
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round',
            },
            children: [],
          },
        ],
      },
      { tag: 'span', props: {}, children: [label] },
    ],
  };
}

function pricingPlanCard({ name, price, features, featured = false, enterprise = false }) {
  return {
    tag: 'div',
    props: {
      style: [
        'flex: 1 1 0%',
        'min-width: 0',
        'border-radius: 24px',
        'padding: 40px 32px',
        'display: flex',
        'flex-direction: column',
        featured
          ? 'background: linear-gradient(135deg, rgba(127, 100, 170, 0.086), rgba(234, 238, 233, 0.773))'
          : 'background: linear-gradient(135deg, rgba(234, 238, 233, 0.333), rgba(127, 100, 170, 0.035))',
      ].join('; '),
    },
    children: [
      {
        tag: 'span',
        props: {
          style: `font-size: 22px; font-weight: 600; letter-spacing: 0.02em; color: ${featured ? 'rgb(129, 74, 222)' : 'var(--ink)'};`,
        },
        children: [name],
      },
      {
        tag: 'div',
        props: { style: 'margin-top: 28px;' },
        children: [
          {
            tag: 'div',
            props: { style: 'display: flex; align-items: baseline; flex-wrap: wrap; gap: 8px;' },
            children: [
              {
                tag: 'span',
                props: { class: 'h1', style: `font-size: ${enterprise ? '28px' : '32px'};` },
                children: [price],
              },
              {
                tag: 'span',
                props: { style: 'font-size: 12px; line-height: 1.4; color: var(--ink-muted); white-space: nowrap;' },
                children: ['per workspace, per month'],
              },
            ],
          },
        ],
      },
      {
        tag: 'div',
        props: { style: 'margin-top: 28px; flex: 1 1 0%;' },
        children: features.map(pricingCheckNode),
      },
      {
        tag: 'a',
        props: {
          class: enterprise ? 'pricing-contact' : featured ? 'btn-dark' : 'btn-start',
          href: enterprise
            ? 'https://calendar.app.google/AwUNqYVrSpUf1XeK8'
            : 'https://console.agent.press/sign-up',
          target: '_blank',
          rel: 'noopener',
          style: featured
            ? 'display: inline-flex; align-self: flex-start; align-items: center; justify-content: center; background: var(--web-dark-end); color: var(--on-dark); border-radius: 11px; padding: 15px 26px; font-size: 16px; font-weight: 500; cursor: pointer; margin-top: 32px;'
            : 'display: inline-flex; align-self: flex-start; align-items: center; justify-content: center; background: var(--brand-mint); color: rgba(33, 33, 33, 0.8); border-radius: 11px; padding: 15px 26px; font-size: 16px; font-weight: 500; cursor: pointer; margin-top: 32px;',
        },
        children: [enterprise ? 'Schedule Demo' : 'Start Now'],
      },
    ],
  };
}

function applySitewideCtaCopy(page) {
  walk(page.tree, (node) => {
    if (node.tag !== 'a' || node.props?.href !== 'https://calendar.app.google/AwUNqYVrSpUf1XeK8') return;
    const primary = hasClass(node, 'btn-start') || hasClass(node, 'btn-dark');
    replaceText(node, primary ? 'Start Now' : 'Schedule Demo');
    if (primary) node.props.href = 'https://console.agent.press/sign-up';
  });
}

function applySitewideNavigationOverrides(page) {
  const topNav = findFirst(page.tree, (node) => node.props?.['data-sc-name'] === 'TopNav');
  if (!topNav) throw new Error(`The resolved ${page.key} page is missing its top navigation.`);

  // Temporarily hide Resources and Docs from the desktop and mobile menus.
  // Their source content and routes remain intact so they can be restored.
  removeNodes(topNav, (node) => (
    node.tag === 'a'
    && ['/resources', 'https://docs.agent.press/'].includes(node.props?.href)
  ));
}

function applySitewideFooterOverrides(page) {
  const footer = findFirst(page.tree, (node) => node.props?.['data-sc-name'] === 'Footer');
  if (!footer) throw new Error(`The resolved ${page.key} page is missing its footer.`);

  // Keep the designer-authored News column in the source export while hiding
  // it from the current site.
  removeNodes(footer, (node) => (
    hasClass(node, 'fcol')
    && node.children.some((child) => typeof child !== 'string' && textContent(child) === 'News')
  ));
  removeNodes(footer, (node) => (
    node.tag === 'a' && node.props?.href === 'https://docs.agent.press/'
  ));

  const socStatement = findFirst(footer, (node) => (
    node.tag === 'a' && textContent(node) === 'SOC 2 Type II'
  ));
  if (!socStatement) throw new Error(`The resolved ${page.key} footer is missing its SOC 2 statement.`);
  socStatement.tag = 'span';
  delete socStatement.props.href;
}

function applyOurStoryOverrides(page) {
  const tractionHeading = findFirst(page.tree, (node) => textContent(node) === 'Six months of traction');
  const tractionCopy = tractionHeading && findParent(page.tree, tractionHeading);
  const storyLayout = tractionCopy && findParent(page.tree, tractionCopy);
  if (!tractionHeading || !tractionCopy || !storyLayout) {
    throw new Error('The resolved Our Story page is missing its traction section.');
  }

  const tractionHeadingIndex = tractionCopy.children.indexOf(tractionHeading);
  tractionCopy.children = tractionCopy.children.slice(0, tractionHeadingIndex);

  const tractionCopyIndex = storyLayout.children.indexOf(tractionCopy);
  const tractionChart = storyLayout.children[tractionCopyIndex + 1];
  const postTractionCopy = storyLayout.children[tractionCopyIndex + 2];
  if (
    typeof tractionChart === 'string'
    || typeof postTractionCopy === 'string'
    || !textContent(tractionChart).includes('Contract ARR')
    || !textContent(postTractionCopy).startsWith('For the first time')
  ) {
    throw new Error('The resolved Our Story traction section structure changed unexpectedly.');
  }
  storyLayout.children = storyLayout.children.filter((child) => child !== tractionChart);
  postTractionCopy.children = postTractionCopy.children.filter((child) => (
    typeof child === 'string'
    || (
      !textContent(child).startsWith('For the first time')
      && !textContent(child).startsWith('When you give a revenue team')
    )
  ));
}

function applyHomepageOverrides(page, legacyHero) {
  removeNodes(page.tree, (node) => (
    String(node.props?.class ?? '').split(/\s+/).includes('dtpin')
  ));

  const heroRow = findFirst(page.tree, (node) => (
    String(node.props?.class ?? '').split(/\s+/).includes('heropin')
  ));
  if (!heroRow) throw new Error('The resolved homepage is missing its hero row.');
  heroRow.props.style = heroRow.props.style.replace(
    'margin: 0px auto;',
    'margin: 0px auto 15svh;',
  );

  const heroTitle = findFirst(page.tree, (node) => (
    node.tag === 'h1' && textContent(node) === 'Win more deals with the team you already have.'
  ));
  if (!heroTitle) throw new Error('The resolved homepage is missing its hero heading.');
  heroTitle.props.style = legacyHero.heroStyle;
  heroTitle.children = [legacyHero.heroTitle];

  const heroParagraph = findFirst(page.tree, (node) => (
    node.tag === 'p' && textContent(node).startsWith('AgentPress gives every deal an AI agent')
  ));
  if (!heroParagraph) throw new Error('The resolved homepage is missing its hero description.');
  replaceText(heroParagraph, heroDescription);

  const heroCtas = findFirst(page.tree, (node) => hasClass(node, 'heroctas'));
  const primaryHeroCta = heroCtas && findFirst(heroCtas, (node) => hasClass(node, 'btn-dark'));
  const secondaryHeroCta = heroCtas && findFirst(heroCtas, (node) => hasClass(node, 'btn-outline'));
  if (!heroCtas || !primaryHeroCta || !secondaryHeroCta) {
    throw new Error('The resolved homepage is missing its hero calls to action.');
  }
  primaryHeroCta.tag = 'a';
  primaryHeroCta.props.href = 'https://console.agent.press/sign-up';
  primaryHeroCta.props.target = '_blank';
  primaryHeroCta.props.rel = 'noopener';
  replaceText(primaryHeroCta, 'Start Now');
  secondaryHeroCta.tag = 'a';
  secondaryHeroCta.props.href = 'https://calendar.app.google/AwUNqYVrSpUf1XeK8';
  secondaryHeroCta.props.target = '_blank';
  secondaryHeroCta.props.rel = 'noopener';
  replaceText(secondaryHeroCta, 'Schedule Demo');

  const intro = findFirst(page.tree, (node) => (
    node.tag === 'div' && String(node.props?.class ?? '').split(/\s+/).includes('introrow')
  ));
  const copyColumn = intro?.children?.find((node) => (
    typeof node !== 'string' && node.props?.style?.includes('max-width: 620px')
  ));
  if (!copyColumn || typeof copyColumn === 'string') {
    throw new Error('The resolved homepage is missing the manifesto copy column.');
  }

  const title = copyColumn.children.find((node) => typeof node !== 'string' && node.tag === 'div');
  const paragraphs = copyColumn.children.filter((node) => typeof node !== 'string' && node.tag === 'p');
  if (!title || typeof title === 'string' || paragraphs.length < 2) {
    throw new Error('The resolved homepage manifesto structure changed unexpectedly.');
  }

  title.props['data-ap-words-wrapped'] = 'true';
  title.children = wordNodes(
    manifestoCopy.title,
    'ap-manifesto-word',
    'color: rgb(33, 33, 33); opacity: 0; text-shadow: rgba(174, 243, 200, 0) 0px 0px 26px; transform: translateY(8px) scale(0.97);',
  );

  manifestoCopy.paragraphs.forEach((paragraphText, index) => {
    const paragraph = paragraphs[index];
    if (!paragraph || typeof paragraph === 'string') return;
    paragraph.props['data-ap-words-wrapped'] = 'true';
    paragraph.children = wordNodes(
      paragraphText,
      'ap-manifesto-supporting-word',
      'color: rgba(33, 33, 33, 0.32); opacity: 0; transform: translateY(7px);',
    );
  });

  const featureRows = [];
  walk(page.tree, (node) => {
    if (hasClass(node, 'frow')) featureRows.push(node);
  });
  if (featureRows.length !== featureCopy.length) {
    throw new Error(`Expected ${featureCopy.length} homepage feature rows, found ${featureRows.length}.`);
  }
  featureRows.forEach((row, index) => {
    const copy = featureCopy[index];
    const art = featureArt[index];
    const eyebrow = findFirst(row, (node) => hasClass(node, 'eyebrow'));
    const heading = findFirst(row, (node) => node.tag === 'h2' && hasClass(node, 'h1'));
    const paragraph = findFirst(row, (node) => node.tag === 'p');
    const visual = row.children.find((node) => (
      typeof node !== 'string'
      && hasClass(node, 'fade')
      && String(node.props?.style ?? '').includes('width: 640px')
    ));
    const background = visual && typeof visual !== 'string'
      ? visual.children.find((node) => typeof node !== 'string' && node.tag === 'img')
      : undefined;
    if (!eyebrow || !heading || !paragraph || !visual || typeof visual === 'string' || !background || typeof background === 'string') {
      throw new Error(`The resolved homepage feature row ${index + 1} changed unexpectedly.`);
    }
    replaceText(eyebrow, copy.number);
    replaceText(heading, copy.title);
    replaceText(paragraph, copy.paragraph);
    paragraph.props.style = String(paragraph.props.style ?? '').replace('height: 123px;', 'height: auto;');
    addClass(background, 'ap-feature-background');
    visual.children = [
      background,
      {
        tag: 'object',
        props: {
          type: 'image/svg+xml',
          data: art.src,
          width: '660',
          height: '660',
          'aria-label': art.label,
          style: 'position: absolute; right: var(--ap-feature-art-offset, -7px); top: 50%; width: var(--ap-feature-art-size, 660px); height: var(--ap-feature-art-size, 660px); transform: translateY(-50%); max-width: none; pointer-events: none;',
        },
        children: [],
      },
    ];
  });

  const timelineScroll = findFirst(page.tree, (node) => hasClass(node, 'ap-timeline-flight-scroll'));
  const timelineParent = findParent(page.tree, timelineScroll);
  if (!timelineScroll || !timelineParent) throw new Error('The resolved homepage is missing the timeline section.');
  const timelineCards = [];
  walk(timelineScroll, (node) => {
    if (hasClass(node, 'ap-timeline-flight-card')) timelineCards.push(node);
  });
  if (timelineCards.length !== timelineCardTitles.length) {
    throw new Error(`Expected ${timelineCardTitles.length} timeline cards, found ${timelineCards.length}.`);
  }
  const removedTimelineAnchors = new Set();
  timelineCards.forEach((card, index) => {
    card.props['aria-label'] = timelineCardTitles[index];
    if (removedTimelineCardTitles.has(timelineCardTitles[index])) {
      removedTimelineAnchors.add(findParent(timelineScroll, card));
    }
  });
  removeNodes(timelineScroll, (node) => removedTimelineAnchors.has(node));
  const activeTimelineCards = timelineCards.filter((_, index) => (
    !removedTimelineCardTitles.has(timelineCardTitles[index])
  ));
  activeTimelineCards.forEach((card, index) => {
    const queueX = Number((-50 - (index * 0.8)).toFixed(1));
    card.props.style = String(card.props.style ?? '')
      .replace(/translate3d\(([-\d.]+vw), [-\d.]+px, 0px\)/, `translate3d(${queueX}vw, 0px, 0px)`)
      .replace('blur(1.25px)', 'blur(0.625px)')
      .replace('skewY(-14deg)', 'skewY(-10deg)');
    const anchor = findParent(timelineScroll, card);
    if (anchor) anchor.props.style = `z-index:${19 - index}`;
  });
  const timelineIndex = timelineParent.children.indexOf(timelineScroll);
  timelineParent.children.splice(timelineIndex, 0, {
    tag: 'div',
    props: { class: 'ap-timeline-heading' },
    children: [
      { tag: 'span', props: { class: 'eyebrow' }, children: ['How it works'] },
      {
        tag: 'h2',
        props: { class: 'h1', style: 'font-size: 30px; margin: 20px 0px 0px; letter-spacing: 0em;' },
        children: ['What AgentPress does between meetings'],
      },
    ],
  });

  const customerLogoHeading = findFirst(page.tree, (node) => (
    node.tag === 'div'
    && node.children?.length === 1
    && node.children[0] === 'SaaS teams selling into enterprise'
  ));
  const customerLogoStrip = customerLogoHeading && findParent(page.tree, customerLogoHeading);
  if (!customerLogoHeading || !customerLogoStrip) {
    throw new Error('The resolved homepage is missing its customer logo strip.');
  }
  customerLogoStrip.props.style = String(customerLogoStrip.props.style ?? '')
    .replace('padding: 80px 0px 24px;', 'padding: 36px 0px 24px;');

  const integrationsHeading = findFirst(page.tree, (node) => textContent(node) === 'Connect what you already use');
  const integrationsSection = findParent(page.tree, integrationsHeading);
  if (!integrationsHeading || !integrationsSection) throw new Error('The resolved homepage is missing the integrations section.');
  replaceText(integrationsHeading, 'Connect the tools you already use, in 10 minutes or less');
  addClass(integrationsSection, 'ap-integrations-section');
  walk(integrationsSection, (node) => {
    if (node.tag !== 'img' || !String(node.props?.src ?? '').startsWith('/assets/logos/')) return;
    addClass(findParent(integrationsSection, node), 'ap-integration-tool');
  });

  const trustRow = findFirst(page.tree, (node) => hasClass(node, 'trustrow'));
  if (!trustRow) throw new Error('The resolved homepage is missing the enterprise checklist.');
  walk(trustRow, (node) => {
    if (node.tag === 'circle' && node.props?.r === '8') node.props.fill = '#2DC4A8';
  });
  for (const [category, labels] of Object.entries(trustCopy)) {
    const categoryHeading = findFirst(trustRow, (node) => textContent(node) === category);
    const categoryColumn = findParent(trustRow, categoryHeading);
    const checks = [];
    walk(categoryColumn, (node) => {
      if (hasClass(node, 'check')) checks.push(node);
    });
    if (!categoryHeading || !categoryColumn || checks.length !== labels.length) {
      throw new Error(`The resolved homepage ${category} checklist changed unexpectedly.`);
    }
    checks.forEach((check, index) => {
      const label = check.children.find((node) => typeof node !== 'string' && node.tag === 'span');
      if (!label || typeof label === 'string') throw new Error(`The ${category} checklist is missing a label.`);
      replaceText(label, labels[index]);
    });
  }

  const securityHeading = findFirst(page.tree, (node) => textContent(node) === 'AgentPress is built to pass procurement');
  if (!securityHeading) throw new Error('The resolved homepage is missing the security heading.');
  replaceText(securityHeading, 'AgentPress is secure');

  for (const [roleName, copy] of Object.entries(roleCopy)) {
    const roleHeading = findFirst(page.tree, (node) => textContent(node) === roleName);
    const roleCard = findParent(page.tree, roleHeading);
    const roleParagraph = roleCard?.children?.find((node) => typeof node !== 'string' && node.tag === 'p');
    const roleChecklist = roleCard?.children?.find((node) => (
      typeof node !== 'string' && node.props?.style?.includes('margin-top: 28px')
    ));
    const roleChecks = roleChecklist?.children?.filter((node) => typeof node !== 'string' && hasClass(node, 'check')) ?? [];
    if (!roleHeading || !roleCard || !roleParagraph || roleChecks.length !== copy.bullets.length) {
      throw new Error(`The resolved homepage ${roleName} role card changed unexpectedly.`);
    }
    replaceText(roleParagraph, copy.paragraph);
    roleChecks.forEach((check, index) => {
      const label = check.children.find((node) => typeof node !== 'string' && node.tag === 'span');
      if (!label || typeof label === 'string') throw new Error(`The ${roleName} checklist is missing a label.`);
      replaceText(label, copy.bullets[index]);
    });
  }

  const firstFaq = findFirst(page.tree, (node) => node.tag === 'details' && hasClass(node, 'faq'));
  const faqList = findParent(page.tree, firstFaq);
  if (!firstFaq || !faqList) throw new Error('The resolved homepage is missing the FAQ list.');
  faqList.children = faqCopy.map(faqNode);
  const faqIntro = findFirst(page.tree, (node) => textContent(node) === 'Here are answers to common questions about us.');
  if (faqIntro) replaceText(faqIntro, 'Straight answers for lean B2B sales teams evaluating AgentPress.');
}

function applyPricingOverrides(page) {
  const pricingHeading = findFirst(page.tree, (node) => (
    textContent(node) === 'Simple pricing for enterprise sales teams'
  ));
  if (!pricingHeading) throw new Error('The resolved pricing page is missing its heading.');
  replaceText(pricingHeading, 'Simple, transparent pricing');

  const plansIntro = findFirst(page.tree, (node) => (
    textContent(node).startsWith('Plans start at $X per workspace')
  ));
  if (!plansIntro) throw new Error('The resolved pricing page is missing its plans intro.');
  replaceText(
    plansIntro,
    'Pricing is set per workspace, per month.',
  );

  const planCards = findFirst(page.tree, (node) => hasClass(node, 'plancards'));
  if (!planCards) throw new Error('The resolved pricing page is missing its plan cards.');
  planCards.props.style = 'max-width: 1320px; margin: 0px auto; padding: 80px 40px 96px; display: flex; gap: 20px; align-items: stretch;';
  planCards.children = [
    pricingPlanCard({
      name: 'Trial',
      price: '$0',
      features: ['7 days', 'Up to 5 users', 'Unlimited opportunities', 'Unlimited agentic actions'],
    }),
    pricingPlanCard({
      name: 'Starter',
      price: '$799',
      features: ['Up to 3 users', 'Unlimited opportunities', 'Unlimited agentic actions', 'White Glove Onboarding'],
    }),
    pricingPlanCard({
      name: 'Pro',
      price: '$2,999',
      features: [
        'Up to 12 users',
        'Unlimited opportunities',
        'Unlimited agentic actions',
        'White Glove Onboarding',
        'Forward Deployed Engineer',
        'Custom Data Connectors',
      ],
      featured: true,
    }),
    pricingPlanCard({
      name: 'Enterprise',
      price: 'Variable',
      features: [
        'Unlimited Users',
        'Unlimited opportunities',
        'Unlimited agentic actions',
        'White Glove Onboarding',
        'Forward Deployed Engineer',
        'Custom Data Connectors',
        'SSO',
      ],
      enterprise: true,
    }),
  ];

  const seatsRow = findFirst(page.tree, (node) => hasClass(node, 'seatsrow'));
  const seatsLayout = seatsRow && findParent(page.tree, seatsRow);
  const seatsSection = seatsLayout && findParent(page.tree, seatsLayout);
  const seatsSectionParent = seatsSection && findParent(page.tree, seatsSection);
  if (!seatsRow || !seatsLayout || !seatsSection || !seatsSectionParent) {
    throw new Error('The resolved pricing page is missing its seats and usage section.');
  }
  seatsSectionParent.children = seatsSectionParent.children.filter((child) => child !== seatsSection);

  const comparisonEyebrow = findFirst(page.tree, (node) => textContent(node) === 'Compare plans');
  const comparisonContent = comparisonEyebrow && findParent(page.tree, comparisonEyebrow);
  const comparisonSection = comparisonContent && findParent(page.tree, comparisonContent);
  const comparisonSectionParent = comparisonSection && findParent(page.tree, comparisonSection);
  if (!comparisonEyebrow || !comparisonContent || !comparisonSection || !comparisonSectionParent) {
    throw new Error('The resolved pricing page is missing its legacy plan comparison section.');
  }
  comparisonSectionParent.children = comparisonSectionParent.children.filter((child) => child !== comparisonSection);

  const securityHeading = findFirst(page.tree, (node) => (
    textContent(node) === 'AgentPress is built to pass procurement'
  ));
  if (!securityHeading) throw new Error('The resolved pricing page is missing its security heading.');
  replaceText(securityHeading, 'AgentPress is secure');

  const ctaHeading = findFirst(page.tree, (node) => (
    textContent(node) === 'See it run on your own pipeline'
  ));
  if (!ctaHeading) throw new Error('The resolved pricing page is missing its CTA heading.');
  replaceText(ctaHeading, 'See it run on your pipeline');
}

const legacyHomepage = await readFile(legacyHomepagePath, 'utf8');
const legacyHero = extractLegacyHomepageHero(legacyHomepage);
const files = (await readdir(captureDirectory)).filter((file) => file.endsWith('.json')).sort();
const pages = {};

for (const file of files) {
  const page = JSON.parse(await readFile(path.join(captureDirectory, file), 'utf8'));
  // This font face is injected by the Next development overlay and is not
  // part of the designer export. Every designer-authored style is retained.
  page.styles = page.styles.filter((css) => !css.includes("font-family:'__nextjs-Geist'"));
  if (page.key === 'home') applyHomepageOverrides(page, legacyHero);
  if (page.key === 'pricing') applyPricingOverrides(page);
  if (page.key === 'our-story') applyOurStoryOverrides(page);
  removeTextFragment(page.tree, 'Your data never trains a model.');
  applySitewideNavigationOverrides(page);
  applySitewideFooterOverrides(page);
  applySitewideCtaCopy(page);
  pages[page.key] = page;
}

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(pages)}\n`, 'utf8');
console.log(`Compiled ${Object.keys(pages).length} designer pages to ${outputPath}`);
