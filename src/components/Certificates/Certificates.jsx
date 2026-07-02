/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Calendar, ShieldCheck, CheckCircle, Sparkles, X, Eye, ExternalLink } from 'lucide-react';
import tesdaComputerSystemsImage from '../../assets/images/tesda_computer_systems.png';
import tesdaCssIntroImage from '../../assets/images/tesda_css_intro.png';
import zionlabSession3Image from '../../assets/images/zionlab_session3.png';
import zionlabSession2Image from '../../assets/images/zionlab_session2.png';
import zionlabSession1Image from '../../assets/images/zionlab_session1.png';
import bisuProgrammingChallengeImage from '../../assets/images/bisu_programming_challenge.png';
import codechumCppAlgorithmsImage from '../../assets/images/codechum_cpp_algorithms.jpg';
import codechumInfoManagementImage from '../../assets/images/codechum_info_management.jpg';

function CertCardTitle({ title, isDark }) {
  return (
    <h3 className={`text-sm sm:text-base font-display font-semibold leading-snug group-hover:text-hotpink transition-colors min-h-[2.6rem] ${isDark ? 'text-white' : 'text-gray-900'}`}>
      {title}
    </h3>
  );
}

const CERTIFICATES = [
  {
    id: 'cert-tesda-computer-systems',
    title: 'Installing and Configuring Computer Systems',
    issuer: 'Technical Education and Skills Development Authority (TESDA)',
    date: 'June 23, 2026',
    credentialId: 'TESDA-ICS-2026',
    verifyUrl: 'mailto:tesdaonlineprogram@tesda.gov.ph',
    skills: ['Computer Hardware', 'System Installation', 'Configuration', 'Technical Support', 'IT Fundamentals'],
    image: tesdaComputerSystemsImage,
    description: 'Completed training on installing and configuring computer systems, covering hardware setup, software installation, and system configuration fundamentals.'
  },
  {
    id: 'cert-tesda-css',
    title: 'Introduction to CSS',
    issuer: 'Technical Education and Skills Development Authority (TESDA)',
    date: 'June 21, 2026',
    credentialId: 'TESDA-CSS-2026',
    verifyUrl: 'mailto:tesdaonlineprogram@tesda.gov.ph',
    skills: ['CSS', 'Web Development', 'Frontend Development', 'Styling', 'Responsive Design'],
    image: tesdaCssIntroImage,
    description: 'Completed the Introduction to CSS course through TESDA Online Program, learning fundamental concepts of Cascading Style Sheets for web development.'
  },
  {
    id: 'cert-zionlab-session3',
    title: 'How to Scope Your Thesis Properly',
    issuer: 'Zionlab Digital',
    date: 'June 17, 2026',
    credentialId: 'ZIONLAB-TBYB-S3-2026',
    verifyUrl: '#',
    skills: ['Project Scoping', 'Goal Setting', 'Time Management', 'Research Planning', 'Feasibility Analysis'],
    image: zionlabSession3Image,
    description: 'Completed Session 3 on defining realistic project boundaries, achievable objectives, and practical implementation plans for thesis and capstone projects.'
  },
  {
    id: 'cert-zionlab-session2',
    title: 'How to Find a Problem Worth Solving',
    issuer: 'Zionlab Digital',
    date: 'June 15, 2026',
    credentialId: 'ZIONLAB-TBYB-S2-2026',
    verifyUrl: '#',
    skills: ['Research Design', 'Problem Identification', 'Critical Thinking', 'Innovation', 'Academic Writing'],
    image: zionlabSession2Image,
    description: 'Completed Session 2 focusing on identifying meaningful and research-worthy problems that lead to impactful thesis and capstone projects. Learned frameworks for evaluating problem significance.'
  },
  {
    id: 'cert-zionlab-session1',
    title: 'Why Most Thesis Groups Get Stuck',
    issuer: 'Zionlab Digital',
    date: 'June 12, 2026',
    credentialId: 'ZIONLAB-TBYB-S1-2026',
    verifyUrl: '#',
    skills: ['Thesis Development', 'Project Planning', 'Research Methodology', 'Problem Solving', 'Team Collaboration'],
    image: zionlabSession1Image,
    description: 'Participated in Session 1 of the webinar series "THINK BEFORE YOU BUILD: AI Assists. Humans Still Decide." Explored common challenges in thesis and capstone development and strategies for overcoming them.'
  },
  {
    id: 'cert-bisu-programming-challenge',
    title: 'Weekly Programming Challenge - Rank 4 (Week 2)',
    issuer: 'Bohol Island State University - Bilar Campus Computing Society',
    date: '2026',
    credentialId: 'BISU-COMSOC-WPC-W2',
    verifyUrl: '#',
    skills: ['Programming', 'Problem Solving', 'Algorithm Implementation', 'Coding Competition', 'Software Development'],
    image: bisuProgrammingChallengeImage,
    description: 'Achieved Rank 4 in Week 2 of the Weekly Programming Challenge organized by BISU-Bilar Campus Computing Society, demonstrating strong programming and problem-solving skills.'
  },
  {
    id: 'cert-cpp-algorithms',
    title: 'C++ Algorithms and Complexity',
    issuer: 'CodeChum Learning Platform',
    date: 'Aug. 31, 2025',
    credentialId: 'CODECHUM-13070',
    verifyUrl: 'https://app.codechum.com/certificates/13070',
    skills: ['C++ Coding', 'Computational Complexity', 'Sorting Algorithms', 'Algorithm Analysis', 'Big-O Notation'],
    image: codechumCppAlgorithmsImage,
    description: 'Successfully completed the comprehensive C++ Algorithms and Complexity course (CS 311) with a score of 539/570. Demonstrated expertise in algorithmic analysis, computational complexity, sorting algorithms, and optimization techniques.'
  },
  {
    id: 'cert-info-management',
    title: 'Information Management',
    issuer: 'CodeChum Learning Platform',
    date: 'March 1, 2025',
    credentialId: 'CODECHUM-7523',
    verifyUrl: 'https://app.codechum.com/certificates/7523',
    skills: ['Information Systems', 'Data Management', 'Database Design', 'Information Architecture', 'Systems Analysis'],
    image: codechumInfoManagementImage,
    description: 'Achieved excellence in Information Management with an outstanding score of 1106/1130. Mastered principles of information systems, data organization, and management strategies.'
  }
];


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
      {/* Light glow */}
