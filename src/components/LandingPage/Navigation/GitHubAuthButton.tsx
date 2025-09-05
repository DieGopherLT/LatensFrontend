'use client';

import { useState } from 'react';
import { Github, Loader2 } from 'lucide-react';

interface GitHubAuthButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const GitHubAuthButton = ({ variant = 'primary', size = 'md' }: GitHubAuthButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      console.log('GitHub authentication will be implemented with Auth.js');
    }, 1000);
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const buttonClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button
      onClick={handleSignIn}
      disabled={isLoading}
      className={`
        ${buttonClasses} 
        ${sizeClasses[size]}
        inline-flex items-center space-x-2 
        transition-all duration-200 
        disabled:opacity-50 disabled:cursor-not-allowed
        group
      `}
      aria-label="Sign in with GitHub"
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
      )}
      <span>{isLoading ? 'Signing in...' : 'Sign in with GitHub'}</span>
    </button>
  );
};

export default GitHubAuthButton;