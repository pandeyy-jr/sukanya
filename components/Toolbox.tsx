'use client';

import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

const groupColors: Record<string, string> = {
  Taxation: 'var(--orange)',
  Accounting: 'var(--blue)',
  'Tools & Technology': 'var(--green)',
  'Professional Skills': 'var(--yellow)',
};

export default function Toolbox() {
  return (
    <section className="toolbox" id="toolbox">
      <div className="inner" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="eyebrow" style={{ marginBottom: '10px', justifyContent: 'space-between' }}>
          <span>PROFESSIONAL TOOLBOX</span>
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
          Good work needs <span style={{ color: 'var(--orange)' }}>good tools.</span>
        </h2>
        <p className="tb-sub">A practical mix of domain knowledge, working tools and professional skills.</p>

        <div className="drawers">
          {skills.map((group, gi) => (
            <motion.div
              key={group.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: gi * 0.12 }}
              className="drawer"
              style={{ background: 'var(--card)', borderColor: 'var(--ink)' }}
            >
              <div className="tab" style={{ background: groupColors[group.title] }}>
                {group.number}
              </div>
              <h3 style={{ fontFamily: 'var(--sans)', fontSize: '22px', fontWeight: '500', letterSpacing: '-0.03em', margin: '30px 0 20px', color: 'var(--ink)' }}>
                {group.title}
              </h3>
              <div className="skill-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '8.5px',
                      fontWeight: '500',
                      letterSpacing: '0.12em',
                      color: 'var(--muted)',
                      border: '1px solid rgba(27,26,24,0.1)',
                      borderRadius: '30px',
                      padding: '6px 11px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
