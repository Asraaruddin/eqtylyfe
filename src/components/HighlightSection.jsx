import React from 'react';
import graph from '../assets/Graph Animation.png';

const HighlightSection = () => {
  return (
    <section className="w-full bg-[#265CE1] py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <h2 className="text-white text-[32px] font-semibold font-['IBM_Plex_Serif'] mb-8">
          Don’t Miss Out
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 */}
<div className="bg-white rounded-xl p-6 shadow-md min-h-[240px] flex items-center">
  <div className="text-[#344054] text-[20px] md:text-[30px] leading-tight font-sans space-y-1">
    <p>Homeowners with mortgages,</p>
    <p>
      representing <span className="text-[#4F8EF1] font-semibold">62%</span> of all U.S.
    </p>
    <p>properties, have seen a</p>
    <p>
      remarkable <span className="text-[#4F8EF1] font-extrabold">$1.5 trillion increase</span>
    </p>
    <p>in equity since early 2023.</p>
  </div>
</div>
          {/* Card 2 - Graph */}
<div className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-between min-h-[240px] h-full">
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 mb-4">
    <span className="text-[#F25C47] text-[20px] sm:text-[24px] font-bold">9.6%</span>
    <p className="text-[#101828] text-[16px] sm:text-[18px] leading-snug">
      Of Substantial Annual Gain<br className="hidden sm:block" />
      In One Year
    </p>
  </div>
  <img
    src={graph}
    alt="Graph Animation"
    className="w-full h-auto object-contain"
  />
</div>


          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-center items-center min-h-[240px]">
            <div className="flex items-baseline space-x-1 mb-2">
              <span className="text-[#1BA94C] text-[40px] font-semibold">$</span>
              <span className="text-[#1BA94C] text-[44px] font-bold ml-20">0k</span>
            </div>
            <p className="text-[#101828] text-[18px] text-center font-normal">
              Average Equity of US Homes
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-center items-center min-h-[240px]">
            <div className="flex items-baseline space-x-1 mb-2">
              <span className="text-[#1BA94C] text-[40px] font-semibold">$</span>
              <span className="text-[#1BA94C] text-[44px] font-bold ml-20">0+</span>
              <span className="text-[#1BA94C] text-[44px] font-bold">trillion</span>
            </div>
            <p className="text-[#101828] text-[18px] text-center font-normal">
              Trapped In US Homes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
