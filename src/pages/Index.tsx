import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";
import { JourneyProcess } from "@/components/JourneyProcess";
import { Quote } from "@/components/Quote";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gradient">Psykick</h1>
          <a
                  href="https://apps.apple.com/se/app/psykick-mood-journal/id6743097918?l=en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 mb-16"
          >
            <Button
              variant="ghost"
              className="text-sm"
            >
              Download Now!
            </Button>
          </a>
        </div>
      </header>
      <main>
        <Hero />
        <JourneyProcess />
        <Quote/>
        <WaitlistForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;