/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, ExternalLink, Calendar, ShieldCheck, CheckCircle, Sparkles } from 'lucide-react';
import './Certificates.css';

const CERTIFICATES = [
  {
    id: 'cert-1',
    title: 'Figma Certified Professional',
    issuer: 'Figma Academy',
    date: 'Jan 2025',
    credentialId: 'FIG-UXD883017',
    verifyUrl: 'https://credentials.example.com/figma',
    skills: ['Design Systems', 'Autolayout v5', 'Variables & Tokens']
  },
  {
    id: 'cert-2',
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google Career Certificates',
    date: 'Jul 2024',
    credentialId: 'GGL-UX-489274',
    verifyUrl: 'https://coursera.org/verify/google-ux',
    skills: ['User Research', 'Figma Prototyping', 'Accessibility Compliance']
  },
  {
    id: 'cert-3',
    title: 'Advanced React & Web Architecture',
    issuer: 'Frontend Masters',
    date: 'Nov 2024',
    credentialId: 'FM-ADV-REACT-301',
    verifyUrl: 'https://frontendmasters.com/verify',
    skills: ['React Hooks', 'Performance Optimizations', 'TypeScript']
  },
  {
    id: 'cert-4',
    title: 'Certified Interaction Designer',
    issuer: 'Interaction Design Foundation (IxDF)',
    date: 'May 2023',
    credentialId: 'IXDF-ID-99210',
    verifyUrl: 'https://interaction-design.org/verify',
    skills: ['Human-Computer Interaction', 'Micro-interactions', 'Nesting Mechanics']
  }
];

export default function Certificates({ isDark }) {
  return (
    <section
      id="certificates"
      className={`py-20 md:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-plum-dark/40' : 'bg-peach/10'
      }`}
    >
      {/* Visual background bubbles in Frosted Glass theme */}
      <div className="absolute top-[30%] right-[-100px] w-80 h-80 rounded-full blur-[120px] bg-pink-200 dark:bg-pink-950/10 opacity-40 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-100px] w-80 h-80 rounded-full blur-[120px] bg-rose-200 dark:bg-rose-950/10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div className="text-center space-y-2 mb-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-hotpink">
            06 / ACCOMPLISHMENTS
          </p>
          <h2 className={`text-3xl sm:text-4.5xl font-display font-medium tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Professional <span className="text-hotpink font-semibold">Certifications</span> & Credentials
          </h2>
          <div className="h-1 w-16 bg-hotpink rounded-full mx-auto mt-4" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`p-6 sm:p-8 rounded-[32px] border text-left flex flex-col justify-between h-[250px] relative overflow-hidden group backdrop-blur-xl transition-all duration-500 ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:border-hotpink/50 hover:bg-white/10 hover:shadow-lg hover:shadow-hotpink/5'
                  : 'bg-white/45 border-white/65 hover:border-[#fbcfe8] hover:bg-white/55 hover:shadow-xl hover:shadow-rose-100/30'
              }`}
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  {/* Badge */}
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md shadow-inner transition-colors ${
                    isDark ? 'bg-white/5 text-hotpink border border-white/10' : 'bg-white text-hotpink border border-white'
                  }`}>
                    <Award size={20} className="text-hotpink" />
                  </div>

                  <span className={`text-[10px] sm:text-xs font-mono font-medium flex items-center gap-1.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Calendar size={12} className="text-hotpink shrink-0" />
                    {cert.date}
                  </span>
                </div>

                {/* Info block */}
                <div className="space-y-1">
                  <h3 className={`text-base sm:text-lg font-display font-semibold leading-tight ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {cert.title}
                  </h3>
                  <p className="text-xs font-sans font-semibold text-hotpink">
                    {cert.issuer}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-0.5 text-[9px] font-mono rounded-full backdrop-blur-sm ${
                        isDark 
                          ? 'bg-white/5 border border-white/10 text-gray-300' 
                          : 'bg-white border border-rose-100/40 text-gray-500'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom detail action row */}
              <div className="flex items-center justify-between pt-4 mt-auto border-t border-dashed border-pink-200/20 dark:border-white/5">
                <span className={`text-[10px] font-mono ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  ID: <span className="font-semibold text-hotpink/80">{cert.credentialId}</span>
                </span>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[11px] font-mono font-bold text-hotpink hover:underline"
                >
                  <span>Verify</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
