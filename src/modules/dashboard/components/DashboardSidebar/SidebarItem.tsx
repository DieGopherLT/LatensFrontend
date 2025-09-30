import clsx from 'clsx';
import Link from 'next/link';
import { type LucideIcon } from 'lucide-react';

interface SidebarItemProps {
  name: string;
  href: string;
  icon: LucideIcon;
  isActive?: boolean;
  isCollapsed: boolean;
  isExternal?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({
  name,
  href,
  icon: Icon,
  isActive = false,
  isCollapsed,
  isExternal = false,
  onClick,
}: SidebarItemProps) => {
  const className = clsx(
    'grid items-center gap-3 rounded-lg py-2',
    isCollapsed ? 'px-0' : 'px-3',
    'text-sm font-medium transition-all duration-500',
    isActive
      ? 'bg-primary/10 text-primary'
      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
    isCollapsed
      ? 'grid-cols-1 grid-rows-1 place-items-center'
      : 'grid-cols-[auto_1fr]'
  );

  const content = (
    <>
      <Icon className="h-5 w-5 flex-shrink-0" />
      <span
        className={clsx(
          'overflow-hidden whitespace-nowrap transition-all duration-500',
          isCollapsed && 'hidden'
        )}
      >
        {name}
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a
        className={className}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        title={isCollapsed ? name : undefined}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      className={className}
      href={href}
      title={isCollapsed ? name : undefined}
      onClick={onClick}
    >
      {content}
    </Link>
  );
};

export default SidebarItem;