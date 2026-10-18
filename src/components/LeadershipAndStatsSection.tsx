"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Award, ShieldCheck, Users, ChevronRight } from "lucide-react";
import { DoodleSparkle } from "./DoodleSVGs";

export default function LeadershipAndStatsSection() {
  return (
    <section className="relative w-full bg-[#050508] text-white px-6 sm:px-10 md:px-16 py-20 md:py-28 overflow-hidden border-t border-white/10">
      
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
        
        {/* ── Top Metric Highlights Banner ── */}
        <div className="bg-[#0022aa] text-white rounded-3xl md:rounded-[40px] p-8 md:p-14 mb-16 shadow-2xl relative overflow-hidden border border-white/20">
          {/* Subtle grid */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10 pb-8 border-b border-white/20">
            <div>
              <span className="px-3 py-1 bg-[#ffe600] text-black font-mono text-[10px] font-black uppercase rounded-full tracking-wider">
                ACPCE AI & DS BY THE NUMBERS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mt-3 font-sans">
                A BENCHMARK IN EXCELLENCE
              </h2>
            </div>
            <Link
              href="/about"
              className="px-6 py-2.5 rounded-full bg-white hover:bg-[#ffe600] text-black font-mono text-xs font-black uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5"
            >
              <span>EXPLORE DEPARTMENT</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Numbers Grid */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="border-l-2 border-[#ffe600] pl-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#ffe600] font-sans">
                120
              </div>
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-white/90 mt-1">
                ANNUAL INTAKE
              </div>
              <div className="text-xs text-white/70 font-medium mt-0.5">
                Expanded capacity under Mumbai University
              </div>
            </div>

            <div className="border-l-2 border-white/40 pl-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-sans">
                480+
              </div>
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-white/90 mt-1">
                ENROLLED STUDENTS
              </div>
              <div className="text-xs text-white/70 font-medium mt-0.5">
                Active undergraduate engineers
              </div>
            </div>

            <div className="border-l-2 border-[#00f5a0] pl-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#00f5a0] font-sans">
                A+
              </div>
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-white/90 mt-1">
                NAAC ACCREDITED
              </div>
              <div className="text-xs text-white/70 font-medium mt-0.5">
                Institutional quality assurance rating
              </div>
            </div>

            <div className="border-l-2 border-[#ff3b30] pl-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#ff3b30] font-sans">
                100%
              </div>
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-white/90 mt-1">
                PLACEMENT ASSISTANCE
              </div>
              <div className="text-xs text-white/70 font-medium mt-0.5">
                Top tier AI & software recruiters
              </div>
            </div>
          </div>
        </div>

        {/* ── Leadership Quotes Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Principal Message */}
          <div className="bg-white/[0.04] border border-white/10 hover:border-white/20 p-8 sm:p-10 rounded-3xl md:rounded-[36px] flex flex-col justify-between space-y-6 transition-all backdrop-blur-xl">
            <div className="space-y-4">
              <span className="font-mono text-[10px] font-black uppercase tracking-wider bg-white/10 text-white px-3 py-1 rounded-full border border-white/15">
                PRINCIPAL'S VISION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Dr. Sawata R. Deore
              </h3>
              <div className="text-xs font-mono text-[#ffe600]">
                Principal, A. C. Patil College of Engineering
              </div>
              <p className="text-sm text-white/75 leading-relaxed font-sans pt-2">
                "Our Artificial Intelligence & Data Science department is crafted to be an engine of next-generation technological leadership, fostering algorithmic rigor and interdisciplinary problem solving."
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>LEADERSHIP DESK</span>
              <Link href="/about?tab=leadership" className="text-[#ffe600] font-bold hover:underline">
                Read Address →
              </Link>
            </div>
          </div>

          {/* Card 2: HOD Message */}
          <div className="bg-white/[0.04] border border-white/10 hover:border-white/20 p-8 sm:p-10 rounded-3xl md:rounded-[36px] flex flex-col justify-between space-y-6 transition-all backdrop-blur-xl">
            <div className="space-y-4">
              <span className="font-mono text-[10px] font-black uppercase tracking-wider bg-[#0055ff]/20 text-[#0055ff] border border-[#0055ff]/40 px-3 py-1 rounded-full">
                HEAD OF DEPARTMENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Mrs. Shilpali Bansu
              </h3>
              <div className="text-xs font-mono text-[#0055ff]">
                Head of Department & Assistant Professor (AI & DS)
              </div>
              <p className="text-sm text-white/75 leading-relaxed font-sans pt-2">
                "SHAIDS empowers students beyond traditional classroom learning. We blend intense research with hands-on hackathons and capstone incubators to produce engineers ready for the AI era."
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>HOD DESK</span>
              <Link href="/about?tab=leadership" className="text-[#0055ff] font-bold hover:underline">
                Read Address →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
