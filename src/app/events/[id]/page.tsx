"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  ExternalLink, 
  Download, 
  ShieldCheck, 
  Share2,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { useContent } from "@/context/content-context";
import { toast } from "sonner";
import { DoodleSparkle, DoodleSquiggleWave } from "@/components/DoodleSVGs";

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { events } = useContent();
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="w-full min-h-screen bg-[#f8fafc] text-slate-900 pt-32 pb-24 px-4 flex flex-col items-center justify-center font-mono text-xs">
        <div className="bg-white p-10 rounded-3xl border-2 border-slate-900/10 shadow-xl max-w-md text-center space-y-4">
          <DoodleSparkle className="w-12 h-12 text-[#0038ff] mx-auto opacity-50" />
          <h1 className="text-2xl font-black text-slate-900 uppercase">Event Not Found</h1>
          <p className="text-slate-500 font-sans text-sm">The requested event ID could not be located in the SHAIDS archive.</p>
          <Link 
            href="/events" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0038ff] text-white font-mono text-xs font-bold rounded-full hover:bg-[#002edb] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Events Hub
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Event link copied to clipboard!");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-slate-900 pb-24">
      
      {/* Electric Cobalt Blue Hero Banner */}
      <section className="relative w-full bg-[#0038ff] text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        {/* Blueprint Grid Lines */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />

        {/* Ambient Gradient Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#ccff00] rounded-full blur-[140px] opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          {/* Back Navigation Button */}
          <Link 
            href="/events" 
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white/80 hover:text-[#ccff00] bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Events Hub
          </Link>

          <div className="space-y-4 max-w-4xl pt-2">
            {/* Category Badge & Date */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ccff00] text-black font-black text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> {event.type || "TECHNICAL"}
              </span>
              <span className="font-mono text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/20 font-semibold">
                Session {event.academicYear || "2026-27"}
              </span>
            </div>

            {/* Event Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-tight uppercase">
              {event.title}
            </h1>

            <div className="w-28 py-1">
              <DoodleSquiggleWave className="w-full h-3 text-[#ccff00]" />
            </div>

            <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-3xl">
              {event.description}
            </p>
          </div>
        </div>

        {/* Bottom Shelf Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#f8fafc] rounded-t-[32px]" />
      </section>

      {/* Main Content & Sidebar Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Event Poster / Image */}
            {event.image_url && (
              <div className="relative w-full aspect-[16/9] bg-slate-100 rounded-3xl overflow-hidden border-2 border-slate-900/10 shadow-sm">
                <Image 
                  src={event.image_url} 
                  alt={event.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                  priority
                  unoptimized={Boolean(event.image_url.startsWith("data:"))}
                />
              </div>
            )}

            {/* Detailed Description */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-slate-900/10 shadow-sm space-y-6">
              <div className="border-b-2 border-slate-100 pb-4">
                <div className="text-xs font-mono font-black text-[#0038ff] uppercase tracking-wider">
                  SCHEDULE & SYNOPSIS
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mt-1">
                  About This Event
                </h2>
              </div>

              <div className="text-base text-slate-600 leading-relaxed whitespace-pre-wrap font-sans">
                {event.long_description || event.description || "Join us for an exciting deep dive into this topic."}
              </div>
            </div>

            {/* Gallery Images Slider */}
            {event.gallery_images && event.gallery_images.length > 0 && (
              <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-slate-900/10 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
                  <div>
                    <div className="text-xs font-mono font-black text-[#0038ff] uppercase tracking-wider">
                      VISUAL HIGHLIGHTS
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
                      Event Photo Gallery
                    </h3>
                  </div>
                  <span className="font-mono text-xs bg-slate-900 text-white font-bold px-3 py-1 rounded-full">
                    {event.gallery_images.length} Photos
                  </span>
                </div>

                <div className="relative aspect-[16/9] bg-slate-900 rounded-2xl overflow-hidden border-2 border-slate-900/10 shadow-inner">
                  <Image 
                    src={event.gallery_images[activeGalleryIndex % event.gallery_images.length]} 
                    alt={`Highlight ${activeGalleryIndex + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                    unoptimized={Boolean(event.gallery_images[activeGalleryIndex % event.gallery_images.length]?.startsWith("data:"))}
                  />

                  {event.gallery_images.length > 1 && (
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                      <button 
                        onClick={() => setActiveGalleryIndex((prev) => (prev > 0 ? prev - 1 : event.gallery_images!.length - 1))}
                        className="w-10 h-10 rounded-full bg-black/80 hover:bg-[#0038ff] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => setActiveGalleryIndex((prev) => (prev + 1) % event.gallery_images!.length)}
                        className="w-10 h-10 rounded-full bg-black/80 hover:bg-[#0038ff] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Official Brochure Download */}
            {event.brochure_url && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-[#0038ff]/20 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0038ff] text-white flex items-center justify-center shrink-0 shadow-md">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg">Official Event Brochure & Guidelines</h4>
                    <p className="text-xs text-slate-600 font-mono mt-0.5">Download full timetable, track rules, and speaker schedule.</p>
                  </div>
                </div>
                <a 
                  href={event.brochure_url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-3 bg-[#0038ff] hover:bg-[#002edb] text-white font-mono text-xs font-bold rounded-full flex items-center gap-2 shrink-0 shadow-md transition-all duration-300"
                >
                  <Download className="w-4 h-4" /> Download PDF
                </a>
              </div>
            )}

          </div>

          {/* Right Sticky Metadata Sidebar */}
          <div>
            <div className="sticky top-28 bg-white rounded-3xl p-6 md:p-8 border-2 border-slate-900/10 shadow-lg space-y-6">
              <div className="border-b-2 border-slate-100 pb-4">
                <div className="text-xs font-mono font-black text-[#0038ff] uppercase tracking-wider">
                  EVENT LOGISTICS
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
                  Key Details
                </h3>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <Calendar className="w-5 h-5 text-[#0038ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Date</span>
                    <span className="text-slate-900 font-black text-sm">{event.date}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <Clock className="w-5 h-5 text-[#0038ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Timing</span>
                    <span className="text-slate-900 font-black text-sm">{event.time || "Full Day Session"}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <MapPin className="w-5 h-5 text-[#0038ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Venue</span>
                    <span className="text-slate-900 font-black text-sm">{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t-2 border-slate-100 space-y-3">
                {event.registration_url && !event.is_past ? (
                  <a 
                    href={event.registration_url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full py-4 bg-[#ccff00] hover:bg-[#b8e600] text-black font-black text-sm uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2 shadow-md transition-all duration-300"
                  >
                    Register Online <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="w-full py-3 bg-slate-100 text-slate-500 font-mono text-xs font-bold text-center rounded-2xl border border-slate-200">
                    {event.is_past ? "Event Concluded" : "Registration Opening Soon"}
                  </div>
                )}

                <button 
                  onClick={handleShare}
                  className="w-full py-3 bg-white hover:bg-slate-50 border-2 border-slate-900/10 text-slate-700 font-mono text-xs font-bold rounded-2xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Share2 className="w-4 h-4" /> Share Event Link
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
