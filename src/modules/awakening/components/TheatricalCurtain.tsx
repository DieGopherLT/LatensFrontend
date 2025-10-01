'use client';

import { useEffect, useState } from 'react';

interface TheatricalCurtainProps {
  isOpen: boolean;
  duration?: number;
  onAnimationComplete?: () => void;
}

const TheatricalCurtain = ({
  isOpen,
  duration = 1200,
  onAnimationComplete,
}: TheatricalCurtainProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [isOpen, duration, onAnimationComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Left curtain */}
      <div
        className="absolute top-0 left-0 h-full w-1/2 bg-background transition-transform"
        style={{
          transform: isOpen ? 'translateX(-100%)' : 'translateX(0)',
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Curtain texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-border opacity-20" />
      </div>

      {/* Right curtain */}
      <div
        className="absolute top-0 right-0 h-full w-1/2 bg-background transition-transform"
        style={{
          transform: isOpen ? 'translateX(100%)' : 'translateX(0)',
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Curtain texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-border opacity-20" />
      </div>

      {/* Center line divider */}
      <div
        className="absolute top-0 left-1/2 h-full w-0.5 bg-border -translate-x-1/2 transition-opacity"
        style={{
          opacity: isOpen ? 0 : 1,
          transitionDuration: `${duration / 2}ms`,
          transitionDelay: isOpen ? '0ms' : `${duration / 2}ms`,
        }}
      />
    </div>
  );
};

export default TheatricalCurtain;
