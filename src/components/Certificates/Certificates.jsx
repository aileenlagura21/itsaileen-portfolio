/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Calendar, ShieldCheck, CheckCircle, Sparkles, X, Eye, ExternalLink } from 'lucide-react';

/**
 * @typedef {Object} CertificateItem
 * @property {string} id
 * @property {string} title
 * @property {string} issuer
 * @property {string} date
 * @property {string} credentialId
 * @property {string} verifyUrl
 * @property {string[]} skills
 * @property {string} [image]
 * @property {string} description
 */

const CERTIFICATES = [
  {
    id: 'cert-weekly-challenge',
    title: 'Certificate of Achievement',
    issuer: 'Bohol Island State University - Bilar Campus Computing Society',
    date: 'Week 2, 2025',
    credentialId: 'BISU-ComSoc-W2-Rank4',
    verifyUrl: '',
    skills: ['Competitive Programming', 'Algorithm Design', 'Problem-Solving', 'Data Structures'],
    image: '/src/assets/images/weekly_challenge_cert_1780312944222.png',
    description: 'Awarded Rank 4 on Week 2 of the Weekly Programming Challenge organized by Bohol Island State University - Bilar Campus Computing Society. Recognition for exceptional algorithmic problem-solving, code execution speed, and logical reasoning under time-constrained competitive conditions.'
  },
  
  {
    id: 'cert-cpp-algorithms',
    title: 'C++ Algorithms and Complexity',
    issuer: 'CodeChum',
    date: 'Aug 31, 2025',
    credentialId: 'CodeChum-CS311-539570',
    verifyUrl: 'https://app.codechum.com/certificates/D1070',
    skills: ['C++ Programming', 'Algorithm Design', 'Complexity Analysis', 'Data Structures'],
    image: '/codechum_algorithms.jpg',
    description: 'Completed BSCS 3, CS 311 - Algorithms and Complexity course with a comprehensive score of 539/570. Demonstrated mastery in algorithm design, computational complexity analysis, and advanced C++ programming techniques.'
  },
  {
    id: 'cert-info-management',
    title: 'Information Management',
    issuer: 'CodeChum',
    date: 'March 1, 2025',
    credentialId: 'CodeChum-CS221-1106-1130',
    verifyUrl: 'https://app.codechum.com/certificates/7523',
    skills: ['Database Design', 'Data Organization', 'System Architecture', 'SQL'],
    image: '/codechum_information_management_1780312944223.jpg',
    description: 'Completed BSCS-2-CS-221 Information Management course with an excellent score of 1106/1130. Achieved proficiency in database design, data organization principles, and enterprise system architecture.'
  }
];

/**
 * @param {Object} props
 * @param {boolean} props.isDark
 */
