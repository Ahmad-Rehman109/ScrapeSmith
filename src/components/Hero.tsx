import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Database, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-glow blur-3xl" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
            <Zap size={16} className="animate-pulse" />
            <span>Production-Ready Web Scrapers</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Data extraction that{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              scales
            </span>{" "}
            with your business
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade web scrapers deployed on Apify. Extract data from YouTube, 
            Google Maps, Airbnb, and more with 99.9% uptime.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary-glow">10M+</div>
              <div className="text-sm text-white/70">Records Retrieved</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary-glow">99.9%</div>
              <div className="text-sm text-white/70">Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary-glow">6</div>
              <div className="text-sm text-white/70">Active Scrapers</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button asChild size="lg" className="text-lg px-8 shadow-glow">
              <Link to="/contact">
                Start a Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <a href="#scrapers">View Our Scrapers</a>
            </Button>
          </div>

          {/* Tech Icons */}
          <div className="flex items-center justify-center gap-8 pt-12 text-white/60">
            <div className="flex items-center gap-2">
              <Code2 size={20} className="text-primary-glow" />
              <span className="text-sm">API First</span>
            </div>
            <div className="flex items-center gap-2">
              <Database size={20} className="text-primary-glow" />
              <span className="text-sm">Scalable</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={20} className="text-primary-glow" />
              <span className="text-sm">Real-time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
