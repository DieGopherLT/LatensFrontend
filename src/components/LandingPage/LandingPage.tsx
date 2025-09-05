import LandingLayout from './LandingLayout';
import HeroSection from './Sections/HeroSection';
import FeaturesSection from './Sections/FeaturesSection';
import HowItWorksSection from './Sections/HowItWorksSection';
import SleepStatesSection from './Sections/SleepStatesSection';
import CTASection from './Sections/CTASection';

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