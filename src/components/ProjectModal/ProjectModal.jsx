/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Calendar, Briefcase, User, Wrench, CheckCircle, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

/**
 * @param {Object} props
 * @param {Object} props.project - The project object
 * @param {Function} props.onClose - Callback when modal is closed
 * @param {boolean} props.isDark - Dark mode flag
 */
export default function ProjectModal({ project, onClose, isDark }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

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

              {/* Interface Gallery Showcase */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-pink-100/10 dark:border-white/5">
                  <h4 className="text-lg font-display font-medium text-hotpink flex items-center gap-2">
                    <span>🖼️</span> System Interface Showcase
                  </h4>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Click any interface screen below to open the interactive high-fidelity fullscreen lightbox popup.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.map((imgUrl, idx) => (
                      <div
                        key={idx}
                        id={`gallery-item-${idx}`}
                        onClick={() => setLightboxIndex(idx)}
                        className={`group relative aspect-video rounded-2xl overflow-hidden border cursor-pointer hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 shadow-sm ${
                          isDark
                            ? 'bg-black/25 border-white/10 hover:border-hotpink/40 hover:bg-black/40'
                            : 'bg-gray-50 border-pink-100/50 hover:border-hotpink/40 hover:bg-white'
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={project.galleryTitles?.[idx] || project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                        <div className="absolute bottom-3 left-3 right-3 text-left">
                          <span className="inline-block text-[9px] uppercase font-mono font-bold tracking-widest text-white bg-hotpink/85 px-2 py-0.5 rounded-md">
                            View {idx + 1}
                          </span>
                          <p className="text-xs font-semibold text-white mt-1.5 line-clamp-1">
                            {project.galleryTitles?.[idx] || `Screenshot ${idx + 1}`}
                          </p>
                        </div>
                        {/* Eye Hover Icon overlay */}
                        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/45 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye size={12} className="text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-center text-xs tracking-wide font-sans font-medium text-white bg-hotpink hover:bg-hotpink/90 active:scale-95 transition-all cursor-pointer"
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

      {/* --- Immersive Fullscreen Lightbox Overlay --- */}
      <AnimatePresence>
        {lightboxIndex !== null && project.gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Lightbox Header */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20" onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col text-left max-w-[75%]">
                <span className="text-[10px] font-mono tracking-widest text-hotpink uppercase font-semibold">
                  {project.title} &bull; Screen {lightboxIndex + 1} of {project.gallery.length}
                </span>
                <h4 className="text-sm sm:text-base font-display font-medium tracking-tight text-white line-clamp-1">
                  {project.galleryTitles?.[lightboxIndex] || `Screenshot ${lightboxIndex + 1}`}
                </h4>
              </div>

              {/* Close Button */}
              <button
                id="btn-lightbox-close"
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 bg-white/10 hover:bg-white/20 active:scale-95 text-white/90 hover:text-white rounded-full transition-all backdrop-blur-md cursor-pointer shadow-md"
                title="Exit Lightbox"
              >
                <X size={18} />
              </button>
            </div>

            {/* Main Image Frame */}
            <div className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh] flex items-center justify-center p-2" onClick={(e) => e.stopPropagation()}>
              {/* Previous Button */}
              <button
                id="btn-lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : project.gallery.length - 1));
                }}
                className="absolute left-2 sm:left-4 z-20 p-3 bg-black/60 hover:bg-black/80 hover:scale-105 active:scale-95 text-white border border-white/5 rounded-full transition-all cursor-pointer"
                title="Previous Image"
              >
                <ChevronLeft size={20} />
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                src={project.gallery[lightboxIndex]}
                alt={project.galleryTitles?.[lightboxIndex]}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10 select-none"
              />

              {/* Next Button */}
              <button
                id="btn-lightbox-next"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev !== null && prev < project.gallery.length - 1 ? prev + 1 : 0));
                }}
                className="absolute right-2 sm:right-4 z-20 p-3 bg-black/60 hover:bg-black/80 hover:scale-105 active:scale-95 text-white border border-white/5 rounded-full transition-all cursor-pointer"
                title="Next Image"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Bottom dot indicators */}
            <div className="absolute bottom-6 flex justify-center gap-2 z-20" onClick={(e) => e.stopPropagation()}>
              {project.gallery.map((_, idx) => (
                <button
                  key={idx}
                  id={`btn-lightbox-dot-${idx}`}
                  onClick={() => setLightboxIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    lightboxIndex === idx ? 'w-8 bg-hotpink shadow shadow-hotpink/80' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                  title={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}
