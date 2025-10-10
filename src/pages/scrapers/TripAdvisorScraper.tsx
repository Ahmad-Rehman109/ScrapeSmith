import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, MessageSquare, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TripAdvisorScraper = () => {
  useEffect(() => {
    document.title = "TripAdvisor Reviews Scraper - Hotel & Restaurant Data | ScrapeSmith";
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
                TripAdvisor Reviews Scraper
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Extract hotel and restaurant reviews, ratings, traveler photos, and rankings 
                from TripAdvisor for reputation management and competitive analysis.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a 
                    href="https://apify.com/scrapesmith/free-tripadvisor-reviews-scraper" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Try on Apify
                    <ExternalLink className="ml-2" size={18} />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Request Custom Features</Link>
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
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Star className="text-primary" size={24} />
                    </div>
                    <CardTitle>Reputation Management</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Monitor reviews and respond to guest feedback proactively
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <MessageSquare className="text-primary" size={24} />
                    </div>
                    <CardTitle>Sentiment Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Analyze guest sentiment and identify improvement areas
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <ExternalLink className="text-primary" size={24} />
                    </div>
                    <CardTitle>Competitive Intelligence</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Track competitor ratings and compare service quality
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What You Get</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Complete Review Data</h3>
                    <p className="text-muted-foreground mb-3">
                      Extract full review text, ratings (overall and category-specific), 
                      reviewer details, and visit dates.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <span>• Review title & text</span>
                      <span>• Overall rating (1-5)</span>
                      <span>• Category ratings</span>
                      <span>• Reviewer profile</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Ranking Information</h3>
                    <p className="text-muted-foreground">
                      Track your property's ranking within its category and location. 
                      Monitor changes over time to measure the impact of improvements.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Traveler Photos</h3>
                    <p className="text-muted-foreground">
                      Access user-generated photos to see how guests really experience 
                      your property or competitors.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Multi-Location Support</h3>
                    <p className="text-muted-foreground">
                      Scrape reviews for multiple properties simultaneously. Perfect for 
                      hotel chains and restaurant groups.
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
                Understand what guests are saying
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Extract TripAdvisor reviews at scale for actionable insights.
              </p>
              <Button asChild size="lg" variant="secondary">
                <a 
                  href="https://apify.com/scrapesmith/free-tripadvisor-reviews-scraper" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Extracting
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

export default TripAdvisorScraper;
