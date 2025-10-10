import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Building2, ShoppingCart, Megaphone, Plane, Users, Video, GraduationCap } from "lucide-react";

const industries = [
  {
    icon: TrendingUp,
    name: "Investment Research",
    description: "Market intelligence and competitive analysis for investors and analysts",
    solutions: [
      "Real-time market data extraction",
      "Competitor monitoring and analysis",
      "Financial data aggregation",
      "Sentiment analysis from reviews and social media"
    ],
    scrapers: ["YouTube Scraper", "Google Maps Scraper", "TripAdvisor Reviews"]
  },
  {
    icon: Building2,
    name: "PropTech",
    description: "Property data and market insights for real estate technology companies",
    solutions: [
      "Property listings and valuations",
      "Market trend analysis",
      "Neighborhood intelligence",
      "Competitive pricing data"
    ],
    scrapers: ["Zillow Scraper", "Airbnb Scraper", "Google Maps Scraper"]
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce Analytics",
    description: "Product and pricing intelligence for online retailers",
    solutions: [
      "Competitor price monitoring",
      "Product catalog extraction",
      "Review and rating analysis",
      "Market trend identification"
    ],
    scrapers: ["Google Maps Scraper", "TripAdvisor Reviews"]
  },
  {
    icon: Megaphone,
    name: "Digital Marketing",
    description: "Content and audience insights for marketing agencies",
    solutions: [
      "Influencer identification and analysis",
      "Content performance tracking",
      "Audience sentiment analysis",
      "Viral trend monitoring"
    ],
    scrapers: ["YouTube Scraper", "YouTube Shorts Scraper"]
  },
  {
    icon: Plane,
    name: "Travel Intelligence",
    description: "Hospitality and travel data for industry leaders",
    solutions: [
      "Hotel and restaurant review analysis",
      "Pricing and availability tracking",
      "Destination trend monitoring",
      "Competitive benchmarking"
    ],
    scrapers: ["TripAdvisor Reviews", "Airbnb Scraper", "Google Maps Scraper"]
  },
  {
    icon: Users,
    name: "HR Technology",
    description: "Talent and company insights for HR platforms",
    solutions: [
      "Company information gathering",
      "Location and contact data",
      "Business verification",
      "Market presence analysis"
    ],
    scrapers: ["Google Maps Scraper"]
  },
  {
    icon: Video,
    name: "Media & Content",
    description: "Content analysis and trend monitoring for media companies",
    solutions: [
      "Video content analysis",
      "Engagement metrics tracking",
      "Creator performance monitoring",
      "Trending topic identification"
    ],
    scrapers: ["YouTube Scraper", "YouTube Shorts Scraper"]
  },
  {
    icon: GraduationCap,
    name: "Research & Academia",
    description: "Data collection and analysis for research institutions",
    solutions: [
      "Large-scale data collection",
      "Social media analysis",
      "Market research data",
      "Behavioral pattern analysis"
    ],
    scrapers: ["YouTube Scraper", "Google Maps Scraper", "TripAdvisor Reviews"]
  }
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Industry Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tailored web scraping solutions for every industry. Our production-ready scrapers
              power data-driven decisions across multiple verticals.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{industry.name}</CardTitle>
                    <CardDescription className="text-base">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-3">
                        Key Solutions
                      </h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-3">
                        Recommended Scrapers
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.scrapers.map((scraper, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-muted/50 text-xs font-medium rounded-full"
                          >
                            {scraper}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We build custom scraping solutions for any use case. Let's discuss how
              we can help extract the data your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
