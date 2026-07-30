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
import { site, about, skillGroups, timeline, education, projects } from '@/data/site';
import styles from './cv.module.css';

/* every printable section — drives the download modal checkboxes */
const SECTION_OPTIONS = [
  ['profile', 'Profile Summary'],
  ['skills', 'Skills'],
  ['languages', 'Languages'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['education', 'Education'],
];
const allSections = () => Object.fromEntries(SECTION_OPTIONS.map(([k]) => [k, true]));

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
    photo: '/images/me-hero.jpeg',
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
    projects: projects.map((p, i) => ({
      id: `proj-${i}`,
      name: p.title,
      tech: p.stack.join(', '),
      link: p.link ? p.link.replace(/^https?:\/\//, '') : p.repo ? p.repo.replace(/^https?:\/\//, '') : '',
      description: p.description,
    })),
    sections: allSections(),
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
    projects: [],
    education: [],
  };
}

/* apply the section selection — templates hide empty sections */
function applySections(cv) {
  const s = cv.sections ?? allSections();
  return {
    ...cv,
    profile: s.profile ? cv.profile : '',
    skillGroups: s.skills ? cv.skillGroups : [],
    languages: s.languages ? cv.languages : [],
    experiences: s.experience ? cv.experiences : [],
    projects: s.projects ? cv.projects : [],
    education: s.education ? cv.education : [],
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
  const [showDownload, setShowDownload] = useState(false);
  const previewRef = useRef(null);
  const [scale, setScale] = useState(0.75);

  const presetRef = useRef(false);

  // restore a saved draft after mount (SSR-safe).
  // ?preset=download renders the canonical config (sidebar template,
  // gold accent, first sidebar color, portfolio photo) — used to
  // generate the static PDF behind the site's Download CV button.
  useEffect(() => {
    const preset = new URLSearchParams(window.location.search).get('preset');
    if (preset === 'download') {
      presetRef.current = true;
      setCv({ ...defaults(), template: 'sidebar' });
      setLoaded(true);
      return;
    }
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setCv({ ...defaults(), ...JSON.parse(saved) });
    } catch {
      /* corrupt draft — keep defaults */
    }
    setLoaded(true);
  }, []);

  // autosave drafts (never overwrite the user's draft from preset mode)
  useEffect(() => {
    if (!loaded || presetRef.current) return;
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
    reader.onload = () => set({ photo: reader.result });
    reader.readAsDataURL(file);
  };

  /* shared add-handlers — used by both the section header and the
     bottom "Add …" row, so long lists never force a scroll back up */
  const addSkillGroup = () =>
    set({ skillGroups: [...cv.skillGroups, { id: newId('sg'), label: '', skills: '' }] });
  const addLanguage = () =>
    set({ languages: [...cv.languages, { id: newId('lang'), name: '', level: '', pct: 80 }] });
  const addExperience = () =>
    set({
      experiences: [
        ...cv.experiences,
        { id: newId('exp'), role: '', company: '', period: '', location: '', bullets: [] },
      ],
    });
  const addEducation = () =>
    set({
      education: [
        ...cv.education,
        { id: newId('edu'), degree: '', school: '', period: '', gpa: '', bullets: [] },
      ],
    });
  const addProject = () =>
    set({
      projects: [
        ...cv.projects,
        { id: newId('proj'), name: '', tech: '', link: '', description: '' },
      ],
    });

  const toggleSection = (key) =>
    set({ sections: { ...(cv.sections ?? allSections()), [key]: !(cv.sections ?? allSections())[key] } });

  const printWith = (sections) => {
    set({ sections });
    setShowDownload(false);
    // let the preview re-render with the selection before the print dialog opens
    setTimeout(() => window.print(), 150);
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
          <button type="button" className={styles.printBtn} onClick={() => setShowDownload(true)}>
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
            <p className={styles.hint}>Shown on the generated CV. PNG, JPG or WebP · max 2 MB.</p>

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

          <Section title="Skills" action={<AddBtn onClick={addSkillGroup}>Add Category</AddBtn>}>
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
            {cv.skillGroups.length > 0 && (
              <div className={styles.addRow}>
                <AddBtn onClick={addSkillGroup}>Add Category</AddBtn>
              </div>
            )}
          </Section>

          <Section title="Languages" action={<AddBtn onClick={addLanguage}>Add Language</AddBtn>}>
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
            {cv.languages.length > 0 && (
              <div className={styles.addRow}>
                <AddBtn onClick={addLanguage}>Add Language</AddBtn>
              </div>
            )}
          </Section>

          <Section
            title="Experience"
            action={<AddBtn onClick={addExperience}>Add Experience</AddBtn>}
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
            {cv.experiences.length > 0 && (
              <div className={styles.addRow}>
                <AddBtn onClick={addExperience}>Add Experience</AddBtn>
              </div>
            )}
          </Section>

          <Section title="Projects" action={<AddBtn onClick={addProject}>Add Project</AddBtn>}>
            {cv.projects.map((p) => (
              <div key={p.id} className={styles.itemCard}>
                <RemoveBtn onClick={() => removeItem('projects', p.id)} label="Remove project" />
                <div className={styles.fieldGrid}>
                  <Field
                    label="Project Name"
                    value={p.name}
                    onChange={(v) => setItem('projects', p.id, { name: v })}
                  />
                  <Field
                    label="Tech (comma separated)"
                    value={p.tech}
                    onChange={(v) => setItem('projects', p.id, { tech: v })}
                  />
                </div>
                <Field
                  label="Link"
                  value={p.link}
                  placeholder="myproject.com"
                  onChange={(v) => setItem('projects', p.id, { link: v })}
                />
                <Area
                  label="Description"
                  rows={2}
                  value={p.description}
                  onChange={(v) => setItem('projects', p.id, { description: v })}
                />
              </div>
            ))}
            {cv.projects.length > 0 && (
              <div className={styles.addRow}>
                <AddBtn onClick={addProject}>Add Project</AddBtn>
              </div>
            )}
          </Section>

          <Section
            title="Education"
            action={<AddBtn onClick={addEducation}>Add Education</AddBtn>}
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
            {cv.education.length > 0 && (
              <div className={styles.addRow}>
                <AddBtn onClick={addEducation}>Add Education</AddBtn>
              </div>
            )}
          </Section>
        </div>

        {/* ---- live preview pane ---- */}
        <div className={styles.preview} ref={previewRef}>
          <p className={styles.previewLabel}>Live Preview · A4 210 × 297 mm</p>
          <div
            className={styles.previewScale}
            style={{ transform: `scale(${scale})`, height: `calc(297mm * ${scale})` }}
          >
            <Template cv={applySections(cv)} />
          </div>
        </div>
      </div>

      {/* ---- download modal: full CV or selected sections ---- */}
      {showDownload && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => e.target === e.currentTarget && setShowDownload(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Download CV"
        >
          <div className={styles.modal}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setShowDownload(false)}
              aria-label="Close"
            >
              <FiX />
            </button>

            <p className={styles.modalEyebrow}>Download CV</p>
            <h2 className={styles.modalTitle}>What should it include?</h2>
            <p className={styles.hint}>
              Untick anything you want to leave out — the preview updates to match.
            </p>

            <div className={styles.modalChecks}>
              {SECTION_OPTIONS.map(([key, label]) => (
                <label key={key} className={styles.check}>
                  <input
                    type="checkbox"
                    checked={(cv.sections ?? allSections())[key]}
                    onChange={() => toggleSection(key)}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>

            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.addBtn}
                onClick={() => printWith(allSections())}
              >
                Full CV
              </button>
              <button
                type="button"
                className={styles.printBtn}
                onClick={() => printWith(cv.sections ?? allSections())}
              >
                <FiPrinter aria-hidden="true" /> Print selection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
