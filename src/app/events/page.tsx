"use client";

import { useState } from "react";
import TextReveal from "@/components/TextReveal";
import { 
  Calendar, 
  Sparkles, 
  Trophy, 
  Music, 
  MapPin, 
  ExternalLink,
  Filter
} from "lucide-react";
import Link from "next/link";
import { useContent, isEventCompleted } from "@/context/content-context";

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
    desc: "AI Hackathons, CodeSprint, Machine Learning Expo & Research Paper Symposium.",
    badgeBg: "bg-[#0e76ff] text-white",
    icon: Sparkles,
    href: "/events/fests/vectors"
  },
  {
    title: "KURUKSHETRA 2026",
    subtitle: "ANNUAL SPORTS LEAGUE",
    desc: "Cricket, Football, Turf Leagues, Chess Tournament & Track Events.",
    badgeBg: "bg-emerald-500 text-white",
    icon: Trophy,
    href: "/events/fests/kurukshetra"
  },
  {
    title: "RHYTHMS 2026",
    subtitle: "CULTURAL SYMPOSIUM",
    desc: "Dance, Battle of Bands, Fashion Parade, Drama & Talent Showcases.",
    badgeBg: "bg-purple-500 text-white",
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
    <div className="w-full min-h-screen bg-[#02040a] text-white pt-32 pb-24 px-4 md:px-8" data-theme="dark">
      <div className="layout-block max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-12 border-b border-[#262626] pb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-4">
            <div>
              <div className="mono-small text-[#0e76ff] font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#0e76ff] animate-ping" />
                DEPARTMENT EVENTS & FESTIVAL HUB
              </div>
              <TextReveal
                text="Events, Workshops & Fests"
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
            Explore national AI hackathons, technical workshops, industry visits, and flagship department fests organized by the SHAIDS Student Committee.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 mt-8 font-mono text-xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 border transition-colors flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? "bg-[#0e76ff] border-[#0e76ff] text-white font-bold"
                    : "bg-[#080d1a] border-[#262626] text-[#a3a3a3] hover:text-white"
                }`}
              >
                {cat.id !== "All" && <Filter className="w-3.5 h-3.5" />}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Events List (2 cols) & Flagship Fests Panel (1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Upcoming & Past Events */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Upcoming Events Section */}
            <div>
              <div className="mono-small text-[#0e76ff] font-bold mb-6 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#0e76ff]" />
                UPCOMING EVENTS ({upcomingEvents.length})
              </div>

              {upcomingEvents.length === 0 ? (
                <div className="card-frosted p-8 border border-white/10 text-center text-[#a3a3a3] font-mono text-xs">
                  No upcoming events registered under &ldquo;{selectedCategory}&rdquo; for A.Y. {academicYear}.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {upcomingEvents.map((ev) => (
                    <div key={ev.id} className="card-frosted p-6 border border-white/10 has-pin has-pin--light flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="mono-small bg-[#0e76ff] text-white px-2 py-0.5 text-[10px]">
                            {ev.type || "TECHNICAL"}
                          </span>
                          <span className="text-xs font-mono text-[#a3a3a3]">{ev.date}</span>
                        </div>
                        <Link href={`/events/${ev.id}`} className="hover:text-[#0e76ff] transition-colors block">
                          <h3 className="text-xl font-bold font-sans text-white mb-2">{ev.title}</h3>
                        </Link>
                        <p className="text-xs text-[#a3a3a3] leading-relaxed line-clamp-3 mb-4">{ev.description}</p>
                      </div>

                      <div className="pt-4 border-t border-[#262626] flex items-center justify-between font-mono text-xs">
                        <span className="text-[#a3a3a3] flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#0e76ff]" />
                          {ev.location}
                        </span>
                        {ev.registration_url && (
                          <a 
                            href={ev.registration_url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-[#0e76ff] font-bold flex items-center gap-1 hover:underline"
                          >
                            REGISTER <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Completed Events Section */}
            {pastEvents.length > 0 && (
              <div>
                <div className="mono-small text-[#a3a3a3] font-bold mb-6 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#a3a3a3]" />
                  COMPLETED EVENTS ({pastEvents.length})
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pastEvents.map((ev) => (
                    <div key={ev.id} className="card-frosted p-6 border border-white/10 opacity-80 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="mono-small bg-[#262626] text-[#a3a3a3] px-2 py-0.5 text-[10px]">
                            COMPLETED
                          </span>
                          <span className="text-xs font-mono text-[#a3a3a3]">{ev.date}</span>
                        </div>
                        <Link href={`/events/${ev.id}`} className="hover:text-[#0e76ff] transition-colors block">
                          <h3 className="text-lg font-bold font-sans text-white mb-2">{ev.title}</h3>
                        </Link>
                        <p className="text-xs text-[#a3a3a3] leading-relaxed line-clamp-2">{ev.description}</p>
                      </div>

                      <div className="pt-3 border-t border-[#262626] text-xs font-mono text-[#a3a3a3] flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {ev.location}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Flagship Fests Panel */}
          <div>
            <div className="sticky top-32 space-y-6">
              <div className="mono-small text-[#0e76ff] font-bold">ANNUAL FLAGSHIP FESTS</div>

              <div className="space-y-6">
                {FLAGSHIP_FESTS.map((fest) => {
                  const Icon = fest.icon;
                  return (
                    <Link key={fest.title} href={fest.href} className="block group">
                      <div className="card-frosted p-6 border border-white/10 has-pin has-pin--light space-y-3 group-hover:border-[#0e76ff]/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className={`mono-small px-2.5 py-0.5 text-[10px] ${fest.badgeBg}`}>
                            {fest.subtitle}
                          </span>
                          <Icon className="w-5 h-5 text-[#0e76ff] group-hover:scale-110 transition-transform" />
                        </div>
                        <h3 className="text-2xl font-bold font-sans text-white group-hover:text-[#0e76ff] transition-colors">{fest.title}</h3>
                        <p className="text-xs text-[#a3a3a3] leading-relaxed">{fest.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
