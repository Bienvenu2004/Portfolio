import { FiArrowUpRight, FiAward, FiDownload, FiExternalLink } from 'react-icons/fi';
import Reveal from '@/components/motion/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { education, certifications } from '@/data/site';
import styles from './education.module.css';

export default function Education() {
  // with no certifications the degrees take the full width
  const hasCerts = certifications.length > 0;

  return (
    <section id="education" className={styles.section}>
      <span className="watermark" aria-hidden="true">
        EDU
      </span>

      <div className="container">
        <SectionHeading eyebrow="Education" title="Degrees &" accent="credentials.">
          Academic foundation in software engineering and systems design.
        </SectionHeading>

        <div className={styles.grid} data-single={!hasCerts}>
          {/* ---- left: degrees ---- */}
          <div className={styles.degrees}>
            {education.map((d, i) => (
              <Reveal as="article" key={d.degree} delay={i * 80} className={styles.degree}>
                <span className={styles.schoolLogo}>
                  {d.logo ? (
                    <img
                      src={d.logo}
                      alt={`${d.institution} logo`}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <FiAward aria-hidden="true" />
                  )}
                </span>
                <div className={styles.degreeBody}>
                  <h3 className={styles.degreeTitle}>{d.degree}</h3>
                  <p className={styles.institution}>{d.institution}</p>
                  <p className={styles.meta}>
                    {d.period} · {d.location}
                  </p>
                  {d.gpa ? <span className={styles.gpa}>GPA: {d.gpa}</span> : null}
                  <p className={styles.description}>{d.description}</p>
                  <ul className={styles.courses}>
                    {d.courses.map((c) => (
                      <li key={c} className={styles.course}>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ---- right: certifications ---- */}
          {hasCerts ? (
          <div>
            <Reveal as="p" className={styles.certsEyebrow}>
              Certifications
            </Reveal>
            <div className={styles.certs}>
              {certifications.map((c, i) => (
                <Reveal key={c.title} delay={i * 80} className={styles.cert}>
                  <span className={styles.badgeBox}>
                    <img
                      src={c.badge}
                      alt={`${c.title} badge`}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <div className={styles.certBody}>
                    <h3 className={styles.certTitle}>{c.title}</h3>
                    <p className={styles.issuer}>{c.issuer}</p>
                    <p className={styles.meta}>
                      Issued: {c.issued} ·{' '}
                      <span className={styles.status} data-active={c.status === 'Active'}>
                        {c.status}
                      </span>
                    </p>
                    <div className={styles.certLinks}>
                      <a
                        href={c.verifyLink}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.certLink}
                      >
                        Verify credential <FiExternalLink aria-hidden="true" />
                      </a>
                      {c.pdf ? (
                        <a href={c.pdf} download className={styles.certLink}>
                          <FiDownload aria-hidden="true" /> Certificate PDF
                        </a>
                      ) : null}
                    </div>
                  </div>
                  <FiArrowUpRight className={styles.certArrow} aria-hidden="true" />
                </Reveal>
              ))}
            </div>
          </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
