import { HeroSection } from "@/components/home/hero-section";
import { PillarsSection } from "@/components/home/pillars-section";
import { PaySemesterTeaser } from "@/components/home/pay-semester-teaser";
import { OpportunitiesTeaser } from "@/components/home/opportunities-teaser";
import { SupportTeaser } from "@/components/home/support-teaser";
import { NewsletterSection } from "@/components/home/newsletter-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <PaySemesterTeaser />
      <OpportunitiesTeaser />
      <SupportTeaser />
      <NewsletterSection />
    </>
  );
}
