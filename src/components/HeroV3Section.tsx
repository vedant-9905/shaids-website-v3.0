"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  DoodleHashtag,
  DoodleCurvedArrowDown,
  DoodleCurvedArrowUp,
  CircularStampBadge,
  DoodleConnectorArrow,
  DoodleSparkle,
  DoodleChalkDesktop,
  DoodleChalkLaptop,
  DoodleChalkCodeBrackets,
} from "./DoodleSVGs";
import { Sparkles, ArrowRight, Terminal, Cpu, Award } from "lucide-react";

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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-60 bg-[#ffe600] blur-[160px] rounded-full pointer-events-none opacity-15" />

      {/* ── Flanking 3D Candy Spaghetti Tubes (Left & Right) ── */}
      <div className="absolute left-0 top-16 bottom-0 w-28 sm:w-44 md:w-56 pointer-events-none z-10 opacity-90 overflow-hidden select-none">
        <div className="relative w-full h-full">
          <Image
            src="/shaids-hero-banner.png"
            alt="Candy Tubular Squiggles Left"
            fill
            className="object-cover object-left filter contrast-125"
            priority
          />
        </div>
      </div>

      <div className="absolute right-0 top-16 bottom-0 w-28 sm:w-44 md:w-56 pointer-events-none z-10 opacity-90 overflow-hidden select-none">
        <div className="relative w-full h-full">
          <Image
            src="/shaids-hero-banner.png"
            alt="Candy Tubular Squiggles Right"
            fill
            className="object-cover object-right filter contrast-125"
            priority
          />
        </div>
      </div>

      {/* ── Center Content Area ── */}
      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 z-20">
        
        {/* Floating Sparkles in the air */}
        <div className="absolute top-6 left-[18%] hidden md:block opacity-90 animate-pulse">
          <DoodleSparkle size={26} color="#ffe600" />
        </div>
        <div className="absolute top-12 right-[18%] hidden md:block opacity-90 animate-pulse">
          <DoodleSparkle size={32} color="#ff3b30" />
        </div>
        <div className="absolute bottom-28 left-[22%] hidden lg:block opacity-80">
          <DoodleSparkle size={22} color="#00f5a0" />
        </div>

        {/* ── Session Pill Badge ── */}
        <div className="flex justify-center mb-6">
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

        {/* ── Giant Brutalist Typography & Hand-Drawn Chalk Doodles ── */}
        <div className="relative flex flex-col items-center justify-center select-none text-center">
          
          {/* Hand-drawn chalk Desktop Computer floating top-left */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            whileHover={{ scale: 1.1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -top-16 sm:-top-20 md:-top-24 left-[10%] sm:left-[16%] md:left-[22%] z-30 hidden sm:block cursor-pointer"
          >
            <DoodleChalkDesktop className="w-24 sm:w-28 md:w-36 h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
          </motion.div>

          {/* ── ROW 1: SHAIDS + Doodle Hashtag ── */}
          <div className="relative flex items-center justify-center z-20 w-full">
            <motion.div
              initial={{ rotate: -15, scale: 0.8, opacity: 0 }}
              animate={{ rotate: -10, scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mr-2 sm:mr-4 -mt-2 sm:-mt-6 hidden xs:block"
            >
              <DoodleHashtag className="w-10 sm:w-16 md:w-20 lg:w-24 h-auto" color="#ffe600" />
            </motion.div>

            <h1
              className="font-black tracking-[-0.05em] text-white leading-[0.82] uppercase drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              style={{
                fontFamily: `'Archivo', sans-serif`,
                fontSize: "clamp(64px, 16vw, 210px)",
              }}
            >
              SHAIDS
            </h1>

            {/* Hand-drawn loop arrow curving down */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -right-2 sm:right-6 md:right-16 lg:right-28 -top-8 sm:-top-10 md:-top-14 hidden sm:block pointer-events-none"
            >
              <DoodleCurvedArrowDown className="w-14 sm:w-18 md:w-22 h-auto" color="#ff2d55" />
            </motion.div>
          </div>

          {/* ── ROW 2: 2026-27 + Hand-Drawn Chalk Laptop ── */}
          <div className="relative flex items-center justify-center z-20 w-full -mt-1 sm:-mt-3 md:-mt-5">
            <h2
              className="font-black tracking-[-0.05em] text-white leading-[0.85] uppercase drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              style={{
                fontFamily: `'Archivo', sans-serif`,
                fontSize: "clamp(48px, 12vw, 165px)",
              }}
            >
              2026-27
            </h2>

            {/* Hand-drawn chalk Laptop floating bottom-right */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 10 }}
              animate={{ opacity: 1, y: 0, rotate: 8 }}
              whileHover={{ scale: 1.1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-14 sm:-bottom-18 md:-bottom-20 right-[8%] sm:right-[14%] md:right-[20%] z-30 hidden sm:block cursor-pointer"
            >
              <DoodleChalkLaptop className="w-24 sm:w-28 md:w-36 h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
            </motion.div>
          </div>

          {/* ── Floating Tilted Frosted Cards (Vectors & Robotics) ── */}
          <div className="relative w-full max-w-4xl flex items-center justify-between mt-8 z-30 px-2 sm:px-6">
            
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
          <div className="max-w-2xl mx-auto mt-8 px-4 z-20">
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
