/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, FileCode, Layers, Waves, Zap, Grid, HeartHandshake, Type, Compass, Package, PenTool, Feather, Image, Sparkles, GitBranch, Terminal } from 'lucide-react';
import { SKILLS } from '../../data/index.js';
import './Skills.css';

// Help map icons visually to match skills list
function getSkillIcon(iconName, className) {
  switch (iconName) {
    case 'Cpu':
      return <Cpu className={className} size={15} />;
    case 'FileCode':
      return <FileCode className={className} size={15} />;
    case 'Layers':
      return <Layers className={className} size={15} />;
    case 'Waves':
      return <Waves className={className} size={15} />;
    case 'Zap':
      return <Zap className={className} size={15} />;
    case 'Grid':
      return <Grid className={className} size={15} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} size={15} />;
    case 'Type':
      return <Type className={className} size={15} />;
    case 'Compass':
      return <Compass className={className} size={15} />;
    case 'Package':
      return <Package className={className} size={15} />;
    case 'PenTool':
      return <PenTool className={className} size={15} />;
    case 'Feather':
      return <Feather className={className} size={15} />;
    case 'Image':
      return <Image className={className} size={15} />;
    case 'Sparkles':
      return <Sparkles className={className} size={15} />;
    case 'GitBranch':
      return <GitBranch className={className} size={15} />;
    default:
      return <Terminal className={className} size={15} />;
  }
}

export default function Skills({ isDark }) {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const filteredSkills = SKILLS.filter((item) => item.category === activeCategory);

  // Constants for circular indicators
  const radius = 32;
  const circumference = 2 * Math.PI * radius;

  return (
    <section
      id="skills"
      className={`py-20 md:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-plum-dark/40' : 'bg-peach/10'
      }`}
    >
      <div className="absolute bottom-[10%] left-[5%] w-60 h-60 rounded-full filter blur-[120px] bg-pastelpink opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center space-y-2 mb-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-hotpink">
            04 / TOOLKIT CAPABILITIES
          </p>
          <h2 className={`text-3xl sm:text-4.5xl font-display font-medium tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Bespoke <span className="text-hotpink font-semibold">Competence Matrix</span>
          </h2>
          <div className="h-1 w-16 bg-hotpink rounded-full mx-auto mt-4" />
        </div>

        {/* Categories togglers */}
        <div className="flex justify-center mb-12">
          <div className={`p-1.5 rounded-full flex gap-1 border backdrop-blur-md ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-white/35 border-white/50 shadow-sm shadow-rose-100/5'
          }`}>
            {['Frontend', 'Design', 'Software'].map((cat) => (
              <button
                key={cat}
                id={`btn-skill-cat-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 sm:px-7 py-2 rounded-full font-sans text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-hotpink text-white shadow-sm'
                    : isDark
                    ? 'text-gray-400 hover:text-gray-200'
                    : 'text-gray-500 hover:text-hotpink'
                }`}
              >
                {cat === 'Frontend' 
                  ? 'Dev Architecture' 
                  : cat === 'Design' 
                  ? 'Layout Philosophy' 
                  : 'Design Software'}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Layout */}
        <div className="max-w-4xl mx-auto min-h-[300px]">
          {activeCategory === 'Frontend' && (
            <div className="space-y-6 sm:space-y-8">
              {filteredSkills.map((skill, idx) => (
                <div key={skill.name} className="space-y-2 text-left">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className={`font-sans font-semibold flex items-center gap-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                      <span className="text-hotpink shrink-0">{getSkillIcon(skill.iconName, 'text-hotpink')}</span>
                      {skill.name}
                    </span>
                    <span className="font-mono font-bold text-hotpink">{skill.percentage}%</span>
                  </div>
                  
                  {/* Sliding Progress bar frame */}
                  <div className={`w-full h-3 rounded-full overflow-hidden ${
                    isDark ? 'bg-plum-border/60' : 'bg-pink-100/40 border border-pink-150/10'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r from-softrose via-hotpink to-[#ff8fab]`}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeCategory === 'Design' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
              {filteredSkills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`p-5 rounded-2xl border flex items-start gap-4 backdrop-blur-md transition-all hover:scale-101 ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-white hover:border-hotpink/30'
                      : 'bg-white/40 border-white/60 text-gray-800 hover:border-hotpink/20 shadow-sm shadow-rose-100/5'
                  }`}
                >
                  <div className="w-9 h-9 rounded-full bg-peach flex items-center justify-center text-hotpink shrink-0 mt-0.5">
                    {getSkillIcon(skill.iconName, 'text-hotpink')}
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-display font-semibold">{skill.name}</h4>
                      <span className="font-mono text-[10px] text-hotpink font-bold">{skill.percentage}%</span>
                    </div>
                    
                    {/* Method status meter */}
                    <div className="h-1 bg-pink-100/60 dark:bg-plum-border rounded-full overflow-hidden">
                      <div className="h-full bg-hotpink rounded-full" style={{ width: `${skill.percentage}%` }} />
                    </div>
                    <p className="text-[10px] text-gray-400">Validated through collaborative system setups and client feedback audits.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeCategory === 'Software' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {filteredSkills.map((skill, idx) => {
                const strokeOffset = circumference - (skill.percentage / 100) * circumference;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className={`p-5 rounded-2xl border flex flex-col items-center text-center justify-between gap-4 h-48 backdrop-blur-md transition-all hover:-translate-y-1 ${
                      isDark 
                        ? 'bg-white/5 border-white/10' 
                        : 'bg-white/40 border-white/60 shadow-sm shadow-rose-100/5'
                    }`}
                  >
                    {/* SVG circular indicator */}
                    <div className="relative w-20 h-20 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-92">
                        {/* Background structural trail tracking */}
                        <circle
                          cx="40"
                          cy="40"
                          r={radius}
                          className="stroke-pink-100 dark:stroke-plum-border"
                          strokeWidth="5"
                          fill="transparent"
                        />
                        {/* Interactive glow ring */}
                        <motion.circle
                          cx="40"
                          cy="40"
                          r={radius}
                          className="stroke-hotpink"
                          strokeWidth="5.5"
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: circumference }}
                          whileInView={{ strokeDashoffset: strokeOffset }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
                          strokeLinecap="round"
                          fill="transparent"
                        />
                      </svg>
                      {/* Metric Percentage in-circle copy */}
                      <span className="absolute text-xs font-mono font-extrabold text-hotpink">
                        {skill.percentage}%
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-center gap-1.5 text-[10px] font-semibold text-gray-400">
                        {getSkillIcon(skill.iconName, 'text-hotpink shrink-0')}
                        <span className="uppercase font-mono tracking-widest text-[8px]">Daily Core</span>
                      </div>
                      <h4 className={`text-xs font-sans font-bold tracking-tight ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                        {skill.name.split(' ')[0]}
                      </h4>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
