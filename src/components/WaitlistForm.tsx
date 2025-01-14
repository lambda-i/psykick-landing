import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    console.log("Submitted email:", email);
    
    toast({
      title: "Thanks for joining!",
      description: "We'll keep you updated on our launch.",
    });
    
    setEmail("");
  };

  return (
    <div id="waitlist" className="py-32 px-4 bg-gradient-to-b from-[#FBF6E9]/50 to-[#D3F1DF]/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Be the First to Experience Psykick
        </h2>
        <p className="text-gray-600 text-xl mb-12">
          Join our waitlist to get early access and exclusive updates about our launch.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-12 text-lg"
            required
          />
          <Button 
            type="submit" 
            className="h-12 px-8 text-lg font-medium bg-[#5DB996] hover:bg-[#5DB996]/90 text-white"
          >
            Join Waitlist
          </Button>
        </form>
      </div>
    </div>
  );
};