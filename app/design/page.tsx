import { CTASection } from "@/components/sections/CTASection";
import { FeaturedWorks } from "@/components/sections/FeaturedWorks";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";

export default function HomePage() {
  return (
    <div className="noise-overlay min-h-screen relative">
      <HeroSection />
      <IntroSection />
      <FeaturedWorks />
      <CTASection />
    </div>
  );
}
