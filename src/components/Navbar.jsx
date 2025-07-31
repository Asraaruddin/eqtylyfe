import React, { useState } from 'react';
import { FaChevronDown, FaPlus, FaMinus } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Maximize Your Equity', dropdown: ['Refinance', 'Cash Out', 'Equity Loans'] },
{ label: 'Why EQTY LYFE', dropdown: [
  { name: 'Our Mission', path: '#' },
  { name: 'How It Works', path: '/how-it-works' },  // 👈 real link
  { name: 'Benefits', path: '#' },
]},

  { label: 'About', dropdown: ['Team', 'Vision', 'Careers'] },
  { label: 'Learn More', dropdown: ['Blog', 'FAQs', 'Guides'] },
  { label: 'Sell Your Home', dropdown: null },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <header className="w-full h-[81px] bg-white border-b border-gray-200 fixed top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-full w-full">

        {/* Logo - Desktop */}
        <a href="/" className="hidden lg:flex items-center space-x-4">
          <img src={logo} alt="EQT LYFE Logo" className="h-9 w-auto" />
          <span className="text-xl font-bold text-[#265CE1] whitespace-nowrap">EQTY LYFE</span>
        </a>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-800">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => item.dropdown && setOpenDropdown(index)}
              onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-[#265CE1] transition">
                {item.label}
                {item.dropdown && <FaChevronDown className="text-xs mt-[2px]" />}
              </button>

              {item.dropdown && openDropdown === index && (
                <div className="absolute top-full mt-2 bg-white border border-gray-200 shadow-lg rounded-md py-2 w-48 z-50">
                  {item.dropdown.map((option, i) => (
  <Link
    key={i}
    to={option.path}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    onClick={() => setOpenDropdown(null)}  // Close dropdown on click
  >
    {option.name}
  </Link>
))}

                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Auth Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="/login" className="text-sm hover:text-[#265CE1] transition">Login</a>
          <a
            href="/start"
            className="text-sm px-4 py-1.5 bg-[#265CE1] text-white rounded-md hover:bg-blue-700 transition"
          >
            Signup
          </a>
        </div>

        {/* Mobile - Logo + Menu Icon */}
        <div className="flex lg:hidden items-center justify-between w-full">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className="text-[#265CE1] font-bold text-xl">EQT LYFE</span>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[81px] left-0 w-full bg-white shadow-md z-40 px-4 py-6">
          <h2 className="text-center font-semibold text-lg mb-6">Menu</h2>
          <nav className="flex flex-col gap-2 text-base font-medium text-black">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-2">
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <span>{item.label}</span>
                  {item.dropdown ? (
                    expandedIndex === index ? (
                      <FaMinus className="text-[#265CE1]" />
                    ) : (
                      <FaPlus className="text-[#265CE1]" />
                    )
                  ) : (
                    <FaPlus className="invisible" />
                  )}
                </button>

                {item.dropdown && expandedIndex === index && (
                  <div className="mt-2 pl-2 flex flex-col gap-1 text-sm text-gray-600">
                    {item.dropdown.map((subItem, subIdx) => (
  <Link
    key={subIdx}
    to={subItem.path}
    className="hover:text-[#265CE1]"
    onClick={() => setMenuOpen(false)}  // Close mobile menu
  >
    {subItem.name}
  </Link>
))}

                  </div>
                )}
              </div>
            ))}

            {/* Auth Actions */}
            <div className="pt-4 text-center">
              <a href="/login" className="block mb-3 text-sm hover:text-[#265CE1]">Login</a>
              <a
                href="/start"
                className="bg-[#265CE1] text-white text-sm py-2 rounded-md w-full block text-center hover:bg-blue-700"
              >
                Sign Up
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
