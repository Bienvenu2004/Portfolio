import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMui,
  SiAntdesign,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiAmazonaws,
  SiVercel,
  SiGit,
} from 'react-icons/si';
import { FiServer } from 'react-icons/fi';
import Reveal from '@/components/motion/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillGroups } from '@/data/site';
import styles from './skills.module.css';

const ICONS = {
  nextjs: SiNextdotjs,
  react: SiReact,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  css: SiCss3,
  bootstrap: SiBootstrap,
  mui: SiMui,
  antd: SiAntdesign,
  node: SiNodedotjs,
  express: SiExpress,
  api: FiServer,
  php: SiPhp,
  mongodb: SiMongodb,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  firebase: SiFirebase,
  aws: SiAmazonaws,
  vercel: SiVercel,
  git: SiGit,
};

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <span className="watermark" aria-hidden="true">
        Stack
      </span>

      <div className="container">
        <SectionHeading eyebrow="Skills" title="Tools I reach" accent="for.">
          Technologies I have real, shipped-project experience with — no percentages, just
          the stack I work in every week.
        </SectionHeading>

        <div className={styles.groups}>
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 80} className={styles.group}>
              <div className={styles.groupHead}>
                <span className={styles.index}>{String(gi + 1).padStart(2, '0')}</span>
                <h3 className={styles.groupLabel}>{group.label}</h3>
              </div>

              <ul className={styles.tiles}>
                {group.skills.map((skill, si) => {
                  const Icon = ICONS[skill.icon] ?? FiServer;
                  return (
                    <li key={skill.name} className={styles.tile} style={{ '--i': si }}>
                      <Icon className={styles.tileIcon} aria-hidden="true" />
                      <span className={styles.tileName}>{skill.name}</span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
