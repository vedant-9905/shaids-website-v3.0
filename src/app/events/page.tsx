"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Calendar, 
  MapPin, 
  Sparkles, 
  Trophy, 
  Music, 
  ArrowUpRight, 
  ExternalLink,
  ChevronRight,
  Filter
} from "lucide-react";
import { useContent, AcademicYear, EventItem } from "@/context/content-context";
import { DoodleHashtag, DoodleCurvedArrowDown, DoodleSparkle, DoodleSquiggleWave } from "@/components/DoodleSVGs";

const CATEGORIES = [
  { id: "All", label: "ALL EVENTS" },
  { id: "Technical Event", label: "HACKATHONS & TECH" },
  { id: "Workshop", label: "WORKSHOPS & SEMINARS" },
  { id: "Industrial Visit", label: "INDUSTRIAL VISITS" }
] as const;

const FLAGSHIP_FESTS = [
  {
    title: "VECTORS 2026",
    subtitle: "NATIONAL AI & TECH FEST",
    desc: "AI Hackathons, CodeSprint, Machine Learning Expo & Keynotes.",
    badgeBg: "bg-[#0055ff] text-white",
    accent: "#0055ff",
    icon: Sparkles,
    href: "/events/fests/vectors"
  },
  {
    title: "KURUKSHETRA 2026",
    subtitle: "ANNUAL SPORTS LEAGUE",
    desc: "Box Cricket, Football Turf Arena, Chess & Esports.",
    badgeBg: "bg-[#ff3b30] text-white",
    accent: "#ff3b30",
    icon: Trophy,
    href: "/events/fests/kurukshetra"
  },
  {
    title: "RHYTHMS 2026",
    subtitle: "CULTURAL SYMPOSIUM",
    desc: "Battle of the Bands, Cinematic Dance & Department Night.",
    badgeBg: "bg-[#af52de] text-white",
    accent: "#af52de",
    icon: Music,
    href: "/events/fests/rhythms"
  }
];

export default function EventsPage() {
  const { events, academicYear, setAcademicYear } = useContent();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const yearFilteredEvents = events.filter(e => !e.academicYear || e.academicYear === academicYear);

  const filteredEvents = yearFilteredEvents.filter(e => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Technical Event") return e.category === "Technical Event" || e.type === "Hackathon";
    if (selectedCategory === "Workshop") return e.type === "Workshop" || e.type === "Seminar";
    if (selectedCategory === "Industrial Visit") return e.category === "Industrial Visit" || e.type === "Industrial Visit";
    return true;
  });

  const upcomingEvents = filteredEvents.filter(e => !isEventCompleted(e));
  const pastEvents = filteredEvents.filter(e => isEventCompleted(e));

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
                DEPARTMENT EVENT ECOSYSTEM
              </div>

              <div className="flex items-center gap-3">
                <DoodleHashtag className="w-12 sm:w-16 h-auto -mt-3" color="#ffe600" />
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none font-sans">
                  EVENTS & FESTS
                </h1>
              </div>

              <p className="text-white/80 max-w-2xl text-base sm:text-lg font-medium leading-relaxed mt-4">
                Explore national hackathons, technical workshop series, industrial research visits, and flagship annual fests.
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

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-white/10 font-mono text-xs">
            <span className="text-white/50 flex items-center gap-1 mr-2 font-bold uppercase">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full font-bold uppercase tracking-wider transition-all duration-200 border ${
                    active
                      ? "bg-[#ffe600] border-[#ffe600] text-black shadow-md font-black"
                      : "bg-white/[0.04] border-white/15 text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Flagship Fests Bento Strip ── */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FLAGSHIP_FESTS.map((fest) => {
            const Icon = fest.icon;
            return (
              <Link
                key={fest.title}
                href={fest.href}
                className="bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/15 shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="font-mono text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: `${fest.accent}30`, borderColor: `${fest.accent}60` }}
                    >
                      FLAGSHIP FEST
                    </span>
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${fest.accent}20`, color: fest.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-white font-sans">
                    {fest.title}
                  </h3>
                  <div className="text-xs font-bold font-mono mt-0.5" style={{ color: fest.accent }}>
                    {fest.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 font-medium leading-relaxed mt-2.5">
                    {fest.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs font-bold uppercase text-white group-hover:text-[#ffe600] transition-colors">
                  <span>ENTER FESTIVAL PORTAL</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Main Events Feed ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 py-16 md:py-24 space-y-16">
        
        {/* Section 1: Upcoming & Live Events */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-[#00f5a0] uppercase bg-[#00f5a0]/10 border border-[#00f5a0]/20 px-3 py-1 rounded-full">
                LIVE & UPCOMING
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-3 font-sans text-white">
                UPCOMING INITIATIVES ({upcomingEvents.length})
              </h2>
            </div>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 rounded-3xl p-6 sm:p-7 shadow-xl transition-all flex flex-col justify-between group backdrop-blur-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 bg-[#ffe600] text-black font-mono text-[10px] font-black uppercase rounded-full">
                        {event.category || event.type || "Event"}
                      </span>
                      <span className="font-mono text-xs font-bold text-white/60 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#ffe600]" />
                        {event.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-black uppercase tracking-tight text-white font-sans leading-tight">
                      {event.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/70 font-medium leading-relaxed mt-2.5">
                      {event.description}
                    </p>

                    {event.location && (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-white/50 mt-4">
                        <MapPin className="w-3.5 h-3.5 text-[#0055ff]" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold text-[#00f5a0] uppercase">
                      ● REGISTRATIONS OPEN
                    </span>
                    {event.registration_url ? (
                      <a
                        href={event.registration_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-[#0055ff] hover:bg-[#0044cc] text-white font-mono text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1 shadow-md"
                      >
                        <span>REGISTER</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={`/events/${event.id}`}
                        className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] font-bold uppercase tracking-wider transition-colors"
                      >
                        DETAILS
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-3xl border border-white/10 bg-white/[0.02] text-white/60 font-mono text-xs">
              No upcoming events found for this filter in Session {academicYear}.
            </div>
          )}
        </div>

        {/* Section 2: Concluded / Archived Events */}
        {pastEvents.length > 0 && (
          <div className="pt-8 border-t border-white/10">
            <div className="mb-8">
              <span className="font-mono text-xs font-bold tracking-widest text-white/40 uppercase bg-white/5 px-3 py-1 rounded-full border border-white/10">
                ARCHIVED INITIATIVES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-3 font-sans text-white/70">
                PAST EVENTS ({pastEvents.length})
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white/[0.02] rounded-3xl p-6 sm:p-7 border border-white/5 opacity-80 hover:opacity-100 transition-opacity flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 bg-white/10 text-white/70 font-mono text-[10px] font-bold uppercase rounded-full">
                        {event.category || event.type || "Archived"}
                      </span>
                      <span className="font-mono text-xs text-white/50">
                        {event.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-black uppercase tracking-tight text-white/90 font-sans">
                      {event.title}
                    </h3>

                    <p className="text-xs text-white/60 font-medium leading-relaxed mt-2 line-clamp-2">
                      {event.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-white/40 uppercase">
                      COMPLETED
                    </span>
                    <Link
                      href={`/events/${event.id}`}
                      className="text-xs font-mono font-bold text-[#ffe600] hover:underline flex items-center gap-1"
                    >
                      Recap <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function isEventCompleted(event: EventItem): boolean {
  if (event.is_past) return true;
  if (!event.date) return false;
  const parsed = new Date(event.date);
  if (!isNaN(parsed.getTime())) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return parsed < today;
  }
  return false;
}
