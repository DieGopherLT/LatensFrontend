import clsx from 'clsx';
import { type ReactNode } from 'react';

interface MobileActionButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

const MobileActionButton = ({
  children,
  disabled = false,
  onClick,
}: MobileActionButtonProps) => {
  return (
    <button
      className={clsx(
        'flex w-full items-center space-x-3 rounded-lg px-3 py-2',
        'text-sm font-medium transition-all duration-200',
        'text-muted-foreground hover:bg-muted hover:text-foreground',
        disabled && 'disabled:cursor-not-allowed disabled:opacity-50'
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MobileActionButton;