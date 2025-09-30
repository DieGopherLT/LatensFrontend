'use client';

import { useState, useRef, useEffect } from 'react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { LogOut, Settings, User, ChevronDown } from 'lucide-react';

interface UserMenuProps {
  session: Session;
}

const UserMenu = ({ session }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    await signOut({ redirectTo: '/' });
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-lg p-2 transition-colors hover:bg-muted"
      >
        {/* Avatar Image */}
        <div className="relative">
          <img
            src={session.user.avatarUrl}
            alt={session.user.name || session.user.username}
            className="h-8 w-8 rounded-full border-2 border-border"
          />
          <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background bg-success" />
        </div>

        {/* Username (hidden on mobile) */}
        <span className="hidden text-sm font-medium text-foreground md:inline">
          {session.user.username}
        </span>

        {/* Chevron */}
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="animate-scale-in absolute right-0 top-full mt-2 w-64 rounded-lg border border-border bg-card shadow-lg">
          {/* User Info */}
          <div className="border-b border-border p-4">
            <div className="flex items-center space-x-3">
              <img
                src={session.user.avatarUrl}
                alt={session.user.name || session.user.username}
                className="h-10 w-10 rounded-full border-2 border-border"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {session.user.name || session.user.username}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  @{session.user.username}
                </p>
                {session.user.email && (
                  <p className="text-xs text-muted-foreground truncate">
                    {session.user.email}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            <button
              onClick={() => {
                setIsOpen(false);
                // TODO: Navigate to profile page
              }}
              className="flex w-full items-center space-x-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
            >
              <User className="h-4 w-4 text-muted-foreground" />
              <span>Profile</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                // TODO: Navigate to settings page
              }}
              className="flex w-full items-center space-x-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
            >
              <Settings className="h-4 w-4 text-muted-foreground" />
              <span>Settings</span>
            </button>

            <hr className="my-2 border-border" />

            <button
              onClick={handleSignOut}
              className="flex w-full items-center space-x-3 rounded-md px-3 py-2 text-sm text-destructive transition-colors hover:bg-destructive/10"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;