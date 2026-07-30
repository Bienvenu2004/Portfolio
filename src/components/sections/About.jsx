import { FiMapPin, FiArrowRight } from 'react-icons/fi';
import Reveal from '@/components/motion/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { site, about } from '@/data/site';
import styles from './about.module.css';

/* **text** segments render as gold highlights */
function rich(text) {
  return text
    .split('**')
    .map((seg, i) => (i % 2 ? <strong key={seg + i}>{seg}</strong> : seg));
}

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <span className="watermark" aria-hidden="true">
        About
      </span>

      <div className="container">
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.title}
          accent={about.titleAccent}
          end={about.titleEnd}
        />

        <Reveal className={styles.locationLine}>
          <FiMapPin aria-hidden="true" /> {about.locationLine}
        </Reveal>

        <div className={styles.copy}>
          {about.paragraphs.map((p, i) => (
            <Reveal as="p" key={p.slice(0, 32)} delay={i * 80} className={styles.paragraph}>
              {rich(p)}
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className={styles.footerRow}>
          <dl className={styles.stats}>
            {site.stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <dt className={styles.statLabel}>{s.label}</dt>
                <dd className={styles.statValue}>{s.value}</dd>
              </div>
            ))}
          </dl>

          <a className={styles.cta} href="#contact">
            Get in touch <FiArrowRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
