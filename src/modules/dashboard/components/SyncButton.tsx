'use client';

import { RefreshCw } from 'lucide-react';
import clsx from 'clsx';

interface SyncButtonProps {
  onSync: () => void;
  isSyncing?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const SyncButton = ({
  onSync,
  isSyncing = false,
  variant = 'secondary',
  size = 'md',
  showText = true,
  className = '',
}: SyncButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      case 'ghost':
        return 'btn-ghost';
      default:
        return 'btn-secondary';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'md':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-6 py-3 text-base';
      default:
        return 'px-4 py-2 text-sm';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 'h-3 w-3';
      case 'md':
        return 'h-4 w-4';
      case 'lg':
        return 'h-5 w-5';
      default:
        return 'h-4 w-4';
    }
  };

  return (
    <button
      className={clsx(
        getVariantClasses(),
        getSizeClasses(),
        'flex items-center space-x-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'transition-all duration-200',
        className
      )}
      disabled={isSyncing}
      title={isSyncing ? 'Syncing repositories...' : 'Sync repositories from GitHub'}
      onClick={onSync}
    >
      <RefreshCw className={clsx(getIconSize(), { 'animate-spin': isSyncing })} />
      {showText && (
        <span className="whitespace-nowrap">
          {isSyncing ? 'Syncing...' : 'Sync Repos'}
        </span>
      )}
    </button>
  );
};

export default SyncButton;