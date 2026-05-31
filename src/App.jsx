/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import WorkExperience from './components/WorkExperience/WorkExperience.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Skills from './components/Skills/Skills.jsx';
import Certificates from './components/Certificates/Certificates.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import CustomCursor from './components/CustomCursor/CustomCursor.jsx';
import ProjectModal from './components/ProjectModal/ProjectModal.jsx';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [cursorEnabled, setCursorEnabled] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Check local preference storage for theme & cursor toggles
    try {
      const savedTheme = localStorage.getItem('pref_hana_theme');
      if (savedTheme === 'dark') {
        setIsDark(true);
      }
      
      const savedCursor = localStorage.getItem('pref_hana_cursor');
      if (savedCursor === 'disabled') {
        setCursorEnabled(false);
      }
    } catch (error) {
      console.warn('Failed to restore preferences from localStorage:', error);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const nextTheme = !prev;
      localStorage.setItem('pref_hana_theme', nextTheme ? 'dark' : 'light');
      return nextTheme;
    });
  };

  const toggleCursor = () => {
    setCursorEnabled((prev) => {
      const nextCursorState = !prev;
      localStorage.setItem('pref_hana_cursor', nextCursorState ? 'enabled' : 'disabled');
      return nextCursorState;
    });
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  // Safe scroll behaviors to specific anchor elements
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToWork = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen text-sans overflow-x-hidden antialiased select-none font-sans transition-colors duration-500 relative ${
        isDark 
          ? 'bg-plum-dark text-gray-100' 
          : 'bg-[#FFF0F3] text-gray-800'
      }`}
    >
      {/* Absolute Frosted Glass blob overlay points */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-rose-200 dark:bg-pink-950/20 rounded-full blur-[100px] opacity-60 pointer-events-none z-0"></div>
      <div className="absolute bottom-[200px] right-[-50px] w-[500px] h-[500px] bg-white dark:bg-rose-950/20 rounded-full blur-[120px] opacity-75 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rose-100 dark:bg-purple-950/10 rounded-full blur-[150px] opacity-40 pointer-events-none z-0"></div>

      {/* Navbar stays at the top */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} cursorEnabled={cursorEnabled} toggleCursor={toggleCursor} />

      {/* Main content */}
      <main className="relative z-10">
        <Hero isDark={isDark} onContactClick={handleScrollToContact} onWorkClick={handleScrollToWork} />
        <About isDark={isDark} />
        <Services isDark={isDark} />
        <WorkExperience isDark={isDark} />
        <Portfolio isDark={isDark} onSelectProject={handleSelectProject} />
        <Skills isDark={isDark} />
        <Certificates isDark={isDark} />
        <Contact isDark={isDark} />
        <Footer isDark={isDark} />
      </main>

      {/* Modal overlay for project details */}
      <ProjectModal project={selectedProject} onClose={handleCloseProjectModal} isDark={isDark} />

      {/* Custom Cursor Display */}
      <CustomCursor enabled={cursorEnabled} />
    </div>
  );
}
