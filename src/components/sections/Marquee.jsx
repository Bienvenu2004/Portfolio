import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiSpringboot,
  SiLaravel,
  SiCucumber,
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';
import { about } from '@/data/site';
import styles from './marquee.module.css';

/* brand icon per stack item   items without a match render text-only */
const ICONS = {
  'Next.js': SiNextdotjs,
  React: SiReact,
  Java: FaJava,
  'Spring Boot': SiSpringboot,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  Laravel: SiLaravel,
  Cucumber: SiCucumber,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Firebase: SiFirebase,
  AWS: FaAws,
};

/* Infinite tech ticker   pure CSS translation, duplicated track for the loop.
   Decorative: hidden from screen readers, frozen under reduced motion. */
export default function Marquee() {
  const items = [...about.highlights, ...about.highlights];
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {items.map((item, i) => {
          const Icon = ICONS[item];
          return (
            <span key={`${item}-${i}`} className={styles.item}>
              <span className={styles.itemInner}>
                {Icon ? <Icon className={styles.icon} /> : null}
                {item}
              </span>
              <span className={styles.dot} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
