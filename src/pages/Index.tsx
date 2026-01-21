import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBadges } from "@/components/home/TrustBadges";
import { FurnitureTypes } from "@/components/home/FurnitureTypes";
import { HowItWorksPreview } from "@/components/home/HowItWorksPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustBadges />
      <FurnitureTypes />
      <HowItWorksPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;