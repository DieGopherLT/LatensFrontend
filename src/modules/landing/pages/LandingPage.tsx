import LandingLayout from '../layouts/LandingLayout';
import CTASection from '../components/sections/CTASection';
import FeaturesSection from '../components/sections/FeaturesSection';
import HeroSection from '../components/sections/HeroSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import SleepStatesSection from '../components/sections/SleepStatesSection';


const LandingPage = () => {
  return (
    <LandingLayout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SleepStatesSection />
      <CTASection />
    </LandingLayout>
  );
};

export default LandingPage;