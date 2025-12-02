import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CategorySection } from "@/components/CategorySection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { TrustSection } from "@/components/TrustSection";
import { MerchantCTA } from "@/components/MerchantCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-mesh-gradient">
      <Navigation />
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <TrustSection />
      <MerchantCTA />
      <Footer />
    </main>
  );
};

export default Index;
