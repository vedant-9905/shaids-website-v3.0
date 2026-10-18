"use client";

import React from "react";

/** Hand-drawn chunky neon lime hashtag `#` */
export function DoodleHashtag({ className = "", color = "#ccff00" }: { className?: string; color?: string }) {
  return (
    <svg
      width="78"
      height="88"
      viewBox="0 0 78 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none drop-shadow-[0_2px_8px_rgba(204,255,0,0.4)] ${className}`}
      aria-hidden
    >
      {/* Vertical bars with organic hand-drawn slant and thickness */}
      <path
        d="M26 6 L16 82"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58 4 L48 80"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Horizontal cross bars */}
      <path
        d="M6 32 L72 26"
        stroke={color}
        strokeWidth="10.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 60 L70 54"
        stroke={color}
        strokeWidth="10.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Hand-drawn curved loop arrow curving down (from Image 1 top right) */
export function DoodleCurvedArrowDown({ className = "", color = "#ccff00" }: { className?: string; color?: string }) {
  return (
    <svg
      width="84"
      height="100"
      viewBox="0 0 84 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none drop-shadow-[0_2px_8px_rgba(204,255,0,0.4)] ${className}`}
      aria-hidden
    >
      {/* Looping stem */}
      <path
        d="M12 90 C10 40 40 10 65 14 C85 18 80 50 56 68 C38 82 28 88 18 90"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Arrowhead */}
      <path
        d="M36 78 L14 90 L20 66"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Hand-drawn arrow curving up-right (from Image 1 bottom left) */
export function DoodleCurvedArrowUp({ className = "", color = "#ccff00" }: { className?: string; color?: string }) {
  return (
    <svg
      width="90"
      height="95"
      viewBox="0 0 90 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none drop-shadow-[0_2px_8px_rgba(204,255,0,0.4)] ${className}`}
      aria-hidden
    >
      {/* S-curve stem */}
      <path
        d="M20 78 C30 35 48 40 68 22"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Arrowhead */}
      <path
        d="M48 18 L72 20 L68 46"
        stroke={color}
        strokeWidth="9.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Circular Rotating Stamp Badge with Arrow in center (Directly from Image 1) */
export function CircularStampBadge({
  text = "★ GET STARTED FOR FREE ★ ACPCE AI & DS ",
  className = "",
  size = 130,
}: {
  text?: string;
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={`relative flex items-center justify-center select-none group cursor-pointer ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer Rotating Text Circle */}
      <div className="absolute inset-0 animate-[spin_16s_linear_infinite] group-hover:animate-[spin_8s_linear_infinite]">
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <defs>
            <path
              id="stampCirclePath"
              d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text fontSize="8.2" fontWeight="900" fill="#ccff00" letterSpacing="2.2px" fontFamily="'Archivo', sans-serif">
            <textPath href="#stampCirclePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Bright Lime Circle with Arrow */}
      <div className="relative w-[56%] h-[56%] rounded-full bg-[#ccff00] flex items-center justify-center shadow-[0_0_24px_rgba(204,255,0,0.5)] transition-transform duration-300 group-hover:scale-110">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M6 22 L20 8 M10 8 L20 8 L20 18"
            stroke="#000000"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

/** Hand-drawn Connector Arrow between Bento Cards (from Image 1 bottom cards) */
export function DoodleConnectorArrow({ className = "", color = "#000000" }: { className?: string; color?: string }) {
  return (
    <svg
      width="54"
      height="38"
      viewBox="0 0 54 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden
    >
      <path
        d="M6 8 C16 30 32 32 44 14"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M34 14 L46 12 L44 24"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Hand-drawn Organic Squiggle Wave (from Image 2 doodle patterns) */
export function DoodleSquiggleWave({
  className = "",
  color = "#ccff00",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      width="160"
      height="60"
      viewBox="0 0 160 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden
    >
      <path
        d="M6 35 C20 10 38 10 52 35 C66 60 84 60 98 35 C112 10 130 10 144 35 C150 45 156 45 158 40"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Hand-drawn Underline Swoosh */
export function DoodleUnderline({ className = "", color = "#ccff00" }: { className?: string; color?: string }) {
  return (
    <svg
      width="220"
      height="24"
      viewBox="0 0 220 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden
    >
      <path
        d="M4 14 C48 6 120 4 214 16"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M28 20 C80 14 140 12 196 22"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}

/** Four-Point Hand-Drawn Sparkle Star */
export function DoodleSparkle({ className = "", color = "#ccff00", size = 28 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden
    >
      <path
        d="M14 2 Q14 14 2 14 Q14 14 14 26 Q14 14 26 14 Q14 14 14 2 Z"
        fill={color}
      />
    </svg>
  );
}

/** Hand-drawn Chalk Desktop PC with keyboard & mouse (from user brand banner) */
export function DoodleChalkDesktop({ className = "", color = "#ffffff" }: { className?: string; color?: string }) {
  return (
    <svg
      width="140"
      height="120"
      viewBox="0 0 140 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none drop-shadow-[0_2px_12px_rgba(255,255,255,0.3)] ${className}`}
      aria-hidden
    >
      {/* Monitor frame */}
      <rect
        x="15"
        y="10"
        width="82"
        height="56"
        rx="5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner screen bezel */}
      <rect
        x="22"
        y="16"
        width="68"
        height="44"
        rx="2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Screen glare lines */}
      <line x1="38" y1="22" x2="28" y2="48" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="22" x2="40" y2="48" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="62" y1="22" x2="52" y2="48" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Monitor stand neck */}
      <path d="M52 66 L50 78 M60 66 L62 78" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Monitor stand base */}
      <path d="M38 78 C48 76 64 76 74 78" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      {/* Keyboard */}
      <path
        d="M24 88 L88 84 L84 104 L18 108 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Keyboard key grid */}
      <line x1="26" y1="94" x2="85" y2="90" stroke={color} strokeWidth="1.8" />
      <line x1="23" y1="100" x2="82" y2="96" stroke={color} strokeWidth="1.8" />
      <line x1="36" y1="92" x2="33" y2="105" stroke={color} strokeWidth="1.8" />
      <line x1="48" y1="91" x2="45" y2="104" stroke={color} strokeWidth="1.8" />
      <line x1="60" y1="90" x2="57" y2="103" stroke={color} strokeWidth="1.8" />
      <line x1="72" y1="89" x2="69" y2="102" stroke={color} strokeWidth="1.8" />
      {/* Mousepad */}
      <ellipse cx="108" cy="98" rx="18" ry="12" stroke={color} strokeWidth="2" />
      {/* Mouse */}
      <ellipse cx="108" cy="97" rx="8" ry="6" stroke={color} strokeWidth="2.5" />
      <line x1="108" y1="91" x2="108" y2="96" stroke={color} strokeWidth="2" />
    </svg>
  );
}

/** Hand-drawn Chalk Laptop with screen glare (from user brand banner) */
export function DoodleChalkLaptop({ className = "", color = "#ffffff" }: { className?: string; color?: string }) {
  return (
    <svg
      width="130"
      height="105"
      viewBox="0 0 130 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none drop-shadow-[0_2px_12px_rgba(255,255,255,0.3)] ${className}`}
      aria-hidden
    >
      {/* Laptop screen lid (tilted perspective) */}
      <path
        d="M32 18 L94 28 L84 68 L24 58 Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner display bezel */}
      <path
        d="M36 24 L88 32 L80 63 L29 55 Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Screen diagonal glare lines */}
      <line x1="52" y1="28" x2="44" y2="52" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="64" y1="30" x2="56" y2="54" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="76" y1="32" x2="68" y2="56" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Laptop base deck */}
      <path
        d="M24 58 L84 68 L106 88 L14 76 Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Keyboard recessed area */}
      <path
        d="M28 62 L82 70 L94 80 L22 72 Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Trackpad */}
      <path
        d="M44 76 L64 78 L60 84 L40 82 Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Hand-drawn Chalk Code Brackets `{ }` */
export function DoodleChalkCodeBrackets({ className = "", color = "#ffffff" }: { className?: string; color?: string }) {
  return (
    <svg
      width="80"
      height="60"
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden
    >
      <path
        d="M26 12 C18 12 16 18 16 24 C16 28 10 30 6 30 C10 30 16 32 16 36 C16 42 18 48 26 48"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M54 12 C62 12 64 18 64 24 C64 28 70 30 74 30 C70 30 64 32 64 36 C64 42 62 48 54 48"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="44" y1="16" x2="36" y2="44" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

