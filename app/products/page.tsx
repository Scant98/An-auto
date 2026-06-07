import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ProductsGrid from "@/components/products/ProductsGrid";
import CTABanner from "@/components/home/CTABanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Products | A.N Auto Trading & General Supplies",
  description:
    "Browse our full range: motor vehicle parts, industrial &amp; agricultural machinery parts, marine equipment, tyres &amp; lubricants, building materials, electrical equipment, and hardware — imported from trusted global suppliers.",
};

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Our Products"
        accentWord="Products"
        subtitle="Eight product categories. One reliable supplier. From a single replacement part to bulk fleet supply — we have you covered."
        imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2000&q=85&auto=format&fit=crop"
        imageAlt="Auto spare parts and components"
        breadcrumbs={[{ label: "Products" }]}
      />
      <ProductsGrid />
      <CTABanner />
      <Footer />
    </main>
  );
}
