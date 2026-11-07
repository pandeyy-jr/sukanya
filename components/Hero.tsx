'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from '@/components/SplitText';
import { hero } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const headlineWrapRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const collageRef = useRef<HTMLDivElement>(null);
  const meRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered hero text reveal on scroll
      gsap.fromTo(
        [line1Ref.current, line2Ref.current, leadRef.current, ctasRef.current].filter(Boolean) as HTMLElement[],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          stagger: 0.18,
          scrollTrigger: {
            trigger: line1Ref.current,
            scroller: document.documentElement,
            start: 'top 78%',
            once: true,
          },
        }
      );

      // Portrait reveal
      gsap.fromTo(
        meRef.current,
        { opacity: 0, scale: 1.05, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: meRef.current,
            scroller: document.documentElement,
            start: 'top 82%',
            once: true,
          },
        }
      );

      // Gentle float
      gsap.to(meRef.current, {
        y: -15,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="wash" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="dots" aria-hidden="true" />

      <div className="hero-grid">
        {/* Left column — copy */}
        <div className="txt">
          <div className="eyebrow">
            {hero.eyebrow.split(' · ').map((part, i) => (
              <span key={i}>{part}</span>
            ))}
            <span className="dash" aria-hidden="true" />
          </div>

          <motion.div
            ref={headlineWrapRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <SplitText split="words" tag="span" ref={line1Ref} className="block">
              {hero.headlineLine1}
            </SplitText>
            <br />
            <SplitText split="words" tag="span" ref={line2Ref} className="block">
              {hero.headlineLine2}
            </SplitText>
          </motion.div>

          <motion.p ref={leadRef} className="lead" dangerouslySetInnerHTML={{ __html: hero.intro }} />

          <motion.div ref={ctasRef} className="ctas">
            <a href="#about" className="btn ink">
              {hero.primaryCta} <ArrowDown size={14} />
            </a>
            <a href="#contact" className="btn ghost" onClick={(e) => { e.preventDefault(); (window as any).__lenis?.scrollTo('#contact', { offset: -90, duration: 1 }); }}>
              {hero.secondaryCta} <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>

        {/* Right column — portrait collage */}
        <div className="collage" ref={collageRef}>
          <div className="blk o" aria-hidden="true" />
          <div className="blk y" aria-hidden="true" />
          <div className="blk b" aria-hidden="true" />
          <div className="blk g" aria-hidden="true" />

          <Image
            ref={meRef}
            src="/images/sukanya-portrait.png"
            alt="Sukanya Pandey in a black professional blazer"
            width={800}
            height={800}
            sizes="(max-width: 920px) 80vw, 520px"
            className="me"
            priority
            style={{ objectFit: 'contain' }}
          />

          <div className="tape" aria-hidden="true" />
          <div className="ann" aria-hidden="true" style={{ top: '18%', right: '6%' }}>
            01 / PROFILE
          </div>
          <div className="sticky" aria-hidden="true">
            <span className="sticky-label">INDIA · 2026</span>
            SENIOR TAX ASSOCIATE
            <br />
            RYAN TAX SERVICES
          </div>
        </div>
      </div>
    </section>
  );
}
