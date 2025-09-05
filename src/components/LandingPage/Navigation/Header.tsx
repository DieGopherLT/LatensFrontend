'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import GitHubAuthButton from './GitHubAuthButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How it works' },
    { href: '#sleep-states', label: 'Sleep States' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-background rounded-full sleep-light-decoration" />
            </div>
            <span className="text-xl font-bold text-foreground">Latens</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <GitHubAuthButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${
                  isMenuOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium px-2 py-1"
                >
                  {label}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <GitHubAuthButton />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;