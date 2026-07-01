/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp } from 'lucide-react';
import Logo from '../Logo/Logo';

export default function Footer({ isDark }) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      className={`py-12 border-t text-xs transition-colors duration-300 ${isDark
          ? 'bg-plum-dark border-plum-border/60 text-gray-500'
          : 'bg-cream border-pink-100/50 text-gray-500'
        }`}
    >
        {/* Scroll back to top bubble */}
        <div className="text-center absolute">
          <button
            id="btn-footer-back-to-top"
            onClick={handleScrollToTop}
            className={`p-3 rounded-xl border cursor-pointer active:scale-95 transition-all flex items-center justify-center text-hotpink hover:bg-hotpink hover:text-white ${isDark
                ? 'bg-plum-card border-plum-border'
                : 'bg-white border-pink-100/70 shadow-sm'
              }`}
            title="Back to Top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">

        {/* Logos & copyright */}
        <div className="text-center space-y-1.5">
          <div className="flex items-center justify-center gap-2 text-hotpink">
            <Logo size={32} isDark={isDark} showTagline={false} />
            <span className="font-display font-medium font-semibold text-sm">Aileen Lagura </span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-wide">
            2026 Aileen Lagura. All rights reserved
          </p>
        </div>




      </div>
    </footer>
  );
}