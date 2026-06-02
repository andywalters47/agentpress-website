import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers | AgentPress',
  description:
    'Join AgentPress and help build the value-aware agentic operating system for B2B revenue teams.',
};

const principles = [
  {
    label: 'Value-first',
    title: 'Every agent is grounded in business impact',
    description:
      'We are building around quantified value, not generic automation. Every workflow should help revenue teams prove, deliver, or expand business impact.',
  },
  {
    label: 'AI-native',
    title: 'We use the tools we believe in',
    description:
      'We expect the team to build with modern AI systems, automate repetitive work, and use agents to move faster without lowering the bar.',
  },
  {
    label: 'Small team',
    title: 'Ownership matters here',
    description:
      'AgentPress is still early. The right people can own meaningful systems end to end and shape how the company operates.',
  },
];

const openRoles = [
  {
    title: 'Founding AI GTM Engineer',
    href: '/careers/founding-ai-gtm-engineer',
    team: 'GTM',
    location: 'Remote, anywhere',
    summary:
      'Build, run, and improve the AI-native system that gets the right buyers onto the sales calendar.',
  },
];

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function CareersOverviewPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden pt-16 pb-14 md:pt-28 md:pb-20">
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
              Careers
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-ap-dark-blue md:text-6xl lg:text-7xl">
              Build the company that helps revenue teams sell on{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">value</span>
                <span className="absolute bottom-1 left-0 h-[35%] w-full -rotate-1 bg-ap-teal/40 md:bottom-3" />
              </span>
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              AgentPress is building a platform to help B2B revenue teams
              autonomously win deals and drive expansion revenue with agents
              grounded in a unified value model.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-slate-50/40 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { label: 'Focus', value: 'B2B revenue teams' },
            { label: 'Wedge', value: 'Quantified value' },
            { label: 'Product', value: 'Revenue agents' },
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

      <section className="py-14 md:py-20">
        <div className="section-container !py-0">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-ap-dark-blue md:text-5xl">
                What AgentPress is about
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                We believe B2B revenue is broken because every touchpoint tells
                a different value story. Marketing says one thing, sales says
                another, business cases live in spreadsheets, and post-sales
                rarely proves what was promised.
              </p>
              <p>
                AgentPress is building the value-aware agentic operating system
                for revenue teams. Our agents help teams identify the right
                opportunities, engage buyers, build business cases, uncover
                expansion potential, support sales conversations, and move
                revenue forward with less manual work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/30 py-14 md:py-20">
        <div className="section-container !py-0">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-ap-dark-blue md:text-5xl">
              How we work
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We are looking for people who want to build systems, own outcomes,
              and use AI as a daily operating advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle.label}
                className="rounded-2xl border border-border bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <div className="mb-4 text-xs font-bold uppercase tracking-widest text-ap-teal">
                  {principle.label}
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-ap-dark-blue">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="section-container !py-0">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-flex items-center rounded-full bg-ap-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ap-teal">
                Open Roles
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-ap-dark-blue md:text-5xl">
                Join the team
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-right">
              We hire for ownership, judgment, speed, and the ability to turn
              ambiguous problems into working systems.
            </p>
          </div>

          <div className="space-y-4">
            {openRoles.map((role) => (
              <Link
                key={role.href}
                href={role.href}
                className="group block rounded-2xl border border-border bg-white p-6 shadow-[0_12px_32px_rgba(10,14,40,0.05)] transition-colors hover:border-ap-teal/60"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-3xl">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {[role.team, role.location].map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-ap-dark-blue ring-1 ring-border"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-ap-dark-blue md:text-3xl">
                      {role.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {role.summary}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 font-semibold text-ap-dark-blue transition-colors group-hover:text-ap-teal">
                    View role
                    <ArrowIcon />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
