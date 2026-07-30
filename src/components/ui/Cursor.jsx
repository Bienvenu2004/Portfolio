import { useEffect, useRef, useState } from 'react';
import styles from './cursor.module.css';

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, label, [tabindex]:not([tabindex='-1'])";

/* Custom cursor, reference-style: an instant dot + a spring-lagged ring.
   Dot collapses / ring grows over interactive elements; both go white over
   [data-cursor-accent]. Touch devices keep the native cursor untouched. */
export default function Cursor() {
  const rootRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined;
    setEnabled(true);
    document.documentElement.setAttribute('data-custom-cursor', 'true');

    // reduced motion: ring snaps to the pointer instead of trailing
    const ease = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : 0.16;

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;

    const loop = () => {
      rx += (x - rx) * ease;
      ry += (y - ry) * ease;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (rootRef.current) {
        rootRef.current.dataset.visible = 'true';
        const t = e.target;
        const state = t?.closest?.(INTERACTIVE)
          ? 'interactive'
          : t?.closest?.('[data-cursor-accent]')
            ? 'accent'
            : 'default';
        rootRef.current.dataset.state = state;
      }
    };

    const onLeave = () => {
      if (rootRef.current) rootRef.current.dataset.visible = 'false';
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
      document.documentElement.removeAttribute('data-custom-cursor');
    };
  }, []);

  if (!enabled) return null;

  return (
    <div ref={rootRef} className={styles.root} data-state="default" data-visible="false" aria-hidden="true">
      <div ref={ringRef} className={styles.ring}>
        <span />
      </div>
      <div ref={dotRef} className={styles.dot}>
        <span />
      </div>
    </div>
  );
}
