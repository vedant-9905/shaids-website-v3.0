"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cpu, Eye, Calendar, TrendingUp, ArrowRight } from "lucide-react";
import { DoodleHashtag, DoodleUnderline } from "./DoodleSVGs";

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
    color: "#0038ff",
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
    color: "#7c3aed",
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
    color: "#059669",
  },
  {
    id: "dealsimulator",
    tag: "04 // QUANTITATIVE FINANCE",
    title: "DealSimulator Engine",
    subtitle: "High-Frequency Algorithmic Market Simulator",
    description: "Simulates limit order book dynamics, stochastic volatility models, and automated execution algorithms with sub-millisecond backtesting latency.",
    stack: ["C++20", "Rust", "WebSockets", "Python", "TimeScaleDB"],
    team: "FinTech & Data Lab",
    award: "★ RESEARCH PAPER PUBLISHED",
    icon: TrendingUp,
    color: "#d97706",
  },
];

export default function CapstonesSection() {
  const [activeCapstone, setActiveCapstone] = useState<string>("maeg");

  return (
    <section className="relative w-full bg-[#f8fafd] text-black px-6 sm:px-10 md:px-16 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ccff00] text-black font-mono text-[11px] font-black uppercase tracking-wider mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-black" />
              STUDENT RESEARCH CAPSTONES
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] uppercase leading-none font-sans">
              ENGINEERED FOR
              <br />
              <span className="text-[#0038ff] relative inline-block">
                REAL IMPACT
                <div className="absolute -bottom-3 left-0 w-full pointer-events-none">
                  <DoodleUnderline color="#ccff00" className="w-full h-auto" />
                </div>
              </span>
            </h2>
          </div>

          <p className="text-black/60 max-w-[440px] text-sm md:text-base font-medium leading-relaxed">
            Every year, AI & Data Science students build production-grade systems solving national challenges, published in international symposiums and deployed on campus.
          </p>
        </div>

        {/* ── Capstone Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {CAPSTONES.map((capstone) => {
            const Icon = capstone.icon;
            const isSelected = activeCapstone === capstone.id;

            return (
              <div
                key={capstone.id}
                onClick={() => setActiveCapstone(capstone.id)}
                className={`bg-white rounded-3xl p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? "border-[#0038ff] shadow-[0_16px_40px_rgba(0,56,255,0.12)] -translate-y-1"
                    : "border-black/8 hover:border-black/20 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[10px] font-bold tracking-wider text-black/50 uppercase">
                      {capstone.tag}
                    </span>
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${capstone.color}15`, color: capstone.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-black leading-tight uppercase font-sans">
                    {capstone.title}
                  </h3>
                  <div className="text-sm font-bold text-[#0038ff] mt-1 font-sans">
                    {capstone.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-black/65 font-medium leading-relaxed mt-3.5">
                    {capstone.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {capstone.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[#f0f4f9] rounded-lg font-mono text-[10px] font-bold text-black/70 uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Award / Team Footer */}
                <div className="mt-8 pt-5 border-t border-black/8 flex items-center justify-between">
                  {capstone.award ? (
                    <span className="px-3 py-1 bg-[#ccff00] text-black font-mono text-[10px] font-black uppercase rounded-full shadow-sm">
                      {capstone.award}
                    </span>
                  ) : (
                    <span className="font-mono text-[11px] font-bold text-black/50 uppercase">
                      {capstone.team}
                    </span>
                  )}

                  <Link
                    href="/resources"
                    className="w-8 h-8 rounded-full bg-black/5 hover:bg-[#0038ff] hover:text-white flex items-center justify-center transition-colors text-black"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
