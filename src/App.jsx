/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import WorkExperience from './components/WorkExperience/WorkExperience.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Skills from './components/Skills/Skills.jsx';
import Certificates from './components/Certificates/Certificates.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import ProjectModal from './components/ProjectModal/ProjectModal.jsx';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Custom interactive page loading animation toggle
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Check local preference storage for theme & cursor toggles
    const savedTheme = localStorage.getItem('pref_aileen_theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }

    // 2. Mock intro presentation load time
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(loadTimer);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const nextTheme = !prev;
      localStorage.setItem('pref_aileen_theme', nextTheme ? 'dark' : 'light');
      return nextTheme;
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

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rose-100 dark:bg-purple-950/10 rounded-full blur-[150px] opacity-40 pointer-events-none z-0"></div>
<div className="absolute bottom-[200px] right-[-50px] w-[500px] h-[500px] bg-white dark:bg-rose-950/20 rounded-full blur-[120px] opacity-75 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rose-100 dark:bg-purple-950/10 rounded-full blur-[150px] opacity-40 pointer-events-none z-0"></div>
      {/* Intro presentation transition wrapper */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#ffe5ec]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-4 text-center p-6"
            >
              {/* Spinning cute logo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                className="w-16 h-16 rounded-full bg-hotpink flex items-center justify-center shadow-lg shadow-pink-300"
              >
                <Sparkles className="text-white" size={28} />
              </motion.div>

              <div className="space-y-1 font-display">
                <h2 className="text-2xl font-bold tracking-tight text-hotpink">Aileen Lagura</h2>
                <p className="text-xs font-mono tracking-widest uppercase text-pink-500/80">
              
                </p>
              </div>

              {/* Loader progress bar segment */}
              <div className="w-36 h-1 bg-pink-100 rounded-full overflow-hidden mt-3 relative">
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                  className="absolute top-0 bottom-0 w-1/2 bg-hotpink rounded-full"
                />
              </div>

              <span className="text-[10px] font-mono tracking-widest uppercase text-pink-500/70 mt-1">
              
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main UI layout (only loaded once loading complete) */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Nav component */}
          <Navbar
            isDark={isDark}
            toggleTheme={toggleTheme}
          />

          {/* Sections of Single-Screen Portfolio layout */}
          <main className="relative z-10">
            <Hero
              isDark={isDark}
              onContactClick={handleScrollToContact}
              onWorkClick={handleScrollToWork}
            />
            <About isDark={isDark} />
            <WorkExperience isDark={isDark} />
            <Skills isDark={isDark} />
            <Portfolio isDark={isDark} onSelectProject={handleSelectProject} />
            <Certificates isDark={isDark} />
            <Contact isDark={isDark} />
          </main>

          {/* Site footer component */}
          <Footer isDark={isDark} />

          {/* Full specification detailed inspect overlay */}
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseProjectModal}
            isDark={isDark}
          />
        </motion.div>
      )}
    </div>
  );
}