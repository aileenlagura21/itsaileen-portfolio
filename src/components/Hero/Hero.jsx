/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Github, Linkedin, Figma, Dribbble, ArrowDown, ArrowUpRight, MessageSquareQuote, FileDown } from 'lucide-react';
import { AVATAR_URL } from '../../data';

const ROLES = [
  'Computer Scientist 🖥️',
  'IT Support Specialist 🛠️',
  'System Administrator ⚙️',
  'Frontend Developer 💻'
];

const HERO_NAME = 'Aileen Lagura';

function useLoopingTypewriter(text, speed = 120, pauseMs = 1600, resetMs = 450) {
  const [output, setOutput] = useState('');

  useEffect(() => {
    let cancelled = false;
    let timer = null;

    const wait = (ms) => new Promise((resolve) => {
      timer = setTimeout(resolve, ms);
    });

    const run = async () => {
      while (!cancelled) {
        for (let i = 1; i <= text.length; i += 1) {
          if (cancelled) return;
          setOutput(text.slice(0, i));
          // eslint-disable-next-line no-await-in-loop
          await wait(speed);
        }

        if (cancelled) return;
        await wait(pauseMs);

        for (let i = text.length - 1; i >= 0; i -= 1) {
          if (cancelled) return;
          setOutput(text.slice(0, i));
          // eslint-disable-next-line no-await-in-loop
          await wait(Math.max(40, Math.floor(speed * 0.6)));
        }

        if (cancelled) return;
        await wait(resetMs);
      }
    };

    setOutput('');
    run();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [text, speed, pauseMs, resetMs]);

  return output;
}

export default function Hero({ isDark, onContactClick, onWorkClick }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typedName = useLoopingTypewriter(HERO_NAME, 120, 1800, 500);

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


      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 w-full">

        <div className="flex flex-col items-center text-center space-y-7 w-full">

          {/* Elegant Avatar with integrated Available for Hire badge - placed first on top! */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', damping: 20 }}
            className="relative self-center mb-1"
          >
            {/* Circular frames & borders behind image */}
            <div className="absolute inset-0 rounded-full border border-dashed border-hotpink/30 animate-spin" style={{ animationDuration: '40s' }} />

            {/* Avatar frame container */}
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2.5 bg-gradient-to-tr from-pastelpink via-hotpink/20 to-peach/30 shadow-inner relative z-10">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-zinc-950 border border-pink-200/40 relative shadow-md group">
                <img
                  src={AVATAR_URL}
                  alt="Aileen Lagura Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-106 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Available for Hire Badge sitting on the shoulder of the avatar */}
           {/* Available for Hire Button */}
<button
  onClick={onContactClick}
  type="button"
  className="
    absolute
    left-1/2
    top-full
    -translate-x-1/2
    mt-3

    flex
    items-center
    gap-2

    px-4
    py-2

    rounded-full

    bg-white/80
    dark:bg-zinc-900/90

    text-green-600
    dark:text-green-400

    text-[10px]
    sm:text-[11px]

    font-mono
    font-bold
    uppercase
    tracking-[0.22em]

    border
    border-green-400/30

    backdrop-blur-xl

    shadow-lg
    shadow-green-300/20

    hover:scale-105
    hover:shadow-green-400/30

    active:scale-95

    transition-all
    duration-300

    whitespace-nowrap
    cursor-pointer

    z-30
  "
>
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
  </span>

  <span>Available for Hire</span>
</button>
          </motion.div>

          {/* Welcome to my digital garden - placed below the picture */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3 items-center"
          >
            <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/40 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-md shadow-sm shadow-rose-100/5">
              <Sparkles className="text-hotpink" size={14} />
              <span className="text-xs font-mono font-semibold tracking-wider text-hotpink uppercase">

              </span>
            </div>
          </motion.div>

          <div className="space-y-4 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5.5xl md:text-6xl font-display font-bold tracking-tight"
            >
              <span className="text-black text-glow-white">
                Hi, I’m
              </span>
              <span className="text-hotpink text-glow-pink">
                {typedName}
                <span className="ml-1 animate-pulse">|</span>
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className={`text-lg sm:text-xl lg:text-2xl font-display font-semibold leading-snug ${
                isDark ? 'text-pink-100' : 'text-gray-800'
              }`}
            >
            </motion.h2>

            {/* Typing Container with Fixed Height to avoid layout shift */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-10 sm:h-12 flex items-center justify-center"
            >
              <p className="text-base sm:text-lg font-mono text-hotpink font-semibold">
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
              className={`text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Applying my Computer Science studies and hands on training to develop impactful solutions and support modern technology environments.
              </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <motion.button
              id="btn-hero-work"
              onClick={onWorkClick}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-hotpink text-white font-sans text-xs font-semibold uppercase tracking-wider hover:bg-hotpink/95 active:scale-95 shadow-md shadow-pink-300/20 cursor-pointer transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore My Work</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
            <motion.button
              id="btn-hero-contact"
              onClick={onContactClick}
              animate={{ y: [0, -4, 0, 4, 0], rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className={`w-full sm:w-auto px-7 py-3.5 rounded-full font-sans text-xs font-semibold uppercase tracking-wider border active:scale-95 cursor-pointer transition-all flex items-center justify-center gap-2 backdrop-blur-md ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:bg-white/15 text-gray-200'
                  : 'bg-white/35 text-gray-700 border-white/50 shadow-sm shadow-rose-100/5'
              }`}
            >
              <span>Say Hello</span>
              <MessageSquareQuote size={13} className="text-hotpink" />
            </motion.button>
            <motion.a
              id="btn-hero-resume"
              href="/resume/Aileen-Resume.docx"
              download="Aileen-Resume.docx"
              animate={{ y: [0, -4, 0, 4, 0], rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              className={`w-full sm:w-auto px-7 py-3.5 rounded-full font-sans text-xs font-semibold uppercase tracking-wider border active:scale-95 cursor-pointer transition-all flex items-center justify-center gap-2 backdrop-blur-md hover:bg-hotpink hover:text-white hover:border-hotpink group ${
                isDark
                  ? 'bg-white/5 border-white/10 text-gray-200'
                  : 'bg-white/35 text-gray-700 border-white/50 shadow-sm shadow-rose-100/5'
              }`}
            >
              <span>Resume</span>
              <FileDown size={13} className="text-hotpink group-hover:text-white transition-colors" />
            </motion.a>
          </motion.div>

          {/* Social icons panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex items-center justify-center gap-4 pt-4 text-xs font-mono text-gray-400"
          >
            <span className="uppercase tracking-widest text-[10px]">Follow me:</span>
            <div className="flex gap-2.5">
              {[
                { id: 'lnk-sc-github', icon: <Github size={15} />, url: 'https://github.com/aileenlagura21' },
                { id: 'lnk-sc-linkedin', icon: <Linkedin size={15} />, url: 'https://linkedin.com' },
              ].map((sc, i) => (
                <motion.a
                  key={i}
                  id={sc.id}
                  href={sc.url}
                  target="_blank"
                  rel="noreferrer"
                  animate={{
                    y: [0, -3, 0, 3, 0],
                    rotate: [0, 8, 0, -8, 0],
                  }}
                  transition={{
                    duration: 3.2 + i * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.25,
                  }}
                  className={`p-2.5 rounded-full border transition-all backdrop-blur-md ${
                    isDark
                      ? 'border-white/10 hover:border-hotpink text-gray-300 hover:text-hotpink bg-white/5 shadow-inner'
                      : 'border-white/50 hover:border-hotpink text-gray-500 hover:text-hotpink bg-white/35 shadow-sm shadow-rose-100/10'
                  }`}
                >
                  {sc.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

      {/* Down indicators */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center">
        <button
          id="btn-hero-scroll-down"
          onClick={onWorkClick}
          className={`flex flex-col items-center gap-1 text-[10px] tracking-widest font-mono uppercase cursor-pointer transition-colors ${
            isDark ? 'text-gray-400 hover:text-hotpink' : 'text-gray-500 hover:text-hotpink'
          }`}
        >
         
        </button>
      </div>

    </section>
  );
}