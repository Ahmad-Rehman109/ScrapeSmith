import { Youtube, MapPin, Building2, ShoppingCart, Plane, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Youtube,
    title: "Social Media",
    description: "Extract data from YouTube, TikTok, Instagram, and other social platforms.",
    features: ["Video metadata", "Engagement metrics", "Comments & transcripts"],
  },
  {
    icon: Building2,
    title: "Business Intelligence",
    description: "Gather company data, reviews, and competitive intelligence at scale.",
    features: ["Google Maps data", "Business listings", "Customer reviews"],
  },
  {
    icon: MapPin,
    title: "Real Estate",
    description: "Property listings, valuations, and market trends from major platforms.",
    features: ["Zillow properties", "Market analysis", "Investment insights"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Product data, pricing, and inventory tracking across marketplaces.",
    features: ["Price monitoring", "Product catalogs", "Competitor analysis"],
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Hotel prices, reviews, and availability from booking platforms.",
    features: ["Airbnb listings", "TripAdvisor reviews", "Pricing trends"],
  },
  {
    icon: TrendingUp,
    title: "Market Data",
    description: "Financial data, market trends, and economic indicators.",
    features: ["Stock data", "Market research", "Trend analysis"],
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Data extraction for every industry
          </h2>
          <p className="text-xl text-muted-foreground">
            Production-ready scrapers covering 6 major verticals. Built for scale, 
            maintained for reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all services
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
