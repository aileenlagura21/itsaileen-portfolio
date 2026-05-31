/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Code, Heart, Monitor, Smartphone, Palette, ArrowRight, X, Layers, ToggleLeft } from 'lucide-react';
import { SERVICES } from '../../data/index.js';
import './Services.css';

// Helper to resolve Lucide dynamic icons structurally
function getServiceIcon(iconName, className) {
  switch (iconName) {
    case 'Sparkles':
      return <Sparkles className={className} size={22} />;
    case 'Code':
      return <Code className={className} size={22} />;
    case 'Heart':
      return <Heart className={className} size={22} />;
    case 'Monitor':
      return <Monitor className={className} size={22} />;
    case 'Smartphone':
      return <Smartphone className={className} size={22} />;
    case 'Palette':
      return <Palette className={className} size={22} />;
    default:
      return <Sparkles className={className} size={22} />;
  }
}

export default function Services({ isDark }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 md:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background soft layout highlights */}
      <div className="absolute top-[30%] left-[8%] w-80 h-80 rounded-full filter blur-[140px] bg-softrose opacity-20 dark:opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section title */}
        <div className="text-center space-y-2 mb-16">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-hotpink">
            02 / CORE CAPABILITIES
          </p>
          <h2 className={`text-3xl sm:text-4.5xl font-display font-medium tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            What I Can <span className="text-hotpink font-semibold">Do For You</span>
          </h2>
          <p className={`text-xs sm:text-sm font-light mt-2 max-w-lg mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Bespoke design-to-development services perfectly tailored for lifestyle and tech brands seeking premium representation.
          </p>
          <div className="h-1 w-16 bg-hotpink rounded-full mx-auto mt-4" />
        </div>

        {/* Services Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-[32px] border text-left flex flex-col justify-between h-80 overflow-hidden group backdrop-blur-xl transition-all duration-500 ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:border-hotpink/50 hover:bg-white/10 hover:shadow-lg hover:shadow-hotpink/5'
                  : 'bg-white/45 border-white/65 hover:border-[#fbcfe8] hover:bg-white/55 hover:shadow-xl hover:shadow-rose-100/30'
              }`}
            >
              {/* Card visual backdrop overlay for hover states */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${srv.pastelBg}`} />

              <div className="relative z-10 space-y-4">
                
                {/* Accent Icon circle */}
                <div className={`w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md shadow-inner transition-colors ${
                  isDark ? 'bg-white/5 text-hotpink border border-white/10' : 'bg-white text-hotpink border border-white'
                }`}>
                  {getServiceIcon(srv.iconName, srv.accentColor)}
                </div>

                <h3 className={`text-lg sm:text-xl font-display font-semibold tracking-tight ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  {srv.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {srv.description}
                </p>

              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-4 flex">
                <button
                  id={`btn-service-learn-${srv.id}`}
                  onClick={() => setSelectedService(srv)}
                  className={`inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-hotpink cursor-pointer group-hover:gap-2 transition-all`}
                >
                  <span>Learn details</span>
                  <ArrowRight size={13} className="text-hotpink" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Expanded Service Detail Modal Overlay (Local layout Drawer) */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className={`relative w-full max-w-lg p-6 sm:p-8 rounded-[32px] border backdrop-blur-xl shadow-2xl z-10 ${
                isDark ? 'bg-plum-card/85 border-white/10 text-white' : 'bg-white/75 border-white/60 text-gray-800 shadow-rose-100/40'
              }`}
            >
              {/* Close Button */}
              <button
                id="btn-service-close"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full cursor-pointer hover:bg-hotpink/10 text-gray-400 hover:text-hotpink transition-colors"
                title="Close overlay"
              >
                <X size={16} />
              </button>

              <div className="space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-peach flex items-center justify-center text-hotpink">
                    {getServiceIcon(selectedService.iconName, selectedService.accentColor)}
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-hotpink leading-none">Capability Guide</p>
                    <h3 className="text-lg font-display font-bold mt-1 text-hotpink">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <div className="h-[1px] bg-pink-100/50 dark:bg-plum-border" />

                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400 mb-2">Detailed Philosophy & Deliverables</h4>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {selectedService.detailedInfo}
                  </p>
                </div>

                <div className={`p-4 rounded-2xl border flex flex-col gap-1.5 backdrop-blur-md ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/30 border-white/50'
                }`}>
                  <p className="text-[10px] font-mono uppercase text-hotpink font-bold">Standard Timeline</p>
                  <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    ⚡ 7-14 Business Days per typical project package
                  </p>
                  <p className="text-[10px] text-gray-400">
                    Includes continuous digital review logs, high-fidelity responsive Figma asset delivery, interactive prototypes, and production code integrations.
                  </p>
                </div>

                <button
                  id="btn-service-inquire"
                  onClick={() => {
                    setSelectedService(null);
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 rounded-xl bg-hotpink text-white text-xs font-semibold uppercase tracking-widest hover:bg-hotpink/95 active:scale-95 transition-all text-center cursor-pointer shadow-sm"
                >
                  Book consultation for this service
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
