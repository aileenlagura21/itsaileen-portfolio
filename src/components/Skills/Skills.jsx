/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import {
  FileCode,
  Layers,
  Code,
  Cpu,
  Waves,
  Server,
  Coffee,
  Database,
  Terminal,
  Laptop,
  GitBranch,
  PenTool,
  Code2
} from 'lucide-react';

export default function Skills({ isDark }) {
  // Define tech stack items with custom colors and icons
  const frontendStack = [
    { name: 'HTML5', icon: <FileCode className="text-orange-500" size={20} />, bgColor: 'bg-orange-500/10' },
    { name: 'CSS3', icon: <Layers className="text-blue-500" size={20} />, bgColor: 'bg-blue-500/10' },
    { name: 'JavaScript', icon: <Code className="text-amber-500" size={20} />, bgColor: 'bg-amber-500/10' },
    { name: 'TypeScript', icon: <Code2 className="text-sky-500" size={20} />, bgColor: 'bg-sky-500/10' },
    { name: 'React / React Native', icon: <Cpu className="text-cyan-500" size={20} />, bgColor: 'bg-cyan-500/10' },
     ];

  const backendStack = [
    { name: 'PHP', icon: <Server className="text-indigo-500" size={20} />, bgColor: 'bg-indigo-500/10' },
    { name: 'C++', icon: <Cpu className="text-hotpink" size={20} />, bgColor: 'bg-hotpink/10' },
    { name: 'Java', icon: <Coffee className="text-amber-700" size={20} />, bgColor: 'bg-amber-700/10' },
  ];

  const databaseStack = [
    { name: 'MySQL Database', icon: <Database className="text-blue-650 text-blue-500" size={20} />, bgColor: 'bg-blue-500/10' },
  ];

  const toolsStack = [
    { name: 'Visual Studio Code', icon: <Terminal className="text-sky-600" size={20} />, bgColor: 'bg-sky-600/10' },
    { name: 'IntelliJ IDEA', icon: <Laptop className="text-red-500" size={20} />, bgColor: 'bg-red-500/10' },
    { name: 'Git & GitHub', icon: <GitBranch className="text-orange-600" size={20} />, bgColor: 'bg-orange-600/10' },
    { name: 'Figma', icon: <PenTool className="text-purple-500" size={20} />, bgColor: 'bg-purple-500/10' },
  ];

  const categories = [
    {
      title: 'Frontend Development',
      description: 'Building beautiful, highly intuitive, and responsive interfaces with clean layout semantics and smooth motion physics.',
      items: frontendStack,
    },
    {
      title: 'Backend Systems & Logic',
      description: 'Formulating structured server behaviors, processing client queries securely, and working with compiled core systems.',
      items: backendStack,
    },
    {
      title: 'Database Management',
      description: 'Enforcing relational integrity, schema normalization constraints, physical storage indexing, and rapid transaction auditing.',
      items: databaseStack,
    },
    {
      title: 'Tools & Ecosystem',
      description: 'Leveraging professional integrated development environments, version control pipelines, and real-time design canvases.',
      items: toolsStack,
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 md:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-plum-dark/40' : 'bg-peach/10'
      }`}
    >
      {/* Background ambient orbs */}
      <div className="absolute bottom-[10%] left-[5%] w-60 h-60 rounded-full filter blur-[120px] bg-pastelpink opacity-30 pointer-events-none" />
      <div className="absolute top-[20%] right-[5%] w-72 h-72 rounded-full filter blur-[140px] bg-peach opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section title */}
        <div className="text-center space-y-3 mb-16">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-hotpink">
            04 / EXPERTISE DISCIPLINE
          </p>
          <h2 className={`text-3xl sm:text-4.5xl font-display font-semibold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            My Tech Stack
          </h2>
          <p className={`text-sm font-light mt-3 max-w-xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            A comprehensive, modular collection of web development techniques, logical server programming languages, robust data storages, and precision tools I utilize to craft complete software experiences.
          </p>
          <div className="h-1 w-12 bg-hotpink rounded-full mx-auto mt-4" />
        </div>

        {/* Tech Stack Bento Grid Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className={`p-6 sm:p-7 rounded-[32px] border backdrop-blur-xl flex flex-col justify-between transition-all hover:scale-[1.01] ${
                isDark
                  ? 'bg-white/5 border-white/10 text-white'
                  : 'bg-white/45 border-white/65 shadow-sm shadow-rose-100/5 text-gray-800'
              }`}
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div>
                  <h3 className={`text-lg font-display font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                  <p className={`text-xs mt-1.5 font-light leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {category.description}
                  </p>
                </div>

                {/* Picture and Name Grid ("i just want the picture then name okay") */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={item.name}
                      className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border text-center gap-2.5 transition-all duration-300 hover:scale-105 ${
                        isDark
                          ? 'bg-white/5 border-white/5 hover:border-hotpink/40 hover:bg-white/10'
                          : 'bg-white/40 border-white/50 shadow-sm shadow-rose-100/10 hover:border-hotpink/30 hover:bg-white'
                      }`}
                    >
                      {/* Logo / Icon representation ("the picture") */}
                      <motion.div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bgColor}`}
                        animate={{
                          y: [0, -4, 0, 4, 0],
                          rotate: [0, 6, 0, -6, 0],
                        }}
                        transition={{
                          duration: 4 + (itemIndex * 0.4),
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: itemIndex * 0.2,
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      {/* Tool name ("the name") */}
                      <span className={`text-[11px] font-mono font-bold tracking-tight uppercase leading-tight ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}