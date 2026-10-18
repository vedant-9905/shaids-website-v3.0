"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Mail, 
  Users,
  Award,
  Globe,
  Share2
} from "lucide-react";

function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { useContent, TeamMember } from "@/context/content-context";
import { DoodleHashtag } from "@/components/DoodleSVGs";

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
    bio: "Managing departmental review records, academic publications, and press releases."
  },
  {
    id: "tm-5",
    name: "Aaditya More",
    role: "Creative & Design Lead",
    category: "Media & Design",
    academicYear: "2026-27",
    image_url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "aaditya.more@acpce.ac.in",
    bio: "Visual identity design, motion graphics, and event stage direction."
  },
  {
    id: "tm-6",
    name: "Sakshi Sawant",
    role: "Public Relations Officer",
    category: "Operations",
    academicYear: "2026-27",
    image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "sakshi.sawant@acpce.ac.in",
    bio: "Intercollegiate outreach, sponsorship management, and festival delegate support."
  }
];

const CATEGORIES = ["All", "Core Committee", "Tech Team", "Operations", "Media & Design"];

export default function TeamPage() {
  const { team, academicYear, setAcademicYear } = useContent();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const membersToUse = team && team.length > 0 ? team : DEFAULT_TEAM;

  const yearFiltered = membersToUse.filter((member) => {
    if (!member.academicYear) return true;
    return member.academicYear === academicYear;
  });

  const filteredMembers = yearFiltered.filter((member) => {
    if (selectedCategory === "All") return true;
    return member.category === selectedCategory;
  });

  return (
    <div className="w-full min-h-screen bg-[#f8fafd] text-black">
      
      {/* ── Hero Banner (Electric Blue + Doodle Hashtag) ── */}
      <section className="relative w-full bg-[#0038ff] text-white pt-32 md:pt-40 pb-16 md:pb-24 px-6 sm:px-10 md:px-16 overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-white font-mono text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
                STUDENT GOVERNANCE & COUNCIL
              </div>

              <div className="flex items-center gap-3">
                <DoodleHashtag className="w-12 sm:w-16 h-auto -mt-3" />
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none font-sans">
                  STUDENT COUNCIL
                </h1>
              </div>

              <p className="text-white/80 max-w-2xl text-base sm:text-lg font-medium leading-relaxed mt-4">
                The elected student leaders, technologists, event organizers, and researchers steering the SHAIDS committee.
              </p>
            </div>

            {/* Academic Session Selector */}
            <div className="flex items-center gap-1.5 p-1.5 bg-white/12 backdrop-blur-xl border border-white/20 rounded-full font-mono text-xs">
              <button
                onClick={() => setAcademicYear("2026-27")}
                className={`px-4 sm:px-5 py-2 rounded-full transition-all duration-200 font-bold uppercase tracking-wider ${
                  academicYear === "2026-27"
                    ? "bg-[#ccff00] text-black shadow-md"
                    : "text-white/80 hover:text-white"
                }`}
              >
                SESSION 2026–27
              </button>
              <button
                onClick={() => setAcademicYear("2025-26")}
                className={`px-4 sm:px-5 py-2 rounded-full transition-all duration-200 font-bold uppercase tracking-wider ${
                  academicYear === "2025-26"
                    ? "bg-[#ccff00] text-black shadow-md"
                    : "text-white/80 hover:text-white"
                }`}
              >
                SESSION 2025–26
              </button>
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
                    ? "bg-white text-black shadow-md"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Council Members Grid ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 py-16 md:py-24">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-[#0038ff] uppercase bg-[#0038ff]/10 px-3 py-1 rounded-full">
              COUNCIL ROSTER
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-3 font-sans">
              ELECTED MEMBERS ({filteredMembers.length})
            </h2>
          </div>
        </div>

        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-black/8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Photo & Category Pill */}
                  <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-5 bg-[#f0f4f9]">
                    <Image
                      src={member.image_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase rounded-full">
                      {member.category}
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black font-sans leading-tight">
                    {member.name}
                  </h3>
                  <div className="text-xs font-bold text-[#0038ff] font-mono mt-1 uppercase">
                    {member.role}
                  </div>

                  {/* Bio */}
                  {member.bio && (
                    <p className="text-xs sm:text-sm text-black/65 font-medium leading-relaxed mt-2.5">
                      {member.bio}
                    </p>
                  )}
                </div>

                {/* Social Links Footer */}
                <div className="mt-6 pt-4 border-t border-black/8 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-black/40 uppercase">
                    CONNECT
                  </span>
                  <div className="flex items-center gap-2">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 rounded-full bg-[#f0f4f9] hover:bg-[#0038ff] hover:text-white text-black flex items-center justify-center transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 rounded-full bg-[#f0f4f9] hover:bg-[#0038ff] hover:text-white text-black flex items-center justify-center transition-colors"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 rounded-full bg-[#f0f4f9] hover:bg-[#ccff00] hover:text-black text-black flex items-center justify-center transition-colors"
                      >
                        <InstagramIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-7 h-7 rounded-full bg-[#f0f4f9] hover:bg-[#0038ff] hover:text-white text-black flex items-center justify-center transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 border border-black/8 text-center">
            <p className="text-black/50 font-mono text-sm uppercase font-bold">
              No team members found for this session or category.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}
