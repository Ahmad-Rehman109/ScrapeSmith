import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - ScrapeSmith";
    window.scrollTo(0, 0);
  }, []);

  const handleEmailClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    recipient: string
  ) => {
    const ua = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipad|ipod|android|mobile/.test(ua);
    if (!isMobile) {
      e.preventDefault();
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        recipient
      )}`;
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Have a question or need a custom scraper? We're here to help.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 mx-auto">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <CardTitle>Email Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:scrapesmith.help@gmail.com"
                    className="text-primary hover:underline"
                    onClick={(e) => handleEmailClick(e, 'scrapesmith.help@gmail.com')}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    scrapesmith.help@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 mx-auto">
                    <MessageSquare className="text-primary" size={24} />
                  </div>
                  <CardTitle>Sales & Quotes</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:scrapesmith1@gmail.com"
                    className="text-primary hover:underline"
                    onClick={(e) => handleEmailClick(e, 'scrapesmith1@gmail.com')}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    scrapesmith1@gmail.com
                  </a>
                </CardContent>
              </Card>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
