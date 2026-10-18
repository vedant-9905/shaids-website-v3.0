"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "ABOUT", href: "/about" },
  { name: "EVENTS & FESTS", href: "/events" },
  { name: "RESOURCES", href: "/resources" },
  { name: "FACULTY & TEAM", href: "/team" },
];

export default function Header() {
  const [isLightMode, setIsLightMode] = useState(false);
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
      setIsLightMode(true);
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

  const themeClass = isLightMode ? "theme-light" : "theme-dark";

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] pointer-events-none px-4 md:px-7 py-4 md:py-5 flex items-center justify-between">
      {/* Top Blur Mask for Dynamic Header Frosting (Balanced Parity) */}
      <div className="absolute inset-0 bottom-[-16px] pointer-events-none -z-10 overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>
      
      {/* 1. SHAIDS Platform Logo (Left side) */}
      <Link 
        href="/" 
        className="pointer-events-auto flex items-center gap-2.5 hover:opacity-90 transition-opacity"
        aria-label="SHAIDS Platform Home"
      >
        {/* SHAIDS Official Logo Emblem */}
        <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
          <Image
            src="/images/shaids-logo.png"
            alt="SHAIDS Emblem"
            width={32}
            height={32}
            className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(14,118,255,0.4)]"
            priority
          />
        </div>

        {/* Wordmark Text */}
        <div className="flex flex-col">
          <span 
            className="font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300 leading-none"
            style={{
              fontFamily: `'Archivo', sans-serif`,
              color: isLightMode ? "#000000" : "#ffffff"
            }}
          >
            SHAIDS
          </span>
          <span className="text-[9px] font-mono tracking-widest text-[#0e76ff] uppercase font-bold">
            ACPCE AI & DS
          </span>
        </div>
      </Link>

      {/* 2. Menu Navbar Block (Right side: ABOUT | EVENTS & FESTS | RESOURCES | FACULTY & TEAM | ACPCE WEBSITE | ->) */}
      <nav className="menu hidden md:flex items-center gap-[2px] pointer-events-auto">
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
                    {active && <span className="w-1.5 h-1.5 bg-[#0e76ff] rounded-[1px] inline-block shrink-0" />}
                    <span>{item.name}</span>
                  </span>
                  <span className="flex items-center justify-center gap-1.5">
                    {active && <span className="w-1.5 h-1.5 bg-[#0e76ff] rounded-[1px] inline-block shrink-0" />}
                    <span>{item.name}</span>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}

        {/* Integrated ACPCE WEBSITE + Arrow Cell Button */}
        <a
          href="https://acpce.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="ui-button primary allow-parent-hover has-icon"
        >
          <div className="content btn-primary theme-dark">
            <div className="btn-content">
              <span>ACPCE WEBSITE</span>
              <span>ACPCE WEBSITE</span>
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

    </header>
  );
}
