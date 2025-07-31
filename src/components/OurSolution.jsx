import React from 'react';
import leftCloud from '../assets/Cloudsleftside.png';
import house from '../assets/house.png';
import sun from '../assets/Sun.png';
import vector1 from '../assets/Vector (1).png'; // Main cloud
import vector2 from '../assets/Vector (2).png'; // Left decor cloud
import vector3 from '../assets/Vector (3).png'; // Right decor cloud

const OurSolution = () => {
  return (
    <section className="relative bg-[#EEF3FF] pt-20 overflow-hidden">
      {/* Title */}
      <h2
        style={{ fontFamily: 'IBM Plex Serif, serif' }}
        className="text-[32px] font-bold text-[#2C5EFF] text-left ml-16"
      >
        Our Solution:
      </h2>

      {/* Main Illustration Section */}
      <div className="relative mt-8 w-full h-[400px] md:h-[450px] lg:h-[500px]">

        {/* Left Cloud — HIDE on mobile */}
        <img
          src={leftCloud}
          alt="cloud-left"
          className="hidden sm:block absolute left-20 top-10 w-[120px] md:w-[150px] z-0"
        />

        <div className="relative w-full max-w-screen-md mx-auto px-4 sm:px-6 lg:px-10 py-16">
          {/* Cloud Backgrounds Behind — HIDE on mobile */}
          <img
            src={vector2}
            alt="Cloud Left"
            className="hidden sm:block absolute -top-4 left-[25%] w-20 md:w-28 z-0 opacity-80"
          />
          <img
            src={vector3}
            alt="Cloud Right"
            className="hidden sm:block absolute top-20 -right-[0%] w-20 md:w-28 z-0 opacity-80"
          />

          {/* 👇 DESKTOP/TABLET VIEW (original design) */}
          <div className="relative z-10 -mt-20 mx-auto w-[95%] max-w-[500px] hidden sm:block ml-50 -mt-40">
            <img
              src={vector1}
              alt="Main Cloud Background"
              className="w-full object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-10">
              <div className="text-center md:text-left text-[#265CE1] w-full max-w-[85%] mt-4">
                <h1
                  style={{ fontFamily: 'IBM Plex Serif, serif' }}
                  className="text-base md:text-xl font-bold mb-2"
                >
                  Lump Sum
                </h1>
                <p className="text-[10px] md:text-xs leading-snug">
                  Many homeowners have untapped home value and worry about accessing their equity.{' '}
                  <span className="font-semibold">EQTLYFE</span> helps you liquidate your equity and turn it into cash to achieve your financial goals.
                </p>
              </div>
            </div>
          </div>

          {/* 👇 MOBILE VIEW ONLY */}
          <div className="relative z-10 mx-auto w-[90%] block sm:hidden -mt-10">
            <img
              src={vector1}
              alt="Main Cloud Background"
              className="w-full object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="text-center text-[#265CE1] w-full max-w-[90%] mt-3">
                <h1
                  style={{ fontFamily: 'IBM Plex Serif, serif' }}
                  className="text-sm font-bold mb-1"
                >
                  Lump Sum
                </h1>
                <p className="text-[9px] leading-snug">
                  Many homeowners have untapped home value and worry about accessing their equity.{' '}
                  <span className="font-semibold">EQTLYFE</span> helps you liquidate your equity and turn it into cash to achieve your financial goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sun */}
        <img
          src={sun}
          alt="sun"
          className="absolute right-8 -top-28 w-[60px] md:w-[80px] z-0"
        />

        {/* House Image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 -ml-20">
          <img
            src={house}
            alt="House"
            className="w-[250px] md:w-[320px] lg:w-[370px]"
          />
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
