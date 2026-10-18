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
import { DoodleSparkle, DoodleSquiggleWave, CircularStampBadge, DoodleHashtag } from "@/components/DoodleSVGs";

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
    <div className="w-full min-h-screen bg-[#050508] text-white pb-24">
      
      {/* ── Hero Banner (Pitch Black + Candy Accents) ── */}
      <section className="relative w-full bg-[#000000] text-white pt-32 pb-24 px-4 md:px-8 overflow-hidden border-b border-white/10">
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px"
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 space-y-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pt-4">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffe600] text-black font-black text-xs uppercase tracking-wider shadow-md">
                  <Sparkles className="w-3.5 h-3.5" /> Department Faculty & Mentors
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-semibold">
                  <Award className="w-3.5 h-3.5 text-[#00f5a0]" /> Ph.D. & Masters Mentorship
                </span>
              </div>

              <div className="flex items-center gap-3">
                <DoodleHashtag className="w-12 sm:w-16 h-auto -mt-3" color="#ffe600" />
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none font-sans">
                  FACULTY DIRECTORY
                </h1>
              </div>

              <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-2xl">
                Distinguished researchers, machine learning practitioners, and academic mentors guiding students through theoretical depth and breakthrough AI engineering.
              </p>
            </div>

            <div className="hidden lg:block shrink-0">
              <CircularStampBadge text="• FACULTY DIRECTORY • RESEARCH & LABS • ACPCE " size={120} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Faculty Grid ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 space-y-12">
        
        {/* Quick Stats Pill Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/[0.04] p-6 rounded-2xl border border-white/10 shadow-sm backdrop-blur-md">
            <div className="text-xs font-mono font-bold text-white/50 uppercase">Faculty Ratio</div>
            <div className="text-2xl md:text-3xl font-black text-[#0055ff] mt-1">1 : 15</div>
          </div>
          <div className="bg-white/[0.04] p-6 rounded-2xl border border-white/10 shadow-sm backdrop-blur-md">
            <div className="text-xs font-mono font-bold text-white/50 uppercase">Active Research</div>
            <div className="text-2xl md:text-3xl font-black text-[#ffe600] mt-1">20+ Papers</div>
          </div>
          <div className="bg-white/[0.04] p-6 rounded-2xl border border-white/10 shadow-sm backdrop-blur-md">
            <div className="text-xs font-mono font-bold text-white/50 uppercase">Dedicated Labs</div>
            <div className="text-2xl md:text-3xl font-black text-[#00f5a0] mt-1">4 High-End Labs</div>
          </div>
          <div className="bg-white/[0.04] p-6 rounded-2xl border border-white/10 shadow-sm backdrop-blur-md">
            <div className="text-xs font-mono font-bold text-white/50 uppercase">Patents & Grants</div>
            <div className="text-2xl md:text-3xl font-black text-[#ff3b30] mt-1">6 Filed</div>
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
                className="group bg-white/[0.04] hover:bg-white/[0.07] rounded-3xl border border-white/10 hover:border-white/20 p-6 shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 backdrop-blur-md"
              >
                <div className="space-y-4">
                  {/* Faculty Photo */}
                  <div className="relative w-full aspect-square bg-slate-900 rounded-2xl overflow-hidden border border-white/10">
                    <Image 
                      src={imgSrc} 
                      alt={m.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized={isDataUrl}
                    />
                  </div>

                  <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-wider bg-[#ffe600] text-black px-3 py-1 rounded-full font-black">
                    {m.id === "st-1" ? "Head of Department" : "Faculty Member"}
                  </span>

                  <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-[#ffe600] transition-colors">
                    {m.name}
                  </h3>

                  <div className="text-xs font-mono font-bold text-[#0055ff]">
                    {m.designation}
                  </div>

                  {m.qualification && (
                    <div className="text-xs font-mono text-white/60 flex items-center gap-1.5 pt-1">
                      <GraduationCap className="w-4 h-4 text-[#ffe600] shrink-0" />
                      <span>{m.qualification}</span>
                    </div>
                  )}

                  {m.bio && (
                    <p className="text-sm text-white/70 leading-relaxed line-clamp-3 pt-1">
                      {m.bio}
                    </p>
                  )}

                  {m.expertise && m.expertise.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {m.expertise.map((exp, idx) => (
                        <span 
                          key={idx} 
                          className="font-mono text-[10px] text-white/70 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  {m.email ? (
                    <a 
                      href={`mailto:${m.email}`} 
                      className="font-mono text-xs font-bold text-[#0055ff] hover:text-[#ffe600] flex items-center gap-1.5 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Email
                    </a>
                  ) : <span />}

                  <Link 
                    href={`/staff/${m.id}`}
                    className="font-mono text-xs font-bold text-white hover:text-[#ffe600] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
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
