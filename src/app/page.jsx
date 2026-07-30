import Navbar from '@/components/nav/Navbar';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Packages from '@/components/sections/Packages';
import Timeline from '@/components/sections/Timeline';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Packages />
        <Timeline />
        <Education />
      </main>

      <Contact />
    </>
  );
}