<div className="fixed top-24 left-24 w-72 h-72 rounded-full bg-pink-300/30 blur-[140px] pointer-events-none"></div>

<div className="fixed bottom-10 right-10 w-96 h-96 rounded-full bg-violet-300/30 blur-[160px] pointer-events-none"></div>

<div className="fixed top-1/2 left-1/2 w-72 h-72 rounded-full bg-cyan-300/20 blur-[180px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
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
              className={`rounded-[32px] border text-left flex flex-col justify-between h-[410px] relative overflow-hidden group backdrop-blur-xl transition-all duration-500 cursor-pointer ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:border-hotpink/50 hover:bg-white/10 hover:shadow-lg hover:shadow-hotpink/5'
                  : 'bg-white/55 border-white/65 hover:border-[#fbcfe8] hover:bg-white/70 hover:shadow-xl hover:shadow-rose-100/30'
              }`}
            >
              {cert.image ? (
                <div className="relative w-full h-[180px] overflow-hidden bg-pink-50/50 dark:bg-black/20 border-b border-pink-100/10 dark:border-white/5">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform scale-102 group-hover:scale-108 transition-transform duration-700"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-[10px] font-mono font-bold text-white uppercase bg-hotpink/90 px-3 py-1 rounded-full shadow-md">
                      Inspect Certificate
                    </span>
                  </div>
                </div>
              ) : (
                /* Elegant decorative top background representing no-image certificate */
                <div className="h-[180px] w-full bg-gradient-to-br from-peach/15 to-pink-150/15 dark:from-plum-dark dark:to-plum-card/50 flex flex-col justify-center items-center p-6 border-b border-pink-100/10 dark:border-white/5 relative">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md shadow-md hover:scale-105 transition-transform ${
                    isDark ? 'bg-white/5 text-hotpink border border-white/10' : 'bg-white text-hotpink border border-rose-100/40'
                  }`}>
                    <Award size={28} className="text-hotpink" />
                  </div>
                  <span className={`text-[10px] font-mono uppercase font-semibold text-gray-400 mt-3`}>
                    Academic Record
                  </span>
                </div>
              )}

              {/* Info block */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] font-mono font-bold uppercase text-hotpink`}>
                      {cert.issuer.includes("Bohol") ? "BISU-Bilar" : "CodeChum Platform"}
                    </span>
                    <span className={`text-[10px] font-mono text-gray-400 font-semibold`}>
                      {cert.date}
                    </span>
                  </div>

                  <CertCardTitle title={cert.title} isDark={isDark} />

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-0.5 text-[9px] font-mono rounded-md ${
                          isDark
                            ? 'bg-white/5 border border-white/10 text-gray-300'
                            : 'bg-rose-50/50 border border-rose-100/50 text-gray-500'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-[9px] font-mono text-hotpink py-0.5 px-1 font-semibold self-center">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom detail action row */}
                <div className="flex items-center justify-between pt-3 mt-4 border-t border-dashed border-pink-200/20 dark:border-white/5">
                  <span className={`text-[9px] font-mono ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    ID: <span className="font-semibold text-hotpink/80">{cert.credentialId}</span>
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}
                    className="flex items-center gap-1 text-[11px] font-mono font-bold text-hotpink hover:underline hover:opacity-85"
                  >
                    <Eye size={11} />
                    <span>View details</span>
                  </button>
                </div>
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

                    <div className="flex items-center gap-2">
                      {selectedCert.verifyUrl && (
                        <a
                          href={selectedCert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-hotpink/10 hover:bg-hotpink/20 text-hotpink border border-hotpink/20 transition-all cursor-pointer"
                        >
                          <ExternalLink size={12} />
                          <span>Verify Live</span>
                        </a>
                      )}
                      <div className="flex items-center gap-1 bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-500 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-mono font-semibold">
                        <CheckCircle size={12} />
                        <span>Verified</span>
                      </div>
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