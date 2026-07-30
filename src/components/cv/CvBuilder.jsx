'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  FiArrowLeft,
  FiPrinter,
  FiPlus,
  FiTrash2,
  FiRotateCcw,
  FiUpload,
  FiX,
} from 'react-icons/fi';
import ClassicTemplate from './templates/ClassicTemplate';
import SidebarTemplate from './templates/SidebarTemplate';
import { ACCENT_COLORS, SIDEBAR_COLORS } from './labels';
import { site, about, skillGroups, timeline, education } from '@/data/site';
import styles from './cv.module.css';

const STORAGE_KEY = 'cv-builder-v1';
const A4_WIDTH_PX = 794; // 210mm at 96dpi

const plain = (t) => t.replaceAll('**', '');

/* Prefilled from the portfolio data — every field editable. */
function defaults() {
  return {
    template: 'classic',
    accentColor: ACCENT_COLORS[0],
    sidebarBg: SIDEBAR_COLORS[0],
    cvLanguage: 'en',
    photo: null,
    name: `${site.name} Kibuh`,
    initials: 'AK',
    role: site.role,
    phone: '',
    email: site.email,
    linkedin: 'linkedin.com/in/abdou-rahim-729411246',
    website: 'github.com/Abdulrahim2567',
    location: `${site.location} · UTC+1`,
    profile: about.paragraphs.map(plain).join(' '),
    skillGroups: skillGroups.map((g, i) => ({
      id: `sg-${i}`,
      label: g.label,
      skills: g.skills.map((s) => s.name).join(', '),
    })),
    languages: [
      { id: 'lang-0', name: 'English', level: 'Fluent', pct: 90 },
      { id: 'lang-1', name: 'French', level: 'Professional', pct: 75 },
    ],
    experiences: timeline.map((t, i) => ({
      id: `exp-${i}`,
      role: t.role,
      company: t.company,
      period: t.period,
      location: t.place,
      bullets: [t.description],
    })),
    education: education.map((d, i) => ({
      id: `edu-${i}`,
      degree: d.degree,
      school: d.institution,
      period: d.period,
      gpa: d.gpa,
      bullets: [d.courses.join(' · ')],
    })),
  };
}

/* Blank sheet for "Clear all". */
function blank() {
  const d = defaults();
  return {
    ...d,
    photo: null,
    name: '',
    initials: '',
    role: '',
    phone: '',
    email: '',
    linkedin: '',
    website: '',
    location: '',
    profile: '',
    skillGroups: [],
    languages: [],
    experiences: [],
    education: [],
  };
}

let uid = 0;
const newId = (p) => `${p}-${Date.now()}-${uid++}`;

/* ---------- small form primitives ---------- */

