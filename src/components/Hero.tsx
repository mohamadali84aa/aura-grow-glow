import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass-bg backdrop-blur-xl border border-glass-border mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Empowering people worldwide</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Smart Living.
            </span>
            <br />
            <span className="text-foreground">Learning. Growth.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Explore. Learn. Live. Transform your potential into reality with Aura Global.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-primary text-foreground font-semibold px-8 py-6 rounded-xl
                       hover:scale-105 transition-all duration-300 hover:shadow-glow-blue"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Aura Academy
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 text-foreground bg-transparent hover:bg-primary/10
                       hover:border-primary px-8 py-6 rounded-xl hover:scale-105 transition-all duration-300
                       hover:shadow-glow-blue backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-24 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            {[
              { value: "10K+", label: "Students" },
              { value: "50+", label: "Courses" },
              { value: "95%", label: "Success Rate" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-glass-bg backdrop-blur-xl border border-glass-border
                         hover:border-primary/50 transition-all duration-300 hover:scale-105
                         hover:shadow-glow-blue group"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
