'use client';

import { CheckCircle2, Shield, Users } from 'lucide-react';

import GitHubAuthButton from '../navigation/GitHubAuthButton';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-sleep-drift absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-primary/10 blur-xl" />
        <div
          className="animate-sleep-drift absolute top-3/4 right-1/4 h-48 w-48 rounded-full bg-accent/10 blur-2xl"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="animate-sleep-drift absolute bottom-1/4 left-1/3 h-24 w-24 rounded-full bg-secondary/10 blur-lg"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-sleep-awaken mb-8 inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
            <div className="animate-sleep-pulse mr-2 h-2 w-2 rounded-full bg-primary" />
            Awaken Your Sleeping Projects
          </div>

          {/* Main heading */}
          <h1 className="animate-sleep-awaken stagger-100 mb-6 text-4xl leading-tight font-bold text-foreground md:text-6xl lg:text-7xl">
            Stop Forgetting Where You{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Left Off
            </span>
          </h1>

          {/* Subheading */}
          <p className="animate-sleep-awaken stagger-200 mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            <strong className="text-foreground">Latens</strong> analyzes your repositories to
            understand their sleep state and provides contextual memory to help you resume
            development naturally.
          </p>

          {/* Sleep Score Preview */}
          <div className="animate-sleep-awaken stagger-300 animate-sleep-pulse mx-auto mb-12 max-w-md rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 text-sm text-muted-foreground">food-blog</div>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-foreground">Sleep Score</span>
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-violet-600" />
                <span className="text-2xl font-bold text-violet-600">67</span>
              </div>
            </div>
            <div className="mb-2 h-2 w-full rounded-full bg-muted/30">
              <div className="h-2 rounded-full bg-violet-600" style={{ width: '67%' }} />
            </div>
            <div className="text-xs text-muted-foreground">
              Deep Sleep • Blog abandonado hace 4 meses
            </div>
          </div>

          {/* Primary CTA */}
          <div className="animate-sleep-awaken stagger-400 mb-12 flex items-center justify-center">
            <div className="interactive-glow rounded-lg">
              <GitHubAuthButton size="lg" />
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col items-center justify-center space-y-2 text-sm text-muted-foreground sm:flex-row sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Free & Open Source</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Privacy Focused</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-primary" />
              <span>Active Community</span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
