"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Mail, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { useContent, AcademicYear, TeamMember } from "@/context/content-context";
import { DoodleHashtag, DoodleCurvedArrowDown, DoodleSparkle } from "@/components/DoodleSVGs";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const DEFAULT_TEAM = [
  {
    id: "tm-1",
    name: "Mihir Gosavi",
    role: "President",
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

  const allMembers = team && team.length > 0 ? team : DEFAULT_TEAM;
  const yearMembers = allMembers.filter(m => !m.academicYear || m.academicYear === academicYear);
  const filteredMembers = yearMembers.filter(m => selectedCategory === "All" || m.category === selectedCategory);

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
                STUDENT LEADERSHIP COUNCIL
              </div>

              <div className="flex items-center gap-3">
                <DoodleHashtag className="w-12 sm:w-16 h-auto -mt-3" color="#ffe600" />
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none font-sans">
                  MEET THE COUNCIL
                </h1>
              </div>

              <p className="text-white/80 max-w-2xl text-base sm:text-lg font-medium leading-relaxed mt-4">
                The student leaders driving technical hackathons, industry summits, and academic community initiatives for SHAIDS.
              </p>
            </div>

            {/* Academic Session Selector Pill */}
            <div className="flex items-center gap-1.5 p-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full font-mono text-xs">
              {(["2026-27", "2025-26"] as AcademicYear[]).map((yr) => (
                <button
                  key={yr}
                  onClick={() => setAcademicYear(yr)}
                  className={`px-4 py-2 rounded-full font-bold uppercase tracking-wider transition-all duration-200 ${
                    academicYear === yr
                      ? "bg-[#ffe600] text-black shadow-md font-black"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  SESSION {yr}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-white/10 font-mono text-xs">
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
      </section>

      {/* ── Team Members Grid ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 py-16 md:py-24 space-y-12">
        
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-[#00f5a0] uppercase bg-[#00f5a0]/10 border border-[#00f5a0]/20 px-3 py-1 rounded-full">
              OFFICERS & HEADS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-3 font-sans text-white">
              Student Committee ({filteredMembers.length})
            </h2>
          </div>
          <span className="font-mono text-xs text-white/50">
            Session {academicYear}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 rounded-3xl p-6 sm:p-7 shadow-xl transition-all flex flex-col justify-between group backdrop-blur-md"
            >
              <div>
                {/* Member Avatar */}
                <div className="relative w-full aspect-square bg-slate-900 rounded-2xl overflow-hidden border border-white/10 mb-5">
                  <Image
                    src={member.image_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized={Boolean(member.image_url?.startsWith("data:"))}
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-[#ffe600] text-black font-mono text-[10px] font-black uppercase rounded-full">
                    {member.category || "Committee"}
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight text-white font-sans mt-2">
                  {member.name}
                </h3>
                <div className="text-xs font-mono font-bold text-[#0055ff] mt-0.5">
                  {member.role}
                </div>

                {member.bio && (
                  <p className="text-xs sm:text-sm text-white/70 font-medium leading-relaxed mt-3 line-clamp-3">
                    {member.bio}
                  </p>
                )}
              </div>

              {/* Social and Profile links */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0077b5] text-white flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0055ff] text-white flex items-center justify-center transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <Link
                  href={`/team/${member.id}`}
                  className="font-mono text-xs font-bold text-white hover:text-[#ffe600] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Profile <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
