import React from 'react';
import Logo from '../assets/Logo Draft .png';
import LinkedIn from '../assets/linkdin.png';
import Facebook from '../assets/Facebook.png';
import Twitter from '../assets/twitter .png';

const Footer = () => {
  return (
    <footer className="bg-[#265CE1] text-white px-4 py-10 w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="min-w-[147px]">
            <h4 className="font-[IBM Plex Serif] font-semibold text-[14px] leading-[32px] tracking-[-0.006em] mb-2">
              Maximize Your Equity
            </h4>
            <ul className="space-y-1">
              <li>How It Works</li>
              <li>HEI?</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="min-w-[144px]">
            <h4 className="font-[IBM Plex Serif] font-semibold text-[14px] leading-[32px] tracking-[-0.006em] mb-2">
              Why EQTY LYFE?
            </h4>
            <ul className="space-y-1">
              <li>Achieve Your Goals</li>
              <li>Lump Sum</li>
            </ul>
          </div>
          <div className="min-w-[103px]">
            <h4 className="font-[IBM Plex Serif] font-semibold text-[14px] leading-[32px] tracking-[-0.006em] mb-2">
              Learn More
            </h4>
            <ul className="space-y-1">
              <li>Dashboard</li>
              <li>Calculators</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="min-w-[103px]">
            <h4 className="font-[IBM Plex Serif] font-semibold text-[14px] leading-[32px] tracking-[-0.006em] mb-2">
              About
            </h4>
            <ul className="space-y-1">
              <li>Our Team</li>
              <li>Careers</li>
              <li>Partner With Us</li>
              <li>Contact US</li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-md">
          <h4 className="font-[IBM Plex Serif] font-semibold text-[14px] leading-[32px] tracking-[-0.006em] mb-2">
            Newsletter
          </h4>
          <p className="text-sm mb-4">
            Get tips, knowledge, and resources to help you learn more about utilizing your home to the max. Sign up today to be the first to learn and also get notified about our upcoming events and product launches!
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Email"
              className="w-[230.276px] h-[31px] border border-[#33BD47] rounded-[4px] px-[10px] py-[5px] text-[#33BD47] bg-white placeholder-[#33BD47]"
            />
            <button
              className="h-[31px] px-4 rounded-[4px] border border-[#33BD47] text-white bg-[#33BD47] hover:bg-[#28a63c]"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 pt-6 border-t border-white border-opacity-20">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <img src={Logo} alt="EQTY LYFE Logo" className="h-6" />
          <span className="font-semibold text-lg">EQTY LYFE</span>
        </div>
        <p className="text-xs">@EQTY LYFE 2025. All Right Reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <img src={LinkedIn} alt="LinkedIn" className="h-5 w-5" />
          <img src={Facebook} alt="Facebook" className="h-5 w-5" />
          <img src={Twitter} alt="Twitter" className="h-5 w-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
