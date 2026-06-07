import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProcessSection from "@/components/services/ProcessSection";
import CTABanner from "@/components/home/CTABanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | A.N Auto Trading & General Supplies",
  description:
    "Parts sourcing, wholesale supply, technical consultation, local delivery, custom orders, and quality assurance — everything you need from one trusted supplier.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Our Services"
        accentWord="Services"
        subtitle="From parts sourcing to doorstep delivery — we handle everything so you can focus on keeping your business running."
        imageSrc="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&q=85&auto=format&fit=crop"
        imageAlt="Industrial workers in a warehouse"
        breadcrumbs={[{ label: "Services" }]}
      />
      <ServicesGrid />
      <ProcessSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
