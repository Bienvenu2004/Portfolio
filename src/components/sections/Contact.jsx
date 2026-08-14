import Link from 'next/link';
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight, FiFileText } from 'react-icons/fi';
import Reveal from '@/components/motion/Reveal';
import DownloadCv from '@/components/cv/DownloadCv';
import { site, footer } from '@/data/site';
import styles from './contact.module.css';

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.section}>
      {/* ghost word pinned bottom-right, reference-style */}
      <span className={styles.ghost} aria-hidden="true">
        CTA
      </span>

      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <Reveal className={styles.left}>
            <p className={styles.eyebrow}>{footer.eyebrow}</p>
            <h2 className={styles.headline}>
              {footer.headline}{' '}
              <span className={styles.headlineAccent}>{footer.headlineAccent}</span>
            </h2>
            <p className={styles.description}>{footer.description}</p>
          </Reveal>

          <Reveal delay={100} className={styles.right}>
            <div className={styles.ctas}>
              <a className={styles.solidPill} href={`mailto:${site.email}`}>
                <FiMail aria-hidden="true" /> Contact me <FiArrowUpRight aria-hidden="true" />
              </a>
              <DownloadCv className={styles.outlinePill} />
              <Link className={styles.outlinePill} href="/cv">
                <FiFileText aria-hidden="true" /> Create CV
              </Link>
            </div>

            <div className={styles.socialRow}>
              <a
                href={site.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <FiGithub />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <FiLinkedin />
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email me">
                <FiMail />
              </a>
            </div>
          </Reveal>
        </div>

        <p className={styles.copyright}>
          © {year} {site.name} · {site.role} · {site.location}. Built with Next.js   no UI
          library, just tokens.
        </p>
      </div>
    </footer>
  );
}
