"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import TextReveal from "@/components/TextReveal";
import { 
  ArrowLeft, 
  Code, 
  Globe, 
  Mail, 
  Award, 
  Sparkles 
} from "lucide-react";
import { useContent } from "@/context/content-context";

export default function TeamMemberDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { team } = useContent();

  const member = team.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="w-full min-h-screen bg-[#02040a] text-white pt-32 pb-24 px-4 flex flex-col items-center justify-center font-mono text-xs">
        <h1 className="text-3xl font-bold font-sans text-white mb-4">MEMBER RECORD NOT FOUND</h1>
        <p className="text-[#a3a3a3] mb-8">The requested student committee member ID does not exist.</p>
        <Link href="/team" className="px-6 py-3 bg-[#0e76ff] text-white font-bold hover:bg-[#0e76ff]/80">
          RETURN TO TEAM DIRECTORY
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#02040a] text-white pt-32 pb-24 px-4 md:px-8" data-theme="dark">
      <div className="layout-block max-w-5xl mx-auto space-y-10">
        
        {/* Back Link */}
        <Link 
          href="/team" 
          className="inline-flex items-center gap-2 font-mono text-xs text-[#a3a3a3] hover:text-[#0e76ff] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO TEAM DIRECTORY
        </Link>

        {/* Profile Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-[#262626] pb-12">
          
          {/* Member Photo */}
          <div className="relative w-full aspect-square bg-[#080d1a] border border-[#262626] overflow-hidden card-frosted">
            <Image 
              src={member.image_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"} 
              alt={member.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
              unoptimized={Boolean(member.image_url?.startsWith("data:"))}
            />
          </div>

          {/* Member Meta */}
          <div className="md:col-span-2 space-y-6 flex flex-col justify-between">
            <div>
              <span className="mono-small bg-[#0e76ff]/20 text-[#0e76ff] border border-[#0e76ff]/30 px-3 py-1 text-[10px] uppercase font-bold block w-fit mb-3">
                {member.category || "STUDENT COMMITTEE"} • A.Y. {member.academicYear || "2026-27"}
              </span>

              <TextReveal
                text={member.name}
                as="h1"
                className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-2 font-sans"
              />

              <div className="text-sm font-mono text-[#0e76ff] font-bold">{member.role}</div>

              {member.bio && (
                <p className="text-sm text-[#a3a3a3] leading-relaxed mt-4 font-sans">{member.bio}</p>
              )}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-[#262626] flex items-center gap-4">
              {member.github && (
                <a href={member.github} target="_blank" rel="noreferrer" className="px-4 py-2 border border-[#262626] text-[#a3a3a3] hover:text-white font-mono text-xs flex items-center gap-2">
                  <Code className="w-4 h-4" /> GITHUB
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 border border-[#262626] text-[#a3a3a3] hover:text-[#0e76ff] font-mono text-xs flex items-center gap-2">
                  <Globe className="w-4 h-4" /> LINKEDIN
                </a>
              )}
              {member.email && (
                <a href={`mailto:${member.email}`} className="px-4 py-2 border border-[#262626] text-[#a3a3a3] hover:text-white font-mono text-xs flex items-center gap-2">
                  <Mail className="w-4 h-4" /> EMAIL
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Skills & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {member.skills && member.skills.length > 0 && (
            <div className="card-frosted p-6 border border-white/10 space-y-4">
              <h3 className="text-xl font-bold font-sans text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0e76ff]" /> TECHNICAL SKILLS
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {member.skills.map((skill, idx) => (
                  <span key={idx} className="mono-small bg-[#080d1a] border border-[#262626] text-white px-3 py-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {member.achievements && member.achievements.length > 0 && (
            <div className="card-frosted p-6 border border-white/10 space-y-4">
              <h3 className="text-xl font-bold font-sans text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" /> KEY ACHIEVEMENTS
              </h3>
              <ul className="space-y-2 text-xs text-[#a3a3a3] font-mono">
                {member.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    {ach}
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
