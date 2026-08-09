'use client';

import Image from 'next/image';
import { motion, MotionStyle, MotionValue, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';

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

const cardLabels = [
  'Pre-call research and roleplay',
  'Account research',
  'Deck preparation',
  'Meeting preparation',
  'Live on-screen assistance',
  'Post-call coaching and scorecard',
  'Value model',
  'Automatic stakeholder map',
  'Mutual action plan',
  'Follow-up',
];

function cubicHermite(
  start: number,
  end: number,
  startSlope: number,
  endSlope: number,
  progress: number,
) {
  const squared = progress ** 2;
  const cubed = progress ** 3;
  const startWeight = (2 * cubed) - (3 * squared) + 1;
  const startSlopeWeight = cubed - (2 * squared) + progress;
  const endWeight = (-2 * cubed) + (3 * squared);
  const endSlopeWeight = cubed - squared;

  return (startWeight * start)
    + (startSlopeWeight * startSlope)
    + (endWeight * end)
    + (endSlopeWeight * endSlope);
}

function TimelineCard({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const travelDuration = 0.1405;
  const stageInterval = travelDuration * 0.66;
  const stageIn = 0.012 + (index * stageInterval);
  const leftArrival = stageIn + travelDuration;
  const queueX = 42.8 + (index * 0.8);
  const queueY = (index - ((cardLabels.length - 1) / 2)) * 2.5;
  const completedX = -57.2 + (index * 0.8);
  const completedY = (index - ((cardLabels.length - 1) / 2)) * 2.2;
  const approachShare = 1 / 3;
  const center = stageIn + (travelDuration * approachShare);
  const x = useTransform(progress, (current) => {
    if (current <= stageIn) return `${queueX}vw`;
    if (current >= leftArrival) return `${completedX}vw`;

    const travelProgress = (current - stageIn) / travelDuration;
    // Reach center in one-third instead of one-half of the journey (1.5x
    // faster), then cross center at half the previous velocity. Scaling the
    // local Hermite slopes by each phase length keeps the curve continuous.
    const centerVelocity = -3;
    const approachCenterSlope = centerVelocity * approachShare;
    const departureShare = 1 - approachShare;
    const departureCenterSlope = centerVelocity * departureShare;

    if (travelProgress <= approachShare) {
      const approachProgress = travelProgress / approachShare;
      return `${cubicHermite(queueX, 0, 0, approachCenterSlope, approachProgress)}vw`;
    }

    const departureProgress = (travelProgress - approachShare) / departureShare;
    return `${cubicHermite(0, completedX, departureCenterSlope, 0, departureProgress)}vw`;
  });
  const y = useTransform(
    progress,
    [stageIn, center, leftArrival],
    [queueY, 0, completedY],
  );
  const scale = useTransform(
    progress,
    [stageIn, center, leftArrival],
    [0.96, 1.025, 0.96],
  );
  const filter = useTransform(progress, (current) => {
    if (current <= stageIn || current >= leftArrival) {
      return 'blur(1.25px) drop-shadow(0 14px 20px rgba(39, 30, 83, 0.07))';
    }

    const travelProgress = (current - stageIn) / travelDuration;
    const edgeBand = 0.16;
    const entranceBlur = travelProgress < edgeBand
      ? 1.25 * (1 - (travelProgress / edgeBand))
      : 0;
    const exitBlur = travelProgress > (1 - edgeBand)
      ? 1.25 * ((travelProgress - (1 - edgeBand)) / edgeBand)
      : 0;
    const blur = Math.max(entranceBlur, exitBlur);
    const focus = 1 - Math.min(1, Math.abs(travelProgress - 0.44) / 0.38);
    const shadowY = 16 + (12 * focus);
    const shadowBlur = 22 + (12 * focus);
    const shadowAlpha = 0.08 + (0.12 * focus);

    return `blur(${blur.toFixed(3)}px) drop-shadow(0 ${shadowY.toFixed(2)}px ${shadowBlur.toFixed(2)}px rgba(39, 30, 83, ${shadowAlpha.toFixed(3)}))`;
  });
  const style: MotionStyle = {
    filter,
    scale,
    x,
    y,
  };

  return (
    <motion.div className="timeline-card-anchor" style={{ zIndex: index + 10 }}>
      <motion.svg
        aria-label={cardLabels[index]}
        className="timeline-flight-card"
        role="img"
        style={style}
        viewBox="0 0 254 306"
      >
        <use href={`/v3/assets/timeline-sprite.svg#timeline-card-${index + 1}`} />
      </motion.svg>
    </motion.div>
  );
}

export function DealTimeline() {
  const [active, setActive] = useState(0);
  const scrollStageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const selected = steps[active];
  const { scrollYProgress } = useScroll({
    target: scrollStageRef,
    offset: ['start 65%', 'end end'],
  });
  const backdropOpacity = useTransform(scrollYProgress, [0, 0.04, 0.9, 1], ['0.42', '1', '1', '0.26']);

  return (
    <section
      className={`timeline-section${reduceMotion ? ' timeline-section-reduced' : ''}`}
      aria-label="AgentPress deal timeline"
    >
      <div
        className={`timeline-scroll-stage${reduceMotion ? ' timeline-scroll-stage-reduced' : ''}`}
        ref={scrollStageRef}
      >
        <div className="timeline-sticky">
          {reduceMotion ? (
            <Image
              className="timeline-overview timeline-overview-reduced"
              src="/v3/assets/hero-graphic-v4.svg"
              alt="How AgentPress works across an enterprise deal"
              width={1400}
              height={711}
            />
          ) : (
            <div className="timeline-scene" aria-label="Ten AgentPress workflow cards moving across the deal timeline">
              <motion.svg
                aria-hidden="true"
                className="timeline-backdrop"
                style={{ opacity: backdropOpacity }}
                viewBox="0 0 1400 711"
              >
                <use href="/v3/assets/timeline-sprite.svg#timeline-backdrop" />
              </motion.svg>
              {cardLabels.map((label, index) => (
                <TimelineCard index={index} key={label} progress={scrollYProgress} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="site-container timeline-details">
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
