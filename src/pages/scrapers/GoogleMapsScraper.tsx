import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, Star, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const GoogleMapsScraper = () => {
  useEffect(() => {
    document.title = "Google Maps Scraper - Business Listings & Reviews | ScrapeSmith";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <Badge className="mb-4">Business Intelligence</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Google Maps Scraper
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Extract business listings, reviews, ratings, photos, and contact information 
                from Google Maps for lead generation and market research.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a 
                    href="https://apify.com/scrapesmith/google-maps-actor" 
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
              <h2 className="text-3xl font-bold mb-6">Perfect For</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 mx-auto">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <CardTitle>Lead Generation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Build targeted prospect lists with verified business contact information
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 mx-auto">
                      <Star className="text-primary" size={24} />
                    </div>
                    <CardTitle>Market Research</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Analyze competitor locations, pricing, and customer sentiment
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 mx-auto">
                      <ExternalLink className="text-primary" size={24} />
                    </div>
                    <CardTitle>Local SEO</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Monitor business rankings and optimize local search presence
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Data Fields Extracted</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Business name & category",
                  "Full address & coordinates",
                  "Phone number & website",
                  "Operating hours",
                  "Star ratings & review count",
                  "Customer reviews with dates",
                  "Business photos",
                  "Popular times data",
                  "Price range indicators",
                  "Claimed/unclaimed status",
                ].map((field) => (
                  <Card key={field}>
                    <CardContent className="py-3 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-primary mr-3" />
                      <span className="text-sm">{field}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 gradient-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Extract Google Maps data effortlessly
              </h2>
              <p className="text-xl text-white/80 mb-8">
                No coding required. Get started in minutes with our production-ready scraper.
              </p>
              <Button asChild size="lg" variant="secondary">
                <a 
                  href="https://apify.com/scrapesmith/google-maps-actor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Try It Free
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

export default GoogleMapsScraper;
