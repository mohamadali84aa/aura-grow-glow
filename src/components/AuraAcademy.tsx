import { BookOpen, Target, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AuraAcademy = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Real-World Skills",
      description: "Learn practical business and marketing strategies that work in today's market.",
    },
    {
      icon: Target,
      title: "Action-Oriented",
      description: "Turn knowledge into action with hands-on projects and real implementations.",
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Join a worldwide network of creators, entrepreneurs, and dreamers.",
    },
    {
      icon: Zap,
      title: "Personal Growth",
      description: "Develop the mindset and skills needed to succeed in any endeavor.",
    },
  ];

  return (
    <section id="academy" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass-bg backdrop-blur-xl border border-glass-border mb-6">
            <span className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">
              ✦ Featured Platform ✦
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Aura Academy
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            A modern learning platform designed to teach real-world business skills, marketing strategies, 
            and personal growth mindsets. We turn knowledge into action and help creators, entrepreneurs, 
            and dreamers succeed globally.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group p-8 bg-glass-bg backdrop-blur-xl border border-glass-border
                       hover:border-primary/50 transition-all duration-500 hover:scale-105
                       hover:shadow-glow-blue cursor-pointer"
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 100}ms both`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-background" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative p-12 rounded-3xl bg-gradient-primary overflow-hidden group"
            style={{ animation: "scale-in 0.6s ease-out 600ms both" }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-background mb-4">
                Ready to Transform Your Future?
              </h3>
              <p className="text-background/90 text-lg mb-8">
                Join thousands of successful learners who are already building their dreams.
              </p>
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold px-8 py-6 rounded-xl
                         hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Start Learning Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuraAcademy;
