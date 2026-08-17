// Inserts the "Google User Data and Limited Use" section required by Google's
// OAuth verification review. Google's reviewer checks for the exact Limited Use
// sentence and the bolded no-training sentence — do not paraphrase either.
// The third-party AI provider list must match the providers the app can route
// Google Workspace data to (Ultravox is excluded because voice sessions do not
// carry Workspace-derived context). Keep this consistent with the in-product
// disclosure in AgentPress/packages/ui/src/core/admin/IntegrationsPage.tsx
// (GoogleWorkspaceAuthorizationDisclosure).

const lastUpdated = 'August 17, 2026';

const sectionNodes = [
  {
    tag: 'h2',
    props: {},
    children: ['4. Google User Data and Limited Use'],
  },
  {
    tag: 'p',
    props: {},
    children: [
      'AgentPress offers optional integrations with Google services, including Gmail and Google Calendar, authorized by you via Google OAuth. When you connect these integrations, AgentPress accesses only the data needed to provide the features you enable — for example, reading email threads related to your sales opportunities, creating email drafts for your review, and reading and creating calendar events.',
    ],
  },
  {
    tag: 'p',
    props: {},
    children: [
      'AgentPress’s use and transfer to any other app of information received from Google APIs will adhere to the ',
      {
        tag: 'a',
        props: {
          href: 'https://developers.google.com/terms/api-services-user-data-policy',
          target: '_blank',
          rel: 'noopener',
        },
        children: ['Google API Services User Data Policy'],
      },
      ', including the Limited Use requirements.',
    ],
  },
  {
    tag: 'p',
    props: {},
    children: ['Specifically:'],
  },
  {
    tag: 'ul',
    props: {},
    children: [
      {
        tag: 'li',
        props: {},
        children: [
          'We only use Google user data to provide and improve the user-facing features of AgentPress that you have enabled. We do not use Google user data for serving advertisements, and we do not sell Google user data.',
        ],
      },
      {
        tag: 'li',
        props: {},
        children: [
          {
            tag: 'b',
            props: {},
            children: [
              'We do not use raw or derived Google user data to create, train, or improve any foundational or generalized machine learning or artificial intelligence models.',
            ],
          },
          ' Google user data is never used to train AgentPress’s own models or any third party’s models.',
        ],
      },
      {
        tag: 'li',
        props: {},
        children: [
          'AgentPress uses third-party AI service providers (currently OpenAI, Anthropic, Google Gemini API, and xAI) to power user-facing features such as summarizing email threads, preparing meeting briefs, and drafting emails for your review. Google user data is transmitted to these providers solely for real-time processing (inference) of your requests. We use these providers under paid, business-tier API agreements whose terms prohibit the provider from using submitted data to train their models. These providers do not retain Google user data beyond limited abuse-monitoring windows defined in their terms.',
        ],
      },
      {
        tag: 'li',
        props: {},
        children: [
          'Humans do not read Google user data except with your explicit consent for support purposes, where necessary for security or abuse investigation, or where required by law.',
        ],
      },
      {
        tag: 'li',
        props: {},
        children: [
          'You can disconnect the Gmail or Google Calendar integration at any time from your AgentPress settings, which revokes AgentPress’s access. You may also revoke access via your Google Account permissions page. Upon disconnection or account deletion, we delete stored Google user data in accordance with our retention practices described in the “Data Retention” section below.',
        ],
      },
    ],
  },
];

function textContent(node) {
  if (typeof node === 'string') return node;
  return (node.children ?? []).map(textContent).join('');
}

function findParentOf(root, predicate) {
  let match;
  const visit = (node) => {
    if (!node || typeof node === 'string' || match) return;
    for (const child of node.children ?? []) {
      if (typeof child !== 'string' && predicate(child)) {
        match = node;
        return;
      }
      visit(child);
    }
  };
  visit(root);
  return match;
}

export function applyPrivacyGoogleSection(page) {
  const container = findParentOf(page.tree, (node) => (
    node.tag === 'h2' && textContent(node) === '3. How We Use Your Information'
  ));
  if (!container) throw new Error('The resolved privacy page is missing its "How We Use Your Information" section.');
  if (container.children.some((child) => (
    typeof child !== 'string' && textContent(child).includes('Google User Data and Limited Use')
  ))) {
    throw new Error('The resolved privacy page already contains the Google User Data section.');
  }

  const lastUpdatedNode = container.children.find((child) => (
    typeof child !== 'string' && textContent(child).startsWith('Last updated:')
  ));
  if (!lastUpdatedNode) throw new Error('The resolved privacy page is missing its last-updated line.');
  lastUpdatedNode.children = [`Last updated: ${lastUpdated}`];

  // The new section becomes section 4, so every later section shifts up one.
  for (const child of container.children) {
    if (typeof child === 'string' || child.tag !== 'h2') continue;
    const heading = textContent(child);
    const numbered = heading.match(/^(\d+)\. (.*)$/);
    if (!numbered) throw new Error(`Unexpected privacy heading format: ${heading}`);
    const number = Number(numbered[1]);
    if (number >= 4) child.children = [`${number + 1}. ${numbered[2]}`];
  }

  const nextHeadingIndex = container.children.findIndex((child) => (
    typeof child !== 'string' && textContent(child) === '5. Data Sharing and Disclosure'
  ));
  if (nextHeadingIndex < 0) throw new Error('The resolved privacy page is missing its Data Sharing section.');
  container.children.splice(nextHeadingIndex, 0, ...sectionNodes);
}
