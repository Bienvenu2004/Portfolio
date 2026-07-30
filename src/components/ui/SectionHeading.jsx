import Reveal from '@/components/motion/Reveal';
import styles from './sectionheading.module.css';

/* Split display heading — `accent` renders in marquee gold, optional `end`
   returns to ink, e.g. title="Building software that" accent="actually ships"
   end="and holds up in production." */
export default function SectionHeading({ eyebrow, title, accent, end, children }) {
  return (
    <Reveal className={styles.wrap}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>
        {title}
        {accent ? <span className={styles.accent}> {accent}</span> : null}
        {end ? <> {end}</> : null}
      </h2>
      {children ? <p className={styles.lede}>{children}</p> : null}
    </Reveal>
  );
}
