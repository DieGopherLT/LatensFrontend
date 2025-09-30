import clsx from 'clsx';
import { BookOpen, Brain, Github, Zap } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      step: '01',
      title: 'Connect Repository',
      description:
        'Authenticate with GitHub and select the repository you want to analyze. Latens securely accesses only the metadata needed for analysis.',
      icon: <Github className="h-8 w-8" />,
      color: 'aurora',
    },
    {
      step: '02',
      title: 'Sleep Analysis',
      description:
        "Our AI analyzes commit patterns, issue activity, PR status, and development momentum to calculate your project's Sleep Score.",
      icon: <Brain className="h-8 w-8" />,
      color: 'blue',
    },
    {
      step: '03',
      title: 'Memory Recovery',
      description:
        'Latens reconstructs your development context including recent changes, open issues, pending tasks, and architectural decisions.',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'gold',
    },
    {
      step: '04',
      title: 'Smart Awakening',
      description:
        "Get personalized recommendations for next steps, priority tasks, and development paths based on your project's current state.",
      icon: <Zap className="h-8 w-8" />,
      color: 'success',
    },
  ];

  return (
    <section className="py-24" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-accent">
            <div className="sleep-light-decoration mr-2 h-2 w-2 rounded-full bg-accent" />
            How It Works
          </div>

          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">
            From Sleep to{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Active Development
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Our intelligent analysis process helps you understand and resume your projects with
            complete context and clear next steps.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group animate-slide-up flex items-start space-x-6"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step indicator */}
                <div className="flex-shrink-0">
                  <div
                    className={clsx(
                      'flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg',
                      {
                        'border border-aurora/20 bg-aurora/10 text-aurora group-hover:bg-aurora/20 group-hover:shadow-aurora/20':
                          step.color === 'aurora',
                        'border border-blue/20 bg-blue/10 text-blue group-hover:bg-blue/20 group-hover:shadow-blue/20':
                          step.color === 'blue',
                        'border border-gold/20 bg-gold/10 text-gold group-hover:bg-gold/20 group-hover:shadow-gold/20':
                          step.color === 'gold',
                        'border border-success/20 bg-success/10 text-success group-hover:bg-success/20 group-hover:shadow-success/20':
                          step.color === 'success',
                      }
                    )}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div
                    className={clsx('mb-2 text-sm font-bold', {
                      'text-aurora': step.color === 'aurora',
                      'text-blue': step.color === 'blue',
                      'text-gold': step.color === 'gold',
                      'text-success': step.color === 'success',
                    })}
                  >
                    STEP {step.step}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 mt-16 hidden h-16 w-px bg-border lg:block" />
                )}
              </div>
            ))}
          </div>

          {/* Visual representation */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="sleep-light-decoration absolute top-4 left-4 h-16 w-16 rounded-full bg-primary" />
                <div className="sleep-standard-decoration absolute right-8 bottom-8 h-24 w-24 rounded-full bg-accent" />
                <div className="sleep-deep-decoration absolute top-1/2 right-4 h-12 w-12 rounded-full bg-secondary" />
              </div>

              {/* Mock dashboard */}
              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">Project Analysis</div>
                  <div className="sleep-light-decoration h-3 w-3 rounded-full bg-primary" />
                </div>

                <div className="mb-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-foreground">
                      my-awesome-project
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-warning" />
                      <span className="text-sm font-medium text-warning">Standard Sleep</span>
                    </div>
                  </div>

                  <div className="h-3 w-full rounded-full bg-muted/30">
                    <div className="h-3 rounded-full bg-warning" style={{ width: '45%' }} />
                  </div>

                  <div className="text-sm text-muted-foreground">Sleep Score: 45/100</div>
                </div>

                {/* Mock recommendations */}
                <div className="space-y-3">
                  <div className="rounded-lg bg-muted/20 p-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-foreground">Review 3 open PRs</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted/20 p-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-foreground">Update dependencies</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted/20 p-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-secondary" />
                      <span className="text-foreground">Fix 2 critical issues</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default HowItWorksSection;
