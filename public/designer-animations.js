(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
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

  const clamp = (value, minimum = 0, maximum = 1) => Math.min(maximum, Math.max(minimum, value));
  const mix = (start, end, progress) => start + ((end - start) * clamp(progress));

  function range(value, start, end) {
    if (start === end) return value >= end ? 1 : 0;
    return clamp((value - start) / (end - start));
  }

  function keyframes(value, inputs, outputs) {
    if (value <= inputs[0]) return outputs[0];
    if (value >= inputs[inputs.length - 1]) return outputs[outputs.length - 1];

    for (let index = 0; index < inputs.length - 1; index += 1) {
      if (value <= inputs[index + 1]) {
        return mix(outputs[index], outputs[index + 1], range(value, inputs[index], inputs[index + 1]));
      }
    }

    return outputs[outputs.length - 1];
  }

  function cubicHermite(start, end, startSlope, endSlope, progress) {
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

  function mixColor(start, end, progress) {
    const amount = clamp(progress);
    const channels = start.map((channel, index) => Math.round(mix(channel, end[index], amount)));
    return `rgb(${channels.join(', ')})`;
  }

  function wrapWords(element, className) {
    if (!element || element.dataset.apWordsWrapped === 'true') return [];

    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let current = walker.nextNode();
    while (current) {
      if (current.nodeValue && current.nodeValue.trim()) textNodes.push(current);
      current = walker.nextNode();
    }

    const words = [];
    textNodes.forEach((textNode) => {
      const fragment = document.createDocumentFragment();
      textNode.nodeValue.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          fragment.appendChild(document.createTextNode(part));
          return;
        }

        const span = document.createElement('span');
        span.className = className;
        span.textContent = part;
        fragment.appendChild(span);
        words.push(span);
      });
      textNode.parentNode.replaceChild(fragment, textNode);
    });

    element.dataset.apWordsWrapped = 'true';
    return words;
  }

  function installPreludeAnimation() {
    const hero = document.querySelector('.heropin');
    const heroWrap = document.querySelector('.heropinwrap');
    const intro = document.querySelector('.introrow');
    if (!hero || !heroWrap || !intro || intro.dataset.apAnimationInstalled === 'true') return false;

    intro.dataset.apAnimationInstalled = 'true';
    hero.classList.add('ap-hero-motion');

    if (reducedMotion.matches) return true;

    const introCopy = intro.children[1];
    const title = introCopy && introCopy.children[0];
    const paragraphs = introCopy ? Array.from(introCopy.querySelectorAll('p')) : [];
    const headlineWords = wrapWords(title, 'ap-manifesto-word');
    const supportingWords = paragraphs.flatMap((paragraph) => wrapWords(paragraph, 'ap-manifesto-supporting-word'));

    const update = () => {
      const viewportHeight = window.innerHeight;
      const heroRect = heroWrap.getBoundingClientRect();
      const heroScrolled = Math.max(0, -heroRect.top);
      const primaryProgress = clamp(heroScrolled / Math.max(1, viewportHeight * 2.3));

      hero.style.setProperty('--ap-hero-opacity', String(keyframes(primaryProgress, [0, 0.16, 0.34], [1, 0.72, 0])));
      hero.style.setProperty('--ap-hero-filter-opacity', String(keyframes(primaryProgress, [0, 0.11, 0.24], [1, 0.42, 0])));
      hero.style.setProperty('--ap-hero-scale', String(keyframes(primaryProgress, [0, 0.34], [1, 0.945])));
      hero.style.setProperty('--ap-hero-y', `${keyframes(primaryProgress, [0, 0.34], [0, -120]).toFixed(2)}px`);

      const introRect = intro.getBoundingClientRect();
      const introProgress = clamp((viewportHeight * 0.9 - introRect.top) / Math.max(1, viewportHeight * 0.92));
      const headlineProgress = 0.28 + (introProgress * 0.65);
      const supportingProgress = 0.58 + (introProgress * 0.35);
      const ink = [33, 33, 33];
      const purple = [129, 74, 222];

      headlineWords.forEach((word, index) => {
        const start = 0.28 + ((index / Math.max(1, headlineWords.length)) * 0.48);
        const focus = start + 0.045;
        const settle = focus + 0.085;
        const reveal = range(headlineProgress, start - 0.07, focus);
        const rise = keyframes(headlineProgress, [start - 0.07, focus, settle], [8, 0, 0]);
        const scale = keyframes(headlineProgress, [start - 0.07, focus, settle], [0.97, 1.035, 1]);
        const towardPurple = range(headlineProgress, start - 0.07, focus);
        const awayFromPurple = range(headlineProgress, focus, settle);
        const color = headlineProgress <= focus
          ? mixColor(ink, purple, towardPurple)
          : mixColor(purple, ink, awayFromPurple);
        const glow = headlineProgress <= focus
          ? mix(0, 0.88, range(headlineProgress, start - 0.04, focus))
          : mix(0.88, 0, awayFromPurple);

        word.style.color = color;
        word.style.opacity = String(reveal);
        word.style.textShadow = `0 0 26px rgba(174, 243, 200, ${glow.toFixed(3)})`;
        word.style.transform = `translateY(${rise.toFixed(2)}px) scale(${scale.toFixed(4)})`;
      });

      supportingWords.forEach((word, index) => {
        const start = 0.58 + ((index / Math.max(1, supportingWords.length)) * 0.28);
        const settle = start + 0.035;
        const reveal = range(supportingProgress, start, settle);
        word.style.color = `rgba(33, 33, 33, ${mix(0.32, 0.72, reveal).toFixed(3)})`;
        word.style.opacity = String(reveal);
        word.style.transform = `translateY(${mix(7, 0, reveal).toFixed(2)}px)`;
      });
    };

    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return true;
  }

  function createTimelineScene() {
    const scene = document.createElement('div');
    scene.className = 'ap-timeline-flight-scroll';
    scene.setAttribute('aria-label', 'AgentPress workflow cards moving across the deal timeline');
    scene.innerHTML = `
      <div class="ap-timeline-flight-sticky">
        <div class="ap-timeline-scene">
          <svg class="ap-timeline-backdrop" aria-hidden="true" viewBox="0 0 1400 711">
            <use href="/v3/assets/timeline-sprite.svg#timeline-backdrop"></use>
          </svg>
          ${cardLabels.map((label, index) => `
            <div class="ap-timeline-card-anchor" style="z-index:${index + 10}">
              <svg class="ap-timeline-flight-card" role="img" aria-label="${label}" viewBox="0 0 254 306">
                <use href="/v3/assets/timeline-sprite.svg#timeline-card-${index + 1}"></use>
              </svg>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    return scene;
  }

  function installTimelineAnimation() {
    const overview = document.querySelector('object[data="assets/hero-graphic-v4.svg"]');
    if (!overview || overview.dataset.apAnimationInstalled === 'true') return false;

    overview.dataset.apAnimationInstalled = 'true';
    overview.classList.add('ap-timeline-original-overview');

    if (reducedMotion.matches) return true;

    const stage = createTimelineScene();
    overview.parentNode.insertBefore(stage, overview);
    const backdrop = stage.querySelector('.ap-timeline-backdrop');
    const cards = Array.from(stage.querySelectorAll('.ap-timeline-flight-card'));

    const update = () => {
      const rect = stage.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startOffset = viewportHeight * 0.65;
      const total = Math.max(1, rect.height - (viewportHeight * 0.35));
      const progress = clamp((startOffset - rect.top) / total);
      const backdropOpacity = keyframes(progress, [0, 0.04, 0.9, 1], [0.42, 1, 1, 0.26]);
      backdrop.style.opacity = String(backdropOpacity);

      cards.forEach((card, index) => {
        const travelDuration = 0.1405;
        const stageInterval = travelDuration * 0.66;
        const stageIn = 0.012 + (index * stageInterval);
        const leftArrival = stageIn + travelDuration;
        const queueX = 42.8 + (index * 0.8);
        const queueY = (index - ((cards.length - 1) / 2)) * 2.5;
        const completedX = -57.2 + (index * 0.8);
        const completedY = (index - ((cards.length - 1) / 2)) * 2.2;
        const approachShare = 1 / 3;
        const center = stageIn + (travelDuration * approachShare);
        let x = queueX;

        if (progress >= leftArrival) {
          x = completedX;
        } else if (progress > stageIn) {
          const travelProgress = (progress - stageIn) / travelDuration;
          const centerVelocity = -3;
          const approachCenterSlope = centerVelocity * approachShare;
          const departureShare = 1 - approachShare;
          const departureCenterSlope = centerVelocity * departureShare;

          if (travelProgress <= approachShare) {
            x = cubicHermite(queueX, 0, 0, approachCenterSlope, travelProgress / approachShare);
          } else {
            x = cubicHermite(
              0,
              completedX,
              departureCenterSlope,
              0,
              (travelProgress - approachShare) / departureShare,
            );
          }
        }

        const y = keyframes(progress, [stageIn, center, leftArrival], [queueY, 0, completedY]);
        const scale = keyframes(progress, [stageIn, center, leftArrival], [0.96, 1.025, 0.96]);
        let blur = 1.25;
        let shadowY = 16;
        let shadowBlur = 22;
        let shadowAlpha = 0.08;

        if (progress > stageIn && progress < leftArrival) {
          const travelProgress = (progress - stageIn) / travelDuration;
          const edgeBand = 0.16;
          const entranceBlur = travelProgress < edgeBand ? 1.25 * (1 - (travelProgress / edgeBand)) : 0;
          const exitBlur = travelProgress > (1 - edgeBand)
            ? 1.25 * ((travelProgress - (1 - edgeBand)) / edgeBand)
            : 0;
          const focus = 1 - Math.min(1, Math.abs(travelProgress - 0.44) / 0.38);
          blur = Math.max(entranceBlur, exitBlur);
          shadowY = 16 + (12 * focus);
          shadowBlur = 22 + (12 * focus);
          shadowAlpha = 0.08 + (0.12 * focus);
        }

        card.style.filter = `blur(${blur.toFixed(3)}px) drop-shadow(0 ${shadowY.toFixed(2)}px ${shadowBlur.toFixed(2)}px rgba(39, 30, 83, ${shadowAlpha.toFixed(3)}))`;
        card.style.transform = `translate3d(${x.toFixed(4)}vw, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
      });
    };

    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return true;
  }

  function installAnimations() {
    const preludeReady = installPreludeAnimation();
    const timelineReady = installTimelineAnimation();
    return preludeReady && timelineReady;
  }

  function start() {
    if (installAnimations()) return;

    const observer = new MutationObserver(() => {
      if (installAnimations()) observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