function Field({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

function Area({ label, value, onChange, rows = 4, placeholder }) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      <textarea
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

function Section({ title, action, children }) {
  return (
    <section className={styles.formSection}>
      <div className={styles.formSectionHead}>
        <h2>{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function AddBtn({ onClick, children }) {
  return (
    <button type="button" className={styles.addBtn} onClick={onClick}>
      <FiPlus aria-hidden="true" /> {children}
    </button>
  );
}

function RemoveBtn({ onClick, label }) {
  return (
    <button type="button" className={styles.removeBtn} onClick={onClick} aria-label={label}>
      <FiTrash2 aria-hidden="true" />
    </button>
  );
}

/* ---------- the builder ---------- */

export default function CvBuilder() {
  const [cv, setCv] = useState(defaults);
  const [loaded, setLoaded] = useState(false);
  const previewRef = useRef(null);
  const [scale, setScale] = useState(0.75);

  // restore a saved draft after mount (SSR-safe)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setCv({ ...defaults(), ...JSON.parse(saved) });
    } catch {
      /* corrupt draft — keep defaults */
    }
    setLoaded(true);
  }, []);

  // autosave drafts
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cv));
    } catch {
      /* storage full (large photo) — editing still works */
    }
  }, [cv, loaded]);

  // fit the A4 sheet to the preview column
  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    const fit = () => setScale(Math.min(1, (el.clientWidth - 2) / A4_WIDTH_PX));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const set = (patch) => setCv((c) => ({ ...c, ...patch }));
  const setItem = (list, id, patch) =>
    set({ [list]: cv[list].map((x) => (x.id === id ? { ...x, ...patch } : x)) });
  const removeItem = (list, id) => set({ [list]: cv[list].filter((x) => x.id !== id) });

  const onPhoto = (file) => {
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert('Photo must be under 2 MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => set({ photo: reader.result, template: 'sidebar' });
    reader.readAsDataURL(file);
  };

  const Template = cv.template === 'sidebar' ? SidebarTemplate : ClassicTemplate;

  return (
    <div className={styles.builder}>
      {/* ---- toolbar ---- */}
      <div className={styles.toolbar}>
        <Link href="/" className={styles.toolbarBtn}>
          <FiArrowLeft aria-hidden="true" /> Back
        </Link>
        <span className={styles.toolbarTitle}>CV Generator</span>
        <div className={styles.toolbarRight}>
          <button
            type="button"
            className={styles.toolbarBtn}
            onClick={() => setCv(defaults())}
            title="Reset to portfolio data"
          >
            <FiRotateCcw aria-hidden="true" /> Reset
          </button>
          <button type="button" className={styles.printBtn} onClick={() => window.print()}>
            <FiPrinter aria-hidden="true" /> Print / Save PDF
          </button>
        </div>
      </div>

      <div className={styles.panes}>
        {/* ---- form pane ---- */}
        <div className={styles.form}>
          <Section title="Appearance">
            <div className={styles.segRow}>
              <span className={styles.segLabel}>Template</span>
              <div className={styles.seg}>
                {['classic', 'sidebar'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    data-active={cv.template === t}
                    onClick={() => set({ template: t })}
                  >
                    {t === 'classic' ? 'Classic' : 'Sidebar'}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.segRow}>
              <span className={styles.segLabel}>Accent Color</span>
              <div className={styles.swatches}>
                {ACCENT_COLORS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={styles.swatch}
                    style={{ background: c }}
                    data-active={cv.accentColor === c}
                    onClick={() => set({ accentColor: c })}
                    aria-label={`Accent color ${c}`}
                  />
                ))}
                <input
                  type="color"
                  className={styles.swatchCustom}
                  value={cv.accentColor}
                  onChange={(e) => set({ accentColor: e.target.value })}
                  aria-label="Custom accent color"
                  title="Custom color"
                />
              </div>
            </div>

            {cv.template === 'sidebar' && (
              <div className={styles.segRow}>
                <span className={styles.segLabel}>Sidebar Style</span>
                <div className={styles.swatches}>
                  {SIDEBAR_COLORS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      className={styles.swatch}
                      style={{ background: c }}
                      data-active={cv.sidebarBg === c}
                      onClick={() => set({ sidebarBg: c })}
                      aria-label={`Sidebar color ${c}`}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className={styles.segRow}>
              <span className={styles.segLabel}>CV Language</span>
              <div className={styles.seg}>
                {['en', 'fr'].map((l) => (
                  <button
                    key={l}
                    type="button"
                    data-active={cv.cvLanguage === l}
                    onClick={() => set({ cvLanguage: l })}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </Section>

          <Section
            title="Personal Info"
            action={
              <button type="button" className={styles.clearBtn} onClick={() => setCv(blank())}>
                <FiX aria-hidden="true" /> Clear all
              </button>
            }
          >
            <p className={styles.hint}>Edit these to match the person this CV is for.</p>

            <div className={styles.photoRow}>
              <span className={styles.segLabel}>Photo</span>
              {cv.photo ? (
                <img src={cv.photo} alt="CV portrait" className={styles.photoThumb} />
              ) : null}
              <label className={styles.addBtn}>
                <FiUpload aria-hidden="true" /> {cv.photo ? 'Change' : 'Upload'}
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  hidden
                  onChange={(e) => onPhoto(e.target.files?.[0])}
                />
              </label>
              {cv.photo ? (
                <button type="button" className={styles.clearBtn} onClick={() => set({ photo: null })}>
                  Remove
                </button>
              ) : null}
            </div>
            <p className={styles.hint}>Used on the Sidebar template. PNG, JPG or WebP · max 2 MB.</p>

            <div className={styles.fieldGrid}>
              <Field label="Full Name" value={cv.name} onChange={(v) => set({ name: v })} />
              <Field label="Initials" value={cv.initials} onChange={(v) => set({ initials: v })} />
              <Field label="Job Title" value={cv.role} onChange={(v) => set({ role: v })} />
              <Field label="Phone" value={cv.phone} onChange={(v) => set({ phone: v })} />
              <Field label="Email" type="email" value={cv.email} onChange={(v) => set({ email: v })} />
              <Field label="Location" value={cv.location} onChange={(v) => set({ location: v })} />
              <Field label="LinkedIn" value={cv.linkedin} onChange={(v) => set({ linkedin: v })} />
              <Field label="Website" value={cv.website} onChange={(v) => set({ website: v })} />
            </div>
          </Section>

          <Section title="Profile Summary">
            <Area
              label="Summary"
              rows={5}
              value={cv.profile}
              placeholder="A short summary of who you are and what you do."
              onChange={(v) => set({ profile: v })}
            />
          </Section>

          <Section
            title="Skills"
            action={
              <AddBtn
                onClick={() =>
                  set({
                    skillGroups: [...cv.skillGroups, { id: newId('sg'), label: '', skills: '' }],
                  })
                }
              >
                Add Category
              </AddBtn>
            }
          >
            {cv.skillGroups.map((g) => (
              <div key={g.id} className={styles.itemCard}>
                <RemoveBtn onClick={() => removeItem('skillGroups', g.id)} label="Remove category" />
                <div className={styles.fieldGrid}>
                  <Field
                    label="Category"
                    value={g.label}
                    onChange={(v) => setItem('skillGroups', g.id, { label: v })}
                  />
                </div>
                <Area
                  label="Skills (comma separated)"
                  rows={2}
                  value={g.skills}
                  onChange={(v) => setItem('skillGroups', g.id, { skills: v })}
                />
              </div>
            ))}
          </Section>

          <Section
            title="Languages"
            action={
              <AddBtn
                onClick={() =>
                  set({
                    languages: [
                      ...cv.languages,
                      { id: newId('lang'), name: '', level: '', pct: 80 },
                    ],
                  })
                }
              >
                Add Language
              </AddBtn>
            }
          >
            {cv.languages.map((l) => (
              <div key={l.id} className={styles.itemCard}>
                <RemoveBtn onClick={() => removeItem('languages', l.id)} label="Remove language" />
                <div className={styles.fieldGrid}>
                  <Field
                    label="Language"
                    value={l.name}
                    onChange={(v) => setItem('languages', l.id, { name: v })}
                  />
                  <Field
                    label="Level"
                    value={l.level}
                    placeholder="Fluent, Professional…"
                    onChange={(v) => setItem('languages', l.id, { level: v })}
                  />
                </div>
                <label className={styles.field}>
                  <span>Proficiency · {l.pct}%</span>
                  <input
                    type="range"
                    min={10}
                    max={100}
                    step={5}
                    value={l.pct}
                    onChange={(e) => setItem('languages', l.id, { pct: Number(e.target.value) })}
                  />
                </label>
              </div>
            ))}
          </Section>

          <Section
            title="Experience"
            action={
              <AddBtn
                onClick={() =>
                  set({
                    experiences: [
                      ...cv.experiences,
                      {
                        id: newId('exp'),
                        role: '',
                        company: '',
                        period: '',
                        location: '',
                        bullets: [],
                      },
                    ],
                  })
                }
              >
                Add Experience
              </AddBtn>
            }
          >
            {cv.experiences.map((e) => (
              <div key={e.id} className={styles.itemCard}>
                <RemoveBtn onClick={() => removeItem('experiences', e.id)} label="Remove experience" />
                <div className={styles.fieldGrid}>
                  <Field
                    label="Position"
                    value={e.role}
                    onChange={(v) => setItem('experiences', e.id, { role: v })}
                  />
                  <Field
                    label="Company"
                    value={e.company}
                    onChange={(v) => setItem('experiences', e.id, { company: v })}
                  />
                  <Field
                    label="Period"
                    value={e.period}
                    placeholder="Jan 2024 — Present"
                    onChange={(v) => setItem('experiences', e.id, { period: v })}
                  />
                  <Field
                    label="Location"
                    value={e.location}
                    onChange={(v) => setItem('experiences', e.id, { location: v })}
                  />
                </div>
                <Area
                  label="Highlights — one per line"
                  rows={3}
                  value={e.bullets.join('\n')}
                  onChange={(v) =>
                    setItem('experiences', e.id, {
                      bullets: v.split('\n').filter((b) => b.trim() !== '' || v.endsWith('\n')),
                    })
                  }
                />
              </div>
            ))}
          </Section>

          <Section
            title="Education"
            action={
              <AddBtn
                onClick={() =>
                  set({
                    education: [
                      ...cv.education,
                      { id: newId('edu'), degree: '', school: '', period: '', gpa: '', bullets: [] },
                    ],
                  })
                }
              >
                Add Education
              </AddBtn>
            }
          >
            {cv.education.map((d) => (
              <div key={d.id} className={styles.itemCard}>
                <RemoveBtn onClick={() => removeItem('education', d.id)} label="Remove education" />
                <div className={styles.fieldGrid}>
                  <Field
                    label="Degree"
                    value={d.degree}
                    onChange={(v) => setItem('education', d.id, { degree: v })}
                  />
                  <Field
                    label="School / University"
                    value={d.school}
                    onChange={(v) => setItem('education', d.id, { school: v })}
                  />
                  <Field
                    label="Period"
                    value={d.period}
                    onChange={(v) => setItem('education', d.id, { period: v })}
                  />
                  <Field
                    label="GPA"
                    value={d.gpa}
                    placeholder="3.41/4.0"
                    onChange={(v) => setItem('education', d.id, { gpa: v })}
                  />
                </div>
                <Area
                  label="Highlights — one per line"
                  rows={2}
                  value={d.bullets.join('\n')}
                  onChange={(v) =>
                    setItem('education', d.id, {
                      bullets: v.split('\n').filter((b) => b.trim() !== '' || v.endsWith('\n')),
                    })
                  }
                />
              </div>
            ))}
          </Section>
        </div>

        {/* ---- live preview pane ---- */}
        <div className={styles.preview} ref={previewRef}>
          <p className={styles.previewLabel}>Live Preview · A4 210 × 297 mm</p>
          <div
            className={styles.previewScale}
            style={{ transform: `scale(${scale})`, height: `calc(297mm * ${scale})` }}
          >
            <Template cv={cv} />
          </div>
        </div>
      </div>
    </div>
  );
}
