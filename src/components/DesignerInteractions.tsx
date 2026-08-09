'use client';

import { useEffect } from 'react';

const clamp = (value: number, minimum = 0, maximum = 1) => Math.min(maximum, Math.max(minimum, value));
const mix = (start: number, end: number, progress: number) => start + ((end - start) * clamp(progress));

function range(value: number, start: number, end: number) {
  if (start === end) return value >= end ? 1 : 0;
  return clamp((value - start) / (end - start));
}

function keyframes(value: number, inputs: number[], outputs: number[]) {
  if (value <= inputs[0]) return outputs[0];
  if (value >= inputs[inputs.length - 1]) return outputs[outputs.length - 1];
  for (let index = 0; index < inputs.length - 1; index += 1) {
    if (value <= inputs[index + 1]) {
      return mix(outputs[index], outputs[index + 1], range(value, inputs[index], inputs[index + 1]));
    }
  }
  return outputs[outputs.length - 1];
}

function cubicHermite(start: number, end: number, startSlope: number, endSlope: number, progress: number) {
  const squared = progress ** 2;
  const cubed = progress ** 3;
  return (((2 * cubed) - (3 * squared) + 1) * start)
    + ((cubed - (2 * squared) + progress) * startSlope)
    + (((-2 * cubed) + (3 * squared)) * end)
    + ((cubed - squared) * endSlope);
}

function mixColor(start: number[], end: number[], progress: number) {
  const channels = start.map((channel, index) => Math.round(mix(channel, end[index], progress)));
  return `rgb(${channels.join(', ')})`;
}

function installNavigation() {
  const toggle = document.querySelector<HTMLButtonElement>('.navtoggle');
  const panel = document.querySelector<HTMLElement>('.navpanel');
  if (!toggle || !panel) return () => {};

  const icon = toggle.querySelector<HTMLElement>('i');
  const setOpen = (open: boolean) => {
    panel.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    icon?.classList.toggle('ti-menu-2', !open);
    icon?.classList.toggle('ti-x', open);
  };
  const onToggle = () => setOpen(!panel.classList.contains('open'));
  const onPanelClick = (event: Event) => {
    if ((event.target as Element).closest('a')) setOpen(false);
  };
  toggle.addEventListener('click', onToggle);
  panel.addEventListener('click', onPanelClick);
  return () => {
    toggle.removeEventListener('click', onToggle);
    panel.removeEventListener('click', onPanelClick);
  };
}

function installBackToTop() {
  const element = document.querySelector<HTMLElement>('a[aria-label="Back to top"]');
  if (!element) return () => {};
  const onScroll = () => {
    const show = window.scrollY > window.innerHeight;
    element.style.opacity = show ? '1' : '0';
    element.style.pointerEvents = show ? 'auto' : 'none';
  };
  const onClick = (event: Event) => {
    event.preventDefault();
    const start = window.scrollY;
    const duration = 900;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - ((1 - progress) ** 3);
      window.scrollTo(0, start * (1 - eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  element.addEventListener('click', onClick);
  onScroll();
  return () => {
    window.removeEventListener('scroll', onScroll);
    element.removeEventListener('click', onClick);
  };
}

function installLogoScale() {
  const inner = Array.from(document.querySelectorAll<HTMLElement>('div')).find((element) => (
    element.style.width === '1188px' && element.style.height.startsWith('177.09')
  ));
  const outer = inner?.parentElement;
  if (!inner || !outer) return () => {};
  const width = 1188;
  const height = 177.095;
  const apply = () => {
    const availableWidth = outer.clientWidth || width;
    const scale = Math.min(1, availableWidth / width);
    inner.style.transform = `translateX(${((availableWidth - (width * scale)) / 2).toFixed(2)}px) scale(${scale.toFixed(4)})`;
    outer.style.height = `${(height * scale).toFixed(2)}px`;
  };
  if (window.ResizeObserver) {
    const observer = new ResizeObserver(apply);
    observer.observe(outer);
    apply();
    return () => observer.disconnect();
  }
  window.addEventListener('resize', apply);
  apply();
  return () => window.removeEventListener('resize', apply);
}

function installFeatureSection() {
  const wrapper = document.querySelector<HTMLElement>('.featpin');
  if (!wrapper) return () => {};
  const sentinels = Array.from(wrapper.querySelectorAll<HTMLElement>('.fsent'));
  const rows = Array.from(wrapper.querySelectorAll<HTMLElement>('.frow'));
  const marks = Array.from(wrapper.querySelectorAll<HTMLButtonElement>('.fmark'));
  wrapper.style.height = `${sentinels.length * 100}vh`;
  sentinels.forEach((sentinel, index) => { sentinel.style.top = `${index * 100}vh`; });

  const setStep = (index: number) => {
    rows.forEach((row) => row.classList.toggle('on', Number(row.dataset.step) === index));
    marks.forEach((mark) => mark.classList.toggle('on', Number(mark.dataset.mark) === index));
  };
  const onMark = (event: Event) => {
    const mark = event.currentTarget as HTMLElement;
    const index = Number(mark.dataset.mark);
    const top = wrapper.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + (index * window.innerHeight) + 8, behavior: 'smooth' });
  };
  marks.forEach((mark) => mark.addEventListener('click', onMark));
  setStep(0);

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 767px)');
  let observer: IntersectionObserver | undefined;
  if (!reduced.matches) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setStep(Number((entry.target as HTMLElement).dataset.sentinel));
      });
    }, { root: document, rootMargin: '-49% 0px -49% 0px', threshold: 0 });
    sentinels.forEach((sentinel) => observer?.observe(sentinel));
  }
  return () => {
    observer?.disconnect();
    marks.forEach((mark) => mark.removeEventListener('click', onMark));
  };
}

