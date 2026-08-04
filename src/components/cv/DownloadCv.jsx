'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiDownload, FiPrinter, FiX, FiFile } from 'react-icons/fi';
import { site } from '@/data/site';
import styles from './cv.module.css';

const SECTION_OPTIONS = [
  ['profile', 'Profile Summary'],
  ['skills', 'Skills'],
  ['languages', 'Languages'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['education', 'Education'],
];

/* Site-wide "Download CV" trigger (hero + footer): full PDF instantly,
   or pick sections and print a tailored copy via the CV generator. */
export default function DownloadCv({ className, children }) {
  const [open, setOpen] = useState(false);
  const [sections, setSections] = useState(() =>
    Object.fromEntries(SECTION_OPTIONS.map(([k]) => [k, true]))
  );
  const router = useRouter();

  const toggle = (key) => setSections((s) => ({ ...s, [key]: !s[key] }));

  const printSelection = () => {
    const chosen = SECTION_OPTIONS.filter(([k]) => sections[k]).map(([k]) => k);
    setOpen(false);
    router.push(`/cv?preset=download&sections=${chosen.join(',')}&print=1`);
  };

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children ?? (
          <>
            <FiDownload aria-hidden="true" /> Download CV
          </>
        )}
      </button>

      {open && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Download CV"
        >
          <div className={styles.modal}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <FiX />
            </button>

            <p className={styles.modalEyebrow}>Download CV</p>
            <h2 className={styles.modalTitle}>Full CV or just the parts you need?</h2>
            <p className={styles.hint}>
              {site.cv
                ? 'The full CV downloads instantly. Untick sections for a tailored copy — it opens print-ready, just choose “Save as PDF”.'
                : 'Pick the sections you want — the CV opens print-ready, just choose “Save as PDF”.'}
            </p>

            <div className={styles.modalChecks}>
              {SECTION_OPTIONS.map(([key, label]) => (
                <label key={key} className={styles.check}>
                  <input type="checkbox" checked={sections[key]} onChange={() => toggle(key)} />
                  <span>{label}</span>
                </label>
              ))}
            </div>

            <div className={styles.modalActions}>
              {/* no pre-generated PDF yet — the builder is the only route */}
              {site.cv ? (
                <a className={styles.addBtn} href={site.cv} download onClick={() => setOpen(false)}>
                  <FiFile aria-hidden="true" /> Full CV (PDF)
                </a>
              ) : null}
              <button type="button" className={styles.printBtn} onClick={printSelection}>
                <FiPrinter aria-hidden="true" /> Print selection
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
