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
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Button 
            onClick={() => setShowForm(true)}
            className="px-8 py-6 text-lg bg-[#98FFBB] hover:bg-[#7EFFAA] text-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Join the Waitlist
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-green-50/50 to-white">
      <div className="max-w-4xl mx-auto">
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
    </div>
  );
};