import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import IndustriesStrip from "@/components/home/IndustriesStrip";
import StatsSection from "@/components/home/StatsSection";
import ImageSlideshow from "@/components/home/ImageSlideshow";
import ProductsPreview from "@/components/home/ProductsPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TrustedBy from "@/components/home/TrustedBy";
import CTABanner from "@/components/home/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <IndustriesStrip />
      <StatsSection />
      <ImageSlideshow />
      <ProductsPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <TrustedBy />
      <CTABanner />
      <Footer />
    </main>
  );
}
