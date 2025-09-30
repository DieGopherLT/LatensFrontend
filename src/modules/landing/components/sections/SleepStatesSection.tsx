import clsx from 'clsx';
import { Bed, Moon, Sun } from 'lucide-react';

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
        'Dependencies up to date',
      ],
      awakening: 'Quick refresh - review recent changes and continue development.',
      icon: <Sun className="h-12 w-12" />,
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
        'Partial context loss',
      ],
      awakening: 'Context recovery - analyze recent state and prioritize next steps.',
      icon: <Moon className="h-12 w-12" />,
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
        'Significant context reconstruction needed',
      ],
      awakening: 'Full recovery - comprehensive analysis and gradual reengagement.',
      icon: <Bed className="h-12 w-12" />,
    },
  ];

  return (
    <section id="sleep-states" className="bg-muted/30 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm text-secondary">
            <div className="sleep-light-decoration mr-2 h-2 w-2 rounded-full bg-secondary" />
            Sleep States
          </div>

          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">
            Understanding Your{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Project&rsquo;s Sleep Depth
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Every dormant project has a unique sleep pattern. Latens identifies the depth of your
            project&rsquo;s slumber to provide the most effective awakening strategy.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {sleepStates.map((state, index) => (
            <div
              key={index}
              className={clsx(
                'rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm',
                'group transition-all duration-700 hover:-translate-y-3 hover:scale-105 hover:bg-card/70',
                'interactive-glow animate-sleep-cascade relative overflow-hidden hover:shadow-2xl',
                {
                  'stagger-100': index === 0,
                  'stagger-200': index === 1,
                  'stagger-300': index === 2,
                }
              )}
            >
              {/* Background animation */}
              <div
                className={`absolute inset-0 opacity-5 ${
                  state.color === 'primary'
                    ? 'sleep-light'
                    : state.color === 'warning'
                      ? 'sleep-standard'
                      : 'sleep-deep'
                }`}
              >
                <div className={`h-full w-full bg-${state.color} rounded-2xl`} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={clsx(
                    'mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border-2 transition-all duration-300',
                    {
                      'border-amber-500/40 bg-amber-500/10 text-amber-600 group-hover:bg-amber-500/20':
                        state.color === 'sleep-light',
                      'border-purple-500/40 bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20':
                        state.color === 'sleep-standard',
                      'border-violet-600/40 bg-violet-600/10 text-violet-600 group-hover:bg-violet-600/20':
                        state.color === 'sleep-deep',
                    }
                  )}
                >
                  {state.icon}
                </div>

                {/* Header */}
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3
                      className={clsx('text-2xl font-bold', {
                        'text-amber-600': state.color === 'sleep-light',
                        'text-purple-500': state.color === 'sleep-standard',
                        'text-violet-600': state.color === 'sleep-deep',
                      })}
                    >
                      {state.name}
                    </h3>
                    <div
                      className={clsx('rounded-full border-2 px-3 py-1 text-sm font-bold', {
                        'border-amber-500/40 bg-amber-500/10 text-amber-600':
                          state.color === 'sleep-light',
                        'border-purple-500/40 bg-purple-500/10 text-purple-500':
                          state.color === 'sleep-standard',
                        'border-violet-600/40 bg-violet-600/10 text-violet-600':
                          state.color === 'sleep-deep',
                      })}
                    >
                      {state.range}
                    </div>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">{state.description}</p>
                </div>

                {/* Characteristics */}
                <div className="mb-6">
                  <h4 className="mb-3 text-sm font-bold tracking-wide text-foreground uppercase">
                    Indicators
                  </h4>
                  <ul className="space-y-2">
                    {state.characteristics.map((char, charIndex) => (
                      <li
                        key={charIndex}
                        className="flex items-start space-x-2 text-sm text-muted-foreground"
                      >
                        <div
                          className={clsx('mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full', {
                            'bg-amber-600': state.color === 'sleep-light',
                            'bg-purple-500': state.color === 'sleep-standard',
                            'bg-violet-600': state.color === 'sleep-deep',
                          })}
                        />
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Awakening strategy */}
                <div
                  className={clsx('rounded-xl border-2 p-4', {
                    'border-amber-500/30 bg-amber-500/5': state.color === 'sleep-light',
                    'border-purple-500/30 bg-purple-500/5': state.color === 'sleep-standard',
                    'border-violet-600/30 bg-violet-600/5': state.color === 'sleep-deep',
                  })}
                >
                  <h4 className="mb-2 text-sm font-bold tracking-wide text-foreground uppercase">
                    Awakening Strategy
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{state.awakening}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sleep Score Visualization */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm">
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-foreground">Sleep Score Spectrum</h3>
            <p className="text-muted-foreground">
              Interactive visualization of how projects transition between sleep states
            </p>
          </div>

          {/* Spectrum bar */}
          <div className="relative">
            <div className="flex h-12 overflow-hidden rounded-2xl border-2 border-border/50 shadow-inner">
              <div className="flex flex-1 items-center justify-center bg-amber-500/70 text-sm font-bold text-white">
                Light Sleep
              </div>
              <div className="flex flex-1 items-center justify-center bg-purple-500/70 text-sm font-bold text-white">
                Standard Sleep
              </div>
              <div className="flex flex-1 items-center justify-center bg-violet-600/70 text-sm font-bold text-white">
                Deep Sleep
              </div>
            </div>

            {/* Scale markers */}
            <div className="mt-4 flex justify-between text-sm text-muted-foreground">
              <span>0</span>
              <span>30</span>
              <span>60</span>
              <span>100</span>
            </div>
          </div>

          {/* Example projects */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="animate-sleep-cascade stagger-100 rounded-xl border-2 border-amber-500/30 bg-amber-500/5 p-4 text-center">
              <div className="mx-auto mb-2 h-8 w-8 rounded-full bg-amber-500" />
              <div className="text-sm font-semibold text-foreground">my-portfolio</div>
              <div className="text-xs text-muted-foreground">
                Score: 15 • Last commit: 1 week ago
              </div>
            </div>
            <div className="animate-sleep-cascade stagger-200 rounded-xl border-2 border-purple-500/30 bg-purple-500/5 p-4 text-center">
              <div className="mx-auto mb-2 h-8 w-8 rounded-full bg-purple-500" />
              <div className="text-sm font-semibold text-foreground">expense-tracker</div>
              <div className="text-xs text-muted-foreground">
                Score: 42 • Last commit: 6 weeks ago
              </div>
            </div>
            <div className="animate-sleep-cascade stagger-300 rounded-xl border-2 border-violet-600/30 bg-violet-600/5 p-4 text-center">
              <div className="mx-auto mb-2 h-8 w-8 rounded-full bg-violet-600" />
              <div className="text-sm font-semibold text-foreground">crypto-dashboard</div>
              <div className="text-xs text-muted-foreground">
                Score: 89 • Last commit: 8 months ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SleepStatesSection;
