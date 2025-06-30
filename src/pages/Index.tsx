import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import EducationSection from '../components/portfolio/EducationSection';
import ContactSection from '../components/portfolio/ContactSection';
import Navigation from '../components/portfolio/Navigation';
import Footer from '../components/portfolio/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="relative bg-background"> {/* Changed to bg-background */}
      {/* Navigation */}
      <Navigation scrollY={scrollY} />
      
      {/* Removed fixed background gradient, main content will use bg-background */}

      {/* Main content */}
      <main className="relative z-10">
        <section id="home" className="min-h-screen">
          <HeroSection />
        </section>

        <section id="about" className="min-h-screen">
          <AboutSection />
        </section>

        <section id="skills" className="min-h-screen">
          <SkillsSection />
        </section>

        <section id="projects" className="min-h-screen">
          <ProjectsSection />
        </section>

        <section id="experience" className="min-h-screen">
          <ExperienceSection />
        </section>

        <section id="education" className="min-h-screen">
          <EducationSection />
        </section>

        <section id="contact" className="min-h-screen">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;