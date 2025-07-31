import React from 'react';
import Ellipse8 from '../assets/Ellipse 8.png';
import Ellipse7 from '../assets/Ellipse 7.png';
import Path from '../assets/path.png';
import coins from '../assets/Coins.png';

const SolutionSection = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto bg-[#FAFBFF] overflow-hidden py-12 px-4 md:px-12">

      {/* Background Ellipse 8 (Desktop only) */}
      <div
        className="absolute overflow-hidden max-w-full hidden md:block"
        style={{
          width: '1693px',
          height: '813px',
          top: '773px',
          left: '-157px',
          transform: 'rotate(0deg)',
          opacity: 1,
          zIndex: 0,
        }}
      >
        <img
          src={Ellipse8}
          alt="Background Ellipse"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blue Ellipse 7 (under coins - Desktop only) */}
      <img
        src={Ellipse7}
        alt="Ellipse Under Coins"
        className="absolute z-10 object-contain hidden md:block"
        style={{
          width: '1153px',
          height: '771px',
          top: '927px',
          left: '-91px',
        }}
      />

      {/* Path below coins (Desktop only) */}
      <img
        src={Path}
        alt="Path Decoration"
        className="absolute z-20 object-contain hidden md:block"
        style={{
          width: '1161px',
          height: '473px',
          top: '605px',
          left: '115px',
        }}
      />

      {/* Main Content */}
      <div className="relative z-30 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Coins Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={coins}
            alt="Coins with House"
            className="object-contain w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px]"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 max-w-[560px] text-center md:text-left">
          <h2 className="text-[#265CE1] text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-snug mb-4 font-['IBM_Plex_Serif']">
            EQTY LYFE’s Solution: <br /> Lump Sum
          </h2>
          <p className="text-[#344054] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed mb-6 font-sans">
            The EQTY LYFE LUMP SUM product lets homeowners instantly convert home equity into
            cash without selling or taking on debt. As home values grow, homeowners can access
            their equity to fund expenses like debt repayment, home improvements, or personal
            needs. This simple solution offers financial flexibility while <br className="hidden sm:block" /> maintaining property
            ownership.
          </p>
          <button className="bg-[#265CE1] hover:bg-[#1e4bbf] text-white font-medium px-6 py-3 rounded-lg text-[16px]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
