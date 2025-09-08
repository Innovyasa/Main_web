import React from "react";
import HeroSection from "./Components/home/HeroSection";
import WhyInnovyasa from "./Components/home/WhyInnovyasa";
import VoiceOfSuccess from "./Components/home/VoiceOfSuccess";

const Homepage: React.FC = () => {
  return (
    
    <main className="bg-white">
      <HeroSection />
      <WhyInnovyasa />
      <VoiceOfSuccess />
    </main>
  );
};

export default Homepage;
