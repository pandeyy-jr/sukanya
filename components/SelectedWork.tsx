'use client';

import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { selectedWork } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWork() {
  return (
    <section className="work" id="work">
      <div className="inner" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        <div className="work-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: '6px' }}>
              SELECTED WORK
              <span className="dash" aria-hidden="true" />
            </div>
            <h2 style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: '500', lineHeight: '1.1', letterSpacing: '-0.05em', margin: 0, color: 'var(--ink)' }}>
              {selectedWork.heading}
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '6px' }}>{selectedWork.subhead}</p>
          </div>
          <a href="#contact" className="btn ghost" onClick={(e) => { e.preventDefault(); (window as any).__lenis?.scrollTo('#contact', { offset: -90, duration: 1 }); }}>
            Let's talk
          </a>
        </div>

        <p className="sub" style={{ maxWidth: '560px' }}>{selectedWork.body}</p>

        <div style={{ marginTop: '56px', border: '1px solid var(--line)', background: 'var(--card)', padding: '42px 44px', position: 'relative', overflow: 'hidden' }}>
          <div className="tape" style={{ top: '20px', left: '20px', width: '64px', height: '22px' }} aria-hidden="true" />
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <div style={{ width: '56px', height: '56px', border: '1px solid var(--orange)', borderRadius: '50%', display: 'grid', placeItems: 'center', color: 'var(--orange)', fontFamily: 'var(--sans)', fontSize: '24px', flexShrink: 0 }}>
              ＋
            </div>
            <div style={{ maxWidth: '520px' }}>
              <h3 style={{ fontFamily: 'var(--sans)', fontSize: '30px', fontWeight: '500', lineHeight: '1.2', letterSpacing: '-0.04em', margin: '0 0 14px', color: 'var(--ink)' }}>
                A considered space
                <br />
                for meaningful work.
              </h3>
              <p style={{ fontSize: '11.5px', lineHeight: '1.9', color: 'var(--muted)', margin: 0 }}>
                {selectedWork.placeholder}
              </p>
            </div>
          </div>
          <p className="mono" style={{ marginTop: '18px', textTransform: 'uppercase' }}>
            Only verified, non-confidential work will be shared here, with appropriate permission.
          </p>
        </div>

        <p className="more-note" style={{ marginTop: '40px' }}>
          …and more to be added as approved.
        </p>
      </div>
    </section>
  );
}
