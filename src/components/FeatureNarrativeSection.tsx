"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface NarrativeItem {
  id: string;
  eyebrow: string;
  tagline: string;
  title: string;
  description?: string;
  accentColor: string;
  isHeroProposition?: boolean;
  stat?: string;
  statLabel?: string;
  iconType: "terminal" | "brain" | "server" | "rocket" | "trophy" | "network";
}

const NARRATIVE_ITEMS: NarrativeItem[] = [
  {
    id: "propositions",
    eyebrow: "01 // CORE PROPOSITION",
    tagline: "AUTONOMOUS & COMPUTATIONAL SYSTEMS",
    title: "The Platform for Intelligence & Data Science",
    description: "Established in 2021 with an expanded 120 intake, SHAIDS at ACPCE empowers tomorrow's engineers with high-performance computational infrastructure, specialized laboratory curriculum, and student-driven innovation.",
    accentColor: "#e63022",
    isHeroProposition: true,
    stat: "120",
    statLabel: "ANNUAL SEATS",
    iconType: "terminal",
  },
  {
    id: "leadership",
    eyebrow: "02 // ACADEMIC LEADERSHIP",
    tagline: "VISIONARY RESEARCH DIRECTORS",
    title: "Built by Proven Academic Pioneers",
    description: "Led by institutional visionary Principal Dr. Sawata R. Deore (BE, ME, PhD Tech.) and HoD Mrs. Shilpali Bansu, combining rigorous university curriculum with hackathon-tested execution and active student council mentorship.",
    accentColor: "#1a55cc",
    stat: "24+",
    statLabel: "FACULTY & MENTORS",
    iconType: "brain",
  },
  {
    id: "operations",
    eyebrow: "03 // HIGH PERFORMANCE COMPUTE",
    tagline: "NEXT-GEN GPU CLUSTERS",
    title: "Compute as an Operating System",
    description: "The department runs dedicated machine learning clusters, modern GPU labs, and collaborative technical cells in-house, allowing projects to be built with speed, precision, and operational rigor.",
    accentColor: "#22d6c8",
    stat: "4+",
    statLabel: "SPECIALIZED LABS",
    iconType: "server",
  },
  {
    id: "capstones",
    eyebrow: "04 // RESEARCH & CAPSTONES",
    tagline: "PRODUCTION-READY SYSTEMS",
    title: "Production-Grade Capstones as an Advantage",
    description: "From autonomous systems (MAEG) and vision security (SafeSight) to distributed algorithmic optimizers (Timetable Forge, DealSimulator), students engineer real-world solutions deployed across campus and industry.",
    accentColor: "#f06090",
    stat: "35+",
    statLabel: "ACTIVE CAPSTONES",
    iconType: "rocket",
  },
  {
    id: "excellence",
    eyebrow: "05 // MEASURABLE MASTERY",
    tagline: "SIH & NPTEL TRIUMPHS",
    title: "Committed to Measurable Mastery",
    description: "We provide proven academic excellence through national Smart India Hackathon triumphs, university topper ranks, and gold-standard SWAYAM NPTEL elite certifications across student and faculty cohorts.",
    accentColor: "#f0d020",
    stat: "TOP 1%",
    statLabel: "GOLD CERTIFICATIONS",
    iconType: "trophy",
  },
  {
    id: "collaboration",
    eyebrow: "06 // ECOSYSTEM & NETWORKING",
    tagline: "SIGMOID RESEARCH JOURNAL",
    title: "Partnered with the Best",
    description: "Publishers of the annual departmental research magazine SIGMOID, collaborating with IEEE chapters, ACM student initiatives, and open-source communities to access advanced knowledge and modern industry workflows.",
    accentColor: "#7c3aed",
    stat: "VOL. 03",
    statLabel: "SIGMOID ANNUAL",
    iconType: "network",
  },
];

