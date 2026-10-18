"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    tag: "01 // COMMITTEE MOMENTS",
    title: "Core Committee Hackathon Night ⚡",
    subtitle: "High energy, caffeine & late-night code deployment",
    gradient: "from-[#051c3d] via-[#09356d] to-[#0b4b9b]",
    accentColor: "#0e76ff",
  },
  {
    id: 2,
    tag: "02 // TEAM SHAIDS 2026",
    title: "Vectors Tech Fest Crew 🎉",
    subtitle: "The visionaries & organizers behind Vectors 2026",
    gradient: "from-[#082247] via-[#0c4080] to-[#125ebf]",
    accentColor: "#00f0ff",
  },
  {
    id: 3,
    tag: "03 // BEYOND THE LAB",
    title: "AI Dept Outings & Celebrations 🍕",
    subtitle: "Work hard, party harder — the SHAIDS student family",
    gradient: "from-[#041630] via-[#072d5c] to-[#0a468c]",
    accentColor: "#3b82f6",
  },
  {
    id: 4,
    tag: "04 // BEHIND THE CODE",
    title: "Interactive Workshops & Mentorship 🚀",
    subtitle: "Connecting peers, alumni & industry leaders",
    gradient: "from-[#061e42] via-[#0b3c78] to-[#1055ab]",
    accentColor: "#60a5fa",
  },
];

export default function HeroImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (typeof document !== "undefined" && document.visibilityState !== "visible") {
        return;
      }
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // Morphs every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-[307px] -mt-[55px] -mb-[60px] p-0 flex flex-col justify-between border border-dashed border-white/25 bg-[#031126]/60 backdrop-blur-md overflow-hidden group select-none">
      {/* Dashed Background Grid Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:16px_16px]" />

      {/* Morphing Slide Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 0.97, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.03, filter: "blur(6px)" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute inset-0 p-5 flex flex-col justify-between bg-gradient-to-br ${currentSlide.gradient}`}
        >
          {/* Top Metadata Row */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-mono tracking-[1.2px] text-white/80 font-semibold px-2 py-0.5 bg-black/30 border border-white/10 rounded-none uppercase">
              {currentSlide.tag}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: currentSlide.accentColor }} />
              <span className="text-[10px] font-mono text-white/60 tracking-wider">LIVE</span>
            </div>
          </div>

          {/* Center Image Placeholder Visual Content */}
          <div className="z-10 my-auto py-1">
            <div className="text-lg md:text-xl font-bold tracking-tight text-white font-sans drop-shadow-sm">
              {currentSlide.title}
            </div>
            <div className="text-xs font-mono text-white/75 mt-1 tracking-wide flex items-center gap-2">
              <span className="w-1 h-3 inline-block" style={{ backgroundColor: currentSlide.accentColor }} />
              {currentSlide.subtitle}
            </div>
          </div>

          {/* Morphing Wave SVG Motif */}
          <div className="absolute right-3 bottom-3 opacity-25 pointer-events-none z-0">
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
              <path
                d="M0 45 Q30 15 60 30 T120 15"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white"
              />
              <path
                d="M0 55 Q30 25 60 40 T120 25"
                stroke={currentSlide.accentColor}
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
            </svg>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
