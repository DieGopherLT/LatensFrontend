'use client';

import { useToast } from '../../contexts/ToastContext';
import { Toast } from './Toast';

export const ToastContainer = () => {
  const { toasts, hideToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div
      aria-live="polite"
      aria-atomic="false"
      className="fixed bottom-4 left-1/2 z-[9999] flex w-full max-w-sm -translate-x-1/2 flex-col gap-4 px-4 md:left-auto md:right-4 md:top-4 md:translate-x-0"
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={hideToast} />
      ))}
    </div>
  );
};
