'use client';

import { useEffect } from 'react';
import { startSmoothScroll } from '@/lib/scroll';

export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let stop: (() => void) | null = null;

    // Smoothing the scroll is exactly the kind of motion this query opts out
    // of, so Lenis is torn down rather than started while it matches. The
    // scroll-driven sections fall back to native scroll listeners on their own.
    const sync = () => {
      if (reduced.matches) {
        stop?.();
        stop = null;
        return;
      }
      stop ??= startSmoothScroll();
    };

    sync();
    reduced.addEventListener('change', sync);
    return () => {
      reduced.removeEventListener('change', sync);
      stop?.();
    };
  }, []);

  return null;
}
