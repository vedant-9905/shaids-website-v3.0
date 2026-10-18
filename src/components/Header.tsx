"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "ABOUT", href: "/about" },
  { name: "EVENTS & FESTS", href: "/events" },
  { name: "RESOURCES", href: "/resources" },
  { name: "FACULTY & TEAM", href: "/team" },
  { name: "ADMIN", href: "/admin" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[999] px-4 sm:px-8 flex items-center justify-between transition-all duration-300 pointer-events-none ${
        isScrolled
          ? "bg-[#0022cc]/95 backdrop-blur-xl border-b border-white/10 shadow-xl py-3"
          : "py-4 sm:py-5"
      }`}>
        
        {/* 1. Speech Bubble Logo (Directly from Image 1 "BASE CLUB" style) */}
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-1.5 select-none hover:scale-105 transition-transform group"
        >
          {/* White Speech Bubble Container */}
          <div className="relative bg-white text-black font-black text-sm sm:text-base px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
            <span className="tracking-tight uppercase font-sans">SHAIDS</span>
            {/* Neon lime inner pill */}
            <span className="bg-[#ccff00] text-black text-[9px] sm:text-[10px] font-mono font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
              AI&DS
            </span>
            {/* Speech bubble tail tick */}
            <div className="absolute -bottom-1 left-3 w-2.5 h-2.5 bg-white rotate-45" />
          </div>
        </Link>

        {/* 2. Center Capsule Navbar (Floating Pill from Image 1) */}
        <nav className="hidden md:flex items-center gap-1.5 bg-white/12 hover:bg-white/18 backdrop-blur-xl border border-white/20 rounded-full px-3 py-1.5 pointer-events-auto transition-colors shadow-lg">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3.5 py-1 rounded-full text-[11px] font-bold font-mono tracking-wider uppercase transition-all duration-200 ${
                  active
                    ? "bg-[#ccff00] text-black shadow-sm"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* 3. Right Pill Button (Connect Wallet / College Portal style) */}
        <div className="hidden sm:flex items-center gap-2 pointer-events-auto">
          {/* Active Session Pill */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-mono text-[10px] font-bold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
            <span>2026-27</span>
          </div>

          {/* Capsule Portal Button */}
          <a
            href="https://acpce.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-white hover:bg-[#ccff00] text-black font-mono text-[11px] font-bold tracking-wider uppercase transition-all duration-200 shadow-md flex items-center gap-1.5 group"
          >
            <span>COLLEGE PORTAL</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden pointer-events-auto flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[998] bg-[#0022cc]/95 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-6 md:hidden animate-in fade-in duration-200 text-white">
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-mono tracking-[2px] uppercase text-[#ccff00] font-bold mb-2">
              NAVIGATION MENU
            </div>
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-black tracking-tight py-2.5 border-b border-white/10 flex items-center justify-between ${
                    active ? "text-[#ccff00]" : "text-white"
                  }`}
                >
                  <span>{item.name}</span>
                  {active && <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00]" />}
                </Link>
              );
            })}
            <a
              href="https://acpce.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 py-3 px-6 rounded-full bg-[#ccff00] text-black font-mono text-xs font-black tracking-wider uppercase text-center flex items-center justify-center gap-2"
            >
              <span>ACPCE COLLEGE PORTAL</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] text-white/50 tracking-widest uppercase border-t border-white/10 pt-4">
            <span>SHAIDS ACPCE</span>
            <span>SESSION 2026-27</span>
          </div>
        </div>
      )}
    </>
  );
}
