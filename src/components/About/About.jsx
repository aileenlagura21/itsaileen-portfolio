/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Briefcase, MapPin, Calendar, Heart, ShieldCheck, Compass } from 'lucide-react';
import { TIMELINE } from '../../data/index.js';
import Logo from '../Logo/Logo.jsx';
import './About.css';

export default function About({ isDark }) {
  // Only display education timeline inside about section
  const educationTimeline = TIMELINE.filter((item) => item.type === 'education');

  return (
    <section
      id="about"
      className={`py-20 md:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-plum-dark/40' : 'bg-peach/10'
      }`}
    >
      {/* Decorative vector shape */}
      <div className="absolute top-[20%] right-[5%] w-60 h-60 rounded-full filter blur-[120px] bg-pastelpink opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center md:text-left space-y-2 mb-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-hotpink">
            01 / WHO I AM
          </p>
          <h2 className={`text-3xl sm:text-4.5xl font-display font-medium tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Ambitious <span className="text-hotpink font-semibold">Development</span>, Structured Logic
          </h2>
          <div className="h-1 w-16 bg-hotpink rounded-full mx-auto md:mx-0 mt-3" />
        </div>

        {/* Narrative layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Biography Narrative (Col span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className={`text-xl sm:text-2xl font-display font-medium leading-snug ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
              Computer Science & Systems Student seeking an OJT placement.
            </h3>
            <p className={`text-sm leading-relaxed text-left ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Hello! I am <strong>Aileen Lagura</strong>. I am a highly motivated Computer Science student at Bohol Island State University (BISU) - Bilar, seeking an On-the-Job Training (OJT) placement to apply my training in programming, data systems, and technical troubleshooting within a professional environment.
            </p>
            <p className={`text-sm leading-relaxed text-left ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              I am extremely eager to collaborate with and learn from experienced developers, contribute actively to real-world projects, and support group workflows while fulfilling my academic milestones.
            </p>

            {/* Structured Quick Profile Facts */}
            <div className={`p-5 rounded-3xl border text-left backdrop-blur-md transition-all ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-white/45 border-white/60 shadow-sm shadow-rose-100/5'
            }`}>
              <h4 className="text-[10px] font-mono font-bold tracking-widest text-hotpink uppercase mb-3.5 border-b pb-1.5 border-pink-100/20">
                Personal Background
              </h4>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs font-sans">
                <div>
                  <p className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Nickname</p>
                  <p className="font-semibold text-hotpink">"ai"</p>
                </div>
                <div>
                  <p className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Age</p>
                  <p className={`font-semibold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>20 Years Old</p>
                </div>
                <div>
                  <p className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Residence</p>
                  <p className={`font-semibold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Bilar, Bohol</p>
                </div>
                <div>
                  <p className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Birth Date</p>
                  <p className={`font-semibold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Oct 30, 2005</p>
                </div>
                <div>
                  <p className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Civil Status</p>
                  <p className={`font-semibold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Single</p>
                </div>
                <div>
                  <p className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Religion</p>
                  <p className={`font-semibold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Roman Catholic</p>
                </div>
              </div>
            </div>

            {/* Elegant Signature Logo Display */}
            <div className={`p-6 rounded-3xl border text-center flex flex-col items-center justify-center backdrop-blur-md transition-all ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-white/45 border-white/60 shadow-sm shadow-rose-100/5'
            }`}>
              <div className="w-56 h-56 mx-auto flex items-center justify-center hover:scale-[1.03] transition-transform duration-500">
                <Logo size="100%" isDark={isDark} showTagline={true} />
              </div>
              <p className={`text-[10px] font-mono tracking-widest uppercase mt-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Official Identity Mark
              </p>
            </div>
          </div>

          {/* Timeline Selection Section (Col span 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tab title header */}
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-pink-200/25 dark:border-white/5">
              <GraduationCap className="text-hotpink" size={18} />
              <h3 className={`text-lg font-display font-semibold uppercase tracking-wider ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Education & Academic Fellowships
              </h3>
            </div>

            {/* Structured Vertical Timeline */}
            <div className="relative border-l-2 border-pink-100 dark:border-plum-border/60 ml-3 pl-6 sm:pl-8 py-3 space-y-8 min-h-[300px]">
              <AnimatePresence mode="popLayout">
                {educationTimeline.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Circle bulb node */}
                    <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4.5 h-4.5 rounded-full border-2 bg-white dark:bg-plum-card border-hotpink flex items-center justify-center shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-hotpink" />
                    </div>

                    <div className="space-y-2 text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="inline-block self-start px-2.5 py-0.5 text-[10px] font-mono rounded backdrop-blur-md bg-white/40 dark:bg-white/5 text-hotpink border border-white/50 dark:border-white/10">
                          {item.period}
                        </span>
                        <span className={`text-[11px] font-mono flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          <MapPin size={11} className="text-hotpink" />
                          {item.location}
                        </span>
                      </div>

                      <h4 className={`text-base font-display font-semibold tracking-tight ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        {item.title}
                      </h4>
                      
                      <p className="text-xs font-sans font-medium text-hotpink">
                        {item.organization}
                      </p>

                      <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                        {item.description}
                      </p>

                      {/* Pill tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2.5 py-0.5 text-[9px] font-mono rounded-full backdrop-blur-sm ${
                              isDark 
                                ? 'bg-white/5 border border-white/10 text-gray-300' 
                                : 'bg-white/40 border border-white/60 text-gray-500'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
