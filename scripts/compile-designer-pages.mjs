import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const captureDirectory = process.argv[2] ?? '/tmp/agentpress-native-capture-full';
const projectRoot = path.resolve(import.meta.dirname, '..');
const outputPath = path.join(projectRoot, 'src/generated/designer-pages.json');
const legacyHomepagePath = path.resolve(projectRoot, '..', 'agentpress-website-new-3.legacy-index.html');
const manifestoCopy = {
  title: 'AgentPress is the first AI sales agent that proactively delivers what your team needs to win.',
  paragraphs: [
    'We believe the next generation of great sellers will have great agents.',
    "But a great agent is not a chatbot bolted to a CRM. It's a chief of staff that understands complex B2B deals and constantly works ahead to deliver the guidance, assets, and follow-through great execution requires.",
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
    answer: 'No. Your CRM stays the system of record. AgentPress connects the tools your team already uses, understands the context scattered across them, and turns that context into useful work instead of more data entry.',
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
    answer: 'Yes. AgentPress is SOC 2 Type II certified, and your data is never used to train a shared model. It is built for the security expectations that come with selling into enterprise accounts.',
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

function applySitewideCtaCopy(page) {
  walk(page.tree, (node) => {
    if (node.tag !== 'a' || node.props?.href !== 'https://calendar.app.google/AwUNqYVrSpUf1XeK8') return;
    const primary = hasClass(node, 'btn-start') || hasClass(node, 'btn-dark');
    replaceText(node, primary ? 'Start Now' : 'Schedule Demo');
  });
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

  const timelineScroll = findFirst(page.tree, (node) => hasClass(node, 'ap-timeline-flight-scroll'));
  const timelineParent = findParent(page.tree, timelineScroll);
  if (!timelineScroll || !timelineParent) throw new Error('The resolved homepage is missing the timeline section.');
  const timelineCards = [];
  walk(timelineScroll, (node) => {
    if (hasClass(node, 'ap-timeline-flight-card')) timelineCards.push(node);
  });
  timelineCards.forEach((card, index) => {
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

  const securityHeading = findFirst(page.tree, (node) => textContent(node) === 'AgentPress is built to pass procurement');
  if (!securityHeading) throw new Error('The resolved homepage is missing the security heading.');
  replaceText(securityHeading, 'AgentPress is secure');

  const firstFaq = findFirst(page.tree, (node) => node.tag === 'details' && hasClass(node, 'faq'));
  const faqList = findParent(page.tree, firstFaq);
  if (!firstFaq || !faqList) throw new Error('The resolved homepage is missing the FAQ list.');
  faqList.children = faqCopy.map(faqNode);
  const faqIntro = findFirst(page.tree, (node) => textContent(node) === 'Here are answers to common questions about us.');
  if (faqIntro) replaceText(faqIntro, 'Straight answers for lean B2B sales teams evaluating AgentPress.');
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
  applySitewideCtaCopy(page);
  pages[page.key] = page;
}

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(pages)}\n`, 'utf8');
console.log(`Compiled ${Object.keys(pages).length} designer pages to ${outputPath}`);
