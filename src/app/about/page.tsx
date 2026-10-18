"use client";

import { useState } from "react";
import TextReveal from "@/components/TextReveal";
import { 
  Building2, 
  Target, 
  Compass, 
  Brain, 
  Database, 
  Cpu, 
  Globe, 
  BookOpen, 
  ShieldCheck, 
  Quote, 
  UserCheck, 
  Shield, 
  Award,
  GraduationCap
} from "lucide-react";
import { useContent } from "@/context/content-context";

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
      title: "Principal's Message",
      name: "Dr. Sawata R. Deore",
      role: "Principal, ACPCE (BE, ME, PhD Tech.)",
      badge: "INSTITUTIONAL LEADERSHIP",
      icon: Shield,
      quote: "Our Main Aim is to Create, Nurture and Shape Technical Professionals with Skills to face the ever changing social, economical and technical landscape of our country. We provide high-end undergraduate Education and Research Opportunities in new Frontiers of Engineering and Technology."
    },
    {
      title: "Head of Department (HoD) Message",
      name: "Mrs. Shilpali Bansu",
      role: "Head of Department & Assistant Professor, AI & DS",
      badge: "ACADEMIC LEADERSHIP",
      icon: UserCheck,
      quote: "Welcome to the Department of Artificial Intelligence and Data Science at A. C. Patil College of Engineering. Our department is dedicated to nurturing innovative thinkers, skilled data engineers, and ethical AI professionals through cutting-edge laboratory training and industry collaborations."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#02040a] text-white pt-32 pb-24 px-4 md:px-8" data-theme="dark">
      <div className="layout-block max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-12 border-b border-[#262626] pb-10">
          <div className="mono-small text-[#0e76ff] font-bold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0e76ff] animate-ping" />
            DEPARTMENT OF AI & DATA SCIENCE • ACPCE NAVI MUMBAI
          </div>
          <TextReveal
            text="Academic & Institutional Overview"
            as="h1"
            className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-6 font-sans"
          />
          <p className="body-large text-[#a3a3a3] max-w-3xl font-medium leading-relaxed">
            Established in 2021 with an expanded intake of 120 students, the Department of Artificial Intelligence & Data Science at A. C. Patil College of Engineering delivers industry-aligned engineering education, state-of-the-art GPU labs, and research opportunities.
          </p>

          {/* Navigation Sub-Tabs */}
          <div className="flex gap-4 mt-8 pt-4 border-t border-white/10 font-mono text-xs">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-5 py-2.5 transition-colors border ${activeTab === "overview" ? "bg-[#0e76ff] border-[#0e76ff] text-white font-bold" : "bg-[#080d1a] border-[#262626] text-[#a3a3a3] hover:text-white"}`}
            >
              DEPARTMENT OVERVIEW
            </button>
            <button
              onClick={() => setActiveTab("leadership")}
              className={`px-5 py-2.5 transition-colors border ${activeTab === "leadership" ? "bg-[#0e76ff] border-[#0e76ff] text-white font-bold" : "bg-[#080d1a] border-[#262626] text-[#a3a3a3] hover:text-white"}`}
            >
              LEADERSHIP MESSAGES
            </button>
            <button
              onClick={() => setActiveTab("academics")}
              className={`px-5 py-2.5 transition-colors border ${activeTab === "academics" ? "bg-[#0e76ff] border-[#0e76ff] text-white font-bold" : "bg-[#080d1a] border-[#262626] text-[#a3a3a3] hover:text-white"}`}
            >
              ACADEMIC MATRIX & TOPPERS
            </button>
          </div>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-16">
            
            {/* Intro Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 card-frosted p-8 border border-white/10 has-pin has-pin--light">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#0e76ff]/20 text-[#0e76ff] border border-[#0e76ff]/30">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="mono-small text-[#0e76ff] font-bold">ESTABLISHED 2021</span>
                </div>
                <h2 className="text-3xl font-bold font-sans mb-4">Empowering Engineers for Tomorrow</h2>
                <p className="text-[#a3a3a3] text-sm leading-relaxed mb-4">
                  The Department of Artificial Intelligence & Data Science was established in 2021 at A. C. Patil College of Engineering, Navi Mumbai. Driven by rapid advancements in machine learning, neural networks, and big data infrastructure, the department expanded its intake capacity to 120 seats in A.Y. 2024–25.
                </p>
                <p className="text-[#a3a3a3] text-sm leading-relaxed">
                  Our curriculum combines foundational computer science principles with specialized coursework in Deep Learning, Natural Language Processing, Computer Vision, MLOps, and Data Analytics, supported by modern computational laboratories and experienced faculty.
                </p>
              </div>

              {/* Statistics Card */}
              <div className="card-frosted p-8 border border-white/10 has-pin has-pin--light flex flex-col justify-between">
                <div>
                  <span className="mono-small text-[#0e76ff] font-bold block mb-4">DEPARTMENT STATS</span>
                  <div className="space-y-6">
                    <div>
                      <div className="text-4xl font-bold font-sans text-white">120</div>
                      <div className="text-xs font-mono text-[#a3a3a3] uppercase mt-1">Annual Student Intake</div>
                    </div>
                    <div className="border-t border-[#262626] pt-4">
                      <div className="text-4xl font-bold font-sans text-white">480+</div>
                      <div className="text-xs font-mono text-[#a3a3a3] uppercase mt-1">Total Active Students</div>
                    </div>
                    <div className="border-t border-[#262626] pt-4">
                      <div className="text-4xl font-bold font-sans text-white">24+</div>
                      <div className="text-xs font-mono text-[#a3a3a3] uppercase mt-1">Faculty & Lab Researchers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-frosted p-8 border border-[#0e76ff]/40 bg-[#061122] has-pin has-pin--light">
                <Target className="w-8 h-8 text-[#0e76ff] mb-6" />
                <h3 className="text-2xl font-bold font-sans mb-3 text-white">Department Vision</h3>
                <p className="text-[#a3a3a3] text-base leading-relaxed italic">
                  &ldquo;To develop professionals in Artificial Intelligence & Data Science Engineering who are socially responsible to meet the needs of society and industries.&rdquo;
                </p>
              </div>

              <div className="card-frosted p-8 border border-white/10 has-pin has-pin--light">
                <Compass className="w-8 h-8 text-[#0e76ff] mb-6" />
                <h3 className="text-2xl font-bold font-sans mb-3 text-white">Department Mission</h3>
                <ul className="text-[#a3a3a3] text-sm leading-relaxed space-y-3 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#0e76ff] mt-2 shrink-0" />
                    <span>To offer a strong base knowledge through theory, hands-on lab experience, and the use of latest technology.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#0e76ff] mt-2 shrink-0" />
                    <span>To offer a platform for engaging with professionals from the industry.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#0e76ff] mt-2 shrink-0" />
                    <span>To inculcate social awareness through co-curricular and extracurricular activities.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Core Domains */}
            <div>
              <div className="mono-small text-[#0e76ff] font-bold mb-6">CORE TECHNICAL DOMAINS</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {domains.map((dom, idx) => {
                  const Icon = dom.icon;
                  return (
                    <div key={idx} className="card-frosted p-6 border border-white/10 has-pin has-pin--light">
                      <Icon className="w-6 h-6 text-[#0e76ff] mb-4" />
                      <h4 className="font-bold text-lg font-sans mb-2 text-white">{dom.title}</h4>
                      <p className="text-xs text-[#a3a3a3] leading-relaxed">{dom.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PEOs and PSOs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card-frosted p-8 border border-white/10 has-pin has-pin--light space-y-6">
                <h3 className="text-2xl font-bold font-sans text-white flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-[#0e76ff]" />
                  Program Educational Objectives (PEOs)
                </h3>
                <div className="space-y-4">
                  {peos.map((peo, idx) => (
                    <div key={idx} className="p-4 bg-[#080d1a] border border-[#262626] space-y-1">
                      <span className="mono-small text-[#0e76ff] font-bold">{peo.number}</span>
                      <h4 className="font-bold text-sm text-white">{peo.title}</h4>
                      <p className="text-xs text-[#a3a3a3] leading-relaxed">{peo.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-frosted p-8 border border-white/10 has-pin has-pin--light space-y-6">
                <h3 className="text-2xl font-bold font-sans text-white flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#0e76ff]" />
                  Program Specific Outcomes (PSOs)
                </h3>
                <div className="space-y-4">
                  {psos.map((pso, idx) => (
                    <div key={idx} className="p-4 bg-[#080d1a] border border-[#262626] space-y-1">
                      <span className="mono-small text-[#0e76ff] font-bold">{pso.number}</span>
                      <h4 className="font-bold text-sm text-white">{pso.title}</h4>
                      <p className="text-xs text-[#a3a3a3] leading-relaxed">{pso.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: LEADERSHIP MESSAGES */}
        {activeTab === "leadership" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="card-frosted p-8 border border-white/10 has-pin has-pin--light space-y-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="mono-small bg-[#0e76ff] text-white px-2.5 py-1 text-xs">
                        {item.badge}
                      </span>
                      <Icon className="w-6 h-6 text-[#0e76ff]" />
                    </div>
                    <h3 className="text-2xl font-bold font-sans text-white mb-1">{item.name}</h3>
                    <div className="text-xs font-mono text-[#0e76ff] mb-4">{item.role}</div>
                    <div className="relative pt-4 border-t border-[#262626]">
                      <Quote className="w-8 h-8 text-[#0e76ff]/20 absolute -top-3 -left-2" />
                      <p className="text-sm text-[#a3a3a3] leading-relaxed italic pl-6 font-sans">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 3: ACADEMICS & TOPPERS */}
        {activeTab === "academics" && (
          <div className="space-y-16">
            
            {/* Academic Toppers */}
            <div>
              <div className="mono-small text-[#0e76ff] font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#0e76ff]" />
                DEPARTMENT ACADEMIC TOPPERS
              </div>
              <h2 className="text-3xl font-bold font-sans mb-8">Semester Excellence Rankers</h2>
              
              {toppers.length === 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { rank: "Rank 1", name: "Siddhi Kadam", sgpa: "9.82 SGPA", batch: "TE AI & DS" },
                    { rank: "Rank 2", name: "Aditya Patil", sgpa: "9.65 SGPA", batch: "TE AI & DS" },
                    { rank: "Rank 3", name: "Rohan Deshmukh", sgpa: "9.48 SGPA", batch: "TE AI & DS" }
                  ].map((t, idx) => (
                    <div key={idx} className="card-frosted p-6 border border-white/10 has-pin has-pin--light">
                      <div className="mono-small text-[#0e76ff] font-bold mb-2">{t.rank} • {t.batch}</div>
                      <h3 className="text-xl font-bold text-white font-sans">{t.name}</h3>
                      <div className="text-sm font-mono text-[#a3a3a3] mt-2">{t.sgpa}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {toppers.map((t, idx) => (
                    <div key={idx} className="card-frosted p-6 border border-white/10 has-pin has-pin--light">
                      <div className="mono-small text-[#0e76ff] font-bold mb-2">{t.rank} • {t.yearBatch} ({t.semType} Sem)</div>
                      <h3 className="text-xl font-bold text-white font-sans">{t.name}</h3>
                      <div className="text-sm font-mono text-[#a3a3a3] mt-2">{t.sgpa} SGPA</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* NPTEL & Domain Certifications */}
            <div>
              <div className="mono-small text-[#0e76ff] font-bold mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0e76ff]" />
                NATIONAL NPTEL DOMAIN CERTIFICATIONS
              </div>
              <h2 className="text-3xl font-bold font-sans mb-8">NPTEL Top Performers</h2>

              {nptel.length === 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: "Mrs. Shilpali Bansu", course: "Deep Learning (NPTEL Domain Elite + Gold)", score: "94% Score", year: "2025" },
                    { name: "Pranav Mhatre", course: "Python for Data Science (Elite Certified)", score: "89% Score", year: "2025" }
                  ].map((n, idx) => (
                    <div key={idx} className="card-frosted p-6 border border-white/10 has-pin has-pin--light flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-bold text-white font-sans">{n.name}</h3>
                        <p className="text-xs text-[#a3a3a3] mt-1">{n.course}</p>
                      </div>
                      <div className="mono-small bg-[#0e76ff]/20 text-[#0e76ff] px-3 py-1 border border-[#0e76ff]/30 font-bold shrink-0">
                        {n.score}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {nptel.map((n, idx) => (
                    <div key={idx} className="card-frosted p-6 border border-white/10 has-pin has-pin--light flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-bold text-white font-sans">{n.name}</h3>
                        <p className="text-xs text-[#a3a3a3] mt-1">{n.course}</p>
                      </div>
                      <div className="mono-small bg-[#0e76ff]/20 text-[#0e76ff] px-3 py-1 border border-[#0e76ff]/30 font-bold shrink-0">
                        {n.score}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
