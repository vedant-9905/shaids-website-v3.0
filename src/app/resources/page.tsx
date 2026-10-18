"use client";

import { useState } from "react";
import TextReveal from "@/components/TextReveal";
import { BookOpen, ExternalLink, Search } from "lucide-react";
import { useContent } from "@/context/content-context";

const DEFAULT_RESOURCES = [
  {
    id: "res-1",
    title: "Deep Learning & Neural Networks Lab Manual",
    description: "Official PyTorch and TensorFlow lab exercises covering CNNs, RNNs, and Transformers.",
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
    description: "Comprehensive notes, time complexity charts, and interview preparation questions.",
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
      res.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="w-full min-h-screen bg-[#02040a] text-white pt-32 pb-24 px-4 md:px-8" data-theme="dark">
      <div className="layout-block max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-12 border-b border-[#262626] pb-10">
          <div className="mono-small text-[#0e76ff] font-bold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0e76ff] animate-ping" />
            ACADEMIC & TECHNICAL KNOWLEDGE HUB
          </div>
          <TextReveal
            text="Student Resource Library"
            as="h1"
            className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-6 font-sans"
          />
          <p className="body-large text-[#a3a3a3] max-w-3xl font-medium leading-relaxed">
            Curated study materials, lab manuals, AI roadmaps, and code repositories verified by faculty and top-ranking students.
          </p>

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 mt-8 pt-6 border-t border-white/10">
            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
              <Search className="w-4 h-4 text-[#a3a3a3] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search notes, manuals, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#080d1a] border border-[#262626] text-white text-xs font-mono pl-10 pr-4 py-3 focus:outline-none focus:border-[#0e76ff]"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 border transition-colors ${
                    selectedCategory === cat
                      ? "bg-[#0e76ff] border-[#0e76ff] text-white font-bold"
                      : "bg-[#080d1a] border-[#262626] text-[#a3a3a3] hover:text-white"
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div key={res.id} className="card-frosted p-6 border border-white/10 has-pin has-pin--light flex flex-col justify-between space-y-6">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="mono-small bg-[#0e76ff]/20 text-[#0e76ff] border border-[#0e76ff]/30 px-2.5 py-0.5 text-[10px] font-bold uppercase">
                    {res.category}
                  </span>
                  {res.author && (
                    <span className="text-[11px] font-mono text-[#a3a3a3]">By {res.author}</span>
                  )}
                </div>

                <h3 className="text-xl font-bold font-sans text-white mb-2">{res.title}</h3>
                <p className="text-xs text-[#a3a3a3] leading-relaxed mb-4">{res.description}</p>

                {res.tags && res.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {res.tags.map((t, idx) => (
                      <span key={idx} className="mono-small text-[10px] text-[#a3a3a3] bg-[#080d1a] px-2 py-0.5 border border-[#262626]">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#262626] flex items-center justify-between font-mono text-xs">
                <span className="text-[#a3a3a3] flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#0e76ff]" />
                  VERIFIED RESOURCE
                </span>
                <a
                  href={res.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0e76ff] font-bold flex items-center gap-1 hover:underline"
                >
                  ACCESS LINK <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