function installPreludeAnimation() {
  const hero = document.querySelector<HTMLElement>('.heropin');
  const prelude = document.querySelector<HTMLElement>('.ap-prelude-scroll');
  const intro = document.querySelector<HTMLElement>('.introrow');
  const introShell = intro?.parentElement;
  if (!hero || !prelude || !intro || !introShell) return () => {};

  const firstBubble = hero.querySelector<HTMLElement>('.ap-hero-bubble-1');
  const secondBubble = hero.querySelector<HTMLElement>('.ap-hero-bubble-2');
  const headlineWords = Array.from(intro.querySelectorAll<HTMLElement>('.ap-manifesto-word'));
  const paragraphs = Array.from(intro.querySelectorAll<HTMLParagraphElement>('p'));
  const supportingParagraphs = paragraphs.map((paragraph) => (
    Array.from(paragraph.querySelectorAll<HTMLElement>('.ap-manifesto-supporting-word'))
  ));
  const ink = [33, 33, 33];
  const accentGreen = [45, 196, 168];

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const animateHeadlineBlock = (words: HTMLElement[], progress: number, blockStart: number, blockEnd: number) => {
    const duration = blockEnd - blockStart;
    words.forEach((word, index) => {
      const wordStart = blockStart + ((index / Math.max(1, words.length)) * duration);
      const wordEnd = blockStart + (((index + 1) / Math.max(1, words.length)) * duration);
      const wordProgress = range(progress, wordStart, wordEnd);
      const focus = 0.48;
      const towardGreen = range(wordProgress, 0, focus);
      const awayFromGreen = range(wordProgress, focus, 1);
      word.style.color = wordProgress <= focus
        ? mixColor(ink, accentGreen, towardGreen)
        : mixColor(accentGreen, ink, awayFromGreen);
      const glow = wordProgress <= focus ? mix(0, 0.88, towardGreen) : mix(0.88, 0, awayFromGreen);
      word.style.opacity = String(range(wordProgress, 0, 0.34));
      word.style.textShadow = `0 0 26px rgba(174, 243, 200, ${glow.toFixed(3)})`;
      word.style.transform = `translateY(${mix(8, 0, wordProgress).toFixed(2)}px) scale(${keyframes(wordProgress, [0, focus, 1], [0.97, 1.035, 1]).toFixed(4)})`;
    });
  };

  const animateSupportingBlock = (words: HTMLElement[], progress: number, blockStart: number, blockEnd: number) => {
    const duration = blockEnd - blockStart;
    words.forEach((word, index) => {
      const wordStart = blockStart + ((index / Math.max(1, words.length)) * duration);
      const wordEnd = blockStart + (((index + 1) / Math.max(1, words.length)) * duration);
      const wordProgress = range(progress, wordStart, wordEnd);
      word.style.color = `rgba(33, 33, 33, ${mix(0.32, 0.72, wordProgress).toFixed(3)})`;
      word.style.opacity = String(wordProgress);
      word.style.transform = `translateY(${mix(7, 0, wordProgress).toFixed(2)}px)`;
    });
  };

  const update = () => {
    const viewportHeight = window.innerHeight;
    const preludeRect = prelude.getBoundingClientRect();
    const stickyHeight = Math.max(1, viewportHeight - 80);
    const preludeProgress = clamp((-preludeRect.top) / Math.max(1, preludeRect.height - stickyHeight));
    const primaryProgress = clamp(preludeProgress / 0.6);
    const parallaxProgress = range(primaryProgress, 0, 0.34);
    hero.style.setProperty('--ap-hero-opacity', String(keyframes(primaryProgress, [0, 0.16, 0.34], [1, 0.72, 0])));
    hero.style.setProperty('--ap-hero-filter-opacity', String(keyframes(primaryProgress, [0, 0.11, 0.24], [1, 0.42, 0])));
    hero.style.setProperty('--ap-hero-scale', String(keyframes(primaryProgress, [0, 0.34], [1, 0.945])));
    hero.style.setProperty('--ap-hero-y', `${keyframes(primaryProgress, [0, 0.34], [0, -120]).toFixed(2)}px`);
    firstBubble?.style.setProperty('--ap-bubble-y', `${mix(0, -86, parallaxProgress).toFixed(2)}px`);
    secondBubble?.style.setProperty('--ap-bubble-y', `${mix(0, -138, parallaxProgress).toFixed(2)}px`);
    introShell.style.setProperty('--ap-manifesto-opacity', String(range(primaryProgress, 0.015, 0.16)));
    introShell.style.setProperty('--ap-manifesto-scale', String(keyframes(primaryProgress, [0.015, 0.24], [0.96, 1])));
    introShell.style.setProperty('--ap-manifesto-y', `${keyframes(primaryProgress, [0.015, 0.24], [34, 0]).toFixed(2)}vh`);
    const introProgress = range(preludeProgress, 0.10, 0.78);
    animateHeadlineBlock(headlineWords, introProgress, 0, 0.24);
    animateSupportingBlock(supportingParagraphs[0] ?? [], introProgress, 0.56, 0.73);
    animateSupportingBlock(supportingParagraphs[1] ?? [], introProgress, 0.77, 1);
  };

  let frame = 0;
  const schedule = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => { frame = 0; update(); });
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  update();
  return () => {
    if (frame) cancelAnimationFrame(frame);
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
  };
}

