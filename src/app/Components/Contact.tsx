// app/Components/Home/Contact.tsx
import React from 'react';
import Image from 'next/image';

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="relative bg-[#113045] text-white rounded-2xl shadow-lg overflow-hidden">
          {/* Decorative orange arc */}
          <div className="absolute w-96 h-96 border-[16px] border-[#FF7D03] rounded-full -top-24 -right-40 opacity-50 pointer-events-none hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* --- Left Section (Info & Visuals) --- */}
            <div className="relative p-8 md:p-12 flex flex-col justify-between min-h-[500px] md:min-h-[600px]">
              {/* Background vector */}
              <Image
                src="/vectors/bg_contact.svg"
                alt="Background"
                width={350}
                height={250}
                objectFit="cover"
                className="absolute inset-0 left-1/5 top-1/5 z-0 opacity-40"
              />

              {/* Decorative Circles */}
              <div className="absolute inset-0 z-0">
                <Image src="/vectors/circle_contact.svg" alt="circle" width={80} height={80} className="absolute top-10 left-10 opacity-60" />
                <Image src="/vectors/circle_contact.svg" alt="circle" width={40} height={40} className="absolute top-20 left-32 opacity-40" />
                <Image src="/vectors/circle_contact.svg" alt="circle" width={60} height={60} className="absolute top-32 left-12 opacity-80" />
                <Image src="/vectors/circle_contact.svg" alt="circle" width={30} height={30} className="absolute top-48 left-24 opacity-50" />
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex-grow flex items-center justify-center">
                  <Image
                    src="/Home/Why_Innovyasa/Community.png"
                    alt="Community"
                    width={250}
                    height={150}
                    objectFit="contain"
                  />
                </div>
                <p className="mt-4 text-lg text-gray-300">
                  Have any queries or need assistance? We're just a message away! Connect with us for quick support and expert guidance. Your learning success is our priority! Join us in shaping a smarter future—reach out today!
                </p>
              </div>
            </div>

            {/* --- Right Section (Contact Form) --- */}
            <div className="p-8 md:p-12 m-0 md:m-10 relative">
              {/* Glassmorphism Background */}
              <div className="absolute inset-0 md:inset-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"></div>

              {/* Form Content */}
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <form action="#" className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Enter Name" 
                      className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-[#FF7D03] transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Enter e-mail" 
                      className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-[#FF7D03] transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Enter phone number" 
                      className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-[#FF7D03] transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Enter Country" 
                      className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-[#FF7D03] transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Enter State" 
                      className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-[#FF7D03] transition-colors"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-[#FF7D03] text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;