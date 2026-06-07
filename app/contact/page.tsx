import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | A.N Auto Trading & General Supplies",
  description:
    "Get in touch with A.N Auto Trading for spare parts enquiries, bulk orders, and custom sourcing. Based in Dar es Salaam, Tanzania.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Contact Us"
        accentWord="Contact"
        subtitle="Send us a message, call directly, or visit our office in Dar es Salaam. We respond within 24 hours."
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&q=85&auto=format&fit=crop"
        imageAlt="Modern office building exterior"
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Contact layout */}
      <section
        aria-label="Contact section"
        className="relative py-20 md:py-28 bg-[#0A1628] overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E6FDB]/6 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1E6FDB]/4 rounded-full blur-[80px]" />
        </div>
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left: Info */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="p-8 md:p-10 rounded-2xl bg-white shadow-2xl shadow-black/20">
                <div className="mb-7">
                  <h2 className="text-2xl font-black text-[#0A1628] mb-1.5">Send an Enquiry</h2>
                  <p className="text-sm text-[#0A1628]/50">Fill in the form below and we&apos;ll get back to you promptly.</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
