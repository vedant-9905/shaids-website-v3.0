"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Trophy, Music, ArrowUpRight, Calendar, Users } from "lucide-react";
import { DoodleSquiggleWave, DoodleSparkle } from "./DoodleSVGs";

export default function FestsBentoSection() {
  return (
    <section className="relative w-full bg-[#050508] text-white px-6 sm:px-10 md:px-16 py-16 md:py-28 overflow-hidden border-t border-white/10">
      
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffe600] font-mono text-[11px] font-bold uppercase tracking-wider mb-4 border border-white/15">
              <span className="w-2 h-2 rounded-full bg-[#ffe600]" />
              FLAGSHIP FESTS 2026-27
            </div>
            <h2
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] uppercase leading-none font-sans"
            >
              EXPERIENCE THE
              <br />
              <span className="text-[#0055ff] inline-flex items-center gap-2">
                TRIPLE IMPACT
                <DoodleSparkle size={36} color="#ffe600" className="inline-block" />
              </span>
            </h2>
          </div>

          <p className="text-white/70 max-w-[420px] text-sm md:text-base font-medium leading-relaxed">
            From overnight AI hackathons to high-adrenaline sports tournaments and intercollegiate cultural showcases — discover the energy that defines SHAIDS.
          </p>
        </div>

        {/* ── Bento Grid of 3 Flagship Fests ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* ── CARD 1: VECTORS 2026 (Large Featured Bento Card) ── */}
          <div className="lg:col-span-7 bg-[#0022aa] text-white rounded-3xl md:rounded-[36px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between group shadow-2xl border border-white/20">
            {/* Background grid */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* Hand-drawn squiggle accent */}
            <div className="absolute -right-6 top-6 opacity-80 pointer-events-none">
              <DoodleSquiggleWave color="#ffe600" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3.5 py-1 bg-[#ffe600] text-black font-mono text-[10px] font-black uppercase rounded-full tracking-wider">
                  NATIONAL TECH FEST & HACKATHON
                </span>
                <span className="flex items-center gap-1.5 text-white/80 font-mono text-xs font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  AUG 2026
                </span>
              </div>

              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none font-sans">
                VECTORS
                <br />
                <span className="text-[#ffe600]">2026</span>
              </h3>

              <p className="text-white/85 text-sm md:text-base font-medium mt-4 max-w-[480px] leading-relaxed">
                The flagship national technical symposium: 24-hour hackathons, CodeSprint algorithmic battles, Machine Learning project expos, and industry keynote sessions.
              </p>

              {/* Stats badges */}
              <div className="flex flex-wrap gap-2.5 mt-6">
                <div className="px-3.5 py-1.5 bg-black/40 backdrop-blur-md rounded-xl font-mono text-xs font-bold flex items-center gap-1.5 border border-white/10">
                  <Users className="w-3.5 h-3.5 text-[#ffe600]" />
                  <span>500+ HACKERS</span>
                </div>
                <div className="px-3.5 py-1.5 bg-black/40 backdrop-blur-md rounded-xl font-mono text-xs font-bold text-white border border-white/10">
                  <span>₹1,00,000+ CASH POOL</span>
                </div>
              </div>
            </div>

            {/* Bottom action button */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
              <span className="font-mono text-xs font-bold tracking-wider uppercase text-white/80">
                REGISTRATIONS OPENING SOON
              </span>
              <Link
                href="/events/fests/vectors"
                className="w-12 h-12 rounded-full bg-white hover:bg-[#ffe600] text-black flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg"
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* ── CARD 2 & 3 CONTAINER (Vertical Stack) ── */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
            
            {/* ── CARD 2: KURUKSHETRA (Sports & Turf) ── */}
            <div className="bg-[#12131a] text-white rounded-3xl md:rounded-[36px] p-7 md:p-9 flex flex-col justify-between group shadow-xl relative overflow-hidden flex-1 border border-white/10 hover:border-[#ff3b30] transition-colors">
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-0.5 bg-[#ff3b30] text-white font-mono text-[10px] font-black uppercase rounded-full tracking-wider">
                    ANNUAL SPORTS LEAGUE
                  </span>
                  <Trophy className="w-5 h-5 text-[#ff3b30]" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-none font-sans">
                  KURUKSHETRA <span className="text-[#ff3b30]">'26</span>
                </h3>

                <p className="text-white/70 text-xs sm:text-sm font-medium mt-3 leading-relaxed">
                  Box Cricket, Football Arena Leagues, Chess Championships, Badminton & Esports showdowns across departmental batches.
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold tracking-wider text-white/60 uppercase">
                  16 TEAMS · 6 TROPHIES
                </span>
                <Link
                  href="/events/fests/kurukshetra"
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-[#ff3b30] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* ── CARD 3: RHYTHMS (Cultural Symposium) ── */}
            <div className="bg-[#181126] text-white rounded-3xl md:rounded-[36px] p-7 md:p-9 flex flex-col justify-between group shadow-xl relative overflow-hidden flex-1 border border-white/10 hover:border-[#af52de] transition-colors">
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-0.5 bg-[#af52de] text-white font-mono text-[10px] font-black uppercase rounded-full tracking-wider">
                    CULTURAL SYMPOSIUM
                  </span>
                  <Music className="w-5 h-5 text-[#af52de]" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-none font-sans">
                  RHYTHMS <span className="text-[#af52de]">'26</span>
                </h3>

                <p className="text-white/70 text-xs sm:text-sm font-medium mt-3 leading-relaxed">
                  Battle of the Bands, Cinematic Dance performances, Street Theatre, Fashion showcases, and musical night celebrations.
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold tracking-wider text-white/60 uppercase">
                  ANNUAL DEPARTMENT NIGHT
                </span>
                <Link
                  href="/events/fests/rhythms"
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-[#af52de] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
