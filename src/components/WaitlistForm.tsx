import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    
    // Here you would typically send this to your backend
    console.log("Submitted:", { email, name });
    
    toast({
      title: "Thanks for joining!",
      description: "We'll keep you updated on our launch.",
    });
    
    setEmail("");
    setName("");
  };

  return (
    <div id="waitlist" className="py-20 px-4 bg-gradient-to-b from-green-50/50 to-white">
      <div className="max-w-4xl mx-auto">
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900">
              It is easy to get started
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our waitlist today and be among the first to experience Psykick's innovative journaling approach. 
              Start your journey to better mental well-being.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 text-base bg-white border-gray-200"
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-base bg-white border-gray-200"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 text-lg bg-green-600 hover:bg-green-700 text-white transition-colors"
              >
                Join Waitlist
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};