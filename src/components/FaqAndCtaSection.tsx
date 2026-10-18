"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight, Mail } from "lucide-react";
import { DoodleSparkle } from "./DoodleSVGs";

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
    <section className="relative w-full bg-[#f8fafd] text-black px-6 sm:px-10 md:px-16 py-20 md:py-28 overflow-hidden border-t border-black/5">
      <div className="max-w-[1280px] mx-auto">
        
        {/* ── FAQ Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 md:mb-28 items-start">
          
          <div className="lg:col-span-5">
            <span className="px-3 py-1 bg-[#0038ff]/10 text-[#0038ff] font-mono text-[10px] font-black uppercase rounded-full tracking-wider">
              FREQUENTLY ASKED
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mt-3 font-sans leading-tight">
              GOT QUESTIONS?
              <br />
              <span className="text-[#0038ff]">WE GOT ANSWERS.</span>
            </h2>
            <p className="text-black/60 text-sm md:text-base font-medium mt-4 leading-relaxed max-w-[420px]">
              Everything you need to know about departmental admissions, student council recruitment, and participating in annual fests.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => toggleFaq(idx)}
                  className="bg-white rounded-2xl md:rounded-3xl p-6 border border-black/8 hover:border-black/20 transition-all cursor-pointer shadow-sm"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-bold text-base md:text-lg text-black font-sans pr-2">
                      {faq.q}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[#f0f4f9] flex items-center justify-center shrink-0 text-black">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>

                  {isOpen && (
                    <p className="text-sm md:text-base text-black/65 font-medium leading-relaxed mt-4 pt-4 border-t border-black/8 animate-in fade-in duration-200">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* ── Big Call To Action Card (Electric Blue + Lime) ── */}
        <div className="bg-[#0038ff] text-white rounded-3xl md:rounded-[48px] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Subtle grid */}
          <div className="absolute inset-0 pointer-events-none opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:36px_36px]" />

          <div className="relative z-10 max-w-[620px]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#ccff00] text-black font-mono text-[10px] font-black uppercase rounded-full tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              JOIN THE AI REVOLUTION
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none font-sans">
              READY TO CODE,
              <br />
              <span className="text-[#ccff00]">BUILD & LEAD?</span>
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium mt-4 leading-relaxed">
              Connect with department coordinators, explore active research clusters, or register for the upcoming Vectors Hackathon session.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <Link
              href="/events"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#ccff00] hover:bg-[#b8e600] text-black font-mono text-xs font-black uppercase tracking-wider text-center transition-all shadow-lg hover:scale-105"
            >
              EXPLORE EVENTS
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/25 font-mono text-xs font-bold uppercase tracking-wider text-center transition-all"
            >
              ABOUT DEPARTMENT
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
