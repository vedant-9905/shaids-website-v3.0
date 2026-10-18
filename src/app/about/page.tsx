"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Target, 
  Compass, 
  Brain, 
  Database, 
  Cpu, 
  Globe, 
  Award, 
  Trophy, 
  GraduationCap, 
  CheckCircle2, 
  Mail, 
  ChevronRight,
  BookOpen
} from "lucide-react";
import { useContent, TopperItem } from "@/context/content-context";
import { DoodleHashtag, DoodleCurvedArrowDown, DoodleSparkle, DoodleSquiggleWave } from "@/components/DoodleSVGs";

export default function AboutPage() {
  const { toppers } = useContent();
  const [activeTab, setActiveTab] = useState<"overview" | "leadership" | "academics">("overview");

  const peos = [
    {
      number: "PEO 1",
      title: "Core Competency & Innovation",
      desc: "Graduates will apply foundational computer engineering and advanced artificial intelligence principles to formulate and solve complex multi-domain challenges."
    },
    {
      number: "PEO 2",
      title: "Lifelong Learning & Adaptability",
      desc: "Graduates will continually upgrade their technical acumen in generative AI, deep learning, and cloud computing frameworks to adapt to evolving industry paradigms."
    },
    {
      number: "PEO 3",
      title: "Professional Ethics & Leadership",
      desc: "Graduates will demonstrate leadership, team synergy, effective communication, and responsible engineering stewardship with social sensitivity."
    }
  ];

  const psos = [
    {
      number: "PSO 1",
      title: "Programming Science & Data Insights",
      desc: "Exhibit proficiency in programming science, security, and algorithms while extracting actionable insights from AI & Data Science principles."
    },
    {
      number: "PSO 2",
      title: "Engineering Practices & System Enhancement",
      desc: "Apply professional engineering practices to the development, deployment, and optimization of artificial intelligence solutions."
    }
  ];

  const domains = [
    {
      title: "Machine Learning & Neural Networks",
      icon: Brain,
      desc: "Deep neural networks, reinforcement learning, predictive modeling, and automated MLOps pipelines."
    },
    {
      title: "Big Data & Cloud Infrastructure",
      icon: Database,
      desc: "Distributed computing architectures, high-throughput data engineering, and enterprise cloud infrastructure."
    },
    {
      title: "Natural Language Processing & GenAI",
      icon: Cpu,
      desc: "Transformer models, Large Language Models (LLMs), semantic analysis, and conversational AI agents."
    },
    {
      title: "Computer Vision & Edge Computing",
      icon: Globe,
      desc: "Real-time object detection (YOLOv8), image classification, pose estimation, and microcontroller edge deployment."
    }
  ];

  const leadership = [
    {
      name: "Dr. Sawata R. Deore",
      designation: "Principal, A. C. Patil College of Engineering",
      role: "Institutional Head",
      email: "principal@acpce.ac.in",
      quote: "Our mission is to empower student engineers with deep theoretical foundations and fearless practical engineering capability. In AI & Data Science, we are cultivating tomorrow's AI pioneers.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80"
    },
    {
      name: "Mrs. Shilpali Bansu",
      designation: "Head of Department & Assistant Professor",
      role: "Head of Department",
      email: "shilpali.bansu@acpce.ac.in",
      quote: "The Department of Artificial Intelligence & Data Science stands as a bridge between foundational mathematical rigor and industrial AI breakthroughs. SHAIDS is the student catalyst bringing that vision alive.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#050508] text-white">
      
      {/* ── Hero Banner (Pitch Black + Candy Doodle Accents) ── */}
      <section className="relative w-full bg-[#000000] text-white pt-32 md:pt-40 pb-16 md:pb-24 px-6 sm:px-10 md:px-16 overflow-hidden border-b border-white/10">
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px"
          }}
        />

        <div className="relative max-w-[1280px] mx-auto z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-mono text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00f5a0] animate-pulse" />
                DEPARTMENT PROFILE & CHARTER
              </div>

              <div className="flex items-center gap-3">
                <DoodleHashtag className="w-12 sm:w-16 h-auto -mt-3" color="#ffe600" />
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none font-sans">
                  ABOUT SHAIDS
                </h1>
              </div>

              <p className="text-white/80 max-w-2xl text-base sm:text-lg font-medium leading-relaxed mt-4">
                Pioneering intelligence, high-performance data systems, and ethical engineering at A. C. Patil College of Engineering with 120 annual intake.
              </p>
            </div>

            {/* Sub-navigation Capsule Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full font-mono text-xs">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 sm:px-5 py-2 rounded-full transition-all duration-200 font-bold uppercase tracking-wider ${
                  activeTab === "overview"
                    ? "bg-[#ffe600] text-black shadow-md font-black"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                OVERVIEW
              </button>
              <button
                onClick={() => setActiveTab("leadership")}
                className={`px-4 sm:px-5 py-2 rounded-full transition-all duration-200 font-bold uppercase tracking-wider ${
                  activeTab === "leadership"
                    ? "bg-[#ffe600] text-black shadow-md font-black"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                LEADERSHIP
              </button>
              <button
                onClick={() => setActiveTab("academics")}
                className={`px-4 sm:px-5 py-2 rounded-full transition-all duration-200 font-bold uppercase tracking-wider ${
                  activeTab === "academics"
                    ? "bg-[#ffe600] text-black shadow-md font-black"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                TOPPERS & NPTEL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content Body Container ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 py-16 md:py-24">
        
        {/* ── TAB 1: OVERVIEW ── */}
        {activeTab === "overview" && (
          <div className="space-y-16">
            
            {/* Top Vision & Mission Bento Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Vision Card */}
              <div className="bg-white/[0.04] hover:bg-white/[0.07] rounded-3xl p-8 md:p-10 border border-white/10 shadow-xl flex flex-col justify-between group transition-all backdrop-blur-xl">
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 rounded-xl bg-[#0055ff]/20 text-[#0055ff] border border-[#0055ff]/30 flex items-center justify-center">
                      <Target className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-widest text-[#0055ff] uppercase">
                      DEPARTMENT VISION
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans leading-snug">
                    FOSTERING GLOBAL AI INNOVATION
                  </h3>
                  <p className="text-white/75 text-sm sm:text-base font-medium leading-relaxed mt-4">
                    To be a recognized center of excellence in Artificial Intelligence & Data Science, producing ethically responsible technocrats capable of solving complex societal and industrial challenges.
                  </p>
                </div>
                <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-2 text-xs font-mono font-bold text-white/50 uppercase">
                  <span>PILLAR 01</span> · <span>EXCELLENCE IN AI</span>
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-white/[0.04] hover:bg-white/[0.07] rounded-3xl p-8 md:p-10 border border-white/10 shadow-xl flex flex-col justify-between group transition-all backdrop-blur-xl">
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 rounded-xl bg-[#ffe600] text-black flex items-center justify-center">
                      <Compass className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-widest text-[#ffe600] uppercase">
                      DEPARTMENT MISSION
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans leading-snug">
                    HOLISTIC PEDAGOGY & RESEARCH
                  </h3>
                  <ul className="space-y-3 mt-4 text-sm sm:text-base text-white/75 font-medium leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00f5a0] shrink-0 mt-1" />
                      <span>Deliver industry-aligned curriculum combining theoretical rigor and hands-on laboratory experimentation.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00f5a0] shrink-0 mt-1" />
                      <span>Promote interdisciplinary research, patent filings, and capstone engineering solving real-world needs.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-2 text-xs font-mono font-bold text-white/50 uppercase">
                  <span>PILLAR 02</span> · <span>HOLISTIC IMPACT</span>
                </div>
              </div>

            </div>

            {/* 4 Specialized Domains Grid */}
            <div>
              <div className="mb-8">
                <span className="font-mono text-xs font-bold tracking-widest text-[#ffe600] uppercase bg-[#ffe600]/10 border border-[#ffe600]/20 px-3 py-1 rounded-full">
                  SPECIALIZED CURRICULUM
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-3 font-sans text-white">
                  4 CORE RESEARCH DOMAINS
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {domains.map((dom, i) => {
                  const Icon = dom.icon;
                  return (
                    <div
                      key={dom.title}
                      className="bg-white/[0.04] hover:bg-white/[0.08] rounded-3xl p-6 sm:p-7 border border-white/10 shadow-xl transition-all flex flex-col justify-between backdrop-blur-md"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-[#0055ff]/20 text-[#0055ff] border border-[#0055ff]/30 flex items-center justify-center mb-6">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-black uppercase tracking-tight text-white font-sans">
                          {dom.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-white/70 font-medium leading-relaxed mt-2.5">
                          {dom.desc}
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-white/10 font-mono text-[10px] font-bold text-white/40 uppercase">
                        DOMAIN 0{i + 1}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PEOs & PSOs Bento Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              
              {/* PEOs */}
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs font-bold tracking-widest text-[#0055ff] uppercase bg-[#0055ff]/10 border border-[#0055ff]/20 px-3 py-1 rounded-full">
                    GRADUATE BENCHMARKS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-3 font-sans text-white">
                    Program Educational Objectives (PEOs)
                  </h3>
                </div>

                <div className="space-y-4">
                  {peos.map((peo) => (
                    <div key={peo.number} className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 space-y-2">
                      <span className="font-mono text-xs font-black text-[#0055ff] uppercase">
                        {peo.number} · {peo.title}
                      </span>
                      <p className="text-sm text-white/75 leading-relaxed font-sans">
                        {peo.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PSOs */}
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs font-bold tracking-widest text-[#00f5a0] uppercase bg-[#00f5a0]/10 border border-[#00f5a0]/20 px-3 py-1 rounded-full">
                    DISCIPLINARY SKILLS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-3 font-sans text-white">
                    Program Specific Outcomes (PSOs)
                  </h3>
                </div>

                <div className="space-y-4">
                  {psos.map((pso) => (
                    <div key={pso.number} className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 space-y-2">
                      <span className="font-mono text-xs font-black text-[#00f5a0] uppercase">
                        {pso.number} · {pso.title}
                      </span>
                      <p className="text-sm text-white/75 leading-relaxed font-sans">
                        {pso.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ── TAB 2: LEADERSHIP ── */}
        {activeTab === "leadership" && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((lead) => (
                <div key={lead.name} className="bg-white/[0.04] border border-white/10 hover:border-white/20 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6 backdrop-blur-xl">
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] font-black uppercase tracking-wider bg-white/10 text-white px-3 py-1 rounded-full border border-white/15">
                      {lead.role}
                    </span>
                    <h3 className="text-3xl font-black text-white tracking-tight">
                      {lead.name}
                    </h3>
                    <div className="text-xs font-mono text-[#ffe600]">
                      {lead.designation}
                    </div>
                    <p className="text-base text-white/80 leading-relaxed font-sans pt-2 italic">
                      "{lead.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                    <span className="text-white/50">{lead.email}</span>
                    <a href={`mailto:${lead.email}`} className="text-[#ffe600] font-bold hover:underline flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5" /> Email
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 3: ACADEMICS & TOPPERS ── */}
        {activeTab === "academics" && (
          <div className="space-y-12">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-[#ffe600] uppercase bg-[#ffe600]/10 border border-[#ffe600]/20 px-3 py-1 rounded-full">
                UNIVERSITY TOPPERS & HONORS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-3 font-sans text-white">
                Academic Distinction Matrix
              </h2>
            </div>

            {toppers && toppers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {toppers.map((top) => (
                  <div key={top.id} className="bg-white/[0.04] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#ffe600] text-black">
                        {top.rank}
                      </span>
                      <span className="font-mono text-xs text-white/60">
                        {top.yearBatch} Batch
                      </span>
                    </div>

                    <h4 className="text-2xl font-black text-white tracking-tight">
                      {top.name}
                    </h4>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                      <span className="text-white/50">{top.semType} Semester</span>
                      <span className="text-lg font-black text-[#00f5a0]">SGPA {top.sgpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center rounded-3xl border border-white/10 bg-white/[0.02] text-white/60 font-mono text-xs">
                Academic honors and toppers records are updated post-semester results.
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
