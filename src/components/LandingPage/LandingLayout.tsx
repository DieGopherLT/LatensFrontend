import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Navigation/Header';

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
