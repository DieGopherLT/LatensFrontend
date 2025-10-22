'use client';

import clsx from 'clsx';
import { type ReactNode } from 'react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  type?: 'text' | 'email' | 'password' | 'search';
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  onTrailingIconClick?: () => void;
  'aria-label': string;
  className?: string;
}

export const Input = ({
  value,
  onChange,
  placeholder,
  disabled = false,
  type = 'text',
  icon,
  trailingIcon,
  onTrailingIconClick,
  'aria-label': ariaLabel,
  className,
}: InputProps) => {
  return (
    <div className={clsx('relative', className)}>
      {icon && (
        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {icon}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        aria-label={ariaLabel}
        className={clsx(
          'w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground',
          'placeholder:text-muted-foreground/60',
          'transition-colors duration-200',
          'focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
          'disabled:cursor-not-allowed disabled:opacity-50',
          icon && 'pl-10',
          trailingIcon && 'pr-10'
        )}
      />
      {trailingIcon && (
        <button
          type="button"
          onClick={onTrailingIconClick}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          aria-label="Clear input"
        >
          {trailingIcon}
        </button>
      )}
    </div>
  );
};
