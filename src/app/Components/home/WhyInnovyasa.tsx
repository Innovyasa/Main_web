// app/Components/Home/WhyInnovyasa.tsx
import React from 'react';
import Image from 'next/image';

// Data for the three feature cards to keep the code clean and easy to update
const featureCards = [
  {
    title: 'Internships & Courses',
    points: [
      'Explore internships across various domains with real-world projects.',
      'Access certified courses designed by industry experts.',
      'Track your progress through a dedicated dashboard.',
      'Secure job placements and career opportunities.',
    ],
    imageUrl: '/Home/Why_Innovyasa/Intern&courses.png', // Dummy image
  },
  {
    title: 'Devsol - Digital Solutions & Academic Projects',
    points: [
      'Tailored digital transformation services for startups & enterprises.',
      'Academic project guidance for students pursuing final-year projects.',
      'Direct client collaboration with meeting scheduling & project tracking tools.',
    ],
    imageUrl: '/Home/Why_Innovyasa/Devsol.png', // Dummy image
  },
  {
    title: 'Community (For Networking & Knowledge Sharing)',
    points: [
      'Participate in forums, discussions, and knowledge-sharing sessions.',
      'Engage in hackathons, coding challenges, and tech events.',
      'Collaborate on open-source projects & industry case studies.',
      'Stay updated with blogs, webinars, and expert Q&A sessions.',
    ],
    imageUrl: '/Home/Why_Innovyasa/Community.png', // Dummy image
  },
];

const WhyInnovyasa: React.FC = () => {
  return (
    <section className="bg-white py-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* --- Top Introduction Section --- */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-4">
          {/* Text Content */}
          <div className="md:w-3/5">
            <h2 className="text-4xl font-bold text-[#113045] mb-4">Why Innovyasa?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At INNOVYASA, we believe in empowering individuals and businesses through cutting-edge IT services and Ed-tech solutions. Our platform offers a seamless learning and development experience, bringing together students, professionals, and clients under one ecosystem.
            </p>
          </div>

          {/* Image with SVG Background */}
          <div className="md:w-2/5 relative flex justify-center items-center">
            {/* The SVG background is intended to be behind the image */}
            <Image
              src="/vectors/whyinnovyasa.svg" // Make sure this path is correct
              alt="Decorative background"
              width={320}
              height={320}
              className="absolute z-0" // Absolute positioning for background
            />
            <div className="relative -left-14 z-10"> {/* Ensure image is above SVG */}
              <Image
                src="/Home/Why_Innovyasa/whyinnovyasa.png" // Placeholder for the actual image
                alt="Why Innovyasa"
                width={350}
                height={350}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* --- Feature Cards Section --- */}
        <div className="space-y-8 ">
          {featureCards.map((card, index) => {
            const isReversed = index % 2 !== 0; // Check for even/odd index for staggering

            return (
              <div
                key={index}
                className="relative bg-[#113045] text-white rounded-2xl p-8 overflow-hidden"
              >
                {/* Decorative Ribbons/Circles - Scattered across the card */}
                {/* Adjust positions (top, left, right, bottom) and sizes (w, h) as needed */}
                <div className="absolute w-40 h-40 border-4 border-[#FF7D03] rounded-full opacity-60 -top-10 -left-10"></div>
                <div className="absolute w-56 h-56 border-3 border-[#FF7D03] rounded-full opacity-60 -bottom-20 -right-20"></div>
                <div className="absolute w-60 h-60 border-10 border-[#FF7D03] rounded-full opacity-65 top-2/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute w-48 h-48 border-8 border-[#FF7D03] rounded-full opacity-60 -top-16 right-2"></div>
                <div className="absolute w-60 h-60 border-8 border-[#FF7D03] rounded-full opacity-65 -bottom-20 left-1/2 transform -translate-x-1/2"></div>


                <div
                  className={`relative z-10 flex flex-col items-center gap-8 ${
                    isReversed ? 'md:flex-row-reverse' : 'md:flex-row' // Staggered layout
                  }`}
                >
                  {/* Card Text Content */}
                  <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
                    <ul className="space-y-2 list-disc list-inside text-gray-300">
                      {card.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Image */}
                  <div className="md:w-1/2 flex justify-center items-center h-64">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      width={320}
                      height={320}
                      className="bottom-0 object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyInnovyasa;