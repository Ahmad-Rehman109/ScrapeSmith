import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Database, Zap, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TikTokScraper = () => {
  useEffect(() => {
    document.title = "TikTok Profile Scraper - Extract TikTok Data | ScrapeSmith";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <Badge className="mb-4">Social Media</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                TikTok Profile Scraper
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Extract TikTok profile data, videos, follower counts, and engagement metrics 
                for comprehensive social media analysis.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a 
                    href="https://apify.com/scrapesmith/free-tiktok-profile-scraper" 
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
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What It Extracts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Database className="text-primary" size={24} />
                    </div>
                    <CardTitle>Profile Data</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Username & display name</li>
                      <li>• Bio & profile picture</li>
                      <li>• Verification status</li>
                      <li>• Account creation date</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Zap className="text-primary" size={24} />
                    </div>
                    <CardTitle>Engagement Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Follower count</li>
                      <li>• Following count</li>
                      <li>• Total likes</li>
                      <li>• Video count</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Code className="text-primary" size={24} />
                    </div>
                    <CardTitle>Video Data</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Video descriptions</li>
                      <li>• Hashtags & trends</li>
                      <li>• View counts</li>
                      <li>• Upload timestamps</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Comprehensive Profile Analysis</h3>
                    <p className="text-muted-foreground">
                      Extract complete profile information including bio, stats, and verification 
                      status for influencer research and brand analysis.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Real-time Engagement Tracking</h3>
                    <p className="text-muted-foreground">
                      Monitor follower growth, likes, and engagement rates in real-time to 
                      identify trending creators and viral content.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Bulk Profile Extraction</h3>
                    <p className="text-muted-foreground">
                      Process multiple profiles simultaneously for competitive analysis and 
                      large-scale influencer discovery campaigns.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Trend & Hashtag Analysis</h3>
                    <p className="text-muted-foreground">
                      Identify trending hashtags, sounds, and content formats from creator 
                      profiles to optimize your content strategy.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Influencer Marketing</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Find and vet TikTok creators for brand partnerships by analyzing their 
                    engagement rates and audience demographics.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Competitive Intelligence</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Track competitor accounts, monitor their content strategy, and analyze 
                    what drives their engagement.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Trend Research</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Discover emerging trends, viral sounds, and popular hashtags by analyzing 
                    top creator profiles in your niche.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Brand Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Track brand mentions, user-generated content, and creator partnerships 
                    across TikTok profiles.
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 gradient-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to extract TikTok data at scale?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Start using our production-ready TikTok scraper today or contact us 
                for custom features tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <a 
                    href="https://apify.com/scrapesmith/free-tiktok-profile-scraper" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Start Scraping
                    <ExternalLink className="ml-2" size={18} />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                  <Link to="/contact">
                    Contact Sales
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TikTokScraper;
