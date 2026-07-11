'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** delay in ms before the element animates in */
  delay?: number;
  as?: ElementType;
};

/**
 * Fades + slides its children in once they scroll into view.
 * Falls back to visible immediately if IntersectionObserver is unavailable.
 */
export function Reveal({ children, className, delay = 0, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal
      className={`${visible ? 'is-visible' : ''} ${className ?? ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
