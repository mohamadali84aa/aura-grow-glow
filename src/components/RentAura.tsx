import { Home, Shield, Clock, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RentAura = () => {
  const features = [
    {
      icon: Home,
      title: "Premium Properties",
      description: "Access curated selection of quality living spaces.",
    },
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "Your safety and security are our top priorities.",
    },
    {
      icon: Clock,
      title: "Flexible Terms",
      description: "Rental solutions that adapt to your lifestyle.",
    },
    {
      icon: Star,
      title: "Quality Service",
      description: "Exceptional support every step of the way.",
    },
  ];

  return (
    <section id="rentaura" className="relative py-32 overflow-hidden bg-card/30">
      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Rent<span className="bg-gradient-primary bg-clip-text text-transparent">Aura</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Smart living solutions for the modern lifestyle. Find your perfect space with RentAura.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-6 bg-glass-bg backdrop-blur-xl border border-glass-border
                       hover:border-secondary/50 transition-all duration-500 hover:scale-105
                       hover:shadow-glow-purple group cursor-pointer"
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 100}ms both`,
              }}
            >
              <div className="mb-4 p-3 rounded-xl bg-secondary/20 inline-block group-hover:bg-secondary/30 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-secondary/50 text-foreground hover:bg-secondary/10
                     hover:border-secondary px-8 py-6 rounded-xl hover:scale-105
                     transition-all duration-300 hover:shadow-glow-purple"
          >
            Explore Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RentAura;
