'use client';

import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import { site, packages } from '@/data/site';
import ThemeToggle from './ThemeToggle';
import styles from './navbar.module.css';

/* the Packages entry drops out when nothing is published */
const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  ...(packages.length ? [{ href: '#packages', label: 'Packages' }] : []),
  { href: '#journey', label: 'Journey' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close the mobile panel when a link is chosen
  const close = () => setOpen(false);

  return (
    <header className={styles.header} data-scrolled={scrolled} data-open={open}>
      <nav className={`container ${styles.nav}`} aria-label="Primary">
        <a href="#top" className={styles.logo} onClick={close}>
          {site.firstName}
          <span className={styles.logoAccent}>{site.lastName}</span>
        </a>

        <ul className={styles.links}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a
            className={styles.iconLink}
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FiGithub />
          </a>
          <a
            className={styles.iconLink}
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FiLinkedin />
          </a>
          <ThemeToggle />
          <button
            type="button"
            className={styles.menuBtn}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* mobile panel   enters/exits from the top, same path both ways */}
      <div className={styles.panel} aria-hidden={!open}>
        <ul>
          {LINKS.map((l, i) => (
            <li key={l.href} style={{ '--i': i }}>
              <a href={l.href} className={styles.panelLink} onClick={close} tabIndex={open ? 0 : -1}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
