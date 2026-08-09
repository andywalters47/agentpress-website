import Image from 'next/image';
import Link from 'next/link';
import { CtaBand } from '@/components/CtaBand';

const growth = [
  ['October', 216],
  ['November', 276],
  ['December', 348],
  ['January', 432],
  ['February', 552],
] as const;

export default function OurStory() {
  return (
    <div className="marketing-page story-page">
      <header className="page-hero site-container">
        <span className="eyebrow">Founder&apos;s Letter</span>
        <h1>The AgentPress Story</h1>
        <p>How a standing ovation changed everything.</p>
      </header>

      <div className="story-photo site-container">
        <Image src="/v3/uploads/Andy_conference.jpg" alt="Standing ovation at an AgentPress customer kickoff" width={1200} height={760} priority />
      </div>

      <article className="story-body-v3">
        <section>
          <p>Before AgentPress, we were a services firm. We built bespoke AI agents for B2B SaaS revenue teams, but we were a body shop. We built what clients asked for, collected the check, and moved on.</p>
          <p>Then something happened that I couldn&apos;t ignore.</p>
        </section>

        <section>
          <h2>The standing ovation</h2>
          <p>I was at the company kickoff for one of our customers, HiveMQ—an enterprise SaaS business. Their executive leadership team was demoing the suite of agents we&apos;d built for them. One by one they walked through the tools: onboarding agent, support agent, SDR agent. Polite applause. Good stuff.</p>
          <p>Then they showed the last one—our business value assessment agent. It generates a fully quantified business case for any prospect in seconds. Custom to the account. Backed by real financial data.</p>
          <blockquote>150 people gave it a spontaneous standing ovation. I&apos;d never seen anything like it at a corporate event.</blockquote>
          <div className="story-video">
            <iframe src="https://player.vimeo.com/video/1174466111?title=0&byline=0&portrait=0" title="AgentPress business value agent demo" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          </div>
          <p>After the event, investors and partners who had been in the room started contacting me. They didn&apos;t care about the other agents. They wanted to talk about value selling.</p>
          <div className="story-callout">The wedge isn&apos;t agents. <strong>The wedge is value.</strong></div>
        </section>

        <section>
          <h2>What we learned the hard way</h2>
          <p>We launched AgentPress on Labor Day 2025. Initially, we thought we were building a generalist platform for customer-facing AI agents—a unified suite spanning marketing, onboarding, support, and renewals.</p>
          <p>The technology was strong, but the positioning was weak. Every AI startup was building customer-facing agents. A unified suite was not enough to differentiate us.</p>
          <blockquote>B2B revenue is fundamentally broken because every touchpoint tells a different value story.</blockquote>
          <p>The marketing site says one thing. The AE pitches another. The business case says something else. Post-sales, nobody is tracking whether the promised value was actually delivered.</p>
          <div className="story-dark-callout">
            <p>The breakthrough was making every agent in the suite <strong>value-aware</strong>—powered by a unified, patented value model that ensures a consistent, quantifiable value story at every customer touchpoint.</p>
            <div>
              <span>Inbound SDR Agent<small>Qualifies using value story</small></span>
              <span>Business Case Generator<small>Builds financial proof</small></span>
              <span>Deployment Planner<small>Tracks value delivery</small></span>
              <span>Renewals Agent<small>Shows realized ROI</small></span>
            </div>
          </div>
        </section>

        <section>
          <h2>Six months of traction</h2>
          <p>Since launching AgentPress in September, we&apos;ve been averaging 27% month-over-month ARR growth. We reached $552K ARR in six months, with $2.3M in pipeline and five live enterprise instances.</p>
          <div className="growth-chart" aria-label="Contract ARR growth from October to February">
            <div className="growth-chart-label">Contract ARR</div>
            <div className="growth-bars">
              {growth.map(([month, value]) => (
                <div key={month} className="growth-item">
                  <span>${value}K</span>
                  <div style={{ height: `${(value / 600) * 100}%` }} />
                  <small>{month}</small>
                </div>
              ))}
            </div>
          </div>
          <p>That traction told us we had found something real. Customers were not buying another AI feature. They were buying a system that made the value story concrete and helped the whole team execute against it.</p>
        </section>

        <section>
          <h2>Where this is going</h2>
          <p>Our ambition is to build the value-aware agentic operating system for revenue teams. Every opportunity should have a living model of the buyer, the promised impact, the proof required to move forward, and the work needed next.</p>
          <p>We are still early. But the pattern is clear: when revenue teams align around value, sellers move faster, champions become stronger, and customers know exactly what success is supposed to look like.</p>
          <p>That is the company we are building.</p>
        </section>

        <section className="story-careers-card">
          <Image src="/v3/uploads/slot-careers-photo.webp" alt="The AgentPress team" width={560} height={390} />
          <div>
            <span className="eyebrow">Come build with us</span>
            <h2>Small team. Meaningful ownership.</h2>
            <p>We are looking for people who want to build systems, own outcomes, and use AI as a daily operating advantage.</p>
            <Link className="button button-dark" href="/careers">Explore open roles</Link>
          </div>
        </section>
      </article>

      <CtaBand heading="Ready to sell on value?" buttonLabel="Schedule Demo" />
    </div>
  );
}
