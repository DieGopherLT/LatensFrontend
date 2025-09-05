import { Brain, BookOpen, Zap, Target, Shield, FolderGit2, ArrowRight } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Sleep Score Analysis',
      description: 'Intelligent assessment of your project\'s dormancy level using commit patterns, issue activity, and development momentum.',
      highlight: 'AI-Powered'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Latens Recovery',
      description: 'Comprehensive memory reconstruction that captures where you left off, including pending tasks, recent changes, and development context.',
      highlight: 'Context-Aware'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Awakening',
      description: 'Get back to productive development in minutes with prioritized task suggestions and contextual reminders.',
      highlight: 'Lightning Fast'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Smart Recommendations',
      description: 'Actionable next steps based on your project\'s current state, dependencies, and development history.',
      highlight: 'Personalized'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Privacy First',
      description: 'All analysis happens securely. Your code stays on GitHub, we only access public metadata and repository insights.',
      highlight: 'Secure'
    },
    {
      icon: <FolderGit2 className="w-8 h-8" />,
      title: 'Multi-Repository Support',
      description: 'Manage multiple sleeping projects from a unified dashboard with cross-project insights and dependencies tracking.',
      highlight: 'Scalable'
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm text-primary mb-6 border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 sleep-light-decoration" />
            Core Features
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Revive Your Projects
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Latens combines intelligent analysis with contextual recovery to make 
            resuming development feel natural and productive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card/70 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-aurora/10 interactive-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Highlight badge */}
              <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-4 border border-accent/20">
                {feature.highlight}
              </div>

              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-aurora/10 rounded-2xl mb-4 text-aurora group-hover:bg-aurora/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-aurora/20">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to wake up your sleeping projects?
          </p>
          <button className="btn-primary px-8 py-3 text-base inline-flex items-center space-x-2 group">
            <span>Start Free Analysis</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;