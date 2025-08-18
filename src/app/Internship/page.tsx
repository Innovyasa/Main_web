import React from "react";
import Visual from "../Components/internvisual";
import InternCard from "../Components/interncard"
import Image from "next/image";

const images = [
  '/interns/one.png',
  '/interns/two.png',
  '/interns/three.png',
  '/interns/four.png',
  '/interns/five.png'
];

const Internship: React.FC = () => {
  return (
    // The <main> tag is now in layout.tsx, so we can use a <div> or fragment here.
    <div className="flex justify-start flex-col">
        <div className="container mx-auto text-center bg-blue-300 w-full h-auto">
          <p className="text-lg text-black font-bold p-4">
            We Shape Careers and Empower the <br />
            Next Generation of Innovators
          </p>

          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden py-6">
            <div className="flex animate-marquee whitespace-nowrap gap-6">
              {images.concat(images).map((src, index) => (
                <div
                  key={index}
                  className="w-[340px] h-[280px] flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-95"
                >
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    width={240}
                    height={180}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <h1 className="font-bold mx-auto text-2xl md:text-3xl text-black p-5 md:ml-15 items-start">Why Choose Innovyasa For Your Internship</h1>
        <div className="flex flex-col md:flex-row mx-auto md:items-start gap-10 px-6 w-full max-w-7xl">
          {/* Visual on the left */}
          {/* Visual on top in mobile, left in desktop */}
          <div className="w-full mx-auto md:w-[50%]">
            <Visual />
          </div>

          {/* Text below in mobile, right in desktop */}
          <div className="w-full md:w-[50%] text-left md:pt-4">
            <p className="text-2xl text-blue-500 font-large font-bold text-center">Real-World Experience</p>
            <p className="text-xl text-black text-center font-bold">Work on live projects with industry experts</p><br />
            <p>
              At Innovyasa, we believe in learning by doing. Our internship program offers a perfect blend of mentorship, innovation, and real-world challenges to help you grow and succeed.
            </p><br />
            <ul className="space-y-4">
              {[
                'Work on live projects',
                'Learn from industry experts',
                'Get hands-on experience with the latest tools and technologies',
                'Build a strong network and enhance your career prospects',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Image src="/interns/interns1/arrowbullet.svg" alt="bullet" width={16} height={16} className="w-4 h-4 mt-1" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <br />
        <h1 className="text-center text-xl md:text-3xl font-bold p-2 md:p-4">Step-by-Step guide to your internship journey</h1><br />
        <p className="text-center text-xl px-4 md:px-20 p-2" >Wondering how to get started with our internship program? We’ve designed a seamless and structured process to ensure you have a smooth and enriching experience.</p>
        <div className="relative grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-y-10 md:gap-x-40 px-10 py-5 place-items-center mx-auto text-center">
          <div className="w-[160px] h-[160px] bg-linear-[25deg,white_20%,skyblue_90%] flex flex-col items-center justify-start rounded-xl shadow-lg">
            <h2 className="p-2 font-bold">Stage 1</h2>
            <p className="text-sm p-2">Enroll & Choose Your Path</p>
            <Image
            src={'interns/interns2/step1.svg'}
            width={50}
            height={50}
            alt="Internship image"
            className=""
             />
          </div>
          <div className="w-[160px] h-[160px] bg-linear-[25deg,white_20%,skyblue_90%] shadow-lg flex flex-col items-center justify-start rounded-xl">
            <h2 className="p-2 font-bold">Stage 2</h2>
            <p className="text-sm p-4">Structured Learning</p>
            <Image
            src={'interns/interns2/step2.svg'}
            width={50}
            height={50}
            alt="Internship image"
            className=""
             />
          </div>
          <div className="w-[160px] h-[160px] bg-linear-[25deg,white_20%,skyblue_90%] shadow-lg flex flex-col items-center justify-start rounded-xl">
            <h2 className="p-2 font-bold">Stage 3</h2>
            <p className="text-sm p-2">Project - Based Training</p>
            <Image
            src={'interns/interns2/step3.svg'}
            width={50}
            height={50}
            alt="Internship image"
            className=""
             />
          </div>
          <div className="w-[160px] h-[160px] bg-linear-[25deg,white_20%,skyblue_90%] shadow-lg flex flex-col items-center justify-start rounded-xl">
            <h2 className="p-2 font-bold">Stage 4</h2>
            <p className="text-sm p-2">Mentorship & Feedback</p>
            <Image
            src={'interns/interns2/step4.svg'}
            width={50}
            height={50}
            alt="Internship image"
            className=""
             />
          </div>
          <div className="w-[160px] h-[160px] bg-linear-[25deg,white_20%,skyblue_90%] shadow-lg flex flex-col items-center justify-start rounded-xl">
            <h2 className="p-2 font-bold">Stage 5</h2>
            <p className="text-sm p-2">Internship Completion & Certification</p>
            <Image
            src={'interns/interns2/step5.svg'}
            width={50}
            height={50}
            alt="Internship image"
            className=""
             />
          </div>
          <div className="w-[160px] h-[160px] bg-linear-[25deg,white_20%,skyblue_90%] shadow-lg flex flex-col items-center justify-start rounded-xl">
            <h2 className="p-2 font-bold">Stage 6</h2>
            <p className="text-sm p-2">Lifetime Access & Career Support</p>
            <Image
            src={'interns/interns2/step6.svg'}
            width={50}
            height={50}
            alt="Internship image"
            className=""
             />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center my-15 md:gap-2 lg:gap-4 h-auto mx-10 md:20 lg:mx-30 bg-blue-200 rounded-ss-xl rounded-se-[40px] rounded-ee-xl rounded-es-[40px] shadow-xl/30">
              <div className="w-full lg:w-[60%] px-6">
                <h1 className="font-bold text-black text-xl md:text-2xl md:pt-3">Innovyasa Internship Your Gateway to a Successful Career!</h1><br />
                <p className="text-black text-xl md:text-2xl">Join 1000+ Successful Interns</p><br />
                <p className="text-black text-md">At Innovyasa, we have empowered 1000+ students with hands-on experience, 
                  real-world projects, and career-ready skills. Our internships are designed to bridge the gap between academic learning and industry demands, making you job-ready from day one!</p><br />
                <p className="font-bold text-black text-lg md:text-xl">Who Can Apply?</p><br />
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Image src="/interns/interns3/bullet1.svg" alt="Bullet" width={16} height={16} className="w-4 h-4 mt-1"/>
                    <span className="text-sm">Students & Freshers – Gain practical experience before entering the job market</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Image src="/interns/interns3/bullet2.svg" alt="Bullet" width={16} height={16} className="w-4 h-4 mt-1"/>
                    <span className="text-sm">Career Switchers – Upskill in the latest technologies and switch to your dream career.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Image src="/interns/interns3/bullet3.svg" alt="Bullet" width={16} height={16} className="w-4 h-4 mt-1"/>
                    <span className="text-sm">Tech Enthusiasts – Learn, build, and showcase your projects to top recruiters.</span>
                  </li>                                    
                </ul><br />
                <p className="text-md font-bold md:pb-3">Apply now and be part of Innovyasa’s growing success story!</p>
              </div>
              <div className="w-full lg:w-[40%]">
                <div className="relative mx-auto m-5 bg-white w-60 h-40 md:w-100 md:h-80 rounded-lg ">
                  <Image
                    src={'/interns/interns3/dotted1.svg'}
                    alt="Internship image"
                    width={80}
                    height={80}
                    className="absolute top-7 left-15 md:top-20 md:left-20 md:w-[150px] md:h-[150px]"
                  />
                  <Image
                    src={'/interns/interns3/dotted2.svg'}
                    alt="Internship image"
                    width={80}
                    height={80}
                    className="absolute bottom-8 right-8 md:bottom-15 md:right-15 md:w-[150px] md:h-[150px]"
                  /> 
                  <Image
                    src={'/interns/interns3/image2.svg'}
                    alt="Internship image"
                    width={100}
                    height={100}
                    className="absolute top-3 right-5 md:top-5 md:right-10 md:w-[200px] md:h-[200px]"
                  />                   
                  <Image
                    src={'/interns/interns3/image1.svg'}
                    alt="Internship image"
                    width={130}
                    height={130}
                    className="absolute bottom-4 left-6 md:bottom-5 md:right-25 md:w-[250px] md:h-[250px]"
                  />
                                                    
                </div>
              </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center space-y-6">
              <div>
                <p className="text-4xl font-bold p-2"><span> Apply Now & kickstart Your </span><br /> <span> Career with Innovyasa Internships</span></p><br />
                <p className="text-xl">Get hands-on experience, work on real projects, and enhance your skills with expert mentorship. <br /> Join our internship program and take the first step toward a successful career!</p>
              </div>
              <div>
                <InternCard />
              </div>
        </div>
    </div>
  );
};

export default Internship;
