'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

interface ProgressBarProps {
  percentage: number;
  color: string;
  delay?: number;
}

const ProgressBar = ({ percentage, color, delay = 0 }: ProgressBarProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
      <div
        className={clsx('h-full rounded-full transition-all duration-700 ease-out', color)}
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ProgressBar;
