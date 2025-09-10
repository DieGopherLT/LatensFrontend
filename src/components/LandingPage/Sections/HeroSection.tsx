'use client';

import { CheckCircle2, Shield, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-sleep-drift blur-xl" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full animate-sleep-drift blur-2xl" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-secondary/10 rounded-full animate-sleep-drift blur-lg" style={{animationDelay: '4s'}} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground mb-8 border border-border/50 animate-sleep-awaken">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-sleep-pulse" />
            Awaken Your Sleeping Projects
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-sleep-awaken stagger-100">
            Stop Forgetting Where You{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Left Off
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-sleep-awaken stagger-200">
            <strong className="text-foreground">Latens</strong> analyzes your repositories to understand their sleep state 
            and provides contextual memory to help you resume development naturally.
          </p>

          {/* Sleep Score Preview */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 mb-12 max-w-md mx-auto animate-sleep-awaken stagger-300 animate-sleep-pulse">
            <div className="text-sm text-muted-foreground mb-2">food-blog</div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-foreground">Sleep Score</span>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-violet-600 rounded-full" />
                <span className="text-2xl font-bold text-violet-600">67</span>
              </div>
            </div>
            <div className="w-full bg-muted/30 rounded-full h-2 mb-2">
              <div className="bg-violet-600 h-2 rounded-full" style={{width: '67%'}} />
            </div>
            <div className="text-xs text-muted-foreground">
              Deep Sleep • Blog abandonado hace 4 meses
            </div>
          </div>


          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Free & Open Source</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Privacy Focused</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Active Community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm">Discover More</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;