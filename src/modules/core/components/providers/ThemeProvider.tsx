'use client';

import { useEffect } from 'react';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('latens-theme') as 'dawn' | 'midnight' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'midnight' : 'dawn');

    const root = document.documentElement;

    if (initialTheme === 'midnight') {
      root.setAttribute('data-theme', 'midnight');
    } else {
      root.removeAttribute('data-theme');
    }
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;
