import { Star } from 'lucide-react';
import GitHubAuthButton from '../Navigation/GitHubAuthButton';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-primary/5 rounded-full sleep-light-decoration blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-accent/5 rounded-full sleep-standard-decoration blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-secondary/5 rounded-full sleep-deep-decoration blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main content */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-12 shadow-2xl">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm text-primary mb-6 border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 sleep-light-decoration" />
                Ready to Wake Up?
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Transform Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Sleeping Projects
                </span>
                {' '}Into Active Development
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                Join thousands of developers who have successfully awakened their dormant repositories 
                and returned to productive development with Latens.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  500+
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Projects Awakened
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  2.3x
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Faster Resume Time
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  95%
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Context Recovery Rate
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-center mb-8">
              <div className="interactive-glow rounded-lg">
                <GitHubAuthButton size="lg" />
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free to start</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>5-minute setup</span>
              </div>
            </div>
          </div>

          {/* Bottom testimonial */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6">
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-muted-foreground italic mb-4 leading-relaxed">
                &ldquo;Latens helped me revive a year-old project in just 20 minutes. 
                I knew exactly where I left off and what to work on next.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JS</span>
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