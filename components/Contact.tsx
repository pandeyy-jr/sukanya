'use client';

import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { contact, profile } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="inner" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="eyebrow" style={{ marginBottom: '10px' }}>
          {contact.eyebrow.split(' · ').map((part, i) => (
            <span key={i}>{part}</span>
          ))}
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
          Let's make <span style={{ color: 'var(--orange)' }}>every detail count.</span>
        </h2>
        <p className="sub">{contact.body}</p>

        <div className="row2">
          <a
            href={`https://www.instagram.com/${contact.instagramValue.replace('@', '')}/`}
            className="btn ink"
            target="_blank"
            rel="noreferrer"
          >
            Instagram <Instagram size={14} />
          </a>
          <a
            href={profile.linkedin}
            className="btn ghost"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Linkedin size={14} />
          </a>
          {profile.email ? (
            <a href={`mailto:${profile.email}`} className="btn ghost">
              Email <Mail size={14} />
            </a>
          ) : (
            <button className="btn ghost" disabled style={{ opacity: 0.5 }}>
              Email <Mail size={14} />
            </button>
          )}
        </div>

        <div className="psst" style={{ marginTop: '56px' }}>
          <span className="dash" style={{ background: 'var(--orange)', width: '24px', height: '2px', display: 'inline-block' }} />
          psst… I reply fast
        </div>

        <div className="socials" style={{ marginTop: '30px' }}>
          <a
            href={`https://www.instagram.com/${contact.instagramValue.replace('@', '')}/`}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            style={{
              width: '38px',
              height: '38px',
              border: '1px solid var(--line)',
              display: 'grid',
              placeItems: 'center',
              transition: 'border-color 0.3s ease, color 0.3s ease, transform 0.3s ease',
            }}
          >
            <Instagram style={{ width: '16px', height: '16px', color: 'var(--ink)' }} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            style={{
              width: '38px',
              height: '38px',
              border: '1px solid var(--line)',
              display: 'grid',
              placeItems: 'center',
              transition: 'border-color 0.3s ease, color 0.3s ease, transform 0.3s ease',
            }}
          >
            <Linkedin style={{ width: '16px', height: '16px', color: 'var(--ink)' }} />
          </a>
        </div>
      </div>
    </section>
  );
}
