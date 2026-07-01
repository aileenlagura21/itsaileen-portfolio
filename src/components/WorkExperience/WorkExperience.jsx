/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Briefcase, ChevronDown, ChevronUp, CheckCircle2, Award } from 'lucide-react';
import { TIMELINE } from '../../data';

export default function WorkExperience({ isDark }) {
  // Filter only career experience timeline items
  const careerItems = TIMELINE.filter((item) => item.type === 'experience');

  // State to track currently active/open accordion category for details
  const [activeAccordion, setActiveAccordion] = useState(0);

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

                  {/* If item has nested details (representing OJT Daily Report) */}
                  {item.details && (
                    <div className="mt-4 space-y-4">
                      <p className="text-[10px] sm:text-xs font-mono font-bold uppercase text-hotpink tracking-wider">
                        OJT Departments & Key Responsibilities
                      </p>
                      <div className="space-y-2">
                        {item.details.map((section, secIdx) => {
                          const isOpen = activeAccordion === secIdx;
                          return (
                            <div
                              key={section.title}
                              className={`border rounded-2xl overflow-hidden transition-all ${
                                isOpen
                                  ? isDark ? 'bg-white/5 border-pink-500/20' : 'bg-pink-50/50 border-pink-100'
                                  : isDark ? 'bg-transparent border-white/5 hover:bg-white/5' : 'bg-transparent border-gray-150 hover:bg-gray-55/30'
                              }`}
                            >
                              <button
                                onClick={() => setActiveAccordion(isOpen ? null : secIdx)}
                                className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left transition-colors cursor-pointer"
                              >
                                <span className={`text-xs sm:text-sm font-display font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                  {secIdx + 1}. {section.title}
                                </span>
                                {isOpen ? (
                                  <ChevronUp size={15} className="text-hotpink shrink-0" />
                                ) : (
                                  <ChevronDown size={15} className="text-gray-400 shrink-0 group-hover:text-hotpink" />
                                )}
                              </button>

                              <AnimatePresence initial={false}>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                  >
                                    <div className="px-4 pb-4 pt-1.5 space-y-2 border-t border-dashed border-pink-200/10 dark:border-white/5">
                                      {section.bullets.map((bullet, bIdx) => (
                                        <div key={bIdx} className="flex items-start gap-2 text-xs leading-relaxed">
                                          <CheckCircle2 size={13} className="text-hotpink shrink-0 mt-0.5" />
                                          <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                                            {bullet}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>

                      {/* Skills Acquired & Conclusion card inside OJT timeline item */}
                      <div className={`p-4 sm:p-5 rounded-[24px] border backdrop-blur-md mt-6 space-y-4 ${
                        isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-rose-50/35 border-rose-100/50 text-gray-800'
                      }`}>
                        <div className="space-y-1.5">
                          <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-hotpink flex items-center gap-1.5">
                            <Award size={14} className="shrink-0" /> Skills Acquired
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {[
                              'Computer Hardware Troubleshooting',
                              'IT Asset Management',
                              'Windows Administration',
                              'Software Deployment',
                              'Network Cabling & Maintenance',
                              'Technical Support & Help Desk',
                              'Documentation & Inventory',
                              'Professional Communication'
                            ].map((skillAcq) => (
                              <span
                                key={skillAcq}
                                className={`px-2 py-0.5 text-[9px] font-mono rounded-md ${
                                  isDark ? 'bg-white/5 text-gray-300 border border-white/10' : 'bg-white text-gray-600 border border-rose-100'
                                }`}
                              >
                                {skillAcq}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="h-[1px] w-full bg-dashed border-t border-pink-200/20 dark:border-white/5" />
                        <div className="space-y-1">
                          <h5 className="text-[10px] font-mono font-bold uppercase tracking-wide text-hotpink">
                            OJT Conclusion
                          </h5>
                          <p className={`text-xs italic leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            "The OJT at the Sagility IT Department provided valuable real-world experience in IT support services, hardware maintenance, software deployment, asset management, and basic networking. The training enhanced our technical knowledge, problem-solving abilities, and understanding of how an enterprise IT department supports business operations and end users."
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

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