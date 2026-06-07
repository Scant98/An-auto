"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, DollarSign, Clock, Globe2, HeadphonesIcon, Package } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Verified Quality",
    description: "Every part sourced from verified manufacturers and distributors. No counterfeits, no compromises.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Direct importing from manufacturers means we cut out the middleman and pass savings to you.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "We understand downtime is costly. Enquiries answered within 24 hours, orders fulfilled fast.",
  },
  {
    icon: Globe2,
    title: "Global Sourcing Network",
    description: "Supplier relationships across Asia, Europe and the Middle East for broad parts availability.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Consultation",
    description: "Our team provides honest advice on part compatibility, specifications, and the right choice for your application.",
  },
  {
    icon: Package,
    title: "Flexible Order Sizes",
    description: "From single-unit orders for repairs to bulk supply for fleets and construction projects.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Why choose A.N Auto Trading"
      className="relative py-20 md:py-28 bg-[#0A1628] overflow-hidden"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Centre glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1E6FDB]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E6FDB]/10 border border-[#1E6FDB]/20 text-[#6BADF5] text-xs font-semibold uppercase tracking-widest mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight max-w-2xl mx-auto">
            The Difference You Feel{" "}
            <span className="gradient-text-static">Every Order</span>
          </h2>
          <p className="mt-5 text-white/50 max-w-xl mx-auto leading-relaxed">
            Over a decade of experience in Tanzania&apos;s spare parts market means we know what businesses need — and we deliver it.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={fadeInUp}
                className="group relative p-7 rounded-2xl glass-card glass-card-hover overflow-hidden"
              >
                {/* Number */}
                <span className="absolute top-4 right-5 text-5xl font-black text-white/[0.03] select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1E6FDB]/15 border border-[#1E6FDB]/20 mb-5 group-hover:bg-[#1E6FDB]/25 group-hover:border-[#1E6FDB]/40 transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#1E6FDB]" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-white mb-2.5 group-hover:text-[#60a5fa] transition-colors duration-200">
                  {reason.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
