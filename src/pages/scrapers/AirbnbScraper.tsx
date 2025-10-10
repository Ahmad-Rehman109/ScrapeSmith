import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Home, TrendingUp, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AirbnbScraper = () => {
  useEffect(() => {
    document.title = "Airbnb Scraper - Property Listings & Pricing Data | ScrapeSmith";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <Badge className="mb-4">Travel & Hospitality</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Airbnb Scraper
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Extract property listings, pricing data, availability calendars, host information, 
                and guest reviews from Airbnb for comprehensive market analysis.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a 
                    href="https://apify.com/scrapesmith/free-airbnb-scrpaer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Try on Apify
                    <ExternalLink className="ml-2" size={18} />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">
                    Request Custom Features
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ideal For</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Home className="text-primary" size={24} />
                    </div>
                    <CardTitle>Property Investors</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Analyze rental yields, occupancy rates, and seasonal pricing trends
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <TrendingUp className="text-primary" size={24} />
                    </div>
                    <CardTitle>Revenue Managers</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Optimize pricing strategies with competitive market intelligence
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <ExternalLink className="text-primary" size={24} />
                    </div>
                    <CardTitle>Market Researchers</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Track supply, demand, and market dynamics across regions
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Key Features</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Complete Property Data</h3>
                    <p className="text-muted-foreground mb-3">
                      Extract all property details including photos, amenities, house rules, 
                      location data, and host profiles.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <span>• Property type & capacity</span>
                      <span>• Nightly rates & fees</span>
                      <span>• Minimum stay requirements</span>
                      <span>• Cancellation policies</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Availability Tracking</h3>
                    <p className="text-muted-foreground">
                      Monitor calendar availability and pricing fluctuations over time to 
                      identify seasonal patterns and optimize your own listings.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Review Analysis</h3>
                    <p className="text-muted-foreground">
                      Collect guest reviews with ratings, dates, and reviewer details for 
                      sentiment analysis and reputation monitoring.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 gradient-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Start extracting Airbnb data today
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Get market insights and competitive intelligence in minutes.
              </p>
              <Button asChild size="lg" variant="secondary">
                <a 
                  href="https://apify.com/scrapesmith/free-airbnb-scrpaer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Get Started Free
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AirbnbScraper;
