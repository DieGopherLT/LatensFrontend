import LandingLayout from './LandingLayout';
import CTASection from './Sections/CTASection';
import FeaturesSection from './Sections/FeaturesSection';
import HeroSection from './Sections/HeroSection';
import HowItWorksSection from './Sections/HowItWorksSection';
import SleepStatesSection from './Sections/SleepStatesSection';


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