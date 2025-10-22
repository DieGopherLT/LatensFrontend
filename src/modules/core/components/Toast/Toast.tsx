'use client';

import { CheckCircle, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';
import clsx from 'clsx';

import type { ToastConfig } from '../../contexts/ToastContext';

interface ToastProps {
  toast: ToastConfig;
  onClose: (id: string) => void;
}

const toastStyles = {
  success: 'bg-success/10 border-success text-success',
  error: 'bg-destructive/10 border-destructive text-destructive',
  info: 'bg-info/10 border-info text-info',
  warning: 'bg-warning/10 border-warning text-warning',
};

const ToastIcon = ({ type }: { type: ToastConfig['type'] }) => {
  const iconClass = 'h-5 w-5 flex-shrink-0';

  switch (type) {
    case 'success':
      return <CheckCircle className={iconClass} />;
    case 'error':
      return <AlertCircle className={iconClass} />;
    case 'info':
      return <Info className={iconClass} />;
    case 'warning':
      return <AlertTriangle className={iconClass} />;
  }
};

export const Toast = ({ toast, onClose }: ToastProps) => {
  const handleClose = () => {
    onClose(toast.id);
  };

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={clsx(
        'flex w-full items-start gap-3 rounded-xl border-l-4 p-4',
        'shadow-[0_8px_24px_rgba(0,0,0,0.15)]',
        'animate-slide-in',
        toastStyles[toast.type]
      )}
    >
      <ToastIcon type={toast.type} />

      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{toast.message}</p>
        {toast.action && (
          <button
            onClick={toast.action.onClick}
            className="mt-2 text-sm font-semibold underline transition-opacity hover:opacity-80"
          >
            {toast.action.label}
          </button>
        )}
      </div>

      <button
        onClick={handleClose}
        aria-label="Close toast"
        className="flex-shrink-0 rounded p-1 transition-colors hover:bg-foreground/10"
      >
        <X className="h-4 w-4 text-foreground" />
      </button>
    </div>
  );
};
