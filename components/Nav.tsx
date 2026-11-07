'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('#about');
  const isHome = pathname === '/' || pathname === '';
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const createWatcher = (id: string) => {
        ScrollTrigger.create({
          trigger: id,
          start: 'top 25%',
          end: 'bottom 25%',
          scroller: document.documentElement,
          onEnter: () => setActive(id),
          onEnterBack: () => setActive(id),
        });
      };
      createWatcher('#about');
      createWatcher('#expertise');
      createWatcher('#experience');
      createWatcher('#education');
      ScrollTrigger.create({
        trigger: '#contact',
        start: 'top 25%',
        scroller: document.documentElement,
        onEnter: () => setActive('#contact'),
        onEnterBack: () => setActive('#contact'),
      });
    });
    return () => ctx.revert();
  }, []);

  const scrollTo = useCallback((href: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -90, duration: 1 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  // Close mobile menu when clicking a link
  useEffect(() => {
    if (open && menuRef.current) {
      const handleClick = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [open]);

  return (
    <nav className="nav" aria-label="Main navigation">
      {isHome && (
        <a className="logo" href="#top" aria-label="Sukanya Pandey home">
          Sukanya.
        </a>
      )}
      <div className="links">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`nav-link ${active === l.href ? 'active' : ''}`}
            onClick={(e) => scrollTo(l.href, e)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="cv"
          onClick={(e) => scrollTo('#contact', e)}
          aria-label="Let's talk"
        >
          Let's talk <ArrowUpRight size={13} />
        </a>
      </div>

      {/* Mobile menu toggle */}
      <button
        ref={toggleRef}
        className={`menu-toggle ${open ? 'open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {/* Mobile navigation panel */}
      <div ref={menuRef} className={`mobile-nav ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button className="mobile-close" aria-label="Close menu" onClick={() => setOpen(false)}>
          <span className="close-bar" />
          <span className="close-bar" />
        </button>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`mobile-link ${active === l.href ? 'active' : ''}`}
            onClick={(e) => scrollTo(l.href, e)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="mobile-cta"
          onClick={(e) => scrollTo('#contact', e)}
        >
          Let's talk
        </a>
      </div>
    </nav>
  );
}
