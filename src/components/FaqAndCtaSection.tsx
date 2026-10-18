"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight, Mail } from "lucide-react";
import { DoodleSparkle, DoodleSquiggleWave } from "./DoodleSVGs";

const FAQS = [
  {
    q: "How can students join the SHAIDS Student Council?",
    a: "Recruitments for the SHAIDS core committee open at the start of each academic year (July-August) for 2nd and 3rd-year students across Technical, Management, Media, Public Relations, and Sponsorship wings through an open application and interview process.",
  },
  {
    q: "Who is eligible to participate in VECTORS National AI Hackathon?",
    a: "VECTORS is open to undergraduate and postgraduate students from all engineering colleges nationwide. Teams of 2 to 4 members can register for tracks covering Generative AI, Computer Vision, Autonomous Systems, and Web3/FinTech.",
  },
  {
    q: "How do I access departmental semester notes, lab manuals, and question papers?",
    a: "All curated study materials, Mumbai University syllabus schemes, lab assignment manuals, and previous year question banks are organized by semester in the Student Resources portal accessible via the navigation bar.",
  },
  {
    q: "What is SIGMOID and how can students submit research papers?",
    a: "SIGMOID is the annual departmental research magazine and review journal. Submissions for research articles, capstone reviews, and tech editorials open each spring with mentorship from faculty peer reviewers.",
  },
];

export default function FaqAndCtaSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

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
        
        {/* ── FAQ Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 md:mb-28 items-start">
          
          <div className="lg:col-span-5">
            <span className="px-3 py-1 bg-white/10 text-[#ffe600] font-mono text-[10px] font-black uppercase rounded-full tracking-wider border border-white/15">
              FREQUENTLY ASKED
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mt-3 font-sans leading-tight">
              GOT QUESTIONS?
              <br />
              <span className="text-[#0055ff]">WE GOT ANSWERS.</span>
            </h2>
            <p className="text-white/70 text-sm md:text-base font-medium mt-4 leading-relaxed max-w-[420px]">
              Everything you need to know about departmental admissions, student council recruitment, and participating in annual fests.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 rounded-2xl md:rounded-3xl p-6 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left font-sans font-bold text-base sm:text-lg text-white"
                  >
                    <span>{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#ffe600]">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-white/10 text-white/70 text-sm leading-relaxed font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* ── Giant Bottom Call-to-Action Banner ── */}
        <div className="relative w-full rounded-3xl md:rounded-[48px] bg-gradient-to-r from-[#0022aa] via-[#051133] to-[#120524] p-8 sm:p-12 md:p-16 border border-white/20 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="relative z-10 max-w-xl text-center md:text-left space-y-3">
            <span className="px-3 py-1 bg-[#ffe600] text-black font-mono text-[10px] font-black uppercase rounded-full tracking-wider inline-block">
              SESSION 2026-27 ACTIVE
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none font-sans">
              BE A PART OF THE NEXT WAVE IN AI
            </h3>
            <p className="text-white/80 text-sm sm:text-base font-medium leading-relaxed">
              Connect with fellow student innovators, submit your capstone research, or compete in our flagship hackathons.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/events"
              className="px-8 py-4 rounded-full bg-[#ffe600] hover:bg-[#ffd600] text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
              Explore Fests & Events <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/team"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all"
            >
              Contact Committee
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
