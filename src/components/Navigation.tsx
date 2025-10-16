import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import scraperLogo from "@/assets/scrapesmith-logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Services", path: "/services", type: "link" },
    { name: "Industries", path: "/industries", type: "link" },
    { name: "Scrapers", path: "/#scrapers", type: "hash" },
    { name: "About", path: "/about", type: "link" },
    { name: "Contact", path: "/contact", type: "link" },
  ];

  const handleScrapersClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('scrapers');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById('scrapers');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src={scraperLogo} 
                alt="ScrapeSmith" 
                className="w-10 h-10 rounded-full transition-transform group-hover:scale-110"
              />
              <span className={`text-xl font-bold group-hover:text-primary transition-colors ${
                location.pathname === "/" 
                  ? (isScrolled ? "text-foreground" : "text-white")
                  : "text-foreground"
              }`}>
                ScrapeSmith
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.type === "hash" ? (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={handleScrapersClick}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group cursor-pointer"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </Link>
                )
              ))}
              <Button asChild size="sm" className="ml-4">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-16 bottom-0 w-64 bg-card border-l border-border shadow-xl animate-slide-in-right">
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                link.type === "hash" ? (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={handleScrapersClick}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Button asChild className="w-full mt-4">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
