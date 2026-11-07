'use client';

import { forwardRef, useEffect, useRef } from 'react';
import SplitType from 'split-type';

type SplitTextProps = {
  children: React.ReactNode;
  split?: 'chars' | 'words' | 'lines';
  className?: string;
  tag?: 'span' | 'div' | 'h1' | 'h2' | 'h3';
};

const SplitText = forwardRef<HTMLElement, SplitTextProps>(
  ({ children, split = 'chars', className = '', tag = 'span' }, forwardedRef) => {
    const elRef = useRef<HTMLElement>(null);
    const Tag = tag as React.ElementType;

    useEffect(() => {
      if (typeof forwardedRef === 'function') {
        forwardedRef(elRef.current);
      } else if (forwardedRef && typeof forwardedRef === 'object' && 'current' in forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = elRef.current;
      }
    }, [forwardedRef]);

    useEffect(() => {
      const el = elRef.current;
      if (!el) return;
      if (el.dataset.split === 'true') return;
      try {
        new SplitType(el, { types: split });
        el.dataset.split = 'true';
      } catch {
        // split-type failed silently; children remain animate-able as a block.
      }
    }, [split]);

    return <Tag ref={elRef} className={className}>{children}</Tag>;
  }
);

SplitText.displayName = 'SplitText';

export default SplitText;
