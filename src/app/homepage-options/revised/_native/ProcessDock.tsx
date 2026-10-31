'use client';

import { Children, useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { onScroll, scrollToPosition } from './scroll';

const steps = [
  { label: 'Employee interviews', target: 'discovery', position: 1.7 },
  { label: 'ROI ranking', target: 'evaluation', position: 3.15 },
  { label: 'Roadmap and prototype', target: 'deliverables', position: 7.35 },
];
const clamp = (value: number) => Math.min(1, Math.max(0, value));
const range = (value: number, start: number, end: number) => clamp((value - start) / (end - start));
const smooth = (value: number) => value * value * (3 - 2 * value);
// Complete the outgoing fade before starting the incoming one. Both step
// changes share this timing, including when scrolling back up.
function stepFade(progress: number) {
  return {
    outgoing: 1 - smooth(range(progress, 0, .48)),
    incoming: smooth(range(progress, .52, 1)),
  };
}

export function ProcessDock({ intro, children }: { intro: ReactNode; children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const overview = useRef<HTMLDivElement>(null);
  const navigation = useRef<HTMLElement>(null);
  const links = useRef<Array<HTMLAnchorElement | null>>([]);
  const panels = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState(0);
  const [enhanced, setEnhanced] = useState(false);
  const lastActive = useRef(0);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const media = window.matchMedia('(min-width: 1280px) and (min-height: 720px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const setMode = () => {
      element.dataset.enhanced = String(media.matches);
      setEnhanced(media.matches);
    };
    setMode();
    media.addEventListener('change', setMode);
    const update = () => {
      const top = Number.parseFloat(getComputedStyle(element).getPropertyValue('--hp-process-top')) || 108;
      let nextActive = 0;
      if (media.matches) {
        const rootTop = element.getBoundingClientRect().top;
        const scrollDistance = Math.max(0, -rootTop);
        // Match the other full-screen sections: hold the complete overview
        // for 60svh before its headline and step row begin moving together.
        const travel = Math.max(0, scrollDistance - window.innerHeight * .6);
        const phase = travel / window.innerHeight;
        const distance = phase - 1;
        const headingHeight = overview.current?.offsetHeight ?? 160;
        const breathingRoom = Math.min(208, Math.max(176, window.innerHeight * .22));
        const gap = breathingRoom - 12; // Account for the row's internal top padding.
        const overviewTop = breathingRoom + 24 - top;
        const approach = smooth(range(window.innerHeight - rootTop, window.innerHeight * .12, window.innerHeight * .75));
        const approachOffset = 48 * (1 - approach);
        const navStart = overviewTop + headingHeight + gap + approachOffset;
        const navY = Math.max(0, navStart - travel);
        const headlineGoneAt = top + overviewTop + headingHeight;
        const entrance = range(travel, headlineGoneAt, headlineGoneAt + window.innerHeight * .28);
        const flyIn = 1 - (1 - entrance) ** 3;
        const focus = 1 - (1 - range(phase, 0, .35)) ** 2;
        const panelTop = top + (navigation.current?.offsetHeight ?? 124) + 12;
        element.style.setProperty('--hp-overview-y', `${(overviewTop + approachOffset - travel).toFixed(2)}px`);
        element.style.setProperty('--hp-overview-opacity', approach.toFixed(3));
        element.style.setProperty('--hp-nav-opacity', approach.toFixed(3));
        element.style.setProperty('--hp-nav-y', `${navY.toFixed(2)}px`);
        // Give each fade 2.5× the previous scroll travel, keeping the brief
        // clear midpoint and the same step crossover positions.
        const second = range(distance, .75, 1.45);
        const third = range(distance, 5, 5.7);
        const secondFade = stepFade(second);
        const thirdFade = stepFade(third);
        const opacity = [secondFade.outgoing, secondFade.incoming * thirdFade.outgoing, thirdFade.incoming];
        // The first panel begins wholly below the viewport. Only after the
        // headline has left does its top edge fly upward, at full opacity.
        const offsets = [
          (window.innerHeight - panelTop) * (1 - flyIn) - 24 * (1 - secondFade.outgoing),
          24 * (1 - secondFade.incoming) - 24 * (1 - thirdFade.outgoing),
          24 * (1 - thirdFade.incoming),
        ];
        panels.current.forEach((panel, index) => {
          panel?.style.setProperty('--hp-panel-opacity', opacity[index].toFixed(3));
          panel?.style.setProperty('--hp-panel-offset', `${offsets[index].toFixed(2)}px`);
        });
        element.dataset.roiProgress = String(.06 + .88 * range(distance, 1.15, 5.4));
        const backdrop = element.querySelector<HTMLElement>('.hp-roi-background');
        const flight = element.querySelector<HTMLElement>('.ap-timeline-flight-scroll');
        if (backdrop && flight) {
          const backgroundBounds = backdrop.getBoundingClientRect();
          const flightBounds = flight.getBoundingClientRect();
          backdrop.style.setProperty('--hp-roi-center', `${(flightBounds.left + flightBounds.width / 2 - backgroundBounds.left).toFixed(2)}px`);
        }
        [1 - second, second * (1 - third), third].forEach((weight, index) => {
          links.current[index]?.style.setProperty('--hp-step-emphasis', (1 - focus * (1 - weight)).toFixed(3));
        });
        nextActive = distance < 1.1 ? 0 : distance < 5.35 ? 1 : 2;
      } else {
        const line = top + (element.querySelector('nav')?.getBoundingClientRect().height ?? 100) + window.innerHeight * .2;
        steps.forEach((step, index) => {
          if ((document.getElementById(step.target)?.getBoundingClientRect().top ?? Infinity) <= line) nextActive = index;
        });
        const started = (document.getElementById(steps[0].target)?.getBoundingClientRect().top ?? Infinity) <= line;
        links.current.forEach((link, index) => link?.style.setProperty('--hp-step-emphasis', String(!started || index === nextActive ? 1 : 0)));
      }
      if (nextActive !== lastActive.current) {
        lastActive.current = nextActive;
        setActive(nextActive);
      }
    };
    const stop = onScroll(update);
    const observer = new ResizeObserver(update);
    if (overview.current) observer.observe(overview.current);
    if (navigation.current) observer.observe(navigation.current);
    const hashStep = steps.find(step => '#' + step.target === window.location.hash);
    if (hashStep && media.matches) requestAnimationFrame(() => {
      scrollToPosition(element.getBoundingClientRect().top + window.scrollY + hashStep.position * window.innerHeight);
    });
    return () => { stop(); observer.disconnect(); media.removeEventListener('change', setMode); };
  }, []);

  const navigate = (event: MouseEvent<HTMLAnchorElement>, index: number) => {
    if (!enhanced || !root.current) return;
    event.preventDefault();
    scrollToPosition(root.current.getBoundingClientRect().top + window.scrollY + steps[index].position * window.innerHeight);
    window.history.replaceState(null, '', '#' + steps[index].target);
  };

  return <div ref={root} className="hp-process-experience">
    <div className="hp-process-sticky">
      <div ref={overview} className="hp-process-overview-heading">{intro}</div>
      <nav ref={navigation} className="hp-process-nav" aria-label="Initial engagement steps">
        <ol>{steps.map((step, index) => <li key={step.target}>
          <a ref={element => { links.current[index] = element; }} href={'#' + step.target} onClick={event => navigate(event, index)}
            aria-current={active === index ? 'step' : undefined} aria-label={`Step ${index + 1}: ${step.label}`}>
            <span className="hp-process-nav-number" aria-hidden="true">{index + 1}</span>
            <span>{step.label}</span>
          </a>
        </li>)}</ol>
      </nav>
      <div className="hp-process-panels">{Children.map(children, (child, index) =>
        <div ref={element => { panels.current[index] = element; }} className="hp-process-panel"
          data-process-step={index + 1} aria-hidden={enhanced && active !== index ? true : undefined}
          inert={enhanced && active !== index ? true : undefined}>
          {child}
        </div>,
      )}</div>
    </div>
  </div>;
}
