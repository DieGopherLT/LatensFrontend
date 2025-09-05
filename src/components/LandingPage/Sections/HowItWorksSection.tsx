import { Github, Brain, BookOpen, Zap, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const HowItWorksSection = () => {
  const steps = [
    {
      step: '01',
      title: 'Connect Repository',
      description: 'Authenticate with GitHub and select the repository you want to analyze. Latens securely accesses only the metadata needed for analysis.',
      icon: <Github className="w-8 h-8" />,
      color: 'aurora'
    },
    {
      step: '02',
      title: 'Sleep Analysis',
      description: 'Our AI analyzes commit patterns, issue activity, PR status, and development momentum to calculate your project\'s Sleep Score.',
      icon: <Brain className="w-8 h-8" />,
      color: 'blue'
    },
    {
      step: '03',
      title: 'Memory Recovery',
      description: 'Latens reconstructs your development context including recent changes, open issues, pending tasks, and architectural decisions.',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'gold'
    },
    {
      step: '04',
      title: 'Smart Awakening',
      description: 'Get personalized recommendations for next steps, priority tasks, and development paths based on your project\'s current state.',
      icon: <Zap className="w-8 h-8" />,
      color: 'success'
    }
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-sm text-accent mb-6 border border-accent/20">
            <div className="w-2 h-2 bg-accent rounded-full mr-2 sleep-light-decoration" />
            How It Works
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            From Sleep to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Active Development
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our intelligent analysis process helps you understand and resume your 
            projects with complete context and clear next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-6 group animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step indicator */}
                <div className="flex-shrink-0">
                  <div className={clsx(
                    "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg",
                    {
                      'bg-aurora/10 border border-aurora/20 text-aurora group-hover:bg-aurora/20 group-hover:shadow-aurora/20': step.color === 'aurora',
                      'bg-blue/10 border border-blue/20 text-blue group-hover:bg-blue/20 group-hover:shadow-blue/20': step.color === 'blue',
                      'bg-gold/10 border border-gold/20 text-gold group-hover:bg-gold/20 group-hover:shadow-gold/20': step.color === 'gold',
                      'bg-success/10 border border-success/20 text-success group-hover:bg-success/20 group-hover:shadow-success/20': step.color === 'success',
                    }
                  )}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className={clsx(
                    "text-sm font-bold mb-2",
                    {
                      'text-aurora': step.color === 'aurora',
                      'text-blue': step.color === 'blue',
                      'text-gold': step.color === 'gold',
                      'text-success': step.color === 'success',
                    }
                  )}>
                    STEP {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 mt-16 w-px h-16 bg-border hidden lg:block" />
                )}
              </div>
            ))}
          </div>

          {/* Visual representation */}
          <div className="relative">
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-16 h-16 bg-primary rounded-full sleep-light-decoration" />
                <div className="absolute bottom-8 right-8 w-24 h-24 bg-accent rounded-full sleep-standard-decoration" />
                <div className="absolute top-1/2 right-4 w-12 h-12 bg-secondary rounded-full sleep-deep-decoration" />
              </div>

              {/* Mock dashboard */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-muted-foreground">Project Analysis</div>
                  <div className="w-3 h-3 bg-primary rounded-full sleep-light-decoration" />
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-foreground">my-awesome-project</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-warning rounded-full" />
                      <span className="text-sm text-warning font-medium">Standard Sleep</span>
                    </div>
                  </div>

                  <div className="w-full bg-muted/30 rounded-full h-3">
                    <div className="bg-warning h-3 rounded-full" style={{width: '45%'}} />
                  </div>

                  <div className="text-sm text-muted-foreground">
                    Sleep Score: 45/100
                  </div>
                </div>

                {/* Mock recommendations */}
                <div className="space-y-3">
                  <div className="bg-muted/20 rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">Review 3 open PRs</span>
                    </div>
                  </div>
                  <div className="bg-muted/20 rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground">Update dependencies</span>
                    </div>
                  </div>
                  <div className="bg-muted/20 rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span className="text-foreground">Fix 2 critical issues</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Awaken Your Projects?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Start with a free analysis of your repository. No credit card required, 
              just connect your GitHub account and see the magic happen.
            </p>
            <button className="btn-primary px-8 py-3 text-base inline-flex items-center space-x-2 group">
              <span>Analyze My Repository</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;