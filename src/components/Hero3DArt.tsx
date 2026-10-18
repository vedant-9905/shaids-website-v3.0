"use client";

import React from "react";

/* =========================================================================
   1. THE TOP 3 EMBLEM BADGES (ACM, RADIANT SHIELD, SHAIDS SEAL)
   Matches the iconic header trio from the v3.0 banner
   ========================================================================= */

/** 1. ACM Diamond Badge with Cyan Wireframe & Glow */
export function AcmBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center group select-none ${className}`} title="ACM Student Chapter">
      <div className="absolute inset-0 bg-[#00d2ff]/20 blur-md rounded-full pointer-events-none group-hover:bg-[#00d2ff]/40 transition-colors" />
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 transition-transform duration-300 group-hover:scale-105">
        {/* Diamond frame */}
        <path
          d="M22 3 L41 22 L22 41 L3 22 Z"
          stroke="#00d2ff"
          strokeWidth="2.2"
          fill="#000000"
          strokeLinejoin="round"
        />
        {/* Inner thin diamond border */}
        <path
          d="M22 6.5 L37.5 22 L22 37.5 L6.5 22 Z"
          stroke="#00d2ff"
          strokeWidth="0.8"
          strokeOpacity="0.45"
          fill="none"
          strokeLinejoin="round"
        />
        {/* ACM text */}
        <text
          x="22"
          y="26"
          textAnchor="middle"
          fill="#00d2ff"
          fontSize="11"
          fontWeight="900"
          fontFamily="'Archivo', sans-serif"
          letterSpacing="0.5px"
        >
          acm
        </text>
        {/* Tiny corner bracket tick */}
        <path d="M29 19 L32 22 L29 25" stroke="#00d2ff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/** 2. Glowing Fiery Heraldic Shield Badge with 4-Point Star Cross */
export function ShieldBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center group select-none ${className}`} title="SHAIDS Flagship Crest">
      {/* Outer ambient radiant glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ff7700] via-[#ff2244] to-[#cc0055] blur-lg opacity-40 rounded-full pointer-events-none group-hover:opacity-75 transition-opacity" />
      <svg width="44" height="52" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 transition-transform duration-300 group-hover:scale-105">
        <defs>
          <linearGradient id="shield-grad" x1="22" y1="2" x2="22" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff9900" />
            <stop offset="42%" stopColor="#ff3311" />
            <stop offset="85%" stopColor="#d60044" />
            <stop offset="100%" stopColor="#990033" />
          </linearGradient>
          <linearGradient id="star-grad" x1="22" y1="14" x2="22" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffe6aa" />
          </linearGradient>
          <filter id="shield-inner-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#ffaa44" floodOpacity="0.7" />
          </filter>
        </defs>

        {/* Shield Body */}
        <path
          d="M22 2 C34 2 42 7 42 18 C42 34 26 48 22 50 C18 48 2 34 2 18 C2 7 10 2 22 2 Z"
          fill="url(#shield-grad)"
          stroke="#ffbb66"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Inner subtle rim */}
        <path
          d="M22 5 C32 5 39 9 39 18 C39 32 25 44 22 46 C19 44 5 32 5 18 C5 9 12 5 22 5 Z"
          stroke="#ffffff"
          strokeWidth="0.8"
          strokeOpacity="0.3"
          fill="none"
        />

        {/* Center 4-Point Star Gleam */}
        <path
          d="M22 13 Q22 24 11 24 Q22 24 22 35 Q22 24 33 24 Q22 24 22 13 Z"
          fill="url(#star-grad)"
          filter="url(#shield-inner-glow)"
        />

        {/* 4 Satellite Sparkle Dots */}
        <circle cx="16" cy="18" r="1" fill="#ffffff" opacity="0.85" />
        <circle cx="28" cy="18" r="1" fill="#ffffff" opacity="0.85" />
        <circle cx="16" cy="30" r="1" fill="#ffffff" opacity="0.85" />
        <circle cx="28" cy="30" r="1" fill="#ffffff" opacity="0.85" />
      </svg>
    </div>
  );
}

