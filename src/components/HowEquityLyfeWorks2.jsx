import React from 'react';
import Vector4 from '../assets/Vector 4.png';
import Vector6 from '../assets/Vector 6.png';
import RedGraph from '../assets/bargraph.png';
import GreenGraph from '../assets/green graph.png';

const HowEquityLyfeWorks2 = () => {
  return (
    <div className="relative bg-white overflow-hidden px-4 pt-[120px] pb-[180px] sm:pb-[140px]">
      {/* Background Vectors */}
      <img
        src={Vector4}
        alt="Vector Right"
        className="absolute z-0"
        style={{
          width: '60vw',
          maxWidth: '700px',
          height: 'auto',
          top: '0',
          right: '-160px',
          transform: 'rotate(8.5deg)',
          opacity: 1,
        }}
      />
      <img
        src={Vector6}
        alt="Vector Left"
        className="absolute z-0 left-0 bottom-0 w-[60vw] max-w-[500px] rotate-[360.71deg]"
        style={{
          opacity: 1,
        }}
      />

      {/* Title + Subtitle */}
      <div className="z-10 max-w-[733px] relative">
        <h2
          style={{ fontFamily: 'IBM Plex Serif, serif' }}
          className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#265CE1] leading-tight"
        >
          How EQTY LYFE Works
        </h2>
        <p className="mt-4 text-[16px] md:text-[18px] lg:text-[20px] font-normal text-[#4A4A4A] leading-snug max-w-[680px]">
          EQTY LYFE is bringing new possibilities for homeowners to{' '}
          <br className="hidden sm:block" />
          utilize their equity.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 z-10 relative max-w-[1200px] mx-auto">
        {/* Left */}
        <div className="flex flex-col items-center text-center">
          <img
            src={RedGraph}
            alt="Red Graph"
            className="w-[130px] md:w-[160px] lg:w-[180px] mb-4"
          />
          <h3 className="text-[#265CE1] text-[20px] md:text-[24px] lg:text-[26px] font-bold">
            Before EQTY LYFE
          </h3>
          <p className="text-[#666] text-[14px] md:text-[16px] max-w-[320px] leading-snug mt-2">
            The traditional method of releasing your home equity typically
            involves either taking out a loan, which requires repayment with
            interest, or selling your entire home.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center text-center z-10 relative">
          <img
            src={GreenGraph}
            alt="Green Graph"
            className="w-[130px] md:w-[160px] lg:w-[180px] mb-4"
          />
          <h3 className="text-[#265CE1] text-[20px] md:text-[24px] lg:text-[26px] font-bold">
            After EQTY LYFE
          </h3>
          <p className="text-[#666] text-[14px] md:text-[16px] max-w-[320px] leading-snug mt-2">
            With EQTY LYFE, you can now convert your home equity into a
            valuable resource by utilizing our various investment options.
          </p>

          {/* Form inside right block */}
          <div className="mt-4 sm:mt-6 w-full flex flex-col sm:flex-row gap-3 justify-center items-center sm:items-stretch z-10 relative">
            <input
              type="text"
              placeholder="Enter Home Address"
              className="h-[44px] w-full sm:w-[260px] px-4 bg-white rounded-lg text-[#265CE1] text-base placeholder:text-[#A5C5FF] outline-none shadow-sm border"
            />
            <button className="h-[44px] bg-[#265CE1] text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition text-sm sm:text-base">
              Get My Estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowEquityLyfeWorks2;
