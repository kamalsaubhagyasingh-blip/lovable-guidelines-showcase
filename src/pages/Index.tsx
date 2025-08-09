import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GuidelinesSection from "@/components/GuidelinesSection";
import PackagesSection from "@/components/PackagesSection";
import ReadyToComplySection from "@/components/ReadyToComplySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <GuidelinesSection />
      <PackagesSection />
      <ReadyToComplySection />
    </div>
  );
};

export default Index;
