"use client";

import React from "react";

/**
 * 3D Tubular Candy Spaghetti Squiggles
 * Fully vector SVG implementation with cylindrical gradient lighting,
 * drop shadows, and glossy highlight strokes for genuine 3D volume.
 */

export function TubularSquigglesLeft({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 650"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden
    >
      <defs>
        {/* Soft realistic drop shadow for 3D depth */}
        <filter id="tube-shadow-left" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="-2" dy="8" stdDeviation="7" floodColor="#000000" floodOpacity="0.85" />
        </filter>

        {/* ── 3D Cylindrical Gradients ── */}
        {/* Yellow Tube */}
        <linearGradient id="tube-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C99700" />
          <stop offset="25%" stopColor="#FFE600" />
          <stop offset="50%" stopColor="#FFF9B3" />
          <stop offset="75%" stopColor="#FFE600" />
          <stop offset="100%" stopColor="#8A6700" />
        </linearGradient>

        {/* Coral Red Tube */}
        <linearGradient id="tube-red" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9C1710" />
          <stop offset="25%" stopColor="#FF3B30" />
          <stop offset="50%" stopColor="#FFA6A1" />
          <stop offset="75%" stopColor="#FF3B30" />
          <stop offset="100%" stopColor="#6E0F0A" />
        </linearGradient>

        {/* Electric Blue Tube */}
        <linearGradient id="tube-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#002E99" />
          <stop offset="25%" stopColor="#0055FF" />
          <stop offset="50%" stopColor="#8FC0FF" />
          <stop offset="75%" stopColor="#0055FF" />
          <stop offset="100%" stopColor="#001C66" />
        </linearGradient>

        {/* Mint / Lime Green Tube */}
        <linearGradient id="tube-mint" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E8039" />
          <stop offset="25%" stopColor="#34C759" />
          <stop offset="50%" stopColor="#A3F2B8" />
          <stop offset="75%" stopColor="#34C759" />
          <stop offset="100%" stopColor="#125424" />
        </linearGradient>

        {/* Candy Pink Tube */}
        <linearGradient id="tube-pink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A31230" />
          <stop offset="25%" stopColor="#FF2D55" />
          <stop offset="50%" stopColor="#FFB3C2" />
          <stop offset="75%" stopColor="#FF2D55" />
          <stop offset="100%" stopColor="#700A1F" />
        </linearGradient>

        {/* Cyan Tube */}
        <linearGradient id="tube-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#177099" />
          <stop offset="25%" stopColor="#32ADE6" />
          <stop offset="50%" stopColor="#B3E8FF" />
          <stop offset="75%" stopColor="#32ADE6" />
          <stop offset="100%" stopColor="#0E4864" />
        </linearGradient>
      </defs>

      <g filter="url(#tube-shadow-left)">
        {/* ── 1. Yellow Tube (Top Curl) ── */}
        <path
          d="M -15 15 C 35 15, 65 35, 60 70 C 55 105, 10 100, 15 65 C 20 30, 50 15, 80 40 C 95 55, 95 85, 75 110 C 55 135, 15 140, -10 120"
          stroke="url(#tube-yellow)"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Yellow Highlight Specular */}
        <path
          d="M -15 13 C 35 13, 63 33, 58 68 C 53 103, 12 98, 17 63 C 22 28, 50 13, 78 38 C 93 53, 93 83, 73 108 C 53 133, 15 138, -10 118"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* ── 2. Coral Red Tube (Upper Loop & Plunge) ── */}
        <path
          d="M -10 160 C 40 150, 110 160, 120 205 C 130 250, 70 270, 45 235 C 25 200, 70 170, 115 185 C 160 200, 155 260, 105 295 C 65 325, 20 310, -15 285"
          stroke="url(#tube-red)"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Coral Red Highlight Specular */}
        <path
          d="M -10 157 C 40 147, 108 157, 118 202 C 128 247, 72 267, 47 232 C 27 197, 70 167, 113 182 C 158 197, 153 257, 103 292 C 65 322, 20 307, -15 282"
          stroke="#FFFFFF"
          strokeWidth="4.5"
          strokeLinecap="round"
          opacity="0.45"
        />

        {/* ── 3. Electric Blue Tube (Mid-Level Undulation) ── */}
        <path
          d="M -20 320 C 30 310, 85 330, 95 375 C 105 420, 40 435, 25 395 C 10 355, 65 335, 110 360 C 145 380, 135 440, 85 465 C 45 485, -10 475, -25 450"
          stroke="url(#tube-blue)"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Electric Blue Highlight Specular */}
        <path
          d="M -20 317 C 30 307, 83 327, 93 372 C 103 417, 42 432, 27 392 C 12 352, 65 332, 108 357 C 143 377, 133 437, 83 462 C 45 482, -10 472, -25 447"
          stroke="#FFFFFF"
          strokeWidth="4.5"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* ── 4. Mint Green Tube (Lower Loop-de-Loop) ── */}
        <path
          d="M -15 470 C 45 460, 95 480, 90 525 C 85 570, 30 560, 35 515 C 40 470, 95 480, 115 520 C 130 550, 110 595, 60 610 C 20 620, -15 605, -20 580"
          stroke="url(#tube-mint)"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Mint Green Highlight Specular */}
        <path
          d="M -15 467 C 45 457, 93 477, 88 522 C 83 567, 32 557, 37 512 C 42 467, 95 477, 113 517 C 128 547, 108 592, 58 607 C 20 617, -15 602, -20 577"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.45"
        />

        {/* ── 5. Candy Pink Tube (Bottom Corner Flourish) ── */}
        <path
          d="M -10 560 C 25 550, 70 565, 80 600 C 90 635, 45 660, 10 645 C -15 635, -20 605, 5 590 C 30 575, 75 610, 85 640"
          stroke="url(#tube-pink)"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Candy Pink Highlight */}
        <path
          d="M -10 558 C 25 548, 68 563, 78 598 C 88 633, 45 658, 10 643 C -15 633, -20 603, 5 588 C 30 573, 73 608, 83 638"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.45"
        />

        {/* ── 6. Cyan Small Accent Loop ── */}
        <path
          d="M 5 260 C 25 245, 55 255, 60 280 C 65 305, 30 320, 10 305 C -5 295, 0 270, 25 270 C 45 270, 60 295, 55 315"
          stroke="url(#tube-cyan)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function TubularSquigglesRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 650"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden
    >
      <defs>
        {/* Soft realistic drop shadow for 3D depth */}
        <filter id="tube-shadow-right" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="2" dy="8" stdDeviation="7" floodColor="#000000" floodOpacity="0.85" />
        </filter>

        {/* Mint / Lime Green */}
        <linearGradient id="tube-r-mint" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E8039" />
          <stop offset="25%" stopColor="#34C759" />
          <stop offset="50%" stopColor="#A3F2B8" />
          <stop offset="75%" stopColor="#34C759" />
          <stop offset="100%" stopColor="#125424" />
        </linearGradient>

        {/* Purple Tube */}
        <linearGradient id="tube-r-purple" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6B2391" />
          <stop offset="25%" stopColor="#AF52DE" />
          <stop offset="50%" stopColor="#E2BEF7" />
          <stop offset="75%" stopColor="#AF52DE" />
          <stop offset="100%" stopColor="#4A1566" />
        </linearGradient>

        {/* Hot Pink Tube */}
        <linearGradient id="tube-r-pink" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A31230" />
          <stop offset="25%" stopColor="#FF2D55" />
          <stop offset="50%" stopColor="#FFB3C2" />
          <stop offset="75%" stopColor="#FF2D55" />
          <stop offset="100%" stopColor="#700A1F" />
        </linearGradient>

        {/* Sky Blue Tube */}
        <linearGradient id="tube-r-sky" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0044CC" />
          <stop offset="25%" stopColor="#0066FF" />
          <stop offset="50%" stopColor="#8FC0FF" />
          <stop offset="75%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#002980" />
        </linearGradient>

        {/* Coral Red (The Iconic Center Loop) */}
        <linearGradient id="tube-r-red" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9C1710" />
          <stop offset="25%" stopColor="#FF3B30" />
          <stop offset="50%" stopColor="#FFA6A1" />
          <stop offset="75%" stopColor="#FF3B30" />
          <stop offset="100%" stopColor="#6E0F0A" />
        </linearGradient>

        {/* Cyber Yellow */}
        <linearGradient id="tube-r-yellow" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C99700" />
          <stop offset="25%" stopColor="#FFE600" />
          <stop offset="50%" stopColor="#FFF9B3" />
          <stop offset="75%" stopColor="#FFE600" />
          <stop offset="100%" stopColor="#8A6700" />
        </linearGradient>
      </defs>

      <g filter="url(#tube-shadow-right)">
        {/* ── 1. Mint Green Top Loop ── */}
        <path
          d="M 255 10 C 205 10, 175 35, 180 70 C 185 105, 230 95, 225 60 C 220 25, 185 20, 160 45 C 140 65, 145 100, 175 120 C 205 140, 245 130, 255 105"
          stroke="url(#tube-r-mint)"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Mint Highlight */}
        <path
          d="M 255 8 C 205 8, 177 33, 182 68 C 187 103, 228 93, 223 58 C 218 23, 185 18, 162 43 C 142 63, 147 98, 177 118 C 205 138, 245 128, 255 103"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* ── 2. Purple & Pink Wavy Ribbon ── */}
        <path
          d="M 250 140 C 210 135, 160 150, 150 190 C 140 230, 195 240, 205 205 C 215 170, 170 160, 135 185 C 105 205, 115 250, 160 270 C 200 290, 240 280, 255 255"
          stroke="url(#tube-r-purple)"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Purple Highlight */}
        <path
          d="M 250 137 C 210 132, 162 147, 152 187 C 142 227, 193 237, 203 202 C 213 167, 170 157, 137 182 C 107 202, 117 247, 162 267 C 200 287, 240 277, 255 252"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.45"
        />

        {/* Hot Pink Undulating Coil */}
        <path
          d="M 260 200 C 215 195, 165 215, 175 255 C 185 295, 235 285, 225 245 C 215 205, 160 220, 140 260 C 120 300, 150 345, 195 355 C 235 365, 255 340, 260 320"
          stroke="url(#tube-r-pink)"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Hot Pink Highlight */}
        <path
          d="M 260 197 C 215 192, 167 212, 177 252 C 187 292, 233 282, 223 242 C 213 202, 160 217, 142 257 C 122 297, 152 342, 197 352 C 235 362, 255 337, 260 317"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* ── 3. Sky Blue Tube ── */}
        <path
          d="M 255 310 C 215 305, 170 325, 160 365 C 150 405, 205 415, 215 380 C 225 345, 180 335, 145 360 C 115 380, 120 425, 165 445 C 205 465, 245 455, 255 430"
          stroke="url(#tube-r-sky)"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Sky Blue Highlight */}
        <path
          d="M 255 307 C 215 302, 172 322, 162 362 C 152 402, 203 412, 213 377 C 223 342, 180 332, 147 357 C 117 377, 122 422, 167 442 C 205 462, 245 452, 255 427"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* ── 4. The Iconic Reaching Coral Red Noodle Loop ── */}
        {/* This reaches dramatically in toward the center just like the reference banner! */}
        <path
          d="M 250 410 C 195 400, 135 410, 85 450 C 40 485, 35 540, 75 565 C 115 590, 160 555, 165 510 C 170 465, 115 445, 80 475 C 50 500, 60 550, 95 575 C 135 605, 195 595, 235 560 C 255 540, 260 510, 260 480"
          stroke="url(#tube-r-red)"
          strokeWidth="28"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Coral Red Highlight */}
        <path
          d="M 250 406 C 195 396, 133 406, 83 446 C 38 481, 33 536, 73 561 C 113 586, 158 551, 163 506 C 168 461, 115 441, 82 471 C 52 496, 62 546, 97 571 C 137 601, 195 591, 235 556 C 255 536, 260 506, 260 476"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.45"
        />

        {/* ── 5. Cyber Yellow Bottom Accent ── */}
        <path
          d="M 250 560 C 220 550, 185 570, 180 605 C 175 640, 215 660, 240 645"
          stroke="url(#tube-r-yellow)"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Yellow Highlight */}
        <path
          d="M 250 557 C 220 547, 187 567, 182 602 C 177 637, 215 657, 240 642"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}

