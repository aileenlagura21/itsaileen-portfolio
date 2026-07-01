/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, MapPin, Sparkles, CheckCircle2, AlertCircle, Phone, Globe, Github, Linkedin, Figma, Bookmark } from 'lucide-react';

export default function Contact({ isDark }) {
  // Form states backed up by Local Storage!
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Status handlers
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDraftRestored, setIsDraftRestored] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // 1. Restore drafts from LocalStorage
  useEffect(() => {
    const savedName = localStorage.getItem('draft_aileen_name');
    const savedEmail = localStorage.getItem('draft_aileen_email');
    const savedSubject = localStorage.getItem('draft_aileen_subject');
    const savedMsg = localStorage.getItem('draft_aileen_message');

    if (savedName || savedEmail || savedSubject || savedMsg) {
      if (savedName) setName(savedName);
      if (savedEmail) setEmail(savedEmail);
      if (savedSubject) setSubject(savedSubject);
      if (savedMsg) setMessage(savedMsg);
      setIsDraftRestored(true);

      // Flash restored notification then dismiss
      setTimeout(() => setIsDraftRestored(false), 4500);
    }
  }, []);

  // 2. Continually capture and write changes to LocalStorage
  useEffect(() => {
    localStorage.setItem('draft_aileen_name', name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem('draft_aileen_email', email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem('draft_aileen_subject', subject);
  }, [subject]);

  useEffect(() => {
    localStorage.setItem('draft_aileen_message', message);
  }, [message]);

  const validateForm = () => {
    const checkErrors = {};

    if (!name.trim()) {
      checkErrors.name = 'Please provide your name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      checkErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(email)) {
      checkErrors.email = 'Please provide a valid email format.';
    }

    if (!subject.trim()) {
      checkErrors.subject = 'Please provide a subject.';
    }

    if (!message.trim()) {
      checkErrors.message = 'Please type a message.';
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
      setSubject('');
      setMessage('');
      localStorage.removeItem('draft_aileen_name');
      localStorage.removeItem('draft_aileen_email');
      localStorage.removeItem('draft_aileen_subject');
      localStorage.removeItem('draft_aileen_message');

      // Dismiss success alert automatically after 5 sec
      setTimeout(() => setToastMessage(null), 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-20 md:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background soft pastel highlight orbs */}
      <div className="absolute top-[45%] right-[10%] w-[380px] h-[380px] rounded-full filter blur-[150px] bg-peach opacity-30" />

      {/* Structured container */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section title */}
        <div className="text-center space-y-2 mb-10">
          <h2 className={`text-3xl sm:text-4.5xl font-display font-semibold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Contact Me
          </h2>
          <p className={`text-sm font-light max-w-lg mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Got a project in mind, a collaborative opportunity, or just want to say hello? Drop me a message and let's build something exquisite together!
          </p>
          <div className="h-1 w-12 bg-hotpink rounded-full mx-auto mt-3" />
        </div>

        {/* Quick Contacts Bar: Email, LinkedIn, GitHub */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
                    {/* Email */}
                  {/* Email */}
          <motion.a
            id="link-contact-email"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aileenlagura16@gmail.com&su=Hello%20Aileen"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            animate={{
              y: [0, -5, 0, 5, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            className={`flex flex-col items-center justify-center p-5 rounded-2xl border transition-all hover:scale-[1.02] ${
              isDark
                ? 'bg-white/5 border-white/10 hover:border-hotpink text-white hover:bg-white/10'
                : 'bg-white/45 border-white/65 hover:border-hotpink shadow-sm text-gray-800 hover:bg-white'
            }`}
            style={{
              animation: 'card-float 4s ease-in-out infinite',
            }}
          >
            <motion.div
              animate={{ y: [0, -3, 0, 3, 0], rotate: [0, 8, 0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Mail className="text-hotpink mb-2" size={20} />
            </motion.div>
            <span className="text-[10px] font-mono uppercase text-gray-400">Email Me</span>
            <span className="text-xs font-semibold mt-1 max-w-full truncate">aileenlagura16@gmail.com</span>
          </motion.a>
          {/* LinkedIn */}
          <motion.a
            id="link-contact-linkedin"
            href="https://www.linkedin.com/in/aileen-lagura-7006483a2/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            animate={{
              y: [0, -5, 0, 5, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            className={`flex flex-col items-center justify-center p-5 rounded-2xl border transition-all hover:scale-[1.02] ${
              isDark
                ? 'bg-white/5 border-white/10 hover:border-hotpink text-white hover:bg-white/10'
                : 'bg-white/45 border-white/65 hover:border-hotpink shadow-sm text-gray-800 hover:bg-white'
            }`}
            style={{
              animation: 'card-float 4.4s ease-in-out infinite',
              animationDelay: '0.2s',
            }}
          >
            <motion.div
              animate={{ y: [0, -3, 0, 3, 0], rotate: [0, 8, 0, -8, 0] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            >
              <Linkedin className="text-hotpink mb-2" size={20} />
            </motion.div>
            <span className="text-[10px] font-mono uppercase text-gray-400">LinkedIn</span>
            <span className="text-xs font-semibold mt-1">aileen-lagura</span>
          </motion.a>
          {/* GitHub */}
          <motion.a
            id="link-contact-github"
            href="https://github.com/aileenlagura21"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            animate={{
              y: [0, -5, 0, 5, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            className={`flex flex-col items-center justify-center p-5 rounded-2xl border transition-all hover:scale-[1.02] ${
              isDark
                ? 'bg-white/5 border-white/10 hover:border-hotpink text-white hover:bg-white/10'
                : 'bg-white/45 border-white/65 hover:border-hotpink shadow-sm text-gray-800 hover:bg-white'
            }`}
            style={{
              animation: 'card-float 4.8s ease-in-out infinite',
              animationDelay: '0.4s',
            }}
          >
            <motion.div
              animate={{ y: [0, -3, 0, 3, 0], rotate: [0, 8, 0, -8, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            >
              <Github className="text-hotpink mb-2" size={20} />
            </motion.div>
            <span className="text-[10px] font-mono uppercase text-gray-400">GitHub</span>
            <span className="text-xs font-semibold mt-1">aileenlagura</span>
          </motion.a>
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

        {/* Interactive Form intake */}
        <form
          onSubmit={handleSubmit}
          className={`max-w-2xl mx-auto p-7 sm:p-8 rounded-[32px] border backdrop-blur-xl text-left flex flex-col gap-5 ${
            isDark
              ? 'bg-plum-dark/70 border-white/15 shadow-lg shadow-black/20'
              : 'bg-white/45 border-white/65 shadow-sm shadow-rose-100/5'
          }`}
        >
          {/* Name Input */}
          <div className="space-y-2">
            <label htmlFor="ct-name" className={`block text-xs font-mono font-semibold uppercase tracking-wider ${isDark ? 'text-gray-100' : 'text-gray-600'}`}>
              Name
            </label>
            <input
              id="ct-name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
              }}
              className={`w-full px-4 py-2.5 rounded-xl text-xs font-sans border backdrop-blur-md focus:ring-1 focus:outline-none transition-all ${
                errors.name
                  ? 'border-red-300 bg-red-50/25 focus:ring-red-400 focus:border-red-400'
                  : isDark
                  ? 'bg-white/10 border-white/20 focus:ring-hotpink focus:border-hotpink text-white placeholder:text-gray-400 caret-hotpink'
                  : 'bg-white/35 border-white/50 focus:ring-hotpink focus:border-hotpink text-gray-800'
              }`}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-[10px] text-red-500 font-mono flex items-center gap-1 mt-1">
                <AlertCircle size={10} /> {errors.name}
              </p>
            )}
          </div>

          {/* Email Input */}
          <div className="space-y-2">
              <label htmlFor="ct-email" className={`block text-xs font-mono font-semibold uppercase tracking-wider ${isDark ? 'text-gray-100' : 'text-gray-600'}`}>
              Email
            </label>
            <input
              id="ct-email"
              type="text"
              placeholder="your.email@domain.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
              }}
              className={`w-full px-4 py-2.5 rounded-xl text-xs font-sans border backdrop-blur-md focus:ring-1 focus:outline-none transition-all ${
                errors.email
                  ? 'border-red-300 bg-red-50/25 focus:ring-red-400 focus:border-red-400'
                  : isDark
                  ? 'bg-white/10 border-white/20 focus:ring-hotpink focus:border-hotpink text-white placeholder:text-gray-400 caret-hotpink'
                  : 'bg-white/35 border-white/50 focus:ring-hotpink focus:border-hotpink text-gray-800'
              }`}
              placeholder="your.email@domain.com"
            />
            {errors.email && (
              <p className="text-[10px] text-red-500 font-mono flex items-center gap-1 mt-1">
                <AlertCircle size={10} /> {errors.email}
              </p>
            )}
          </div>

          {/* Subject Input */}
          <div className="space-y-2">
            <label htmlFor="ct-subject" className={`block text-xs font-mono font-semibold uppercase tracking-wider ${isDark ? 'text-gray-100' : 'text-gray-600'}`}>
              Subject
            </label>
            <input
              id="ct-subject"
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                if (errors.subject) setErrors(prev => ({ ...prev, subject: undefined }));
              }}
              className={`w-full px-4 py-2.5 rounded-xl text-xs font-sans border backdrop-blur-md focus:ring-1 focus:outline-none transition-all ${
                errors.subject
                  ? 'border-red-300 bg-red-50/25 focus:ring-red-400 focus:border-red-400'
                  : isDark
                  ? 'bg-white/10 border-white/20 focus:ring-hotpink focus:border-hotpink text-white placeholder:text-gray-400 caret-hotpink'
                  : 'bg-white/35 border-white/50 focus:ring-hotpink focus:border-hotpink text-gray-800'
              }`}
              placeholder="Subject"
            />
            {errors.subject && (
              <p className="text-[10px] text-red-500 font-mono flex items-center gap-1 mt-1">
                <AlertCircle size={10} /> {errors.subject}
              </p>
            )}
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label htmlFor="ct-message" className={`block text-xs font-mono font-semibold uppercase tracking-wider ${isDark ? 'text-gray-100' : 'text-gray-600'}`}>
              Message
            </label>
            <textarea
              id="ct-message"
              rows={5}
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
              }}
              className={`w-full px-4 py-3 rounded-xl text-xs font-sans border backdrop-blur-md focus:ring-1 focus:outline-none transition-all resize-none ${
                errors.message
                  ? 'border-red-300 bg-red-50/25 focus:ring-red-400 focus:border-red-400'
                  : isDark
                  ? 'bg-white/10 border-white/20 focus:ring-hotpink focus:border-hotpink text-white placeholder:text-gray-400 caret-hotpink'
                  : 'bg-white/35 border-white/50 focus:ring-hotpink focus:border-hotpink text-gray-800'
              }`}
              placeholder="Type your message here..."
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
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={12} />
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}