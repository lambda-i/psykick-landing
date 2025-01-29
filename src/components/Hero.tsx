import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Countdown } from "./Countdown";

export const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const emotions = [
    { text: "angry", gradient: "bg-gradient-to-r from-red-500 to-red-700", textColor: "text-red-500" },
    { text: "sad", gradient: "bg-gradient-to-r from-blue-500 to-blue-700", textColor: "text-blue-500" },
    { text: "scared", gradient: "bg-gradient-to-r from-purple-500 to-purple-700", textColor: "text-purple-500" },
    { text: "happy", gradient: "bg-gradient-to-r from-yellow-400 to-yellow-600", textColor: "text-yellow-400" },
    { text: "unsure", gradient: "bg-gradient-to-r from-orange-400 to-orange-600", textColor: "text-orange-400" },
  ];
  
  const [currentEmotionIndex, setCurrentEmotionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmotionIndex((prevIndex) => (prevIndex + 1) % emotions.length);
    }, 1570); // Switch emotion every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const currentEmotion = emotions[currentEmotionIndex];

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center px-4 py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-background/50 -z-10" />
      <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-16">
          Your Sidekick
          <br/>
          whenever you are feeling
           <br/>
          <span
            className={`animate-typing inline-block whitespace-nowrap overflow-hidden border-r-4 border-slate-100 font-bold pb-2 ${currentEmotion.textColor}`}
          >
            {currentEmotion.text}
          </span>
        </h1>
        <p className="text-l md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-24">
          No more holding it in. 
          <br/>
          Set your feelings free through journaling.
        </p>
        {/* <Button
          size="lg"
          className="text-lg px-8 py-6 text-white hover:bg-green-700 mb-16 bg-[#5DB996]" 
          onClick={scrollToWaitlist}
        >
          Join Waitlist <ArrowRight className="ml-2" />
        </Button> */}

        {/* Phone Display */}
        <div className="relative max-w-[300px] mx-auto mb-12">
          <div className="relative border-8 border-black rounded-[3rem] overflow-hidden aspect-[9/19] shadow-2xl">
            
            {/* Phone Screen */}
            <div className="h-full bg-white p-4 relative">
              {/* Image inside the phone */}
              <img 
                src="public/Landing Main.png" 
                alt="Phone Screen Content"
                className="absolute inset-0 w-full h-full object-cover"
              />

            </div>
          </div>
        </div>

        <Countdown />
        <Button
          size="lg"
          className="text-lg px-8 py-6 text-white hover:bg-green-700 mb-16 bg-[#5DB996]" 
          onClick={scrollToWaitlist}
        >
          Join Waitlist <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};