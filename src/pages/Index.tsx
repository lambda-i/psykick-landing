import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { WaitlistForm } from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gradient">Psykick</h1>
          <Button
            variant="ghost"
            className="text-sm"
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join Waitlist
          </Button>
        </div>
      </header>
      <main>
        <Hero />
        <Features />
        <WaitlistForm />
      </main>
    </div>
  );
};

export default Index;