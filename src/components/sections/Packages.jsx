import { useState } from 'react';
import { FiGithub, FiCopy, FiCheck, FiArrowUpRight } from 'react-icons/fi';
import Reveal from '@/components/motion/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { site, packages } from '@/data/site';
import styles from './packages.module.css';

function InstallBar({ cmd }) {
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

function PackageCard({ pkg, index }) {
  return (
    <Reveal as="article" delay={index * 100} className={styles.cardWrap}>
      <div className={styles.card}>
        <h3 className={styles.name}>{pkg.name}</h3>
        <p className={styles.tagline}>{pkg.tagline}</p>

        <a href={pkg.npm} target="_blank" rel="noreferrer" className={styles.badgeLink}>
          {/* weekly-downloads badge, reference-style */}
          <img
            src={`https://img.shields.io/npm/dw/${pkg.name}?style=flat-square&labelColor=1f242c&color=f0a824&label=npm%2Fweek`}
            alt={`Weekly npm downloads of ${pkg.name}`}
            height={20}
            loading="lazy"
          />
        </a>

        <ul className={styles.bullets}>
          {pkg.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <ul className={styles.tags}>
          {pkg.tags.map((t) => (
            <li key={t} className={styles.tag}>
              {t}
            </li>
          ))}
        </ul>

        <div className={styles.cardLinks}>
          <a href={pkg.repo} target="_blank" rel="noreferrer" className={styles.cardLink}>
            <FiGithub aria-hidden="true" /> Source
          </a>
          <a href={pkg.npm} target="_blank" rel="noreferrer" className={styles.cardLink}>
            view package <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* install command hanging off the card's bottom edge */}
      <InstallBar cmd={pkg.installCmd} />
    </Reveal>
  );
}

export default function Packages() {
  return (
    <section id="packages" className={styles.section}>
      <span className="watermark" aria-hidden="true">
        NPM
      </span>

      <div className="container">
        <SectionHeading eyebrow="Open Source" title="Packages I" accent="publish.">
          Published on npm, born from gaps I hit in real projects.
        </SectionHeading>

        <div className={styles.grid}>
          {packages.map((p, i) => (
            <PackageCard key={p.name} pkg={p} index={i} />
          ))}
        </div>

        <Reveal className={styles.footerRow}>
          <p className={styles.footerNote}>
            More experiments and open-source work live on GitHub.
          </p>
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            className={styles.githubBtn}
          >
            <FiGithub aria-hidden="true" /> View on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
