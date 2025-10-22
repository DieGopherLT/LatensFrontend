'use client';

import { Check } from 'lucide-react';
import clsx from 'clsx';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  'aria-label': string;
}

export const Checkbox = ({ checked, onChange, disabled = false, 'aria-label': ariaLabel }: CheckboxProps) => {
  const handleClick = () => {
    if (disabled) return;
    onChange(!checked);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      onChange(!checked);
    }
  };

  return (
    <div
      role="checkbox"
      aria-checked={checked}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={clsx(
        'inline-flex cursor-pointer items-center justify-center transition-all duration-200 ease-out',
        'p-[12px]', // 44px touch target (20px + 12px padding on each side)
        disabled && 'cursor-not-allowed opacity-50'
      )}
    >
      <div
        className={clsx(
          'flex h-5 w-5 items-center justify-center rounded transition-all duration-200',
          'border-2',
          checked && !disabled && 'border-primary bg-primary',
          !checked && !disabled && 'border-border bg-transparent hover:border-primary',
          disabled && checked && 'border-muted-foreground bg-muted-foreground',
          disabled && !checked && 'border-muted-foreground bg-transparent'
        )}
      >
        {checked && <Check className="h-3 w-3 stroke-[3] text-white" />}
      </div>
    </div>
  );
};
