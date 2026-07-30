import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';
import CvToolbar from '@/components/cv/CvToolbar';
import {
  site,
  about,
  skillGroups,
  timeline,
  education,
  certifications,
  packages,
} from '@/data/site';
import styles from '@/components/cv/cv.module.css';

export const metadata = {
  title: `CV — ${site.name}`,
  description: `Curriculum vitae of ${site.name}, ${site.role}.`,
  robots: { index: false },
};

/* the about copy uses **gold** markers on the site — the CV wants plain text */
const plain = (text) => text.replaceAll('**', '');

export default async function CvPage({ searchParams }) {
  // /cv?role=Frontend%20Engineer personalizes the title line
  const { role } = await searchParams;
  const title = role || site.role;

  return (
    <div className={styles.wrap}>
      <CvToolbar />

      <article className={styles.sheet}>
        {/* ---- header ---- */}
        <header className={styles.header}>
          <div>
            <h1 className={styles.name}>{site.name} Kibuh</h1>
            <p className={styles.role}>{title}</p>
          </div>
          <ul className={styles.contact}>
            <li>
              <FiMail aria-hidden="true" /> {site.email}
            </li>
            <li>
              <FiMapPin aria-hidden="true" /> {site.location} · UTC+1
            </li>
            <li>
              <FiGithub aria-hidden="true" /> github.com/Abdulrahim2567
            </li>
            <li>
              <FiLinkedin aria-hidden="true" /> linkedin.com/in/abdou-rahim-729411246
            </li>
          </ul>
        </header>

        <div className={styles.rule} aria-hidden="true" />

        <div className={styles.grid}>
          {/* ---- main column ---- */}
          <div>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Profile</h2>
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className={styles.body}>
                  {plain(p)}
                </p>
              ))}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Experience</h2>
              {timeline.map((item) => (
                <div key={`${item.company}-${item.role}`} className={styles.block}>
                  <div className={styles.blockHead}>
                    <h3 className={styles.blockTitle}>{item.role}</h3>
                    <span className={styles.blockPeriod}>{item.period}</span>
                  </div>
                  <p className={styles.blockMeta}>
                    {item.company} · {item.type} · {item.place}
                  </p>
                  <p className={styles.body}>{item.description}</p>
                </div>
              ))}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Education</h2>
              {education.map((d) => (
                <div key={d.degree} className={styles.block}>
                  <div className={styles.blockHead}>
                    <h3 className={styles.blockTitle}>{d.degree}</h3>
                    <span className={styles.blockPeriod}>{d.period}</span>
                  </div>
                  <p className={styles.blockMeta}>
                    {d.institution} · {d.location} · GPA {d.gpa}
                  </p>
                  <p className={styles.body}>{d.courses.join(' · ')}</p>
                </div>
              ))}
            </section>
          </div>

          {/* ---- side column ---- */}
          <aside>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Skills</h2>
              {skillGroups.map((g) => (
                <div key={g.label} className={styles.skillGroup}>
                  <h3 className={styles.skillLabel}>{g.label}</h3>
                  <p className={styles.skillList}>{g.skills.map((s) => s.name).join(' · ')}</p>
                </div>
              ))}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Certifications</h2>
              {certifications.map((c) => (
                <div key={c.title} className={styles.block}>
                  <h3 className={styles.blockTitle}>{c.title}</h3>
                  <p className={styles.blockMeta}>
                    {c.issuer} · Issued {c.issued} · {c.status}
                  </p>
                </div>
              ))}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Open Source</h2>
              {packages.map((p) => (
                <div key={p.name} className={styles.block}>
                  <h3 className={styles.blockTitle}>{p.name}</h3>
                  <p className={styles.body}>{p.tagline}</p>
                </div>
              ))}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Online</h2>
              <p className={styles.body}>
                <FiGlobe aria-hidden="true" className={styles.inlineIcon} /> Portfolio, projects
                and live demos: github.com/Abdulrahim2567
              </p>
            </section>
          </aside>
        </div>
      </article>
    </div>
  );
}
