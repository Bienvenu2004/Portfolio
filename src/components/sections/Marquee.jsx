import { about } from '@/data/site';
import styles from './marquee.module.css';

/* Infinite tech ticker — pure CSS translation, duplicated track for the loop.
   Decorative: hidden from screen readers, frozen under reduced motion. */
export default function Marquee() {
  const items = [...about.highlights, ...about.highlights];
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className={styles.item}>
            {item}
            <span className={styles.dot} />
          </span>
        ))}
      </div>
    </div>
  );
}
