import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import YouTubeScraper from "./pages/scrapers/YouTubeScraper";
import GoogleMapsScraper from "./pages/scrapers/GoogleMapsScraper";
import AirbnbScraper from "./pages/scrapers/AirbnbScraper";
import ZillowScraper from "./pages/scrapers/ZillowScraper";
import TripAdvisorScraper from "./pages/scrapers/TripAdvisorScraper";
import YouTubeShortsScraper from "./pages/scrapers/YouTubeShortsScraper";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="page-transition">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/scrapers/youtube" element={<YouTubeScraper />} />
            <Route path="/scrapers/youtube-shorts" element={<YouTubeShortsScraper />} />
            <Route path="/scrapers/google-maps" element={<GoogleMapsScraper />} />
            <Route path="/scrapers/airbnb" element={<AirbnbScraper />} />
            <Route path="/scrapers/zillow" element={<ZillowScraper />} />
            <Route path="/scrapers/tripadvisor" element={<TripAdvisorScraper />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