/** 3. Circular Official SHAIDS Department Crest Seal */
export function ShaidsSealBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center group select-none ${className}`} title="SHAIDS Department Council">
      <div className="absolute inset-0 bg-white/10 blur-md rounded-full pointer-events-none group-hover:bg-white/25 transition-colors" />
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 transition-transform duration-300 group-hover:scale-105">
        {/* Outer Circle */}
        <circle cx="22" cy="22" r="20" stroke="#ffffff" strokeWidth="1.6" strokeDasharray="2 1.5" fill="#000000" />
        <circle cx="22" cy="22" r="17" stroke="#ffffff" strokeWidth="0.9" fill="none" opacity="0.8" />
        
        {/* Center Brain / Circuit Core */}
        <path
          d="M17 17 C15.5 15.5 15.5 13.5 17 12 C18.5 10.5 21 11 22 12.5 C23 11 25.5 10.5 27 12 C28.5 13.5 28.5 15.5 27 17 C28.5 18.5 28.5 21 27 22.5 C27.5 24 26.5 26 25 26.5 C24 28 22.5 28 22 27 C21.5 28 20 28 19 26.5 C17.5 26 16.5 24 17 22.5 C15.5 21 15.5 18.5 17 17 Z"
          stroke="#ffffff"
          strokeWidth="1.2"
          fill="none"
          strokeLinejoin="round"
        />
        {/* Neural Synapses & Network Nodes */}
        <circle cx="19" cy="16" r="1" fill="#ffffff" />
        <circle cx="25" cy="16" r="1" fill="#ffffff" />
        <circle cx="22" cy="20" r="1.2" fill="#ffffff" />
        <circle cx="19" cy="23" r="1" fill="#ffffff" />
        <circle cx="25" cy="23" r="1" fill="#ffffff" />
        <line x1="19" y1="16" x2="22" y2="20" stroke="#ffffff" strokeWidth="0.8" opacity="0.7" />
        <line x1="25" y1="16" x2="22" y2="20" stroke="#ffffff" strokeWidth="0.8" opacity="0.7" />
        <line x1="19" y1="23" x2="22" y2="20" stroke="#ffffff" strokeWidth="0.8" opacity="0.7" />
        <line x1="25" y1="23" x2="22" y2="20" stroke="#ffffff" strokeWidth="0.8" opacity="0.7" />

        {/* Micro text: SHAIDS ACPCE */}
        <text x="22" y="34" textAnchor="middle" fill="#ffffff" fontSize="5.5" fontWeight="700" fontFamily="monospace" letterSpacing="0.8px" opacity="0.9">
          SHAIDS
        </text>
      </svg>
    </div>
  );
}

/* =========================================================================
   2. AUTHENTIC HAND-DRAWN TECH DOODLES (DESKTOP PC & LAPTOP + MICRO SKETCHES)
   Matches the exact white chalk line-art sketches under the hero title
   ========================================================================= */

/** Desktop PC Setup Sketch (Under "SH") with Monitor, Screen Hatching, Keyboard, Mouse */
export function DesktopPcIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      width="150"
      height="125"
      viewBox="0 0 150 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none drop-shadow-[0_4px_12px_rgba(255,255,255,0.08)] ${className}`}
      aria-hidden
    >
      {/* ── Monitor Bezel & Stand ── */}
      {/* Outer monitor frame with hand-drawn organic jitter */}
      <path
        d="M12 10 L108 8 L104 74 L8 76 Z"
        stroke="#ffffff"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner display bezel */}
      <path
        d="M17 14 L103 12 L99 69 L13 71 Z"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Screen diagonal hatch reflection scratch lines (//) */}
      <line x1="38" y1="22" x2="72" y2="56" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="58" y1="20" x2="84" y2="48" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="78" y1="22" x2="94" y2="38" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

      {/* Monitor Stand */}
      <path
        d="M48 76 L44 94 L68 94 L64 75"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Monitor Base Plate */}
      <ellipse cx="56" cy="95" rx="20" ry="4.5" stroke="#ffffff" strokeWidth="2.4" />

      {/* ── Keyboard with Key Grid ── */}
      <path
        d="M26 98 L114 96 L106 118 L18 120 Z"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Key rows */}
      <line x1="25" y1="103" x2="112" y2="101" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="23" y1="108" x2="110" y2="106" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="21" y1="113" x2="108" y2="111" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
      {/* Spacebar */}
      <rect x="48" y="114" width="28" height="3" rx="1" stroke="#ffffff" strokeWidth="1.2" />

      {/* ── Mouse & Mousepad ── */}
      {/* Mousepad */}
      <path
        d="M112 100 L144 98 L138 120 L108 121 Z"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Ergonomic Mouse */}
      <ellipse cx="125" cy="109" rx="8" ry="5.5" transform="rotate(-15 125 109)" stroke="#ffffff" strokeWidth="2.2" />
      <line x1="123" y1="104" x2="126" y2="109" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="124.5" cy="107" r="1" fill="#ffffff" />
    </svg>
  );
}

