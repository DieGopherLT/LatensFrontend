import { Github, Heart, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Sleep States', href: '#sleep-states' },
      { name: 'Pricing', href: '#pricing' }
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'GitHub', href: 'https://github.com/latens' },
      { name: 'Blog', href: '/blog' }
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Contact', href: '/contact' }
    ]
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-background rounded-full sleep-light-decoration" />
              </div>
              <span className="text-2xl font-bold text-foreground">Latens</span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Awakening sleeping projects with intelligent analysis and contextual recovery. 
              Get back to productive development in minutes, not hours.
            </p>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/latens"
                className="p-2 bg-muted hover:bg-muted/80 rounded-lg text-muted-foreground hover:text-foreground transition-all duration-300 group hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-primary/20 interactive-glow"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
              </a>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-destructive fill-current animate-gentle-bounce" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-accent hover:scale-125 transition-transform duration-300 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Links sections */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
                Product
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Latens. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full sleep-light-decoration" />
                <span>Status: Fully Awake</span>
              </span>
              
              <div className="hidden md:block w-px h-4 bg-border" />
              
              <span>
                Built with Next.js & Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;