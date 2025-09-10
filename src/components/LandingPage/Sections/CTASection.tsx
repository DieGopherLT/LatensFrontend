import { Star } from 'lucide-react';

import GitHubAuthButton from '../Navigation/GitHubAuthButton';

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="sleep-light-decoration absolute top-1/4 left-1/4 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
        <div className="sleep-standard-decoration absolute right-1/4 bottom-1/3 h-56 w-56 rounded-full bg-accent/5 blur-3xl" />
        <div className="sleep-deep-decoration absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-secondary/5 blur-2xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main content */}
          <div className="rounded-3xl border border-border/50 bg-card/50 p-12 shadow-2xl backdrop-blur-sm">
            <div className="mb-8">
              <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
                <div className="sleep-light-decoration mr-2 h-2 w-2 rounded-full bg-primary" />
                Ready to Wake Up?
              </div>

              <h2 className="mb-6 text-3xl leading-tight font-bold text-foreground md:text-5xl lg:text-6xl">
                Transform Your{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Sleeping Projects
                </span>{' '}
                Into Active Development
              </h2>

              <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-muted-foreground">
                Join thousands of developers who have successfully awakened their dormant
                repositories and returned to productive development with Latens.
              </p>
            </div>

            {/* Stats */}
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">500+</div>
                <div className="text-sm tracking-wide text-muted-foreground uppercase">
                  Projects Awakened
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-accent md:text-4xl">2.3x</div>
                <div className="text-sm tracking-wide text-muted-foreground uppercase">
                  Faster Resume Time
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-secondary md:text-4xl">95%</div>
                <div className="text-sm tracking-wide text-muted-foreground uppercase">
                  Context Recovery Rate
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mb-8 flex items-center justify-center">
              <div className="interactive-glow rounded-lg">
                <GitHubAuthButton size="lg" />
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col items-center justify-center space-y-3 text-sm text-muted-foreground sm:flex-row sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free to start</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>5-minute setup</span>
              </div>
            </div>
          </div>

          {/* Bottom testimonial */}
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="rounded-2xl border border-border/30 bg-card/30 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-warning" />
                ))}
              </div>
              <blockquote className="mb-4 text-lg leading-relaxed text-muted-foreground italic">
                &ldquo;Latens helped me revive a year-old project in just 20 minutes. I knew exactly
                where I left off and what to work on next.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                  <span className="text-sm font-bold text-white">JS</span>
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-foreground">Jane Smith</div>
                  <div className="text-xs text-muted-foreground">Senior Developer @TechCorp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
