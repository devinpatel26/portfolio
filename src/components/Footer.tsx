
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-display font-bold text-gradient">
              Portfolio
            </a>
            <p className="text-muted-foreground mt-2 text-sm max-w-md">
              Crafting beautiful digital experiences with meticulous attention to detail and a focus on user experience.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-4">
              {[
                { name: "GitHub", link: "https://github.com/devinpatel26" },
                { name: "LinkedIn", link: "https://www.linkedin.com/in/devin-patel-1b3464290/" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}

            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground flex items-center">
            &copy; {currentYear} Portfolio. Built with <Heart className="h-3 w-3 mx-1 text-pink" /> and Devin.
          </p>

          <div className="mt-4 md:mt-0">
            <a
              href="#home"
              className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
