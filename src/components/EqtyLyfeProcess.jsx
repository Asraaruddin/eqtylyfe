import React from 'react';
import process1 from '../assets/processamico.png';
import process2 from '../assets/processamico2.png';
import process3 from '../assets/processamico3.png';
import process4 from '../assets/processrafiki4.png';

const steps = [
  {
    title: 'Equity Assessment & Goal Alignment',
    content:
      'We start by analyzing your home’s current equity and your long-term financial objectives. Using advanced tools, we calculate your available equity and identify opportunities tailored to your risk tolerance and goals—whether it’s funding investments or diversifying your portfolio.',
    image: process1,
  },
  {
    title: 'Financial Institution',
    content:
      'At Eqty Lyfe, we focus on securitizing homeowners’ equity by working with major financial institutions. This collaboration allows us to effectively secure your home equity and identify the most suitable investment strategy tailored to your financial objectives.',
    image: process2,
  },
  {
    title: 'Investing Partnership',
    content:
      "EQTY LYFE's investment method partners with major financial institutions to securitize homeowners' equity and invest it in trade markets. For example, the S&P offers strong historical performance and full transparency.",
    image: process3,
  },
  {
    title: 'Equity Selling Option',
    content:
      'At Eqty Lyfe, homeowners have the option to partner with us and cash out a portion of their home equity. This alternative method allows homeowners to access their funds immediately, enabling them to use the money to achieve their financial goals.',
    image: process4,
  },
];

const EqtyLyfeProcess = () => {
  return (
    <section className="flex flex-col items-center py-16 bg-white px-4">
      <h2
        className="text-[#265CE1] text-[32px] sm:text-[36px] lg:text-[40px] font-bold mb-16 text-center"
        style={{ fontFamily: 'IBM Plex Serif, serif' }}
      >
        The EQTY LYFE Process
      </h2>

      <div className="relative flex flex-col items-center gap-[100px] w-full max-w-[1100px]">
        {steps.map((step, idx) => (
          <div key={idx} className="relative w-full flex justify-center">
            {/* Vertical Dashed Line */}
            {idx !== 0 && (
              <div className="absolute top-[-90px] left-1/2 transform -translate-x-1/2 z-0 h-[80px] w-0.5 border-l-2 border-dashed border-[#7EA3FF]" />
            )}

            {/* Step Circle */}
            <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-[77px] h-[77px] rounded-full bg-white border-2 border-[#7EA3FF] shadow-md flex items-center justify-center text-[24px] font-bold text-[#265CE1]">
                {idx + 1}
              </div>
            </div>

            {/* Card Content */}
            <div className="flex justify-between items-center bg-[#FFEDD5] shadow-md rounded-[10px] px-6 sm:px-10 py-8 w-full h-auto gap-4 flex-col lg:flex-row">
              {/* Text Block */}
              <div className="flex-1 text-right lg:pr-6">
                <h3
                  className="text-[#265CE1] font-bold text-[20px] sm:text-[24px] mb-4"
                  style={{ fontFamily: 'Inter', lineHeight: '120%' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[#1F2937] text-[16px]"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    lineHeight: '160%',
                    textAlign: 'justify',
                  }}
                >
                  {step.content}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 flex justify-center items-center">
                <img
                  src={step.image}
                  alt={`step-${idx + 1}`}
                  className="max-w-[300px] w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EqtyLyfeProcess;
