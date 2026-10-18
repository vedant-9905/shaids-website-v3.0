"use client";

import { useState } from "react";
import { 
  Building2, 
  Brain, 
  Database, 
  Cpu, 
  Globe, 
  Shield, 
  Award,
  GraduationCap,
  Quote,
  Target,
  Compass,
  CheckCircle2
} from "lucide-react";
import { useContent } from "@/context/content-context";
import { DoodleHashtag, DoodleCurvedArrowDown, DoodleSparkle, DoodleUnderline } from "@/components/DoodleSVGs";

export default function AboutPage() {
  const { toppers, nptel } = useContent();
  const [activeTab, setActiveTab] = useState<"overview" | "leadership" | "academics">("overview");

  const peos = [
    {
      number: "PEO 1",
      title: "Lifelong Learning & Technological Adaptation",
      desc: "To engage in lifelong learning and adapt with rapidly changing technologies in the field of Artificial Intelligence & Data Science."
    },
    {
      number: "PEO 2",
      title: "Effective Teamwork & Ethical Responsibility",
      desc: "To work effectively in multidisciplinary teams and exhibit ethical engineering responsibilities."
    },
    {
      number: "PEO 3",
      title: "Multidisciplinary AI Systems Implementation",
      desc: "To enhance proficiency across multidisciplinary engineering domains for the effective deployment of real-world AI systems."
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
      title: "Principal's Address",
      name: "Dr. Sawata R. Deore",
      role: "Principal, ACPCE (BE, ME, PhD Tech.)",
      badge: "INSTITUTIONAL VISIONARY",
      icon: Shield,
      quote: "Our Main Aim is to Create, Nurture and Shape Technical Professionals with Skills to face the ever changing social, economical and technical landscape of our country. We provide high-end undergraduate Education and Research Opportunities in new Frontiers of Engineering and Technology."
    },
    {
      title: "HoD's Address",
      name: "Mrs. Shilpali Bansu",
      role: "Head of Department & Assistant Professor, AI & DS",
      badge: "ACADEMIC LEADERSHIP",
      icon: Award,
      quote: "Welcome to the Department of Artificial Intelligence and Data Science at A. C. Patil College of Engineering. Our department is dedicated to nurturing innovative thinkers, skilled data engineers, and ethical AI professionals through cutting-edge laboratory training and industry collaborations."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8fafd] text-black">
      
      {/* ── Hero Banner (Electric Blue + Neon Lime Hashtag) ── */}
      <section className="relative w-full bg-[#0038ff] text-white pt-32 md:pt-40 pb-16 md:pb-24 px-6 sm:px-10 md:px-16 overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative max-w-[1280px] mx-auto">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-white font-mono text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
            ACPCE NAVI MUMBAI · ESTD 2021
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <DoodleHashtag className="w-12 sm:w-16 h-auto -mt-3" />
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none font-sans">
                  ABOUT SHAIDS
                </h1>
              </div>
              <p className="text-white/80 max-w-2xl text-base sm:text-lg font-medium leading-relaxed mt-4">
                Pioneering intelligence, high-performance data systems, and ethical engineering at A. C. Patil College of Engineering with 120 annual intake.
              </p>
            </div>

            {/* Sub-navigation Capsule Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-white/12 backdrop-blur-xl border border-white/20 rounded-full font-mono text-xs">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 sm:px-5 py-2 rounded-full transition-all duration-200 font-bold uppercase tracking-wider ${
                  activeTab === "overview"
                    ? "bg-[#ccff00] text-black shadow-md"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                OVERVIEW
              </button>
              <button
                onClick={() => setActiveTab("leadership")}
                className={`px-4 sm:px-5 py-2 rounded-full transition-all duration-200 font-bold uppercase tracking-wider ${
                  activeTab === "leadership"
                    ? "bg-[#ccff00] text-black shadow-md"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                LEADERSHIP
              </button>
              <button
                onClick={() => setActiveTab("academics")}
                className={`px-4 sm:px-5 py-2 rounded-full transition-all duration-200 font-bold uppercase tracking-wider ${
                  activeTab === "academics"
                    ? "bg-[#ccff00] text-black shadow-md"
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
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-black/8 shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all">
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 rounded-xl bg-[#0038ff]/10 text-[#0038ff] flex items-center justify-center">
                      <Target className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-widest text-[#0038ff] uppercase">
                      DEPARTMENT VISION
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black font-sans leading-snug">
                    FOSTERING GLOBAL AI INNOVATION
                  </h3>
                  <p className="text-black/65 text-sm sm:text-base font-medium leading-relaxed mt-4">
                    To be a recognized center of excellence in Artificial Intelligence & Data Science, producing ethically responsible technocrats capable of solving complex societal and industrial challenges.
                  </p>
                </div>
                <div className="mt-8 pt-5 border-t border-black/8 flex items-center gap-2 text-xs font-mono font-bold text-black/50 uppercase">
                  <span>PILLAR 01</span> · <span>EXCELLENCE IN AI</span>
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-black/8 shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all">
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 rounded-xl bg-[#ccff00] text-black flex items-center justify-center">
                      <Compass className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-widest text-black/70 uppercase">
                      DEPARTMENT MISSION
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black font-sans leading-snug">
                    HOLISTIC PEDAGOGY & RESEARCH
                  </h3>
                  <ul className="space-y-3 mt-4 text-sm sm:text-base text-black/65 font-medium leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0038ff] shrink-0 mt-1" />
                      <span>Deliver industry-aligned curriculum combining theoretical rigor and hands-on laboratory experimentation.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0038ff] shrink-0 mt-1" />
                      <span>Promote interdisciplinary research, patent filings, and capstone engineering solving real-world needs.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-black/8 flex items-center gap-2 text-xs font-mono font-bold text-black/50 uppercase">
                  <span>PILLAR 02</span> · <span>HOLISTIC IMPACT</span>
                </div>
              </div>

            </div>

            {/* 4 Specialized Domains Grid */}
            <div>
              <div className="mb-8">
                <span className="font-mono text-xs font-bold tracking-widest text-[#0038ff] uppercase bg-[#0038ff]/10 px-3 py-1 rounded-full">
                  SPECIALIZED CURRICULUM
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-3 font-sans">
                  4 CORE RESEARCH DOMAINS
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {domains.map((dom, i) => {
                  const Icon = dom.icon;
                  return (
                    <div
                      key={dom.title}
                      className="bg-white rounded-3xl p-6 sm:p-7 border border-black/8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-[#0038ff]/10 text-[#0038ff] flex items-center justify-center mb-6">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-black uppercase tracking-tight text-black font-sans">
                          {dom.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-black/60 font-medium leading-relaxed mt-2.5">
                          {dom.desc}
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-black/8 font-mono text-[10px] font-bold text-black/40 uppercase">
                        DOMAIN 0{i + 1}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PEOs and PSOs Bento Lists */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* PEOs */}
              <div className="bg-white rounded-3xl p-8 border border-black/8 shadow-sm">
                <span className="font-mono text-xs font-bold text-[#0038ff] uppercase tracking-wider block mb-4">
                  PROGRAM EDUCATIONAL OBJECTIVES (PEOs)
                </span>
                <div className="space-y-6">
                  {peos.map((peo) => (
                    <div key={peo.number} className="border-b border-black/8 pb-5 last:border-b-0 last:pb-0">
                      <div className="font-mono text-xs font-black text-[#0038ff] uppercase">
                        {peo.number}
                      </div>
                      <h4 className="text-base font-bold text-black mt-0.5 font-sans">
                        {peo.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-black/60 font-medium mt-1.5 leading-relaxed">
                        {peo.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PSOs */}
              <div className="bg-white rounded-3xl p-8 border border-black/8 shadow-sm">
                <span className="font-mono text-xs font-bold text-[#0038ff] uppercase tracking-wider block mb-4">
                  PROGRAM SPECIFIC OBJECTIVES (PSOs)
                </span>
                <div className="space-y-6">
                  {psos.map((pso) => (
                    <div key={pso.number} className="border-b border-black/8 pb-5 last:border-b-0 last:pb-0">
                      <div className="font-mono text-xs font-black text-[#0038ff] uppercase">
                        {pso.number}
                      </div>
                      <h4 className="text-base font-bold text-black mt-0.5 font-sans">
                        {pso.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-black/60 font-medium mt-1.5 leading-relaxed">
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
          <div className="space-y-8">
            {leadership.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-3xl md:rounded-[36px] p-8 sm:p-12 border border-black/8 shadow-sm flex flex-col md:flex-row gap-8 items-start justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#ccff00] text-black font-mono text-[10px] font-black uppercase rounded-full tracking-wider">
                      {item.badge}
                    </span>
                    <span className="font-mono text-xs font-bold text-black/40 uppercase">
                      {item.title}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black font-sans">
                    {item.name}
                  </h3>
                  <div className="text-sm font-bold text-[#0038ff] font-mono mt-1">
                    {item.role}
                  </div>

                  <div className="relative mt-6 pt-6 border-t border-black/8">
                    <Quote className="w-8 h-8 text-[#0038ff]/20 absolute top-4 left-0 -translate-y-1/2" />
                    <p className="text-base sm:text-lg text-black/75 font-medium leading-relaxed italic pl-6">
                      "{item.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── TAB 3: ACADEMICS & TOPPERS ── */}
        {activeTab === "academics" && (
          <div className="space-y-12">
            
            {/* University Toppers Section */}
            <div>
              <div className="mb-8">
                <span className="font-mono text-xs font-bold tracking-widest text-[#0038ff] uppercase bg-[#0038ff]/10 px-3 py-1 rounded-full">
                  MUMBAI UNIVERSITY RANKINGS
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-3 font-sans">
                  DEPARTMENT MERIT TOPPERS
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(toppers && toppers.length > 0 ? toppers : [
                  { id: "1", name: "Aarav Sharma", year: "Final Year", semester: "Sem VII", sgpa: "9.82", rank: 1 },
                  { id: "2", name: "Isha Patel", year: "Final Year", semester: "Sem VII", sgpa: "9.68", rank: 2 },
                  { id: "3", name: "Rohan Deshmukh", year: "Third Year", semester: "Sem V", sgpa: "9.54", rank: 3 },
                  { id: "4", name: "Ananya Joshi", year: "Third Year", semester: "Sem V", sgpa: "9.45", rank: 4 },
                  { id: "5", name: "Kunal Shinde", year: "Second Year", semester: "Sem III", sgpa: "9.41", rank: 5 },
                  { id: "6", name: "Pooja Nair", year: "Second Year", semester: "Sem III", sgpa: "9.36", rank: 6 }
                ]).map((t: any, idx: number) => (
                  <div
                    key={t.id || idx}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-black/8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-[#0038ff] text-white font-mono text-[10px] font-black uppercase rounded-full">
                          RANK #{t.rank || idx + 1}
                        </span>
                        <div className="text-2xl font-black text-[#0038ff] font-mono">
                          {t.sgpa} <span className="text-xs font-bold text-black/40">SGPA</span>
                        </div>
                      </div>

                      <h4 className="text-xl font-black uppercase tracking-tight text-black font-sans">
                        {t.name}
                      </h4>
                      <p className="text-xs font-mono text-black/50 mt-1 uppercase">
                        {t.year} · {t.semester}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-black/8 flex items-center justify-between text-xs font-mono font-bold text-black/40 uppercase">
                      <span>ACPCE AI&DS</span>
                      <span className="text-emerald-600">DISTINCTION</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NPTEL Certifications */}
            <div className="pt-8 border-t border-black/8">
              <div className="mb-8">
                <span className="font-mono text-xs font-bold tracking-widest text-[#0038ff] uppercase bg-[#0038ff]/10 px-3 py-1 rounded-full">
                  SWAYAM NPTEL HONORS
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-3 font-sans">
                  ELITE & GOLD CERTIFICATIONS
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(nptel && nptel.length > 0 ? nptel : [
                  { id: "1", candidate_name: "Prof. Shilpali Bansu", course_name: "Deep Learning (IIT Ropar)", badge: "Elite + Gold (Top 1%)", score: "94%" },
                  { id: "2", candidate_name: "Mihir Gosavi", course_name: "Natural Language Processing (IIT Madras)", badge: "Elite + Silver", score: "88%" },
                  { id: "3", candidate_name: "Tanay Kotian", course_name: "Applied Accelerated AI (IIT Kharagpur)", badge: "Elite + Silver", score: "86%" },
                  { id: "4", candidate_name: "Vedant Patil", course_name: "Cloud Computing & Distributed Systems", badge: "Elite Certification", score: "81%" }
                ]).map((n: any, idx: number) => (
                  <div
                    key={n.id || idx}
                    className="bg-white rounded-3xl p-7 border border-black/8 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="px-3 py-1 bg-[#ccff00] text-black font-mono text-[10px] font-black uppercase rounded-full">
                          {n.badge}
                        </span>
                        <span className="font-mono text-xl font-black text-black">
                          {n.score}
                        </span>
                      </div>

                      <h4 className="text-xl font-black uppercase tracking-tight text-black font-sans">
                        {n.course_name}
                      </h4>
                      <p className="text-xs font-mono text-[#0038ff] font-bold mt-1 uppercase">
                        Candidate: {n.candidate_name}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-black/8 flex items-center justify-between text-xs font-mono font-bold text-black/40 uppercase">
                      <span>NPTEL IIT CERTIFIED</span>
                      <span>NATIONAL RECOGNITION</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
