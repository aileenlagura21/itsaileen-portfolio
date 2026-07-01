/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Logo({ className = '', size = '100%', isDark = false, showTagline = true }) {
  // Adaptation to dark and light mode colors
  const primaryColor = isDark ? '#ffffff' : '#000000';
  const accentColor = '#f43f5e'; // hotpink
  const shadowColor = isDark ? 'rgba(255, 95, 137, 0.25)' : 'rgba(0, 0, 0, 0.1)';
  const secondaryColor = isDark ? 'rgba(255, 255, 255, 0.45)' : 'rgba(0, 0, 0, 0.45)';
  const lineAndTagColor = isDark ? '#ffffff' : '#000000';

  return (
    <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full select-none"
      >
        <defs>
          {/* Subtle drop shadows for the luxury aesthetic */}
          <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor={accentColor} floodOpacity="0.12" />
          </filter>
          <filter id="soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor={shadowColor} floodOpacity="0.1" />
          </filter>
        </defs>

        {/* --- Background / Ambient Glow (optional subtle touch) --- */}
        <g filter="url(#glow-filter)">
          {/* Sparkle 1 (Large four-point star) */}
          <path
            d="M 230 80 Q 230 130 180 130 Q 230 130 230 180 Q 230 130 280 130 Q 230 130 230 80 Z"
            fill={primaryColor}
            className="transition-colors duration-300"
          />
          {/* Sparkle 2 (Medium four-point star) */}
          <path
            d="M 255 130 Q 255 155 230 155 Q 255 155 255 180 Q 255 155 280 155 Q 255 155 255 130 Z"
            fill={secondaryColor}
            className="transition-colors duration-300"
            opacity="0.75"
          />
        </g>

        {/* --- Letter Forms Group --- */}
        <g filter="url(#soft-shadow)">
          {/* Back/Outline "A" (Thin offset outline) */}
          <text
            x="222"
            y="312"
            fontFamily="'Cormorant Garamond', 'Playfair Display', 'Didot', serif"
            fontSize="235"
            fontWeight="300"
            fill="none"
            stroke={primaryColor}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            opacity="0.3"
            textAnchor="middle"
            className="transition-all duration-500"
          >
            A
          </text>

          {/* Front Solid "A" */}
          <text
            x="242"
            y="327"
            fontFamily="'Cormorant Garamond', 'Playfair Display', 'Didot', serif"
            fontSize="235"
            fontWeight="600"
            fill={primaryColor}
            textAnchor="middle"
            className="transition-colors duration-300"
          >
            A
          </text>

          {/* Side/Hollow Double "L" (Grey overlay) */}
          {/* Main "L" stroke */}
          <text
            x="320"
            y="342"
            fontFamily="'Cormorant Garamond', 'Playfair Display', 'Didot', serif"
            fontSize="235"
            fontWeight="300"
            fill="none"
            stroke={secondaryColor}
            strokeWidth="4"
            opacity="0.6"
            className="transition-all duration-300"
          >
            L
          </text>
          
          {/* Shifted Inner Thin "L" stroke to create the hollow architectural lines */}
          <text
            x="325"
            y="337"
            fontFamily="'Cormorant Garamond', 'Playfair Display', 'Didot', serif"
            fontSize="235"
            fontWeight="300"
            fill="none"
            stroke={isDark ? 'rgba(244, 63, 94, 0.4)' : 'rgba(244, 63, 94, 0.25)'}
            strokeWidth="1.5"
            className="transition-all duration-300"
          >
            L
          </text>
        </g>

        {/* --- Horizontal Line & Tagline ("LEARN • CREATE • ELEVATE") --- */}
        {showTagline && (
          <g>
            {/* Fine line segment 1 (Left) */}
            <line
              x1="55"
              y1="237"
              x2="175"
              y2="237"
              stroke={lineAndTagColor}
              strokeWidth="0.85"
              opacity="0.32"
              className="transition-all duration-300"
            />

            {/* Fine line segment 2 (Right) */}
            <line
              x1="325"
              y1="237"
              x2="445"
              y2="237"
              stroke={lineAndTagColor}
              strokeWidth="0.85"
              opacity="0.32"
              className="transition-all duration-300"
            />

            {/* Subtitle brand alignment text */}
            <text
              x="250"
              y="241"
              fontFamily="'Cinzel', 'Playfair Display', serif"
              fontSize="12.5"
              fontWeight="400"
              letterSpacing="11"
              fill={lineAndTagColor}
              textAnchor="middle"
              className="transition-colors duration-300 uppercase"
              opacity="0.9"
            >
              LEARN • CREATE • ELEVATE
            </text>
            
            {/* Extremely thin underlying horizontal rule to frame the tagline */}
            <line
              x1="65"
              y1="247"
              x2="435"
              y2="247"
              stroke={isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}
              strokeWidth="0.5"
              className="transition-all duration-300"
            />
          </g>
        )}
      </svg>
    </div>
  );
}