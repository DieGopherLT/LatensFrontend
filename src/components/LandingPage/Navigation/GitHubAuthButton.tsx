'use client';

import { useState } from 'react';
import { Github, Loader2 } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface GitHubAuthButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const GitHubAuthButton = ({ variant = 'primary', size = 'md' }: GitHubAuthButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignIn = async () => {
    if (session) {
      // If already authenticated, go to success callback to sync with backend
      router.push('/api/auth/callback/success');
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await signIn('github', { 
        redirect: false // We'll handle redirect manually
      });
      
      if (result?.ok) {
        // After successful sign in, redirect to our success callback
        router.push('/api/auth/callback/success');
      } else {
        console.error('Authentication failed:', result?.error);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setIsLoading(false);
    }
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