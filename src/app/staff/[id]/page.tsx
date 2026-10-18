"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Mail, 
  GraduationCap, 
  BookOpen,
  Sparkles,
  Award
} from "lucide-react";
import { useContent } from "@/context/content-context";
import { DoodleSparkle, DoodleSquiggleWave, DoodleHashtag } from "@/components/DoodleSVGs";

export default function StaffMemberDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { staff } = useContent();

  const member = staff.find((s) => s.id === id);

  if (!member) {
    return (
      <div className="w-full min-h-screen bg-[#050508] text-white pt-32 pb-24 px-4 flex flex-col items-center justify-center font-mono text-xs">
        <div className="bg-white/[0.04] p-10 rounded-3xl border border-white/10 shadow-2xl max-w-md text-center space-y-4 backdrop-blur-xl">
          <DoodleSparkle className="w-12 h-12 text-[#ffe600] mx-auto opacity-70" />
          <h1 className="text-2xl font-black text-white uppercase">Faculty Member Not Found</h1>
          <p className="text-white/60 font-sans text-sm">The requested faculty profile could not be located in the SHAIDS archive.</p>
          <Link 
            href="/staff" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0055ff] hover:bg-[#0044cc] text-white font-mono text-xs font-bold rounded-full transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Faculty Directory
          </Link>
        </div>
      </div>
    );
  }

  const imgSrc = member.image_url || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80";

  return (
    <div className="w-full min-h-screen bg-[#050508] text-white pb-24">
      
      {/* ── Hero Banner (Pitch Black + Candy Accents) ── */}
      <section className="relative w-full bg-[#000000] text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden border-b border-white/10">
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

        <div className="max-w-6xl mx-auto relative z-10 space-y-6">
          <Link 
            href="/staff" 
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white/80 hover:text-[#ffe600] bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Faculty Directory
          </Link>

          <div className="space-y-4 max-w-4xl pt-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffe600] text-black font-black text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Faculty Profile
              </span>
              <span className="font-mono text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/20 font-semibold">
                AI & Data Science Department
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-tight uppercase font-sans">
              {member.name}
            </h1>

            <div className="w-28 py-1">
              <DoodleSquiggleWave className="w-full h-3 text-[#0055ff]" />
            </div>

            <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-2xl font-mono">
              {member.designation}
            </p>
          </div>
        </div>
      </section>

      {/* Main Profile Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-10 space-y-10">
        
        {/* Profile Card */}
        <div className="bg-white/[0.04] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-10 items-start backdrop-blur-xl">
          
          {/* Faculty Photo */}
          <div className="relative w-full aspect-square bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-xl">
            <Image 
              src={imgSrc} 
              alt={member.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
              unoptimized={Boolean(member.image_url?.startsWith("data:"))}
            />
          </div>

          {/* Details */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <span className="inline-block font-mono text-xs font-bold uppercase tracking-wider bg-[#ffe600] text-black px-3 py-1 rounded-full mb-3 font-black">
                Academic & Research Mentor
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                {member.name}
              </h2>

              <div className="text-sm font-mono font-bold text-[#0055ff] mt-1">
                {member.designation}
              </div>

              {member.qualification && (
                <div className="text-sm font-mono text-white/70 mt-3 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#ffe600] shrink-0" />
                  <span>{member.qualification}</span>
                </div>
              )}

              {member.bio && (
                <p className="text-base text-white/80 leading-relaxed mt-5 font-sans">
                  {member.bio}
                </p>
              )}
            </div>

            {/* Email Contact Button */}
            {member.email && (
              <div className="pt-6 border-t border-white/10">
                <a 
                  href={`mailto:${member.email}`} 
                  className="px-6 py-3.5 bg-[#0055ff] hover:bg-[#0044cc] text-white font-mono text-xs font-bold rounded-full inline-flex items-center gap-2 shadow-md transition-all duration-300"
                >
                  <Mail className="w-4 h-4" /> Contact Faculty ({member.email})
                </a>
              </div>
            )}
          </div>

        </div>

        {/* Areas of Research Expertise */}
        {member.expertise && member.expertise.length > 0 && (
          <div className="bg-white/[0.04] rounded-3xl p-8 md:p-10 border border-white/10 shadow-xl space-y-6 backdrop-blur-md">
            <div className="border-b border-white/10 pb-4">
              <div className="text-xs font-mono font-black text-[#00f5a0] uppercase tracking-wider">
                SPECIALIZATION & FOCUS
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight mt-1 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#0055ff]" /> Research & Domain Expertise
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {member.expertise.map((exp, idx) => (
                <span 
                  key={idx} 
                  className="font-mono text-xs font-bold text-white bg-white/5 px-4 py-2 rounded-xl border border-white/10"
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
