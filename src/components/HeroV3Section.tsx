"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  DoodleHashtag,
  DoodleCurvedArrowDown,
  DoodleCurvedArrowUp,
  CircularStampBadge,
  DoodleConnectorArrow,
  DoodleSparkle,
} from "./DoodleSVGs";

export default function HeroV3Section() {
  return (
    <section className="relative w-full bg-[#0038ff] text-white overflow-hidden pt-28 md:pt-36">
      {/* ── Background Grid (Blueprint aesthetic from Image 1) ── */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* ── Decorative Background Glows ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0022cc] blur-[120px] rounded-full pointer-events-none opacity-60" />

      {/* ── Hero Center Typography & Floating Cards Container ── */}
      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        
        {/* Floating Sparkles in the air */}
        <div className="absolute top-4 left-[15%] hidden md:block opacity-80 animate-pulse">
          <DoodleSparkle size={24} color="#ccff00" />
        </div>
        <div className="absolute top-12 right-[12%] hidden md:block opacity-80 animate-pulse">
          <DoodleSparkle size={32} color="#ccff00" />
        </div>
        <div className="absolute bottom-24 left-[8%] hidden lg:block opacity-60">
          <DoodleSparkle size={20} color="#ffffff" />
        </div>

        {/* ── Giant Brutalist Typography Stacks (Image 1 replica) ── */}
        <div className="relative flex flex-col items-center justify-center select-none text-center">
          
          {/* ── ROW 1: #SHAIDS + Doodle Curved Arrow Down ── */}
          <div className="relative flex items-center justify-center z-10 w-full">
            {/* Hand-drawn neon lime hashtag `#` */}
            <motion.div
              initial={{ rotate: -12, scale: 0.8, opacity: 0 }}
              animate={{ rotate: -8, scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mr-2 sm:mr-4 -mt-2 sm:-mt-6"
            >
              <DoodleHashtag className="w-10 sm:w-16 md:w-20 lg:w-24 h-auto" />
            </motion.div>

            {/* Word 1: SHAIDS */}
            <h1
              className="font-black tracking-[-0.04em] text-white leading-[0.82] uppercase"
              style={{
                fontFamily: `'Archivo', sans-serif`,
                fontSize: "clamp(56px, 14vw, 195px)",
              }}
            >
              SHAIDS
            </h1>

            {/* Hand-drawn loop arrow curving down from top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -right-2 sm:right-6 md:right-16 lg:right-28 -top-8 sm:-top-10 md:-top-14 hidden sm:block pointer-events-none"
            >
              <DoodleCurvedArrowDown className="w-14 sm:w-18 md:w-22 h-auto" />
            </motion.div>
          </div>

          {/* ── ROW 2: AI & [TILTED CARD 1] DATA ── */}
          <div className="relative flex items-center justify-center z-20 w-full -mt-2 sm:-mt-4 md:-mt-6">
            <span
              className="font-black tracking-[-0.04em] text-white leading-[0.82] uppercase"
              style={{
                fontFamily: `'Archivo', sans-serif`,
                fontSize: "clamp(48px, 13vw, 185px)",
              }}
            >
              AI
            </span>

            {/* ── Tilted Frosted Glass Card 1 (Vectors Hackathon Card) ── */}
            <motion.div
              initial={{ scale: 0.8, rotate: 0, opacity: 0 }}
              animate={{ scale: 1, rotate: 6, opacity: 1 }}
              whileHover={{ scale: 1.08, rotate: 0, zIndex: 40 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative mx-3 sm:mx-6 md:mx-8 z-30 cursor-pointer group"
            >
              <div className="w-[140px] sm:w-[170px] md:w-[200px] bg-white/20 hover:bg-white/28 backdrop-blur-xl border border-white/40 rounded-2xl md:rounded-3xl p-3 sm:p-4 text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-colors">
                {/* Avatar Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#0022aa] to-[#22d6c8] p-0.5 shadow-md flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-[#051133] rounded-[10px] sm:rounded-[14px] flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                </div>

                {/* Handle & Stats */}
                <div className="mt-2 text-white font-black text-xs sm:text-sm tracking-tight font-sans">
                  vectors.fest
                </div>
                <div className="text-white/80 font-mono text-[9px] sm:text-[10px] tracking-wider uppercase mt-0.5">
                  500+ HACKERS
                </div>

                {/* Status indicator */}
                <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#ccff00] text-black font-mono text-[9px] font-bold tracking-wider uppercase rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                  FLAGSHIP LIVE
                </div>
              </div>
            </motion.div>

            <span
              className="font-black tracking-[-0.04em] text-white leading-[0.82] uppercase"
              style={{
                fontFamily: `'Archivo', sans-serif`,
                fontSize: "clamp(48px, 13vw, 185px)",
              }}
            >
              DATA
            </span>
          </div>

          {/* ── ROW 3: SCIENCE + [TILTED CARD 2] + STAMP BADGE ── */}
          <div className="relative flex items-center justify-center z-10 w-full -mt-2 sm:-mt-4 md:-mt-6">
            {/* Hand-drawn arrow curving up from bottom-left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute left-0 sm:left-6 md:left-14 lg:left-24 bottom-[-15px] sm:bottom-0 pointer-events-none hidden sm:block"
            >
              <DoodleCurvedArrowUp className="w-16 sm:w-20 md:w-24 h-auto" />
            </motion.div>

            {/* ── Tilted Frosted Glass Card 2 (Autonomous Robotics Card) ── */}
            <motion.div
              initial={{ scale: 0.8, rotate: 0, opacity: 0 }}
              animate={{ scale: 1, rotate: -7, opacity: 1 }}
              whileHover={{ scale: 1.08, rotate: 0, zIndex: 40 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative mr-3 sm:mr-6 z-30 cursor-pointer group"
            >
              <div className="w-[130px] sm:w-[160px] md:w-[190px] bg-white/20 hover:bg-white/28 backdrop-blur-xl border border-white/40 rounded-2xl md:rounded-3xl p-3 sm:p-4 text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-colors">
                {/* Avatar Icon */}
                <div className="w-11 h-11 sm:w-13 sm:h-13 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#ff3366] to-[#ccff00] p-0.5 shadow-md flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-[#110522] rounded-[10px] sm:rounded-[14px] flex items-center justify-center text-xl sm:text-2xl">
                    🤖
                  </div>
                </div>

                <div className="mt-2 text-white font-black text-xs sm:text-sm tracking-tight font-sans">
                  maeg.robotics
                </div>
                <div className="text-white/80 font-mono text-[9px] sm:text-[10px] tracking-wider uppercase mt-0.5">
                  AI CAPSTONE '26
                </div>

                <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 bg-white/25 text-white font-mono text-[9px] font-bold tracking-wider uppercase rounded-full">
                  TOP HONORS
                </div>
              </div>
            </motion.div>

            {/* Word: SCIENCE */}
            <span
              className="font-black tracking-[-0.04em] text-white leading-[0.82] uppercase"
              style={{
                fontFamily: `'Archivo', sans-serif`,
                fontSize: "clamp(48px, 13vw, 185px)",
              }}
            >
              SCIENCE
            </span>

            {/* ── Circular Rotating Stamp Badge (Right Side) ── */}
            <div className="absolute -right-2 sm:right-4 md:right-10 lg:right-20 -bottom-8 sm:-bottom-12 md:-bottom-16 z-30">
              <Link href="/events">
                <CircularStampBadge
                  text="★ EXPLORE SHAIDS 2026-27 ★ ACPCE NAVI MUMBAI "
                  size={140}
                  className="scale-75 sm:scale-90 md:scale-110"
                />
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* ── THE ROUNDED WHITE MODULAR BOTTOM SHELF (Directly from Image 1) ── */}
      <div className="relative w-full bg-white text-black rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[60px] px-6 sm:px-10 md:px-16 pt-12 md:pt-16 pb-16 md:pb-24 shadow-[0_-25px_60px_rgba(0,0,0,0.2)]">
        
        {/* Top small decorative grab pill */}
        <div className="w-12 h-1.5 bg-black/15 rounded-full mx-auto -mt-6 mb-8 md:mb-12" />

        {/* ── 3 Connected Feature Pillars with Hand-Drawn Connector Arrows ── */}
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative items-center">
          
          {/* ── PILLAR 1: RESEARCH & COMPUTATIONAL LABS ── */}
          <div className="bg-[#f6f8fb] rounded-3xl p-6 md:p-8 border border-black/5 flex flex-col justify-between h-full group hover:shadow-lg transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] tracking-[1.5px] uppercase font-bold text-[#0038ff]">
                  01 // INFRASTRUCTURE
                </span>
                <span className="w-2 h-2 rounded-full bg-[#0038ff]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-black leading-tight uppercase font-sans">
                HIGH PERFORMANCE
                <br />
                GPU CLUSTERS
              </h3>
              <p className="text-[13px] sm:text-[14px] text-black/60 font-medium leading-relaxed mt-2.5">
                Dedicated machine learning laboratories, high-speed neural compute nodes, and 24/7 student research terminals.
              </p>
            </div>

            {/* Bottom visual tag (like in Image 1) */}
            <div className="flex items-center gap-2 mt-6 pt-5 border-t border-black/8">
              <div className="px-3 py-1.5 bg-[#0038ff] text-white font-mono text-[11px] font-bold rounded-xl flex items-center gap-1.5">
                <span>GPU LABS</span>
              </div>
              <div className="px-3 py-1.5 bg-[#ccff00] text-black font-mono text-[11px] font-bold rounded-xl">
                <span>120 SEATS</span>
              </div>
            </div>
          </div>

          {/* Hand-drawn connector arrow between Pillar 1 & 2 (Visible on desktop) */}
          <div className="hidden md:block absolute left-[31.5%] top-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <DoodleConnectorArrow className="w-12 h-auto text-black" />
          </div>

          {/* ── PILLAR 2: FLAGSHIP FESTS & HACKATHONS ── */}
          <div className="bg-[#f6f8fb] rounded-3xl p-6 md:p-8 border border-black/5 flex flex-col justify-between h-full group hover:shadow-lg transition-all duration-300 relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] tracking-[1.5px] uppercase font-bold text-[#0038ff]">
                  02 // ANNUAL FESTS
                </span>
                <span className="w-2 h-2 rounded-full bg-[#ccff00] border border-black/20" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-black leading-tight uppercase font-sans">
                EXPLORE FLAGSHIP
                <br />
                TECH FESTS
              </h3>
              <p className="text-[13px] sm:text-[14px] text-black/60 font-medium leading-relaxed mt-2.5">
                Vectors National AI Hackathon, Kurukshetra Sports Arena & Rhythms Cultural Extravaganza.
              </p>
            </div>

            {/* Interactive button with lime circular arrow (Image 1 style) */}
            <div className="flex items-center gap-2 mt-6 pt-5 border-t border-black/8">
              <Link
                href="/events"
                className="flex-1 py-2 px-4 bg-[#0038ff] hover:bg-[#0029db] text-white font-mono text-[11px] font-bold rounded-xl text-center uppercase tracking-wider transition-colors"
              >
                VECTORS 2026
              </Link>
              <Link
                href="/events"
                className="w-9 h-9 rounded-full bg-[#ccff00] flex items-center justify-center hover:scale-110 transition-transform shadow-sm shrink-0"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Hand-drawn connector arrow between Pillar 2 & 3 (Visible on desktop) */}
          <div className="hidden md:block absolute left-[65%] top-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <DoodleConnectorArrow className="w-12 h-auto text-black" />
          </div>

          {/* ── PILLAR 3: ACTIVE STUDENT COUNCIL & COMMUNITY ── */}
          <div className="bg-[#f6f8fb] rounded-3xl p-6 md:p-8 border border-black/5 flex flex-col justify-between h-full group hover:shadow-lg transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] tracking-[1.5px] uppercase font-bold text-[#0038ff]">
                  03 // COMMUNITY
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-black leading-tight uppercase font-sans">
                STUDENT DRIVEN
                <br />
                ECOSYSTEM
              </h3>
              <p className="text-[13px] sm:text-[14px] text-black/60 font-medium leading-relaxed mt-2.5">
                480+ enrolled engineers, peer code sprints, Smart India Hackathon winners & SIGMOID research journal.
              </p>
            </div>

            {/* Neon lime speech bubble callout (Image 1 style) */}
            <div className="mt-6 pt-5 border-t border-black/8">
              <div className="w-full py-2.5 px-4 bg-[#ccff00] rounded-2xl flex items-center justify-between shadow-sm">
                <span className="font-mono text-[10px] font-bold text-black/70 tracking-wider uppercase">
                  ACTIVE TALENT
                </span>
                <span className="font-mono text-[14px] font-black text-black tracking-tight">
                  480+ STUDENTS
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
