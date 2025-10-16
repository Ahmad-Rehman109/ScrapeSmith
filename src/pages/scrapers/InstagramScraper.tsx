import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Database, Zap, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const InstagramScraper = () => {
  useEffect(() => {
    document.title = "Instagram Profile Scraper - Extract Instagram Data | ScrapeSmith";
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
                Instagram Profile Scraper
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Extract profile information, posts, followers, and engagement data from 
                Instagram for comprehensive marketing insights and analytics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a 
                    href="https://apify.com/scrapesmith/free-instagram-profile-scraper" 
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
                    <CardTitle>Profile Info</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Username & full name</li>
                      <li>• Bio & website links</li>
                      <li>• Profile picture</li>
                      <li>• Business category</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Zap className="text-primary" size={24} />
                    </div>
                    <CardTitle>Engagement Data</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Follower count</li>
                      <li>• Following count</li>
                      <li>• Post count</li>
                      <li>• Engagement rate</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Code className="text-primary" size={24} />
                    </div>
                    <CardTitle>Post Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Captions & hashtags</li>
                      <li>• Likes & comments</li>
                      <li>• Post timestamps</li>
                      <li>• Media URLs</li>
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
                    <h3 className="font-bold text-lg mb-2">Complete Profile Extraction</h3>
                    <p className="text-muted-foreground">
                      Extract full profile details including bio, contact information, and 
                      business categories for influencer discovery and vetting.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Post & Story Analysis</h3>
                    <p className="text-muted-foreground">
                      Scrape posts, captions, hashtags, and engagement metrics to understand 
                      content performance and audience preferences.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Follower Growth Tracking</h3>
                    <p className="text-muted-foreground">
                      Monitor follower counts and engagement rates over time to identify 
                      growing influencers and trending accounts.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Hashtag & Mention Monitoring</h3>
                    <p className="text-muted-foreground">
                      Track brand mentions, hashtag usage, and user-generated content across 
                      Instagram profiles for reputation management.
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
                    <CardTitle className="text-lg">Influencer Partnerships</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Discover and analyze influencers for brand collaborations by evaluating 
                    their engagement rates and audience authenticity.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Content Strategy</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Analyze successful posts from competitors and industry leaders to optimize 
                    your content strategy and posting schedule.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Brand Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Track mentions, tags, and user-generated content featuring your brand 
                    across Instagram profiles.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Market Research</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Gather insights about target audiences, trending topics, and consumer 
                    sentiment through Instagram profile analysis.
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
                Ready to extract Instagram data at scale?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Start using our production-ready Instagram scraper today or contact us 
                for custom features tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <a 
                    href="https://apify.com/scrapesmith/free-instagram-profile-scraper" 
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

export default InstagramScraper;
