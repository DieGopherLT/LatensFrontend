'use client';

import clsx from 'clsx';

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
  variant?: 'primary' | 'sleep-light' | 'sleep-standard' | 'sleep-deep';
}

const activeVariantStyles = {
  primary: 'bg-primary text-white',
  'sleep-light': 'bg-sleep-light text-white',
  'sleep-standard': 'bg-sleep-standard text-white',
  'sleep-deep': 'bg-sleep-deep text-white',
};

export const FilterChip = ({ label, active, onClick, variant = 'primary' }: FilterChipProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'h-9 rounded-full px-4 text-sm font-medium transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        active && activeVariantStyles[variant],
        !active && 'border border-border bg-transparent text-foreground hover:bg-muted'
      )}
    >
      {label}
    </button>
  );
};