/** Open Laptop Sketch (Under "DS") with Angled Screen, Reflections, Keyboard & Trackpad */
export function LaptopIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      width="145"
      height="115"
      viewBox="0 0 145 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none drop-shadow-[0_4px_12px_rgba(255,255,255,0.08)] ${className}`}
      aria-hidden
    >
      {/* ── Display Screen (Angled Lid) ── */}
      {/* Outer screen shell */}
      <path
        d="M24 16 L118 14 L132 72 L10 74 Z"
        stroke="#ffffff"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner display area */}
      <path
        d="M28 20 L114 18 L126 68 L16 70 Z"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Screen diagonal hatch reflection scratch lines (//) */}
      <line x1="44" y1="28" x2="88" y2="58" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="68" y1="26" x2="104" y2="50" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="90" y1="28" x2="114" y2="44" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />

      {/* ── Keyboard Base ── */}
      <path
        d="M4 74 L138 72 L128 92 L0 94 Z"
        stroke="#ffffff"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Keyboard well */}
      <path
        d="M20 76 L122 75 L116 85 L14 86 Z"
        stroke="#ffffff"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Key grid rows */}
      <line x1="22" y1="79" x2="120" y2="78" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="18" y1="82" x2="118" y2="81" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 2" />
      
      {/* Trackpad */}
      <rect x="54" y="87" width="26" height="5" rx="1.5" stroke="#ffffff" strokeWidth="1.8" />
    </svg>
  );
}

/** Extra Floating Micro Tech Doodles: Code brackets, Terminal prompt, Coffee mug, Sparkles */
export function TechMicroDoodles() {
  return (
    <>
      {/* Terminal prompt `>_` (Top Left area) */}
      <div className="absolute top-[28%] left-[22%] pointer-events-none select-none opacity-40 sq-float-a sq-delay-1 hidden lg:block">
        <svg width="46" height="34" viewBox="0 0 46 34" fill="none">
          <path d="M6 8 L18 17 L6 26" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="22" y1="26" x2="38" y2="26" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Code Curly Brackets `{}` (Top Right area) */}
      <div className="absolute top-[26%] right-[22%] pointer-events-none select-none opacity-40 sq-float-c sq-delay-2 hidden lg:block">
        <svg width="48" height="36" viewBox="0 0 48 36" fill="none">
          <path d="M14 6 C8 6 6 10 6 18 C6 22 4 23 2 23 C4 23 6 24 6 28 C6 36 8 38 14 38" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M34 6 C40 6 42 10 42 18 C42 22 44 23 46 23 C44 23 42 24 42 28 C42 36 40 38 34 38" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* Four-Point Sparkle Star ✦ (Middle Left) */}
      <div className="absolute top-[48%] left-[16%] pointer-events-none select-none opacity-60 sq-float-d sq-delay-3 hidden md:block">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 0 Q11 11 0 11 Q11 11 11 22 Q11 11 22 11 Q11 11 11 0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Four-Point Sparkle Star ✦ (Middle Right) */}
      <div className="absolute top-[52%] right-[16%] pointer-events-none select-none opacity-60 sq-float-b sq-delay-4 hidden md:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 0 Q12 12 0 12 Q12 12 12 24 Q12 12 24 12 Q12 12 12 0 Z" fill="#ffffff" />
        </svg>
      </div>
    </>
  );
}

/* =========================================================================
   3. HIGH-FIDELITY 3D VOLUMETRIC NOODLE / TUBE CLUSTERS
   Engineered with cylindrical gradients, specular highlights, and drop shadows
   matching the joyful tactile 3D curves from the inspiration banner
   ========================================================================= */

