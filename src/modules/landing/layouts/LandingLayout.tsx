import { ReactNode } from 'react';

import Footer from '../components/Footer';
import Header from '../components/navigation/Header';

interface LandingLayoutProps {
  children: ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="relative">{children}</main>

      <Footer />
    </div>
  );
};

export default LandingLayout;
