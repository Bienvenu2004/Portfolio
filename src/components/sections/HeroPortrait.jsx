'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiMaximize2, FiX } from 'react-icons/fi';
import styles from './hero.module.css';

const PORTRAIT = '/images/me-hero-cutout.webp';
const ALT = 'Portrait of Bienvenu Ambassa';

export default function HeroPortrait() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.frame}
        onClick={() => setOpen(true)}
        aria-label="View full portrait"
      >
        <Image
          src={PORTRAIT}
          alt={ALT}
          width={1024}
          height={1390}
          priority
          className={styles.photo}
        />
        <span className={styles.frameHint} aria-hidden="true">
          <FiMaximize2 />
        </span>
      </button>

      {open && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Full portrait"
          onClick={() => setOpen(false)}
        >
          <div className={styles.lightboxPanel} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <FiX />
            </button>
            <Image
              src={PORTRAIT}
              alt={ALT}
              width={1024}
              height={1390}
              className={styles.lightboxImg}
            />
          </div>
        </div>
      )}
    </>
  );
}
