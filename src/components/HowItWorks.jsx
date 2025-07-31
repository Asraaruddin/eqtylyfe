import React from 'react';
import MoneyIncome from '../assets/money-income.png';
import Offer from '../assets/Offer.png';
import Application from '../assets/Application.png';
import AddProperty from '../assets/Add Prop.png';

const steps = [
  {
    number: '1',
    title: 'Simply Click to Access Your Equity',
    description: "With EQTY LYFE’s technology, you can start unlocking your equity.",
    image: MoneyIncome,
  },
  {
    number: '2',
    title: 'Get Your Offer',
    description: "Find your home on our platform and access what EQTY LYFE can offer based on your home value.",
    image: Offer,
  },
  {
    number: '3',
    title: 'Application',
    description: "Once you decide to continue with our offer, all you have to do is go through our simple application process to receive your offer.",
    image: Application,
  },
  {
    number: '4',
    title: 'Keep Adding',
    description: "If you have another property, go ahead and add it with us.",
    image: AddProperty,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#f9fafe] py-20 px-4" id="how-it-works">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 style={{ fontFamily: 'IBM Plex Serif, serif' }}  className="text-[36px] md:text-[48px] leading-[1.2] font-semibold tracking-[-0.012em] text-[#265CE1] font-['IBM Plex Serif'] text-center mb-16">
          How EQTY LYFE Works
        </h2>

        {/* Steps */}
        <div className="space-y-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col md:flex-row items-center md:items-start bg-white px-6 py-8 rounded-[12px] shadow-[0px_8px_16px_2px_rgba(0,0,0,0.12)] min-h-[260px] md:min-h-[220px]"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-5 left-6 w-[48px] h-[48px] bg-[#265CE1] text-white font-bold text-lg flex items-center justify-center rounded-md shadow-md">
                {step.number}
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left md:pr-6 mb-6 md:mb-0">
                <h3 style={{ fontFamily: 'IBM Plex Serif, serif' }} className="text-[20px] md:text-[22px] font-semibold text-[#265CE1] mb-2 leading-tight font-['IBM Plex Serif']">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-snug max-w-[600px] mx-auto md:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className="w-[140px] md:w-[160px] flex-shrink-0 flex justify-center items-center rounded-md shadow-[0px_6px_0px_rgba(0,0,0,0.15)]">
                <img
                  src={step.image}
                  alt={`Step ${step.number}`}
                  className="w-full h-auto object-contain"
                  style={{ background: 'transparent' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
