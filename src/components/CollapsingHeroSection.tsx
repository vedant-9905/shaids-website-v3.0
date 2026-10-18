"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import RandomSplitText from "./RandomSplitText";
import HeroImageCarousel from "./HeroImageCarousel";
import {
  AcmBadge,
  ShieldBadge,
  ShaidsSealBadge,
  DesktopPcIllustration,
  LaptopIllustration,
  TechMicroDoodles,
  NoodleClusterLeft,
  NoodleClusterRight,
} from "./Hero3DArt";

function subscribeWindowResize(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}
function getWindowHeightSnapshot() { return window.innerHeight; }
function getWindowHeightServerSnapshot() { return 800; }

/* ============================================================
   The 3-Badge Header Row (ACM Diamond, Radiant Shield, SHAIDS Seal)
   Matches the iconic emblem trio from the v3.0 banner
============================================================ */
function TopBadgeTrio() {
  return (
    <div className="flex items-center justify-center gap-5 md:gap-7 mb-3 md:mb-5 pointer-events-auto">
      {/* 1. ACM Diamond Chapter Badge */}
      <AcmBadge />
      {/* 2. Glowing Fiery Heraldic Shield with Star */}
      <ShieldBadge />
      {/* 3. Circular Department Seal */}
      <ShaidsSealBadge />
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function CollapsingHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const winHeight = useSyncExternalStore(
    subscribeWindowResize,
    getWindowHeightSnapshot,
    getWindowHeightServerSnapshot
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  /* Card collapse transforms */
  const cardWidth  = useTransform(scrollYProgress, [0, 1.0], ["100%", "32%"], { ease: easeOutCubic });
  const cardHeight = useTransform(scrollYProgress, [0, 1.0], [`${winHeight}px`, "560px"], { ease: easeOutCubic });
  const cardMarginTop = useTransform(scrollYProgress, [0, 1.0], ["0px", "59px"], { ease: easeOutCubic });

  /* Hero content fade out on scroll */
  const heroTextOpacity    = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const heroTextY          = useTransform(scrollYProgress, [0, 0.28], [0, -30], { ease: easeOutCubic });
  const heroTextVisibility = useTransform(scrollYProgress, (v) => v >= 0.28 ? "hidden" : "visible");
  const heroTextDisplay    = useTransform(scrollYProgress, (v) => v >= 0.30 ? "none" : "flex");

  /* Noodle parallax on scroll */
  const noodleLeftX  = useTransform(scrollYProgress, [0, 0.28], [0, -120], { ease: easeOutCubic });
  const noodleRightX = useTransform(scrollYProgress, [0, 0.28], [0, 120],  { ease: easeOutCubic });

  /* Sidebar content (revealed when collapsed) */
  const lightContentOpacity = useTransform(scrollYProgress, [0.12, 0.55, 1.0], [0, 1, 1]);
  const lightContentY       = useTransform(scrollYProgress, [0.12, 1.0], [120, 0], { ease: easeOutCubic });

  /* Feature cards stagger */
  const card1X = useTransform(scrollYProgress, [0.18, 0.72, 1.0], [360, 0, 0], { ease: easeOutCubic });
  const card2X = useTransform(scrollYProgress, [0.28, 0.84, 1.0], [440, 0, 0], { ease: easeOutCubic });
  const card3X = useTransform(scrollYProgress, [0.38, 0.96, 1.0], [520, 0, 0], { ease: easeOutCubic });
  const card1Opacity = useTransform(scrollYProgress, [0.18, 0.50, 1.0], [0, 1, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.28, 0.62, 1.0], [0, 1, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0.38, 0.76, 1.0], [0, 1, 1]);

  /* Collapsed card dashboard content (fades in as card shrinks) */
  const collapsedContentOpacity = useTransform(scrollYProgress, [0, 0.35, 0.75, 1.0], [0, 0, 1, 1]);
  const collapsedContentDisplay = useTransform(scrollYProgress, (v) => v >= 0.32 ? "flex" : "none");

  return (
    <section ref={containerRef} className="relative w-full bg-black" style={{ height: "400vh" }}>
      <motion.div
        className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#000000]"
      >
        {/* Subtle background ambient dot grid */}
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none z-0" />

        {/* ── Sidebar Content (revealed on collapse) ── */}
        <motion.div
          style={{ opacity: lightContentOpacity, y: lightContentY }}
          className="absolute inset-0 flex items-center justify-center w-full h-full px-4 md:px-7 pointer-events-auto overflow-hidden z-10"
        >
          <motion.div
            style={{ marginTop: cardMarginTop }}
            className="w-full h-[560px] flex justify-between gap-6 md:gap-8 relative"
          >
            {/* Left Column */}
            <div className="flex-1 max-w-[440px] h-[560px] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-[6px] h-[6px] bg-[#e63022]" />
                  <span className="text-[11px] font-mono tracking-[2px] uppercase text-[#e63022] font-bold">
                    ACPCE · AI & DATA SCIENCE
                  </span>
                </div>
                <div className="select-none">
                  <h2
                    className="text-white"
                    style={{
                      fontFamily: `'Archivo', sans-serif`,
                      fontSize: "clamp(38px, 4.6vw, 68px)",
                      fontWeight: 900,
                      letterSpacing: "-2.5px",
                      lineHeight: "0.9"
                    }}
                  >
                    <RandomSplitText text="Pioneering:" initialDelay={0.05} scrollYProgress={scrollYProgress} triggerThreshold={0.06} />
                  </h2>
                  <div
                    className="text-white/85 mt-2"
                    style={{
                      fontFamily: `'Archivo', sans-serif`,
                      fontSize: "clamp(24px, 3vw, 42px)",
                      fontWeight: 700,
                      letterSpacing: "-1.4px",
                      lineHeight: "1.05"
                    }}
                  >
                    <RandomSplitText text="AI Research &" initialDelay={0.18} scrollYProgress={scrollYProgress} triggerThreshold={0.06} />
                    <br />
                    <RandomSplitText text="Data Science" initialDelay={0.3} scrollYProgress={scrollYProgress} triggerThreshold={0.06} />
                  </div>
                </div>
              </div>

              {/* Middle Metric Chips */}
              <div className="flex flex-wrap gap-2 my-2">
                <span className="text-[10px] font-mono tracking-[1.2px] text-white/70 uppercase px-2.5 py-1 bg-white/5 border border-white/10">
                  NAAC A+ ACCREDITED
                </span>
                <span className="text-[10px] font-mono tracking-[1.2px] text-white/70 uppercase px-2.5 py-1 bg-white/5 border border-white/10">
                  120 ANNUAL INTAKE
                </span>
                <span className="text-[10px] font-mono tracking-[1.2px] text-white/70 uppercase px-2.5 py-1 bg-white/5 border border-white/10">
                  AUTONOMOUS LABS
                </span>
              </div>

              <div>
                <p className="text-[14px] text-white/60 font-normal leading-[1.55] max-w-[390px] tracking-tight">
                  Built by students, powered by late-night code sessions, department hackathons, and pure curiosity. SHAIDS is the official student body of the AI & Data Science Department at ACPCE.
                </p>
              </div>
            </div>

            {/* Middle spacer (where collapsed card sits) */}
            <div className="w-[32%] shrink-0 h-[560px] relative pointer-events-none" />

            {/* Right Column — Feature Cards */}
            <div className="flex-1 max-w-[440px] h-[560px] flex flex-col justify-between">
              {[
                { x: card1X, opacity: card1Opacity, num: "01", accent: "#e63022", title: "Community Driven", desc: "Built by students, for students. We foster a collaborative environment where knowledge is shared freely." },
                { x: card2X, opacity: card2Opacity, num: "02", accent: "#1a55cc", title: "Innovation First", desc: "From Generative AI to Big Data, we explore the cutting edge of technology through hands-on projects." },
                { x: card3X, opacity: card3Opacity, num: "03", accent: "#22d6c8", title: "Excellence", desc: "Participate in seminars, workshops, and competitions to hone your skills and showcase your talent." },
              ].map((card) => (
                <motion.div
                  key={card.num}
                  style={{ x: card.x, opacity: card.opacity }}
                  className="h-[178px] relative p-5 bg-white/5 backdrop-blur-md border border-white/10 flex flex-col justify-between group hover:bg-white/8 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-white px-2 py-0.5 text-[10px] font-mono font-bold tracking-[1.5px] uppercase flex items-center gap-1.5 w-fit select-none"
                      style={{ backgroundColor: card.accent }}
                    >
                      <span className="w-1 h-1 bg-white inline-block" />
                      {card.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: card.accent }} />
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-[18px] font-bold tracking-tight text-white leading-tight select-none">
                      {card.title}
                    </h3>
                    <p className="text-[12px] text-white/55 font-normal leading-[1.45] mt-1.5 tracking-tight">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── The Collapsing Hero Card ── */}
        <motion.div
          id="hero-collapse-card"
          style={{
            width: cardWidth,
            height: cardHeight,
            marginTop: cardMarginTop,
            backgroundColor: "#000000",
          }}
          className="has-pin has-pin--top-left has-pin--bottom-right has-pin__red absolute z-20 flex flex-col items-center justify-center overflow-hidden border border-white/12 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        >
          {/* Subtle dot texture inside card */}
          <div className="absolute inset-0 dot-grid opacity-80 pointer-events-none z-0" />

          {/* ── Initial Hero Content (Uncollapsed State) ── */}
          <motion.div
            style={{ opacity: heroTextOpacity, y: heroTextY, visibility: heroTextVisibility, display: heroTextDisplay }}
            className="absolute inset-0 flex flex-col items-center justify-between px-3 md:px-8 pt-18 md:pt-22 pb-6 md:pb-8 w-full h-full z-20 pointer-events-none overflow-hidden"
          >
            {/* ── 3D Noodle Wings Inside Hero Viewport (Left & Right) ── */}
            <motion.div
              style={{ x: noodleLeftX }}
              className="absolute -left-6 sm:left-0 md:left-2 top-1/2 -translate-y-1/2 pointer-events-none z-10 sq-float-a sq-delay-1"
              aria-hidden
            >
              <div className="scale-65 sm:scale-80 md:scale-95 lg:scale-100 origin-left">
                <NoodleClusterLeft />
              </div>
            </motion.div>

            <motion.div
              style={{ x: noodleRightX }}
              className="absolute -right-6 sm:right-0 md:right-2 top-1/2 -translate-y-1/2 pointer-events-none z-10 sq-float-b sq-delay-2"
              aria-hidden
            >
              <div className="scale-65 sm:scale-80 md:scale-95 lg:scale-100 origin-right">
                <NoodleClusterRight />
              </div>
            </motion.div>

            {/* Floating Micro Tech Doodles */}
            <TechMicroDoodles />

            {/* 1. Top: The Emblem Trio (ACM, Radiant Shield, SHAIDS Seal) */}
            <div className="w-full flex flex-col items-center pointer-events-auto relative z-20">
              <TopBadgeTrio />
            </div>

            {/* 2. Center: Giant SHAIDS Wordmark & 2026-27 Sub-Title + Hand-Drawn Sketches */}
            <div className="relative flex flex-col items-center text-center pointer-events-auto select-none w-full my-auto z-20 max-w-[1300px] px-2">
              {/* Massive SHAIDS Title */}
              <div
                className="text-white leading-none font-black tracking-tight w-full text-center"
                style={{
                  fontFamily: `'Archivo', sans-serif`,
                  fontSize: "clamp(72px, 16vw, 240px)",
                  fontWeight: 900,
                  letterSpacing: "-5px",
                  lineHeight: "0.82",
                }}
              >
                <RandomSplitText text="SHAIDS" initialDelay={0.05} />
              </div>

              {/* Academic Session Sub-Title "2026-27" */}
              <div
                className="text-white mt-1 md:mt-2 font-black tracking-wider text-center"
                style={{
                  fontFamily: `'Archivo', sans-serif`,
                  fontSize: "clamp(26px, 5.5vw, 84px)",
                  fontWeight: 900,
                  letterSpacing: "1px",
                  lineHeight: "0.95",
                }}
              >
                2026-27
              </div>

              {/* Hand-Drawn Desktop PC Illustration (Directly Under "SH") */}
              <div className="absolute left-[2%] sm:left-[6%] md:left-[10%] bottom-[-55px] sm:bottom-[-45px] md:bottom-[-35px] pointer-events-none sq-float-c sq-delay-3 hidden sm:block">
                <div className="scale-80 md:scale-100 origin-bottom-left opacity-90 hover:opacity-100 transition-opacity">
                  <DesktopPcIllustration />
                </div>
              </div>

              {/* Hand-Drawn Open Laptop Illustration (Directly Under "DS") */}
              <div className="absolute right-[2%] sm:right-[6%] md:right-[10%] bottom-[-50px] sm:bottom-[-40px] md:bottom-[-30px] pointer-events-none sq-float-d sq-delay-4 hidden sm:block">
                <div className="scale-80 md:scale-100 origin-bottom-right opacity-90 hover:opacity-100 transition-opacity">
                  <LaptopIllustration />
                </div>
              </div>

              {/* Department Descriptor */}
              <p className="mt-4 md:mt-6 text-white/60 text-[11px] md:text-[13px] font-mono tracking-[2px] uppercase max-w-[580px] px-4">
                Dept. of Artificial Intelligence & Data Science · ACPCE Navi Mumbai
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 mt-5 md:mt-7 pointer-events-auto">
                <Link href="/events" className="ui-button primary allow-parent-hover has-icon">
                  <div className="content btn-primary theme-dark">
                    <div className="btn-content">
                      <span>EXPLORE EVENTS</span>
                      <span>EXPLORE EVENTS</span>
                    </div>
                  </div>
                  <div className="icon btn-accent">
                    <div className="btn-icon-roll">
                      <span><ArrowIcon /></span>
                      <span><ArrowIcon /></span>
                    </div>
                  </div>
                </Link>
                <Link href="/about" className="ui-button secondary allow-parent-hover">
                  <div className="content btn-secondary theme-dark">
                    <div className="btn-content">
                      <span>ABOUT US</span>
                      <span>ABOUT US</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* 3. Bottom Bar: Status Ticker + Press Card */}
            <div className="w-full flex items-end justify-between pointer-events-auto relative z-20 px-2 md:px-6">
              {/* Left: Mobile-only mini doodle or status indicator */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-none mb-1">
                <span className="w-2 h-2 rounded-full bg-[#22d6c8] animate-pulse" />
                <span className="text-[10px] font-mono text-white/70 tracking-widest uppercase">
                  ACTIVE SESSION 2026-27
                </span>
              </div>

              {/* Center: Live Fest Ticker / Status */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-none mb-1">
                <span className="w-2 h-2 rounded-full bg-[#e63022] animate-pulse" />
                <span className="text-[10px] font-mono text-white/70 tracking-widest uppercase">
                  VECTORS 2026 LIVE · ADMISSIONS OPEN
                </span>
              </div>

              {/* Bottom Right: Latest Press / Event Card */}
              <Link href="/events" className="card-latest-press has-pin has-pin__red w-full sm:max-w-[280px] md:max-w-[320px] group text-left relative z-10">
                <div className="header">
                  <div className="eyebrow flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#e63022] inline-block" />
                    ANNUAL TECH FEST
                  </div>
                  <div className="date">AUG 2026</div>
                </div>
                <div className="body mt-3">
                  <div className="summary text-[13px] md:text-[14px]">
                    VECTORS 2026: National AI Hackathon & Tech Fest Announced
                  </div>
                  <div className="ui-button primary allow-parent-hover has-icon cta shrink-0">
                    <div className="icon theme-dark btn-secondary group-hover:bg-[#e63022] transition-colors">
                      <div className="btn-icon-roll">
                        <span><ArrowIcon /></span>
                        <span><ArrowIcon /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* ── Collapsed Dashboard Stats (Visible only when card collapses) ── */}
          <motion.div
            style={{ opacity: collapsedContentOpacity, display: collapsedContentDisplay }}
            className="absolute inset-0 z-30 flex flex-col justify-between px-5 md:px-6 pt-5 md:pt-6 pb-3.5 md:pb-4 text-white w-full h-full pointer-events-auto"
          >
            <div className="absolute top-0 left-0 w-[5px] h-[5px] bg-[#e63022] z-40" />

            {/* Top Stats */}
            <div className="flex flex-col gap-3.5 pt-2">
              <div className="flex items-baseline justify-between">
                <span className="text-[10px] font-mono tracking-[1.5px] text-white/50 uppercase font-medium">
                  TOTAL ENROLLED STUDENTS
                </span>
                <span className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                  480+
                </span>
              </div>
              <div className="w-full border-b border-dashed border-white/15 my-0.5" />
              <div className="flex items-baseline justify-between">
                <span className="text-[10px] font-mono tracking-[1.5px] text-white/50 uppercase font-medium">
                  FACULTY & RESEARCHERS
                </span>
                <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
                  24+ STAFF
                </span>
              </div>
            </div>

            {/* Image Carousel */}
            <HeroImageCarousel />

            {/* Bottom CTA */}
            <Link href="/about" className="w-full flex items-center gap-[2px] group text-white pointer-events-auto select-none mb-[7px]">
              <div className="flex-1 h-[34px] bg-white/10 group-hover:bg-white/18 transition-colors backdrop-blur-md flex items-center justify-center px-4">
                <span className="text-[10px] font-mono tracking-[1.2px] font-semibold text-white uppercase">
                  MORE IN ABOUT
                </span>
              </div>
              <div className="w-[34px] h-[34px] bg-white/10 group-hover:bg-[#e63022] transition-colors backdrop-blur-md flex items-center justify-center shrink-0">
                <ArrowIcon />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}