/* Hand-drawn chalk doodle icons matching the 3.0 theme */
function NarrativeIcon({ type, accent }: { type: NarrativeItem["iconType"]; accent: string }) {
  switch (type) {
    case "terminal":
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
          <rect x="2" y="4" width="24" height="20" rx="3" stroke={accent} strokeWidth="1.8" />
          <path d="M6 10 L11 14 L6 18" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="14" y1="18" x2="21" y2="18" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "brain":
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
          <circle cx="8" cy="10" r="3" stroke={accent} strokeWidth="1.8" />
          <circle cx="20" cy="10" r="3" stroke={accent} strokeWidth="1.8" />
          <circle cx="14" cy="18" r="3" stroke={accent} strokeWidth="1.8" />
          <line x1="10" y1="12" x2="12" y2="16" stroke={accent} strokeWidth="1.4" />
          <line x1="18" y1="12" x2="16" y2="16" stroke={accent} strokeWidth="1.4" />
          <line x1="11" y1="10" x2="17" y2="10" stroke={accent} strokeWidth="1.4" strokeDasharray="2 2" />
        </svg>
      );
    case "server":
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
          <rect x="3" y="4" width="22" height="6" rx="1.5" stroke={accent} strokeWidth="1.8" />
          <rect x="3" y="11" width="22" height="6" rx="1.5" stroke={accent} strokeWidth="1.8" />
          <rect x="3" y="18" width="22" height="6" rx="1.5" stroke={accent} strokeWidth="1.8" />
          <circle cx="6" cy="7" r="1" fill={accent} />
          <circle cx="6" cy="14" r="1" fill={accent} />
          <circle cx="6" cy="21" r="1" fill={accent} />
        </svg>
      );
    case "rocket":
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
          <path d="M14 2 C18 6 22 12 21 19 L14 16 L7 19 C6 12 10 6 14 2 Z" stroke={accent} strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="14" cy="10" r="2" stroke={accent} strokeWidth="1.4" />
          <line x1="14" y1="19" x2="14" y2="25" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "trophy":
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
          <path d="M6 5 L22 5 C22 13 18 16 14 17 C10 16 6 13 6 5 Z" stroke={accent} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M6 8 C3 8 2 11 3 13 C4 15 6 14 6 13" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22 8 C25 8 26 11 25 13 C24 15 22 14 22 13" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 17 L14 22 M9 24 L19 24" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "network":
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
          <circle cx="14" cy="6" r="3" stroke={accent} strokeWidth="1.8" />
          <circle cx="6" cy="21" r="3" stroke={accent} strokeWidth="1.8" />
          <circle cx="22" cy="21" r="3" stroke={accent} strokeWidth="1.8" />
          <line x1="12" y1="8" x2="8" y2="19" stroke={accent} strokeWidth="1.4" />
          <line x1="16" y1="8" x2="20" y2="19" stroke={accent} strokeWidth="1.4" />
          <line x1="9" y1="21" x2="19" y2="21" stroke={accent} strokeWidth="1.4" strokeDasharray="2 2" />
        </svg>
      );
  }
}

