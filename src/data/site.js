/* ------------------------------------------------------------------
   All portfolio content lives here. Edit this file   not the
   components   to change copy, projects, skills or links.

   TODO markers below flag values I drafted or estimated   check each
   one and correct it before deploying.
   ------------------------------------------------------------------ */

export const site = {
  name: 'Bienvenu Ambassa',
  firstName: 'Bienvenu',
  lastName: 'Ambassa',
  role: 'Full-Stack Web Developer',
  tagline:
    'I design and build production web platforms   React on the front, Spring Boot and Node underneath.',
  location: 'Cameroon',
  availability: 'Open to freelance & full-time roles',
  email: 'kidsglory1@gmail.com',
  /* TODO: generate at /cv?preset=download → "Save as PDF", drop it in
     /public/cv/ and point this here. null hides the instant-download
     button and sends visitors to the CV builder instead. */
  cv: null,
  portrait: '/images/me-hero.webp',
  social: {
    github: 'https://github.com/Bienvenu2004',
    linkedin: 'https://www.linkedin.com/in/bienvenu-ambassa-637306239/',
  },
  stats: [
    { value: '3+', label: 'Years building for the web' },
    { value: '2', label: 'Products shipped to production' },
    { value: '5+', label: 'Frameworks used in production' },
  ],
};

export const about = {
  eyebrow: 'About me',
  title: 'Building software that',
  titleAccent: 'actually ships',
  titleEnd: 'and holds up in production.',
  locationLine: 'Cameroon · UTC+1 · Available remotely',
  /* **text** renders as a gold highlight */
  paragraphs: [
    'I’m a full-stack developer who cares about **the details users never consciously notice**   the timing of a transition, the weight of a shadow, the speed of a first paint. I build **interfaces that feel right**, backed by APIs that hold up.',
    'On the front I work in **React** and **Next.js**; behind it, **Java** with **Spring Boot** microservices, or **Node.js** and **Laravel**, over **PostgreSQL** or **MongoDB**. I test what I ship   **Cucumber** for behaviour, **Mockito** for the units   and I like taking a product all the way from design to deploy.',
  ],
  highlights: [
    'React',
    'Next.js',
    'Java',
    'Spring Boot',
    'Node.js',
    'PostgreSQL',
    'Laravel',
    'Cucumber',
  ],
};

/* icon keys resolve to brand icons in Skills.jsx */
export const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'MUI', icon: 'mui' },
      { name: 'Ant Design', icon: 'antd' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Java', icon: 'java' },
      { name: 'Spring Boot', icon: 'springboot' },
      { name: 'Node.js', icon: 'node' },
      { name: 'Express', icon: 'express' },
      { name: 'PHP', icon: 'php' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'REST APIs', icon: 'api' },
      { name: 'Microservices', icon: 'microservices' },
    ],
  },
  {
    label: 'Data & Cloud',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'AWS', icon: 'aws' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Git', icon: 'git' },
    ],
  },
  {
    label: 'Testing & Quality',
    skills: [
      { name: 'Cucumber (BDD)', icon: 'cucumber' },
      { name: 'Mockito', icon: 'mockito' },
      { name: 'JUnit', icon: 'junit' },
      { name: 'Postman', icon: 'postman' },
    ],
  },
];

/* Images live in /public/images/projects/   each project takes an
   `images` array; multiple entries get a thumbnail switcher in the
   preview panel. Name theme variants `*-dark.*` / `*-light.*` and the
   preview auto-picks the one matching the active theme. An empty
   array renders a placeholder tile. */
