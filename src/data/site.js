/* ------------------------------------------------------------------
   All portfolio content lives here. Edit this file — not the
   components — to change copy, projects, skills or links.
   ------------------------------------------------------------------ */

export const site = {
  name: 'Abdulrahim',
  firstName: 'Abdul',
  lastName: 'Rahim',
  role: 'Full-Stack Web Developer',
  tagline: 'I design and build fast, polished web experiences with Next.js, React and Node.',
  location: 'Cameroon',
  availability: 'Open to freelance & full-time roles',
  email: 'abdulrahim.kibuh@gmail.com',
  cv: '/cv/RahimCV-Latest.pdf',
  portrait: '/images/me-hero.jpeg',
  social: {
    github: 'https://github.com/Abdulrahim2567',
    linkedin: 'https://www.linkedin.com/in/abdou-rahim-729411246',
  },
  stats: [
    { value: '4+', label: 'Years building for the web' },
    { value: '10+', label: 'Projects shipped' },
    { value: '2', label: 'Open-source packages' },
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
    'I’m a full-stack developer who cares about **the details users never consciously notice** — the timing of a transition, the weight of a shadow, the speed of a first paint. I build **interfaces that feel right**, backed by APIs that hold up.',
    'My main tools are **Next.js**, **React**, **Node.js** and **Express**, with **MongoDB**, **MySQL** or **PostgreSQL** underneath. I’ve also done time in **Firebase** and **AWS**, and I like shipping complete products — design, build, deploy.',
  ],
  highlights: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Firebase', 'AWS'],
};

/* icon keys resolve to brand icons in Skills.jsx */
export const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'React', icon: 'react' },
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
      { name: 'Node.js', icon: 'node' },
      { name: 'Express', icon: 'express' },
      { name: 'REST APIs', icon: 'api' },
      { name: 'PHP', icon: 'php' },
    ],
  },
  {
    label: 'Data & Cloud',
    skills: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'AWS', icon: 'aws' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Git', icon: 'git' },
    ],
  },
];

/* Images live in /public/images/projects/ — each project takes an
   `images` array; multiple entries get a thumbnail switcher in the
   preview panel. Name theme variants `*-dark.*` / `*-light.*` and the
   preview auto-picks the one matching the active theme. */
export const projects = [
	{
		title: 'LandlordNde24',
		description:
			'Property management software for landlords and tenants — listings, rent tracking and day-to-day property administration, live in production at landlordnde24.com.',
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
		title: 'Caasitech Academy',
		description:
			'Web platform for Caasitech’s skills-development division — training programs, course information and student applications for learners across Cameroon.',
		stack: ['HTML5', 'JavaScript', 'CSS3'],
		images: [
			'/images/projects/caasitech-academy.webp',
			'/images/projects/caasitech-academy-2.webp',
		],
		link: null,
		repo: null,
		featured: true,
	},
	{
		title: 'Perform by Caasitech',
		description:
			'An employee performance and engagement platform — modular tools for tracking productivity and workforce improvement, built to make people enjoy working again.',
		stack: ['Next.js', 'Node.js', 'REST API'],
		images: [
			'/images/projects/performbycaasitech.webp',
			'/images/projects/performbycaasitech-2.webp',
		],
		link: null,
		repo: null,
		featured: true,
	},
	{
		title: 'WATCH — Movie Streaming',
		description:
			'A cinematic movie discovery and streaming app. Server-rendered catalog, debrid-powered streams, custom player, and the same gold-on-black design system this portfolio uses and built with a Zero-UI library approach.',
		stack: ['Next.js', 'CSS Modules', 'TMDB API'],
		images: [
			'/images/projects/watch-dark.webp',
			'/images/projects/watch-light.webp',
		],
		link: 'https://next-js-movie-site-three.vercel.app/',
		repo: 'https://gitlab.com/kar73/NextJS-Movie-Site',
		featured: true,
	},
	{
		title: 'This Portfolio',
		description:
			'The site you’re looking at — a zero-UI-library rebuild on Next.js and CSS Modules, sharing design tokens with WATCH. Lighthouse-fast by design.',
		stack: ['Next.js', 'CSS Modules', 'next-themes'],
		images: [
			'/images/projects/portfolio-dark.webp',
			'/images/projects/portfolio-light.webp',
		],
		link: null,
		repo: 'https://github.com/Abdulrahim2567/my-portfolio',
		featured: false,
	},
];

/* npm packages — shown in the "Packages I publish" section */
export const packages = [
  {
    name: 'nextjs13-progress',
    tagline: 'Route-change progress bar for the Next.js 13+ App Router.',
    bullets: [
      'Drop-in <Next13ProgressBar /> — one component, no config',
      'App Router native (next/navigation aware)',
      'Custom color, height and easing options',
      'No layout shift — renders above the page',
      'Full TypeScript types included',
      'Tiny footprint with nprogress under the hood',
    ],
    tags: ['Next.js', 'App Router', 'TypeScript', 'UX'],
    installCmd: 'npm i nextjs13-progress',
    repo: 'https://github.com/Abdulrahim2567/nextjs13-progress',
    npm: 'https://www.npmjs.com/package/nextjs13-progress',
  },
  {
    name: 'nextjs13-nprogress-app-router',
    tagline: 'nprogress wired to App Router navigation events.',
    bullets: [
      'Progress on Link clicks and router.push',
      'Works alongside Suspense streaming',
      'Configurable start/stop delays',
      'Custom styling via CSS overrides',
      'TypeScript support out of the box',
      'Lightweight build, zero extra deps',
    ],
    tags: ['Next.js', 'nprogress', 'Router', 'TypeScript'],
    installCmd: 'npm i nextjs13-nprogress-app-router',
    repo: 'https://github.com/Abdulrahim2567/nextjs13-nprogress-app-router',
    npm: 'https://www.npmjs.com/package/nextjs13-nprogress-app-router',
  },
];

