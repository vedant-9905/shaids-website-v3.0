"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  GraduationCap,
  Sparkles,
  ArrowRight,
  BookOpen,
  Award
} from "lucide-react";
import { useContent } from "@/context/content-context";
import { DoodleSparkle, DoodleSquiggleWave, CircularStampBadge } from "@/components/DoodleSVGs";

const DEFAULT_STAFF = [
  {
    id: "st-1",
    name: "Mrs. Shilpali Bansu",
    designation: "Head of Department & Assistant Professor",
    qualification: "M.E. Computer Engineering (Ph.D. Pursuing)",
    expertise: ["Deep Learning", "Natural Language Processing", "Machine Learning"],
    email: "shilpali.bansu@acpce.ac.in",
    image_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "12+ years of academic and research experience. Leading AI & Data Science curriculum and departmental research initiatives."
  },
  {
    id: "st-2",
    name: "Prof. Rajesh Deshmukh",
    designation: "Assistant Professor",
    qualification: "M.Tech Computer Technology",
    expertise: ["Big Data Analytics", "Cloud Computing", "SQL & NoSQL Systems"],
    email: "rajesh.deshmukh@acpce.ac.in",
    image_url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "Specializing in distributed computing architectures and enterprise data pipelines."
  },
  {
    id: "st-3",
    name: "Prof. Sunita Patil",
    designation: "Assistant Professor",
    qualification: "M.E. Information Technology",
    expertise: ["Computer Vision", "OpenCV", "Pattern Recognition"],
    email: "sunita.patil@acpce.ac.in",
    image_url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Guiding real-world computer vision projects and edge AI hardware deployments."
  }
];

export default function StaffPage() {
  const { staff } = useContent();

  const activeStaff = staff && staff.length > 0 ? staff : DEFAULT_STAFF;

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-slate-900 pb-24">
      
      {/* Electric Cobalt Blue Faculty Hero Banner */}
      <section className="relative w-full bg-[#0038ff] text-white pt-32 pb-24 px-4 md:px-8 overflow-hidden">
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

        <div className="max-w-7xl mx-auto relative z-10 space-y-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pt-4">
            <div className="space-y-4 max-w-3xl">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ccff00] text-black font-black text-xs uppercase tracking-wider shadow-md">
                  <Sparkles className="w-3.5 h-3.5" /> Department Faculty & Mentors
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 text-white font-mono text-xs font-semibold">
                  <Award className="w-3.5 h-3.5 text-[#ccff00]" /> Ph.D. & Masters Mentorship
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none uppercase">
                FACULTY <span className="text-[#ccff00]">DIRECTORY</span>
              </h1>

              <div className="w-32 py-1">
                <DoodleSquiggleWave className="w-full h-4 text-[#ccff00]" />
              </div>

              <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl">
                Distinguished researchers, machine learning practitioners, and academic mentors guiding students through theoretical depth and breakthrough AI engineering.
              </p>
            </div>

            {/* Floating Stamp Badge */}
            <div className="hidden lg:block shrink-0">
              <CircularStampBadge text="• FACULTY DIRECTORY • RESEARCH & LABS • ACPCE " size={120} />
            </div>
          </div>
        </div>

        {/* Bottom Shelf Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#f8fafc] rounded-t-[32px]" />
      </section>

      {/* Main Faculty Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 space-y-12">
        
        {/* Quick Stats Pill Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border-2 border-slate-900/10 shadow-sm">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase">Faculty Ratio</div>
            <div className="text-2xl md:text-3xl font-black text-[#0038ff] mt-1">1 : 15</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border-2 border-slate-900/10 shadow-sm">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase">Active Research</div>
            <div className="text-2xl md:text-3xl font-black text-slate-900 mt-1">20+ Papers</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border-2 border-slate-900/10 shadow-sm">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase">Dedicated Labs</div>
            <div className="text-2xl md:text-3xl font-black text-[#0038ff] mt-1">4 High-End Labs</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border-2 border-slate-900/10 shadow-sm">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase">Patents & Grants</div>
            <div className="text-2xl md:text-3xl font-black text-emerald-600 mt-1">6 Filed</div>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeStaff.map((m) => {
            const imgSrc = m.image_url || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80";
            const isDataUrl = imgSrc.startsWith("data:");
            
            return (
              <div 
                key={m.id} 
                className="group bg-white rounded-3xl border-2 border-slate-900/10 hover:border-[#0038ff] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Faculty Photo */}
                  <div className="relative w-full aspect-square bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                    <Image 
                      src={imgSrc} 
                      alt={m.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized={isDataUrl}
                    />
                  </div>

                  <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-wider bg-[#0038ff]/10 text-[#0038ff] px-3 py-1 rounded-full">
                    {m.id === "st-1" ? "Head of Department" : "Faculty Member"}
                  </span>

                  <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-[#0038ff] transition-colors">
                    {m.name}
                  </h3>

                  <div className="text-xs font-mono font-bold text-[#0038ff]">
                    {m.designation}
                  </div>

                  {m.qualification && (
                    <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5 pt-1">
                      <GraduationCap className="w-4 h-4 text-[#0038ff] shrink-0" />
                      <span>{m.qualification}</span>
                    </div>
                  )}

                  {m.bio && (
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 pt-1">
                      {m.bio}
                    </p>
                  )}

                  {m.expertise && m.expertise.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {m.expertise.map((exp, idx) => (
                        <span 
                          key={idx} 
                          className="font-mono text-[10px] text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between gap-3">
                  {m.email ? (
                    <a 
                      href={`mailto:${m.email}`} 
                      className="font-mono text-xs font-bold text-[#0038ff] flex items-center gap-1.5 hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Email
                    </a>
                  ) : <span />}

                  <Link 
                    href={`/staff/${m.id}`}
                    className="font-mono text-xs font-bold text-slate-700 hover:text-[#0038ff] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Profile <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
