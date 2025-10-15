import { ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const scrapers = [
  {
    id: "youtube",
    title: "YouTube Scraper",
    category: "Social Media",
    description: "Extract videos, channels, playlists, comments, and transcripts from YouTube with real-time engagement metrics.",
    features: ["Video metadata", "Channel analytics", "Comments", "Transcripts"],
    apifyUrl: "https://apify.com/scrapesmith/free-youtube-scraper",
  },
  {
    id: "youtube-shorts",
    title: "YouTube Shorts Scraper",
    category: "Social Media",
    description: "Specialized scraper for YouTube Shorts with creator insights and trending metrics.",
    features: ["Shorts videos", "Creator data", "Viral trends", "Engagement"],
    apifyUrl: "https://apify.com/scrapesmith/free-youtube-shorts-scraper",
  },
  {
    id: "tiktok",
    title: "TikTok Profile Scraper",
    category: "Social Media",
    description: "Extract TikTok profile data, videos, follower counts, and engagement metrics for social analysis.",
    features: ["Profile data", "Videos", "Followers", "Engagement"],
    apifyUrl: "https://apify.com/scrapesmith/free-tiktok-profile-scraper",
  },
  {
    id: "instagram",
    title: "Instagram Profile Scraper",
    category: "Social Media",
    description: "Profile information, posts, followers, and engagement data from Instagram for marketing insights.",
    features: ["Profile info", "Posts", "Followers", "Analytics"],
    apifyUrl: "https://apify.com/scrapesmith/free-instagram-profile-scraper",
  },
  {
    id: "google-maps",
    title: "Google Maps Scraper",
    category: "Business Intelligence",
    description: "Extract business listings, reviews, ratings, photos, and contact information from Google Maps.",
    features: ["Business listings", "Reviews & ratings", "Photos", "Contact info"],
    apifyUrl: "https://apify.com/scrapesmith/google-maps-actor",
  },
  {
    id: "airbnb",
    title: "Airbnb Scraper",
    category: "Travel",
    description: "Property listings, pricing, availability, host data, and reviews from Airbnb for market analysis.",
    features: ["Property listings", "Pricing data", "Availability", "Reviews"],
    apifyUrl: "https://apify.com/scrapesmith/free-airbnb-scrpaer",
  },
  {
    id: "tripadvisor",
    title: "TripAdvisor Reviews",
    category: "Travel",
    description: "Hotel and restaurant reviews, ratings, and traveler photos for reputation management.",
    features: ["Reviews", "Ratings", "Photos", "Rankings"],
    apifyUrl: "https://apify.com/scrapesmith/free-tripadvisor-reviews-scraper",
  },
  {
    id: "zillow",
    title: "Zillow Properties",
    category: "Real Estate",
    description: "Property details, valuations, market trends, and agent information from Zillow.",
    features: ["Property data", "Valuations", "Market trends", "Agent info"],
    apifyUrl: "https://apify.com/scrapesmith/free-zillow-scraper",
  },
];

export const Scrapers = () => {
  return (
    <section id="scrapers" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Production Scrapers
          </h2>
          <p className="text-xl text-muted-foreground">
            Battle-tested scrapers deployed on Apify, serving millions of requests daily. 
            Ready to use in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {scrapers.slice(0, 8).map((scraper, index) => (
            <Card
              key={scraper.id}
              className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-primary/50 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {scraper.category}
                  </Badge>
                  <a
                    href={scraper.apifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View on Apify"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {scraper.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {scraper.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {scraper.features.map((feature) => (
                    <div key={feature} className="flex items-center text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-border">
                  <Button asChild variant="ghost" className="w-full justify-between group/btn">
                    <Link to={`/scrapers/${scraper.id}`}>
                      Learn more
                      <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom scraper for your specific use case?
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Request Custom Scraper
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
