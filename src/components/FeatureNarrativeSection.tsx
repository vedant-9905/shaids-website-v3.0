"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface NarrativeItem {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  isHeroProposition?: boolean;
}

const NARRATIVE_ITEMS: NarrativeItem[] = [
  {
    id: "propositions",
    eyebrow: "PROPOSITIONS",
    title: "The Platform for Intelligence & Data Science",
    description: "Established in 2021 with an expanded 120 intake, SHAIDS at ACPCE empowers tomorrow's engineers with high-performance computational infrastructure, specialized laboratory curriculum, and student-driven innovation.",
    isHeroProposition: true,
  },
  {
    id: "leadership",
    eyebrow: "LEADERSHIP",
    title: "Built by Proven Academic Pioneers",
    description: "Led by institutional visionary Principal Dr. Sawata R. Deore (BE, ME, PhD Tech.) and HoD Mrs. Shilpali Bansu, combining rigorous university curriculum with hackathon-tested execution and active student council mentorship.",
  },
  {
    id: "operations",
    eyebrow: "OPERATIONS",
    title: "Compute as an Operating System",
    description: "The department runs dedicated machine learning clusters, modern GPU labs, and collaborative technical cells in-house, allowing projects to be built with speed, precision, and operational rigor.",
  },
  {
    id: "capstones",
    eyebrow: "INNOVATION",
    title: "Production-Grade Capstones as an Advantage",
    description: "From autonomous systems (MAEG) and vision security (SafeSight) to distributed algorithmic optimizers (Timetable Forge, DealSimulator), students engineer real-world solutions deployed across campus and industry.",
  },
  {
    id: "excellence",
    eyebrow: "TRANSPARENCY",
    title: "Committed to Measurable Mastery",
    description: "We provide proven academic excellence through national Smart India Hackathon triumphs, university topper ranks, and gold-standard SWAYAM NPTEL elite certifications across student and faculty cohorts.",
  },
  {
    id: "collaboration",
    eyebrow: "COLLABORATION",
    title: "Partnered with the Best",
    description: "Publishers of the annual departmental research magazine SIGMOID, collaborating with IEEE chapters, industry experts, and open-source communities to access advanced knowledge and modern industry workflows.",
  },
];

export default function FeatureNarrativeSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamic continuous background gradient interpolation matching screenshots 1 -> 2 -> 3 -> 4
  // Starting and holding at #eaf1f7 for flawless white-shade continuity with the hero section
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.38, 0.68, 0.95],
    [
      "#eaf1f7", // Identical seamless white-ice shade matching hero bottom
      "#eaf1f7", // Holds clean match through the propositions item
      "#1e548f", // Rich cobalt blue (Screenshot 2)
      "#0d294e", // Deep midnight navy (Screenshot 3)
      "#01040a"  // Pure Obsidian black (Screenshot 4)
    ]
  );

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor: bgColor }}
      className="relative w-full transition-colors duration-200 overflow-hidden"
    >
      {/* Top spacing lowering the divider line by ~25px for breathing room below hero text */}
      <div className="w-full pt-8 md:pt-10 relative z-10">
        <div className="w-full relative border-t border-dashed border-black/15">
          <div className="w-full px-4 md:px-7 relative">
            <div className="absolute top-[-3px] left-4 md:left-7 w-[6px] h-[6px] bg-[#0e76ff]" />
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-7 pb-16 md:pb-24 relative flex flex-col">
        {NARRATIVE_ITEMS.map((item, index) => {
          const isFirst = index === 0;

          return (
            <div
              key={item.id}
              className={`relative ${
                isFirst
                  ? "pt-8 md:pt-10 pb-16 md:pb-24"
                  : "py-16 md:py-24 border-t border-dashed border-white/15 pt-20"
              }`}
            >
              {/* Precision Pin Marker on Separator Line */}
              {!isFirst && (
                <div className="absolute top-[-3px] left-0 w-[6px] h-[6px] bg-[#0e76ff]" />
              )}

              {/* Eyebrow Label */}
              <div className="mb-4">
                <span
                  className="font-mono text-[11px] md:text-[12px] uppercase font-bold tracking-[2px]"
                  style={{
                    color: isFirst ? "#1d4ed8" : "#94a3b8",
                  }}
                >
                  {item.eyebrow}
                </span>
              </div>

              {/* Content Grid: Headline on left, Description on right */}
              {item.isHeroProposition ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start w-full">
                  <div className="md:col-span-5 max-w-[440px]">
                    <h2
                      className="text-[#0a0a0a] font-sans"
                      style={{
                        fontFamily: `'Archivo', sans-serif`,
                        fontSize: "clamp(44px, 5.2vw, 76px)",
                        fontWeight: 400,
                        letterSpacing: "-2.8px",
                        lineHeight: "0.93"
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
                      <p className="text-[15px] md:text-[16px] text-[#262626] leading-[1.5] font-normal tracking-tight mt-1 md:mt-2 max-w-[540px]">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start w-full">
                  {/* Left: Section Headline */}
                  <div className="md:col-span-5 max-w-[440px]">
                    <h3 className="font-sans text-3xl sm:text-4xl md:text-[44px] font-normal tracking-[-1.6px] leading-[1.05] text-white">
                      {item.title}
                    </h3>
                  </div>

                  {/* Right: Section Description Paragraph */}
                  <div className="md:col-span-6 md:col-start-7">
                    {item.description && (
                      <p className="text-[14.5px] md:text-[15.5px] text-[#cbd5e1] leading-[1.55] font-normal tracking-tight max-w-[540px]">
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

      {/* Bottom Guideline with Precision Pin Corners */}
      <div className="w-full relative border-b border-dashed border-white/20 pb-1">
        <div className="absolute bottom-[-3px] left-4 md:left-7 w-[6px] h-[6px] bg-[#0e76ff]" />
        <div className="absolute bottom-[-3px] right-4 md:right-7 w-[6px] h-[6px] bg-[#0e76ff]" />
      </div>
    </motion.section>
  );
}
