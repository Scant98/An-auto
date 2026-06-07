import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import IndustriesStrip from "@/components/home/IndustriesStrip";
import StatsSection from "@/components/home/StatsSection";
import ProductsPreview from "@/components/home/ProductsPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTABanner from "@/components/home/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <IndustriesStrip />
      <StatsSection />
      <ProductsPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <CTABanner />
      <Footer />
    </main>
  );
}