export const education = [
  {
    degree: 'Bachelor’s in Software Engineering',
    institution: 'Institut Universitaire Siantou',
    gpa: '3.41/4.0',
    period: 'Nov 2021 – Jul 2022',
    location: 'Yaoundé, Cameroon',
    description:
      'Advanced coursework in full-stack development, software architecture and intelligent systems, culminating in a final project on responsive web applications.',
    courses: [
      'Web Development (React, Vue, Node.js)',
      'Software Architecture',
      'Applied Artificial Intelligence',
      'Mobile Development (React Native)',
    ],
    logo: '/images/certifications/siantou-logo.webp',
  },
  {
    degree: 'BTS (Higher National Diploma) in Software Engineering',
    institution: 'Institut Universitaire Siantou',
    gpa: '3.21/4.0',
    period: 'Nov 2019 – Jul 2021',
    location: 'Yaoundé, Cameroon',
    description:
      'Foundational computer science training focused on secure, scalable systems, networking and distributed computing in cloud environments.',
    courses: [
      'Object-Oriented Programming (Java)',
      'Network Security & Cryptography',
      'Cloud Computing (AWS Fundamentals)',
      'Distributed Systems & Microservices',
    ],
    logo: '/images/certifications/siantou-logo.webp',
  },
];

export const certifications = [
  {
    title: 'Salesforce Certified JavaScript Developer I',
    issuer: 'Salesforce',
    issued: 'Mar 2023',
    status: 'Active',
    badge: '/images/certifications/salesforce-js.webp',
    verifyLink: 'https://trailhead.salesforce.com/credentials/verification',
    pdf: '/certifications/salesforce-js-cert.pdf',
  },
  {
    title: 'Salesforce Certified Platform Developer I',
    issuer: 'Salesforce',
    issued: 'Mar 2023',
    status: 'Expired',
    badge: '/images/certifications/salesforce-platform.webp',
    verifyLink: 'https://trailhead.salesforce.com/credentials/verification',
    pdf: null,
  },
];

export const timeline = [
  {
    logo: '/images/experience/nde24.webp',
    company: 'Nde24',
    role: 'Technical Lead',
    period: 'Apr 2025 — Present',
    type: 'Full-time · Remote',
    place: 'Yaoundé — MINKAN, Terminus Odza',
    description:
      'Leading the technical team behind Nde24 — technical staff management, technology leadership and architecture decisions across the product.',
    current: true,
  },
  {
    logo: '/images/experience/nde24.webp',
    company: 'Nde24',
    role: 'AEM CMS Developer',
    period: 'Dec 2023 — Apr 2025',
    type: 'Full-time · Remote',
    place: 'Centre, Cameroon',
    description:
      'Built and maintained content platforms on Adobe Experience Manager (AEM) and modern content management systems.',
  },
  {
    logo: '/images/experience/caasitech.webp',
    company: 'Caasitech Group, LLC',
    role: 'Web Developer · Machine Learning Recruit',
    period: 'Nov 2023 — Jan 2024',
    type: 'Full-time · On-site',
    place: 'Yaoundé, Cameroon',
    description:
      'Built impactful web experiences while training on machine-learning algorithms — exploring the intersection of web development and ML.',
  },
  {
    logo: '/images/experience/neema.webp',
    company: 'Neema',
    role: 'Web Developer',
    period: 'Nov 2022 — Nov 2023',
    type: 'Full-time · On-site',
    place: 'Yaoundé, Cameroon',
    description:
      'Front-end development on production platforms — component architecture, UI implementation and cross-team collaboration.',
  },
  {
    logo: null,
    company: 'Freelance',
    role: 'Software Engineer',
    period: 'Jun 2022 — Nov 2023',
    type: 'Freelance',
    place: 'Yaoundé, Cameroon',
    description:
      'Independent software engineering for clients — web applications designed, built and shipped end-to-end.',
  },
  {
    logo: '/images/certifications/siantou-logo.webp',
    company: 'Siantou University Institute',
    role: 'Student — Seasonal',
    period: 'Oct 2021 — Jul 2022',
    type: 'Seasonal',
    place: 'Yaoundé, Cameroon',
    description:
      'Hands-on programming alongside coursework — jQuery, HTML5 and programming fundamentals.',
  },
];

export const footer = {
  eyebrow: 'Contact',
  headline: 'Let’s work',
  headlineAccent: 'together.',
  description:
    'Have a project in mind, a role to fill, or just want to talk shop? My inbox is open — I usually reply within a day.',
};
