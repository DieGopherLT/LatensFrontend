import { Sun, Moon, Bed } from 'lucide-react';
import clsx from 'clsx';

const SleepStatesSection = () => {
  const sleepStates = [
    {
      name: 'Light Sleep',
      range: '0-30',
      color: 'sleep-light',
      description: 'Recent active development with regular commits and activity.',
      characteristics: [
        'Last commit within 1-2 weeks',
        'Active issue discussions',
        'Recent PR activity',
        'Dependencies up to date'
      ],
      awakening: 'Quick refresh - review recent changes and continue development.',
      icon: <Sun className="w-12 h-12" />
    },
    {
      name: 'Standard Sleep',
      range: '31-60',
      color: 'sleep-standard',
      description: 'Moderate pause in development with some dormancy indicators.',
      characteristics: [
        'Last commit 3-8 weeks ago',
        'Some stale issues or PRs',
        'Minor dependency drift',
        'Partial context loss'
      ],
      awakening: 'Context recovery - analyze recent state and prioritize next steps.',
      icon: <Moon className="w-12 h-12" />
    },
    {
      name: 'Deep Sleep',
      range: '61-100',
      color: 'sleep-deep',
      description: 'Extended dormancy requiring comprehensive awakening process.',
      characteristics: [
        'Last commit 2+ months ago',
        'Stale dependencies & security alerts',
        'Forgotten architectural decisions',
        'Significant context reconstruction needed'
      ],
      awakening: 'Full recovery - comprehensive analysis and gradual reengagement.',
      icon: <Bed className="w-12 h-12" />
    }
  ];

  return (
    <section id="sleep-states" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-sm text-secondary mb-6 border border-secondary/20">
            <div className="w-2 h-2 bg-secondary rounded-full mr-2 sleep-light-decoration" />
            Sleep States
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Understanding Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Project's Sleep Depth
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every dormant project has a unique sleep pattern. Latens identifies the depth 
            of your project's slumber to provide the most effective awakening strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {sleepStates.map((state, index) => (
            <div
              key={index}
              className={`
                bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8
                hover:bg-card/70 transition-all duration-700 group hover:scale-105 hover:-translate-y-3
                hover:shadow-2xl relative overflow-hidden interactive-glow
                ${state.color === 'sleep-light' ? 'hover:shadow-sleep-light/20' : ''}
                ${state.color === 'sleep-standard' ? 'hover:shadow-sleep-standard/20' : ''}
                ${state.color === 'sleep-deep' ? 'hover:shadow-sleep-deep/20' : ''}
              `}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background animation */}
              <div className={`absolute inset-0 opacity-5 ${
                state.color === 'primary' ? 'sleep-light' : 
                state.color === 'warning' ? 'sleep-standard' : 'sleep-deep'
              }`}>
                <div className={`w-full h-full bg-${state.color} rounded-2xl`} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={clsx(
                  "flex items-center justify-center w-20 h-20 rounded-3xl mb-6 border transition-all duration-300",
                  {
                    'bg-sleep-light/10 text-sleep-light border-sleep-light/20 group-hover:bg-sleep-light/20 sleep-light': state.color === 'sleep-light',
                    'bg-sleep-standard/10 text-sleep-standard border-sleep-standard/20 group-hover:bg-sleep-standard/20 sleep-standard': state.color === 'sleep-standard',
                    'bg-sleep-deep/10 text-sleep-deep border-sleep-deep/20 group-hover:bg-sleep-deep/20 sleep-deep': state.color === 'sleep-deep',
                  }
                )}>
                  {state.icon}
                </div>

                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={clsx(
                      "text-2xl font-bold",
                      {
                        'text-sleep-light': state.color === 'sleep-light',
                        'text-sleep-standard': state.color === 'sleep-standard',
                        'text-sleep-deep': state.color === 'sleep-deep',
                      }
                    )}>
                      {state.name}
                    </h3>
                    <div className={clsx(
                      "px-3 py-1 text-sm font-bold rounded-full border",
                      {
                        'bg-sleep-light/10 text-sleep-light border-sleep-light/20': state.color === 'sleep-light',
                        'bg-sleep-standard/10 text-sleep-standard border-sleep-standard/20': state.color === 'sleep-standard',
                        'bg-sleep-deep/10 text-sleep-deep border-sleep-deep/20': state.color === 'sleep-deep',
                      }
                    )}>
                      {state.range}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {state.description}
                  </p>
                </div>

                {/* Characteristics */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                    Indicators
                  </h4>
                  <ul className="space-y-2">
                    {state.characteristics.map((char, charIndex) => (
                      <li key={charIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <div className={clsx(
                          "w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0",
                          {
                            'bg-sleep-light': state.color === 'sleep-light',
                            'bg-sleep-standard': state.color === 'sleep-standard',
                            'bg-sleep-deep': state.color === 'sleep-deep',
                          }
                        )} />
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Awakening strategy */}
                <div className={clsx(
                  "p-4 rounded-xl border",
                  {
                    'bg-sleep-light/5 border-sleep-light/10': state.color === 'sleep-light',
                    'bg-sleep-standard/5 border-sleep-standard/10': state.color === 'sleep-standard',
                    'bg-sleep-deep/5 border-sleep-deep/10': state.color === 'sleep-deep',
                  }
                )}>
                  <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                    Awakening Strategy
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {state.awakening}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sleep Score Visualization */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Sleep Score Spectrum
            </h3>
            <p className="text-muted-foreground">
              Interactive visualization of how projects transition between sleep states
            </p>
          </div>

          {/* Spectrum bar */}
          <div className="relative">
            <div className="flex h-12 rounded-2xl overflow-hidden shadow-inner">
              <div className="flex-1 bg-primary flex items-center justify-center text-white font-bold text-sm">
                Light Sleep
              </div>
              <div className="flex-1 bg-warning flex items-center justify-center text-white font-bold text-sm">
                Standard Sleep
              </div>
              <div className="flex-1 bg-destructive flex items-center justify-center text-white font-bold text-sm">
                Deep Sleep
              </div>
            </div>

            {/* Scale markers */}
            <div className="flex justify-between mt-4 text-sm text-muted-foreground">
              <span>0</span>
              <span>30</span>
              <span>60</span>
              <span>100</span>
            </div>
          </div>

          {/* Example projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
              <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-2" />
              <div className="text-sm font-semibold text-foreground">Active Project</div>
              <div className="text-xs text-muted-foreground">Score: 15</div>
            </div>
            <div className="text-center p-4 bg-warning/5 rounded-xl border border-warning/10">
              <div className="w-8 h-8 bg-warning rounded-full mx-auto mb-2" />
              <div className="text-sm font-semibold text-foreground">Paused Project</div>
              <div className="text-xs text-muted-foreground">Score: 45</div>
            </div>
            <div className="text-center p-4 bg-destructive/5 rounded-xl border border-destructive/10">
              <div className="w-8 h-8 bg-destructive rounded-full mx-auto mb-2" />
              <div className="text-sm font-semibold text-foreground">Abandoned Project</div>
              <div className="text-xs text-muted-foreground">Score: 85</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SleepStatesSection;