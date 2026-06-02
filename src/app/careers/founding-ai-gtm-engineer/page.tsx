import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Founding AI GTM Engineer | AgentPress',
  description:
    'AgentPress is hiring a Founding AI GTM Engineer to build, run, and improve the AI-native system that produces qualified sales meetings.',
  openGraph: {
    title: 'Founding AI GTM Engineer | AgentPress',
    description:
      'AgentPress is hiring a Founding AI GTM Engineer to build, run, and improve the AI-native system that produces qualified sales meetings.',
    images: [
      {
        url: '/agentpress_careers_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Founding AI GTM Engineer | AgentPress',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Founding AI GTM Engineer | AgentPress',
    description:
      'AgentPress is hiring a Founding AI GTM Engineer to build, run, and improve the AI-native system that produces qualified sales meetings.',
    images: ['/agentpress_careers_og_image.png'],
  },
};

const applyHref =
  'mailto:hello@agent.press?subject=Founding%20AI%20GTM%20Engineer%20Application';

const ownershipItems = [
  'Social content generation',
  'LinkedIn outbound',
  'Cold email outbound',
  'Signal-based lead lists',
  'Account-based campaigns',
  'Conference, event, and partner follow-up',
  'New channel discovery and testing',
  'Daily analysis of what is working',
  'Rapid experiments across messaging, personas, offers, and channels',
];

const tools = [
  'Clay or Origami',
  'Instantly',
  'HeyReach or AimFox',
  'Claude and ChatGPT',
  'Claude Code or Codex',
  'OpenClaw, Hermes, or similar agentic workflows',
  'LinkedIn Sales Navigator',
  'Enrichment tools',
  'Outbound platforms',
  'Automation systems',
];

const traits = [
  'AI-native and already using modern AI tools every day',
  'Strong at outbound, growth, demand gen, or early-stage GTM',
  'A sharp writer across email, LinkedIn, and social content',
  'Analytical enough to inspect results and iterate daily',
  'Strategic enough to understand ICP, positioning, buyer pain, and market timing',
  'Technical enough to build with Claude Code, Codex, or similar tools',
  'Relentless about follow-up, experimentation, and execution',
  'Comfortable being measured by pipeline outcomes, not vanity activity',
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

export default function CareersPage() {
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
              Founding AI{' '}
              <span className="relative inline-block">
                <span className="relative z-10">GTM Engineer</span>
                <span className="absolute bottom-1 left-0 h-[35%] w-full -rotate-1 bg-ap-teal/40 md:bottom-3" />
              </span>
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Own the AI-native system that produces qualified sales meetings.
              Build, run, and improve the machine that gets the right buyers
              onto the sales calendar.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Remote', 'Anywhere', 'Founding role', 'Pipeline ownership'].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-white/80 px-4 py-2 text-sm font-semibold text-ap-dark-blue shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={applyHref}
                className="btn-primary w-full bg-black px-8 text-base hover:bg-zinc-800 sm:w-auto"
              >
                Apply for this role →
              </Link>
              <Link
                href="/our-story"
                className="btn-secondary w-full px-8 text-base sm:w-auto"
              >
                Read our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-slate-50/40 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { label: 'Mandate', value: 'Qualified meetings' },
            { label: 'System', value: 'AI-native GTM' },
            { label: 'Scope', value: 'Build from scratch' },
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
                About the Role
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  AgentPress is hiring a <strong className="font-bold text-ap-dark-blue">Founding AI GTM Engineer</strong> to own the AI-native system that produces qualified sales meetings.
                </p>
                <p>
                  Your mandate is simple: <strong className="font-bold text-ap-dark-blue">build, run, and improve the machine that gets the right buyers onto the sales calendar.</strong>
                </p>
                <p>
                  This is a remote role and can be done from anywhere. We are a
                  small, fast-moving team, so this is an opportunity to build
                  the GTM system from scratch, own it end to end, and grow with
                  the company.
                </p>
              </div>
            </section>

            <section className="mb-14 md:mb-20">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-ap-dark-blue md:text-4xl">
                What You&apos;ll Own
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                You will own everything that contributes to qualified meeting
                generation:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {ownershipItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                  >
                    <CheckIcon />
                    <span className="text-base font-medium leading-snug text-ap-dark-blue">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-l-4 border-ap-teal pl-6">
                <p className="text-xl font-bold leading-snug text-ap-dark-blue md:text-2xl">
                  The goal is not activity. The goal is qualified meetings with
                  the right buyers.
                </p>
              </div>
            </section>

            <section className="mb-14 md:mb-20">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-ap-dark-blue md:text-4xl">
                How You Work
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  This role is AI-native from first principles. You should
                  instinctively ask: <strong className="font-bold text-ap-dark-blue">how can AI make this faster, sharper, more personalized, more measurable, or more scalable?</strong>
                </p>
                <p>
                  You do not need to be a traditional software engineer, but you
                  should be able to build workflows, automate repetitive work,
                  connect systems, and think about GTM as an engineering
                  problem.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-ap-dark-blue ring-1 ring-border"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-14 md:mb-20">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-ap-dark-blue md:text-4xl">
                Who You Are
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                You are likely a strong fit if you are:
              </p>
              <div className="space-y-3">
                {traits.map((trait) => (
                  <div
                    key={trait}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-border"
                  >
                    <CheckIcon />
                    <span className="text-base font-medium leading-snug text-ap-dark-blue">
                      {trait}
                    </span>
                  </div>
                ))}
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
                  As our Founding AI GTM Engineer, you will help create the
                  playbook and own the system that turns AgentPress&apos;s market
                  insight into qualified pipeline.
                </p>
              </div>
            </section>

            <section className="mt-14 rounded-2xl border border-border bg-slate-50/70 p-6 md:mt-20 md:p-8">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-ap-dark-blue md:text-4xl">
                To Apply
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Contact us at{' '}
                <Link
                  href={applyHref}
                  className="font-bold text-ap-dark-blue hover:text-ap-blue"
                >
                  hello@agent.press
                </Link>
                {' '}with a short note on why you are interested in the role and what you have built, automated, or shipped with AI.
              </p>
            </section>
          </div>

          <aside className="lg:pt-2">
            <div className="sticky top-24 rounded-2xl border border-border bg-white p-6 shadow-[0_16px_40px_rgba(10,14,40,0.06)]">
              <h2 className="text-xl font-bold tracking-tight text-ap-dark-blue">
                Founding AI GTM Engineer
              </h2>
              <dl className="mt-6 space-y-4">
                {[
                  ['Location', 'Remote, anywhere'],
                  ['Team', 'GTM'],
                  ['Focus', 'Qualified meeting generation'],
                  ['Stage', 'Founding team'],
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

      <section className="bg-slate-50/30 pt-8 pb-28 text-center">
        <div className="section-container !pt-0">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mx-auto mb-8 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
              Build the system that creates{' '}
              <span className="relative inline-block whitespace-nowrap px-2">
                <span className="relative z-10 text-ap-dark-blue">qualified pipeline.</span>
                <span className="absolute bottom-2 left-0 h-[40%] w-full -rotate-1 bg-ap-teal/40" />
              </span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground">
              Own the playbook, the workflows, and the daily experiments that
              move AgentPress into the market.
            </p>
            <Link
              href={applyHref}
              className="btn-primary w-full bg-black px-10 text-lg hover:bg-zinc-800 sm:w-auto"
            >
              Apply for this role →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
