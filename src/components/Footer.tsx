"use client";

import { ArrowRight, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#000000] text-white pt-20 pb-12 relative border-t border-white/8">
      <div className="layout-block px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">

          {/* Column 1: Newsletter & Department Info */}
          <div className="flex flex-col md:pr-12 md:border-r border-white/8 pb-16 relative">
            <div className="w-[5px] h-[5px] bg-[#e63022] mb-5" />
            <h3 className="text-white mb-8" style={{ fontFamily: "'Archivo', sans-serif", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, letterSpacing: "-1.2px", lineHeight: "1.05" }}>
              Subscribe to SHAIDS updates:
            </h3>

            <div className="flex items-center w-full mb-16">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent border-b border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:border-[#e63022] w-full py-3 mr-4 text-[13px] font-sans"
              />
              <div className="flex bg-[#e63022] hover:bg-[#bf1a0c] cursor-pointer transition-colors shrink-0">
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
                <div className="w-[5px] h-[5px] bg-[#e63022]" />
                <span className="text-xl font-bold tracking-tight font-sans">ACPCE NAVI MUMBAI</span>
              </div>
              <p className="mono-small text-white/35 leading-relaxed">
                Department of <span className="text-white/70">Artificial Intelligence & Data Science</span><br />
                A. C. Patil College of Engineering, Kharghar, Navi Mumbai
              </p>
            </div>
          </div>

          {/* Column 2: Structural Navigation */}
          <div className="flex flex-col md:px-12 md:border-r border-white/8 pb-16">
            <h4 className="mono-small text-[#e63022] font-bold mb-8">
              NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-[14px] font-medium mb-16 font-sans">
              <Link href="/" className="hover:text-[#e63022] transition-colors text-white/70">Home</Link>
              <Link href="/about" className="hover:text-[#e63022] transition-colors text-white/70">About Department</Link>
              <Link href="/events" className="hover:text-[#e63022] transition-colors text-white/70">Events & Fests</Link>
              <Link href="/resources" className="hover:text-[#e63022] transition-colors text-white/70">Student Resources</Link>
              <Link href="/team" className="hover:text-[#e63022] transition-colors text-white/70">Faculty & Team</Link>
              <Link href="/admin" className="hover:text-[#e63022] transition-colors text-white/70">Admin Dashboard</Link>
            </div>
            <div className="mt-auto flex gap-6 mono-small text-white/30">
              <Link href="/about" className="hover:text-white/70 transition-colors">Academic Matrix</Link>
              <Link href="/events" className="hover:text-white/70 transition-colors">Flagship Fests</Link>
            </div>
          </div>

          {/* Column 3: Channels & Back To Top */}
          <div className="flex flex-col md:pl-12 pb-16 relative">
            <div className="flex justify-between items-start mb-8">
              <h4 className="mono-small text-[#1a55cc] font-bold">
                CONNECT & SOCIAL
              </h4>
              <button onClick={scrollToTop} className="flex items-center gap-2 group cursor-pointer">
                <span className="mono-small text-white/30 group-hover:text-white/70 transition-colors">
                  BACK TO TOP
                </span>
                <div className="w-7 h-7 border border-white/15 flex items-center justify-center group-hover:bg-[#e63022] group-hover:border-[#e63022] transition-colors">
                  <ArrowUp className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </div>

            <div className="flex flex-col gap-3 text-[14px] font-medium mb-16 font-sans">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#1a55cc] transition-colors text-white/70">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#e63022] transition-colors text-white/70">GitHub Repository</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#f06090] transition-colors text-white/70">Instagram Committee</a>
            </div>

            <div className="mt-auto mono-small text-white/25">
              © 2026 SHAIDS — Dept. of AI & Data Science, ACPCE
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}