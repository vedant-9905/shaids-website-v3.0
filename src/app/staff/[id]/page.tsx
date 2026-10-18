"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import TextReveal from "@/components/TextReveal";
import { 
  ArrowLeft, 
  Mail, 
  GraduationCap, 
  BookOpen
} from "lucide-react";
import { useContent } from "@/context/content-context";

export default function StaffMemberDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { staff } = useContent();

  const member = staff.find((s) => s.id === id);

  if (!member) {
    return (
      <div className="w-full min-h-screen bg-[#02040a] text-white pt-32 pb-24 px-4 flex flex-col items-center justify-center font-mono text-xs">
        <h1 className="text-3xl font-bold font-sans text-white mb-4">FACULTY RECORD NOT FOUND</h1>
        <p className="text-[#a3a3a3] mb-8">The requested faculty member ID does not exist.</p>
        <Link href="/staff" className="px-6 py-3 bg-[#0e76ff] text-white font-bold hover:bg-[#0e76ff]/80">
          RETURN TO FACULTY DIRECTORY
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#02040a] text-white pt-32 pb-24 px-4 md:px-8" data-theme="dark">
      <div className="layout-block max-w-5xl mx-auto space-y-10">
        
        {/* Back Link */}
        <Link 
          href="/staff" 
          className="inline-flex items-center gap-2 font-mono text-xs text-[#a3a3a3] hover:text-[#0e76ff] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO FACULTY DIRECTORY
        </Link>

        {/* Profile Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-[#262626] pb-12">
          
          {/* Faculty Photo */}
          <div className="relative w-full aspect-square bg-[#080d1a] border border-[#262626] overflow-hidden card-frosted">
            <Image 
              src={member.image_url || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"} 
              alt={member.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
              unoptimized={Boolean(member.image_url?.startsWith("data:"))}
            />
          </div>

          {/* Faculty Meta */}
          <div className="md:col-span-2 space-y-6 flex flex-col justify-between">
            <div>
              <span className="mono-small bg-[#0e76ff]/20 text-[#0e76ff] border border-[#0e76ff]/30 px-3 py-1 text-[10px] uppercase font-bold block w-fit mb-3">
                FACULTY MEMBER • AI & DATA SCIENCE
              </span>

              <TextReveal
                text={member.name}
                as="h1"
                className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-2 font-sans"
              />

              <div className="text-sm font-mono text-[#0e76ff] font-bold">{member.designation}</div>

              {member.qualification && (
                <div className="text-xs font-mono text-[#a3a3a3] mt-2 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#0e76ff]" />
                  {member.qualification}
                </div>
              )}

              {member.bio && (
                <p className="text-sm text-[#a3a3a3] leading-relaxed mt-4 font-sans">{member.bio}</p>
              )}
            </div>

            {/* Email Link */}
            {member.email && (
              <div className="pt-6 border-t border-[#262626]">
                <a 
                  href={`mailto:${member.email}`} 
                  className="px-5 py-2.5 bg-[#0e76ff] text-white font-mono text-xs font-bold inline-flex items-center gap-2 hover:bg-[#0e76ff]/80"
                >
                  <Mail className="w-4 h-4" /> CONTACT FACULTY ({member.email})
                </a>
              </div>
            )}
          </div>

        </div>

        {/* Areas of Expertise */}
        {member.expertise && member.expertise.length > 0 && (
          <div className="card-frosted p-6 border border-white/10 space-y-4">
            <h3 className="text-xl font-bold font-sans text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#0e76ff]" /> RESEARCH & DOMAIN EXPERTISE
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {member.expertise.map((exp, idx) => (
                <span key={idx} className="mono-small bg-[#080d1a] border border-[#262626] text-white px-3 py-1">
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
