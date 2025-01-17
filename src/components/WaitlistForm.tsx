import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";

export const WaitlistForm = () => {
  const [formState, setFormState] = useState("idle"); // "idle", "form", "success"
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
    setFormState("success");
  };

  if (formState === "success") {
    return (
      <div className="w-[95%] md:w-[90%] max-w-7xl mx-auto py-20 px-4" id="waitlist">
        <Card className="bg-emerald-950 border-0 shadow-lg overflow-hidden">
          <CardContent className="p-0">
          <div className="w-full max-w-3xl mx-auto py-20 px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              🎉 Congratulations! 🎉
            </h2>
            <p className="text-lg text-white mb-8">
              You have successfully joined our waitlist! Stay tuned for updates.
            </p>
            <Button
              onClick={() => setFormState("idle")}
              className="px-6 py-3 bg-primary hover:bg-neutral text-neutral hover:text-primary font-semibold rounded-xl text-lg"
            >
              Back to Home
            </Button>
          </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!showForm) {
    return (
      <div className="w-[95%] md:w-[90%] max-w-7xl mx-auto py-20 px-4" id="waitlist">
        <Card className="bg-emerald-950 border-0 shadow-lg overflow-hidden">

          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              {/* Text Content */}
              <div className="w-full md:w-[60%] p-8 md:p-12 space-y-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                  We're busy working on an innovative and new approach to journaling.
                </h2>

                <p className="text-base md:text-md text-white md:text-xl font-semibold">
                  Join the waitlist now for early access to our priority inner circle for exclusive updates!
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3 mt-10">Getting more mindful moments</h3>
                    <p className="text-slate-200">
                      Discover how mastering journaling can supercharge your ability to achieve mindfulness.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">Preventing mental blocks</h3>
                    <p className="text-slate-200">
                      Learn how our guided journaling can serve as your protective shield, preventing the adverse effects of writer's block and securing your future.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">Why Journaling Matters</h3>
                    <p className="text-slate-200">
                      Explore the critical domain of mood-based journaling, where success is defined, and uncover how it can transform your life for the better.
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() => setShowForm(true)}
                  className="w-full md:w-full px-8 py-4 text-lg bg-primary hover:bg-neutral text-neutral hover:text-primary font-semibold rounded-xl"
                >
                  Join the Waitlist
                </Button>
              </div>

              {/* Image Section */}
              <div className="w-full h-auto flex items-center justify-center md:mt-0 w-[100%] md:w-[40%] lg:w-[40%] sm: mb-4">
                <img
                  src="/lovable-uploads/d407f6aa-b29e-4d72-a518-1445d5fe43d1.png"
                  alt="Product Preview"
                  className="w-[90%] max-h-[400px] md:max-h-none object-cover rounded-xl shadow-2xl"
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
      <Card className="bg-emerald-950 border-0 shadow-lg overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[100%] p-8 md:p-12 space-y-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Be the first to experience our innovative journaling approach
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <label className="w-1/3 text-lg text-white font-semibold">Name (required)</label>
                    <Input
                      type="text"
                      placeholder="How do we address you?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 text-base bg-white/100 backdrop-blur-sm border-gray-200"
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="w-1/3 text-lg text-white font-semibold">Email (required)</label>
                    <Input
                      type="email"
                      placeholder="e.g. psykick.lambdai@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 text-base bg-white/100 backdrop-blur-sm border-gray-200"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="w-1/3 text-lg text-white font-semibold">Reason</label>
                    <Textarea
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="h-12 text-base bg-white/100 backdrop-blur-sm border-gray-200"
                      placeholder="What excites you about our product?"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="button" 
                    onClick={() => setShowForm(false)}
                    className="flex-1 h-12 text-base bg-white/50 backdrop-blur-sm"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 h-12 text-base bg-primary hover:bg-neutral text-neutral hover:text-primary font-semibold rounded-xl"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};