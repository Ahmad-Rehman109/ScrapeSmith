import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Smartphone, TrendingUp, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const YouTubeShortsScraper = () => {
  useEffect(() => {
    document.title = "YouTube Shorts Scraper - Short-Form Video Data | ScrapeSmith";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <Badge className="mb-4">Social Media</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                YouTube Shorts Scraper
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Specialized scraper for YouTube Shorts with creator insights, trending metrics, 
                and short-form video analytics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a 
                    href="https://apify.com/scrapesmith/free-youtube-shorts-scraper" 
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
              <h2 className="text-3xl font-bold mb-6">Why Shorts-Specific Data Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Smartphone className="text-primary" size={24} />
                    </div>
                    <CardTitle>Format-Specific Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Track short-form specific engagement patterns and virality indicators
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <TrendingUp className="text-primary" size={24} />
                    </div>
                    <CardTitle>Trending Discovery</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Identify viral Shorts early and understand what makes them successful
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <ExternalLink className="text-primary" size={24} />
                    </div>
                    <CardTitle>Creator Insights</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Analyze creators who excel at short-form content specifically
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Shorts-Optimized Extraction</h3>
                    <p className="text-muted-foreground">
                      Built specifically for the Shorts format with optimized data fields 
                      for vertical videos and mobile-first content.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Viral Trend Tracking</h3>
                    <p className="text-muted-foreground">
                      Monitor trending Shorts, popular audio tracks, and viral challenges 
                      to stay ahead of the curve.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Creator Performance Metrics</h3>
                    <p className="text-muted-foreground">
                      Track which creators are gaining traction in the Shorts format, 
                      including growth rates and engagement patterns.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Competitive Analysis</h3>
                    <p className="text-muted-foreground">
                      Analyze what's working for competitors in your niche and identify 
                      content gaps and opportunities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Content Strategy</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Understand what Shorts content resonates with your target audience
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Trend Forecasting</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Spot emerging trends early before they hit mainstream
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Influencer Marketing</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Find micro-influencers excelling in short-form content
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Audio Track Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Track which audio clips are driving engagement
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
                Dominate the Shorts algorithm
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Extract data from trending Shorts to inform your content strategy.
              </p>
              <Button asChild size="lg" variant="secondary">
                <a 
                  href="https://apify.com/scrapesmith/free-youtube-shorts-scraper" 
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

export default YouTubeShortsScraper;
