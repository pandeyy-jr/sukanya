'use client';

import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { education } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  return (
    <section style={{ padding: '140px 28px 120px', position: 'relative' }} id="education">
      <div className="inner">
        <div className="eyebrow" style={{ marginBottom: '10px', justifyContent: 'space-between' }}>
          <span>ACADEMIC FOUNDATIONS</span>
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
          Studied <span style={{ color: 'var(--orange)' }}>finance.</span>
        </h2>
        <p className="lead" style={{ maxWidth: '540px', marginBottom: '60px' }}>
          A background in finance and general management studies.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '48px' }}>
          {education.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.14 }}
              style={{
                padding: '28px 26px 26px',
                border: '1px solid var(--line)',
                minHeight: '250px',
                position: 'relative',
                transition: 'border-color 0.3s ease',
              }}
            >
              <span className="mono" style={{ marginBottom: '6px', display: 'block' }}>
                {idx + 1} / Education
              </span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: '500', letterSpacing: '0.12em', color: 'var(--orange)', margin: '26px 0 12px', display: 'block', textTransform: 'uppercase' }}>
                {edu.period}
              </span>
              <h3 style={{ fontFamily: 'var(--sans)', fontSize: '24px', fontWeight: '500', letterSpacing: '-0.03em', margin: '0 0 8px', color: 'var(--ink)' }}>
                {edu.institution}
              </h3>
              <h4 style={{ fontFamily: 'var(--sans)', fontSize: '12px', fontWeight: '500', letterSpacing: '0.05em', margin: '0 0 14px', color: 'var(--muted)' }}>
                {edu.qualification}
              </h4>
              <span className="mono">{edu.focus}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
