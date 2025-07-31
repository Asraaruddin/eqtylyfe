// src/pages/HowItWorksPage.jsx

import Navbar from '../components/Navbar';
import HowEquityLyfeWorks2 from '../components/HowEquityLyfeWorks2';
import OurSolution from '../components/OurSolution';
import EqtyLyfeProcess from '../components/EqtyLyfeProcess';
import RightSignupSection from '../components/RightsideSignupSection';
import Footer from '../components/Footer';

const HowItWorksPage = () => {
  return (
    <div className="bg-[#FAFBFF] w-full min-h-screen flex flex-col">
      <Navbar />
      <HowEquityLyfeWorks2 />
      <OurSolution />
      <EqtyLyfeProcess />
      <RightSignupSection />
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
