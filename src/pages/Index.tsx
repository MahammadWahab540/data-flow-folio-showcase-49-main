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
    <div className="relative">
      {/* Navigation */}
      <Navigation scrollY={scrollY} />
      
      {/* Background gradient transitions */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{
          background: `linear-gradient(180deg, 
            hsl(var(--background)) 0%, 
            hsl(240 5.9% 10% / 0.8) 20%, /* Dark blue/gray */
            hsl(260 5.9% 15% / 0.8) 40%, /* Darker purple/gray */
            hsl(var(--background)) 60%, 
            hsl(240 5.9% 10% / 0.7) 80%, 
            hsl(220 10% 5% / 0.95) 100%)` /* Very dark at the bottom */
        }}
      />

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