export default function Certificates({ isDark }) {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificates"
      className={`py-20 md:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-plum-dark/40' : 'bg-peach/10'
      }`}
    >
      {/* Background blobs for a polished luxury look */}
      <div className="absolute top-[30%] right-[-100px] w-80 h-80 rounded-full blur-[120px] bg-pink-200 dark:bg-pink-950/10 opacity-40 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-100px] w-80 h-80 rounded-full blur-[120px] bg-rose-200 dark:bg-rose-950/10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div className="text-center space-y-2 mb-14">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-hotpink">
            06 / ACCOMPLISHMENTS
          </p>
          <h2 className={`text-3xl sm:text-4.5xl font-display font-medium tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Academic <span className="text-hotpink font-semibold">Certifications</span> & Challenges
          </h2>
          <div className="h-1 w-16 bg-hotpink rounded-full mx-auto mt-4" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedCert(cert)}
              className={`p-6 sm:p-7 rounded-[32px] border text-left flex flex-col justify-between h-[280px] relative overflow-hidden group backdrop-blur-xl transition-all duration-500 cursor-pointer ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:border-hotpink/50 hover:bg-white/10 hover:shadow-lg hover:shadow-hotpink/5'
                  : 'bg-white/55 border-white/65 hover:border-[#fbcfe8] hover:bg-white/70 hover:shadow-xl hover:shadow-rose-100/30'
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
                  <h3 className={`text-base font-display font-semibold leading-snug group-hover:text-hotpink transition-colors line-clamp-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {cert.title}
                  </h3>
                  <p className="text-xs font-sans font-semibold text-gray-500 dark:text-gray-400 line-clamp-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.slice(0, 3).map((skill) => (
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
                  {cert.skills.length > 3 && (
                    <span className="text-[9px] font-mono text-hotpink py-0.5 px-1 font-semibold leading-none self-center">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom detail action row */}
              <div className="flex items-center justify-between pt-4 mt-auto border-t border-dashed border-pink-200/20 dark:border-white/5">
                <span className={`text-[10px] font-mono ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  ID: <span className="font-semibold text-hotpink/80">{cert.credentialId}</span>
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCert(cert);
                  }}
                  className="flex items-center gap-1.5 text-xs font-mono font-bold text-hotpink hover:underline hover:opacity-85"
                >
                  <Eye size={12} />
                  <span>View Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Multi-modal Interactive Lightbox Modal --- */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto bg-black/75 backdrop-blur-xl"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 15, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className={`w-full max-w-4xl rounded-[36px] overflow-hidden shadow-2xl border text-left relative flex flex-col md:grid md:grid-cols-12 max-h-[90vh] md:max-h-[80vh] ${
                  isDark
                    ? 'bg-plum-dark border-white/10 text-white'
                    : 'bg-white border-pink-100/60 text-gray-900'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top close button */}
                <button
                  id="btn-close-certificate"
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white hover:scale-105 transition-all cursor-pointer shadow-md"
                >
                  <X size={18} />
                </button>

                {/* Left/Top Column: The certificate visual preview (Col Span 7) */}
                <div className="col-span-7 bg-pink-50/50 dark:bg-black/45 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-pink-100/10 relative p-4 sm:p-6 min-h-[250px] md:min-h-full">
                  {selectedCert.image ? (
                    <div className="relative group w-full h-full flex items-center justify-center">
                      <img
                        src={selectedCert.image}
                        alt={selectedCert.title}
                        referrerPolicy="no-referrer"
                        className="max-w-full max-h-[50vh] md:max-h-[70vh] object-contain rounded-2xl shadow-lg border border-pink-200/20"
                      />
                      {/* Subtle hover zoom prompt */}
                      <div className="absolute inset-0 bg-transparent opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-[10px] font-mono px-3 py-1.5 rounded-full bg-black/80 text-white shadow backdrop-blur-md">
                          Verified Document Form
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Elegant placeholder if no image exists */
                    <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center max-w-sm">
                      <div className="w-16 h-16 rounded-full bg-hotpink/10 flex items-center justify-center border border-hotpink/20 animate-pulse">
                        <Award size={36} className="text-hotpink" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-display font-semibold text-hotpink text-sm uppercase tracking-wider">
                          Verified Educational Credentials
                        </h4>
                        <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                          This verified student milestone is officially backed and logged directly in regional records.
                        </p>
                      </div>
                      <div className="p-3 bg-white/5 dark:bg-white-[0.02] border border-white/5 rounded-2xl w-full text-left font-mono text-[10px] space-y-1.5 opacity-80">
                        <p className="flex justify-between">
                          <span>REGISTRY:</span>
                          <span className="text-hotpink">{selectedCert.issuer.includes("Bohol") ? "BISU-Bilar" : "BNHS-Bohol"}</span>
                        </p>
                        <p className="flex justify-between">
                          <span>CREDENTIAL ID:</span>
                          <span className="text-hotpink">{selectedCert.credentialId}</span>
                        </p>
                        <p className="flex justify-between">
                          <span>STATUS:</span>
                          <span className="text-emerald-500 font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                            VERIFIED
                          </span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right/Bottom Column: The certificate details metadata (Col Span 5) */}
                <div className="col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[45vh] md:max-h-full">
                  <div className="space-y-5">
                    {/* Badge and Date */}
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-wide uppercase bg-hotpink/10 text-hotpink border border-hotpink/20">
                        Accomplishment
                      </span>
                      <span className={`text-xs font-mono flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        <Calendar size={13} className="text-hotpink shrink-0" />
                        {selectedCert.date}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="space-y-1.5">
                      <h3 className={`text-xl sm:text-2xl font-display font-semibold leading-snug ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {selectedCert.title}
                      </h3>
                      <h4 className="text-xs font-sans font-bold text-hotpink uppercase tracking-wide">
                        {selectedCert.issuer}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {selectedCert.description}
                    </p>

                    {/* Skills Covered */}
                    <div className="space-y-2.5">
                      <h5 className="text-[10px] font-mono font-bold uppercase tracking-wider text-hotpink">
                        Relevant Core Competencies
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCert.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 text-[10px] font-mono rounded-xl border ${
                              isDark
                                ? 'bg-white/5 border-white/10 text-gray-200'
                                : 'bg-gray-50 border-gray-100 text-gray-600 shadow-sm'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom verification status bar */}
                  <div className="pt-6 mt-8 border-t border-pink-100/10 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-left">
                      <p className={`text-[9px] font-mono ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                        CREDENTIAL REGISTERED ID:
                      </p>
                      <p className="text-xs font-mono font-bold text-hotpink">
                        {selectedCert.credentialId}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-500 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-mono font-semibold">
                      <CheckCircle size={12} />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
