// app/Components/Home/VoiceOfSuccess.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';

// Custom hook to get window size (remains the same)
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};


// 2. Dummy data updated to remove 'imageUrl'
const testimonials = [
  {
    id: 1,
    name: 'Rahul Verma',
    timestamp: '3 months ago',
    testimonial: 'The best part about Innovyasa is the community! From hackathons to networking events, I connected with professionals. These connections helped me secure my first job!',
  },
  {
    id: 2,
    name: 'Sneha Latha',
    timestamp: '2 months ago',
    testimonial: 'The courses are incredibly detailed and up-to-date. The flexible learning options allowed me to study at my own pace while working full-time.',
  },
  {
    id: 3,
    name: 'Ananya Reddy',
    timestamp: '3 weeks ago',
    testimonial: 'I got an internship through their platform. The real-world project experience was invaluable for my career.',
  },
    {
    id: 4,
    name: 'Harry Potter',
    timestamp: '1 month ago',
    testimonial: 'The Devsol team built our startup\'s website. Their professionalism and technical skill were top-notch. Highly recommended!',
  },
  {
    id: 5,
    name: 'Karthik Naidu',
    timestamp: '1 week ago',
    testimonial: 'Participating in the hackathon was an amazing experience. I learned so much and connected with so many talented people.',
  },
  {
    id: 6,
    name: 'Amith Sharma',
    timestamp: '2 months ago',
    testimonial: 'The mentorship I received during my course was fantastic. The instructors are true experts in their field.',
  },
  {
    id: 7,
    name: 'Sara Udnurka',
    timestamp: '2 months ago',
    testimonial: 'The community forums are a great place to ask questions and get help from peers and mentors. It feels like a real team.',
  },
  {
    id: 8,
    name: 'Priya Mehta',
    timestamp: '3 weeks ago',
    testimonial: 'I love the weekly webinars. They cover a wide range of topics and always feature interesting guest speakers.',
  },
  {
    id: 9,
    name: 'Rahul .S',
    timestamp: '2 months ago',
    testimonial: 'The project guidance for my final year project was a lifesaver. I couldn\'t have done it without their expert help.',
  },
    {
    id: 10,
    name: 'Varshitha Sharma',
    timestamp: '4 weeks ago',
    testimonial: 'The career guidance and job placement support are excellent. They really care about helping students succeed.',
  },
  {
    id: 11,
    name: 'Vikram Goud.T',
    timestamp: '2 weeks ago',
    testimonial: 'A fantastic platform for both learning and professional development. I\'ve already recommended it to several friends.',
  },
];

const VoiceOfSuccess: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number | null>(null);
  const { width } = useWindowSize();

  const getNumColumns = () => {
    if (width >= 1024) return 5;
    if (width >= 768) return 4;
    if (width >= 640) return 3;
    return 2;
  };

  const numColumns = getNumColumns();
  const totalItems = testimonials.length;
  const lastRowStartIndex = totalItems - (totalItems % numColumns || numColumns);

  return (
    <section className="bg-gray-100 py-6 px-4 relative overflow-hidden">
        <div className="absolute w-40 h-40 border-4 border-[#FF7D03] rounded-full -top-10 -left-10 opacity-70 animate-pulse-border" style={{ animationDelay: '0s' }}></div>
        <div className="absolute w-56 h-56 border-4 border-[#FF7D03] rounded-full -bottom-16 -right-16 opacity-50 animate-pulse-border" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-28 h-28 border-4 border-[#FF7D03] rounded-full top-1/3 left-1/4 opacity-40 animate-pulse-border" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-48 h-48 border-4 border-[#FF7D03] rounded-full -top-20 right-1/4 opacity-60 animate-pulse-border" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute w-36 h-36 border-4 border-[#FF7D03] rounded-full bottom-1/4 left-1/2 opacity-30 animate-pulse-border" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <h2 className="text-4xl font-bold text-[#113045] mb-6">Voice of Success</h2>
        
        <div className="relative bg-[#113044] rounded-2xl p-8 md:p-12 min-h-[500px] overflow-hidden">
            
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-16 gap-x-4 py-8 relative z-10">
            {testimonials.map((person, index) => {
              const isInLastRow = index >= lastRowStartIndex;

              return (
                <div
                  key={person.id}
                  className="relative flex flex-col items-center text-center group"
                  onMouseEnter={() => setActiveTestimonial(person.id)}
                  onMouseLeave={() => setActiveTestimonial(null)}
                >
                  <div className="relative">
                    {/* 3. Replaced <Image> with the FaUserCircle icon */}
                    <FaUserCircle className="text-7xl text-gray-500 group-hover:text-orange-400 transition-all duration-300 transform group-hover:scale-110" />
                  </div>

                  <div className="mt-3">
                    <p className="font-semibold text-white text-sm">{person.name}</p>
                    <p className="text-xs text-gray-400">{person.timestamp}</p>
                  </div>

                  {activeTestimonial === person.id && (
                    <div className={`absolute left-1/2 -translate-x-1/2 w-72 bg-gray-800 text-white p-4 rounded-lg shadow-xl z-30 text-left ${
                      isInLastRow ? 'bottom-full mb-4' : 'top-full mt-4'
                    }`}>
                      <div className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent ${
                        isInLastRow
                          ? 'top-full border-t-8 border-t-gray-800'
                          : 'bottom-full border-b-8 border-b-gray-800'
                      }`}></div>
                      <p className="font-bold text-lg">{person.name}</p>
                      <p className="text-sm text-gray-300 my-2">{person.testimonial}</p>
                      <p className="text-yellow-400 text-lg">★★★★☆</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceOfSuccess;