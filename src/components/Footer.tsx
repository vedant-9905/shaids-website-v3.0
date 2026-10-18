"use client";

import { ArrowRight, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#02040a] text-[#fdfbf7] pt-20 pb-12 relative border-t border-[#262626]">
      <div className="layout-block px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          
          {/* Column 1: Newsletter & Department Info */}
          <div className="has-pin has-pin--top-left has-pin__light flex flex-col md:pr-12 md:border-r border-[#262626] pb-16">
            <div className="w-2 h-2 bg-[#0e76ff] mb-4" />
            <h3 className="h3 mb-8 font-sans">
              Subscribe to SHAIDS updates:
            </h3>

            <div className="flex items-center w-full mb-16">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="body-smaller bg-transparent border-b border-[#262626] text-[#fdfbf7] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#0e76ff] w-full py-3 mr-4"
              />
              <div className="flex bg-[#0e76ff] hover:bg-[#005cd6] cursor-pointer transition-colors shrink-0">
                <div className="mono-small px-4 py-3 font-bold text-white">
                  SUBSCRIBE
                </div>
                <div className="flex items-center justify-center w-10 border-l border-white/10 bg-black/10">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-[#0e76ff]" />
                <span className="text-xl font-bold tracking-tight font-sans">ACPCE NAVI MUMBAI</span>
              </div>
              <p className="mono-small text-[#a3a3a3] leading-relaxed">
                Department of <span className="text-[#fdfbf7]">Artificial Intelligence & Data Science</span><br />
                A. C. Patil College of Engineering, Kharghar, Navi Mumbai
              </p>
            </div>
          </div>

          {/* Column 2: Structural Navigation */}
          <div className="has-pin has-pin--top-left has-pin__light flex flex-col md:px-12 md:border-r border-[#262626] pb-16">
            <h4 className="mono-small text-[#0e76ff] font-bold mb-8">
              NAVIGATION
            </h4>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-base font-medium mb-16 font-sans">
              <Link href="/" className="hover:text-[#0e76ff] transition-colors">Home</Link>
              <Link href="/about" className="hover:text-[#0e76ff] transition-colors">About Department</Link>
              <Link href="/events" className="hover:text-[#0e76ff] transition-colors">Events & Fests</Link>
              <Link href="/resources" className="hover:text-[#0e76ff] transition-colors">Student Resources</Link>
              <Link href="/team" className="hover:text-[#0e76ff] transition-colors">Faculty & Team</Link>
              <Link href="/admin" className="hover:text-[#0e76ff] transition-colors">Admin Dashboard</Link>
            </div>

            <div className="mt-auto flex gap-6 mono-small text-[#a3a3a3]">
              <Link href="/about" className="hover:text-[#fdfbf7] transition-colors">Academic Matrix</Link>
              <Link href="/events" className="hover:text-[#fdfbf7] transition-colors">Flagship Fests</Link>
            </div>
          </div>

          {/* Column 3: Institutional Channels & Back To Top */}
          <div className="has-pin has-pin--top-left has-pin__light flex flex-col md:pl-12 pb-16 relative">
            <div className="flex justify-between items-start mb-8">
              <h4 className="mono-small text-[#0e76ff] font-bold">
                CONNECT & SOCIAL
              </h4>
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <span className="mono-small text-[#a3a3a3] group-hover:text-[#fdfbf7] transition-colors">
                  BACK TO TOP
                </span>
                <div className="w-7 h-7 border border-[#262626] flex items-center justify-center group-hover:bg-[#0e76ff] group-hover:border-[#0e76ff] transition-colors">
                  <ArrowUp className="w-3.5 h-3.5 text-[#fdfbf7]" />
                </div>
              </button>
            </div>
            
            <div className="flex flex-col gap-3 text-base font-medium mb-16 font-sans">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#0e76ff] transition-colors">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#0e76ff] transition-colors">GitHub Repository</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#0e76ff] transition-colors">Instagram Committee</a>
            </div>

            <div className="mt-auto mono-small text-[#a3a3a3]">
              © 2026 SHAIDS — Dept. of AI & Data Science, ACPCE
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

