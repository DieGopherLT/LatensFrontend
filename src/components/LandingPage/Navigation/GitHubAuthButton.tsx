'use client';

import { Github, Loader2 } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

interface GitHubAuthButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const GitHubAuthButton = ({ variant = 'primary', size = 'md' }: GitHubAuthButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);

    try {
      await signIn('github', {
        callbackUrl: '/dashboard', // Redirect to dashboard after successful login
      });
    } catch (error) {
      console.error('Sign in error:', error);
      setIsLoading(false);
    }
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const buttonClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button
      onClick={handleSignIn}
      disabled={isLoading}
      className={` ${buttonClasses} ${sizeClasses[size]} group inline-flex items-center space-x-2 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50`}
      aria-label="Sign in with GitHub"
    >
      {isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
      )}
      <span>{isLoading ? 'Signing in...' : 'Sign in with GitHub'}</span>
    </button>
  );
};

export default GitHubAuthButton;
