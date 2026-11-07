'use client';

import Link from 'next/link';
import { ArrowUpRight, Linkedin, Instagram } from 'lucide-react';
import { footer, profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer>
      <div className="inner" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: '18px', fontWeight: '600', letterSpacing: '-0.04em', color: 'var(--ink)' }}>SP<span style={{ color: 'var(--orange)' }}>.</span></span>
            <div>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)' }}>Sukanya Pandey</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.14em', color: 'var(--muted)', display: 'block', marginTop: '2px', textTransform: 'uppercase' }}>Finance · Tax · Accounting</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a
              href={`https://www.instagram.com/${contactInstagramHandle()}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              style={{ font: '700 11px var(--mono)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'underline' }}
            >
              Instagram
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              style={{ font: '700 11px var(--mono)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'underline' }}
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1.5px solid var(--ink)', borderBottom: '1.5px solid var(--ink)', padding: '24px 0', marginTop: '20px' }}>
          <span className="mono" style={{ color: 'var(--muted)' }}>{footer.copyright}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
          <span className="mono" style={{ color: 'var(--muted)' }}>{footer.credit}</span>
          <Link href="#top" onClick={(e) => { e.preventDefault(); (window as any).__lenis?.scrollTo(0, { duration: 1 }); }} style={{ font: '700 11px var(--mono)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Back to top <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function contactInstagramHandle() {
  return '@sukanyapandey07'.replace('@', '');
}
