import React from 'react';
import Image from 'next/image';

const InternVisual: React.FC = () => {
  return (
    <div className="relative mx-auto w-auto h-[230px] md:h-[500px]  ">
      {/* Background Design */}
      <div className="absolute flex gap-5 md:gap-10 md:px-4 md:py-6 -z-10">
        {/* Blue Rounded Box */}
        <div className="w-[200px] h-[200px] md:w-[380px] md:h-[350px] bg-blue-200 rounded-ss-xl rounded-ee-[60px] rounded-es-[54px] rounded-se-[54px]" />

        {/* Orange Box with Dots */}
        <div className="relative w-[80px] h-[220px] top-3">
          <div className="absolute top-2 flex gap-1">
            <div className="bg-orange-500 w-[5px] h-[5px] md:w-[10px] md:h-[10px] rounded-full" />
            <div className="bg-orange-500 w-[5px] h-[5px] md:w-[10px] md:h-[10px] rounded-full" />
            <div className="bg-orange-500 w-[5px] h-[5px] md:w-[10px] md:h-[10px] rounded-full" />
            <div className="bg-orange-500 w-[5px] h-[5px] md:w-[10px] md:h-[10px] rounded-full" />
          </div>
          <div className="absolute left-3 md:left-4 w-[50px] h-[90px] md:w-[105px] md:h-[170px] bg-orange-200 rounded-xl -z-10" />
        </div>
      </div>

      {/* Foreground Image */}
      <div className="absolute top-7 left-5 md:top-4 md:left-10">
        <Image
          src="/interns/interns1/image1.svg"
          alt="Internship image"
          width={250}
          height={180}
          className="md:w-[500px] md:h-[370px]"
        />
      </div>
      <div className='absolute top-13 left-15 md:top-43 md:left-43 -z-10'>
        <Image
        src={"/interns/interns1/dottedbg.svg"}
        alt='Internship Image'
        width={100}
        height={100}
        className='w-60 h-60 md:w-80 md:h-80'
        />
      </div>
      <div className="absolute top-25 left-28 md:top-55 md:left-60 w-35 h-35 md:w-50 md:h-50 rounded-full bg-blue-100 p-2 md:p-4">
        <Image
          src="/interns/interns1/image.svg"
          alt="Internship image"
          width={250}
          height={170}
          className="0verflow-hidden"
          />
        </div>
      
    </div>
  );
};

export default InternVisual;
