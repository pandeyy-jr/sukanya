'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { about } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const asideRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [asideRef.current, bodyRef.current].filter(Boolean) as HTMLElement[],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: asideRef.current,
            scroller: document.documentElement,
            start: 'top 78%',
            once: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="manifesto" id="about">
      <div className="inner">
        <div className="eyebrow" style={{ marginBottom: '10px' }}>
          {about.eyebrow.split(' · ').map((part, i) => (
            <span key={i}>{part}</span>
          ))}
          <span className="dash" aria-hidden="true" />
        </div>

        <div className="side">the short version</div>

        <motion.div
          ref={asideRef}
          className="aside"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          dangerouslySetInnerHTML={{ __html: about.heading }}
        />
        <span
          className="aside-line2"
          style={{
            fontFamily: 'var(--hand)',
            fontSize: 'clamp(26px, 2.6vw, 38px) / 1.2',
            fontWeight: '700',
            color: 'var(--orange)',
            letterSpacing: '0',
            marginTop: '6px',
            display: 'block',
            transform: 'rotate(-1.5deg)',
          }}
        >
          {about.headingLine2}
        </span>

        <motion.div
          ref={bodyRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="lead"
          style={{ maxWidth: '760px', marginTop: '44px' }}
          dangerouslySetInnerHTML={{ __html: about.body }}
        />

        <a
          href="https://www.linkedin.com/in/sukanya-pandey-878903253/"
          className="btn ink"
          target="_blank"
          rel="noreferrer"
          style={{ marginTop: '36px', display: 'inline-block' }}
        >
          {about.cta}
        </a>
      </div>
    </section>
  );
}
