/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, MapPin, Sparkles, CheckCircle2, AlertCircle, Phone, Globe, Github, Linkedin, Figma, Bookmark } from 'lucide-react';
import './Contact.css';

export default function Contact({ isDark }) {
  // Form states backed up by Local Storage!
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Status handlers
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDraftRestored, setIsDraftRestored] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // 1. Restore drafts from LocalStorage and watch for changes
  useEffect(() => {
    try {
      const savedName = localStorage.getItem('draft_hana_name');
      const savedEmail = localStorage.getItem('draft_hana_email');
      const savedMsg = localStorage.getItem('draft_hana_message');

      if (savedName || savedEmail || savedMsg) {
        if (savedName) setName(savedName);
        if (savedEmail) setEmail(savedEmail);
        if (savedMsg) setMessage(savedMsg);
        setIsDraftRestored(true);

        // Flash restored notification then dismiss
        const timeout = setTimeout(() => setIsDraftRestored(false), 4500);
        return () => clearTimeout(timeout);
      }
    } catch (error) {
      console.warn('Failed to restore drafts from localStorage:', error);
    }
  }, []);

  // 2. Save form data to LocalStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('draft_hana_name', name);
      localStorage.setItem('draft_hana_email', email);
      localStorage.setItem('draft_hana_message', message);
    } catch (error) {
      console.warn('Failed to save drafts to localStorage:', error);
    }
  }, [name, email, message]);

  const validateForm = () => {
    const checkErrors = {};

    if (!name.trim()) {
      checkErrors.name = 'Please provide your lovely name.';
    } else if (name.trim().length < 2) {
      checkErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      checkErrors.email = 'E-mail address is required.';
    } else if (!emailRegex.test(email)) {
      checkErrors.email = 'Please provide a valid email format sample.';
    }

    if (!message.trim()) {
      checkErrors.message = 'Please type a quick message.';
    } else if (message.trim().length < 15) {
      checkErrors.message = 'Please make your inquiry slightly longer (min 15 characters).';
    }

    setErrors(checkErrors);
    return Object.keys(checkErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate sending network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage('Successfully Sent! Thank you so much for getting in touch. I will answer your prompt within 24 hours! 😊');
      
      // Clear values & wipe local cache
      setName('');
      setEmail('');
      setMessage('');
      localStorage.removeItem('draft_hana_name');
      localStorage.removeItem('draft_hana_email');
      localStorage.removeItem('draft_hana_message');

      // Dismiss success alert automatically after 5 sec
      setTimeout(() => setToastMessage(null), 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-20 md:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background soft pastel highlight orbs */}
      <div className="absolute top-[40%] right-[10%] w-[420px] h-[420px] rounded-full filter blur-[150px] bg-peach opacity-35" />

      {/* Structured grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section title */}
        <div className="text-center space-y-2 mb-16">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-hotpink">
            07 / INQUIRIES & DEEP COLLABS
          </p>
          <h2 className={`text-3xl sm:text-4.5xl font-display font-medium tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Let's Build Something <span className="text-glow-pink text-hotpink font-semibold">Exquisite</span>
          </h2>
          <p className={`text-xs sm:text-sm font-light mt-2 max-w-lg mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Have an open-source pipeline, design mandate, or startup idea? Leave a line. Your layout drafts are securely compiled.
          </p>
          <div className="h-1 w-16 bg-hotpink rounded-full mx-auto mt-4" />
        </div>

        {/* Floating Custom Notification Toast Alerts inside contact section */}
        <div className="max-w-2xl mx-auto mb-8 space-y-3">
          <AnimatePresence>
            {isDraftRestored && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 rounded-2xl border text-left flex items-start gap-3 bg-[#fff0f3] border-pink-200 text-hotpink shadow-sm"
              >
                <Bookmark size={16} className="shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold">Draft Restored!</span> We auto-loaded your unfinished form.
                </div>
              </motion.div>
            )}

            {toastMessage && (
              <motion.div
                id="contact-success-toast"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-5 rounded-2xl border text-left flex items-start gap-3 bg-green-50 border-green-200 text-green-800 shadow-md"
              >
                <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-medium">{toastMessage}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Quick contact Details (Col span 5) */}
          <div className={`lg:col-span-5 p-7 sm:p-8 rounded-[32px] border backdrop-blur-xl flex flex-col justify-between text-left ${
            isDark 
              ? 'bg-white/5 border-white/10 text-white' 
              : 'bg-white/45 border-white/65 shadow-sm shadow-rose-100/5'
          }`}>
            <div className="space-y-6">
              <h3 className={`text-lg sm:text-xl font-display font-semibold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
                Aileen Lagura's Desk
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Always open for premium creative partnerships, freelancing consulting, or coffee meetups.
              </p>

              {/* Direct Info blocks */}
              <div className="space-y-4">
                
                {/* Email block */}
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 backdrop-blur-md flex items-center justify-center text-hotpink shrink-0">
                    <Mail size={15} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono uppercase text-gray-400 leading-none">Write Direct</span>
                    <a
                      id="link-contact-email"
                      href="mailto:aileenlagura16@gmail.com"
                      className="text-xs font-sans font-bold text-hotpink hover:underline"
                    >
                      aileenlagura16@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location block */}
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 backdrop-blur-md flex items-center justify-center text-hotpink shrink-0">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono uppercase text-gray-400 leading-none">Studio base</span>
                    <span className={`text-xs font-sans font-bold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                      Seoul, South Korea
                    </span>
                  </div>
                </div>

                {/* Clock / Language base */}
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 backdrop-blur-md flex items-center justify-center text-hotpink shrink-0">
                    <Globe size={15} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono uppercase text-gray-400 leading-none">Time alignment</span>
                    <span className={`text-xs font-sans ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      KST (UTC+9) • Eng • Kor • Jpn
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social handles links block */}
            <div className="border-t border-pink-100/50 dark:border-plum-border/60 pt-6 mt-8 space-y-3">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-400">Secure Channels</span>
              <div className="flex gap-2">
                {[
                  { id: 'lnk-ct-github', icon: <Github size={14} />, label: 'GitHub', url: 'https://github.com' },
                  { id: 'lnk-ct-linkedin', icon: <Linkedin size={14} />, label: 'LinkedIn', url: 'https://linkedin.com' },
                  { id: 'lnk-ct-figma', icon: <Figma size={14} />, label: 'Figma', url: 'https://figma.com' },
                ].map((sc) => (
                  <a
                    key={sc.id}
                    id={sc.id}
                    href={sc.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-1 py-1.5 px-3 rounded-full text-[10px] font-mono transition-all border backdrop-blur-md ${
                      isDark
                        ? 'border-white/10 hover:border-hotpink bg-white/5 text-gray-300 hover:text-hotpink'
                        : 'border-white/50 hover:border-hotpink bg-white/35 shadow-sm text-gray-500 hover:text-hotpink'
                    }`}
                  >
                    {sc.icon}
                    <span>{sc.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Form intake (Col span 7) */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-7 p-7 sm:p-8 rounded-[32px] border backdrop-blur-xl text-left flex flex-col gap-5 ${
              isDark 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/45 border-white/65 shadow-sm shadow-rose-100/5'
            }`}
          >
            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="ct-name" className={`block text-xs font-mono font-semibold uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                What should I call you?
              </label>
              <div className="relative">
                <input
                  id="ct-name"
                  type="text"
                  placeholder="e.g. Minji Park"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs font-sans border backdrop-blur-md focus:ring-1 focus:outline-none transition-all ${
                    errors.name
                      ? 'border-red-300 bg-red-50/25 focus:ring-red-400 focus:border-red-400'
                      : isDark
                      ? 'bg-white/5 border-white/10 focus:ring-hotpink focus:border-hotpink text-white'
                      : 'bg-white/35 border-white/50 focus:ring-hotpink focus:border-hotpink text-gray-800'
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-[10px] text-red-500 font-mono flex items-center gap-1 mt-1">
                  <AlertCircle size={10} /> {errors.name}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="ct-email" className={`block text-xs font-mono font-semibold uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Where can I text you? (Email Address)
              </label>
              <input
                id="ct-email"
                type="text"
                placeholder="e.g. minji.park@domain.io"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                }}
                className={`w-full px-4 py-2.5 rounded-xl text-xs font-sans border backdrop-blur-md focus:ring-1 focus:outline-none transition-all ${
                  errors.email
                    ? 'border-red-300 bg-red-50/25 focus:ring-red-400 focus:border-red-400'
                    : isDark
                    ? 'bg-white/5 border-white/10 focus:ring-hotpink focus:border-hotpink text-white'
                    : 'bg-white/35 border-white/50 focus:ring-hotpink focus:border-hotpink text-gray-800'
                }`}
              />
              {errors.email && (
                <p className="text-[10px] text-red-500 font-mono flex items-center gap-1 mt-1">
                  <AlertCircle size={10} /> {errors.email}
                </p>
              )}
            </div>

            {/* Message input */}
            <div className="space-y-2">
              <label htmlFor="ct-message" className={`block text-xs font-mono font-semibold uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Project Scope Narrative
              </label>
              <textarea
                id="ct-message"
                rows={4}
                placeholder="Tell me a bit about your brand goals, required services, milestones, and timeline parameters..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
                }}
                className={`w-full px-4 py-3 rounded-xl text-xs font-sans border backdrop-blur-md focus:ring-1 focus:outline-none transition-all resize-none ${
                  errors.message
                    ? 'border-red-300 bg-red-50/25 focus:ring-red-400 focus:border-red-400'
                    : isDark
                    ? 'bg-white/5 border-white/10 focus:ring-hotpink focus:border-hotpink text-white'
                    : 'bg-white/35 border-white/50 focus:ring-hotpink focus:border-hotpink text-gray-800'
                }`}
              />
              {errors.message && (
                <p className="text-[10px] text-red-500 font-mono flex items-center gap-1 mt-1">
                  <AlertCircle size={10} /> {errors.message}
                </p>
              )}
            </div>

            {/* Form actions */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[10px] text-gray-400 font-mono leading-tight">
                🔒 Protected client-side storage
              </span>
              
              <button
                id="btn-contact-submit"
                type="submit"
                disabled={isSubmitting}
                className="px-6.5 py-3 rounded-xl bg-hotpink text-white text-xs font-sans font-bold uppercase tracking-wider hover:bg-hotpink/95 active:scale-95 disabled:opacity-75 disabled:scale-100 cursor-pointer transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Writing Logs...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={12} />
                  </>
                )}
              </button>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
}
