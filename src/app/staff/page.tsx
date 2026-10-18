"use client";

import Image from "next/image";
import TextReveal from "@/components/TextReveal";
import { 
  Mail, 
  GraduationCap
} from "lucide-react";
import { useContent } from "@/context/content-context";

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
    <div className="w-full min-h-screen bg-[#02040a] text-white pt-32 pb-24 px-4 md:px-8" data-theme="dark">
      <div className="layout-block max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-12 border-b border-[#262626] pb-10">
          <div className="mono-small text-[#0e76ff] font-bold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0e76ff] animate-ping" />
            FACULTY & RESEARCH MENTORS
          </div>
          <TextReveal
            text="Faculty Directory"
            as="h1"
            className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-6 font-sans"
          />
          <p className="body-large text-[#a3a3a3] max-w-3xl font-medium leading-relaxed">
            Our distinguished professors, researchers, and lab instructors who guide students through theoretical depth and practical AI innovation.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeStaff.map((m) => {
            const imgSrc = m.image_url || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80";
            const isDataUrl = imgSrc.startsWith("data:");
            return (
            <div key={m.id} className="card-frosted p-8 border border-white/10 has-pin has-pin--light flex flex-col justify-between space-y-6">
              <div>
                {/* Faculty Photo */}
                <div className="relative w-full aspect-square mb-6 bg-[#080d1a] border border-[#262626] overflow-hidden">
                  <Image 
                    src={imgSrc} 
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    unoptimized={isDataUrl}
                  />
                </div>

                <span className="mono-small bg-[#0e76ff]/20 text-[#0e76ff] border border-[#0e76ff]/30 px-2.5 py-0.5 text-[10px] font-bold block mb-2 w-fit">
                  FACULTY MEMBER
                </span>
                <h3 className="text-2xl font-bold font-sans text-white">{m.name}</h3>
                <div className="text-xs font-mono text-[#0e76ff] mt-1">{m.designation}</div>

                {m.qualification && (
                  <div className="text-xs font-mono text-[#a3a3a3] mt-2 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#0e76ff] shrink-0" />
                    {m.qualification}
                  </div>
                )}

                {m.bio && (
                  <p className="text-xs text-[#a3a3a3] mt-3 leading-relaxed">{m.bio}</p>
                )}

                {m.expertise && m.expertise.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {m.expertise.map((exp, idx) => (
                      <span key={idx} className="mono-small text-[10px] text-white bg-[#080d1a] px-2 py-0.5 border border-[#262626]">
                        {exp}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {m.email && (
                <div className="pt-4 border-t border-[#262626]">
                  <a 
                    href={`mailto:${m.email}`} 
                    className="text-xs font-mono text-[#0e76ff] font-bold flex items-center gap-2 hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    {m.email}
                  </a>
                </div>
              )}
            </div>
          );
        })}
        </div>

      </div>
    </div>
  );
}
