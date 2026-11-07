'use client';

import { useEffect, useCallback, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialises Lenis smooth scrolling and wires it to GSAP ScrollTrigger.
 * Mounted once at the root of the app. GSAP contexts created elsewhere are
 * scoped and cleaned up independently so they never fight Lenis.
 */
export default function LenisScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  const raf = useCallback(
    (time: number) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time * 1000);
      }
    },
    []
  );

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: window,
      content: document.documentElement,
      eventsTarget: window,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      duration: 1.25,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
      autoRaf: false,
      respectReducedMotion: true,
    });

    lenisRef.current = lenis;

    // Expose for programmatic scroll-to from nav/footer links.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__lenis = lenis;

    // Keep ScrollTrigger in sync with Lenis scroll position.
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Drive Lenis from the GSAP ticker for smooth, consistent animation.
    gsap.ticker.add(raf);

    // ScrollTrigger scroller proxy so scroll-linked animations read Lenis.
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value?: number) {
        if (arguments.length) {
          lenis.scrollTo(value as number);
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    // Refresh ScrollTrigger after fonts/layout settle.
    gsap.delayedCall(0.2, () => ScrollTrigger.refresh());
    window.addEventListener('resize', () => ScrollTrigger.refresh());

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).__lenis = undefined;
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener('resize', () => ScrollTrigger.refresh());
    };
  }, [raf]);

  return null;
}