/** Left Noodle Wing Cluster */
export function NoodleClusterLeft({ className = "" }: { className?: string }) {
  return (
    <svg
      width="380"
      height="820"
      viewBox="0 0 380 820"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden
    >
      <defs>
        {/* Soft cast shadow filter for 3D depth between overlapping noodles */}
        <filter id="noodle-shadow-left" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="-4" dy="14" stdDeviation="10" floodColor="#000000" floodOpacity="0.85" />
        </filter>

        {/* ── Volumetric Cylinder Gradients (Left Wing) ── */}
        
        {/* 1. Yellow Noodle Gradient */}
        <linearGradient id="noodle-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff266" />
          <stop offset="45%" stopColor="#ffd900" />
          <stop offset="85%" stopColor="#d49b00" />
          <stop offset="100%" stopColor="#8c6200" />
        </linearGradient>

        {/* 2. Red Noodle Gradient */}
        <linearGradient id="noodle-red" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff7b6b" />
          <stop offset="38%" stopColor="#f02416" />
          <stop offset="80%" stopColor="#b30900" />
          <stop offset="100%" stopColor="#6e0000" />
        </linearGradient>

        {/* 3. Royal Blue Noodle Gradient */}
        <linearGradient id="noodle-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6ea8ff" />
          <stop offset="35%" stopColor="#1a5fe6" />
          <stop offset="78%" stopColor="#0d3aa1" />
          <stop offset="100%" stopColor="#051c57" />
        </linearGradient>

        {/* 4. Sky Blue Noodle Gradient */}
        <linearGradient id="noodle-lblue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bde1ff" />
          <stop offset="40%" stopColor="#4da3f7" />
          <stop offset="82%" stopColor="#186fc9" />
          <stop offset="100%" stopColor="#0b3f78" />
        </linearGradient>

        {/* 5. Mint/Teal Noodle Gradient */}
        <linearGradient id="noodle-teal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#99fff7" />
          <stop offset="35%" stopColor="#1fe0d0" />
          <stop offset="78%" stopColor="#0ea699" />
          <stop offset="100%" stopColor="#065750" />
        </linearGradient>

        {/* 6. Green Noodle Gradient */}
        <linearGradient id="noodle-green" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#75efa0" />
          <stop offset="35%" stopColor="#1db355" />
          <stop offset="78%" stopColor="#0e7834" />
          <stop offset="100%" stopColor="#06421c" />
        </linearGradient>

        {/* 7. Bubblegum Pink Noodle Gradient */}
        <linearGradient id="noodle-pink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffb0cd" />
          <stop offset="35%" stopColor="#fa3c7f" />
          <stop offset="78%" stopColor="#bd1151" />
          <stop offset="100%" stopColor="#6e002a" />
        </linearGradient>

        {/* 8. Purple Noodle Gradient */}
        <linearGradient id="noodle-purple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c5a6ff" />
          <stop offset="35%" stopColor="#7c3aed" />
          <stop offset="78%" stopColor="#531db8" />
          <stop offset="100%" stopColor="#2e0970" />
        </linearGradient>
      </defs>

      {/* ── BACKGROUND LAYER: Sky Blue & Green Tubes ── */}
      <g filter="url(#noodle-shadow-left)">
        {/* Sky Blue curved loop */}
        <path
          d="M20 230 C80 180 180 220 160 310 C140 400 40 440 80 530 C110 600 200 620 220 700"
          stroke="url(#noodle-lblue)"
          strokeWidth="32"
          strokeLinecap="round"
          fill="none"
        />
        {/* Specular ridge for sky blue */}
        <path
          d="M20 230 C80 180 180 220 160 310 C140 400 40 440 80 530 C110 600 200 620 220 700"
          stroke="#ffffff"
          strokeWidth="8"
          strokeLinecap="round"
          strokeOpacity="0.45"
          fill="none"
        />

        {/* Forest Green serpentine loop */}
        <path
          d="M60 480 C140 460 220 540 170 630 C120 710 40 700 70 780 C90 830 160 840 200 810"
          stroke="url(#noodle-green)"
          strokeWidth="30"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M60 480 C140 460 220 540 170 630 C120 710 40 700 70 780 C90 830 160 840 200 810"
          stroke="#a3f7be"
          strokeWidth="7"
          strokeLinecap="round"
          strokeOpacity="0.5"
          fill="none"
        />
      </g>

      {/* ── MIDGROUND LAYER: Yellow Loop & Royal Blue Tube ── */}
      <g filter="url(#noodle-shadow-left)">
        {/* Canary Yellow top loop */}
        <path
          d="M40 20 C100 40 140 110 110 170 C80 220 20 200 40 140 C60 80 120 100 150 140"
          stroke="url(#noodle-yellow)"
          strokeWidth="34"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M40 20 C100 40 140 110 110 170 C80 220 20 200 40 140 C60 80 120 100 150 140"
          stroke="#ffffff"
          strokeWidth="9"
          strokeLinecap="round"
          strokeOpacity="0.65"
          fill="none"
        />

        {/* Royal Blue dramatic winding loop */}
        <path
          d="M30 330 C110 310 190 380 170 480 C150 580 40 560 60 670 C80 770 170 780 190 820"
          stroke="url(#noodle-blue)"
          strokeWidth="34"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M30 330 C110 310 190 380 170 480 C150 580 40 560 60 670 C80 770 170 780 190 820"
          stroke="#a6c8ff"
          strokeWidth="8"
          strokeLinecap="round"
          strokeOpacity="0.5"
          fill="none"
        />

        {/* Bubblegum Pink horizontal snake wave */}
        <path
          d="M10 590 C70 560 130 630 180 590 C230 550 250 620 280 660"
          stroke="url(#noodle-pink)"
          strokeWidth="28"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M10 590 C70 560 130 630 180 590 C230 550 250 620 280 660"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
          strokeOpacity="0.6"
          fill="none"
        />
      </g>

      {/* ── FOREGROUND LAYER: The Signature Vibrant RED & TEAL Tubes ── */}
      <g filter="url(#noodle-shadow-left)">
        {/* Giant Red sweeping noodle extending towards the center */}
        <path
          d="M60 80 C140 110 200 210 170 300 C130 400 30 360 50 490 C70 610 190 620 230 710"
          stroke="url(#noodle-red)"
          strokeWidth="38"
          strokeLinecap="round"
          fill="none"
        />
        {/* Specular ridge for red */}
        <path
          d="M60 80 C140 110 200 210 170 300 C130 400 30 360 50 490 C70 610 190 620 230 710"
          stroke="#ffbdb5"
          strokeWidth="9"
          strokeLinecap="round"
          strokeOpacity="0.75"
          fill="none"
        />

        {/* Mint / Neon Cyan curly flourish at bottom */}
        <path
          d="M20 740 C70 710 130 750 120 800 C110 830 50 820 40 780"
          stroke="url(#noodle-teal)"
          strokeWidth="30"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M20 740 C70 710 130 750 120 800 C110 830 50 820 40 780"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
          strokeOpacity="0.7"
          fill="none"
        />
      </g>
    </svg>
  );
}

