/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, FolderGit2, Eye, Columns3, Columns2 } from 'lucide-react';
import { PROJECTS } from '../../data';

/**
 * Looping Typewriter Flow
 * - Types each character one-by-one.
 * - Holds the full text for `pauseMs` (default 1800ms).
 * - Erases the text with the same per-character cadence.
 * - Holds empty for `resetMs` (default 400ms).
 * - Repeats forever. `restartKey` lets you force a re-start when the
 *   underlying text changes (e.g. new project after filter).
 */
function useLoopingTypewriter(text, speed = 60, pauseMs = 1800, resetMs = 400, restartKey = 0) {
  const [out, setOut] = useState('');
  useEffect(() => {
    let cancelled = false;
    let timer = null;

    const wait = (ms) => new Promise((resolve) => { timer = setTimeout(resolve, ms); });

    const run = async () => {
      // Type forward
      for (let i = 1; i <= text.length; i += 1) {
        if (cancelled) return;
        setOut(text.slice(0, i));
        // eslint-disable-next-line no-await-in-loop
        await wait(speed);
      }
      // Pause at full
      if (cancelled) return;
      await wait(pauseMs);
      // Erase backward
      for (let i = text.length - 1; i >= 0; i -= 1) {
        if (cancelled) return;
        setOut(text.slice(0, i));
        // eslint-disable-next-line no-await-in-loop
        await wait(Math.max(20, Math.floor(speed * 0.55)));
      }
      // Pause empty
      if (cancelled) return;
      await wait(resetMs);
      if (cancelled) return;
      // Loop
      run();
    };

    setOut('');
    run();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [text, speed, pauseMs, resetMs, restartKey]);
  return out;
}

function ProjectTitle({ title, isDark }) {
  const typed = useLoopingTypewriter(title, 60, 2000, 350, title);
  return (
    <h4 className={`text-lg font-display font-bold tracking-tight group-hover:text-hotpink transition-colors min-h-[1.75rem] ${
      isDark ? 'text-white' : 'text-gray-800'
    }`}>
      {typed}
      <span className="animate-pulse text-hotpink">|</span>
    </h4>
  );
}

const CATEGORIES = [
  { id: 'all', label: 'All Creative' },
  { id: 'web', label: 'Web' },
   { id: 'mobile', label: 'Mobile' },
  { id: 'ui/ux', label: 'UI/UX Mobile' }


];

export default function Portfolio({ isDark, onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredProjects = PROJECTS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = filteredProjects.length > visibleCount;

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredProjects.length));
  };

  const handleSeeLess = () => {
    setVisibleCount(3);
  };

  return (
    <section id="portfolio" className="py-20 md:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Decorative floral orbs */}
      <div className="absolute top-[10%] right-[5%] w-72 h-72 rounded-full filter blur-[150px] bg-pastelpink opacity-25 dark:opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section title */}
        <div className="text-center space-y-2 mb-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-hotpink">
            05 / PORTFOLIO EXHIBIT
          </p>
          <h2 className={`text-3xl sm:text-4.5xl font-display font-medium tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Explore My <span className="text-glow-pink text-hotpink font-semibold">Latest Work</span>
          </h2>
          <p className={`text-xs sm:text-sm font-light mt-2 max-w-lg mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Click on any project card to inspect structural blueprints, toolkits used, processes, and high-fidelity mockups.
          </p>
          <div className="h-1 w-16 bg-hotpink rounded-full mx-auto mt-4" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                id={`btn-portfolio-filter-${cat.id}`}
                onClick={() => {
                  setActiveFilter(cat.id);
                  setVisibleCount(3); // Reset to 3 on filter switch
                }}
                className={`px-5 py-2 text-xs font-mono font-bold tracking-wider rounded-full backdrop-blur-md transition-all cursor-pointer ${
                  isActive
                    ? 'bg-hotpink text-white shadow-md'
                    : isDark
                    ? 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
                    : 'bg-white/40 hover:bg-white/60 text-gray-500 border border-white/60 shadow-sm shadow-rose-100/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group relative rounded-[32px] overflow-hidden border flex flex-col justify-between h-[440px] shadow-sm hover:shadow-xl hover:-translate-y-1 backdrop-blur-xl transition-all duration-500 ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    : 'bg-white/45 border-white/65 text-gray-805 hover:bg-white/55'
                }`}
              >
                {/* Product thumbnail frame */}
                <div className="relative w-full h-[225px] overflow-hidden bg-pink-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform scale-102 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Category Pill floating overlay */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 font-mono text-[9px] uppercase tracking-wider font-bold bg-white/40 backdrop-blur-md text-hotpink rounded-full border border-white/55 shadow-sm">
                    {project.category}
                  </div>

                  {/* Dark Transparent Hover Screen Overlay */}
                  <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                    <button
                      id={`btn-overlay-inspect-${project.id}`}
                      onClick={() => onSelectProject(project)}
                      className="p-3 bg-hotpink text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg cursor-pointer"
                      title="Inspect Spec Sheet"
                    >
                      <Eye size={18} />
                    </button>
                    <span className="text-[10px] font-mono tracking-wider font-bold text-white uppercase bg-black/30 px-3 py-1 rounded-full">
                      Click to deep-dive
                    </span>
                  </div>
                </div>

                {/* Card Copy metadata details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] font-mono font-medium text-hotpink">
                          #{tag.toLowerCase().replace(' ', '')}
                        </span>
                      ))}
                    </div>

                    <ProjectTitle title={project.title} isDark={isDark} />

                    <p className={`text-xs sm:text-sm line-clamp-2 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Card quick link footers */}
                  <div className="pt-4 border-t border-pink-100/50 dark:border-plum-border/60 flex items-center justify-between">
                    <button
                      id={`btn-portfolio-spec-${project.id}`}
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-mono font-bold uppercase tracking-wider text-hotpink hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Spec sheet</span>
                      <ArrowUpRight size={13} />
                    </button>

                    <span className={`text-[10px] font-mono uppercase font-semibold ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                      {project.date}
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Expand/Collapse gallery view triggers */}
        <div className="flex justify-center mt-12">
          {hasMore ? (
            <button
              id="btn-portfolio-see-more"
              onClick={handleSeeMore}
              className="px-8.5 py-3 rounded-full bg-hotpink hover:bg-hotpink/95 text-white font-sans text-xs font-semibold uppercase tracking-wider active:scale-95 shadow-md shadow-pink-300/20 cursor-pointer transition-all flex items-center justify-center gap-2"
            >
              <span>See More Projects</span>
              <Eye size={13} />
            </button>
          ) : filteredProjects.length > 3 ? (
            <button
              id="btn-portfolio-see-less"
              onClick={handleSeeLess}
              className={`px-8.5 py-3 rounded-full font-sans text-xs font-semibold uppercase tracking-wider border active:scale-95 cursor-pointer transition-all ${
                isDark
                  ? 'bg-plum-card text-gray-300 border-plum-border'
                  : 'bg-white text-gray-600 border-pink-200/50 hover:bg-peach/30'
              }`}
            >
              Close layout gallery
            </button>
          ) : null}
        </div>

      </div>
    </section>
  );
}