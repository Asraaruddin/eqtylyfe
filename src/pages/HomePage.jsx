// src/pages/HomePage.jsx

import Navbar from '../components/Navbar';
import Herosection from '../components/Herosection';
import SolutionSection from '../components/SolutionSection';
import HighlightSection from '../components/HighlightSection';
import AchieveGoal from '../components/AchieveGoal';
import Footer from '../components/Footer';
import SignupSection from '../components/SignupSection';
import HowItWorks from '../components/HowItWorks'



const HomePage = () => {
  return (
    <div className="bg-[#FAFBFF] w-full min-h-screen flex flex-col">
      {/* Navbar at full width */}
      <Navbar />
      <main className="flex-grow w-full max-w-[1440px] mx-auto">
        <Herosection />
        {/* Add additional sections below */}
      </main>
<SolutionSection/>
<HighlightSection/>
<AchieveGoal/>
<HowItWorks/>
<SignupSection/>
<Footer/>



    </div>
  );
};

export default HomePage;
