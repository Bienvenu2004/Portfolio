'use client';

import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import styles from '@/components/sections/packages.module.css';

/* Install command with copy-to-clipboard — the only interactive bit of a
   package card, so it's the only part that ships JS. */
export default function InstallBar({ cmd }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable — the command is still selectable */
    }
  };

  return (
    <div className={styles.installBar}>
      <code className={styles.installCmd}>{cmd}</code>
      <button type="button" className={styles.copyBtn} onClick={copy} data-copied={copied}>
        {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}
