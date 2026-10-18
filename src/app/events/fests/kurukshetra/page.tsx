"use client";

import Link from "next/link";
import Image from "next/image";
import TextReveal from "@/components/TextReveal";
import { 
  ArrowLeft, 
  Trophy 
} from "lucide-react";
import { useContent } from "@/context/content-context";

export default function KurukshetraFestPage() {
  const { festSubEvents, festGalleries } = useContent();

  const events = festSubEvents.filter((s) => s.festId === "kurukshetra");
  const gallery = festGalleries.kurukshetra || [];

  return (
    <div className="w-full min-h-screen bg-[#02040a] text-white pt-32 pb-24 px-4 md:px-8" data-theme="dark">
      <div className="layout-block max-w-7xl mx-auto space-y-12">
        
        {/* Back Link */}
        <Link 
          href="/events" 
          className="inline-flex items-center gap-2 font-mono text-xs text-[#a3a3a3] hover:text-[#0e76ff] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO EVENTS HUB
        </Link>

        {/* Header Banner */}
        <div className="border-b border-[#262626] pb-10 space-y-4">
          <div className="mono-small text-emerald-400 font-bold flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            ANNUAL INTER-DEPARTMENTAL SPORTS LEAGUE
          </div>

          <TextReveal
            text="KURUKSHETRA 2026"
            as="h1"
            className="text-4xl md:text-8xl font-bold tracking-tighter leading-none font-sans"
          />

          <p className="body-large text-[#a3a3a3] max-w-3xl font-medium leading-relaxed">
            The department sports league bringing together cricket, football, turf leagues, chess tournaments, and track events across all academic batches.
          </p>
        </div>

        {/* Sub-Events Grid */}
        <div className="space-y-8">
          <div className="mono-small text-emerald-400 font-bold">SPORTS EVENTS & TOURNAMENT WINNERS</div>

          {events.length === 0 ? (
            <div className="card-frosted p-8 border border-white/10 text-center font-mono text-xs text-[#a3a3a3]">
              No sports tournaments currently registered for KURUKSHETRA 2026.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((sub) => (
                <div key={sub.id} className="card-frosted p-6 border border-white/10 has-pin has-pin--light space-y-4">
                  {sub.image && (
                    <div className="relative w-full aspect-[16/9] bg-[#080d1a] border border-[#262626] overflow-hidden">
                      <Image 
                        src={sub.image} 
                        alt={sub.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover" 
                        unoptimized={Boolean(sub.image.startsWith("data:"))}
                      />
                    </div>
                  )}

                  <div className="mono-small bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 text-[10px] w-fit font-bold">
                    SPORTS TOURNAMENT
                  </div>

                  <h3 className="text-xl font-bold font-sans text-white">{sub.title}</h3>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed line-clamp-3">{sub.desc || sub.detailedInfo}</p>

                  {(sub.winner || sub.runnerUp) && (
                    <div className="pt-4 border-t border-[#262626] space-y-1 font-mono text-xs">
                      {sub.winner && (
                        <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                          <Trophy className="w-3.5 h-3.5 shrink-0" /> WINNER: {sub.winner}
                        </div>
                      )}
                      {sub.runnerUp && (
                        <div className="text-[#a3a3a3] flex items-center gap-1.5">
                          <Trophy className="w-3.5 h-3.5 shrink-0 text-[#a3a3a3]" /> RUNNER UP: {sub.runnerUp}
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
          <div className="space-y-6 pt-8 border-t border-[#262626]">
            <div className="mono-small text-emerald-400 font-bold">KURUKSHETRA SPORTS GALLERY</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallery.map((url, idx) => (
                <div key={idx} className="relative card-frosted overflow-hidden aspect-video border border-white/10">
                  <Image 
                    src={url} 
                    alt={`Kurukshetra Gallery ${idx + 1}`} 
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                    unoptimized={Boolean(url.startsWith("data:"))}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
