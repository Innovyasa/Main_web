import React from "react";
import HeroSection from "./Components/home/HeroSection";
import WhyInnovyasa from "./Components/home/WhyInnovyasa";
import VoiceOfSuccess from "./Components/home/VoiceOfSuccess";
import Contact from "./Components/Contact";

const Homepage: React.FC = () => {
  return (
    
    <main className="bg-white">
      <HeroSection />
      <WhyInnovyasa />
      <VoiceOfSuccess />
      <Contact />
    </main>
  );
};

export default Homepage;
