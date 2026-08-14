import { FiBriefcase } from 'react-icons/fi';
import Reveal from '@/components/motion/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { timeline } from '@/data/site';
import styles from './timeline.module.css';

export default function Timeline() {
  return (
    <section id="journey" className={styles.section}>
      <span className="watermark" aria-hidden="true">
        EXP
      </span>

      <div className="container">
        <SectionHeading eyebrow="Experience" title="Where I’ve" accent="worked.">
          Roles and teams, most recent first   straight from the field.
        </SectionHeading>

        <ol className={styles.list}>
          {timeline.map((item, i) => (
            <Reveal as="li" key={`${item.company}-${item.role}`} delay={i * 70} className={styles.row}>
              <span className={styles.index} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>

              <span className={styles.logoBox}>
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <FiBriefcase aria-hidden="true" />
                )}
              </span>

              <div className={styles.body}>
                <p className={styles.period}>
                  {item.period}
                  {item.current ? (
                    <span className={styles.currentBadge}>
                      <span className={styles.currentDot} aria-hidden="true" /> Current
                    </span>
                  ) : null}
                </p>
                <h3 className={styles.title}>{item.role}</h3>
                <p className={styles.company}>{item.company}</p>
                <p className={styles.place}>
                  {item.type} · {item.place}
                </p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
