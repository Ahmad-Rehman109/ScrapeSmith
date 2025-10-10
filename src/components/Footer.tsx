import { Link } from "react-router-dom";
import { Github, Mail } from "lucide-react";
import scraperLogo from "@/assets/scrapesmith-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                  src={scraperLogo} 
                  alt="ScrapeSmith" 
                  className="w-10 h-10 rounded-full"
                />
              <span className="text-xl font-bold">ScrapeSmith</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Enterprise web scraping solutions. Production-ready scrapers deployed on Apify.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Custom Scrapers
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  API Integration
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Data Pipeline
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Scrapers */}
          <div>
            <h3 className="font-semibold mb-4">Scrapers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/scrapers/youtube" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  YouTube Scraper
                </Link>
              </li>
              <li>
                <Link to="/scrapers/google-maps" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Google Maps
                </Link>
              </li>
              <li>
                <Link to="/scrapers/airbnb" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Airbnb Scraper
                </Link>
              </li>
              <li>
                <Link to="/scrapers/zillow" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Zillow Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://apify.com/scrapesmith" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Apify Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/60">
              © {currentYear} ScrapeSmith. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="mailto:scrapesmith01@gmail.com"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/ScrapeSmith"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
