"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TextReveal from "@/components/TextReveal";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  ExternalLink, 
  Download, 
  ShieldCheck, 
  Share2 
} from "lucide-react";
import { useContent } from "@/context/content-context";
import { toast } from "sonner";

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { events } = useContent();
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="w-full min-h-screen bg-[#02040a] text-white pt-32 pb-24 px-4 flex flex-col items-center justify-center font-mono text-xs">
        <h1 className="text-3xl font-bold font-sans text-white mb-4">EVENT RECORD NOT FOUND</h1>
        <p className="text-[#a3a3a3] mb-8">The requested event ID does not exist in the SHAIDS database.</p>
        <Link href="/events" className="px-6 py-3 bg-[#0e76ff] text-white font-bold hover:bg-[#0e76ff]/80">
          RETURN TO EVENTS HUB
        </Link>
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
    <div className="w-full min-h-screen bg-[#02040a] text-white pt-32 pb-24 px-4 md:px-8" data-theme="dark">
      <div className="layout-block max-w-6xl mx-auto space-y-10">
        
        {/* Back Link */}
        <Link 
          href="/events" 
          className="inline-flex items-center gap-2 font-mono text-xs text-[#a3a3a3] hover:text-[#0e76ff] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO EVENTS HUB
        </Link>

        {/* Hero Section */}
        <div className="border-b border-[#262626] pb-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="mono-small bg-[#0e76ff] text-white px-3 py-1 text-[10px] uppercase font-bold">
              {event.type || "TECHNICAL"}
            </span>
            <span className="mono-small text-[#a3a3a3]">{event.date}</span>
          </div>

          <TextReveal
            text={event.title}
            as="h1"
            className="text-3xl md:text-6xl font-bold tracking-tighter leading-tight font-sans"
          />

          <p className="body-large text-[#a3a3a3] max-w-3xl font-medium leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Content & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Event Poster / Image */}
            {event.image_url && (
              <div className="card-frosted overflow-hidden border border-white/10 aspect-[16/9] relative">
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
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-sans text-white border-b border-[#262626] pb-3">
                About The Event
              </h2>
              <div className="text-sm text-[#a3a3a3] leading-relaxed whitespace-pre-wrap font-sans">
                {event.long_description || event.description || "Join us for an exciting deep dive into this topic."}
              </div>
            </div>

            {/* Gallery Images Carousel */}
            {event.gallery_images && event.gallery_images.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-[#262626]">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold font-sans text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#0e76ff]" /> Event Highlights & Photo Gallery
                  </h3>
                  <span className="mono-small text-[#a3a3a3]">{event.gallery_images.length} PHOTOS</span>
                </div>

                <div className="card-frosted overflow-hidden border border-white/10 aspect-[16/9] relative">
                  <Image 
                    src={event.gallery_images[activeGalleryIndex % event.gallery_images.length]} 
                    alt={`Highlight ${activeGalleryIndex + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                    unoptimized={Boolean(event.gallery_images[activeGalleryIndex % event.gallery_images.length]?.startsWith("data:"))}
                  />
                  {event.gallery_images.length > 1 && (
                    <div className="absolute bottom-4 right-4 flex gap-2 font-mono text-xs">
                      <button 
                        onClick={() => setActiveGalleryIndex((prev) => (prev > 0 ? prev - 1 : event.gallery_images!.length - 1))}
                        className="px-3 py-1 bg-black/80 text-white border border-white/20 hover:bg-[#0e76ff]"
                      >
                        PREV
                      </button>
                      <button 
                        onClick={() => setActiveGalleryIndex((prev) => (prev + 1) % event.gallery_images!.length)}
                        className="px-3 py-1 bg-black/80 text-white border border-white/20 hover:bg-[#0e76ff]"
                      >
                        NEXT
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Brochure Download */}
            {event.brochure_url && (
              <div className="card-frosted p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#0e76ff]" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Official Event Brochure</h4>
                    <p className="text-xs text-[#a3a3a3]">Download schedule, guidelines, and speaker details.</p>
                  </div>
                </div>
                <a 
                  href={event.brochure_url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-[#0e76ff] text-white font-mono text-xs font-bold flex items-center gap-2 hover:bg-[#0e76ff]/80 shrink-0"
                >
                  <Download className="w-4 h-4" /> DOWNLOAD PDF
                </a>
              </div>
            )}

          </div>

          {/* Right Metadata Sidebar */}
          <div>
            <div className="sticky top-32 card-frosted p-6 border border-white/10 has-pin has-pin--light space-y-6">
              <div className="mono-small text-[#0e76ff] font-bold border-b border-[#262626] pb-3">
                EVENT METADATA
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#0e76ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#a3a3a3] block text-[10px]">DATE</span>
                    <span className="text-white font-bold">{event.date}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#0e76ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#a3a3a3] block text-[10px]">TIME</span>
                    <span className="text-white font-bold">{event.time || "Full Day"}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0e76ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#a3a3a3] block text-[10px]">LOCATION / VENUE</span>
                    <span className="text-white font-bold">{event.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#262626] space-y-3">
                {event.registration_url && !event.is_past && (
                  <a 
                    href={event.registration_url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full py-3 bg-[#0e76ff] text-white font-mono text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#0e76ff]/80 transition-colors"
                  >
                    REGISTER NOW <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <button 
                  onClick={handleShare}
                  className="w-full py-2.5 border border-[#262626] text-[#a3a3a3] hover:text-white font-mono text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Share2 className="w-4 h-4" /> SHARE EVENT
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
