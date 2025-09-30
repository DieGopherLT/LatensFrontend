import { BookOpen, Brain, FolderGit2, Shield, Target, Zap } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Sleep Score Analysis',
      description:
        "Intelligent assessment of your project's dormancy level using commit patterns, issue activity, and development momentum.",
      highlight: 'AI-Powered',
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Latens Recovery',
      description:
        'Comprehensive memory reconstruction that captures where you left off, including pending tasks, recent changes, and development context.',
      highlight: 'Context-Aware',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Awakening',
      description:
        'Get back to productive development in minutes with prioritized task suggestions and contextual reminders.',
      highlight: 'Lightning Fast',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Smart Recommendations',
      description:
        "Actionable next steps based on your project's current state, dependencies, and development history.",
      highlight: 'Personalized',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Privacy First',
      description:
        'All analysis happens securely. Your code stays on GitHub, we only access public metadata and repository insights.',
      highlight: 'Secure',
    },
    {
      icon: <FolderGit2 className="h-8 w-8" />,
      title: 'Multi-Repository Support',
      description:
        'Manage multiple sleeping projects from a unified dashboard with cross-project insights and dependencies tracking.',
      highlight: 'Scalable',
    },
  ];

  return (
    <section className="bg-muted/30 py-12 md:py-16 lg:py-20" id="features">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
            <div className="sleep-light-decoration mr-2 h-2 w-2 rounded-full bg-primary" />
            Core Features
          </div>

          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Revive Your Projects
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Latens combines intelligent analysis with contextual recovery to make resuming
            development feel natural and productive.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group interactive-glow rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-card/70 hover:shadow-2xl hover:shadow-aurora/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Highlight badge */}
              <div className="mb-4 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {feature.highlight}
              </div>

              {/* Icon */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-aurora/10 text-aurora transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-aurora/20 group-hover:shadow-lg group-hover:shadow-aurora/20">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {feature.title}
              </h3>

              <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default FeaturesSection;
