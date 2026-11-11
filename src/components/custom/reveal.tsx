'use client';

import { useLayoutEffect, useRef } from 'react';
import type { ElementType, ReactNode } from 'react';
import { animate, stagger as staggerFn, utils } from 'animejs';

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Start delay in ms — for hand-tuned choreography (hero scenes). */
  delay?: number;
  /** Vertical travel in px. */
  y?: number;
  /** Reveal direct children one after another instead of the wrapper itself. */
  group?: boolean;
  /** Milliseconds between grouped children. */
  gap?: number;
  /** Only reveal once the element has been on screen for this fraction. */
  threshold?: number;
  as?: ElementType;
}

/**
 * Scroll-triggered entrance, driven by anime.js.
 * Content stays server-rendered (SEO-friendly); it is only faded in when it
 * enters the viewport. Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  group = false,
  gap = 80,
  threshold = 0.12,
  as,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const Tag = (as ?? 'div') as 'div';

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.style.opacity = '1';
      return;
    }

    const targets = group ? Array.from(el.children) : [el];
    utils.set(targets, { opacity: 0, y });

    let animation: ReturnType<typeof animate> | null = null;
    /* Tall containers (long article stacks) can never reach a percentage
       threshold — fall back to firing as soon as their top edge enters. */
    const isTall = el.getBoundingClientRect().height > window.innerHeight * 0.75;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        animation = animate(targets, {
          opacity: [0, 1],
          y: [y, 0],
          duration: 760,
          delay: group ? staggerFn(Math.min(gap, 620 / targets.length)) : delay,
          ease: 'outExpo',
        });
      },
      { threshold: isTall ? 0 : threshold, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      animation?.pause();
    };
  }, [delay, y, group, gap, threshold]);

  return (
    <Tag ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
}
