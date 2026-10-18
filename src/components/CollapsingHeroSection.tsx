"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import RandomSplitText from "./RandomSplitText";
import HeroImageCarousel from "./HeroImageCarousel";

function subscribeWindowResize(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}
function getWindowHeightSnapshot() { return window.innerHeight; }
function getWindowHeightServerSnapshot() { return 800; }

/* ============================================================
   Squiggle SVG Components — hand-drawn organic noodle shapes
============================================================ */

function SquiggleLeft() {
  return (
    <svg width="220" height="520" viewBox="0 0 220 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none" aria-hidden>
      {/* Red thick noodle */}
      <path d="M40 10 Q80 60 30 110 Q-20 160 50 210 Q120 260 20 310 Q-40 360 40 420 Q100 470 30 510" stroke="#e63022" strokeWidth="22" strokeLinecap="round" fill="none"/>
      <path d="M40 10 Q80 60 30 110 Q-20 160 50 210 Q120 260 20 310 Q-40 360 40 420 Q100 470 30 510" stroke="#ff6a5a" strokeWidth="10" strokeLinecap="round" fill="none"/>
      {/* Blue noodle */}
      <path d="M90 30 Q130 90 70 150 Q10 210 80 270 Q150 330 60 390 Q-10 450 70 500" stroke="#1a55cc" strokeWidth="22" strokeLinecap="round" fill="none"/>
      <path d="M90 30 Q130 90 70 150 Q10 210 80 270 Q150 330 60 390 Q-10 450 70 500" stroke="#5a8cff" strokeWidth="10" strokeLinecap="round" fill="none"/>
      {/* Light blue thin */}
      <path d="M140 20 Q170 80 120 130 Q60 190 140 240 Q200 280 140 340 Q80 400 160 460" stroke="#5aa4e8" strokeWidth="16" strokeLinecap="round" fill="none"/>
      <path d="M140 20 Q170 80 120 130 Q60 190 140 240 Q200 280 140 340 Q80 400 160 460" stroke="#a0d0ff" strokeWidth="8" strokeLinecap="round" fill="none"/>
      {/* Green noodle */}
      <path d="M180 60 Q210 120 160 180 Q100 250 180 300 Q240 340 170 400 Q110 450 200 490" stroke="#2a7a52" strokeWidth="18" strokeLinecap="round" fill="none"/>
      <path d="M180 60 Q210 120 160 180 Q100 250 180 300 Q240 340 170 400 Q110 450 200 490" stroke="#4fc080" strokeWidth="9" strokeLinecap="round" fill="none"/>
      {/* Pink noodle */}
      <path d="M60 80 Q100 140 40 200 Q-20 270 80 320 Q160 360 60 430" stroke="#f06090" strokeWidth="20" strokeLinecap="round" fill="none"/>
      <path d="M60 80 Q100 140 40 200 Q-20 270 80 320 Q160 360 60 430" stroke="#ffaac4" strokeWidth="10" strokeLinecap="round" fill="none"/>
      {/* Cyan small */}
      <path d="M110 100 Q150 160 90 220 Q30 290 120 350" stroke="#22d6c8" strokeWidth="14" strokeLinecap="round" fill="none"/>
      {/* Yellow small noodle */}
      <path d="M170 120 Q210 190 150 260 Q90 330 180 380" stroke="#f0d020" strokeWidth="16" strokeLinecap="round" fill="none"/>
      {/* Purple accent */}
      <path d="M30 200 Q80 260 20 320 Q-30 380 60 440" stroke="#6040cc" strokeWidth="14" strokeLinecap="round" fill="none"/>
      <path d="M30 200 Q80 260 20 320 Q-30 380 60 440" stroke="#9a7aff" strokeWidth="7" strokeLinecap="round" fill="none"/>
      {/* Teal */}
      <path d="M200 200 Q240 270 180 340 Q120 410 210 460" stroke="#22d6c8" strokeWidth="18" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function SquiggleRight() {
  return (
    <svg width="220" height="520" viewBox="0 0 220 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none" aria-hidden>
      {/* Cyan big noodle */}
      <path d="M180 10 Q140 60 190 110 Q240 160 170 210 Q100 260 200 310 Q260 360 180 420 Q120 470 190 510" stroke="#22d6c8" strokeWidth="22" strokeLinecap="round" fill="none"/>
      <path d="M180 10 Q140 60 190 110 Q240 160 170 210 Q100 260 200 310 Q260 360 180 420 Q120 470 190 510" stroke="#a0f5f0" strokeWidth="10" strokeLinecap="round" fill="none"/>
      {/* Purple noodle */}
      <path d="M130 30 Q90 90 150 150 Q210 210 140 270 Q70 330 160 390 Q230 450 150 500" stroke="#6040cc" strokeWidth="22" strokeLinecap="round" fill="none"/>
      <path d="M130 30 Q90 90 150 150 Q210 210 140 270 Q70 330 160 390 Q230 450 150 500" stroke="#a080ff" strokeWidth="10" strokeLinecap="round" fill="none"/>
      {/* Pink */}
      <path d="M80 20 Q50 80 100 130 Q160 190 80 240 Q20 280 80 340 Q140 400 60 460" stroke="#f06090" strokeWidth="18" strokeLinecap="round" fill="none"/>
      {/* Red small */}
      <path d="M40 60 Q10 120 60 180 Q120 250 40 300 Q-20 340 50 400" stroke="#e63022" strokeWidth="16" strokeLinecap="round" fill="none"/>
      <path d="M40 60 Q10 120 60 180 Q120 250 40 300 Q-20 340 50 400" stroke="#ff8877" strokeWidth="8" strokeLinecap="round" fill="none"/>
      {/* Blue */}
      <path d="M170 80 Q140 140 200 200 Q240 260 180 320 Q120 380 200 430" stroke="#1a55cc" strokeWidth="20" strokeLinecap="round" fill="none"/>
      {/* Yellow */}
      <path d="M60 120 Q30 190 90 260 Q150 330 60 400" stroke="#f0d020" strokeWidth="18" strokeLinecap="round" fill="none"/>
      {/* Green */}
      <path d="M100 100 Q70 170 130 240 Q190 310 100 380 Q40 440 130 490" stroke="#2a7a52" strokeWidth="16" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

/* Hand-drawn computer illustration SVG */
function ComputerIllustration() {
  return (
    <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none" aria-hidden>
      <rect x="8" y="6" width="80" height="54" rx="3" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
      <line x1="25" y1="18" x2="55" y2="40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="45" y1="16" x2="65" y2="38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="8" y1="60" x2="88" y2="60" stroke="white" strokeWidth="2"/>
      <path d="M38 60 L33 72 L53 72" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="96" y="12" width="20" height="14" rx="2" stroke="white" strokeWidth="2"/>
      <circle cx="104" cy="78" r="7" stroke="white" strokeWidth="2"/>
      <rect x="88" y="72" width="26" height="12" rx="2" stroke="white" strokeWidth="2"/>
    </svg>
  );
}

/* Hand-drawn laptop illustration SVG */
function LaptopIllustration() {
  return (
    <svg width="110" height="80" viewBox="0 0 110 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none" aria-hidden>
      <path d="M15 10 L85 10 L95 55 L5 55 Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
      <line x1="28" y1="22" x2="60" y2="46" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="50" y1="20" x2="72" y2="43" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M2 56 L108 56 L104 68 L6 68 Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
      <rect x="45" y="60" width="20" height="4" rx="2" stroke="white" strokeWidth="1.5"/>
    </svg>
  );
}

/* Badge row (logos) */
function BadgeRow() {
  return (
    <div className="flex items-center justify-center gap-6 mb-8">
      {/* ACM placeholder badge */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
        <span className="text-white text-[9px] font-bold tracking-wider">ACM</span>
      </div>
      {/* SHAIDS logo */}
      <div className="relative w-10 h-10">
        <Image src="/images/shaids-logo.png" alt="SHAIDS" fill className="object-contain" priority />
      </div>
      {/* ACPCE logo */}
      <div className="relative w-10 h-10">
        <Image src="/images/acpce-logo.png" alt="ACPCE" fill className="object-contain" priority />
      </div>
    </div>
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

  /* Hero content fade out */
  const heroTextOpacity    = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const heroTextY          = useTransform(scrollYProgress, [0, 0.28], [0, -30], { ease: easeOutCubic });
  const heroTextVisibility = useTransform(scrollYProgress, (v) => v >= 0.28 ? "hidden" : "visible");
  const heroTextDisplay    = useTransform(scrollYProgress, (v) => v >= 0.30 ? "none" : "flex");

  /* Squiggle parallax — they drift differently */
  const squiggleLeftX  = useTransform(scrollYProgress, [0, 1], [0, -40], { ease: easeOutCubic });
  const squiggleRightX = useTransform(scrollYProgress, [0, 1], [0, 40],  { ease: easeOutCubic });
  const squiggleY      = useTransform(scrollYProgress, [0, 1], [0, 60],  { ease: easeOutCubic });

  /* Sidebar content (revealed when collapsed) */
  const lightContentOpacity = useTransform(scrollYProgress, [0.10, 0.55, 1.0], [0, 1, 1]);
  const lightContentY       = useTransform(scrollYProgress, [0.10, 1.0], [140, 0], { ease: easeOutCubic });

  /* Feature cards stagger */
  const card1X = useTransform(scrollYProgress, [0.18, 0.72, 1.0], [360, 0, 0], { ease: easeOutCubic });
  const card2X = useTransform(scrollYProgress, [0.28, 0.84, 1.0], [440, 0, 0], { ease: easeOutCubic });
  const card3X = useTransform(scrollYProgress, [0.38, 0.96, 1.0], [520, 0, 0], { ease: easeOutCubic });
  const card1Opacity = useTransform(scrollYProgress, [0.18, 0.50, 1.0], [0, 1, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.28, 0.62, 1.0], [0, 1, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0.38, 0.76, 1.0], [0, 1, 1]);

  /* Collapsed card dashboard content */
  const collapsedContentOpacity = useTransform(scrollYProgress, [0, 0.45, 0.92, 1.0], [0, 0, 1, 1]);
  const collapsedContentDisplay = useTransform(scrollYProgress, (v) => v >= 0.42 ? "flex" : "none");

  return (
    <section ref={containerRef} className="relative w-full bg-black" style={{ height: "400vh" }}>
      <motion.div
        className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black"
      >
        {/* ── Sidebar Content (revealed on collapse) ── */}
        <motion.div
          style={{ opacity: lightContentOpacity, y: lightContentY }}
          className="absolute inset-0 flex items-center justify-center w-full h-full px-4 md:px-7 pointer-events-auto overflow-hidden"
        >
          <motion.div
            style={{ marginTop: cardMarginTop }}
            className="w-full h-[560px] flex justify-between gap-6 md:gap-8 relative"
          >
            {/* Left Column */}
            <div className="flex-1 max-w-[440px] h-[560px] flex flex-col justify-between">
              <div>
                <div className="w-[5px] h-[5px] bg-[#e63022] mb-4" />
                <div className="select-none">
                  <h2
                    className="text-white"
                    style={{
                      fontFamily: `'Archivo', sans-serif`,
                      fontSize: "clamp(40px, 4.8vw, 72px)",
                      fontWeight: 900,
                      letterSpacing: "-2.5px",
                      lineHeight: "0.9"
                    }}
                  >
                    <RandomSplitText text="Pioneering:" initialDelay={0.05} scrollYProgress={scrollYProgress} triggerThreshold={0.06} />
                  </h2>
                  <div
                    className="text-white/80 mt-2"
                    style={{
                      fontFamily: `'Archivo', sans-serif`,
                      fontSize: "clamp(24px, 3vw, 44px)",
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
              <div>
                <p className="text-[14px] text-white/60 font-normal leading-[1.55] max-w-[390px] tracking-tight">
                  Built by students, powered by late-night code sessions, department hackathons, and pure curiosity. SHAIDS is the official student body of the AI & Data Science Department at ACPCE.
                </p>
              </div>
            </div>

            {/* Middle spacer */}
            <div className="w-[32%] shrink-0 h-[560px] relative pointer-events-none" />

            {/* Right Column — Feature Cards */}
            <div className="flex-1 max-w-[440px] h-[560px] flex flex-col justify-between">
              {[
                { x: card1X, opacity: card1Opacity, num: "01", title: "Community Driven", desc: "Built by students, for students. We foster a collaborative environment where knowledge is shared freely." },
                { x: card2X, opacity: card2Opacity, num: "02", title: "Innovation First", desc: "From Generative AI to Big Data, we explore the cutting edge of technology through hands-on projects." },
                { x: card3X, opacity: card3Opacity, num: "03", title: "Excellence", desc: "Participate in seminars, workshops, and competitions to hone your skills and showcase your talent." },
              ].map((card) => (
                <motion.div
                  key={card.num}
                  style={{ x: card.x, opacity: card.opacity }}
                  className="h-[178px] relative p-5 bg-white/5 backdrop-blur-md border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <span className="bg-[#e63022] text-white px-2 py-0.5 text-[10px] font-mono font-bold tracking-[1.5px] uppercase flex items-center gap-1.5 w-fit select-none">
                      <span className="w-1 h-1 bg-white inline-block" />
                      {card.num}
                    </span>
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

        {/* ── Squiggle Decorations (outside card, parallax on scroll) ── */}
        <motion.div
          style={{ x: squiggleLeftX, y: squiggleY }}
          className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-10 sq-float-a sq-delay-1"
          aria-hidden
        >
          <SquiggleLeft />
        </motion.div>
        <motion.div
          style={{ x: squiggleRightX, y: squiggleY }}
          className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-10 sq-float-b sq-delay-2"
          aria-hidden
        >
          <SquiggleRight />
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
          className="has-pin has-pin--top-left has-pin--bottom-right has-pin__red absolute z-20 flex flex-col items-center justify-center overflow-hidden border border-white/10"
        >
          {/* Subtle dot grid texture */}
          <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none z-0" />

          {/* ── Initial Hero Content ── */}
          <motion.div
            style={{ opacity: heroTextOpacity, y: heroTextY, visibility: heroTextVisibility, display: heroTextDisplay }}
            className="absolute inset-0 flex flex-col items-center justify-between px-4 md:px-10 pt-20 md:pt-24 pb-8 w-full z-20 pointer-events-none"
          >
            {/* Badge row at top */}
            <div className="w-full flex flex-col items-center pointer-events-auto">
              <BadgeRow />
            </div>

            {/* Giant SHAIDS wordmark — center */}
            <div className="flex flex-col items-center text-center pointer-events-auto select-none w-full">
              {/* Massive title */}
              <div
                className="text-white leading-none font-black tracking-tight w-full text-center"
                style={{
                  fontFamily: `'Archivo', sans-serif`,
                  fontSize: "clamp(80px, 18vw, 260px)",
                  fontWeight: 900,
                  letterSpacing: "-6px",
                  lineHeight: "0.84",
                }}
              >
                <RandomSplitText text="SHAIDS" initialDelay={0.05} />
              </div>

              {/* Academic year sub-line */}
              <div
                className="text-white/90 mt-2 tracking-wider font-black"
                style={{
                  fontFamily: `'Archivo', sans-serif`,
                  fontSize: "clamp(18px, 3.5vw, 52px)",
                  fontWeight: 900,
                  letterSpacing: "2px",
                }}
              >
                2026-27
              </div>

              {/* Thin descriptor */}
              <p className="mt-4 text-white/45 text-[13px] font-mono tracking-[2px] uppercase">
                Dept. of AI & Data Science · ACPCE Navi Mumbai
              </p>

              {/* CTA buttons */}
              <div className="flex items-center gap-2 mt-7 pointer-events-auto">
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

            {/* Bottom bar */}
            <div className="w-full flex items-end justify-between pointer-events-auto relative z-10">
              <div className="flex items-center gap-2">
                {/* Computer illustration */}
                <div className="sq-float-c sq-delay-3 opacity-80">
                  <ComputerIllustration />
                </div>
              </div>

              {/* Bottom right: latest press card */}
              <Link href="/events" className="card-latest-press has-pin has-pin__red w-full max-w-[280px] md:max-w-[320px] group text-left relative z-10">
                <div className="header">
                  <div className="eyebrow flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-[#e63022] inline-block" />
                    ANNUAL TECH FEST
                  </div>
                  <div className="date">AUG 10, 2026</div>
                </div>
                <div className="body mt-4">
                  <div className="summary">
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

          {/* ── Collapsed Dashboard Stats ── */}
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

        {/* Laptop illustration — floats outside card bottom right */}
        <motion.div
          style={{ opacity: heroTextOpacity }}
          className="absolute bottom-8 right-[36%] z-30 pointer-events-none sq-float-d sq-delay-4"
          aria-hidden
        >
          <div className="opacity-75">
            <LaptopIllustration />
          </div>
        </motion.div>
      </motion.div>
    </section>
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