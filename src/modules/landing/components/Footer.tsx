import { Coffee, Github, Heart } from 'lucide-react';
import { footerLinks } from '../constants/footer';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand section */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left lg:col-span-5">
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <div className="sleep-light-decoration h-4 w-4 rounded-full bg-background" />
              </div>
              <span className="text-2xl font-bold text-foreground">Latens</span>
            </div>

            <p className="mb-6 max-w-md leading-relaxed text-muted-foreground">
              Awakening sleeping projects with intelligent analysis and contextual recovery. Get
              back to productive development in minutes, not hours.
            </p>

            <div className="flex flex-col items-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
              <a
                aria-label="GitHub"
                className="group interactive-glow rounded-lg bg-muted p-2 text-muted-foreground transition-all duration-300 hover:scale-110 hover:rotate-6 hover:bg-muted/80 hover:text-foreground hover:shadow-lg hover:shadow-primary/20"
                href="https://github.com/latens"
              >
                <Github className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
              </a>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="animate-gentle-bounce h-4 w-4 fill-current text-destructive" />
                <span>and</span>
                <Coffee className="h-4 w-4 cursor-pointer text-accent transition-transform duration-300 hover:scale-125" />
              </div>
            </div>
          </div>

          {/* Links sections */}
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3 md:text-left lg:col-span-7">
            <div>
              <h3 className="mb-4 text-sm font-bold tracking-wide text-foreground uppercase">
                Product
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      href={link.href}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold tracking-wide text-foreground uppercase">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      href={link.href}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold tracking-wide text-foreground uppercase">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      href={link.href}
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
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Latens. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span className="flex items-center space-x-2">
                <div className="sleep-light-decoration h-2 w-2 rounded-full bg-primary" />
                <span>Status: Fully Awake</span>
              </span>

              <div className="hidden h-4 w-px bg-border md:block" />

              <span>Built with Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;