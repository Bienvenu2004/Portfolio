import Image from 'next/image';
import { FiArrowRight, FiDownload, FiMapPin, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { site } from '@/data/site';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      {/* right half: background-free portrait over an amber glow */}
      <div className={styles.media} aria-hidden="true">
        <div className={styles.mediaGlow} />
        <Image
          src="/images/me-hero-cutout.webp"
          alt=""
          width={753}
          height={670}
          priority
          className={styles.photo}
        />
        <div className={styles.fadeBottom} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow} style={{ '--i': 0 }}>
            Hello, I’m
          </p>

          <h1 className={styles.title} style={{ '--i': 1 }} data-cursor-accent>
            {site.firstName} <span className={styles.titleAccent}>{site.lastName}</span>
          </h1>

          <div className={styles.metaRow} style={{ '--i': 2 }}>
            <span className={styles.rolePill}>{site.role}</span>
            <span className={styles.location}>
              <FiMapPin aria-hidden="true" /> {site.location} · {site.availability}
            </span>
          </div>

          <div className={styles.taglineBlock} style={{ '--i': 3 }}>
            <p className={styles.tagline}>{site.tagline}</p>
            <div className={styles.hairline} aria-hidden="true" />
            <p className={styles.subtext}>
              From marketing sites to dashboards and REST APIs — designed, built and deployed
              end-to-end, with the details users never consciously notice.
            </p>
          </div>

          <div className={styles.ctas} style={{ '--i': 4 }}>
            <a className={styles.cta} href="#work">
              View my work <FiArrowRight aria-hidden="true" />
            </a>
            <a className={styles.cta} href={site.cv} download>
              <FiDownload aria-hidden="true" /> Download CV
            </a>
          </div>
        </div>

        {/* bottom-left social strip */}
        <div className={styles.socials} style={{ '--i': 5 }}>
          <a href={site.social.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
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
          <span className={styles.socialRule} aria-hidden="true" />
          <span className={styles.socialHint}>{site.location}</span>
        </div>
      </div>
    </section>
  );
}
