/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Github, Linkedin, Figma, Dribbble, ArrowDown, ArrowUpRight, MessageSquareQuote } from 'lucide-react';
import { AVATAR_URL } from '../../data/index.js';
import './Hero.css';

const ROLES = [
  'UI/UX Product Designer 🪄',
  'Frontend Web Developer 💻',
  'Brand Art Director 🌸',
  'Creative digital Storyteller ✨'
];

export default function Hero({ isDark, onContactClick, onWorkClick }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // High performance Typing Effect loop
  useEffect(() => {
    let timer;
    const currentRole = ROLES[roleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 90);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-12 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Dynamic flowing background decor */}
      <div className="absolute inset-0 pointer-events-none opacity-45 dark:opacity-20">
        <div className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full filter blur-[100px] bg-pastelpink animate-floating-slower" />
        <div className="absolute bottom-[20%] right-[15%] w-[340px] h-[340px] rounded-full filter blur-[120px] bg-softrose animate-floating" />
        <div className="absolute top-[40%] right-[30%] w-48 h-48 rounded-full filter blur-[80px] bg-peach" />
      </div>

      {/* Scattered aesthetic floating structural vector stickers (pure CSS drawings) */}
      <div className="absolute top-[18%] left-[8%] hidden lg:block animate-floating opacity-70">
        <div className="relative w-10 h-10 border-2 border-hotpink/40 rounded-xl rotate-12 flex items-center justify-center">
          <span className="text-[10px] text-hotpink font-mono">grid</span>
        </div>
      </div>
      <div className="absolute bottom-[25%] left-[12%] hidden lg:block animate-floating-slower opacity-65">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Sparkles className="text-cherry/50 rotate-[15deg]" size={24} />
        </div>
      </div>
      <div className="absolute top-[28%] right-[10%] hidden lg:block animate-floating-slower opacity-70">
        <div className="px-3 py-1.5 rounded-full border border-pink-200/60 bg-white/70 dark:bg-plum-card text-[11px] font-mono font-medium text-hotpink shadow-sm">
          Figma autolayout
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Texts Column (Col span 7) */}
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex justify-center lg:justify-start"
          >
            <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/40 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-md shadow-sm shadow-rose-100/5">
              <Sparkles className="text-hotpink" size={14} />
              <span className="text-xs font-mono font-semibold tracking-wider text-hotpink uppercase">
                Welcome to my digital garden
              </span>
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className={`text-4xl sm:text-5.5xl md:text-6xl font-display font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Hi, I'm <span className="text-hotpink text-glow-pink">Aileen Lagura</span> 
            </motion.h1>
            
            {/* Typing Container with Fixed Height to avoid layout shift */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-10 sm:h-12 flex items-center justify-center lg:justify-start"
            >
              <p className="text-base sm:text-xl font-mono text-hotpink font-semibold">
                <span className={`px-2 py-1 rounded-lg backdrop-blur-md border border-white/30 dark:border-white/5 ${isDark ? 'bg-white/5' : 'bg-white/20'}`}>
                  {displayText}
                </span>
                <span className="animate-pulse ml-0.5 font-sans">|</span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              I design and build warm, lightweight personal brands, accessibility-focused design modules, 
              and highly responsive full-stack dashboards. Blending beautiful Korean minimalism with scalable TypeScript architectures.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              id="btn-hero-work"
              onClick={onWorkClick}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-hotpink text-white font-sans text-xs font-semibold uppercase tracking-wider hover:bg-hotpink/95 active:scale-95 shadow-md shadow-pink-300/20 cursor-pointer transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore My Work</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              id="btn-hero-contact"
              onClick={onContactClick}
              className={`w-full sm:w-auto px-7 py-3.5 rounded-full font-sans text-xs font-semibold uppercase tracking-wider border active:scale-95 cursor-pointer transition-all flex items-center justify-center gap-2 backdrop-blur-md ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:bg-white/15 text-gray-200'
                  : 'bg-white/35 text-gray-700 border-white/50 hover:bg-white/50 shadow-sm shadow-rose-100/5'
              }`}
            >
              <span>Say Hello</span>
              <MessageSquareQuote size={13} className="text-hotpink" />
            </button>
          </motion.div>

          {/* Social icons panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-xs font-mono text-gray-400"
          >
            <span className="uppercase tracking-widest text-[10px]">Follow me:</span>
            <div className="flex gap-2.5">
              {[
                { id: 'lnk-sc-github', icon: <Github size={15} />, url: 'https://github.com' },
                { id: 'lnk-sc-linkedin', icon: <Linkedin size={15} />, url: 'https://linkedin.com' },
                { id: 'lnk-sc-figma', icon: <Figma size={15} />, url: 'https://figma.com' },
                { id: 'lnk-sc-dribbble', icon: <Dribbble size={15} />, url: 'https://dribbble.com' },
              ].map((sc, i) => (
                <a
                  key={i}
                  id={sc.id}
                  href={sc.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2.5 rounded-full border transition-all backdrop-blur-md ${
                    isDark
                      ? 'border-white/10 hover:border-hotpink text-gray-300 hover:text-hotpink bg-white/5 shadow-inner'
                      : 'border-white/50 hover:border-hotpink text-gray-500 hover:text-hotpink bg-white/35 shadow-sm shadow-rose-100/10'
                  }`}
                  title={sc.id}
                >
                  {sc.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hero Graphics / Illustration (Col span 5) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 relative h-96 md:h-[500px] flex items-center justify-center order-first lg:order-last"
        >
          {/* Animated floating card glass frame */}
          <div className="absolute inset-0 p-6">
            <div className={`w-full h-full rounded-[40px] overflow-hidden shadow-2xl ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/60 shadow-rose-100/40'
            }`}>
              <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-pastelpink to-softrose">
                {/* Placeholder illustration area */}
                <img
                  src={AVATAR_URL}
                  alt="Aileen Lagura Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
