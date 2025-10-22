'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { CheckSquare, Archive } from 'lucide-react';
import { Button, ConfirmModal, useToast } from '@/modules/core';

interface BulkActionBarProps {
  selectedCount: number;
  onCancel: () => void;
  onArchive: () => Promise<void>;
}

const BulkActionBar = ({ selectedCount, onCancel, onArchive }: BulkActionBarProps) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isArchiving, setIsArchiving] = useState(false);
  const { showToast } = useToast();

  if (selectedCount === 0) {
    return null;
  }

  const handleArchiveClick = () => {
    setIsConfirmModalOpen(true);
  };

  const handleConfirmArchive = async () => {
    setIsConfirmModalOpen(false);
    setIsArchiving(true);

    showToast({
      type: 'info',
      message: 'Moving repositories...',
      duration: 2000,
    });

    try {
      await onArchive();

      showToast({
        type: 'success',
        message: `${selectedCount} ${selectedCount === 1 ? 'repository' : 'repositories'} archived`,
        duration: 3000,
      });
    } catch (error) {
      showToast({
        type: 'error',
        message: 'Failed to archive repositories',
        duration: 4000,
      });
    } finally {
      setIsArchiving(false);
    }
  };

  return (
    <>
      <div
        className={clsx(
          'fixed bottom-6 left-1/2 z-50 -translate-x-1/2',
          'w-full max-w-[600px] px-4 md:px-0',
          'animate-in slide-in-from-bottom-4 fade-in duration-300 ease-out'
        )}
      >
        <div className="rounded-xl border border-border bg-card px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Selection count */}
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <CheckSquare className="h-4 w-4" />
              <span>
                {selectedCount} {selectedCount === 1 ? 'repository' : 'repositories'} selected
              </span>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={onCancel} disabled={isArchiving}>
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={handleArchiveClick}
                disabled={isArchiving}
                icon={<Archive className="h-4 w-4" />}
              >
                Move to Archived
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={handleConfirmArchive}
        title={`Archive ${selectedCount} ${selectedCount === 1 ? 'repository' : 'repositories'}?`}
        description="These repositories will be moved to your archived list. You can restore them later from the archived section."
        confirmLabel="Archive"
        cancelLabel="Cancel"
        variant="default"
      />
    </>
  );
};

export default BulkActionBar;
