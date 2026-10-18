import CollapsingHeroSection from "@/components/CollapsingHeroSection";
import FeatureNarrativeSection from "@/components/FeatureNarrativeSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-black text-white">
      {/* 1. Hero Section: Collapses and Disassembles on Scroll */}
      <CollapsingHeroSection />

      {/* 2. Feature Narrative Section: Continuous Gradient Shift & Sticky 3D Pillar */}
      <FeatureNarrativeSection />
    </div>
  );
}
