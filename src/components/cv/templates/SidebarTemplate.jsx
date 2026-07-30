import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { CV_LABELS } from '../labels';
import styles from '../cv.module.css';

const splitList = (s) => s.split(',').map((x) => x.trim()).filter(Boolean);

/* Sidebar: dark 68mm column (photo, contact, skills, languages) with the
   main content — name, profile, experience, education — on the right. */
export default function SidebarTemplate({ cv }) {
  const L = CV_LABELS[cv.cvLanguage] ?? CV_LABELS.en;

  return (
    <div
      className={`${styles.sheet} ${styles.sheetSidebar}`}
      style={{ '--cv-accent': cv.accentColor, '--cv-sidebar': cv.sidebarBg }}
    >
      <aside className={styles.side}>
        {cv.photo ? (
          <img src={cv.photo} alt="" className={styles.sidePhoto} />
        ) : (
          <span className={styles.sideInitials} aria-hidden="true">
            {cv.initials}
          </span>
        )}

        <div className={styles.sideSection}>
          <h2 className={styles.sideTitle}>{L.contact}</h2>
          <ul className={styles.sideContact}>
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
        </div>

        {cv.skillGroups.length > 0 && (
          <div className={styles.sideSection}>
            <h2 className={styles.sideTitle}>{L.skills}</h2>
            {cv.skillGroups.map((g) => (
              <div key={g.id} className={styles.sideSkillGroup}>
                <h3>{g.label}</h3>
                <ul className={styles.sideTags}>
                  {splitList(g.skills).map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {cv.languages.length > 0 && (
          <div className={styles.sideSection}>
            <h2 className={styles.sideTitle}>{L.languages}</h2>
            {cv.languages.map((l) => (
              <div key={l.id} className={styles.sideLang}>
                <span>
                  {l.name} — {l.level}
                </span>
                <span className={styles.sideLangBar} aria-hidden="true">
                  <span style={{ width: `${l.pct}%` }} />
                </span>
              </div>
            ))}
          </div>
        )}
      </aside>

      <div className={styles.main}>
        <header className={styles.mainHeader}>
          <h1 className={styles.name}>{cv.name}</h1>
          <p className={styles.role}>{cv.role}</p>
        </header>

        {cv.profile ? (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{L.profile}</h2>
            <p className={styles.body}>{cv.profile}</p>
          </section>
        ) : null}

        {cv.experiences.length > 0 && (
          <section className={styles.section}>
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
        )}

        {cv.education.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{L.education}</h2>
            {cv.education.map((d) => (
              <div key={d.id} className={styles.block}>
                <div className={styles.blockHead}>
                  <h3 className={styles.blockTitle}>{d.degree}</h3>
                  <span className={styles.blockPeriod}>{d.period}</span>
                </div>
                <p className={styles.blockMeta}>
                  {d.school}
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
        )}
      </div>
    </div>
  );
}
