import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 gradient-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to scale your data extraction?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get started with production-ready scrapers or let us build a custom 
            solution tailored to your specific needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">
                Schedule a Call
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-white/20 text-white hover:bg-white/10"
            >
              <a href="mailto:contact@scrapesmith.com">
                <Mail className="mr-2" size={20} />
                Email Us
              </a>
            </Button>
          </div>

          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-white/70">Support Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">&lt; 24h</div>
              <div className="text-sm text-white/70">Response Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-white/70">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
