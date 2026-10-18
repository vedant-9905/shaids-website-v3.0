"use client";

import { useMemo, memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SphereProps {
  size: number;
  pitch: number;
  yaw: number;
  strokeWidth?: number;
}

// Precomputed Geodesic Mesh Topology (Static for all spheres)
const { BASE_VERTICES, BASE_SUB_FACES } = (() => {
  const phi = (1 + Math.sqrt(5)) / 2;
  const rawVertices: [number, number, number][] = [
    [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
    [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
    [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
  ];

  const allVertices = rawVertices.map(([x, y, z]) => {
    const len = Math.hypot(x, y, z);
    return [x / len, y / len, z / len] as [number, number, number];
  });

  const baseFaces = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
    [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
    [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]
  ];

  const midCache: { [key: string]: number } = {};
  function getMidpoint(i1: number, i2: number): number {
    const key = i1 < i2 ? `${i1}_${i2}` : `${i2}_${i1}`;
    if (midCache[key] !== undefined) return midCache[key];

    const v1 = allVertices[i1];
    const v2 = allVertices[i2];
    const mx = (v1[0] + v2[0]) / 2;
    const my = (v1[1] + v2[1]) / 2;
    const mz = (v1[2] + v2[2]) / 2;
    const len = Math.hypot(mx, my, mz);

    const midIdx = allVertices.length;
    allVertices.push([mx / len, my / len, mz / len]);
    midCache[key] = midIdx;
    return midIdx;
  }

  const subFaces: [number, number, number][] = [];
  baseFaces.forEach(([a, b, c]) => {
    const ab = getMidpoint(a, b);
    const bc = getMidpoint(b, c);
    const ca = getMidpoint(c, a);

    subFaces.push([a, ab, ca]);
    subFaces.push([b, bc, ab]);
    subFaces.push([c, ca, bc]);
    subFaces.push([ab, bc, ca]);
  });

  return { BASE_VERTICES: allVertices, BASE_SUB_FACES: subFaces };
})();

const SingleGeodesicSphere = memo(function SingleGeodesicSphere({ size, pitch, yaw, strokeWidth = 1.5 }: SphereProps) {
  const triangles = useMemo(() => {
    const cosP = Math.cos(pitch), sinP = Math.sin(pitch);
    const cosY = Math.cos(yaw), sinY = Math.sin(yaw);

    const center = size / 2;
    const radius = size * 0.44;

    const rotatedVertices = BASE_VERTICES.map(([x, y, z]) => {
      const x1 = x * cosY + z * sinY;
      const y1 = y;
      const z1 = -x * sinY + z * cosY;

      const x2 = x1;
      const y2 = y1 * cosP - z1 * sinP;
      const z2 = y1 * sinP + z1 * cosP;

      return {
        x2,
        y2,
        z2,
        px: (center + x2 * radius).toFixed(1),
        py: (center - y2 * radius).toFixed(1)
      };
    });

    const frontFaces = BASE_SUB_FACES.filter(([a, b, c]) => {
      const vA = rotatedVertices[a];
      const vB = rotatedVertices[b];
      const vC = rotatedVertices[c];

      const crossZ = (parseFloat(vB.px) - parseFloat(vA.px)) * (parseFloat(vC.py) - parseFloat(vA.py)) - 
                     (parseFloat(vB.py) - parseFloat(vA.py)) * (parseFloat(vC.px) - parseFloat(vA.px));
      
      const avgZ = (vA.z2 + vB.z2 + vC.z2) / 3;
      return crossZ < 0 && avgZ > -0.15;
    });

    return frontFaces.map(([a, b, c]) => {
      const vA = rotatedVertices[a];
      const vB = rotatedVertices[b];
      const vC = rotatedVertices[c];
      return `${vA.px},${vA.py} ${vB.px},${vB.py} ${vC.px},${vC.py}`;
    });
  }, [size, pitch, yaw]);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      shapeRendering="geometricPrecision"
    >
      <g stroke="#ffffff" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" fill="none">
        {triangles.map((pts, idx) => (
          <polygon key={idx} points={pts} />
        ))}
      </g>
    </svg>
  );
});

// Hoisted Static Sphere Constellation Data
const SPHERE_CLUSTER = [
  // Sphere 1: Far-Right Edge (143px - Smooth Uni-Directional Continuous 360° Spin)
  {
    id: 1, size: 143, pitch: 0.20, yaw: -0.40, opacity: 0.85, style: "bottom-[115px] right-[-60px]", strokeWidth: 1.3,
    floatY: [0, 7, -4, 5, 0], floatX: [0, -6, 3, -5, 0], duration: 9.4, delay: 0.1,
    spin: [0, 360], spinDuration: 18.0, spinType: "loop", spinEase: "linear"
  },

  // Sphere 2: Mid-Right Upper Flank (170px Big Sphere - Uni-Directional Counter-Clockwise with Speed Variations)
  {
    id: 2, size: 170, pitch: -0.35, yaw: 0.25, opacity: 0.85, style: "bottom-[255px] right-[20px]", strokeWidth: 1.4,
    floatY: [0, -8, 5, -6, 0], floatX: [0, 7, -4, 6, 0], duration: 11.2, delay: 0.25,
    spin: [0, -100, -170, -280, -360], spinDuration: 20.0, spinType: "loop", spinEase: "easeInOut"
  },

  // Sphere 3: Main Center Anchor (300px Main Giant Anchor - Uni-Directional Clockwise with Speed Variations)
  {
    id: 3, size: 300, pitch: 0.35, yaw: 0.22, opacity: 0.90, style: "bottom-[95px] right-[165px]", strokeWidth: 1.7,
    floatY: [0, 5, -7, 4, 0], floatX: [0, -4, 6, -3, 0], duration: 13.8, delay: 0.4,
    spin: [0, 90, 160, 270, 360], spinDuration: 28.0, spinType: "loop", spinEase: "easeInOut"
  },

  // Sphere 5: Mid-Left Companion (180px Big Sphere - Uni-Directional Counter-Clockwise with Speed Variations)
  {
    id: 5, size: 180, pitch: 0.45, yaw: -0.30, opacity: 0.85, style: "bottom-[-5px] right-[415px]", strokeWidth: 1.4,
    floatY: [0, -7, 6, -4, 0], floatX: [0, 8, -6, 5, 0], duration: 10.6, delay: 0.55,
    spin: [0, -110, -180, -290, -360], spinDuration: 24.0, spinType: "loop", spinEase: "easeInOut"
  },

  // Sphere 6: Left Stream End (120px - Gentle Natural Tilt Sway)
  {
    id: 6, size: 120, pitch: -0.25, yaw: 0.45, opacity: 0.80, style: "bottom-[-35px] right-[610px]", strokeWidth: 1.3,
    floatY: [0, 8, -6, 5, 0], floatX: [0, -8, 7, -5, 0], duration: 12.5, delay: 0.7,
    spin: [0, 12, -8, 14, 0], spinDuration: 11.0, spinType: "mirror", spinEase: "easeInOut"
  },

  // Sphere 7: Interlocking Lower Left (94px - Smooth Uni-Directional Continuous Counter-Clockwise Spin)
  {
    id: 7, size: 94, pitch: 0.15, yaw: -0.30, opacity: 0.85, style: "bottom-[-20px] right-[285px]", strokeWidth: 1.2,
    floatY: [0, 6, -5, 4, 0], floatX: [0, -5, 4, -3, 0], duration: 8.7, delay: 0.85,
    spin: [0, -360], spinDuration: 16.0, spinType: "loop", spinEase: "linear"
  },

  // Sphere 8: Lower Right Anchor (180px Big Sphere - Uni-Directional Clockwise with Speed Variations)
  {
    id: 8, size: 180, pitch: -0.20, yaw: 0.35, opacity: 0.85, style: "bottom-[-25px] right-[60px]", strokeWidth: 1.4,
    floatY: [0, -7, 8, -5, 0], floatX: [0, 6, -6, 4, 0], duration: 10.1, delay: 0.6,
    spin: [0, 80, 190, 260, 360], spinDuration: 22.0, spinType: "loop", spinEase: "easeInOut"
  },

  // Sphere 9: Top-Right Apex Micro Sphere (66px - Orbital Sway)
  {
    id: 9, size: 66, pitch: 0.25, yaw: -0.20, opacity: 0.85, style: "bottom-[385px] right-[190px]", strokeWidth: 1.1,
    floatY: [0, 6, -4, 5, 0], floatX: [0, -6, 5, -3, 0], duration: 7.9, delay: 0.3,
    spin: [0, -15, 10, -12, 0], spinDuration: 8.5, spinType: "mirror", spinEase: "easeInOut"
  },

  // Sphere 10: Mid-Right Micro Satellite (47px - Smooth Uni-Directional Clockwise Spin)
  {
    id: 10, size: 47, pitch: -0.15, yaw: 0.30, opacity: 0.85, style: "bottom-[180px] right-[115px]", strokeWidth: 1.0,
    floatY: [0, -5, 4, -3, 0], floatX: [0, 5, -4, 3, 0], duration: 7.3, delay: 0.75,
    spin: [0, 360], spinDuration: 12.0, spinType: "loop", spinEase: "linear"
  },
];

// Hoisted Static Floating Logos Data
const FLOATING_LOGOS = [
  {
    id: "shaids-logo",
    src: "/images/shaids-logo.png",
    alt: "SHAIDS Emblem",
    size: 192,
    style: "bottom-[149px] right-[219px]",
    opacity: 1.0,
    floatY: [0, 5, -7, 4, 0],
    floatX: [0, -4, 6, -3, 0],
    duration: 13.8,
    delay: 0.4,
    glow: "drop-shadow-[0_0_10px_rgba(0,0,0,0.45)]"
  },
  {
    id: "acpce-logo",
    src: "/images/acpce-logo.png",
    alt: "ACPCE Institutional Logo",
    size: 95,
    style: "bottom-[292.5px] right-[57.5px]",
    opacity: 1.0,
    floatY: [0, -8, 5, -6, 0],
    floatX: [0, 7, -4, 6, 0],
    duration: 11.2,
    delay: 0.25,
    glow: "drop-shadow-[0_0_8px_rgba(0,0,0,0.4)]"
  }
];

export default function GeodesicVectorBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Geodesic Sphere Constellation */}
      {SPHERE_CLUSTER.map((s) => (
        <motion.div
          key={s.id}
          className={`absolute ${s.style} flex items-center justify-center will-change-transform transform-gpu`}
          initial={{ opacity: 0, x: 30, y: -20, scale: 0.95 }}
          animate={{
            opacity: s.opacity,
            x: s.floatX,
            y: s.floatY,
            rotate: s.spin,
            scale: [1, 1.015, 0.985, 1],
          }}
          transition={{
            opacity: { duration: 1.2, delay: s.delay, ease: "easeOut" },
            scale: { duration: s.duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: s.delay },
            rotate: {
              duration: s.spinDuration,
              repeat: Infinity,
              repeatType: s.spinType as "loop" | "reverse" | "mirror",
              ease: s.spinEase as "linear" | "easeInOut" | "easeIn" | "easeOut",
              delay: s.delay,
            },
            x: { duration: s.duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: s.delay },
            y: { duration: s.duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: s.delay },
          }}
        >
          <SingleGeodesicSphere
            size={s.size}
            pitch={s.pitch}
            yaw={s.yaw}
            strokeWidth={s.strokeWidth}
          />
        </motion.div>
      ))}

      {/* 2. Floating Vector Logos (Upright, Zero Rotation, Concentric Float Parity) */}
      {FLOATING_LOGOS.map((logo) => (
        <motion.div
          key={logo.id}
          className={`absolute ${logo.style} flex items-center justify-center`}
          initial={{ opacity: 0, x: 30, y: -20, scale: 0.95 }}
          animate={{
            opacity: logo.opacity || 1.0,
            x: logo.floatX,
            y: logo.floatY,
            rotate: 0,
            scale: [1, 1.015, 0.985, 1],
          }}
          transition={{
            opacity: { duration: 1.2, delay: logo.delay, ease: "easeOut" },
            scale: { duration: logo.duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: logo.delay },
            x: { duration: logo.duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: logo.delay },
            y: { duration: logo.duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: logo.delay },
          }}
        >
          <div 
            className={`relative flex items-center justify-center ${logo.glow}`}
            style={{ width: logo.size, height: logo.size }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.size}
              height={logo.size}
              className="w-full h-full object-contain opacity-100 select-none pointer-events-none"
              priority
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
