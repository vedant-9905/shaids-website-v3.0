import HeroV3Section from "@/components/HeroV3Section";
import FestsBentoSection from "@/components/FestsBentoSection";
import CapstonesSection from "@/components/CapstonesSection";
import LeadershipAndStatsSection from "@/components/LeadershipAndStatsSection";
import FaqAndCtaSection from "@/components/FaqAndCtaSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#000000] text-white selection:bg-[#ffe600] selection:text-black">
      {/* 1. Master Hero Section (Pitch Black, 3D Candy Spaghetti Tubes, Chalk Doodles, Floating Glass Cards) */}
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
