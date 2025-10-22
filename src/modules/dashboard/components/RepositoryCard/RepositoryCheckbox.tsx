'use client';

import clsx from 'clsx';
import { Checkbox } from '@/modules/core';

interface RepositoryCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  repoId: string;
  repoName: string;
  isHovered: boolean;
  selectionMode: boolean;
}

const RepositoryCheckbox = ({
  checked,
  onChange,
  repoId,
  repoName,
  isHovered,
  selectionMode,
}: RepositoryCheckboxProps) => {
  const handleChange = (newChecked: boolean) => {
    onChange(newChecked);
  };

  return (
    <div
      className={clsx(
        'absolute left-4 top-4 z-10 transition-opacity duration-200',
        selectionMode ? 'opacity-100' : isHovered ? 'opacity-100' : 'opacity-0'
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <Checkbox
        checked={checked}
        onChange={handleChange}
        aria-label={`Select ${repoName}`}
      />
    </div>
  );
};

export default RepositoryCheckbox;
