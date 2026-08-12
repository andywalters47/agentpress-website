import Lenis from 'lenis';

type Updater = () => void;

const updaters = new Set<Updater>();
let lenis: Lenis | null = null;
let listening = false;
let frame = 0;

const runUpdaters = () => { updaters.forEach((updater) => updater()); };

// Native scroll and resize events are not guaranteed to arrive once per frame,
// so they are coalesced onto a single animation frame. Lenis needs no such
// throttle: it emits exactly once per frame from inside its own rAF.
const scheduleUpdaters = () => {
  if (frame) return;
  frame = requestAnimationFrame(() => { frame = 0; runUpdaters(); });
};

function attach() {
  if (lenis) lenis.on('scroll', runUpdaters);
  else window.addEventListener('scroll', scheduleUpdaters, { passive: true });
}

function detach() {
  if (lenis) lenis.off('scroll', runUpdaters);
  else window.removeEventListener('scroll', scheduleUpdaters);
}

/**
 * Register a scroll-driven update.
 *
 * While Lenis owns the scroll the updater is called synchronously from Lenis'
 * own rAF, right after the smoothed position has been written and before the
 * browser paints, so what it measures is the position the page is about to be
 * rendered at. Listening to the native `scroll` event instead would run it a
 * frame late and the animation would visibly trail the page.
 *
 * The updater is primed immediately and re-run on resize. Returns a teardown.
 */
export function onScroll(updater: Updater) {
  updaters.add(updater);
  if (!listening) {
    listening = true;
    window.addEventListener('resize', scheduleUpdaters);
    attach();
  }
  updater();
  return () => {
    updaters.delete(updater);
    if (updaters.size || !listening) return;
    listening = false;
    window.removeEventListener('resize', scheduleUpdaters);
    detach();
    if (frame) { cancelAnimationFrame(frame); frame = 0; }
  };
}

export function getLenis() {
  return lenis;
}

const easeOutCubic = (progress: number) => 1 - ((1 - progress) ** 3);

/**
 * Scroll to an absolute document position. Animating this by hand would fight
 * Lenis for the scroll position every frame, so it is handed over when Lenis
 * is running and left to the browser when it is not.
 */
export function scrollToPosition(top: number) {
  if (lenis) {
    lenis.scrollTo(top, { duration: 0.9, easing: easeOutCubic });
    return;
  }
  window.scrollTo({ top, behavior: 'smooth' });
}

/**
 * Start Lenis and move every registered updater over to it. Safe to call
 * before or after the updaters register — they are re-pointed either way.
 * Returns a teardown that hands them back to the native listeners.
 */
export function startSmoothScroll() {
  if (lenis) return () => {};

  if (listening) detach();
  const instance = new Lenis({
    // Touch scrolling stays native; Lenis only smooths wheel and keyboard
    // input. It still emits `scroll` for native scrolls, so the scroll-driven
    // sections keep updating on mobile.
    syncTouch: false,
    autoRaf: true,
  });
  lenis = instance;
  if (listening) {
    attach();
    scheduleUpdaters();
  }

  return () => {
    if (lenis !== instance) return;
    if (listening) detach();
    lenis = null;
    instance.destroy();
    if (listening) {
      attach();
      scheduleUpdaters();
    }
  };
}
