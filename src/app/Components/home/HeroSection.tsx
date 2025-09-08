"use client";
import React, { useEffect, useState } from "react";

const heroSlides = [
  {
    heading: "Join the Community",
    subtext: "Collaborate with peers in forums, events, and workshops.",
    images: ["/Home/Herosection/community.png"],
  },
  {
    heading: "Discover Courses",
    subtext: "Learn new skills and earn certifications to advance your career.",
    images: ["/Home/Herosection/courses.png"],
  },
  {
    heading: "Explore Internships",
    subtext: "Gain real-world experience through our internship programs.",
    images: ["/Home/Herosection/Intenship.png"],
  },
  {
    heading: "Discover Opportunities",
    subtext: "Learn, Grow, and Transform Your Future with INNOVYASA.",
    images: ["/Home/Herosection/opportunity.png"],
  },
];

// This part remains the same
const columnDiamonds = [
  { top: "0%", size: 110, rotate: -50, z: 1 },
  { top: "26%", size: 80, rotate: -50, z: 2 },
  { top: "44%", size: 130, rotate: -50, z: 3 },
  { top: "74%", size: 70, rotate: -50, z: 4 },
  { top: "92%", size: 100, rotate: -50, z: 5 },
];

const DiamondColumn = ({ diamonds, rightOffset }: { diamonds: any[]; rightOffset: number; }) => (
  <div
    className="pointer-events-none absolute top-0 h-full w-[60px]"
    style={{ right: `${rightOffset}%`, zIndex: 1 }}
  >
    {diamonds.map((d, idx) => (
      <div
        key={idx}
        className="absolute rounded-[18px] shadow-md"
        style={{
          top: d.top,
          right: 10,
          width: d.size,
          height: d.size,
          background: "linear-gradient(135deg, #FF7D03 0%, #FFFFFF 100%)",
          transform: "rotate(-50deg)",
          zIndex: d.z,
          boxShadow: "0 4px 24px rgba(35,44,76,0.06)",
        }}
      />
    ))}
  </div>
);

const randomSelect = (arr: any[]) => arr.filter(() => Math.random() > 0.5);

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leftDiamonds, setLeftDiamonds] = useState<typeof columnDiamonds>([]);
  const [middleDiamonds, setMiddleDiamonds] = useState<typeof columnDiamonds>([]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setLeftDiamonds(randomSelect(columnDiamonds));
    setMiddleDiamonds(randomSelect(columnDiamonds));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = (currentSlide + 1) % heroSlides.length;
      handleSlideChange(newIndex);
    }, 4300);
    return () => clearInterval(timer);
  }, [currentSlide]);

  useEffect(() => {
    setLeftDiamonds(randomSelect(columnDiamonds));
    setMiddleDiamonds(randomSelect(columnDiamonds));
  }, []);

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#113045] to-[#093449]">
      {/* --- RESPONSIVE DIAMONDS --- */}
      {/* Hide the two randomized columns on smaller screens to reduce clutter */}
      <div className="hidden md:block">
        <DiamondColumn diamonds={leftDiamonds} rightOffset={30} />
        <DiamondColumn diamonds={middleDiamonds} rightOffset={15} />
      </div>
      <DiamondColumn diamonds={columnDiamonds} rightOffset={0} />

      {/* --- RESPONSIVE CAROUSEL CONTAINER --- */}
      {/* The container is now taller on mobile to accommodate the stacked layout */}
      <div className="w-full max-w-[1100px] z-10 relative h-[600px] md:h-[520px]">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            // --- RESPONSIVE SLIDE LAYOUT ---
            // On mobile, it's a flex column. On medium screens and up, it becomes a simple block for absolute positioning to take over.
            className="absolute inset-0 flex flex-col md:block transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentSlide === idx ? 1 : 0,
              zIndex: currentSlide === idx ? 10 : 0,
            }}
          >
            {/* Left Section (Text) */}
            <div
              className="relative w-full text-center mt-14 md:mt-4 px-4 pt-12 md:absolute md:top-1/2 md:left-0 md:w-1/2 md:-translate-y-1/2 md:pr-8 md:text-left md:pt-0"
              style={{ zIndex: 20 }}
            >
              <h1 className="text-3xl font-extrabold mb-4 leading-tight text-white md:text-[2.7rem]">
                {slide.heading}
              </h1>
              {slide.subtext && (
                <p className="text-base mb-5 text-white">{slide.subtext}</p>
              )}
            </div>

            {/* Right Section (Image) */}
            <div
              className="relative w-full h-full flex justify-center items-end md:absolute md:bottom-0 md:right-0 md:w-1/2"
              style={{ zIndex: 10 }}
            >
              {slide.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Section visual"
                  className="w-auto object-contain h-full max-h-[300px] md:max-h-full" // Constrain height on mobile
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;