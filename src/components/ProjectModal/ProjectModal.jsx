/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Calendar, Briefcase, User, Wrench, CheckCircle } from 'lucide-react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose, isDark }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
        {/* Backdrop glass */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/45 backdrop-blur-md"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className={`relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[32px] border backdrop-blur-xl shadow-2xl flex flex-col z-10 ${
            isDark 
              ? 'bg-plum-card/85 border-white/10 text-gray-100' 
              : 'bg-white/75 border-white/60 text-gray-800 shadow-rose-100/40'
          }`}
        >
          {/* Cover Image Header */}
          <div className="relative w-full h-56 sm:h-72 md:h-80 overflow-hidden bg-pink-50">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
            {/* Top Close Button (floating) */}
            <button
              id="btn-modal-close-top"
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors shadow-lg cursor-pointer"
              title="Close modal"
            >
              <X size={18} />
            </button>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-block px-3 py-1 mb-2.5 text-xs font-mono tracking-wider font-semibold uppercase bg-hotpink text-white rounded-full">
                {project.category === 'web' 
                  ? 'Web Experience' 
                  : project.category === 'uiux' 
                  ? 'UI/UX Interactive' 
                  : project.category === 'branding' 
                  ? 'Brand Design' 
                  : 'Frontend Dev'}
              </span>
              <h3 className="text-2xl sm:text-3.5xl font-display font-medium tracking-tight">
                {project.title}
              </h3>
              <p className="text-white/80 text-sm mt-1 sm:text-base font-light font-sans max-w-xl">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Body Grid */}
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Details (Col-span 2) */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h4 className="text-lg font-display font-medium mb-3 text-hotpink flex items-center gap-2">
                  <span>✨</span> Project Narrative
                </h4>
                <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.longDescription}
                </p>
              </div>

              {/* Functional Key Features */}
              <div>
                <h4 className="text-lg font-display font-medium mb-3 text-hotpink flex items-center gap-2">
                  <span>💡</span> Key Highlights & Architecture
                </h4>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <span className="text-hotpink shrink-0 mt-0.5">
                        <CheckCircle size={15} />
                      </span>
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Side metadata card */}
            <div className={`p-5 rounded-[24px] border backdrop-blur-md flex flex-col justify-between ${
              isDark 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/30 border-white/50 shadow-sm shadow-rose-100/5'
            }`}>
              <div className="space-y-4">
                <h4 className="text-base font-display font-medium mb-1 border-b pb-2 text-hotpink flex items-center gap-2 border-pink-100/50">
                  <span>📋</span> Specs & Info
                </h4>

                {/* Role */}
                <div className="flex items-start gap-3">
                  <Briefcase size={16} className="text-hotpink shrink-0 mt-1" />
                  <div>
                    <span className="block font-mono text-[10px] uppercase text-gray-400 font-semibold leading-none">Your Role</span>
                    <span className={`text-xs font-sans ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{project.role}</span>
                  </div>
                </div>

                {/* Client / Context */}
                <div className="flex items-start gap-3">
                  <User size={16} className="text-hotpink shrink-0 mt-1" />
                  <div>
                    <span className="block font-mono text-[10px] uppercase text-gray-400 font-semibold leading-none">Client / Org</span>
                    <span className={`text-xs font-sans ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{project.client || 'Personal Lab Project'}</span>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-start gap-3">
                  <Calendar size={16} className="text-hotpink shrink-0 mt-1" />
                  <div>
                    <span className="block font-mono text-[10px] uppercase text-gray-400 font-semibold leading-none">Release Date</span>
                    <span className={`text-xs font-sans ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{project.date}</span>
                  </div>
                </div>

                {/* Toolkit */}
                <div className="flex items-start gap-3">
                  <Wrench size={16} className="text-hotpink shrink-0 mt-1" />
                  <div>
                    <span className="block font-mono text-[10px] uppercase text-gray-400 font-semibold leading-none">Design / Code Dev Tools</span>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 text-[10px] font-mono rounded backdrop-blur-sm bg-white/45 dark:bg-white/5 text-hotpink border border-white/50 dark:border-white/10"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Action Buttons */}
              <div className="space-y-2 mt-6 lg:mt-8">
                {project.liveUrl && (
                  <a
                    id={`link-preview-${project.id}`}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-center text-xs tracking-wide font-sans font-medium text-white bg-hotpink hover:bg-hotpink/90 active:scale-95 shadow-md shadow-rose-300/20 transition-all cursor-pointer"
                  >
                    <span>Inspect Live Showcase</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    id={`link-github-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-center text-xs tracking-wide font-sans font-medium border active:scale-95 transition-all cursor-pointer ${
                      isDark 
                        ? 'bg-plum-card hover:bg-plum-border/40 border-plum-border text-gray-300' 
                        : 'bg-white hover:bg-peach/30 border-pink-200/50 text-gray-700'
                    }`}
                  >
                    <span>View Repository</span>
                    <Github size={13} />
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Footer close option */}
          <div className={`p-4 border-t flex justify-end gap-3 ${
            isDark ? 'bg-plum-dark border-plum-border/60' : 'bg-peach/10 border-pink-100/60'
          }`}>
            <button
              id="btn-modal-close-footer"
              onClick={onClose}
              className={`px-5 py-2 text-xs font-sans font-medium tracking-wide rounded-xl border transition-all cursor-pointer ${
                isDark 
                  ? 'bg-plum-card text-gray-300 border-plum-border hover:bg-plum-border/40' 
                  : 'bg-white text-gray-600 border-pink-200/50 hover:bg-peach/50'
              }`}
            >
              Back to Gallery
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
