"use client";

import { useState } from "react";
import Image from "next/image";
import TextReveal from "@/components/TextReveal";
import { 
  Code, 
  Globe, 
  Share2, 
  Mail
} from "lucide-react";
import { useContent, TeamMember } from "@/context/content-context";

const DEFAULT_TEAM: TeamMember[] = [
  {
    id: "tm-1",
    name: "Mihir Gosavi",
    role: "Student Committee President",
    category: "Core Committee",
    academicYear: "2026-27",
    image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "mihir.gosavi@acpce.ac.in",
    bio: "Leading SHAIDS technical initiatives, hackathons, and departmental symposiums."
  },
  {
    id: "tm-2",
    name: "Tanay Kotian",
    role: "Vice President",
    category: "Core Committee",
    academicYear: "2026-27",
    image_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "tanay.kotian@acpce.ac.in",
    bio: "Overseeing event operations, industry partnerships, and student welfare."
  },
  {
    id: "tm-3",
    name: "Vedant Patil",
    role: "Technical Lead",
    category: "Tech Team",
    academicYear: "2026-27",
    image_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "vedant.patil@acpce.ac.in",
    bio: "Architecting web platforms, automated evaluation portals, and MLOps labs."
  },
  {
    id: "tm-4",
    name: "Siddhi Kadam",
    role: "Documentation & Content Head",
    category: "Operations",
    academicYear: "2026-27",
    image_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "siddhi.kadam@acpce.ac.in",
    bio: "Managing departmental publications, SIGMOID magazine, and research papers."
  }
];

const CATEGORIES = ["All", "Core Committee", "Tech Team", "Operations"] as const;

export default function TeamPage() {
  const { team, academicYear, setAcademicYear } = useContent();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const activeTeam = team && team.length > 0 ? team : DEFAULT_TEAM;

  const filteredTeam = activeTeam.filter((m) => {
    const matchesYear = !m.academicYear || m.academicYear === academicYear;
    const matchesCategory = selectedCategory === "All" || m.category === selectedCategory || (!m.category && selectedCategory === "Core Committee");
    return matchesYear && matchesCategory;
  });

  return (
    <div className="w-full min-h-screen bg-[#02040a] text-white pt-32 pb-24 px-4 md:px-8" data-theme="dark">
      <div className="layout-block max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-12 border-b border-[#262626] pb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-4">
            <div>
              <div className="mono-small text-[#0e76ff] font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#0e76ff] animate-ping" />
                STUDENT COMMITTEE & LEADERSHIP
              </div>
              <TextReveal
                text="SHAIDS Student Committee"
                as="h1"
                className="text-4xl md:text-7xl font-bold tracking-tighter leading-none font-sans"
              />
            </div>

            {/* Academic Year Selector */}
            <div className="flex items-center gap-2 bg-[#080d1a] border border-[#262626] p-1 font-mono text-xs">
              <button
                onClick={() => setAcademicYear("2026-27")}
                className={`px-4 py-1.5 transition-colors ${academicYear === "2026-27" ? "bg-[#0e76ff] text-white font-bold" : "text-[#a3a3a3] hover:text-white"}`}
              >
                A.Y. 2026–27
              </button>
              <button
                onClick={() => setAcademicYear("2025-26")}
                className={`px-4 py-1.5 transition-colors ${academicYear === "2025-26" ? "bg-[#0e76ff] text-white font-bold" : "text-[#a3a3a3] hover:text-white"}`}
              >
                A.Y. 2025–26
              </button>
            </div>
          </div>

          <p className="body-large text-[#a3a3a3] max-w-3xl font-medium leading-relaxed">
            The driving force behind the Department of AI & Data Science activities, organizing national hackathons, technical workshops, cultural fests, and student mentorship programs.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/10 font-mono text-xs">
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

        {/* Team Grid */}
        {filteredTeam.length === 0 ? (
          <div className="card-frosted p-12 border border-white/10 text-center text-[#a3a3a3] font-mono text-xs">
            No team members listed under &ldquo;{selectedCategory}&rdquo; for A.Y. {academicYear}.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTeam.map((m) => {
              const imgSrc = m.image_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80";
              const isDataUrl = imgSrc.startsWith("data:");
              return (
              <div key={m.id} className="card-frosted p-6 border border-white/10 has-pin has-pin--light flex flex-col justify-between space-y-4">
                <div>
                  {/* Member Photo */}
                  <div className="relative w-full aspect-square mb-4 bg-[#080d1a] border border-[#262626] overflow-hidden">
                    <Image 
                      src={imgSrc} 
                      alt={m.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      unoptimized={isDataUrl}
                    />
                  </div>

                  <span className="mono-small bg-[#0e76ff]/20 text-[#0e76ff] border border-[#0e76ff]/30 px-2 py-0.5 text-[10px] font-bold block mb-2 w-fit">
                    {m.category || "CORE COMMITTEE"}
                  </span>
                  <h3 className="text-xl font-bold font-sans text-white">{m.name}</h3>
                  <div className="text-xs font-mono text-[#0e76ff] mt-0.5">{m.role}</div>
                  {m.bio && (
                    <p className="text-xs text-[#a3a3a3] mt-3 leading-relaxed line-clamp-3">{m.bio}</p>
                  )}
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-[#262626] flex items-center gap-3">
                  {m.github && (
                    <a href={m.github} target="_blank" rel="noreferrer" className="text-[#a3a3a3] hover:text-white transition-colors" title="GitHub">
                      <Code className="w-4 h-4" />
                    </a>
                  )}
                  {m.linkedin && (
                    <a href={m.linkedin} target="_blank" rel="noreferrer" className="text-[#a3a3a3] hover:text-[#0e76ff] transition-colors" title="LinkedIn">
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                  {m.instagram && (
                    <a href={m.instagram} target="_blank" rel="noreferrer" className="text-[#a3a3a3] hover:text-pink-400 transition-colors" title="Social">
                      <Share2 className="w-4 h-4" />
                    </a>
                  )}
                  {m.email && (
                    <a href={`mailto:${m.email}`} className="text-[#a3a3a3] hover:text-white transition-colors" title="Email">
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
          </div>
        )}

      </div>
    </div>
  );
}
