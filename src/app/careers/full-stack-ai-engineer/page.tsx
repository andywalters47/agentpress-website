import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Full-Stack AI Engineer | AgentPress',
  description:
    'AgentPress is hiring a contract Full-Stack AI Engineer to build full-stack product, AI agent orchestration systems, and enterprise integrations.',
  openGraph: {
    title: 'Full-Stack AI Engineer | AgentPress',
    description:
      'AgentPress is hiring a contract Full-Stack AI Engineer to build full-stack product, AI agent orchestration systems, and enterprise integrations.',
    images: [
      {
        url: '/agentpress_full_stack_ai_engineer_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Full-Stack AI Engineer | AgentPress',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack AI Engineer | AgentPress',
    description:
      'AgentPress is hiring a contract Full-Stack AI Engineer to build full-stack product, AI agent orchestration systems, and enterprise integrations.',
    images: ['/agentpress_full_stack_ai_engineer_og_image.png'],
  },
};

const applyHref =
  'mailto:hello@agent.press?subject=Full-Stack%20AI%20Engineer%20Application';

const responsibilities = [
  'Build and ship end-to-end features across Bun/Hono/Elysia backends, React/Next.js frontends, and typically PostgreSQL data layers.',
  'Work within our AI agent orchestration system: tool execution pipelines, RAG retrieval, multi-agent coordination, and real-time streaming via WebSockets.',
  'Develop and maintain embeddable IIFE chat widgets deployed across client environments with complex CSP and integration constraints.',
  'Interface directly with enterprise clients on technical integrations, troubleshoot production issues, and communicate clearly without hand-holding.',
  'Contribute to infrastructure: CI/CD pipelines, background job processing with BullMQ, caching layers with Redis, and monitoring.',
  'Write code that other people can read. Participate in code reviews and hold yourself to a high bar.',
];

const stackGroups = [
  {
    label: 'Runtime & Backend',
    items: ['Bun', 'Hono', 'Elysia', 'Express', 'Node.js', 'BullMQ', 'Redis'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'ShadCN', 'Radix UI'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'PGVector', 'Drizzle ORM'],
  },
  {
    label: 'AI/ML',
    items: [
      'Vercel AI SDK',
      'OpenAI APIs',
      'Anthropic APIs',
      'Google APIs',
      'RAG pipelines',
      'MCP server integrations',
      'Claude Code',
      'Coding agent platforms',
    ],
  },
  {
    label: 'Infra',
    items: ['AWS', 'Docker', 'GitHub Actions', 'Turborepo monorepo', 'Clerk auth'],
  },
];

const requirements = [
  'Strong TypeScript proficiency across both frontend and backend. This is a TypeScript-first codebase.',
  'Solid experience with React and at least one Node.js-based server framework. Familiarity with Bun, Hono, or Next.js is a strong plus.',
  'Comfort working with relational databases, preferably PostgreSQL, and understanding query performance.',
  'Ability to read an existing codebase, understand architectural decisions, and extend them without breaking conventions.',
  'Ability to clearly articulate technical direction and back it up. You should be comfortable defending your own ideas and challenging others. We welcome discourse.',
  'Excellent written and verbal English communication. You will interact with enterprise clients and need to be clear, professional, and confident in technical conversations.',
  'Self-directed work ethic. You know when to push through ambiguity on your own and when to flag something early. You do not wait to be told what to do.',
  'Experience with or genuine interest in AI/LLM tooling, prompt engineering, RAG systems, or agent architectures.',
  'Prior work where you owned features end to end, preferably in a startup or small-team environment.',
  'Willing to overlap by 4-6 hours during weekdays with US time zones for real-time collaboration.',
];

const niceToHave = [
  'Experience building embeddable widgets or third-party integrations with complex browser constraints such as CSP, CORS, and iframe sandboxing.',
  'Familiarity with real-time systems: WebSockets, streaming APIs, or event-driven architectures.',
  'Background in SaaS products, especially B2B or developer tools.',
  'Experience with Clerk, Stripe, or similar third-party auth/payment integrations.',
];

const notForYou = [
  'If you need detailed specs and wireframes before you can start building, this is not the right fit. We move fast and expect you to fill in gaps.',
  'If you write code that works but nobody else can maintain, we will have problems. Readability matters as much as functionality here.',
  'If you disappear when you hit a blocker instead of communicating, this will not work. We are remote-first and trust is built through transparency.',
  'If you are looking for a passive contract where you coast on hours, look elsewhere. We are building something real and need people who give a damn.',
];

const applicationItems = [
  'A brief intro: who you are and why you are interested in AgentPress specifically, not a generic cover letter.',
  'Your GitHub profile, a project you are proud of, or a portfolio website. We care more about code quality than credentials.',
  'Your resume or LinkedIn.',
  'Confirmation that your work schedule can overlap by 4-6 hours during weekdays with US time zones.',
];

function CheckIcon() {
  return (
    <svg
      className="mt-1 h-4 w-4 flex-shrink-0 text-ap-teal"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CheckedCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <CheckIcon />
      <span className="text-base font-medium leading-snug text-ap-dark-blue">
        {children}
      </span>
    </div>
  );
}

export default function FullStackAiEngineerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-28 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_left,rgba(45,196,168,0.08),transparent_48%),radial-gradient(at_bottom_right,rgba(87,109,241,0.07),transparent_52%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(var(--color-ap-blue) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="section-container relative z-10 !py-0">
          <div className="max-w-4xl">
            <span className="mb-6 inline-flex items-center rounded-full bg-ap-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ap-teal">
              Open Role
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-ap-dark-blue md:text-6xl lg:text-7xl">
              Full-Stack{' '}
              <span className="relative inline-block">
                <span className="relative z-10">AI Engineer</span>
                <span className="absolute bottom-1 left-0 h-[35%] w-full -rotate-1 bg-ap-teal/40 md:bottom-3" />
              </span>
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              A hands-on contract role building full-stack product, AI agent
              orchestration systems, embeddable widgets, and enterprise
              integrations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Contract', 'Remote', '40 hrs/week', 'agent.press'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-white/80 px-4 py-2 text-sm font-semibold text-ap-dark-blue shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={applyHref}
                className="btn-primary w-full bg-black px-8 text-base hover:bg-zinc-800 sm:w-auto"
              >
                Apply for this role →
              </Link>
              <Link
                href="/careers"
                className="btn-secondary w-full px-8 text-base sm:w-auto"
              >
                View all roles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-slate-50/40 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { label: 'Type', value: '1099 contract' },
            { label: 'Schedule', value: '40 hrs/week' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border bg-white p-5">
              <div className="text-xs font-bold uppercase tracking-widest text-ap-teal">
                {item.label}
              </div>
              <div className="mt-2 text-2xl font-bold tracking-tight text-ap-dark-blue">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <article className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <div className="max-w-3xl">
            <section className="mb-14 md:mb-20">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-ap-dark-blue md:text-4xl">
                What You&apos;ll Actually Do
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  This is a hands-on building role, not a ticket-closing role.
                  You&apos;ll work directly with the VP of Engineering across the
                  full stack.
                </p>
              </div>
              <div className="mt-7 grid gap-3">
                {responsibilities.map((item) => (
                  <CheckedCard key={item}>{item}</CheckedCard>
                ))}
              </div>
            </section>

            <section className="mb-14 md:mb-20">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-ap-dark-blue md:text-4xl">
                Tech Stack
              </h2>
              <div className="space-y-4">
                {stackGroups.map((group) => (
                  <div
                    key={group.label}
                    className="rounded-2xl border border-border bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                  >
                    <div className="mb-3 text-xs font-bold uppercase tracking-widest text-ap-teal">
                      {group.label}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-ap-dark-blue ring-1 ring-border"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-14 md:mb-20">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-ap-dark-blue md:text-4xl">
                What We&apos;re Looking For
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                We&apos;re looking for a developer who can think independently,
                move fast, and write clean code without constant direction.
              </p>
              <div className="space-y-3">
                {requirements.map((item) => (
                  <CheckedCard key={item}>{item}</CheckedCard>
                ))}
              </div>
            </section>

            <section className="mb-14 md:mb-20">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-ap-dark-blue md:text-4xl">
                Nice to Have
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {niceToHave.map((item) => (
                  <CheckedCard key={item}>{item}</CheckedCard>
                ))}
              </div>
            </section>

            <section className="mb-14 md:mb-20">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-ap-dark-blue md:text-4xl">
                Who This Role Isn&apos;t For
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                We want to be upfront so nobody wastes their time:
              </p>
              <div className="space-y-3">
                {notForYou.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-border bg-slate-50/70 p-4 text-base font-medium leading-relaxed text-ap-dark-blue"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-14 md:mb-20">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-ap-dark-blue md:text-4xl">
                Growth
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  This is a 1099 contract at 40 hours/week, paid weekly.
                </p>
                <p>
                  We&apos;ve historically converted strong contractors into
                  full-time W-2 roles with equity. If you come in, ship
                  consistently, and prove you can own a domain, there is a clear
                  path to a senior engineering role with significantly higher
                  compensation. We promote based on output, not tenure.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-ap-dark-blue md:text-4xl">
                About AgentPress
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  AgentPress is building a platform to help B2B revenue teams{' '}
                  <strong className="font-bold text-ap-dark-blue">autonomously win deals and drive expansion revenue</strong>.
                </p>
                <p>
                  Our agents help companies identify the right opportunities,
                  engage buyers, build business cases, uncover expansion
                  potential, support sales conversations, and move revenue
                  forward with far less manual work.
                </p>
                <p>
                  As our Full-Stack AI Engineer, you will help build the product
                  surfaces, agent orchestration systems, data flows, and
                  enterprise integrations that make that platform work in the
                  real world.
                </p>
              </div>
            </section>

            <section className="mt-14 rounded-2xl border border-border bg-slate-50/70 p-6 md:mt-20 md:p-8">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-ap-dark-blue md:text-4xl">
                How to Apply
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Send an email to{' '}
                <Link
                  href={applyHref}
                  className="font-bold text-ap-dark-blue hover:text-ap-blue"
                >
                  hello@agent.press
                </Link>
                {' '}with the following:
              </p>
              <div className="space-y-3">
                {applicationItems.map((item) => (
                  <CheckedCard key={item}>{item}</CheckedCard>
                ))}
              </div>
              <p className="mt-6 text-base font-semibold text-ap-dark-blue">
                No recruiters. No agencies. We read every application personally.
              </p>
            </section>
          </div>

          <aside className="lg:pt-2">
            <div className="sticky top-24 rounded-2xl border border-border bg-white p-6 shadow-[0_16px_40px_rgba(10,14,40,0.06)]">
              <h2 className="text-xl font-bold tracking-tight text-ap-dark-blue">
                Full-Stack AI Engineer
              </h2>
              <dl className="mt-6 space-y-4">
                {[
                  ['Type', 'Contract'],
                  ['Location', 'Remote'],
                  ['Hours', '40 hrs/week'],
                  ['Overlap', '4-6 US-timezone hours'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs font-bold uppercase tracking-widest text-ap-teal">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-ap-dark-blue">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <Link
                href={applyHref}
                className="btn-primary mt-8 w-full bg-black px-8 text-base hover:bg-zinc-800"
              >
                Apply now →
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}
