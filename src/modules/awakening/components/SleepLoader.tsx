'use client';

import { Moon, Sun, Sunrise } from 'lucide-react';

import { SleepLevel } from '../types/awakening';
import { getSleepColorClasses } from '../utils/sleep';

interface SleepLoaderProps {
  sleepLevel: SleepLevel;
  message?: string;
}

const SleepLoader = ({ sleepLevel, message }: SleepLoaderProps) => {
  const getLoaderIcon = () => {
    const iconProps = { className: 'h-12 w-12' };

    if (sleepLevel === 'light') {
      return <Sunrise {...iconProps} />;
    }

    if (sleepLevel === 'standard') {
      return <Sun {...iconProps} />;
    }

    return <Moon {...iconProps} />;
  };

  const getAnimationClass = () => {
    if (sleepLevel === 'light') {
      return 'animate-sleep-pulse';
    }

    if (sleepLevel === 'standard') {
      return 'animate-sleep-drift';
    }

    return 'animate-sleep-awaken';
  };

  const colorClasses = getSleepColorClasses(sleepLevel);

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Animated icon */}
      <div className={`${colorClasses} ${getAnimationClass()}`}>
        {getLoaderIcon()}
      </div>

      {/* Pulsing rings */}
      <div className="relative h-24 w-24">
        {sleepLevel === 'deep' && (
          <>
            <div
              className="absolute inset-0 rounded-full border-2 border-sleep-deep opacity-75"
              style={{
                animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
              }}
            />
            <div
              className="absolute inset-0 rounded-full border-2 border-sleep-deep opacity-50"
              style={{
                animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                animationDelay: '0.5s',
              }}
            />
          </>
        )}

        {sleepLevel === 'standard' && (
          <div
            className="absolute inset-0 rounded-full border-2 border-sleep-standard opacity-75"
            style={{
              animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
            }}
          />
        )}

        {sleepLevel === 'light' && (
          <div className="absolute inset-0 rounded-full border-2 border-sleep-light opacity-50 animate-gentle-bounce" />
        )}
      </div>

      {/* Loading message */}
      {message && (
        <p className="text-sm text-muted-foreground animate-pulse text-center max-w-xs">
          {message}
        </p>
      )}

      {/* Loading dots */}
      <div className="flex space-x-2">
        <div
          className={`h-2 w-2 rounded-full ${colorClasses}`}
          style={{
            animation: 'bounce 1s infinite',
            animationDelay: '0ms',
          }}
        />
        <div
          className={`h-2 w-2 rounded-full ${colorClasses}`}
          style={{
            animation: 'bounce 1s infinite',
            animationDelay: '150ms',
          }}
        />
        <div
          className={`h-2 w-2 rounded-full ${colorClasses}`}
          style={{
            animation: 'bounce 1s infinite',
            animationDelay: '300ms',
          }}
        />
      </div>
    </div>
  );
};

export default SleepLoader;
