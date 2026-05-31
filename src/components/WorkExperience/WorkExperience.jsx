/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, Briefcase } from 'lucide-react';
import { TIMELINE } from '../../data/index.js';
import './WorkExperience.css';

export default function WorkExperience({ isDark }) {
  // Filter only career experience timeline items
  const careerItems = TIMELINE.filter((item) => item.type === 'experience');

  return (
    <section
      id="experience"
      className={`py-20 md:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-plum-dark text-gray-100' : 'bg-transparent text-gray-800'
      }`}
    >
      {/* Absolute Frosted Glass blob overlay points */}
      <div className="absolute top-[10%] left-[5%] w-60 h-60 rounded-full filter blur-[120px] bg-rose-200 dark:bg-pink-950/10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center space-y-2 mb-16">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-hotpink">
            03 / PROFESSIONAL HISTORY
          </p>
          <h2 className={`text-3xl sm:text-4.5xl font-display font-medium tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-hotpink font-semibold">Work Experience</span>
          </h2>
          <div className="h-1 w-16 bg-hotpink rounded-full mx-auto mt-4" />
        </div>

        {/* Career Timeline Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-pink-100 dark:border-plum-border/60 ml-3 pl-6 sm:pl-8 py-3 space-y-12">
            {careerItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-left"
              >
                {/* Circle bulb node */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4.5 h-4.5 rounded-full border-2 bg-white dark:bg-plum-card border-hotpink flex items-center justify-center shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-hotpink" />
                </div>

                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="inline-block self-start px-2.5 py-0.5 text-[10px] font-mono rounded backdrop-blur-md bg-white/40 dark:bg-white/5 text-hotpink border border-white/50 dark:border-white/10">
                      {item.period}
                    </span>
                    <span className={`text-[11px] font-mono flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      <MapPin size={11} className="text-hotpink" />
                      {item.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-hotpink" />
                    <h4 className={`text-base sm:text-lg font-display font-semibold tracking-tight ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      {item.title}
                    </h4>
                  </div>
                  
                  <p className="text-xs sm:text-sm font-sans font-semibold text-hotpink leading-none">
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
          </div>
        </div>

      </div>
    </section>
  );
}