/**
 * Single Standalone 3D Tubular S-Curve Accent for placement anywhere on the page
 */
export function StandaloneTubularSquiggle({
  className = "",
  color = "red",
  size = 120
}: {
  className?: string;
  color?: "red" | "yellow" | "blue" | "mint" | "pink" | "purple";
  size?: number;
}) {
  const gradientId = `standalone-tube-${color}`;

  const colorsMap = {
    red: { dark: "#9C1710", mid: "#FF3B30", light: "#FFA6A1", deep: "#6E0F0A" },
    yellow: { dark: "#C99700", mid: "#FFE600", light: "#FFF9B3", deep: "#8A6700" },
    blue: { dark: "#002E99", mid: "#0055FF", light: "#8FC0FF", deep: "#001C66" },
    mint: { dark: "#1E8039", mid: "#34C759", light: "#A3F2B8", deep: "#125424" },
    pink: { dark: "#A31230", mid: "#FF2D55", light: "#FFB3C2", deep: "#700A1F" },
    purple: { dark: "#6B2391", mid: "#AF52DE", light: "#E2BEF7", deep: "#4A1566" },
  };

  const c = colorsMap[color] || colorsMap.red;

  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden
    >
      <defs>
        <filter id={`${gradientId}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000000" floodOpacity="0.75" />
        </filter>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c.dark} />
          <stop offset="25%" stopColor={c.mid} />
          <stop offset="50%" stopColor={c.light} />
          <stop offset="75%" stopColor={c.mid} />
          <stop offset="100%" stopColor={c.deep} />
        </linearGradient>
      </defs>

      <g filter={`url(#${gradientId}-shadow)`}>
        <path
          d="M 15 65 C 35 15, 80 15, 95 55 C 110 95, 145 95, 150 55"
          stroke={`url(#${gradientId})`}
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 15 62 C 35 12, 80 12, 95 52 C 110 92, 145 92, 150 52"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.45"
        />
      </g>
    </svg>
  );
}
