'use client';

import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { chapters } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function Chapters() {
  return (
    <section className="chapters" id="expertise">
      <div className="inner" style={{ paddingTop: '140px', paddingBottom: '120px' }}>
        <div className="eyebrow" style={{ marginBottom: '10px', justifyContent: 'space-between' }}>
          <span>AREAS OF EXPERTISE</span>
          <span className="dash" aria-hidden="true" />
        </div>
        <h2
          className="hand"
          style={{
            fontSize: 'clamp(40px, 5vw, 56px)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            marginBottom: '10px',
            fontWeight: '700',
          }}
        >
          How I <span style={{ color: 'var(--orange)' }}>work.</span>
        </h2>
        <p className="lead" style={{ maxWidth: '540px', marginBottom: '60px' }}>
          Different parts of the process. One consistent standard: accuracy.
        </p>

        <div className="chapter-list" style={{ display: 'grid', gap: '0', borderTop: '1px solid var(--line)' }}>
          {chapters.map((chapter, idx) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.12 }}
              style={{
                padding: '52px 0',
                borderBottom: '1px solid var(--line)',
                display: 'grid',
                gridTemplateColumns: '100px 1fr 160px',
                gap: '34px',
              }}
            >
              <div className="chapter-number" style={{ fontFamily: 'var(--serif, var(--sans))', fontSize: '34px', fontWeight: '600', color: 'var(--muted)', lineHeight: '1' }}>
                {chapter.number}<span style={{ opacity: 0.5 }}> / 04</span>
              </div>
              <div className="chapter-main" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span className="eyebrow" style={{ marginBottom: '12px' }}>{chapter.eyebrow}</span>
                <h3 style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '500', lineHeight: '0.92', letterSpacing: '-0.05em', margin: '0 0 10px', color: 'var(--ink)' }}>
                  {chapter.title}<span style={{ color: 'var(--orange)' }}>.</span>
                </h3>
                <span className="chapter-subtitle" style={{ fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: '500', letterSpacing: '0.08em', color: 'var(--orange)', textTransform: 'uppercase', margin: '0 0 10px', display: 'block' }}>
                  {chapter.subtitle}
                </span>
                <p className="chapter-body" style={{ fontSize: '12px', lineHeight: '1.9', color: 'var(--muted)', margin: '0 0 20px', maxWidth: '560px' }}>
                  {chapter.body}
                </p>
                <div className="chapter-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {chapter.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '8px',
                        fontWeight: '500',
                        letterSpacing: '0.12em',
                        color: 'var(--muted)',
                        border: '1px solid rgba(27,26,24,0.1)',
                        borderRadius: '30px',
                        padding: '6px 12px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="chapter-side" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <span className="chapter-mark" style={{ fontFamily: 'var(--mono)', fontSize: '8px', fontWeight: '500', letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase', textAlign: 'right' }}>
                  {chapter.mark}
                </span>
                <motion.span
                  className="chapter-symbol"
                  whileHover={{ rotate: 6, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  style={{
                    fontFamily: 'var(--serif, var(--sans))',
                    fontSize: '48px',
                    fontWeight: '500',
                    color: 'var(--orange)',
                    opacity: 0.45,
                    lineHeight: '1',
                    transformOrigin: 'center',
                    display: 'block',
                    marginBottom: '20px',
                  }}
                >
                  {idx === 0 ? '↗' : idx === 1 ? '↳' : idx === 2 ? '◎' : '＋'}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
