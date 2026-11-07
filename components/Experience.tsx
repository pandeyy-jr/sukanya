'use client';

import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  return (
    <section className="record" id="experience">
      <div className="inner" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
        <div className="eyebrow" style={{ marginBottom: '10px', justifyContent: 'space-between' }}>
          <span>TRACK RECORD</span>
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
          Built through <span style={{ color: 'var(--orange)' }}>experience.</span>
        </h2>
        <p className="lead" style={{ maxWidth: '540px', marginBottom: '60px' }}>
          A career shaped by accounting foundations, tax operations and a growing focus on US taxation.
        </p>

        <div className="rec-grid">
          <div>
            <ul className="timeline">
              {experience.map((job, idx) => (
                <motion.li
                  key={job.company}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.14 }}
                  style={{
                    padding: '34px 0 40px',
                    borderBottom: '1px solid var(--line)',
                    position: 'relative',
                  }}
                >
                  <span className="when" style={{ display: 'block', marginBottom: '4px' }}>
                    {job.period}
                  </span>
                  <h3 style={{ fontFamily: 'var(--sans)', fontSize: '24px', fontWeight: '500', letterSpacing: '-0.03em', margin: '0 0 3px', color: 'var(--ink)' }}>
                    {job.company}
                  </h3>
                  {job.current && (
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: '500', letterSpacing: '0.14em', color: 'var(--orange)', textTransform: 'uppercase', border: '1px solid rgba(255,79,18,0.45)', padding: '5px 9px', display: 'inline-block', marginTop: '4px' }}>
                      Current
                    </span>
                  )}
                  <h4 style={{ fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: '600', letterSpacing: '0.04em', margin: '8px 0 3px', color: 'var(--ink)' }}>
                    {job.role}
                  </h4>
                  <span className="org">{job.location}</span>
                  {Array.isArray(job.detail) ? (
                    <ul style={{ margin: '10px 0 0', paddingLeft: '0', listStyle: 'none' }}>
                      {job.detail.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            position: 'relative',
                            paddingLeft: '16px',
                            marginBottom: '6px',
                            fontSize: '12px',
                            lineHeight: '1.8',
                            color: 'var(--muted)',
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ fontSize: '12px', lineHeight: '1.8', color: 'var(--muted)', margin: '10px 0 0' }}>
                      {job.detail}
                    </p>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <div className="notes" style={{ marginTop: '20px' }}>
              <div className="notes-label">
                <span className="dash" style={{ background: 'var(--orange)', width: '24px', height: '2px', display: 'inline-block' }} />
                PROFESSIONAL JOURNEY
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {experience.map((job, idx) => (
                  <motion.div
                    key={job.company}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.14 }}
                    style={{ position: 'relative', paddingLeft: '20px' }}
                  >
                    <span style={{ fontFamily: 'var(--sans)', fontSize: '14px', fontWeight: '500', color: 'var(--ink)', lineHeight: '1.5' }}>{job.company}</span>
                    <span style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.5' }}>{job.role}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
