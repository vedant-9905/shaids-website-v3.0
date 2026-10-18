"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface NarrativeItem {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  accentColor?: string;
  isHeroProposition?: boolean;
}

const NARRATIVE_ITEMS: NarrativeItem[] = [
  {
    id: "propositions",
    eyebrow: "PROPOSITIONS",
    title: "The Platform for Intelligence & Data Science",
    description: "Established in 2021 with an expanded 120 intake, SHAIDS at ACPCE empowers tomorrow's engineers with high-performance computational infrastructure, specialized laboratory curriculum, and student-driven innovation.",
    accentColor: "#e63022",
    isHeroProposition: true,
  },
  {
    id: "leadership",
    eyebrow: "LEADERSHIP",
    title: "Built by Proven Academic Pioneers",
    description: "Led by institutional visionary Principal Dr. Sawata R. Deore (BE, ME, PhD Tech.) and HoD Mrs. Shilpali Bansu, combining rigorous university curriculum with hackathon-tested execution and active student council mentorship.",
    accentColor: "#1a55cc",
  },
  {
    id: "operations",
    eyebrow: "OPERATIONS",
    title: "Compute as an Operating System",
    description: "The department runs dedicated machine learning clusters, modern GPU labs, and collaborative technical cells in-house, allowing projects to be built with speed, precision, and operational rigor.",
    accentColor: "#22d6c8",
  },
  {
    id: "capstones",
    eyebrow: "INNOVATION",
    title: "Production-Grade Capstones as an Advantage",
    description: "From autonomous systems (MAEG) and vision security (SafeSight) to distributed algorithmic optimizers (Timetable Forge, DealSimulator), students engineer real-world solutions deployed across campus and industry.",
    accentColor: "#f06090",
  },
  {
    id: "excellence",
    eyebrow: "TRANSPARENCY",
    title: "Committed to Measurable Mastery",
    description: "We provide proven academic excellence through national Smart India Hackathon triumphs, university topper ranks, and gold-standard SWAYAM NPTEL elite certifications across student and faculty cohorts.",
    accentColor: "#f0d020",
  },
  {
    id: "collaboration",
    eyebrow: "COLLABORATION",
    title: "Partnered with the Best",
    description: "Publishers of the annual departmental research magazine SIGMOID, collaborating with IEEE chapters, industry experts, and open-source communities to access advanced knowledge and modern industry workflows.",
    accentColor: "#6040cc",
  },
];

export default function FeatureNarrativeSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background stays pure black for v3.0 — subtle grain texture variation via opacity
  const sectionBrightness = useTransform(
    scrollYProgress,
    [0, 0.5, 1.0],
    ["brightness(1)", "brightness(1.04)", "brightness(1)"]
  );

  return (
    <motion.section
      ref={containerRef}
      style={{ filter: sectionBrightness }}
      className="relative w-full bg-black overflow-hidden"
      data-theme="dark"
    >
      {/* Top divider with pin */}
      <div className="w-full pt-8 md:pt-10 relative z-10">
        <div className="w-full relative border-t border-dashed border-white/10">
          <div className="w-full px-4 md:px-7 relative">
            <div className="absolute top-[-2.5px] left-4 md:left-7 w-[5px] h-[5px] bg-[#e63022]" />
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
              className={`relative ${
                isFirst
                  ? "pt-8 md:pt-12 pb-16 md:pb-20"
                  : "py-16 md:py-20 border-t border-dashed border-white/10 pt-20"
              }`}
            >
              {!isFirst && (
                <div
                  className="absolute top-[-2.5px] left-0 w-[5px] h-[5px]"
                  style={{ backgroundColor: accent }}
                />
              )}

              {/* Eyebrow */}
              <div className="mb-5">
                <span
                  className="font-mono text-[11px] uppercase font-bold tracking-[2px]"
                  style={{ color: accent }}
                >
                  {item.eyebrow}
                </span>
              </div>

              {/* Content Grid */}
              {item.isHeroProposition ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start w-full">
                  <div className="md:col-span-5 max-w-[440px]">
                    <h2
                      className="text-white"
                      style={{
                        fontFamily: `'Archivo', sans-serif`,
                        fontSize: "clamp(40px, 5vw, 76px)",
                        fontWeight: 900,
                        letterSpacing: "-2.5px",
                        lineHeight: "0.92"
                      }}
                    >
                      The Platform for
                      <br />
                      Intelligence &
                      <br />
                      Data Science
                    </h2>
                  </div>
                  <div className="md:col-span-6 md:col-start-7">
                    {item.description && (
                      <p className="text-[15px] md:text-[16px] text-white/55 leading-[1.6] font-normal tracking-tight mt-1 md:mt-2 max-w-[540px]">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start w-full">
                  <div className="md:col-span-5 max-w-[440px]">
                    <h3
                      className="text-white"
                      style={{
                        fontFamily: `'Archivo', sans-serif`,
                        fontSize: "clamp(26px, 3.5vw, 50px)",
                        fontWeight: 700,
                        letterSpacing: "-1.4px",
                        lineHeight: "1.06"
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6 md:col-start-7">
                    {item.description && (
                      <p className="text-[14px] md:text-[15px] text-white/50 leading-[1.65] font-normal tracking-tight max-w-[540px]">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom guideline */}
      <div className="w-full relative border-b border-dashed border-white/10 pb-1">
        <div className="absolute bottom-[-2.5px] left-4 md:left-7 w-[5px] h-[5px] bg-[#e63022]" />
        <div className="absolute bottom-[-2.5px] right-4 md:right-7 w-[5px] h-[5px] bg-[#1a55cc]" />
      </div>
    </motion.section>
  );
}