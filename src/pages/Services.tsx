import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code2, Database, Cog, HeadphonesIcon, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    document.title = "Services - ScrapeSmith Web Scraping Solutions";
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Database,
      title: "Ready-to-Use Scrapers",
      description: "Access our library of production-ready scrapers deployed on Apify. Start extracting data in minutes with battle-tested solutions.",
      features: [
        "6 production scrapers covering major platforms",
        "Real-time data extraction",
        "99.9% uptime guarantee",
        "Automatic scaling",
        "Pay-per-use pricing",
      ],
      cta: "View Scrapers",
      ctaLink: "/#scrapers",
    },
    {
      icon: Code2,
      title: "Custom Scraper Development",
      description: "Need something specific? Our team builds custom scrapers tailored to your exact requirements, deployed on enterprise infrastructure.",
      features: [
        "Bespoke scraper development",
        "Any website, any data structure",
        "Anti-bot bypass strategies",
        "Custom data transformations",
        "Full API integration",
      ],
      cta: "Request Custom Build",
      ctaLink: "/contact",
    },
    {
      icon: Cog,
      title: "Data Pipeline Integration",
      description: "Seamlessly integrate scraped data into your existing workflows, databases, or analytics platforms with our pipeline services.",
      features: [
        "API & webhook integration",
        "Database connections",
        "Cloud storage setup",
        "Real-time data streaming",
        "Automated scheduling",
      ],
      cta: "Learn More",
      ctaLink: "/contact",
    },
    {
      icon: HeadphonesIcon,
      title: "Maintenance & Support",
      description: "Websites change constantly. We proactively monitor and maintain your scrapers to ensure continuous operation.",
      features: [
        "24/7 monitoring",
        "Proactive updates",
        "Emergency support",
        "Performance optimization",
        "Monthly health reports",
      ],
      cta: "Get Support",
      ctaLink: "/contact",
    },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "Pay-as-you-go",
      description: "Use our existing scrapers on Apify",
      features: [
        "Access to all 6 production scrapers",
        "Pay only for what you use",
        "Community support",
        "API access",
        "Basic documentation",
      ],
      cta: "Start Free",
      ctaLink: "https://apify.com/scrapesmith",
    },
    {
      name: "Professional",
      price: "From $200",
      description: "Custom scraper development",
      features: [
        "Static websites: $200",
        "Dynamic sites (no CAPTCHA): $500",
        "With CAPTCHA bypass: $1,000",
        "+$500 for advanced techniques",
        "Priority support",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      ctaLink: "/contact",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      description: "Full data pipeline + support",
      features: [
        "Everything in Professional",
        "Unlimited custom scrapers",
        "White-glove service",
        "24/7 phone support",
        "Custom SLA",
        "On-premise deployment option",
      ],
      cta: "Contact Sales",
      ctaLink: "/contact",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground">
                From ready-to-use scrapers to fully custom solutions, we have 
                everything you need to scale your data extraction.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.title}
                    className="hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-1.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="outline" className="w-full justify-between">
                        {service.ctaLink.startsWith('http') ? (
                          <a href={service.ctaLink} target="_blank" rel="noopener noreferrer">
                            {service.cta}
                            <ArrowRight size={16} />
                          </a>
                        ) : (
                          <Link to={service.ctaLink}>
                            {service.cta}
                            <ArrowRight size={16} />
                          </Link>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Flexible Pricing
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the plan that fits your needs. Scale up or down anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier) => (
                <Card
                  key={tier.name}
                  className={`relative ${
                    tier.featured
                      ? "border-primary shadow-xl scale-105"
                      : "border-border/50"
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="text-3xl font-bold mt-4">{tier.price}</div>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-1.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full"
                      variant={tier.featured ? "default" : "outline"}
                    >
                      {tier.ctaLink.startsWith('http') ? (
                        <a href={tier.ctaLink} target="_blank" rel="noopener noreferrer">
                          {tier.cta}
                        </a>
                      ) : (
                        <Link to={tier.ctaLink}>{tier.cta}</Link>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-gradient-primary text-white border-0">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Not sure which service is right for you?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Let's talk about your specific needs and find the perfect solution.
                </p>
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
