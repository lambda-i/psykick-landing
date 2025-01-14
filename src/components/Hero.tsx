import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Countdown } from "./Countdown";

export const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center px-4 py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FBF6E9] to-background/50 -z-10" />
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-16">
          Journal with your <span className="text-gradient">mood</span> in mind
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Say goodbye to generic prompts. Start your journaling journey with prompts that match your mood, making every entry meaningful.
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-6 bg-[#5DB996] hover:bg-[#5DB996]/90 mb-16"
          onClick={scrollToWaitlist}
        >
          Join Waitlist <ArrowRight className="ml-2" />
        </Button>

        {/* Phone Display */}
        <div className="relative max-w-[300px] mx-auto mb-12">
          <div className="relative border-8 border-black rounded-[3rem] overflow-hidden aspect-[9/19] shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl"></div>
            <div className="h-full bg-white p-4">
              <div className="h-6 w-32 bg-[#D3F1DF] rounded-full mb-4"></div>
              <div className="space-y-3">
                <div className="h-24 bg-[#FBF6E9] rounded-lg p-3">
                  <div className="h-4 w-3/4 bg-[#D3F1DF] rounded mb-2"></div>
                  <div className="h-12 w-full bg-white rounded border border-[#D3F1DF]"></div>
                </div>
                <div className="h-24 bg-[#FBF6E9] rounded-lg p-3">
                  <div className="h-4 w-1/2 bg-[#D3F1DF] rounded mb-2"></div>
                  <div className="h-12 w-full bg-white rounded border border-[#D3F1DF]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <Countdown />
      </div>
    </div>
  );
};