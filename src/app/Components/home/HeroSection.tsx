"use client";
import React, { useEffect, useState } from "react";
// The 'react-responsive-carousel' import has been removed.

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
  // --- MANUAL CAROUSEL LOGIC ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leftDiamonds, setLeftDiamonds] = useState<typeof columnDiamonds>([]);
  const [middleDiamonds, setMiddleDiamonds] = useState<typeof columnDiamonds>([]);

  // Function to change diamonds when the slide changes
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setLeftDiamonds(randomSelect(columnDiamonds));
    setMiddleDiamonds(randomSelect(columnDiamonds));
  };

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = (currentSlide + 1) % heroSlides.length;
      handleSlideChange(newIndex);
    }, 4300);
    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [currentSlide]);
  
  // Initial diamond generation
  useEffect(() => {
    setLeftDiamonds(randomSelect(columnDiamonds));
    setMiddleDiamonds(randomSelect(columnDiamonds));
  }, []);


  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#113045] to-[#093449]">
      {/* Diamond background remains the same */}
      <DiamondColumn diamonds={leftDiamonds} rightOffset={30} />
      <DiamondColumn diamonds={middleDiamonds} rightOffset={15} />
      <DiamondColumn diamonds={columnDiamonds} rightOffset={0} />

      {/* --- MANUAL CAROUSEL CONTAINER --- */}
      {/* The height of this container is explicitly controlled by the content inside. */}
      <div className="w-full max-w-[1100px] z-10 relative h-[400px] md:h-[520px]">
        {heroSlides.map((slide, idx) => (
          // We use opacity and z-index to create a fading transition between slides.
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentSlide === idx ? 1 : 0,
              zIndex: currentSlide === idx ? 10 : 0,
            }}
          >
            {/* Left Section (Text) */}
            <div
              className="absolute top-1/2 left-0 w-1/2 -translate-y-1/2 pr-8 text-white text-left"
              style={{ zIndex: 20 }}
            >
              <h1 className="text-[2.7rem] font-extrabold mb-4 leading-tight">
                {slide.heading}
              </h1>
              {slide.subtext && (
                <p className="text-base mb-5">{slide.subtext}</p>
              )}
            </div>

            {/* Right Section (Image) */}
            <div
              className="absolute bottom-0 right-0 w-1/2 h-full flex justify-center items-end"
              style={{ zIndex: 10 }}
            >
              {slide.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Section visual"
                  className="w-auto object-contain h-full"
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