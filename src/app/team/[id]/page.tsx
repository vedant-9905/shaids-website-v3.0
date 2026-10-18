"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Mail, 
  Award, 
  Sparkles,
  ExternalLink
} from "lucide-react";
import { useContent } from "@/context/content-context";
import { DoodleSparkle, DoodleSquiggleWave } from "@/components/DoodleSVGs";

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

export default function TeamMemberDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { team } = useContent();

  const member = team.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="w-full min-h-screen bg-[#f8fafc] text-slate-900 pt-32 pb-24 px-4 flex flex-col items-center justify-center font-mono text-xs">
        <div className="bg-white p-10 rounded-3xl border-2 border-slate-900/10 shadow-xl max-w-md text-center space-y-4">
          <DoodleSparkle className="w-12 h-12 text-[#0038ff] mx-auto opacity-50" />
          <h1 className="text-2xl font-black text-slate-900 uppercase">Member Not Found</h1>
          <p className="text-slate-500 font-sans text-sm">The requested team member profile could not be located in the SHAIDS archive.</p>
          <Link 
            href="/team" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0038ff] text-white font-mono text-xs font-bold rounded-full hover:bg-[#002edb] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Team Directory
          </Link>
        </div>
      </div>
    );
  }

  const imgSrc = member.image_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80";

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

        <div className="max-w-6xl mx-auto relative z-10 space-y-6">
          {/* Back Navigation Button */}
          <Link 
            href="/team" 
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white/80 hover:text-[#ccff00] bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Team Directory
          </Link>

          <div className="space-y-4 max-w-4xl pt-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ccff00] text-black font-black text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> {member.category || "STUDENT COMMITTEE"}
              </span>
              <span className="font-mono text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/20 font-semibold">
                Session {member.academicYear || "2026-27"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-tight uppercase">
              {member.name}
            </h1>

            <div className="w-28 py-1">
              <DoodleSquiggleWave className="w-full h-3 text-[#ccff00]" />
            </div>

            <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl font-mono">
              {member.role}
            </p>
          </div>
        </div>

        {/* Bottom Shelf Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#f8fafc] rounded-t-[32px]" />
      </section>

      {/* Main Profile Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-8 space-y-10">
        
        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-slate-900/10 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Photo */}
          <div className="relative w-full aspect-square bg-slate-100 rounded-3xl overflow-hidden border-2 border-slate-900/10 shadow-sm">
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
              <span className="inline-block font-mono text-xs font-bold uppercase tracking-wider bg-[#0038ff]/10 text-[#0038ff] px-3 py-1 rounded-full mb-3">
                {member.role}
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                {member.name}
              </h2>

              <div className="text-sm font-mono font-bold text-slate-500 mt-1">
                Student Committee • Academic Year {member.academicYear || "2026-27"}
              </div>

              {member.bio && (
                <p className="text-base text-slate-600 leading-relaxed mt-5 font-sans">
                  {member.bio}
                </p>
              )}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t-2 border-slate-100 flex flex-wrap items-center gap-3">
              {member.github && (
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-black text-white font-mono text-xs font-bold flex items-center gap-2 shadow-sm transition-colors"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              )}
              {member.linkedin && (
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-5 py-2.5 rounded-full bg-[#0077b5] hover:bg-[#005f93] text-white font-mono text-xs font-bold flex items-center gap-2 shadow-sm transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn <ExternalLink className="w-3 h-3 text-white/70" />
                </a>
              )}
              {member.email && (
                <a 
                  href={`mailto:${member.email}`} 
                  className="px-5 py-2.5 rounded-full bg-[#0038ff] hover:bg-[#002edb] text-white font-mono text-xs font-bold flex items-center gap-2 shadow-sm transition-colors"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Skills & Key Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills */}
          {member.skills && member.skills.length > 0 && (
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-900/10 shadow-sm space-y-4">
              <div className="border-b-2 border-slate-100 pb-3">
                <div className="text-xs font-mono font-black text-[#0038ff] uppercase tracking-wider">
                  EXPERTISE
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-1 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#0038ff]" /> Technical Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {member.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {member.achievements && member.achievements.length > 0 && (
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-900/10 shadow-sm space-y-4">
              <div className="border-b-2 border-slate-100 pb-3">
                <div className="text-xs font-mono font-black text-emerald-600 uppercase tracking-wider">
                  HONORS & MILESTONES
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-1 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" /> Key Achievements
                </h3>
              </div>
              <ul className="space-y-3 pt-2 text-sm text-slate-600">
                {member.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
