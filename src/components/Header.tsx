"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "ABOUT", href: "/about" },
  { name: "EVENTS & FESTS", href: "/events" },
  { name: "RESOURCES", href: "/resources" },
  { name: "FACULTY & TEAM", href: "/team" },
];

export default function Header() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    let ticking = false;

    const handleCheckTheme = () => {
      // 0. Fast-path shortcut for top of hero section
      if (window.scrollY < 30) {
        setIsLightMode(false);
        return;
      }

      // 1. Check if header is sitting directly over the dark hero card
      const cardEl = document.getElementById("hero-collapse-card");
      if (cardEl) {
        const rect = cardEl.getBoundingClientRect();
        // Header sits around y = 35px
        const isOverDarkCard = rect.top <= 45 && rect.bottom >= 35;
        if (isOverDarkCard) {
          setIsLightMode(false);
          return;
        }
      }

      // 2. Check for any section with data-theme attribute at point (x: center, y: 35)
      const elAtPoint = document.elementFromPoint(window.innerWidth / 2, 35);
      if (elAtPoint) {
        const themeContainer = elAtPoint.closest("[data-theme]");
        if (themeContainer) {
          const theme = themeContainer.getAttribute("data-theme");
          setIsLightMode(theme === "light");
          return;
        }
      }

      // 3. Default to light mode when over light background sections
      setIsLightMode(false);
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleCheckTheme();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    handleCheckTheme(); // Initial check on load
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const themeClass = isLightMode ? "theme-light" : "theme-dark";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[999] pointer-events-none px-4 md:px-7 py-3 md:py-4 flex items-center justify-between">
        {/* Top Blur Mask for Dynamic Header Frosting */}
        <div className="absolute inset-0 bottom-[-16px] pointer-events-none -z-10 overflow-hidden">
          <div 
            className="absolute inset-0" 
            style={{
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>
        
        {/* 1. SHAIDS Platform Logo (Left side) */}
        <Link 
          href="/" 
          className="pointer-events-auto flex items-center gap-3 hover:opacity-90 transition-opacity group"
          aria-label="SHAIDS Platform Home"
        >
          {/* SHAIDS Official Logo Emblem with subtle glow */}
          <div className="relative w-8 h-8 md:w-9 md:h-9 flex items-center justify-center shrink-0">
            <div className="absolute inset-0 bg-[#e63022]/20 rounded-full blur-sm group-hover:bg-[#e63022]/40 transition-colors" />
            <Image
              src="/images/shaids-logo.png"
              alt="SHAIDS Emblem"
              width={36}
              height={36}
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_8px_rgba(230,48,34,0.4)]"
              priority
            />
          </div>

          {/* Wordmark Text */}
          <div className="flex flex-col">
            <span 
              className="font-black text-xl md:text-2xl tracking-tight transition-colors duration-300 leading-none"
              style={{
                fontFamily: `'Archivo', sans-serif`,
                color: isLightMode ? "#000000" : "#ffffff"
              }}
            >
              SHAIDS
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#e63022] uppercase font-bold mt-0.5">
              ACPCE AI & DS
            </span>
          </div>
        </Link>

        {/* 2. Menu Navbar Block (Desktop) */}
        <nav className="menu hidden lg:flex items-center gap-[3px] pointer-events-auto">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className="ui-button secondary allow-parent-hover"
              >
                <div className={`content btn-secondary ${themeClass}`}>
                  <div className="btn-content">
                    <span className="flex items-center justify-center gap-1.5">
                      {active && <span className="w-1.5 h-1.5 bg-[#e63022] rounded-[1px] inline-block shrink-0" />}
                      <span>{item.name}</span>
                    </span>
                    <span className="flex items-center justify-center gap-1.5">
                      {active && <span className="w-1.5 h-1.5 bg-[#e63022] rounded-[1px] inline-block shrink-0" />}
                      <span>{item.name}</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Academic Session Pill: 2026-27 */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-none ml-1 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22d6c8] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-white/80 font-bold">
              2026-27
            </span>
          </div>

          {/* Integrated ACPCE College Portal Button */}
          <a
            href="https://acpce.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="ui-button primary allow-parent-hover has-icon ml-1"
          >
            <div className="content btn-primary theme-dark">
              <div className="btn-content">
                <span>ACPCE PORTAL</span>
                <span>ACPCE PORTAL</span>
              </div>
            </div>
            <div className="icon btn-accent">
              <div className="btn-icon-roll">
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </nav>

        {/* 3. Mobile Hamburger Button */}
        <div className="lg:hidden pointer-events-auto flex items-center gap-2">
          {/* Mobile Academic Session indicator */}
          <div className="flex items-center gap-1 px-2 py-0.5 bg-white/5 border border-white/10 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22d6c8] animate-pulse" />
            <span className="text-[9px] font-mono tracking-wider text-white/80 font-bold">
              2026-27
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[998] bg-black/95 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-[2px] uppercase text-[#e63022] font-bold mb-2">
              DEPARTMENT NAVIGATION
            </span>
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-xl font-bold tracking-tight py-2 border-b border-white/10 flex items-center justify-between ${
                    active ? "text-[#e63022]" : "text-white/85"
                  }`}
                >
                  <span>{item.name}</span>
                  {active && <span className="w-2 h-2 bg-[#e63022]" />}
                </Link>
              );
            })}
            <a
              href="https://acpce.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-between py-3 px-4 bg-[#e63022] text-white font-mono text-xs font-bold tracking-wider uppercase"
            >
              <span>ACPCE COLLEGE PORTAL</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-white/40 font-mono text-[10px] uppercase">
            <span>SHAIDS 2026-27</span>
            <span>ACPCE NAVI MUMBAI</span>
          </div>
        </div>
      )}
    </>
  );
}
