import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";

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
      <div className="w-[95%] md:w-[90%] max-w-6xl mx-auto py-20 px-4" id="waitlist">
        <Card className="gradient-bg border-0 shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              {/* Text Content - 60% width on desktop */}
              <div className="w-full md:w-[60%] p-8 md:p-12 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                  We're busy working on an innovative and new approach to journaling.
                </h2>
                <p className="text-lg text-gray-600">
                  If you want early access to this latest innovation, register your interest and you'll be part of our inner circle community who gets priority access and information.
                </p>
                
                <div className="space-y-8">
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

              {/* Image Section - 40% width on desktop */}
              <div className="w-full md:w-[40%] h-[300px] md:h-auto bg-[#D3F1DF]">
                <img 
                  src="/lovable-uploads/d407f6aa-b29e-4d72-a518-1445d5fe43d1.png"
                  alt="Product Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-[95%] md:w-[90%] max-w-6xl mx-auto py-20 px-4" id="waitlist">
      <Card className="gradient-bg border-0 shadow-lg overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[60%] p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 text-base bg-white/80 backdrop-blur-sm border-gray-200"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 text-base bg-white/80 backdrop-blur-sm border-gray-200"
                    required
                  />
                  <Textarea
                    placeholder="What excites you about our product?"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="min-h-[100px] text-base bg-white/80 backdrop-blur-sm border-gray-200 resize-none"
                  />
                  <Input
                    type="text"
                    placeholder="How did you hear about us?"
                    value={formData.source}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                    className="h-12 text-base bg-white/80 backdrop-blur-sm border-gray-200"
                  />
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    className="flex-1 h-12 text-base bg-white/80 backdrop-blur-sm"
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
            </div>
            
            <div className="w-full md:w-[40%] h-[300px] md:h-auto bg-[#D3F1DF]">
              <img 
                src="/lovable-uploads/d407f6aa-b29e-4d72-a518-1445d5fe43d1.png"
                alt="Product Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};