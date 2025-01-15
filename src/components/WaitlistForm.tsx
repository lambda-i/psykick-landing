import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const WaitlistForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    source: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;
    
    console.log("Submitted:", formData);
    
    toast({
      title: "Thanks for joining!",
      description: "We'll keep you updated on our launch.",
    });
    
    setFormData({
      name: "",
      email: "",
      reason: "",
      source: ""
    });
    setShowForm(false);
  };

  if (!showForm) {
    return (
      <div className="w-[90%] max-w-6xl mx-auto py-20 px-4" id="waitlist">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                We're busy working on an innovative and new approach to journaling.
              </h2>
              <p className="text-lg text-gray-600">
                If you want early access to this latest innovation, register your interest and you'll be part of our inner circle community who gets priority access and information.
              </p>
              
              <div className="space-y-8 mt-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Getting more mindful moments</h3>
                  <p className="text-gray-600">
                    Discover how mastering journaling can supercharge your ability to achieve mindfulness and set you on the path to excellence.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Preventing mental blocks</h3>
                  <p className="text-gray-600">
                    Learn how our guided journaling can serve as your protective shield, preventing the adverse effects of writer's block and securing your future.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Why Journaling Matters</h3>
                  <p className="text-gray-600">
                    Explore the critical domain of mood-based journaling, where success is defined, and uncover how it can transform your life for the better.
                  </p>
                </div>
              </div>
              
              <Button 
                onClick={() => setShowForm(true)}
                className="w-full md:w-auto px-8 py-6 text-lg bg-[#98FFBB] hover:bg-[#7EFFAA] text-gray-800"
              >
                Join the Waitlist
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-[90%] max-w-6xl mx-auto py-20 px-4" id="waitlist">
      <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900">
            Join Our Waitlist
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be among the first to experience our innovative approach to journaling and mental well-being.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
            {/* Required Fields */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-700">Required Information</h3>
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 text-base bg-white border-gray-200"
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 text-base bg-white border-gray-200"
                required
              />
            </div>

            {/* Optional Fields */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-700">Optional Information</h3>
              <Textarea
                placeholder="What excites you about our product?"
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="min-h-[100px] text-base bg-white border-gray-200 resize-none"
              />
              <Input
                type="text"
                placeholder="How did you hear about us?"
                value={formData.source}
                onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                className="h-12 text-base bg-white border-gray-200"
              />
            </div>

            <div className="flex gap-4">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => setShowForm(false)}
                className="flex-1 h-12 text-base"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="flex-1 h-12 text-base bg-green-600 hover:bg-green-700 text-white transition-colors"
              >
                Join Waitlist
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};