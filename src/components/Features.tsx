import { Brain, Feather, Target } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Mood-Driven Prompts",
    description: "Intelligent prompts that adapt to your current emotional state, making journaling more relevant and therapeutic.",
  },
  {
    icon: Feather,
    title: "Lightweight Journaling",
    description: "Focus on small wins and build consistent habits with our easy-to-use journaling tool.",
  },
  {
    icon: Target,
    title: "Simple & Focused",
    description: "One meaningful prompt at a time. Quality over quantity for more impactful self-reflection.",
  },
];

export const Features = () => {
  return (
    <div className="py-20 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Your Journey to Better Self-Reflection
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};