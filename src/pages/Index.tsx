import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AuraAcademy from "@/components/AuraAcademy";
import RentAura from "@/components/RentAura";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AuraAcademy />
      <RentAura />
      <Footer />
    </div>
  );
};

export default Index;
