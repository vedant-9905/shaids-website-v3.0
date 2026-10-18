"use client";

import { useState } from "react";
import { BookOpen, ExternalLink, Search, FileText, Code2, Map } from "lucide-react";
import { useContent } from "@/context/content-context";
import { DoodleHashtag } from "@/components/DoodleSVGs";

const DEFAULT_RESOURCES = [
  {
    id: "res-1",
    title: "Deep Learning & Neural Networks Lab Manual",
    description: "Official PyTorch and TensorFlow lab exercises covering CNNs, RNNs, and Transformer architectures.",
    category: "Lab Manuals",
    link: "https://github.com",
    author: "Prof. Shilpali Bansu",
    tags: ["PyTorch", "TensorFlow", "Deep Learning"]
  },
  {
    id: "res-2",
    title: "Full-Stack AI Engineer Roadmap 2026",
    description: "Step-by-step learning path from Python & SQL fundamentals to MLOps, LLM fine-tuning, and vector databases.",
    category: "Roadmaps",
    link: "https://roadmap.sh/ai-data-scientist",
    author: "SHAIDS Core Team",
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
    <div className="w-full min-h-screen bg-[#f8fafd] text-black">
      
      {/* ── Hero Banner (Electric Blue + Doodle Hashtag) ── */}
      <section className="relative w-full bg-[#0038ff] text-white pt-32 md:pt-40 pb-16 md:pb-24 px-6 sm:px-10 md:px-16 overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative max-w-[1280px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-white font-mono text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
            STUDENT REPOSITORY & ACADEMIC VAULT
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3">
                <DoodleHashtag className="w-12 sm:w-16 h-auto -mt-3" />
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none font-sans">
                  STUDENT RESOURCES
                </h1>
              </div>
              <p className="text-white/80 max-w-2xl text-base sm:text-lg font-medium leading-relaxed mt-4">
                Access verified lab assignment manuals, roadmap blueprints, Mumbai University syllabus schemes, and open-source codebases.
              </p>
            </div>

            {/* Search Input Pill */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-white/50 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search resources, topics, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white/12 backdrop-blur-xl border border-white/25 text-white placeholder:text-white/50 text-xs font-mono focus:outline-none focus:border-[#ccff00] transition-colors"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/15 font-mono text-xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full transition-all duration-200 font-bold uppercase tracking-wider ${
                  selectedCategory === cat
                    ? "bg-[#ccff00] text-black shadow-md"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resources Bento Grid ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 py-16 md:py-24">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-[#0038ff] uppercase bg-[#0038ff]/10 px-3 py-1 rounded-full">
              FILTERED REPOSITORIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-3 font-sans">
              AVAILABLE MATERIALS ({filteredResources.length})
            </h2>
          </div>
        </div>

        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res: any) => (
              <div
                key={res.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-black/8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#f0f4f9] text-[#0038ff] font-mono text-[10px] font-black uppercase rounded-full">
                      {res.category}
                    </span>
                    <span className="font-mono text-xs text-black/40">
                      {res.author}
                    </span>
                  </div>

                  <h3 className="text-xl font-black uppercase tracking-tight text-black font-sans leading-tight">
                    {res.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-black/65 font-medium leading-relaxed mt-2.5">
                    {res.description}
                  </p>

                  {/* Tags */}
                  {res.tags && res.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {res.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 bg-[#f6f8fb] text-black/60 rounded-md font-mono text-[10px] font-bold"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-black/8 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-black/40 uppercase">
                    OPEN ACCESS
                  </span>
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#0038ff] hover:bg-[#0029db] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 group-hover:scale-105"
                  >
                    <span>ACCESS</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 border border-black/8 text-center">
            <p className="text-black/50 font-mono text-sm uppercase font-bold">
              No learning resources found matching your search.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}
