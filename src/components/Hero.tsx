import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-background/50 -z-10" />
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Journal with your <span className="text-gradient">mood</span> in mind
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Say goodbye to generic prompts. Start your journaling journey with prompts that match your mood, making every entry meaningful.
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-6"
          onClick={scrollToWaitlist}
        >
          Join Waitlist <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};