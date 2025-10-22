'use client';

import clsx from 'clsx';
import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  'aria-label'?: string;
  className?: string;
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  icon,
  'aria-label': ariaLabel,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variant === 'primary' && [
          'bg-primary text-white hover:bg-primary/90',
          'shadow-sm hover:shadow-md',
        ],
        variant === 'secondary' && [
          'border border-border bg-card text-foreground hover:bg-muted',
        ],
        variant === 'ghost' && [
          'bg-transparent text-foreground hover:bg-muted',
        ],
        variant === 'danger' && [
          'bg-destructive text-white hover:bg-destructive/90',
          'shadow-sm hover:shadow-md',
        ],
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
};
