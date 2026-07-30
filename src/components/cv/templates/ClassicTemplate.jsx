import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { CV_LABELS } from '../labels';
import styles from '../cv.module.css';

const splitList = (s) => s.split(',').map((x) => x.trim()).filter(Boolean);
const DEFAULT_ORDER = ['profile', 'skills', 'languages', 'experience', 'projects', 'education'];

/* Classic: header band; experience + projects in the main column,
   profile / skills / languages / education in the side column — each
   column follows the user's section order. */
export default function ClassicTemplate({ cv }) {
  const L = CV_LABELS[cv.cvLanguage] ?? CV_LABELS.en;
  const order = cv.sectionOrder ?? DEFAULT_ORDER;

  const renderers = {
    experience: () =>
      cv.experiences.length > 0 && (
        <section key="experience" className={styles.section}>
          <h2 className={styles.sectionTitle}>{L.experience}</h2>
          {cv.experiences.map((e) => (
            <div key={e.id} className={styles.block}>
              <div className={styles.blockHead}>
                <h3 className={styles.blockTitle}>{e.role}</h3>
                <span className={styles.blockPeriod}>{e.period}</span>
              </div>
              <p className={styles.blockMeta}>
                {[e.company, e.location].filter(Boolean).join(' · ')}
              </p>
              <ul className={styles.bullets}>
                {e.bullets.map((b, i) => (
                  <li key={`${i}-${b.slice(0, 16)}`}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ),
    projects: () =>
      cv.projects?.length > 0 && (
        <section key="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>{L.projects}</h2>
          {cv.projects.map((p) => (
            <div key={p.id} className={styles.block}>
              <div className={styles.blockHead}>
                <h3 className={styles.blockTitle}>{p.name}</h3>
                {p.link ? <span className={styles.blockPeriod}>{p.link}</span> : null}
              </div>
              {p.tech ? <p className={styles.blockMeta}>{p.tech}</p> : null}
              {p.description ? <p className={styles.body}>{p.description}</p> : null}
            </div>
          ))}
        </section>
      ),
    profile: () =>
      cv.profile ? (
        <section key="profile" className={styles.section}>
          <h2 className={styles.sectionTitle}>{L.profile}</h2>
          <p className={styles.body}>{cv.profile}</p>
        </section>
      ) : null,
    skills: () =>
      cv.skillGroups.length > 0 && (
        <section key="skills" className={styles.section}>
          <h2 className={styles.sectionTitle}>{L.skills}</h2>
          {cv.skillGroups.map((g) => (
            <div key={g.id} className={styles.skillGroup}>
              <h3 className={styles.skillLabel}>{g.label}</h3>
              <p className={styles.skillList}>{splitList(g.skills).join(' · ')}</p>
            </div>
          ))}
        </section>
      ),
    languages: () =>
      cv.languages.length > 0 && (
        <section key="languages" className={styles.section}>
          <h2 className={styles.sectionTitle}>{L.languages}</h2>
          {cv.languages.map((l) => (
            <div key={l.id} className={styles.langRow}>
              <span className={styles.skillLabel}>
                {l.name} — {l.level}
              </span>
              <span className={styles.langBar} aria-hidden="true">
                <span style={{ width: `${l.pct}%` }} />
              </span>
            </div>
          ))}
        </section>
      ),
    education: () =>
      cv.education.length > 0 && (
        <section key="education" className={styles.section}>
          <h2 className={styles.sectionTitle}>{L.education}</h2>
          {cv.education.map((d) => (
            <div key={d.id} className={styles.block}>
              <h3 className={styles.blockTitle}>{d.degree}</h3>
              <p className={styles.blockMeta}>
                {[d.school, d.period].filter(Boolean).join(' · ')}
                {d.gpa ? ` · ${L.gpa} ${d.gpa}` : ''}
              </p>
              <ul className={styles.bullets}>
                {d.bullets.map((b, i) => (
                  <li key={`${i}-${b.slice(0, 16)}`}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ),
  };

  const MAIN = ['experience', 'projects'];
  const renderColumn = (keys) =>
    order.filter((k) => keys.includes(k)).map((k) => renderers[k]?.());

  return (
    <div className={styles.sheet} style={{ '--cv-accent': cv.accentColor }}>
      <header className={styles.header}>
        <div className={styles.headerId}>
          {cv.photo ? <img src={cv.photo} alt="" className={styles.headerPhoto} /> : null}
          <div>
            <h1 className={styles.name}>{cv.name}</h1>
            <p className={styles.role}>{cv.role}</p>
          </div>
        </div>
        <ul className={styles.contact}>
          {cv.email ? (
            <li>
              <FiMail aria-hidden="true" /> {cv.email}
            </li>
          ) : null}
          {cv.phone ? (
            <li>
              <FiPhone aria-hidden="true" /> {cv.phone}
            </li>
          ) : null}
          {cv.location ? (
            <li>
              <FiMapPin aria-hidden="true" /> {cv.location}
            </li>
          ) : null}
          {cv.linkedin ? (
            <li>
              <FiLinkedin aria-hidden="true" /> {cv.linkedin}
            </li>
          ) : null}
          {cv.website ? (
            <li>
              <FiGlobe aria-hidden="true" /> {cv.website}
            </li>
          ) : null}
        </ul>
      </header>

      <div className={styles.rule} aria-hidden="true" />

      <div className={styles.grid}>
        <div>{renderColumn(MAIN)}</div>
        <aside>{renderColumn(order.filter((k) => !MAIN.includes(k)))}</aside>
      </div>
    </div>
  );
}
