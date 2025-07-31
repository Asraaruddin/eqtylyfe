import React from "react";
import Vector2 from "../assets/Vector2.png";
import Vector3 from "../assets/Vector 3.png";
import Amico from "../assets/amico.png";

const AchieveGoal = () => {
  return (
    <div className="relative bg-white overflow-hidden min-h-screen flex flex-col items-center pt-20 pb-32 px-4">
      {/* Vector Backgrounds */}
      <img
        src={Vector2}
        alt="Vector 2"
        className="absolute top-0 right-0 z-0 w-[600px] rotate-[1deg] opacity-100"
      />
      <img
        src={Vector3}
        alt="Vector 3"
        className="absolute top-0 right-0 z-0 w-[250px] opacity-100"
      />

      {/* Heading */}
      <div className="z-10 text-center md:text-left max-w-[999px] w-full mb-8">
        <h1 style={{ fontFamily: 'IBM Plex Serif, serif' }} className="text-[#265CE1] text-[32px] md:text-[48px] font-semibold font-['IBM Plex Serif'] leading-[48px] mb-4">
          Achieve Your Financial Goal
        </h1>
        <p className="text-[#6B7280] text-[18px] md:text-[20px] font-normal font-['Inter']">
          With EQTY LYFE, the possibilities are endless!
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-6 flex flex-col lg:flex-row flex-wrap gap-10 justify-center items-center w-full max-w-[1200px]">
        {/* Cards */}
        <div className="flex flex-col gap-4 items-center">
          {[
            "Fund An Education",
            "Consolidate Debt",
            "Renovate Your Home",
            "Make A Large Purchase",
            "Fund Your Retirement",
            "Diversification",
          ].map((text, i) => (
            <div
              key={i}
              style={{ fontFamily: "IBM Plex Serif, serif" }}
              className={`w-[329px] h-[73px] rounded-[10px] shadow-[0px_3px_6px_2px_rgba(38,50,56,0.25)] ${
                i === 0 ? "bg-[#DDE7FE] text-[#265CE1]" : "bg-white text-[#265CE1]"
              } flex items-center justify-center text-lg font-semibold text-center`}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Illustration + Message */}
        <div className="relative flex flex-col items-center">
          <img
            src={Amico}
            alt="Amico Illustration"
            className="w-[300px] md:w-[400px] max-w-full"
          />
         <div className="mt-4 bg-[#DDE7FE] w-full max-w-[577px] h-[68px] rounded-[10px] shadow-md flex items-center justify-center px-4 text-center text-black font-['Inter'] whitespace-nowrap text-[clamp(14px,2.5vw,18px)] leading-tight">
  Have your home equity help you pay off student loans.
</div>

        </div>
      </div>
    </div>
  );
};

export default AchieveGoal;
