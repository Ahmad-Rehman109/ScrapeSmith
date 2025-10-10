import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Shield, Users } from "lucide-react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About ScrapeSmith - Enterprise Web Scraping Experts";
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every scraper is meticulously crafted to extract exactly what you need, nothing more, nothing less.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Built for scale with 99.9% uptime. Our scrapers handle millions of requests daily without breaking a sweat.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Production-ready from day one. Comprehensive monitoring, automatic failovers, and proactive maintenance.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We're not just a vendor, we're your data extraction partner. Your success is our success.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About ScrapeSmith
              </h1>
              <p className="text-xl text-muted-foreground">
                We're on a mission to make enterprise-grade web scraping accessible, 
                reliable, and scalable for businesses of all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ScrapeSmith was born from a simple observation: businesses need data, 
                  but getting that data reliably and at scale is incredibly difficult. 
                  We've seen too many companies struggle with brittle scrapers, constant 
                  maintenance headaches, and infrastructure that can't keep up with growth.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We built ScrapeSmith to change that. Every scraper we deploy on Apify 
                  is production-ready from day one, battle-tested under real-world conditions, 
                  and maintained proactively to ensure continuous operation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, our scrapers process over 10 million records daily, serving 
                  enterprises and growth companies across 6 major industries. We're just 
                  getting started.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What Drives Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card
                      key={value.title}
                      className="border-border/50 hover:border-primary/50 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Technology</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                  We leverage cutting-edge technology to deliver the most reliable 
                  web scraping solutions in the industry.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">Apify</div>
                    <p className="text-sm text-muted-foreground">
                      Enterprise infrastructure with automatic scaling
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">Node.js</div>
                    <p className="text-sm text-muted-foreground">
                      High-performance JavaScript runtime
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">Puppeteer</div>
                    <p className="text-sm text-muted-foreground">
                      Headless Chrome automation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Why Choose ScrapeSmith</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">Production-Ready from Day One</h3>
                    <p className="text-muted-foreground">
                      No beta testing on your dime. Every scraper we release has been 
                      thoroughly tested and validated under real-world conditions.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">Maintained & Monitored 24/7</h3>
                    <p className="text-muted-foreground">
                      Websites change constantly. We monitor our scrapers around the clock 
                      and push updates proactively so you never experience downtime.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">Scale Without Limits</h3>
                    <p className="text-muted-foreground">
                      Built on Apify's enterprise infrastructure, our scrapers automatically 
                      scale to handle your workload, whether that's 100 or 100 million records.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">Expert Support</h3>
                    <p className="text-muted-foreground">
                      Questions? Need customization? Our team of scraping experts is here 
                      to help. We typically respond within 24 hours, often much faster.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
