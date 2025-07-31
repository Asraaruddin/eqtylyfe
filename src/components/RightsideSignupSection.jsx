import React from 'react';
import rightamico from '../assets/rightamico.png';

const RightSignupSection = () => {
  return (
    <section className="relative flex justify-center items-center px-4 py-16 bg-[#FFFFFF]">
      {/* Blue Box */}
      <div className="w-full max-w-[926px] rounded-[10px] shadow-md bg-[#265CE1] flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-6 z-10">
        
        {/* Left Content */}
        <div className="text-white w-full md:max-w-[50%] mb-6 md:mb-0">
          <h2
            style={{ fontFamily: 'IBM Plex Serif, serif' }}
            className="text-[24px] sm:text-[28px] md:text-[36px] font-bold mb-3"
          >
            Sign Up Today!
          </h2>
          <p className="mb-5 text-sm sm:text-base md:text-lg leading-snug text-[#E3EDFF]">
            All it takes is a few simple steps to get your
            <br className="hidden sm:block" /> home to work for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter Home Address"
              className="h-[40px] w-full sm:w-[233px] px-4 bg-white rounded-lg text-[#265CE1] text-base placeholder:text-[#A5C5FF] outline-none"
            />
            <button className="h-[40px] bg-white text-[#265CE1] font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition text-sm sm:text-base">
              Get My Estimate
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:max-w-[30%] flex justify-center">
          <img
            src={rightamico}
            alt="Sign Up Illustration"
            className="h-[140px] sm:h-[160px] md:h-[180px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default RightSignupSection;
