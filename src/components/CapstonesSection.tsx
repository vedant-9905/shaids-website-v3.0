"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cpu, Eye, Calendar, TrendingUp, ArrowRight, Code } from "lucide-react";
import { DoodleHashtag, DoodleUnderline, DoodleSparkle, DoodleChalkCodeBrackets } from "./DoodleSVGs";

interface Capstone {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  team: string;
  award?: string;
  icon: any;
  color: string;
}

const CAPSTONES: Capstone[] = [
  {
    id: "maeg",
    tag: "01 // ROBOTICS & AUTONOMY",
    title: "M.A.E.G. Autonomous Rover",
    subtitle: "Multipurpose Autonomous Exploration Ground Vehicle",
    description: "Equipped with dual LiDAR mapping, ROS 2 Nav2 navigation stack, and real-time YOLOv8 obstacle avoidance for hazardous terrain exploration.",
    stack: ["ROS 2", "Python", "LiDAR", "Jetson Nano", "YOLOv8"],
    team: "Final Year Capstone Core",
    award: "★ BEST INNOVATION AWARD 2026",
    icon: Cpu,
    color: "#0055ff",
  },
  {
    id: "safesight",
    tag: "02 // COMPUTER VISION",
    title: "SafeSight Campus Sentinel",
    subtitle: "Real-time AI Surveillance & Anomaly Detection",
    description: "Automated real-time safety monitoring pipeline detecting anomalous crowd movement, unauthorized perimeter breaches, and emergency gestures.",
    stack: ["PyTorch", "OpenCV", "DeepSORT", "FastAPI", "React"],
    team: "Vision AI Research Cell",
    award: "★ SIH INTERNAL TOPPER",
    icon: Eye,
    color: "#af52de",
  },
  {
    id: "timetable-forge",
    tag: "03 // ALGORITHMIC OPTIMIZATION",
    title: "Timetable Forge OS",
    subtitle: "Constraint Satisfaction & Genetic Scheduling",
    description: "Automates institutional scheduling across 12 departments, 140 faculty members, and 48 laboratories with zero classroom or faculty collisions.",
    stack: ["Genetic Algorithm", "TypeScript", "Next.js", "PostgreSQL"],
    team: "Systems & Algorithms Cell",
    icon: Calendar,
    color: "#00f5a0",
  },
  {
    id: "dealsimulator",
    tag: "04 // QUANTITATIVE FINANCE",
    title: "DealSimulator Engine",
    subtitle: "High-Frequency Limit Order Book & Risk Model",
    description: "Simulates millisecond-level equity and crypto order books with reinforcement learning market makers and Monte Carlo Value-at-Risk modeling.",
    stack: ["Rust", "Python", "RLlib", "TimeScaleDB", "TradingView"],
    team: "Quantitative Finance Cell",
    award: "★ FINTECH HACKATHON FINALIST",
    icon: TrendingUp,
    color: "#ffe600",
  },
];

export default function CapstonesSection() {
  const [activeCapstoneId, setActiveCapstoneId] = useState<string>("maeg");
  const activeCapstone = CAPSTONES.find((c) => c.id === activeCapstoneId) || CAPSTONES[0];

  return (
    <section className="relative w-full bg-[#08080c] text-white px-6 sm:px-10 md:px-16 py-20 md:py-28 overflow-hidden border-t border-white/10">
      
      {/* Background Subtle Tech Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px"
        }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#00f5a0] font-mono text-[11px] font-bold uppercase tracking-wider mb-4 border border-white/15">
              <span className="w-2 h-2 rounded-full bg-[#00f5a0]" />
              ENGINEERED BY SHAIDS UNDERGRADUATES
            </div>
            <h2
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] uppercase leading-none font-sans"
            >
              FLAGSHIP CAPSTONES
              <br />
              <span className="text-[#ffe600] inline-flex items-center gap-2">
                & RESEARCH PROTOTYPES
                <DoodleSparkle size={36} color="#ffe600" className="inline-block" />
              </span>
            </h2>
          </div>

          <div className="hidden lg:block opacity-60">
            <DoodleChalkCodeBrackets className="w-20 h-auto" />
          </div>
        </div>

        {/* ── Interactive Capstone Showcase Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Project Selector Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {CAPSTONES.map((cap) => {
              const isActive = cap.id === activeCapstoneId;
              const IconComponent = cap.icon;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveCapstoneId(cap.id)}
                  className={`text-left p-5 sm:p-6 rounded-2xl md:rounded-3xl border transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? "bg-white/[0.08] border-white/30 shadow-xl"
                      : "bg-white/[0.02] hover:bg-white/[0.05] border-white/10"
                  }`}
                >
                  {isActive && (
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1.5"
                      style={{ backgroundColor: cap.color }}
                    />
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                        style={{
                          backgroundColor: `${cap.color}20`,
                          borderColor: `${cap.color}40`,
                          color: cap.color,
                        }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] font-bold text-white/50 uppercase tracking-wider block">
                          {cap.tag}
                        </span>
                        <h4 className="font-black text-lg sm:text-xl text-white tracking-tight">
                          {cap.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Capstone Deep Dive */}
          <div className="lg:col-span-7 bg-white/[0.04] border border-white/15 rounded-3xl md:rounded-[40px] p-8 sm:p-10 md:p-12 relative overflow-hidden shadow-2xl backdrop-blur-xl space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span 
                className="font-mono text-xs font-black uppercase px-3 py-1 rounded-full border"
                style={{
                  backgroundColor: `${activeCapstone.color}20`,
                  borderColor: `${activeCapstone.color}40`,
                  color: activeCapstone.color,
                }}
              >
                {activeCapstone.tag}
              </span>
              {activeCapstone.award && (
                <span className="font-mono text-[11px] font-black text-[#ffe600] bg-[#ffe600]/10 border border-[#ffe600]/30 px-3 py-1 rounded-full">
                  {activeCapstone.award}
                </span>
              )}
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                {activeCapstone.title}
              </h3>
              <div className="text-sm font-mono text-white/70 mt-1">
                {activeCapstone.subtitle}
              </div>
            </div>

            <p className="text-base text-white/80 leading-relaxed font-sans">
              {activeCapstone.description}
            </p>

            <div className="space-y-2 pt-2">
              <div className="font-mono text-xs font-bold text-white/50 uppercase tracking-wider">
                TECHNOLOGY STACK
              </div>
              <div className="flex flex-wrap gap-2">
                {activeCapstone.stack.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="font-mono text-xs font-bold px-3 py-1.5 rounded-xl bg-white/[0.06] border border-white/15 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-white/60">
                RESEARCH CELL: <strong className="text-white">{activeCapstone.team}</strong>
              </span>
              <Link 
                href="/about?tab=overview"
                className="font-bold text-[#ffe600] hover:underline flex items-center gap-1"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
