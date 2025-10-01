'use client';

import { CheckCircle2, Circle, Loader2 } from 'lucide-react';

import { AwakeningPhase } from '../types/awakening';

interface AwakeningPhasesProps {
  phases: AwakeningPhase[];
  currentPhase: number;
}

const AwakeningPhases = ({ phases, currentPhase }: AwakeningPhasesProps) => {
  const getPhaseIcon = (phase: AwakeningPhase, index: number) => {
    const iconProps = { className: 'h-5 w-5' };

    if (phase.status === 'completed') {
      return <CheckCircle2 {...iconProps} className="text-success" />;
    }

    if (phase.status === 'in_progress') {
      return <Loader2 {...iconProps} className="text-primary animate-spin" />;
    }

    return <Circle {...iconProps} className="text-muted-foreground" />;
  };

  const getPhaseOpacity = (index: number) => {
    if (index < currentPhase) return 'opacity-100';
    if (index === currentPhase) return 'opacity-100';
    return 'opacity-40';
  };

  return (
    <div className="w-full max-w-2xl space-y-4">
      {phases.map((phase, index) => (
        <div
          key={phase.id}
          className={`
            flex items-start space-x-4 p-4 rounded-lg border border-border
            bg-card transition-all duration-500
            ${getPhaseOpacity(index)}
            ${index === currentPhase ? 'shadow-lg scale-105' : ''}
            animate-slide-up
          `}
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          {/* Icon */}
          <div className="flex-shrink-0 mt-0.5">
            {getPhaseIcon(phase, index)}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-foreground mb-1">
              {phase.title}
            </h3>
            <p className="text-xs text-muted-foreground">{phase.message}</p>

            {/* Progress bar for active phase */}
            {phase.status === 'in_progress' && (
              <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${phase.progress}%` }}
                />
              </div>
            )}
          </div>

          {/* Phase number */}
          <div className="flex-shrink-0 text-xs font-medium text-muted-foreground">
            {index + 1}/{phases.length}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AwakeningPhases;
