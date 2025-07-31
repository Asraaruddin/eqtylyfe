import React from "react";
import tinyHouse from "../assets/tiny-house.png";

const Herosection = () => {
  return (
    <section className="pt-[117px] pb-16 px-4 sm:px-8 md:px-10 lg:px-[68px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto min-h-[485px] flex flex-col lg:flex-row items-start gap-10">
        
        {/* Left Column (shifted right slightly with ml) */}
<div className="w-full lg:w-[469px] z-10 mt-20 lg:ml-0 lg:mr-auto">
  <h1 className="text-[64px] leading-[1.1] font-semibold text-[#265CE1] font-['IBM_Plex_Serif']">
    Put Your Home Equity to <span className="italic font-bold text-[#33A745]">Work</span>
  </h1>

  <p className="mt-6 text-base text-[#2E2E2E] leading-[1.6] max-w-[460px] font-normal font-sans">
    Achieve financial freedom through your home  <br /> equity—no debt, no interest, no monthly  <br /> payments, just opportunity
  </p>

  <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
    <input
      type="text"
      placeholder="Enter Home Address"
      className="w-full sm:w-[260px] h-[48px] px-4 text-sm bg-[#F4F6FF] text-[#101828] placeholder:text-[#98A2B3] border border-[#D0D5DD] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#265CE1]"
    />
    <button className="h-[48px] px-6 bg-[#265CE1] text-white text-sm font-medium rounded-md hover:bg-[#1e4ccf] transition whitespace-nowrap">
      Get My Estimate
    </button>
  </div>
</div>




        {/* Right Image - pushed to far right using negative margin */}
        <div className="w-full flex justify-center lg:justify-end lg:flex-1 lg:mr-[-68px]">
          <img
            src={tinyHouse}
            alt="Tiny House"
            className="w-full max-w-[667.91px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
