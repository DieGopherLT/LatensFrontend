'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'dawn' | 'midnight'>('dawn');

  useEffect(() => {
    const savedTheme = localStorage.getItem('latens-theme') as 'dawn' | 'midnight' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'midnight' : 'dawn');

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: 'dawn' | 'midnight') => {
    const root = document.documentElement;

    if (newTheme === 'midnight') {
      root.setAttribute('data-theme', 'midnight');
    } else {
      root.removeAttribute('data-theme');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dawn' ? 'midnight' : 'dawn';
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('latens-theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="group rounded-lg bg-muted p-2 text-muted-foreground transition-all duration-200 hover:bg-muted/80 hover:text-foreground"
      aria-label={`Switch to ${theme === 'dawn' ? 'midnight' : 'dawn'} theme`}
      title={`Switch to ${theme === 'dawn' ? 'midnight' : 'dawn'} theme`}
    >
      {theme === 'dawn' ? (
        <Sun className="h-5 w-5 transform transition-transform duration-300 group-hover:rotate-180" />
      ) : (
        <Moon className="h-5 w-5 transform transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
