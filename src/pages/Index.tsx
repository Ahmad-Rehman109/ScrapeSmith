import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Scrapers } from "@/components/Scrapers";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "ScrapeSmith - Enterprise Web Scraping Solutions | Apify Scrapers";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Scrapers />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
