'use client';

import Link from 'next/link';
import { FiArrowLeft, FiPrinter } from 'react-icons/fi';
import styles from './cv.module.css';

/* Screen-only chrome above the sheet — hidden when printing. */
export default function CvToolbar() {
  return (
    <div className={styles.toolbar}>
      <Link href="/" className={styles.toolbarBtn}>
        <FiArrowLeft aria-hidden="true" /> Back to portfolio
      </Link>

      <div className={styles.toolbarRight}>
        <span className={styles.toolbarHint}>
          Choose “Save as PDF” in the print dialog to download
        </span>
        <button type="button" className={styles.printBtn} onClick={() => window.print()}>
          <FiPrinter aria-hidden="true" /> Print / Save PDF
        </button>
      </div>
    </div>
  );
}
