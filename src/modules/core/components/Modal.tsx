'use client';

import { useEffect, type ReactNode } from 'react';
import clsx from 'clsx';
import { X } from 'lucide-react';
import { Portal } from './Portal';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  onConfirm?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'default' | 'danger';
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  onConfirm,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'default',
}: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby={description ? 'modal-description' : undefined}
      >
        <div
          className={clsx(
            'relative w-full max-w-md rounded-xl bg-card shadow-xl',
            'animate-in fade-in zoom-in-95 duration-200'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-border p-6 pb-4">
            <div className="flex-1">
              <h2 id="modal-title" className="text-xl font-semibold text-foreground">
                {title}
              </h2>
              {description && (
                <p id="modal-description" className="mt-1 text-sm text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="ml-4 rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          {children && <div className="p-6">{children}</div>}

          {/* Footer */}
          {(footer || onConfirm) && (
            <div className="flex justify-end gap-3 border-t border-border p-6 pt-4">
              {footer ? (
                footer
              ) : (
                <>
                  <Button variant="ghost" onClick={onClose}>
                    {cancelLabel}
                  </Button>
                  <Button
                    variant={variant === 'danger' ? 'danger' : 'primary'}
                    onClick={onConfirm}
                  >
                    {confirmLabel}
                  </Button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </Portal>
  );
};

export const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'default',
}: Omit<ModalProps, 'children' | 'footer'>) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={description}
      onConfirm={onConfirm}
      confirmLabel={confirmLabel}
      cancelLabel={cancelLabel}
      variant={variant}
    />
  );
};
