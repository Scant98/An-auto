import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import StorySection from "@/components/about/StorySection";
import ValuesGrid from "@/components/about/ValuesGrid";
import StatsSection from "@/components/home/StatsSection";
import CTABanner from "@/components/home/CTABanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | A.N Auto Trading & General Supplies",
  description:
    "Learn about A.N Auto Trading & General Supplies — Tanzania's trusted spare parts importer since 2004, based in Dar es Salaam. Registered with BRELA, serving government and business clients countrywide.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="About Us"
        accentWord="Us"
        subtitle="Over two decades of supplying quality spare parts and general supplies to Tanzania's businesses — built on transparency, equality, and genuine care for our clients."
        imageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=2000&q=85&auto=format&fit=crop"
        imageAlt="Professional business team"
        breadcrumbs={[{ label: "About" }]}
      />
      <StorySection />
      <StatsSection />
      <ValuesGrid />
      <CTABanner />
      <Footer />
    </main>
  );
}
