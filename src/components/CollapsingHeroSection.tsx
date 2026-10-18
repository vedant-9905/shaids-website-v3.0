"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import RandomSplitText from "./RandomSplitText";
import HeroImageCarousel from "./HeroImageCarousel";
import GeodesicVectorBackground from "./GeodesicVectorBackground";

function subscribeWindowResize(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getWindowHeightSnapshot() {
  return window.innerHeight;
}

function getWindowHeightServerSnapshot() {
  return 800;
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

  // Silky smooth easeOutCubic helper function for organic fluid deceleration
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  // Smooth, gradual 1:1 Scroll Transforms across [0, 1.0] with organic deceleration:
  const cardWidth = useTransform(scrollYProgress, [0, 1.0], ["100%", "32%"], { ease: easeOutCubic });
  const cardHeight = useTransform(scrollYProgress, [0, 1.0], [`${winHeight}px`, "560px"], { ease: easeOutCubic });
  const cardMarginTop = useTransform(scrollYProgress, [0, 1.0], ["0px", "59px"], { ease: easeOutCubic });
  const cardMarginBottom = useTransform(scrollYProgress, [0, 1.0], ["0px", "0px"]);

  // 1. Initial Hero Content gently dissolves across [0, 0.28]
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.28], [0, -30], { ease: easeOutCubic });
  const heroTextVisibility = useTransform(scrollYProgress, (v) => v >= 0.28 ? "hidden" : "visible");
  const heroTextDisplay = useTransform(scrollYProgress, (v) => v >= 0.30 ? "none" : "flex");

  // Light background content smoothly rises and locks right as the card docks
  const lightContentOpacity = useTransform(scrollYProgress, [0.10, 0.55, 1.0], [0, 1, 1]);
  const lightContentY = useTransform(scrollYProgress, [0.10, 1.0], [140, 0], { ease: easeOutCubic });

  // Stately sequential horizontal right-slide keyframes (smoothly gliding into place by 0.96)
  const card1X = useTransform(scrollYProgress, [0.18, 0.72, 1.0], [360, 0, 0], { ease: easeOutCubic });
  const card2X = useTransform(scrollYProgress, [0.28, 0.84, 1.0], [440, 0, 0], { ease: easeOutCubic });
  const card3X = useTransform(scrollYProgress, [0.38, 0.96, 1.0], [520, 0, 0], { ease: easeOutCubic });

  const card1Opacity = useTransform(scrollYProgress, [0.18, 0.50, 1.0], [0, 1, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.28, 0.62, 1.0], [0, 1, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0.38, 0.76, 1.0], [0, 1, 1]);

  // 2. Collapsed Card Dashboard Stats & Carousel fade in smoothly across [0.45, 0.92]
  const collapsedContentOpacity = useTransform(scrollYProgress, [0, 0.45, 0.92, 1.0], [0, 0, 1, 1]);
  const collapsedContentDisplay = useTransform(scrollYProgress, (v) => v >= 0.42 ? "flex" : "none");

  return (
    <section ref={containerRef} className="relative w-full" style={{ height: "400vh" }}>
      <motion.div
        className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center"
        style={{
          background: `
            radial-gradient(ellipse 90% 50% at 20% 0%, rgba(185, 212, 238, 0.75) 0%, transparent 60%),
            radial-gradient(ellipse 80% 50% at 85% 15%, rgba(195, 220, 244, 0.6) 0%, transparent 55%),
            linear-gradient(180deg, #cadbe9 0%, #dbe6f2 20%, #eaf1f7 45%, #eaf1f7 100%)
          `
        }}
      >

        {/* Light Theme Background Content (Slides up simultaneously from below and stays at top edge) */}
        <motion.div
          style={{ opacity: lightContentOpacity, y: lightContentY }}
          className="absolute inset-0 flex items-center justify-center w-full h-full px-4 md:px-7 pointer-events-auto overflow-hidden"
        >
          {/* Master 3-Column Container: Outer Pinned to Hero Margins, Columns Extended Inwards */}
          <motion.div
            style={{ marginTop: cardMarginTop }}
            className="w-full h-[560px] flex justify-between gap-6 md:gap-8 relative px-0"
          >

            {/* Column 1: Pioneering Productivity (Left - Extended Inwards to 440px) */}
            <div className="flex-1 max-w-[440px] h-[560px] flex flex-col justify-between">
              {/* Top Baseline: Accent Pin + Title */}
              <div>
                <div className="w-[6px] h-[6px] bg-[#0e76ff] mb-4" />
                <div className="select-none">
                  <h2
                    className="text-[#0a0a0a] font-sans"
                    style={{
                      fontFamily: `'Archivo', sans-serif`,
                      fontSize: "clamp(44px, 5.2vw, 76px)",
                      fontWeight: 400,
                      letterSpacing: "-2.8px",
                      lineHeight: "0.93"
                    }}
                  >
                    <RandomSplitText text="Pioneering:" initialDelay={0.05} scrollYProgress={scrollYProgress} triggerThreshold={0.06} />
                  </h2>
                  <div
                    className="text-[#0a0a0a] font-sans mt-2"
                    style={{
                      fontFamily: `'Archivo', sans-serif`,
                      fontSize: "clamp(26px, 3.2vw, 46px)",
                      fontWeight: 400,
                      letterSpacing: "-1.6px",
                      lineHeight: "1.05"
                    }}
                  >
                    <RandomSplitText text="AI Research &" initialDelay={0.18} scrollYProgress={scrollYProgress} triggerThreshold={0.06} />
                    <br />
                    <RandomSplitText text="Data Science" initialDelay={0.3} scrollYProgress={scrollYProgress} triggerThreshold={0.06} />
                  </div>
                </div>
              </div>

              {/* Bottom Baseline: Description Paragraph (Aligned to exact 560px bottom) */}
              <div className="pb-0 mb-0">
                <p className="text-[14.5px] text-[#1c1c1c] font-normal leading-[1.48] max-w-[390px] font-sans tracking-tight m-0">
                  Built by students, powered by late-night code sessions, department hackathons, and pure curiosity. SHAIDS is the official student body of the AI & Data Science Department at ACPCE — driving hands-on workshops, peer mentorship, coding competitions, and collaborative projects where enthusiasts build and level up together.
                </p>
              </div>
            </div>

            {/* Column 2 Spacer (Holds Middle Hero Box Slot - 32% Width) */}
            <div className="w-[32%] shrink-0 h-[560px] relative pointer-events-none" />

            {/* Column 3: Feature Cards 01, 02, 03 (Right - Extended Inwards to 440px) */}
            <div className="flex-1 max-w-[440px] h-[560px] flex flex-col justify-between">

              {/* Card 01 (Top Baseline - Sequential Right-Slide Entrance) */}
              <motion.div style={{ x: card1X, opacity: card1Opacity }} className="h-[178px] relative group p-5 bg-[#dce6f0]/60 backdrop-blur-md border-none flex flex-col justify-between rounded-none">
                <div className="flex items-center justify-between z-10">
                  <span className="bg-[#383838] text-white px-2 py-0.5 text-[11px] font-mono font-bold tracking-widest flex items-center gap-1.5 select-none">
                    <span className="w-1.5 h-1.5 bg-white inline-block" />
                    01
                  </span>
                </div>
                <div className="z-10 mt-auto">
                  <h3 className="text-[19px] font-bold tracking-tight text-[#0a0a0a] font-sans leading-tight select-none">
                    Community Driven
                  </h3>
                  <p className="text-[13px] text-[#262626] font-normal leading-[1.38] font-sans mt-1.5 tracking-tight">
                    Built by students, for students. We foster a collaborative environment where knowledge is shared freely.
                  </p>
                </div>
              </motion.div>

              {/* Card 02 (Middle Baseline - Sequential Right-Slide Entrance) */}
              <motion.div style={{ x: card2X, opacity: card2Opacity }} className="h-[178px] relative group p-5 bg-[#dce6f0]/60 backdrop-blur-md border-none flex flex-col justify-between rounded-none">
                <div className="flex items-center justify-between z-10">
                  <span className="bg-[#383838] text-white px-2 py-0.5 text-[11px] font-mono font-bold tracking-widest flex items-center gap-1.5 select-none">
                    <span className="w-1.5 h-1.5 bg-white inline-block" />
                    02
                  </span>
                </div>
                <div className="z-10 mt-auto">
                  <h3 className="text-[19px] font-bold tracking-tight text-[#0a0a0a] font-sans leading-tight select-none">
                    Innovation First
                  </h3>
                  <p className="text-[13px] text-[#262626] font-normal leading-[1.38] font-sans mt-1.5 tracking-tight">
                    From Generative AI to Big Data, we explore the cutting edge of technology through hands-on projects.
                  </p>
                </div>
              </motion.div>

              {/* Card 03 (Bottom Baseline - Sequential Right-Slide Entrance) */}
              <motion.div style={{ x: card3X, opacity: card3Opacity }} className="h-[178px] relative group p-5 bg-[#dce6f0]/60 backdrop-blur-md border-none flex flex-col justify-between rounded-none">
                <div className="flex items-center justify-between z-10">
                  <span className="bg-[#383838] text-white px-2 py-0.5 text-[11px] font-mono font-bold tracking-widest flex items-center gap-1.5 select-none">
                    <span className="w-1.5 h-1.5 bg-white inline-block" />
                    03
                  </span>
                </div>
                <div className="z-10 mt-auto">
                  <h3 className="text-[19px] font-bold tracking-tight text-[#0a0a0a] font-sans leading-tight select-none">
                    Excellence
                  </h3>
                  <p className="text-[13px] text-[#262626] font-normal leading-[1.38] font-sans mt-1.5 tracking-tight">
                    Participate in seminars, webinars, workshops, and competitions to hone your skills and showcase your talent.
                  </p>
                </div>
              </motion.div>

            </div>

          </motion.div>
        </motion.div>

        {/* The Collapsing Hero Card */}
        <motion.div
          id="hero-collapse-card"
          style={{
            width: cardWidth,
            height: cardHeight,
            marginTop: cardMarginTop,
            marginBottom: cardMarginBottom,
            background: `
              radial-gradient(ellipse 130% 90% at 50% 50%, rgba(8, 66, 147, 0.35) 0%, transparent 70%),
              linear-gradient(180deg, 
                #000000ff 0%, 
                #051a38 25%, 
                #0a4084 52%, 
                #3175c4 78%, 
                #95bdeaff 100%
              )
            `
          }}
          className="has-pin has-pin--top-left has-pin--bottom-right has-pin__light absolute z-20 flex flex-col items-center justify-center overflow-hidden border-none shadow-none"
        >
          {/* Kinetic Wave Overlay Image */}
          <div className="absolute inset-0 opacity-60 pointer-events-none z-0 mix-blend-screen">
            <Image
              src="/images/heroOverlay_homepage.avif"
              alt="Kinetic Background Overlay"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Initial Hero Content (Enforced visibility: hidden and display: none when scroll >= 0.25) */}
          <motion.div
            style={{ opacity: heroTextOpacity, y: heroTextY, visibility: heroTextVisibility, display: heroTextDisplay }}
            className="absolute inset-0 flex flex-col justify-between px-4 md:px-7 pt-20 md:pt-24 pb-6 w-full z-20 pointer-events-none"
          >
            {/* Mesmerizing Geodesic Sphere Constellation Cluster */}
            <GeodesicVectorBackground />
            {/* Middle Main Header & CTA Buttons */}
            <div className="title-wrapper flex flex-col items-start max-w-[620px]">
              <h1
                className="text-[#ffffff] pointer-events-auto select-none"
                style={{
                  fontFamily: `'Archivo', sans-serif`,
                  fontSize: "clamp(54px, 7.6vw, 92px)",
                  fontWeight: 400,
                  letterSpacing: "-3.0px",
                  lineHeight: "0.95"
                }}
              >
                <RandomSplitText text="Innovating" initialDelay={0.1} />
                <br />
                <RandomSplitText text="Intelligence" initialDelay={0.28} />
              </h1>

              {/* SHAIDS Info Statement */}
              <p className="text-[17.5px] font-normal text-[#f3f3f3]/90 leading-[1.42] font-sans mt-6 mb-2 max-w-[540px] pointer-events-auto tracking-tight">
                The official student community of <strong className="font-semibold text-white">Department of Artificial Intelligence & Data Science at ACPCE</strong>. We are the bridge between academic theory and the cutting-edge reality of <strong className="font-semibold text-white">AI & Data Science</strong>.
              </p>

              {/* Stacked Action Buttons matching reference structure */}
              <div className="ctas flex flex-col items-start gap-1 mt-5 w-max pointer-events-auto">
                {/* Primary CTA */}
                <Link href="/events" className="ui-button primary allow-parent-hover has-icon">
                  <div className="content btn-primary theme-dark">
                    <div className="btn-content">
                      <span>EXPLORE EVENTS</span>
                      <span>EXPLORE EVENTS</span>
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
                </Link>

                {/* Secondary CTA */}
                <Link href="/about" className="ui-button secondary allow-parent-hover">
                  <div className="content btn-secondary theme-dark">
                    <div className="btn-content">
                      <span>SEE ABOUT</span>
                      <span>SEE ABOUT</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Bottom Section: Institution Badge | Department News */}
            <div className="w-full flex flex-col md:flex-row items-end justify-between gap-6 pointer-events-auto relative">
              <div className="mono-small flex items-center gap-3 text-[#94a3b8] z-10">
                <span className="text-[12px] font-medium tracking-wider text-[#f3f3f3]/90 font-mono font-bold">
                  DEPARTMENT OF AI & DS • ACPCE NAVI MUMBAI
                </span>
              </div>

              <Link
                href="/events"
                className="card-latest-press has-pin has-pin--light w-full md:w-80 group text-left relative z-10"
              >
                <div className="header">
                  <div className="eyebrow flex items-center gap-1.5 text-[12px] tracking-wider text-white">
                    <span>ANNUAL TECH FEST</span>
                  </div>
                  <div className="date text-[12px] tracking-wider text-[#f3f3f3]/60">AUG 10, 2026</div>
                </div>
                <div className="body mt-4">
                  <div className="summary text-[15px] font-medium text-white leading-snug">
                    VECTORS 2026: National AI Hackathon & Tech Fest Announced
                  </div>
                  <div className="ui-button primary allow-parent-hover has-icon cta shrink-0">
                    <div className="icon theme-dark btn-secondary group-hover:bg-[#0e76ff] transition-colors">
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
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Authentic Collapsed Card Dashboard Stats & Chart Overlay (Matches Screenshot 1:1) */}
          <motion.div
            style={{ opacity: collapsedContentOpacity, display: collapsedContentDisplay }}
            className="absolute inset-0 z-30 flex flex-col justify-between px-5 md:px-6 pt-5 md:pt-6 pb-3.5 md:pb-4 text-white w-full h-full pointer-events-auto"
          >
            {/* Top-Left Bright Blue Square Pin */}
            <div className="absolute top-0 left-0 w-[6px] h-[6px] bg-[#0e76ff] z-40" />

            {/* Top Stats Section */}
            <div className="flex flex-col gap-3.5 pt-2">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] font-mono tracking-[1.04px] text-[#94a3b8] uppercase font-medium">
                  TOTAL ENROLLED STUDENTS
                </span>
                <span className="text-2xl md:text-3xl font-bold tracking-tight text-white font-sans">
                  480+
                </span>
              </div>

              <div className="w-full border-b border-dashed border-white/20 my-0.5" />

              <div className="flex items-baseline justify-between">
                <span className="text-[11px] font-mono tracking-[1.04px] text-[#94a3b8] uppercase font-medium">
                  FACULTY & RESEARCHERS
                </span>
                <span className="text-xl md:text-2xl font-bold tracking-tight text-white font-sans">
                  24+ STAFF
                </span>
              </div>
            </div>

            {/* Middle Section: Morphing Image Carousel Placeholder (Cycles every 3s) */}
            <HeroImageCarousel />

            {/* Bottom Joined Dual-Cell CTA Bar Matching Reference 1:1 */}
            <Link
              href="/about"
              className="w-full flex items-center gap-[2px] group text-white pointer-events-auto select-none mb-[7px]"
            >
              {/* Left Cell: Main Action Text */}
              <div className="flex-1 h-[34px] bg-[#617283]/85 group-hover:bg-[#617283] transition-colors backdrop-blur-md flex items-center justify-center px-4">
                <span className="text-[11.5px] font-mono tracking-[0.8px] font-semibold text-white uppercase">
                  MORE IN ABOUT
                </span>
              </div>

              {/* Right Cell: Arrow Button Box */}
              <div className="w-[34px] h-[34px] bg-[#617283]/90 group-hover:bg-[#0e76ff] transition-colors backdrop-blur-md flex items-center justify-center shrink-0">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
}
