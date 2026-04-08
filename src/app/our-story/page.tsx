'use client';

import { useEffect, useRef } from 'react';

export default function OurStory() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('story-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionsRef.current[index] = el;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-16 md:pt-28 pb-8 md:pb-14 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(at_top_left,rgba(45,196,168,0.06),transparent_50%),radial-gradient(at_bottom_right,rgba(87,109,241,0.06),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(var(--color-ap-blue) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            ref={addRef(0)}
            className="story-section"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-ap-teal/10 text-ap-teal tracking-wide uppercase">
                Founder&apos;s Letter
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ap-dark-blue leading-[1.05] mb-6">
              The AgentPress{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Story</span>
                <span className="absolute bottom-2 md:bottom-3 left-0 w-full h-[35%] bg-ap-teal/40 -rotate-1" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              How a standing ovation changed everything
            </p>
          </div>
        </div>
      </section>

      {/* ── Thin divider ── */}
      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-ap-blue/20 to-transparent" />
      </div>

      {/* ── Body ── */}
      <article className="relative py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Before AgentPress ── */}
          <div ref={addRef(1)} className="story-section mb-16 md:mb-24">
            <p className="story-body">
              Before AgentPress, we were a services firm. We built bespoke AI agents for B2B SaaS revenue teams, but we were a body shop. We built what clients asked for, collected the check, and moved on.
            </p>
            <p className="story-body">
              Then something happened that I couldn&apos;t ignore.
            </p>
          </div>

          {/* ── The Standing Ovation ── */}
          <div ref={addRef(2)} className="story-section mb-16 md:mb-24">
            <h2 className="story-heading">The standing ovation</h2>

            <p className="story-body">
              I was at the company kickoff for one of our enterprise customers, HiveMQ — an enterprise SaaS business. Their executive leadership team was demoing the suite of agents we&apos;d built for them. One by one they walked through the tools: onboarding agent, support agent, SDR agent. Polite applause. Good stuff.
            </p>

            <p className="story-body">
              Then they showed the last one — our business value assessment agent. It generates a fully quantified business case for any prospect in seconds. Custom to the account. Backed by real financial data.
            </p>

            {/* The standing ovation moment */}
            <div className="my-10 md:my-14 relative pl-6 md:pl-8 border-l-4 border-ap-teal">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-ap-dark-blue leading-snug italic">
                150 people gave it a spontaneous standing ovation. I&apos;d never seen anything like it at a corporate event.
              </p>
            </div>

            {/* Vimeo video embed */}
            <div className="my-10 md:my-14 relative rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(10,14,40,0.12)] border border-border bg-ap-dark-blue aspect-video">
              <iframe
                src="https://player.vimeo.com/video/1174466111?title=0&byline=0&portrait=0"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="AgentPress Business Value Agent Demo"
              />
            </div>

            <p className="story-body">
              After the event, investors and partners who had been in the room started contacting me. They didn&apos;t care about the other agents. They wanted to talk about value selling.
            </p>

            {/* Key insight pullquote */}
            <div className="my-12 md:my-16 py-10 md:py-14 px-8 md:px-12 rounded-3xl bg-slate-50/80 border border-border relative overflow-hidden">
              <div className="absolute top-4 left-6 text-[120px] font-serif text-ap-blue/[0.06] leading-none select-none italic">&ldquo;</div>
              <p className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-ap-dark-blue leading-[1.2]">
                The wedge isn&apos;t agents.{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-ap-dark-blue">The wedge is value.</span>
                  <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-[35%] bg-ap-teal/40 -rotate-1" />
                </span>
              </p>
            </div>
          </div>          

          {/* ── What we learned the hard way ── */}
          <div ref={addRef(3)} className="story-section mb-16 md:mb-24">
            <h2 className="story-heading">What we learned the hard way</h2>

            <p className="story-body">
              We launched AgentPress on Labor Day 2025. Initially, we thought we were building a generalist platform for customer-facing AI agents — an SDR for your marketing website, an onboarding planner, a support agent, a renewals assistant. A unified suite.
            </p>
            <p className="story-body">
              The technology was strong, but the positioning was weak. Every AI startup and their dog was building customer-facing agents. A &ldquo;unified suite&rdquo; wasn&apos;t enough to differentiate us.
            </p>

            {/* Key discovery */}
            <div className="my-10 md:my-14 relative pl-6 md:pl-8 border-l-4 border-ap-blue">
              <p className="text-lg md:text-xl font-bold text-ap-dark-blue leading-snug">
                B2B revenue is fundamentally broken because every touchpoint tells a different value story.
              </p>
            </div>

            <p className="story-body">
              The marketing site says one thing. The AE pitches another. The business case says something else. Post-sales, nobody&apos;s tracking whether the promised value was actually delivered.
            </p>
            <p className="story-body">
              When your value story is fragmented, you get customers with unrealistic expectations, unmet promises, higher churn, and lower renewals. It doesn&apos;t matter how good your agents are if they&apos;re each telling a different story.
            </p>

            {/* The breakthrough */}
            <div className="my-12 md:my-16 py-10 md:py-14 px-8 md:px-12 rounded-3xl bg-gradient-to-br from-ap-dark-blue to-[#121636] relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(rgba(45,196,168,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
                  The real breakthrough was making every agent in the suite <strong className="text-white font-bold">value-aware</strong> — powered by a unified, patented value model that ensures a consistent, quantifiable value story at every customer touchpoint.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {[
                    { agent: 'Inbound SDR Agent', action: 'Qualifies using value story' },
                    { agent: 'Business Case Generator', action: 'Builds financial proof' },
                    { agent: 'Deployment Planner', action: 'Tracks value delivery' },
                    { agent: 'Renewals Agent', action: 'Shows realized ROI & Expansions' },
                  ].map((item) => (
                    <div key={item.agent} className="p-3 md:p-4 rounded-xl bg-white/[0.06] border border-white/[0.08]">
                      <div className="text-ap-teal text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1">{item.agent}</div>
                      <div className="text-white/60 text-xs leading-snug">{item.action}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="story-body">
              Nobody else is doing this. Incumbents are siloed — they build point solutions for support, or SDR, or sales enablement. They don&apos;t own the value story across the lifecycle. They can&apos;t, because they don&apos;t have the underlying model.
            </p>
          </div>

          {/* ── Six months of traction ── */}
          <div ref={addRef(4)} className="story-section mb-16 md:mb-24">
            <h2 className="story-heading">Six months of traction</h2>

            <p className="story-body">
              Since launching AgentPress in September, we&apos;ve been averaging 27% month-over-month ARR growth. We hit $576K ARR in six months, with $2.3M in pipeline and five live enterprise instances.
            </p>

            {/* ARR Growth Chart */}
            <div className="my-10 md:my-14 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a0e28] to-[#0c1030] p-4 pb-2 md:p-8 md:pb-4 shadow-[0_30px_60px_rgba(10,14,40,0.15)]">
              <div className="mb-1 md:mb-2">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40">Contract ARR</span>
              </div>
              <svg viewBox="0 0 600 350" className="w-full h-auto" role="img" aria-label="AgentPress ARR growth from October to February">
                <defs>
                  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(87,109,241,0.4)" />
                    <stop offset="100%" stopColor="rgba(87,109,241,0.06)" />
                  </linearGradient>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2dc4a8" stopOpacity="0.5" />
                    <stop offset="40%" stopColor="#2dc4a8" />
                    <stop offset="100%" stopColor="#2dc4a8" />
                  </linearGradient>
                </defs>

                {/* Grid lines */}
                {[0, 100, 200, 300, 400, 500, 600].map((v) => {
                  const y = 300 - (v / 600) * 270;
                  return (
                    <line
                      key={v}
                      x1="55"
                      y1={y}
                      x2="585"
                      y2={y}
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1"
                      strokeDasharray={v === 0 ? undefined : '4 4'}
                    />
                  );
                })}

                {/* Y-axis labels */}
                {[0, 200, 400, 600].map((v) => {
                  const y = 300 - (v / 600) * 270;
                  return (
                    <text
                      key={v}
                      x="48"
                      y={y + 4}
                      textAnchor="end"
                      fill="rgba(255,255,255,0.6)"
                      fontSize="11"
                      fontFamily="Inter, system-ui, sans-serif"
                      fontWeight="600"
                    >
                      ${v}K
                    </text>
                  );
                })}



                {/* Bars + labels */}
                {[
                  { month: 'October', value: 216, cx: 108 },
                  { month: 'November', value: 276, cx: 214 },
                  { month: 'December', value: 348, cx: 320 },
                  { month: 'January', value: 432, cx: 426 },
                  { month: 'February', value: 552, cx: 532 },
                ].map((d) => {
                  const h = (d.value / 600) * 270;
                  const y = 300 - h;
                  return (
                    <g key={d.month}>
                      <rect
                        x={d.cx - 32}
                        y={y}
                        width="64"
                        height={h}
                        rx="5"
                        fill="url(#barGrad)"
                        stroke="rgba(87,109,241,0.3)"
                        strokeWidth="1.5"
                      />
                      {/* Value above bar */}
                      <text
                        x={d.cx}
                        y={y - 10}
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontFamily="Inter, system-ui, sans-serif"
                        fontWeight="800"
                      >
                        ${d.value}K
                      </text>
                      {/* Month below */}
                      <text
                        x={d.cx}
                        y="326"
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.6)"
                        fontSize="12"
                        fontFamily="Inter, system-ui, sans-serif"
                        fontWeight="600"
                      >
                        {d.month}
                      </text>
                    </g>
                  );
                })}

                {/* Smooth teal trend line */}
                <path
                  d="M 108 202.8 C 143 194, 179 186, 214 175.8 C 249 166, 285 155, 320 143.4 C 355 132, 391 121, 426 105.6 C 461 90, 497 70, 532 51.6"
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Dots on curve */}
                {[
                  { cx: 108, cy: 202.8 },
                  { cx: 214, cy: 175.8 },
                  { cx: 320, cy: 143.4 },
                  { cx: 426, cy: 105.6 },
                  { cx: 532, cy: 51.6 },
                ].map((d, i) => (
                  <g key={i}>
                    <circle cx={d.cx} cy={d.cy} r="7" fill="#2dc4a8" opacity="0.15" />
                    <circle cx={d.cx} cy={d.cy} r="5" fill="#0a0e28" stroke="#2dc4a8" strokeWidth="2.5" />
                    <circle cx={d.cx} cy={d.cy} r="1.5" fill="white" />
                  </g>
                ))}
              </svg>
            </div>

            <p className="story-body">
              For the first time, we had the feeling every founder chases — customers trying to tear the product out of our hands. CROs, account executives, channel partners, all pulling us forward.
            </p>

            <div className="my-10 md:my-14 relative pl-6 md:pl-8 border-l-4 border-ap-teal">
              <p className="text-lg md:text-xl font-bold text-ap-dark-blue leading-snug italic">
                When you give a revenue team the ability to sell on quantifiable value at every touchpoint, they don&apos;t want to go back.
              </p>
            </div>
          </div>

          {/* ── Where this is going ── */}
          <div ref={addRef(5)} className="story-section mb-16 md:mb-24">
            <h2 className="story-heading">Where this is going</h2>

            <p className="story-body">
              Here&apos;s something I believe about B2B sales that most people haven&apos;t caught onto yet:
            </p>

            {/* Big prediction callout */}
            <div className="my-10 md:my-14 py-10 md:py-14 px-8 md:px-12 rounded-3xl bg-slate-50/80 border border-border relative overflow-hidden">
              <div className="absolute top-4 left-6 text-[120px] font-serif text-ap-teal/[0.06] leading-none select-none italic">&ldquo;</div>
              <p className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-ap-dark-blue leading-[1.2]">
                AI agents are going to{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">control purchasing decisions.</span>
                  <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-[35%] bg-ap-teal/40 -rotate-1" />
                </span>
              </p>
            </div>

            <p className="story-body">
              Not in some distant future. Soon. And when AI is on the other side of the table evaluating your product, it will be ruthless. It won&apos;t be swayed by a charming AE or a nice slide deck. It will demand quantifiable business justification, backed by real data, specific to the buyer&apos;s situation.
            </p>
            <p className="story-body">
              The companies that can generate that justification instantly — at every touchpoint, for every prospect, with every agent — will win. The ones that can&apos;t will lose deals they never even knew they were in.
            </p>
            <p className="story-body">
              That&apos;s what AgentPress is building: the value-aware agentic operating system for revenue teams. A platform where every customer-facing agent — and eventually every internal agent — speaks the language of quantifiable value.
            </p>

            {/* Competitive advantages */}
            <div className="my-10 md:my-14 space-y-3">
              {[
                'We have the patented value model.',
                'We have six months of compounding traction.',
                'We have a cracked product team that understands what our buyers need.',
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-ap-teal/10 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-ap-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base md:text-lg font-medium text-ap-dark-blue leading-snug">{line}</p>
                </div>
              ))}
            </div>

            <p className="story-body">
              Revenue teams need to sell on value at every touchpoint. We&apos;re building that future.
            </p>
          </div>

          {/* ── Signature ── */}
          <div ref={addRef(6)} className="story-section pt-6 pb-8">
            <div className="border-t border-border pt-10">
              <p className="text-2xl md:text-3xl font-bold text-ap-dark-blue italic tracking-tight">
                — Andy
              </p>
              <p className="text-sm text-muted-foreground mt-2">Founder & CEO, AgentPress</p>
            </div>
          </div>

        </div>
      </article>

      {/* ── Bottom CTA ── */}
      <section className="pt-8 pb-32 text-center bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1] mb-10">
              Ready to sell on{' '}
              <span className="relative inline-block whitespace-nowrap px-2">
                <span className="relative z-10 text-ap-dark-blue">value?</span>
                <span className="absolute bottom-2 left-0 w-full h-[40%] bg-ap-teal/40 -rotate-1" />
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the revenue teams using AgentPress to close bigger deals with quantifiable business cases.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://calendar.app.google/AwUNqYVrSpUf1XeK8" className="btn-primary w-full sm:w-auto px-10 bg-black hover:bg-zinc-800 text-lg">
                Schedule Demo →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-reveal styles */}
      <style jsx>{`
        .story-section {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .story-visible {
          opacity: 1;
          transform: translateY(0);
        }
        :global(.story-heading) {
          font-size: clamp(1.5rem, 4vw, 2.25rem);
          font-weight: 800;
          letter-spacing: -0.025em;
          color: var(--color-ap-dark-blue);
          margin-bottom: 1.5rem;
          line-height: 1.15;
        }
        :global(.story-body) {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #475569;
          margin-bottom: 1.25rem;
        }
        @media (min-width: 768px) {
          :global(.story-body) {
            font-size: 1.1875rem;
          }
        }
      `}</style>
    </div>
  );
}
