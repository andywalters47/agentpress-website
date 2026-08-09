'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const manifestoLines = [
  ['You', "don't", 'need', 'a', 'CRM.'],
  ['You', 'need', 'a', 'Chief', 'of', 'Staff.'],
];

const manifestoSupportingCopy = [
  'We built AgentPress because we were tired of manually keeping complex deals on track.',
  'CRM hygiene does not win deals. Understanding the buyer, the value, and what needs to happen next does. AgentPress anticipates and delivers what you need to win, without waiting to be prompted.',
];

type ManifestoWordProps = {
  index: number;
  progress: MotionValue<number>;
  total: number;
  word: string;
};

function ManifestoWord({ index, progress, total, word }: ManifestoWordProps) {
  const start = 0.28 + (index / total) * 0.48;
  const focus = start + 0.045;
  const settle = focus + 0.085;
  const color = useTransform(
    progress,
    [start - 0.07, focus, settle],
    ['#212121', '#814ade', '#212121'],
  );
  const opacity = useTransform(progress, (current) => {
    const reveal = (current - (start - 0.07)) / (focus - (start - 0.07));
    return Math.max(0, Math.min(1, reveal));
  });
  const y = useTransform(progress, [start - 0.07, focus, settle], [8, 0, 0]);
  const scale = useTransform(progress, [start - 0.07, focus, settle], [0.97, 1.035, 1]);
  const textShadow = useTransform(
    progress,
    [start - 0.04, focus, settle],
    ['0 0 0 rgba(174, 243, 200, 0)', '0 0 26px rgba(174, 243, 200, 0.88)', '0 0 0 rgba(174, 243, 200, 0)'],
  );

  return (
    <motion.span
      className="manifesto-word"
      style={{ color, opacity, scale, textShadow, y }}
    >
      {word}
    </motion.span>
  );
}

function ManifestoSupportingWord({ index, progress, total, word }: ManifestoWordProps) {
  const start = 0.58 + (index / total) * 0.28;
  const settle = start + 0.035;
  const opacity = useTransform(progress, (current) => {
    const reveal = (current - start) / (settle - start);
    return Math.max(0, Math.min(1, reveal));
  });
  const color = useTransform(
    progress,
    [start, settle],
    ['rgba(33, 33, 33, 0.32)', 'rgba(33, 33, 33, 0.72)'],
  );
  const y = useTransform(progress, [start, settle], [7, 0]);

  return (
    <motion.span
      className="manifesto-supporting-word"
      style={{ color, opacity, y }}
    >
      {word}
    </motion.span>
  );
}

function HeroContent() {
  return (
    <section className="home-hero scroll-hero" aria-labelledby="home-hero-title">
      <div className="hero-dots" aria-hidden="true" />
      <div className="site-container hero-inner">
        <div className="hero-copy">
          <h1 id="home-hero-title">An AI Chief of Staff for Every Deal</h1>
          <p>AgentPress is the first AI agent that understands how to keep complex SaaS deals moving forward. At every stage, it proactively delivers the deal intelligence, tailored assets, and executional support you need to win.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="https://calendar.app.google/AwUNqYVrSpUf1XeK8" target="_blank" rel="noreferrer">Try now</Link>
            <Link className="button button-outline" href="https://player.vimeo.com/video/1174466111" target="_blank" rel="noreferrer">Watch demo <span>▶</span></Link>
          </div>
        </div>
        <div className="hero-art">
          <Image src="/v3/assets/hero-v5.svg" alt="AgentPress preparing a seller for an enterprise meeting" width={696} height={650} priority />
        </div>
      </div>
    </section>
  );
}

function ManifestoContent({
  headlineProgress,
  supportingProgress,
}: {
  headlineProgress?: MotionValue<number>;
  supportingProgress?: MotionValue<number>;
}) {
  const totalWords = manifestoLines.flat().length;
  const totalSupportingWords = manifestoSupportingCopy.flatMap((paragraph) => paragraph.split(' ')).length;
  let wordIndex = 0;
  let supportingWordIndex = 0;

  return (
    <section className="intro-section scroll-manifesto" aria-labelledby="manifesto-title">
      <div className="manifesto-glow" aria-hidden="true" />
      <div className="site-container intro-grid">
        <div><span className="eyebrow">Hello AgentPress</span></div>
        <div>
          <h2 id="manifesto-title" className="manifesto-title">
            {manifestoLines.map((line, lineIndex) => (
              <span className="manifesto-line" key={line.join('-')}>
                {line.map((word) => {
                  const index = wordIndex++;
                  return headlineProgress ? (
                    <ManifestoWord key={`${word}-${index}`} index={index} progress={headlineProgress} total={totalWords} word={word} />
                  ) : (
                    <span className="manifesto-word manifesto-word-static" key={`${word}-${index}`}>{word}</span>
                  );
                })}
                {lineIndex < manifestoLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h2>
          <div className="manifesto-supporting-copy">
            {manifestoSupportingCopy.map((paragraph, paragraphIndex) => (
              <p key={paragraph}>
                {paragraph.split(' ').map((word) => {
                  const index = supportingWordIndex++;
                  return supportingProgress ? (
                    <ManifestoSupportingWord
                      index={index}
                      key={`${paragraphIndex}-${word}-${index}`}
                      progress={supportingProgress}
                      total={totalSupportingWords}
                      word={word}
                    />
                  ) : (
                    <span
                      className="manifesto-supporting-word manifesto-supporting-word-static"
                      key={`${paragraphIndex}-${word}-${index}`}
                    >
                      {word}
                    </span>
                  );
                })}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ScrollPrelude() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const primaryProgress = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  const heroOpacity = useTransform(primaryProgress, [0, 0.16, 0.34], ['1', '0.72', '0']);
  const heroFilter = useTransform(
    primaryProgress,
    [0, 0.11, 0.24],
    ['opacity(1)', 'opacity(0.42)', 'opacity(0)'],
  );
  const heroScale = useTransform(primaryProgress, [0, 0.34], [1, 0.945]);
  const heroY = useTransform(primaryProgress, [0, 0.34], [0, -120]);
  const manifestoOpacity = useTransform(primaryProgress, (current) => {
    const reveal = (current - 0.015) / (0.16 - 0.015);
    return Math.max(0, Math.min(1, reveal));
  });
  const manifestoScale = useTransform(primaryProgress, [0.015, 0.24], [0.96, 1]);
  const manifestoY = useTransform(primaryProgress, [0.015, 0.24], ['34vh', '0vh']);

  if (reduceMotion) {
    return (
      <div className="prelude-reduced">
        <HeroContent />
        <ManifestoContent />
      </div>
    );
  }

  return (
    <div className="prelude-scroll" ref={sectionRef}>
      <div className="prelude-sticky">
        <motion.div
          className="prelude-hero-layer"
          style={{ filter: heroFilter, opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          <HeroContent />
        </motion.div>
        <motion.div
          className="prelude-manifesto-layer"
          style={{ opacity: manifestoOpacity, scale: manifestoScale, y: manifestoY }}
        >
          <ManifestoContent headlineProgress={primaryProgress} supportingProgress={scrollYProgress} />
        </motion.div>
      </div>
    </div>
  );
}