export const projects = [
  {
    title: 'LandlordNde24',
    description:
      'Property management software for landlords and tenants   listings, rent tracking and day-to-day property administration, live in production at landlordnde24.com.',
    stack: ['React', 'Antd', 'Tailwind CSS', 'Node.js'],
    images: [
      '/images/projects/landlordnde24-dark.webp',
      '/images/projects/landlordnde24-light.webp',
    ],
    link: 'https://landlordnde24.com',
    repo: null,
    featured: true,
  },
  {
    title: 'Sora Shine & Dine',
    description:
      'A bilingual (EN/FR) marketing site for a Yaoundé homemade-catering and small-chops business   filterable menu, occasions and gift-basket showcase, dark/light themes, and a friction-free ordering flow that pre-fills a WhatsApp message with the customer’s date, guest count and selection. Built and deployed as a fast, backend-free React app.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'i18n', 'Vercel'],
    images: [
      '/images/projects/sora-shine-dine-1.png',
      '/images/projects/sora-shine-dine-2.png',
      '/images/projects/sora-shine-dine-3.png',
    ],
    link: 'https://sora-shine-dine.vercel.app',
    repo: null,
    featured: true,
  },
  {
    title: 'Klivar',
    description:
      'A compliance and risk-management platform for banks, microfinance institutions, insurers, FinTechs and payment providers   automating regulatory reporting, with AI assistance on top. I built it full-stack: React front end over Spring Boot microservices and PostgreSQL, covered by Cucumber and Mockito test suites.',
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'Cucumber', 'Microservices'],
    images: [], // TODO: add screenshots to /public/images/projects/ if you have any
    link: null,
    repo: null,
    featured: true,
  },
];

/* npm packages   shown in the "Packages I publish" section.
   Empty array hides the section and its nav link entirely. */
export const packages = [];

export const education = [
  {
    /* TODO: confirm the exact award title */
    degree: 'Master’s (Year I)   Information Science & Software Engineering (SIGL)',
    institution: 'University of Yaoundé I',
    gpa: null,
    period: 'Oct 2024 – Jun 2025',
    location: 'Yaoundé, Cameroon',
    description:
      'Graduate-level software engineering: distributed system design, microservice architecture and applied software quality.',
    /* TODO: these course lists are my draft   replace with your real modules */
    courses: [
      'Microservice Architecture',
      'Advanced Software Engineering',
      'Information Systems Design',
      'Software Quality & Testing',
    ],
    logo: '/images/certifications/uy1-logo.webp',
  },
  {
    degree: 'Bachelor’s Degree   ICT for Development',
    institution: 'University of Yaoundé I',
    gpa: null,
    period: 'Oct 2023 – Jul 2024',
    location: 'Yaoundé, Cameroon',
    description:
      'Applied computing for development contexts   web and information systems built for real-world constraints.',
    courses: [
      'Web Application Development',
      'Databases & Information Systems',
      'ICT Project Management',
      'Networks & Systems',
    ],
    logo: '/images/certifications/uy1-logo.webp',
  },
  {
    degree: 'HND (Higher National Diploma)   Software Engineering',
    institution: 'Institut Universitaire Siantou',
    gpa: null,
    period: 'Oct 2021 – Jul 2023',
    location: 'Yaoundé, Cameroon',
    description:
      'Foundational computer science and software engineering training   programming, databases and web development.',
    courses: [
      'Object-Oriented Programming (Java)',
      'Web Development (HTML, CSS, JavaScript)',
      'Relational Databases (SQL)',
      'Software Analysis & Design',
    ],
    logo: '/images/certifications/siantou-logo.webp',
  },
];

/* Empty array hides the certifications column. */
export const certifications = [];

export const timeline = [
  {
    logo: '/images/experience/nde24.webp',
    company: 'Nde24',
    /* TODO: confirm your official job title */
    role: 'Full-Stack Developer',
    period: 'Mar 2026   Present', // TODO: confirm start date
    type: 'Full-time · Hybrid',
    place: 'Yaoundé, Cameroon',
    description:
      'Full-stack product work across the Nde24 platform   building features end-to-end and using AI-assisted development to ship faster.',
    current: true,
  },
  {
    logo: null, // TODO: add a Klivar logo to /public/images/experience/
    company: 'Klivar',
    role: 'Full-Stack Developer',
    period: 'Feb 2025   Feb 2026', // TODO: confirm exact dates
    type: 'Full-time · On-site',
    place: 'Yaoundé, Cameroon',
    description:
      'Built Klivar’s compliance and risk-reporting platform end-to-end   React front end, Spring Boot microservices and PostgreSQL, with Cucumber behaviour tests and Mockito unit coverage.',
  },
];

export const footer = {
  eyebrow: 'Contact',
  headline: 'Let’s work',
  headlineAccent: 'together.',
  description:
    'Have a project in mind, a role to fill, or just want to talk shop? My inbox is open   I usually reply within a day.',
};
