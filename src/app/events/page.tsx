"use client";

import { useState } from "react";
import { 
  Calendar, 
  Sparkles, 
  Trophy, 
  Music, 
  MapPin, 
  ExternalLink,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { useContent, isEventCompleted } from "@/context/content-context";
import { DoodleHashtag, DoodleSparkle } from "@/components/DoodleSVGs";

const CATEGORIES = [
  { id: "All", label: "ALL EVENTS" },
  { id: "Technical Event", label: "TECHNICAL & HACKATHONS" },
  { id: "Workshop", label: "WORKSHOPS & SEMINARS" },
  { id: "Industrial Visit", label: "INDUSTRIAL VISITS" }
] as const;

const FLAGSHIP_FESTS = [
  {
    title: "VECTORS 2026",
    subtitle: "NATIONAL AI & TECH FEST",
    desc: "AI Hackathons, CodeSprint, Machine Learning Expo & Keynotes.",
    badgeBg: "bg-[#0038ff] text-white",
    accent: "#0038ff",
    icon: Sparkles,
    href: "/events/fests/vectors"
  },
  {
    title: "KURUKSHETRA 2026",
    subtitle: "ANNUAL SPORTS LEAGUE",
    desc: "Box Cricket, Football Turf Arena, Chess & Esports.",
    badgeBg: "bg-emerald-500 text-white",
    accent: "#10b981",
    icon: Trophy,
    href: "/events/fests/kurukshetra"
  },
  {
    title: "RHYTHMS 2026",
    subtitle: "CULTURAL SYMPOSIUM",
    desc: "Battle of the Bands, Cinematic Dance & Department Night.",
    badgeBg: "bg-[#7c3aed] text-white",
    accent: "#7c3aed",
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
                DEPARTMENT EVENT ECOSYSTEM
              </div>

              <div className="flex items-center gap-3">
                <DoodleHashtag className="w-12 sm:w-16 h-auto -mt-3" />
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none font-sans">
                  EVENTS & FESTS
                </h1>
              </div>

              <p className="text-white/80 max-w-2xl text-base sm:text-lg font-medium leading-relaxed mt-4">
                Explore national hackathons, technical workshop series, industrial research visits, and flagship annual fests.
              </p>
            </div>

            {/* Academic Session Selector Pill */}
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

          {/* Category Filter Capsule Bar */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/15 font-mono text-xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full transition-all duration-200 font-bold uppercase tracking-wider ${
                  selectedCategory === cat.id
                    ? "bg-white text-black shadow-md"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Flagship Fests Banner Strip ── */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FLAGSHIP_FESTS.map((fest) => {
            const Icon = fest.icon;
            return (
              <Link
                key={fest.title}
                href={fest.href}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-black/8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f0f4f9] text-black/70">
                      FLAGSHIP FEST
                    </span>
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${fest.accent}15`, color: fest.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-black font-sans">
                    {fest.title}
                  </h3>
                  <div className="text-xs font-bold text-[#0038ff] font-mono mt-0.5">
                    {fest.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-black/60 font-medium leading-relaxed mt-2.5">
                    {fest.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/8 flex items-center justify-between font-mono text-xs font-bold uppercase text-[#0038ff]">
                  <span>PORTAL DIRECT</span>
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
              <span className="font-mono text-xs font-bold tracking-widest text-[#0038ff] uppercase bg-[#0038ff]/10 px-3 py-1 rounded-full">
                LIVE & UPCOMING
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-3 font-sans">
                UPCOMING INITIATIVES ({upcomingEvents.length})
              </h2>
            </div>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-black/8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 bg-[#ccff00] text-black font-mono text-[10px] font-black uppercase rounded-full">
                        {event.category || event.type || "Event"}
                      </span>
                      <span className="font-mono text-xs font-bold text-black/60 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {event.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-black uppercase tracking-tight text-black font-sans leading-tight">
                      {event.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-black/65 font-medium leading-relaxed mt-2.5">
                      {event.description}
                    </p>

                    {event.location && (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-black/50 mt-4">
                        <MapPin className="w-3.5 h-3.5 text-[#0038ff]" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/8 flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold text-emerald-600 uppercase">
                      ● REGISTRATIONS OPEN
                    </span>
                    {event.registration_url ? (
                      <a
                        href={event.registration_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full bg-[#0038ff] hover:bg-[#0029db] text-white font-mono text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1"
                      >
                        <span>REGISTER</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={`/events/${event.id}`}
                        className="px-3 py-1.5 rounded-full bg-[#0038ff] hover:bg-[#0029db] text-white font-mono text-[11px] font-bold uppercase tracking-wider transition-colors"
                      >
                        DETAILS
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-10 border border-black/8 text-center">
              <p className="text-black/50 font-mono text-sm uppercase font-bold">
                No upcoming events found for this filter. Check past events or explore our flagship fests!
              </p>
            </div>
          )}
        </div>

        {/* Section 2: Completed & Past Events */}
        {pastEvents.length > 0 && (
          <div className="pt-8 border-t border-black/8">
            <div className="mb-8">
              <span className="font-mono text-xs font-bold tracking-widest text-black/50 uppercase bg-black/5 px-3 py-1 rounded-full">
                EVENT ARCHIVE
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-3 font-sans">
                COMPLETED MILESTONES ({pastEvents.length})
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white/80 rounded-3xl p-6 sm:p-7 border border-black/6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 bg-black/5 text-black/70 font-mono text-[10px] font-bold uppercase rounded-full">
                        {event.category || event.type || "Archive"}
                      </span>
                      <span className="font-mono text-xs text-black/40">
                        {event.date}
                      </span>
                    </div>

                    <h4 className="text-lg font-black uppercase tracking-tight text-black/80 font-sans">
                      {event.title}
                    </h4>

                    <p className="text-xs text-black/55 font-medium leading-relaxed mt-2">
                      {event.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/8 flex items-center justify-between font-mono text-[10px] font-bold text-black/40 uppercase">
                    <span>STATUS: CONCLUDED</span>
                    <Link href={`/events/${event.id}`} className="text-[#0038ff] hover:underline">
                      SUMMARY →
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
