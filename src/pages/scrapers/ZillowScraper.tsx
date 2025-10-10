import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Building, DollarSign, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ZillowScraper = () => {
  useEffect(() => {
    document.title = "Zillow Scraper - Property Data & Market Valuations | ScrapeSmith";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <Badge className="mb-4">Real Estate</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Zillow Properties Scraper
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Extract property details, Zestimates, market trends, agent information, 
                and historical pricing data from Zillow for real estate intelligence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a 
                    href="https://apify.com/scrapesmith/free-zillow-scraper" 
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
              <h2 className="text-3xl font-bold mb-6">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Building className="text-primary" size={24} />
                    </div>
                    <CardTitle>Investment Research</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Identify undervalued properties and emerging markets with comprehensive data
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <DollarSign className="text-primary" size={24} />
                    </div>
                    <CardTitle>Valuation Models</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Build accurate pricing models with historical sale and valuation data
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <ExternalLink className="text-primary" size={24} />
                    </div>
                    <CardTitle>Lead Generation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Find property owners and agents for outreach and partnerships
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Extracted Data Fields</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Property Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <div>• Address & neighborhood</div>
                    <div>• Bedrooms, bathrooms, square footage</div>
                    <div>• Property type & year built</div>
                    <div>• Lot size & features</div>
                    <div>• Photos & virtual tours</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Financial Data</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <div>• Current list price</div>
                    <div>• Zestimate valuation</div>
                    <div>• Rental Zestimate</div>
                    <div>• Price history</div>
                    <div>• Tax assessments</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Market Intelligence</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <div>• Days on market</div>
                    <div>• Neighborhood trends</div>
                    <div>• Comparable properties</div>
                    <div>• Walk Score & transit</div>
                    <div>• School district ratings</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Agent Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <div>• Listing agent details</div>
                    <div>• Brokerage information</div>
                    <div>• Agent contact info</div>
                    <div>• Agent ratings & reviews</div>
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
                Power your real estate business with data
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Access comprehensive property data from Zillow in real-time.
              </p>
              <Button asChild size="lg" variant="secondary">
                <a 
                  href="https://apify.com/scrapesmith/free-zillow-scraper" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Scraping
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

export default ZillowScraper;
