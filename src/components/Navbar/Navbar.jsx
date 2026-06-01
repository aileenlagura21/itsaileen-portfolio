/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Wand2, EyeOff, Eye } from 'lucide-react';
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

export default function Navbar({ isDark, toggleTheme, cursorEnabled, toggleCursor }) {
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
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Vibe */}
          <button
            id="nav-logo"
            onClick={() => handleScrollTo('home')}
            className="flex items-center gap-1.5 cursor-pointer group"
          >
            <div className="w-11 h-11 flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-6 transition-transform duration-300">
              <Logo size={46} isDark={isDark} showTagline={false} />
            </div>
            <div className="text-left font-display">
              <p className="text-sm font-bold tracking-tight text-hotpink leading-tight">Aileen Lagura</p>
              <p className={`text-[10px] font-mono tracking-widest uppercase leading-none ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Creative Labs
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
                    className={`relative px-1 py-1 font-sans text-xs font-semibold tracking-wider uppercase cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? isDark 
                          ? 'text-hotpink' 
                          : 'text-hotpink font-bold'
                        : isDark
                          ? 'text-gray-300 hover:text-hotpink'
                          : 'text-gray-600 hover:text-hotpink'
                    }`}
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

            {/* Custom Control Bar (Theme, Custom Cursor, Download Resume) */}
            <div className="flex items-center gap-2 border-l pl-5 border-pink-200/40 dark:border-plum-border">
              
              {/* Tracker Toggle */}
              <button
                id="btn-navbar-cursor"
                onClick={toggleCursor}
                className={`p-2 rounded-lg transition-all ${
                  isDark
                    ? 'hover:bg-white/10 text-gray-300 hover:text-hotpink'
                    : 'hover:bg-white/40 text-gray-600 hover:text-hotpink'
                }`}
                title="Toggle custom cursor"
              >
                {cursorEnabled ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>

              {/* Theme Toggle */}
              <button
                id="btn-navbar-theme"
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all ${
                  isDark
                    ? 'hover:bg-white/10 text-gray-300 hover:text-hotpink'
                    : 'hover:bg-white/40 text-gray-600 hover:text-hotpink'
                }`}
                title="Toggle dark mode"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>


            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="btn-navbar-mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            title="Toggle menu"
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
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`md:hidden mt-4 pb-4 border-t ${
                isDark ? 'border-white/10' : 'border-white/50'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 space-y-2">
                {MENU_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className={`block w-full text-left px-4 py-2 rounded text-sm font-semibold ${
                      activeSection === item.id
                        ? 'bg-hotpink text-white'
                        : isDark
                        ? 'text-gray-300 hover:bg-white/10'
                        : 'text-gray-600 hover:bg-white/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
