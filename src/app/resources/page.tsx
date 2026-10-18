"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Download, 
  ExternalLink, 
  BookOpen, 
  FileText, 
  Code, 
  Compass, 
  Sparkles,
  Layers,
  Tag
} from "lucide-react";
import { useContent } from "@/context/content-context";
import { DoodleHashtag, DoodleCurvedArrowDown, DoodleSparkle } from "@/components/DoodleSVGs";

const DEFAULT_RESOURCES = [
  {
    id: "res-1",
    title: "Deep Learning & Neural Network Lab Manual",
    description: "Complete laboratory code experiments, PyTorch implementations, CNN architectures, and benchmark exercises.",
    category: "Lab Manuals",
    link: "https://github.com",
    author: "Prof. Shilpali Bansu",
    tags: ["PyTorch", "Deep Learning", "Lab Work"]
  },
  {
    id: "res-2",
    title: "End-to-End Generative AI & LLM Roadmap",
    description: "Curated learning trajectory from linear algebra and transformer mathematics to fine-tuning Llama-3 and LangChain agents.",
    category: "Roadmaps",
    link: "https://github.com",
    author: "SHAIDS Technical Cell",
    tags: ["MLOps", "LLMs", "Roadmap"]
  },
  {
    id: "res-3",
    title: "Data Structures & Algorithms in Python",
    description: "Comprehensive notes, time complexity charts, and technical interview preparation questions.",
    category: "Notes",
    link: "https://github.com",
    author: "Mihir Gosavi",
    tags: ["Python", "DSA", "Notes"]
  },
  {
    id: "res-4",
    title: "Computer Vision with OpenCV & YOLOv8",
    description: "Real-time object tracking, image segmentation, and edge device deployment scripts.",
    category: "Code Repositories",
    link: "https://github.com",
    author: "ACPCE AI Lab",
    tags: ["YOLOv8", "OpenCV", "Vision"]
  },
  {
    id: "res-5",
    title: "Mumbai University AI & DS Syllabus Scheme",
    description: "Complete academic scheme, credit distribution, elective course details, and laboratory hours.",
    category: "Notes",
    link: "https://acpce.ac.in",
    author: "Department Office",
    tags: ["Syllabus", "Curriculum", "MU Scheme"]
  },
  {
    id: "res-6",
    title: "Distributed Big Data Systems using Apache Spark",
    description: "HDFS architecture, PySpark transformation scripts, and streaming analytics pipelines.",
    category: "Lab Manuals",
    link: "https://github.com",
    author: "ACPCE Data Lab",
    tags: ["PySpark", "Big Data", "Hadoop"]
  }
];

const CATEGORIES = ["All", "Lab Manuals", "Roadmaps", "Notes", "Code Repositories"];

export default function ResourcesPage() {
  const { resources } = useContent();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allResources = resources && resources.length > 0 ? resources : DEFAULT_RESOURCES;
  const q = searchQuery.trim().toLowerCase();

  const filteredResources = allResources.filter((res) => {
    const matchesCategory = selectedCategory === "All" || res.category === selectedCategory;
    if (!matchesCategory) return false;
    if (!q) return true;
    return (
      res.title.toLowerCase().includes(q) ||
      res.description.toLowerCase().includes(q) ||
      res.tags?.some((t: string) => t.toLowerCase().includes(q))
    );
  });

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-mono text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00f5a0] animate-pulse" />
            STUDENT REPOSITORY & ACADEMIC VAULT
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3">
                <DoodleHashtag className="w-12 sm:w-16 h-auto -mt-3" color="#ffe600" />
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none font-sans">
                  RESOURCES HUB
                </h1>
              </div>

              <p className="text-white/80 max-w-2xl text-base sm:text-lg font-medium leading-relaxed mt-4">
                Curated lecture notes, laboratory assignment manuals, project code repos, and Mumbai University AI & DS schemes.
              </p>
            </div>
          </div>

          {/* Search Bar & Category Filters */}
          <div className="flex flex-col md:flex-row gap-4 pt-6 border-t border-white/10">
            {/* Search Input */}
            <div className="relative flex-1 max-w-xl">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
              <input
                type="text"
                placeholder="Search notes, algorithms, PyTorch, lab manuals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.08] border border-white/20 focus:border-[#ffe600] rounded-full pl-12 pr-6 py-3.5 text-white placeholder-white/40 font-mono text-xs focus:outline-none transition-colors"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2.5 rounded-full font-bold uppercase tracking-wider transition-all duration-200 border ${
                      active
                        ? "bg-[#ffe600] border-[#ffe600] text-black shadow-md font-black"
                        : "bg-white/[0.04] border-white/15 text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Resources Grid ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 py-16 md:py-24 space-y-12">
        
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-[#00f5a0] uppercase bg-[#00f5a0]/10 border border-[#00f5a0]/20 px-3 py-1 rounded-full">
              CURATED DIRECTORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-3 font-sans text-white">
              Available Resources ({filteredResources.length})
            </h2>
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="font-mono text-xs text-[#ffe600] hover:underline"
            >
              Clear Search
            </button>
          )}
        </div>

        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res) => (
              <div
                key={res.id}
                className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 rounded-3xl p-7 shadow-xl transition-all flex flex-col justify-between group backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#ffe600] text-black font-mono text-[10px] font-black uppercase rounded-full">
                      {res.category}
                    </span>
                    <span className="font-mono text-xs text-white/50">
                      By {res.author}
                    </span>
                  </div>

                  <h3 className="text-xl font-black uppercase tracking-tight text-white font-sans leading-tight">
                    {res.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 font-medium leading-relaxed mt-3">
                    {res.description}
                  </p>

                  {/* Tags */}
                  {res.tags && res.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {res.tags.map((tag: string, idx: number) => (
                        <span
                          key={idx}
                          className="font-mono text-[10px] text-white/60 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-lg"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-white/50 uppercase">
                    ACADEMIC ARCHIVE
                  </span>
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#0055ff] hover:bg-[#0044cc] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-md"
                  >
                    <span>ACCESS</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-16 text-center rounded-3xl border border-white/10 bg-white/[0.02] text-white/60 font-mono text-xs space-y-3">
            <p>No resources found matching "{searchQuery}" under "{selectedCategory}".</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
              className="px-4 py-2 bg-white/10 text-white rounded-full font-bold hover:bg-white/20"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
