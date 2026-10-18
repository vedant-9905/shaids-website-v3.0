"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Award, ShieldCheck, Users, ChevronRight } from "lucide-react";
import { DoodleSparkle } from "./DoodleSVGs";

export default function LeadershipAndStatsSection() {
  return (
    <section className="relative w-full bg-white text-black px-6 sm:px-10 md:px-16 py-20 md:py-28 overflow-hidden border-t border-black/5">
      <div className="max-w-[1280px] mx-auto">
        
        {/* ── Top Metric Highlights Banner ── */}
        <div className="bg-[#0038ff] text-white rounded-3xl md:rounded-[40px] p-8 md:p-14 mb-16 shadow-2xl relative overflow-hidden">
          {/* Subtle grid */}
          <div className="absolute inset-0 pointer-events-none opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10 pb-8 border-b border-white/15">
            <div>
              <span className="px-3 py-1 bg-[#ccff00] text-black font-mono text-[10px] font-black uppercase rounded-full tracking-wider">
                ACPCE AI & DS BY THE NUMBERS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mt-3 font-sans">
                A BENCHMARK IN EXCELLENCE
              </h2>
            </div>
            <Link
              href="/about"
              className="px-6 py-2.5 rounded-full bg-white hover:bg-[#ccff00] text-black font-mono text-xs font-black uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5"
            >
              <span>EXPLORE DEPARTMENT</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Numbers Grid */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="border-l-2 border-[#ccff00] pl-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#ccff00] font-sans">
                120
              </div>
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-white/90 mt-1">
                ANNUAL INTAKE
              </div>
              <div className="text-xs text-white/60 font-medium mt-0.5">
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
              <div className="text-xs text-white/60 font-medium mt-0.5">
                Active undergraduate engineers
              </div>
            </div>

            <div className="border-l-2 border-white/40 pl-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-sans">
                24+
              </div>
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-white/90 mt-1">
                FACULTY & MENTORS
              </div>
              <div className="text-xs text-white/60 font-medium mt-0.5">
                PhD scholars & industry certified staff
              </div>
            </div>

            <div className="border-l-2 border-[#ccff00] pl-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#ccff00] font-sans">
                NAAC A+
              </div>
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-white/90 mt-1">
                INSTITUTIONAL GRADE
              </div>
              <div className="text-xs text-white/60 font-medium mt-0.5">
                Highest accredited standard
              </div>
            </div>
          </div>
        </div>

        {/* ── Department Leadership Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Principal Card */}
          <div className="bg-[#f6f8fb] rounded-3xl p-8 md:p-10 border border-black/8 flex flex-col justify-between group hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] font-bold tracking-widest text-[#0038ff] uppercase bg-[#0038ff]/10 px-3 py-1 rounded-full">
                  INSTITUTIONAL VISIONARY
                </span>
                <GraduationCap className="w-6 h-6 text-[#0038ff]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black font-sans">
                Dr. Sawata R. Deore
              </h3>
              <div className="text-sm font-bold text-black/60 font-mono mt-1">
                Principal, ACPCE · BE, ME, PhD Tech.
              </div>

              <p className="text-sm sm:text-base text-black/70 font-medium leading-relaxed mt-4">
                "Our mission is to establish ACPCE's AI & Data Science Department as a beacon of research, producing engineers capable of architecting ethical, scalable, and high-impact artificial intelligence infrastructure for the global ecosystem."
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-black/8 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase text-black/50">
                OFFICE OF THE PRINCIPAL
              </span>
              <Link href="/about" className="font-mono text-xs font-black text-[#0038ff] uppercase hover:underline">
                READ ADDRESS →
              </Link>
            </div>
          </div>

          {/* HoD Card */}
          <div className="bg-[#f6f8fb] rounded-3xl p-8 md:p-10 border border-black/8 flex flex-col justify-between group hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] font-bold tracking-widest text-[#0038ff] uppercase bg-[#0038ff]/10 px-3 py-1 rounded-full">
                  DEPARTMENT HEAD
                </span>
                <Award className="w-6 h-6 text-[#0038ff]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black font-sans">
                Mrs. Shilpali Bansu
              </h3>
              <div className="text-sm font-bold text-black/60 font-mono mt-1">
                Head of Department, AI & Data Science
              </div>

              <p className="text-sm sm:text-base text-black/70 font-medium leading-relaxed mt-4">
                "At SHAIDS, student initiative drives our culture. From our annual flagship fest VECTORS to research capstones and SIGMOID publication, we cultivate the curious mindset required to master tomorrow's intelligent systems."
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-black/8 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase text-black/50">
                DEPARTMENT LEADERSHIP
              </span>
              <Link href="/team" className="font-mono text-xs font-black text-[#0038ff] uppercase hover:underline">
                FACULTY ROSTER →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
