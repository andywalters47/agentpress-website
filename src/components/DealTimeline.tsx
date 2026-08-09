'use client';

import Image from 'next/image';
import { useState } from 'react';

const steps = [
  {
    title: 'An opportunity lands',
    body: 'The moment a deal moves into your pipeline, AgentPress reconstructs the full picture from email threads, call transcripts, and existing CRM records.',
    image: '/v3/uploads/slot-shot-1.webp',
    label: 'Opportunity overview for a complex enterprise deal',
  },
  {
    title: 'Before the meeting',
    body: 'Ahead of every call, AgentPress prepares a brief with discovery questions and company intelligence, then builds buyer-ready materials in the account’s own brand.',
    image: '/v3/assets/feature-1-art.svg',
    label: 'Meeting preparation workspace',
  },
  {
    title: 'After the meeting',
    body: 'As soon as the call ends, pain points, objections, commitments, and stakeholders are captured without anyone stopping to take notes.',
    image: '/v3/assets/feature-2-screenshot.png',
    label: 'Opportunity foundations and recent documents',
  },
  {
    title: 'Building the case',
    body: 'AgentPress turns what it has learned into a value model and business case built on the buyer’s numbers, delivered in a deal room they can actually use.',
    image: '/v3/assets/feature-3-screenshot.png',
    label: 'Business case and pipeline workspace',
  },
  {
    title: 'Keeping it moving',
    body: 'AgentPress tracks deal health and recommends the next-best action. When momentum fades, it sends a proactive nudge before the rep has to notice.',
    image: '/v3/assets/hero-graphic-v4.svg',
    label: 'AgentPress deal workflow',
  },
];

export function DealTimeline() {
  const [active, setActive] = useState(0);
  const selected = steps[active];

  return (
    <section className="timeline-section" aria-labelledby="timeline-heading">
      <div className="site-container">
        <Image className="timeline-overview" src="/v3/assets/hero-graphic-v4.svg" alt="How AgentPress works across an enterprise deal" width={1400} height={711} />
        <h2 id="timeline-heading" className="section-title">The AgentPress time machine</h2>

        <div className="timeline-layout">
          <div className="timeline-tabs" role="tablist" aria-label="Deal stages">
            {steps.map((step, index) => (
              <button
                key={step.title}
                className={`timeline-tab${active === index ? ' active' : ''}`}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-controls="timeline-panel"
                onClick={() => setActive(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {step.title}
              </button>
            ))}
          </div>

          <div id="timeline-panel" className="timeline-panel" role="tabpanel">
            <div className="timeline-copy">
              <span className="eyebrow">Step {active + 1} of {steps.length}</span>
              <h3>{selected.title}</h3>
              <p>{selected.body}</p>
            </div>
            <div className={`timeline-image timeline-image-${active + 1}`}>
              <Image src={selected.image} alt={selected.label} width={980} height={620} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
