"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  CircularStampBadge,
  DoodleConnectorArrow,
  DoodleSparkle,
} from "./DoodleSVGs";
import { ArrowRight, Sparkles, Terminal, Cpu } from "lucide-react";

export default function HeroV3Section() {
  return (
    <section className="relative w-full bg-[#000000] text-white overflow-hidden pt-28 md:pt-36">
      
      {/* ── Background Subtle Tech Grid ── */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px"
        }}
      />

      {/* ── Ambient Candy Gradient Backdrops ── */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#ff3b30] blur-[150px] rounded-full pointer-events-none opacity-20" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#0055ff] blur-[150px] rounded-full pointer-events-none opacity-25" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-[#ffe600] blur-[170px] rounded-full pointer-events-none opacity-15" />

      {/* ── Center Content Area ── */}
      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20 z-20">
        
        {/* Floating Sparkles in the air */}
        <div className="absolute top-4 left-[12%] hidden md:block opacity-90 animate-pulse">
          <DoodleSparkle size={26} color="#ffe600" />
        </div>
        <div className="absolute top-8 right-[12%] hidden md:block opacity-90 animate-pulse">
          <DoodleSparkle size={32} color="#ff3b30" />
        </div>
        <div className="absolute bottom-24 left-[16%] hidden lg:block opacity-80">
          <DoodleSparkle size={22} color="#00f5a0" />
        </div>

        {/* ── Session Pill Badge ── */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-xl shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#00f5a0] animate-ping" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-white/90">
              Department of AI & Data Science • Academic Year 2026-27
            </span>
          </motion.div>
        </div>

        {/* ── THE HERO SECTION GRAPHIC (Directly Featured as Centerpiece) ── */}
        <div className="relative flex flex-col items-center justify-center select-none text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[1240px] aspect-[4096/2160] my-2 cursor-pointer group"
          >
            <Image
              src="/SHAIDS.png"
              alt="SHAIDS 2026-27 Official 4K Department Graphic"
              fill
              priority
              unoptimized
              className="object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)] filter contrast-[1.05]"
              sizes="(max-width: 1280px) 100vw, 1240px"
            />
          </motion.div>

          {/* ── Floating Tilted Frosted Cards (Vectors & Robotics) & Rotating Stamp ── */}
          <div className="relative w-full max-w-4xl flex items-center justify-between mt-4 sm:mt-6 z-30 px-2 sm:px-6">
            
            {/* Card 1: Vectors Flagship Hackathon */}
            <motion.div
              initial={{ scale: 0.8, rotate: -4, opacity: 0 }}
              animate={{ scale: 1, rotate: -3, opacity: 1 }}
              whileHover={{ scale: 1.08, rotate: 0, zIndex: 40 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="hidden sm:block cursor-pointer"
            >
              <Link href="/events/fests/vectors">
                <div className="bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/20 hover:border-[#0055ff] rounded-2xl p-3.5 text-left shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all w-48">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-[#0055ff] text-white px-2 py-0.5 rounded-full">
                      FLAGSHIP FEST
                    </span>
                    <span className="text-xs">⚡</span>
                  </div>
                  <div className="font-black text-sm text-white">VECTORS 2026</div>
                  <div className="text-[11px] font-mono text-white/70">24H AI Hackathon</div>
                </div>
              </Link>
            </motion.div>

            {/* Center Rotating Circular Stamp */}
            <div className="mx-auto">
              <CircularStampBadge text="• SHAIDS 2026-27 • ACPCE AI&DS • RESEARCH & CODE " size={110} />
            </div>

            {/* Card 2: Robotics & MAEG Capstone */}
            <motion.div
              initial={{ scale: 0.8, rotate: 4, opacity: 0 }}
              animate={{ scale: 1, rotate: 3, opacity: 1 }}
              whileHover={{ scale: 1.08, rotate: 0, zIndex: 40 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="hidden sm:block cursor-pointer"
            >
              <div className="bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/20 hover:border-[#ffe600] rounded-2xl p-3.5 text-left shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all w-48">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-[#ffe600] text-black px-2 py-0.5 rounded-full font-black">
                    CAPSTONE
                  </span>
                  <span className="text-xs">🤖</span>
                </div>
                <div className="font-black text-sm text-white">MAEG ROBOTICS</div>
                <div className="text-[11px] font-mono text-white/70">Edge AI Hexapod</div>
              </div>
            </motion.div>

          </div>

          {/* ── Subtitle & Value Proposition ── */}
          <div className="max-w-2xl mx-auto mt-6 px-4 z-20">
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-medium leading-relaxed">
              Official Institutional Ecosystem for the Department of Artificial Intelligence & Data Science at A. C. Patil College of Engineering, Navi Mumbai.
            </p>
          </div>

          {/* ── Action CTAs ── */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 z-20">
            <Link
              href="/events"
              className="px-8 py-3.5 rounded-full bg-[#ffe600] hover:bg-[#ffd600] text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_10px_25px_rgba(255,230,0,0.3)] hover:scale-105 transition-all flex items-center gap-2"
            >
              Explore 2026-27 Fests <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/18 border border-white/25 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2 hover:border-white/50"
            >
              Academic Notes & Syllabus
            </Link>
            <Link
              href="/team"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/18 border border-white/25 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2 hover:border-white/50"
            >
              Student Council
            </Link>
          </div>

        </div>

      </div>

      {/* ── Bottom Dark Obsidian Shelf with 3 Connected Pillars ── */}
      <div className="relative w-full bg-[#08080c] border-t border-white/10 rounded-t-[40px] md:rounded-t-[56px] pt-12 pb-16 px-4 sm:px-6 lg:px-8 z-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#ffe600] block mb-1">
              CORE DEPARTMENTAL PILLARS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
              Engineered For Breakthrough Innovation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Connector arrows between pillars */}
            <div className="hidden md:block absolute top-12 left-[31%] -translate-x-1/2 z-20 pointer-events-none opacity-60">
              <DoodleConnectorArrow className="w-20 h-auto" />
            </div>
            <div className="hidden md:block absolute top-12 left-[65%] -translate-x-1/2 z-20 pointer-events-none opacity-60">
              <DoodleConnectorArrow className="w-20 h-auto" />
            </div>

            {/* Pillar 1 */}
            <div className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-[#0055ff] p-7 rounded-3xl transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0055ff]/20 text-[#0055ff] border border-[#0055ff]/30 flex items-center justify-center font-black text-lg">
                01
              </div>
              <h4 className="text-xl font-black text-white tracking-tight">AI & Machine Learning Rigor</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Deep neural networks, computer vision, natural language processing, and real-time distributed data pipelines.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-[#ffe600] p-7 rounded-3xl transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#ffe600]/20 text-[#ffe600] border border-[#ffe600]/30 flex items-center justify-center font-black text-lg">
                02
              </div>
              <h4 className="text-xl font-black text-white tracking-tight">High-Performance Computing</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Dedicated GPU research labs, edge AI microcontrollers, robotics setups, and enterprise cloud clusters.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-[#ff2d55] p-7 rounded-3xl transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#ff2d55]/20 text-[#ff2d55] border border-[#ff2d55]/30 flex items-center justify-center font-black text-lg">
                03
              </div>
              <h4 className="text-xl font-black text-white tracking-tight">Student-Led Flagships</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                National hackathons (Vectors), departmental sports leagues (Kurukshetra), and arts symposia (Rhythms).
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