/** Right Noodle Wing Cluster */
export function NoodleClusterRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="380"
      height="820"
      viewBox="0 0 380 820"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden
    >
      <defs>
        {/* Soft cast shadow filter for right wing depth */}
        <filter id="noodle-shadow-right" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="4" dy="14" stdDeviation="10" floodColor="#000000" floodOpacity="0.85" />
        </filter>

        {/* Gradients reuse the same color definitions */}
        <linearGradient id="noodle-teal-r" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#99fff7" />
          <stop offset="35%" stopColor="#1fe0d0" />
          <stop offset="78%" stopColor="#0ea699" />
          <stop offset="100%" stopColor="#065750" />
        </linearGradient>

        <linearGradient id="noodle-purple-r" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d3bdff" />
          <stop offset="35%" stopColor="#8b5cf6" />
          <stop offset="78%" stopColor="#5b21b6" />
          <stop offset="100%" stopColor="#2e0970" />
        </linearGradient>

        <linearGradient id="noodle-pink-r" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffb0cd" />
          <stop offset="35%" stopColor="#fa3c7f" />
          <stop offset="78%" stopColor="#bd1151" />
          <stop offset="100%" stopColor="#6e002a" />
        </linearGradient>

        <linearGradient id="noodle-green-r" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#75efa0" />
          <stop offset="35%" stopColor="#1db355" />
          <stop offset="78%" stopColor="#0e7834" />
          <stop offset="100%" stopColor="#06421c" />
        </linearGradient>

        <linearGradient id="noodle-blue-r" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7bb2ff" />
          <stop offset="35%" stopColor="#2563eb" />
          <stop offset="78%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0c194a" />
        </linearGradient>

        <linearGradient id="noodle-red-r" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff7b6b" />
          <stop offset="38%" stopColor="#f02416" />
          <stop offset="80%" stopColor="#b30900" />
          <stop offset="100%" stopColor="#6e0000" />
        </linearGradient>

        <linearGradient id="noodle-yellow-r" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff266" />
          <stop offset="45%" stopColor="#ffd900" />
          <stop offset="85%" stopColor="#d49b00" />
          <stop offset="100%" stopColor="#8c6200" />
        </linearGradient>
      </defs>

      {/* ── BACKGROUND LAYER: Emerald Green & Purple Tubes ── */}
      <g filter="url(#noodle-shadow-right)">
        {/* Green serpentine loop */}
        <path
          d="M340 180 C260 210 200 310 240 390 C270 470 360 480 320 570 C280 650 210 640 180 720"
          stroke="url(#noodle-green-r)"
          strokeWidth="30"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M340 180 C260 210 200 310 240 390 C270 470 360 480 320 570 C280 650 210 640 180 720"
          stroke="#b8ffd1"
          strokeWidth="7"
          strokeLinecap="round"
          strokeOpacity="0.5"
          fill="none"
        />

        {/* Violet / Purple tube looping in upper-mid quadrant */}
        <path
          d="M360 80 C290 60 230 140 250 230 C280 330 360 350 330 450 C300 530 220 540 190 610"
          stroke="url(#noodle-purple-r)"
          strokeWidth="32"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M360 80 C290 60 230 140 250 230 C280 330 360 350 330 450 C300 530 220 540 190 610"
          stroke="#ffffff"
          strokeWidth="8"
          strokeLinecap="round"
          strokeOpacity="0.55"
          fill="none"
        />
      </g>

      {/* ── MIDGROUND LAYER: Mint / Teal Top Loop & Bubblegum Pink Ribbon ── */}
      <g filter="url(#noodle-shadow-right)">
        {/* Mint / Cyan loop at top right */}
        <path
          d="M340 20 C270 40 230 110 260 170 C290 230 370 210 350 140 C330 80 270 90 240 140"
          stroke="url(#noodle-teal-r)"
          strokeWidth="34"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M340 20 C270 40 230 110 260 170 C290 230 370 210 350 140 C330 80 270 90 240 140"
          stroke="#ffffff"
          strokeWidth="9"
          strokeLinecap="round"
          strokeOpacity="0.7"
          fill="none"
        />

        {/* Pink curvy ribbon undulating down */}
        <path
          d="M370 260 C290 240 230 320 270 400 C310 470 380 470 350 560 C320 630 240 620 200 680"
          stroke="url(#noodle-pink-r)"
          strokeWidth="32"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M370 260 C290 240 230 320 270 400 C310 470 380 470 350 560 C320 630 240 620 200 680"
          stroke="#ffffff"
          strokeWidth="8"
          strokeLinecap="round"
          strokeOpacity="0.65"
          fill="none"
        />

        {/* Royal Blue loop in lower-mid area */}
        <path
          d="M360 440 C280 410 210 490 230 580 C250 670 350 670 330 750"
          stroke="url(#noodle-blue-r)"
          strokeWidth="34"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M360 440 C280 410 210 490 230 580 C250 670 350 670 330 750"
          stroke="#b8d5ff"
          strokeWidth="8"
          strokeLinecap="round"
          strokeOpacity="0.55"
          fill="none"
        />
      </g>

      {/* ── FOREGROUND LAYER: The Grand RED Tube & Canary Yellow Curl ── */}
      <g filter="url(#noodle-shadow-right)">
        {/* Bold Red noodle sweeping at bottom right */}
        <path
          d="M340 590 C260 560 180 640 220 730 C250 790 320 790 300 830"
          stroke="url(#noodle-red-r)"
          strokeWidth="38"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M340 590 C260 560 180 640 220 730 C250 790 320 790 300 830"
          stroke="#ffbdb5"
          strokeWidth="9"
          strokeLinecap="round"
          strokeOpacity="0.75"
          fill="none"
        />

        {/* Canary Yellow flourish at bottom right */}
        <path
          d="M370 730 C320 710 270 760 290 810 C310 840 370 830 360 780"
          stroke="url(#noodle-yellow-r)"
          strokeWidth="30"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M370 730 C320 710 270 760 290 810 C310 840 370 830 360 780"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
          strokeOpacity="0.7"
          fill="none"
        />
      </g>
    </svg>
  );
}
