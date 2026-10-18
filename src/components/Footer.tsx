"use client";

import { ArrowUp, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0a0c14] text-white pt-20 pb-12 relative border-t border-white/10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Platform Brand & Address */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              {/* Speech bubble badge */}
              <div className="inline-flex items-center gap-2 bg-white text-black font-black text-sm px-3.5 py-1.5 rounded-full mb-6 select-none shadow-sm">
                <span className="uppercase font-sans">SHAIDS</span>
                <span className="bg-[#ccff00] text-black text-[10px] font-mono font-black px-2 py-0.5 rounded-full uppercase">
                  AI&DS
                </span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans max-w-[360px]"
              >
                STUDENT HUB FOR AI & DATA SCIENCE
              </h3>

              <p className="text-white/60 text-sm font-medium mt-3 leading-relaxed max-w-[380px]">
                The official digital ecosystem for the Department of Artificial Intelligence & Data Science at A. C. Patil College of Engineering, Navi Mumbai.
              </p>
            </div>

            <div className="mt-8 font-mono text-[11px] text-white/40 leading-relaxed uppercase">
              Kharghar, Navi Mumbai, Maharashtra 410210
              <br />
              Accredited NAAC A+ · Affiliated with University of Mumbai
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="font-mono text-xs font-black text-[#ccff00] uppercase tracking-widest mb-6">
              QUICK NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm font-bold font-sans">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link>
              <Link href="/events" className="text-white/70 hover:text-white transition-colors">Events & Fests</Link>
              <Link href="/resources" className="text-white/70 hover:text-white transition-colors">Resources</Link>
              <Link href="/team" className="text-white/70 hover:text-white transition-colors">Faculty & Team</Link>
              <Link href="/admin" className="text-white/70 hover:text-white transition-colors">Admin Portal</Link>
              <Link href="/events/fests/vectors" className="text-white/70 hover:text-[#ccff00] transition-colors">Vectors '26</Link>
              <Link href="/events/fests/kurukshetra" className="text-white/70 hover:text-[#ccff00] transition-colors">Kurukshetra</Link>
            </div>
          </div>

          {/* Column 3: Connect & Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs font-black text-[#ccff00] uppercase tracking-widest mb-6">
                CONNECT
              </h4>
              <div className="flex flex-col gap-2.5 text-sm font-medium">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-[#0038ff] transition-colors flex items-center justify-between"
                >
                  <span>LinkedIn Page</span>
                  <span className="text-xs">↗</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-[#ccff00] transition-colors flex items-center justify-between"
                >
                  <span>Instagram Council</span>
                  <span className="text-xs">↗</span>
                </a>
                <a
                  href="https://acpce.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>ACPCE Official</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 flex items-center justify-between px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#ccff00] hover:text-black transition-all group font-mono text-xs font-bold uppercase tracking-wider"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* ── Copyright & Attribution ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-white/40 uppercase">
          <div>
            © 2026 SHAIDS · ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-1">
            BUILT WITH <Heart className="w-3.5 h-3.5 text-[#ccff00] fill-[#ccff00] inline" /> BY STUDENT ENGINEERS
          </div>
        </div>

      </div>
    </footer>
  );
}