function installIntegrationAnimation() {
  const section = document.querySelector<HTMLElement>('.ap-integrations-section');
  const tools = section ? Array.from(section.querySelectorAll<HTMLElement>('.ap-integration-tool')) : [];
  if (!section || !tools.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const update = () => {
    const viewportHeight = window.innerHeight;
    const firstToolTop = tools[0].getBoundingClientRect().top;
    const progress = clamp(((viewportHeight * 0.92) - firstToolTop) / (viewportHeight * 0.62));
    const staggerSpan = 0.585;
    const revealDuration = 0.165;

    tools.forEach((tool, index) => {
      const start = (index / Math.max(1, tools.length - 1)) * staggerSpan;
      const toolProgress = range(progress, start, start + revealDuration);
      const scale = keyframes(toolProgress, [0, 0.72, 1], [0.75, 1.16, 1]);
      tool.style.opacity = '1';
      tool.style.transform = `scale(${scale.toFixed(4)})`;
    });
  };

  let frame = 0;
  const schedule = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => { frame = 0; update(); });
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  update();
  return () => {
    if (frame) cancelAnimationFrame(frame);
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
  };
}

function installTimelineAnimation() {
  const stage = document.querySelector<HTMLElement>('.ap-timeline-flight-scroll');
  const backdrop = stage?.querySelector<SVGElement>('.ap-timeline-backdrop');
  const cards = stage ? Array.from(stage.querySelectorAll<SVGElement>('.ap-timeline-flight-card')) : [];
  if (!stage || !backdrop || !cards.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const update = () => {
    const rect = stage.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const progress = clamp((viewportHeight - rect.top) / Math.max(1, rect.height));
    backdrop.style.opacity = String(keyframes(progress, [0, 0.04, 0.9, 1], [0.42, 1, 1, 0.26]));

    cards.forEach((card, index) => {
      const travelDuration = 0.1405;
      const stageInterval = travelDuration * 0.66;
      const stageIn = index * stageInterval;
      const completedArrival = stageIn + travelDuration;
      const queueX = -50 - (index * 0.8);
      const queueY = 0;
      const completedX = 57.2 - (index * 0.8);
      const completedY = 0;
      const approachShare = 1 / 3;
      const center = stageIn + (travelDuration * approachShare);
      let x = queueX;
      if (progress >= completedArrival) {
        x = completedX;
      } else if (progress > stageIn) {
        const travelProgress = (progress - stageIn) / travelDuration;
        const centerVelocity = 3;
        if (travelProgress <= approachShare) {
          x = cubicHermite(queueX, 0, 0, centerVelocity * approachShare, travelProgress / approachShare);
        } else {
          const departureShare = 1 - approachShare;
          x = cubicHermite(0, completedX, centerVelocity * departureShare, 0, (travelProgress - approachShare) / departureShare);
        }
      }

      const y = keyframes(progress, [stageIn, center, completedArrival], [queueY, 0, completedY]);
      const travelProgress = clamp((progress - stageIn) / travelDuration);
      const edgeScale = 0.96;
      const centerScale = 1.14;
      const segmentProgress = travelProgress <= approachShare
        ? range(travelProgress, 0, approachShare)
        : range(travelProgress, approachShare, 1);
      const easedScale = segmentProgress * segmentProgress * (3 - (2 * segmentProgress));
      const scale = travelProgress <= approachShare
        ? mix(edgeScale, centerScale, easedScale)
        : mix(centerScale, edgeScale, easedScale);
      const perspectiveAmount = keyframes(travelProgress, [0, 1 / 6, 1 / 2, 1], [1, 0, 0, 1]);
      let blur = 0.625;
      let shadowY = 16;
      let shadowBlur = 22;
      let shadowAlpha = 0.08;
      if (progress > stageIn && progress < completedArrival) {
        const edgeBand = 0.16;
        const entranceBlur = travelProgress < edgeBand ? 0.625 * (1 - (travelProgress / edgeBand)) : 0;
        const exitBlur = travelProgress > (1 - edgeBand) ? 0.625 * ((travelProgress - (1 - edgeBand)) / edgeBand) : 0;
        const focus = 1 - Math.min(1, Math.abs(travelProgress - 0.44) / 0.38);
        blur = Math.max(entranceBlur, exitBlur);
        shadowY = 16 + (12 * focus);
        shadowBlur = 22 + (12 * focus);
        shadowAlpha = 0.08 + (0.12 * focus);
      }
      card.style.filter = `blur(${blur.toFixed(3)}px) drop-shadow(0 ${shadowY.toFixed(2)}px ${shadowBlur.toFixed(2)}px rgba(39, 30, 83, ${shadowAlpha.toFixed(3)}))`;
      card.style.transform = `translate3d(${x.toFixed(4)}vw, ${y.toFixed(2)}px, 0) perspective(1500px) rotateX(${(5.25 * perspectiveAmount).toFixed(3)}deg) rotateY(${(-15 * perspectiveAmount).toFixed(3)}deg) skewY(${(-10 * perspectiveAmount).toFixed(3)}deg) scale(${scale.toFixed(4)})`;
    });
  };

  let frame = 0;
  const schedule = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => { frame = 0; update(); });
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  update();
  return () => {
    if (frame) cancelAnimationFrame(frame);
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
  };
}

export function DesignerInteractions({ home }: { home: boolean }) {
  useEffect(() => {
    const cleanups = [installNavigation(), installBackToTop()];
    if (home) {
      cleanups.push(
        installLogoScale(),
        installFeatureSection(),
        installPreludeAnimation(),
        installIntegrationAnimation(),
        installTimelineAnimation(),
      );
    }
    return () => cleanups.forEach((cleanup) => cleanup());
  }, [home]);

  return null;
}
