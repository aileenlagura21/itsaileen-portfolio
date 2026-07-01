/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from '../Logo/Logo.jsx';
import './Navbar.css';

// Constants
const SCROLL_THRESHOLD = 20;
const SCROLL_OFFSET = 120;
const NAVBAR_HEIGHT_OFFSET = 85;
const SCROLL_THROTTLE_MS = 100;

const MENU_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const lastScrollTimeRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTimeRef.current < SCROLL_THROTTLE_MS) return;
      lastScrollTimeRef.current = now;

      // Background scroll style
      if (window.scrollY > SCROLL_THRESHOLD) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Live Section Tracker
      const scrollPosition = window.scrollY + SCROLL_OFFSET;
      for (const item of MENU_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetPos = element.offsetTop - NAVBAR_HEIGHT_OFFSET;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };


  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'bg-plum-dark/45 border-b border-white/5 backdrop-blur-xl shadow-lg shadow-black/20 py-3'
              : 'bg-white/30 border-b border-white/50 backdrop-blur-xl shadow-sm shadow-rose-100/10 py-3'
            : 'bg-transparent py-5'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo & Vibe */}
          <button
            id="nav-logo"
            onClick={() => handleScrollTo('home')}
            className="flex items-center gap-1.5 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-hotpink rounded-lg"
            aria-label="Aileen Lagura - Home"
            title="Go to home section"
          >
            <div className="w-11 h-11 flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-6 transition-transform duration-300">
              <Logo size={46} isDark={isDark} showTagline={false} />
            </div>
            <div className="text-left font-display">
              <p className="text-sm font-bold tracking-tight text-hotpink leading-tight">Aileen Lagura</p>
              <p className={`text-[10px] font-mono tracking-widest uppercase leading-none ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>

              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            <div className="flex items-center gap-6 bg-white/30 dark:bg-white/5 backdrop-blur-md px-7 py-2.5 rounded-full border border-white/50 dark:border-white/10 shadow-sm shadow-rose-100/5">
              {MENU_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleScrollTo(item.id)}
                    className={`relative px-1 py-1 font-sans text-xs font-semibold tracking-wider uppercase cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-hotpink rounded-lg ${
                      isActive
                        ? isDark
                          ? 'text-hotpink'
                          : 'text-hotpink font-bold'
                        : isDark
                          ? 'text-gray-300 hover:text-hotpink'
                          : 'text-gray-600 hover:text-hotpink'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                    aria-label={item.label}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-hotpink rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>



              {/* Theme Toggle */}
              <button
                id="btn-navbar-theme"
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-hotpink ${
                  isDark
                    ? 'hover:bg-white/10 text-gray-300 hover:text-hotpink'
                    : 'hover:bg-white/40 text-gray-600 hover:text-hotpink'
                }`}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-pressed={isDark}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>



          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="btn-navbar-mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-hotpink rounded-lg"
            title="Toggle menu"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X size={24} className={isDark ? 'text-white' : 'text-gray-800'} />
            ) : (
              <Menu size={24} className={isDark ? 'text-white' : 'text-gray-800'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <div
              className="md:hidden fixed inset-0 z-50 bg-black/10 backdrop-blur-[6px]"
              onClick={() => setMobileOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                onClick={(event) => event.stopPropagation()}
                className={`absolute left-4 right-4 top-[72px] overflow-hidden rounded-[28px] border shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-3xl ${
                  isDark
                    ? 'border-white/10 bg-white/8 text-white'
                    : 'border-white/60 bg-white/55 text-gray-900'
                }`}
              >
                <div className={`absolute inset-0 pointer-events-none ${
                  isDark
                    ? 'bg-gradient-to-br from-white/10 via-transparent to-hotpink/10'
                    : 'bg-gradient-to-br from-white/70 via-white/35 to-pink-100/60'
                }`} />
                <div className="relative p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className={`text-[10px] font-mono uppercase tracking-[0.35em] ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                        Navigation
                      </p>
                      <p className={`mt-1 text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Explore the portfolio
                      </p>
                    </div>
                    <div className={`h-10 w-10 rounded-full border flex items-center justify-center ${
                      isDark ? 'border-white/10 bg-white/5' : 'border-white/70 bg-white/70'
                    }`}>
                      <Logo size={24} isDark={isDark} showTagline={false} />
                    </div>
                  </div>

                  <div className="space-y-2">
                {MENU_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className={`block w-full text-left rounded-2xl border px-4 py-3 text-sm font-semibold transition-all backdrop-blur-md ${
                      activeSection === item.id
                        ? 'border-hotpink/40 bg-hotpink/95 text-white shadow-lg shadow-hotpink/25'
                        : isDark
                        ? 'border-white/10 bg-white/5 text-gray-100 hover:border-white/20 hover:bg-white/10 hover:text-white'
                        : 'border-white/70 bg-white/55 text-gray-700 hover:border-white/90 hover:bg-white/80 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                  </div>

                <button
                  id="btn-navbar-mobile-theme"
                  onClick={toggleTheme}
                  className={`mt-4 flex w-full items-center justify-between gap-4 rounded-2xl border px-4 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-hotpink ${
                    isDark
                      ? 'border-white/10 bg-white/5 text-gray-100 hover:border-white/20 hover:bg-white/10'
                      : 'border-white/70 bg-white/65 text-gray-800 hover:border-white/90 hover:bg-white/85'
                  }`}
                  title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                  aria-pressed={isDark}
                >
                  <span className="min-w-0 flex-1 text-left">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
