import AskUs from "../components/AskUs";
import AudienceSection from "../components/AudienceSection";
import FAQSection from "../components/FAQSection";
import Hero from "../components/Hero";
import ModelIntelligence from "../components/ModelIntelligence";
import PlatformFeatures from "../components/PlatformFeatures";
import SourceNetwork from "../components/SourceNetwork";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-black">
     
      <Hero />
      <ModelIntelligence/>
      <PlatformFeatures/>
      <AskUs/>
      <SourceNetwork/>
      <AudienceSection/>

      <FAQSection/>
    </div>
  );
}