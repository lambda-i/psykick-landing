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
    
    // Here you would typically send this to your backend
    console.log("Submitted email:", email);
    
    toast({
      title: "Thanks for joining!",
      description: "We'll keep you updated on our launch.",
    });
    
    setEmail("");
  };

  return (
    <div id="waitlist" className="py-20 px-4 gradient-bg">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Be the First to Experience Psykick
        </h2>
        <p className="text-white/90 mb-8">
          Join our waitlist to get early access and exclusive updates about our launch.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/90 border-0"
            required
          />
          <Button type="submit" variant="secondary" className="whitespace-nowrap">
            Join Waitlist
          </Button>
        </form>
      </div>
    </div>
  );
};