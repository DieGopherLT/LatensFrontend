'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

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
      className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all duration-200 group"
      aria-label={`Switch to ${theme === 'dawn' ? 'midnight' : 'dawn'} theme`}
      title={`Switch to ${theme === 'dawn' ? 'midnight' : 'dawn'} theme`}
    >
{theme === 'dawn' ? (
        <Sun className="w-5 h-5 transform transition-transform duration-300 group-hover:rotate-180" />
      ) : (
        <Moon className="w-5 h-5 transform transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;