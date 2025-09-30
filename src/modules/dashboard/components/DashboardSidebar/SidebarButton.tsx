import clsx from 'clsx';
import { type LucideIcon } from 'lucide-react';

interface SidebarButtonProps {
  label: string;
  icon: LucideIcon;
  isCollapsed: boolean;
  onClick: () => void;
  className?: string;
}

const SidebarButton = ({
  label,
  icon: Icon,
  isCollapsed,
  onClick,
  className,
}: SidebarButtonProps) => {
  return (
    <button
      className={clsx(
        'grid items-center gap-3 rounded-lg py-2',
        isCollapsed ? 'px-0' : 'px-3',
        'text-sm font-medium transition-all duration-500',
        'text-muted-foreground hover:bg-muted hover:text-foreground',
        isCollapsed
          ? 'w-full grid-cols-1 grid-rows-1 place-items-center'
          : 'grid-cols-[auto_1fr]',
        className
      )}
      title={isCollapsed ? label : undefined}
      onClick={onClick}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      <span
        className={clsx(
          'overflow-hidden whitespace-nowrap transition-all duration-500',
          isCollapsed && 'hidden'
        )}
      >
        {label}
      </span>
    </button>
  );
};

export default SidebarButton;