// app/Components/Home/WhyChoose.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Data for the "Why Choose Us" section
const features = [
  {
    titleFirstWord: 'Expert-Led',
    titleRest: 'Learning',
    description: 'Learn from top industry professionals and domain experts who bring real-world knowledge straight to you.',
    imageUrl: '/courses/why_choose/why1.jpeg',
  },
  {
    titleFirstWord: 'Flexible',
    titleRest: 'Learning Options',
    description: 'Choose between self-paced or live interactive sessions—learn anytime, anywhere at your convenience.',
    imageUrl: '/courses/why_choose/why2.png',
  },
  {
    titleFirstWord: 'Community',
    titleRest: '& Networking',
    description: 'Join a thriving community of learners, professionals, and mentors to collaborate, share insights, and grow together.',
    imageUrl: '/courses/why_choose/why3.png',
  },
];

const WhyChoose: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-[#113045] mb-16">
          Why Choose <span className="text-[#FF7D03]">INNOVYASA</span> Courses?
        </h2>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;

            const imageVariants = {
              hidden: { opacity: 0, x: isReversed ? -100 : 100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            } as const; // <-- FIX APPLIED HERE

            const boxVariants = {
              hidden: { opacity: 0, rotate: -90, scale: 0.5 },
              visible: {
                opacity: 1,
                rotate: 0,
                scale: 1,
                transition: { duration: 0.5, delay: 0.2 },
              },
            } as const; // <-- FIX APPLIED HERE
            
            const borderVariants = {
              hidden: { pathLength: 0 },
              visible: {
                pathLength: 1,
                transition: { duration: 1.5, ease: "easeInOut", delay: 0.4 },
              },
            } as const; // <-- FIX APPLIED HERE

            return (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  isReversed ? 'md:flex-row-reverse' : ''
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >
                {/* Text Content */}
                <div className="md:w-1/2">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="w-3 h-3 bg-[#FF7D03] rounded-full"></span>
                    <h3 className="text-3xl font-bold text-[#113045]">
                      <span className="text-[#FF7D03]">{feature.titleFirstWord}</span> {feature.titleRest}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Animated Image with Decorative Elements */}
                <div className="md:w-1/2 relative">
                  <motion.svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    style={{
                        transform: "translateX(1rem) translateY(1rem)",
                    }}
                  >
                    <motion.rect
                        x="0" y="0" width="100" height="100" rx="10"
                        stroke="#FF7D03"
                        strokeWidth="2"
                        fill="transparent"
                        variants={borderVariants}
                    />
                  </motion.svg>
                  
                  <motion.div
                    className="absolute -top-5 -left-5 w-20 h-20 bg-[#1C4F71] rounded-xl z-0"
                    variants={boxVariants}
                  ></motion.div>
                  
                  <motion.div
                    className="relative z-10 overflow-hidden rounded-2xl shadow-lg"
                    variants={imageVariants}
                  >
                    <Image
                      src={feature.imageUrl}
                      alt={feature.titleFirstWord}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;