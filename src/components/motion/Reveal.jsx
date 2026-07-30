'use client';

import { useEffect, useRef } from 'react';

/**
 * Scroll reveal — adds `.is-visible` when the element enters the viewport.
 * Animates once, transform/opacity only (styles live in globals.css).
 * `delay` (ms) staggers siblings via the `--d` custom property.
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { '--d': `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
