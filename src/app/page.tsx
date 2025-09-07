import React from "react";
import HeroSection from "./Components/home/HeroSection";
import WhyChoose from "./Components/home/WhyChoose";

const Homepage: React.FC = () => {
  return (
    
    <main className="bg-white">
      <HeroSection />
      <WhyChoose />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Innovyasa</h1>
        <p className="text-lg text-center text-gray-600">
          Explore our services, internships, courses, and more.
        </p>
      </div>
    </main>
  );
};

export default Homepage;