export default function FeatureNarrativeSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const sectionBrightness = useTransform(
    scrollYProgress,
    [0, 0.5, 1.0],
    ["brightness(1)", "brightness(1.05)", "brightness(1)"]
  );

  return (
    <motion.section
      ref={containerRef}
      style={{ filter: sectionBrightness }}
      className="relative w-full bg-[#000000] overflow-hidden"
      data-theme="dark"
    >
      {/* Top divider with accent pin */}
      <div className="w-full pt-8 md:pt-12 relative z-10">
        <div className="w-full relative border-t border-dashed border-white/12">
          <div className="w-full px-4 md:px-7 relative">
            <div className="absolute top-[-2.5px] left-4 md:left-7 w-[5px] h-[5px] bg-[#e63022]" />
            <div className="absolute top-[-2.5px] right-4 md:right-7 w-[5px] h-[5px] bg-[#00d2ff]" />
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-7 pb-16 md:pb-32 relative flex flex-col">
        {NARRATIVE_ITEMS.map((item, index) => {
          const isFirst = index === 0;
          const accent = item.accentColor || "#e63022";

          return (
            <div
              key={item.id}
              className={`relative group ${
                isFirst
                  ? "pt-8 md:pt-14 pb-16 md:pb-24"
                  : "py-16 md:py-24 border-t border-dashed border-white/12"
              }`}
            >
              {!isFirst && (
                <div
                  className="absolute top-[-2.5px] left-0 w-[5px] h-[5px] transition-transform duration-300 group-hover:scale-150"
                  style={{ backgroundColor: accent }}
                />
              )}

              {/* Eyebrow & Live Tagline */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-[11px] uppercase font-bold tracking-[2px]"
                    style={{ color: accent }}
                  >
                    {item.eyebrow}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="font-mono text-[10px] tracking-[1.5px] uppercase text-white/40">
                    {item.tagline}
                  </span>
                </div>

                {/* Hand-drawn Icon */}
                <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                  <NarrativeIcon type={item.iconType} accent={accent} />
                </div>
              </div>

              {/* Content Grid */}
              {item.isHeroProposition ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start w-full">
                  <div className="md:col-span-6 max-w-[500px]">
                    <h2
                      className="text-white"
                      style={{
                        fontFamily: `'Archivo', sans-serif`,
                        fontSize: "clamp(38px, 5.2vw, 76px)",
                        fontWeight: 900,
                        letterSpacing: "-2.5px",
                        lineHeight: "0.92"
                      }}
                    >
                      The Platform for
                      <br />
                      Intelligence &
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
                        Data Science
                      </span>
                    </h2>
                  </div>

                  <div className="md:col-span-6 flex flex-col justify-between h-full pt-1">
                    {item.description && (
                      <p className="text-[15px] md:text-[17px] text-white/60 leading-[1.65] font-normal tracking-tight max-w-[540px]">
                        {item.description}
                      </p>
                    )}

                    {/* Stat callout badge */}
                    <div className="flex items-baseline gap-4 mt-6 pt-6 border-t border-dashed border-white/10">
                      <span
                        className="text-3xl md:text-4xl font-black tracking-tight"
                        style={{ color: accent }}
                      >
                        {item.stat}
                      </span>
                      <span className="text-[11px] font-mono tracking-[1.5px] text-white/50 uppercase">
                        {item.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start w-full">
                  <div className="md:col-span-6 max-w-[500px]">
                    <h3
                      className="text-white"
                      style={{
                        fontFamily: `'Archivo', sans-serif`,
                        fontSize: "clamp(26px, 3.6vw, 48px)",
                        fontWeight: 700,
                        letterSpacing: "-1.4px",
                        lineHeight: "1.08"
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div className="md:col-span-6 flex flex-col justify-between pt-1">
                    {item.description && (
                      <p className="text-[14px] md:text-[15.5px] text-white/55 leading-[1.7] font-normal tracking-tight max-w-[540px]">
                        {item.description}
                      </p>
                    )}

                    {/* Stat callout badge */}
                    <div className="flex items-baseline gap-4 mt-6 pt-5 border-t border-dashed border-white/10">
                      <span
                        className="text-2xl md:text-3xl font-black tracking-tight"
                        style={{ color: accent }}
                      >
                        {item.stat}
                      </span>
                      <span className="text-[11px] font-mono tracking-[1.5px] text-white/50 uppercase">
                        {item.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom decorative guideline */}
      <div className="w-full relative border-b border-dashed border-white/12 pb-1">
        <div className="absolute bottom-[-2.5px] left-4 md:left-7 w-[5px] h-[5px] bg-[#e63022]" />
        <div className="absolute bottom-[-2.5px] right-4 md:right-7 w-[5px] h-[5px] bg-[#1a55cc]" />
      </div>
    </motion.section>
  );
}