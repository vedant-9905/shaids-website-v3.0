"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Sparkles, 
  Trophy,
  Cpu,
  Calendar,
  Layers,
  Award
} from "lucide-react";
import { useContent } from "@/context/content-context";
import { DoodleSparkle, DoodleSquiggleWave, CircularStampBadge, DoodleHashtag } from "@/components/DoodleSVGs";

export default function VectorsFestPage() {
  const { festSubEvents, festGalleries } = useContent();

  const vectorsEvents = festSubEvents.filter((s) => s.festId === "vectors");
  const gallery = festGalleries.vectors || [];

  return (
    <div className="w-full min-h-screen bg-[#050508] text-white pb-24">
      
      {/* ── Hero Banner (Pitch Black + Candy Accents) ── */}
      <section className="relative w-full bg-[#000000] text-white pt-32 pb-24 px-4 md:px-8 overflow-hidden border-b border-white/10">
        {/* Blueprint Grid Lines */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px"
          }}
        />

        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0055ff] rounded-full blur-[140px] opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-8">
          {/* Back Navigation Button */}
          <Link 
            href="/events" 
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white/80 hover:text-[#ffe600] bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Events Hub
          </Link>

          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pt-4">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffe600] text-black font-black text-xs uppercase tracking-wider shadow-md">
                  <Sparkles className="w-3.5 h-3.5" /> Flagship Techfest 2026
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-semibold">
                  <Cpu className="w-3.5 h-3.5 text-[#00f5a0]" /> 24H Hackathon & ML Expo
                </span>
              </div>

              <div className="flex items-center gap-3">
                <DoodleHashtag className="w-12 sm:w-16 h-auto -mt-3" color="#ffe600" />
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none uppercase font-sans">
                  VECTORS <span className="text-[#ffe600]">2026</span>
                </h1>
              </div>

              <div className="w-32 py-1">
                <DoodleSquiggleWave className="w-full h-4 text-[#0055ff]" />
              </div>

              <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-2xl">
                The annual national-level technical symposium hosted by the Department of AI & Data Science featuring 24-hour AI hackathons, CodeSprint, machine learning expos, and research paper presentations.
              </p>
            </div>

            <div className="hidden lg:block shrink-0">
              <CircularStampBadge text="• VECTORS 2026 • AI TECHFEST • ACPCE " size={120} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 space-y-16">
        
        {/* Quick Stats Pill Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/[0.04] p-6 rounded-2xl border border-white/10 shadow-sm backdrop-blur-md">
            <div className="text-xs font-mono font-bold text-white/50 uppercase">Prize Pool</div>
            <div className="text-2xl md:text-3xl font-black text-[#ffe600] mt-1">₹50,000+</div>
          </div>
          <div className="bg-white/[0.04] p-6 rounded-2xl border border-white/10 shadow-sm backdrop-blur-md">
            <div className="text-xs font-mono font-bold text-white/50 uppercase">Sub-Events</div>
            <div className="text-2xl md:text-3xl font-black text-white mt-1">6 Major Tracks</div>
          </div>
          <div className="bg-white/[0.04] p-6 rounded-2xl border border-white/10 shadow-sm backdrop-blur-md">
            <div className="text-xs font-mono font-bold text-white/50 uppercase">Participants</div>
            <div className="text-2xl md:text-3xl font-black text-[#0055ff] mt-1">1,200+</div>
          </div>
          <div className="bg-white/[0.04] p-6 rounded-2xl border border-white/10 shadow-sm backdrop-blur-md">
            <div className="text-xs font-mono font-bold text-white/50 uppercase">Format</div>
            <div className="text-2xl md:text-3xl font-black text-[#00f5a0] mt-1">Hybrid / Offline</div>
          </div>
        </div>

        {/* Sub-Events Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-black text-[#00f5a0] uppercase tracking-wider">
                <Layers className="w-4 h-4" /> COMPETITION TRACKS & WINNERS
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight mt-1">
                Featured Competitions
              </h2>
            </div>
            <span className="hidden sm:inline-block font-mono text-xs bg-white/10 text-white font-bold px-3 py-1 rounded-full border border-white/15">
              {vectorsEvents.length} Active Tracks
            </span>
          </div>

          {vectorsEvents.length === 0 ? (
            <div className="bg-white/[0.02] rounded-3xl p-12 border border-white/10 text-center space-y-3">
              <DoodleSparkle className="w-10 h-10 text-[#ffe600] mx-auto opacity-40" />
              <div className="text-base font-bold text-white/80">No Sub-Events Currently Listed</div>
              <p className="text-xs font-mono text-white/50 max-w-md mx-auto">
                Vectors 2026 event tracks are being finalized. Check back soon or administer them via the SHAIDS portal.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vectorsEvents.map((sub) => (
                <div 
                  key={sub.id} 
                  className="group bg-white/[0.04] hover:bg-white/[0.07] rounded-3xl border border-white/10 hover:border-[#0055ff] p-6 shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 backdrop-blur-md"
                >
                  <div className="space-y-4">
                    {sub.image && (
                      <div className="relative w-full aspect-[16/10] bg-slate-900 rounded-2xl overflow-hidden border border-white/10">
                        <Image 
                          src={sub.image} 
                          alt={sub.title} 
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500" 
                          unoptimized={Boolean(sub.image.startsWith("data:"))}
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider bg-[#0055ff]/20 text-[#0055ff] border border-[#0055ff]/40 px-3 py-1 rounded-full">
                        Technical Track
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-[#ffe600] transition-colors">
                      {sub.title}
                    </h3>

                    <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
                      {sub.desc || sub.detailedInfo}
                    </p>
                  </div>

                  {/* Winner Badges */}
                  {(sub.winner || sub.runnerUp) && (
                    <div className="pt-4 border-t border-white/10 space-y-2 font-mono text-xs">
                      {sub.winner && (
                        <div className="bg-[#00f5a0]/10 border border-[#00f5a0]/30 text-[#00f5a0] p-2.5 rounded-xl font-bold flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-[#00f5a0] shrink-0" />
                          <span>Winner: {sub.winner}</span>
                        </div>
                      )}
                      {sub.runnerUp && (
                        <div className="bg-white/5 border border-white/10 text-white/70 p-2 rounded-xl flex items-center gap-2">
                          <Award className="w-4 h-4 text-white/50 shrink-0" />
                          <span>Runner Up: {sub.runnerUp}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Fest Gallery */}
        {gallery.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-mono font-black text-[#00f5a0] uppercase tracking-wider">
                  ARCHIVES & MEMORIES
                </div>
                <h2 className="text-3xl font-black text-white tracking-tight mt-1">
                  Vectors Photo Gallery
                </h2>
              </div>
              <span className="font-mono text-xs text-white/50 font-bold">
                {gallery.length} Photos Captured
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallery.map((url, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-slate-900 rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-xl transition-all"
                >
                  <Image 
                    src={url} 
                    alt={`Vectors Gallery ${idx + 1}`} 
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500" 
                    unoptimized={Boolean(url.startsWith("data:"))}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="font-mono text-[10px] text-white font-bold uppercase">Vectors Snapshot #{idx + 1}</span>
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
