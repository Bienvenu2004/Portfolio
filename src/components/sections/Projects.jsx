'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiGithub, FiArrowUpRight, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Reveal from '@/components/motion/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects } from '@/data/site';
import styles from './projects.module.css';
import Image from 'next/image';

/* If a project ships theme variants (`*-dark.*` / `*-light.*`), prefer the
   one matching the active theme; otherwise the first image. */
function themeImageIndex(images, theme) {
  const i = images.findIndex((src) => src.includes(`-${theme}.`));
  return i === -1 ? 0 : i;
}

/* Master–detail showcase: numbered list on the left drives a sticky
   crossfading preview on the right (inline preview on mobile). */
export default function Projects() {
  const [active, setActive] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const { resolvedTheme } = useTheme();

  const project = projects[active];
  const shownImg = Math.max(0, Math.min(imgIndex, project.images.length - 1));

  const select = (i) => {
    const next = Math.max(0, Math.min(projects.length - 1, i));
    setActive(next);
    setImgIndex(themeImageIndex(projects[next].images, resolvedTheme));
  };

  // when the theme flips, follow it with the matching variant
  useEffect(() => {
    if (!resolvedTheme) return;
    setImgIndex(themeImageIndex(projects[active].images, resolvedTheme));
  }, [resolvedTheme, active]);

  return (
    <section id="work" className={styles.section}>
      <span className="watermark" aria-hidden="true">
        Work
      </span>

      <div className="container">
        <SectionHeading eyebrow="Selected Work" title="Things I’ve" accent="built.">
          Complete products   designed, built and deployed. Screenshots drop straight into{' '}
          <code>/public/images/projects/</code>.
        </SectionHeading>

        <Reveal className={styles.grid}>
          {/* ---- left: project list ---- */}
          <div className={styles.listCol}>
            <ul className={styles.list}>
              {projects.map((p, i) => {
                const isActive = i === active;
                return (
                  <li key={p.title} className={styles.row} data-active={isActive}>
                    <button
                      type="button"
                      className={styles.rowBtn}
                      onClick={() => select(i)}
                      onMouseEnter={() => select(i)}
                      onFocus={() => select(i)}
                      aria-expanded={isActive}
                      aria-controls={`project-detail-${i}`}
                    >
                      <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
                      <span className={styles.rowHead}>
                        <span className={styles.rowTitle}>{p.title}</span>
                        <FiArrowUpRight className={styles.rowArrow} aria-hidden="true" />
                      </span>
                    </button>

                    <div id={`project-detail-${i}`} className={styles.detail}>
                      <div className={styles.detailInner}>
                        <p className={styles.description}>{p.description}</p>
                        <ul className={styles.tags}>
                          {p.stack.map((tech) => (
                            <li key={tech} className={styles.tag}>
                              {tech}
                            </li>
                          ))}
                        </ul>
                        <div className={styles.links}>
                          {p.repo ? (
                            <a
                              href={p.repo}
                              target="_blank"
                              rel="noreferrer"
                              className={styles.link}
                              tabIndex={isActive ? 0 : -1}
                            >
                              <FiGithub aria-hidden="true" /> Source
                            </a>
                          ) : null}
                          {p.link ? (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noreferrer"
                              className={styles.link}
                              tabIndex={isActive ? 0 : -1}
                            >
                              Visit project <FiArrowUpRight aria-hidden="true" />
                            </a>
                          ) : null}
                          {!p.repo && !p.link ? (
                            <span className={styles.private}>Private build</span>
                          ) : null}
                        </div>

                        {/* mobile-only inline preview   skipped without screenshots */}
                        {p.images.length ? (
                          <div className={styles.inlineMedia}>
                            <Image
                              src={p.images[0]}
                              alt={`${p.title} preview`}
                              width={720}
                              height={450}
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className={styles.pager}>
              <button
                type="button"
                className={styles.pagerBtn}
                onClick={() => select(active - 1)}
                disabled={active === 0}
                aria-label="Previous project"
              >
                <FiArrowLeft />
              </button>
              <button
                type="button"
                className={styles.pagerBtn}
                onClick={() => select(active + 1)}
                disabled={active === projects.length - 1}
                aria-label="Next project"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>

          {/* ---- right: sticky crossfading preview ---- */}
          <div className={styles.previewCol}>
            <div className={styles.preview}>
              {projects.map((p, i) =>
                p.images.map((src, j) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    aria-hidden="true"
                    width={720}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className={styles.previewImg}
                    data-active={i === active && j === shownImg}
                  />
                ))
              )}

              {/* projects without screenshots fall back to a monogram tile */}
              {project.images.length === 0 ? (
                <div className={styles.previewEmpty}>
                  <span aria-hidden="true">{project.title.slice(0, 2).toUpperCase()}</span>
                  <p>Screenshots unavailable   private build.</p>
                </div>
              ) : null}

              <div className={styles.previewBar}>
                <span className={styles.previewTitle}>{project.title}</span>

                {project.images.length > 1 ? (
                  <span className={styles.thumbs}>
                    {project.images.map((src, j) => (
                      <button
                        key={src}
                        type="button"
                        className={styles.thumb}
                        data-active={j === shownImg}
                        onClick={() => setImgIndex(j)}
                        aria-label={`Show screenshot ${j + 1} of ${project.images.length}`}
                      >
                        <img src={src} alt="" width={72} height={44} loading="lazy" />
                      </button>
                    ))}
                    <span className={styles.previewCount}>
                      {shownImg + 1}/{project.images.length}
                    </span>
                  </span>
                ) : (
                  <span className={styles.previewCount}>
                    {String(active + 1).padStart(2, '0')}/
                    {String(projects.length).padStart(2, '0')}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
