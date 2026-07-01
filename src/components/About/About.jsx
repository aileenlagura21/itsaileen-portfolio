/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
const INTRO_TEXT = 
  'I am a Computer Science student with a passion for technology, problem-solving, and continuous learning. I enjoy transforming ideas into practical solutions and leveraging technology to create meaningful impact.';

const EXPERIENCE_TEXT = 
  'With experience in technical support, software, systems, and collaborative projects, I am committed to delivering reliable results while continuously expanding my skills in the ever-evolving world of technology.';

export default function About({ isDark }) {
  return (
    <section
      id="about"
      className={`py-20 md:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-plum-dark/40' : 'bg-peach/10'
      }`}
    >
      {/* Decorative vector shape */}
      <div className="absolute top-[20%] right-[5%] w-60 h-60 rounded-full filter blur-[120px] bg-pastelpink opacity-35" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section title */}
         <div className="text-center space-y-2 mb-16">

          <h2 className={`font-mono text-xs font-semibold uppercase  ${isDark ? 'text-white' : 'text-gray-900'}`}>
             01  <span className="text-hotpink font-semibold">/ WHO I AM</span>
          </h2>
          <div className="h-1 w-16 bg-hotpink rounded-full mx-auto mt-4" />
        </div>
        {/* Narrative layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Picture and Visuals (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* Beautiful Profile Picture Frame */}
            <div className="relative group max-w-[320px] w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-pastelpink via-hotpink to-peach rounded-[36px] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative aspect-square rounded-[36px] overflow-hidden border border-white/25 dark:border-white/10 shadow-xl bg-white/10">
                <img
                  src="/src/assets/images/aileen17.jpg"
                  alt="Aileen Lagura"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform scale-102 group-hover:scale-108 transition-transform duration-700"
                />
                {/* Subtle decorative banner overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end text-left pointer-events-none">
                  <span className="text-[10px] font-mono tracking-widest font-bold text-hotpink uppercase">

                  </span>
                  <span className="text-white text-xs font-sans font-semibold">

                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Biography Narrative & Cards (Col span 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">

            <p className={`text-sm sm:text-base leading-relaxed font-light min-h-[6rem] ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
              {INTRO_TEXT}
            </p>
            <p className={`text-sm sm:text-base leading-relaxed font-light min-h-[6rem] ${isDark ? 'text-gray-350' : 'text-gray-650'}`}>
              {EXPERIENCE_TEXT}
            </p>
            {/* Quick Profile Cards for Location & Education */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Location Card */}
              <div className={`p-4 rounded-2xl border text-left backdrop-blur-md flex items-start gap-3 transition-transform hover:scale-101 ${
                isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white/55 border-white/65 shadow-sm shadow-rose-100/5 text-gray-800'
              }`}>
                <div className="w-9 h-9 rounded-full bg-peach/20 dark:bg-white/5 flex items-center justify-center text-hotpink shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold">Location</p>
                  <p className="text-xs font-semibold leading-snug">Bilar, Bohol, Philippines</p>
                </div>
              </div>
              {/* Education Card */}
              <div className={`p-4 rounded-2xl border text-left backdrop-blur-md flex items-start gap-3 transition-transform hover:scale-101 ${
                isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white/55 border-white/65 shadow-sm shadow-rose-100/5 text-gray-800'
              }`}>
                <div className="w-9 h-9 rounded-full bg-peach/20 dark:bg-white/5 flex items-center justify-center text-hotpink shrink-0 mt-0.5">
                  <GraduationCap size={16} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold">Education</p>
                  <p className="text-xs font-bold leading-snug text-hotpink">BS in Computer Science</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}