import HeroV3Section from "@/components/HeroV3Section";
import FestsBentoSection from "@/components/FestsBentoSection";
import CapstonesSection from "@/components/CapstonesSection";
import LeadershipAndStatsSection from "@/components/LeadershipAndStatsSection";
import FaqAndCtaSection from "@/components/FaqAndCtaSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#0038ff] text-white selection:bg-[#ccff00] selection:text-black">
      {/* 1. Master Hero Section (Electric Blue, Neon Lime Doodles, Floating Tilted Glass Cards, Rounded White Shelf) */}
      <HeroV3Section />

      {/* 2. Flagship Fests Bento Grid (Vectors 2026, Kurukshetra, Rhythms) */}
      <FestsBentoSection />

      {/* 3. Student Innovation & Capstones Showcase (MAEG Autonomous Rover, SafeSight AI, etc.) */}
      <CapstonesSection />

      {/* 4. Department Highlights, Statistics & Leadership */}
      <LeadershipAndStatsSection />

      {/* 5. Student FAQ & High-Energy Call to Action */}
      <FaqAndCtaSection />
    </div>
  );
}
