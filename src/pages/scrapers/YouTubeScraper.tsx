import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Database, Zap, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const YouTubeScraper = () => {
  useEffect(() => {
    document.title = "YouTube Scraper - Extract Videos, Channels & Comments | ScrapeSmith";
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
                YouTube Scraper
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Extract videos, channels, playlists, comments, and transcripts from YouTube 
                with real-time engagement metrics and complete metadata.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a 
                    href="https://apify.com/scrapesmith/free-youtube-scraper" 
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
                    <CardTitle>Video Data</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Title, description, tags</li>
                      <li>• View count, likes, comments</li>
                      <li>• Upload date & duration</li>
                      <li>• Thumbnails & video URL</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Zap className="text-primary" size={24} />
                    </div>
                    <CardTitle>Channel Info</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Subscriber count</li>
                      <li>• Channel description</li>
                      <li>• Total video count</li>
                      <li>• Channel keywords</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Code className="text-primary" size={24} />
                    </div>
                    <CardTitle>Advanced Data</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Comments & replies</li>
                      <li>• Video transcripts</li>
                      <li>• Playlist contents</li>
                      <li>• Real-time metrics</li>
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
                    <h3 className="font-bold text-lg mb-2">Multiple Search Modes</h3>
                    <p className="text-muted-foreground">
                      Search by keyword, channel, playlist, or video ID. Extract data from 
                      specific videos or scrape entire channels at scale.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Real-time Engagement Metrics</h3>
                    <p className="text-muted-foreground">
                      Get up-to-date view counts, likes, comments, and subscriber numbers. 
                      Perfect for tracking viral content and trending videos.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Comment & Transcript Extraction</h3>
                    <p className="text-muted-foreground">
                      Analyze sentiment with full comment threads or extract video transcripts 
                      for content analysis and SEO research.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Scalable Performance</h3>
                    <p className="text-muted-foreground">
                      Process thousands of videos per hour. Built on Apify infrastructure 
                      for automatic scaling and 99.9% uptime.
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
                    <CardTitle className="text-lg">Content Research</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Analyze trending topics, popular formats, and successful content strategies 
                    in your niche.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Competitor Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Track competitor channels, monitor their upload frequency, and analyze 
                    engagement patterns.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Influencer Discovery</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Find and vet influencers for partnerships by analyzing their subscriber 
                    growth and engagement rates.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Market Intelligence</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Monitor brand mentions, track product reviews, and gather consumer sentiment 
                    from comments.
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
                Ready to extract YouTube data at scale?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Start using our production-ready YouTube scraper today or contact us 
                for custom features tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <a 
                    href="https://apify.com/scrapesmith/free-youtube-scraper" 
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

export default YouTubeScraper;
