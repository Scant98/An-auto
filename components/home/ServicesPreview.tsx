"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Boxes, Headphones, Truck, ShoppingBag, BadgeCheck } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const services = [
  {
    icon: Search,
    title: "Parts Sourcing",
    description: "We source genuine and aftermarket parts from verified global suppliers across Asia, Europe and the Middle East.",
  },
  {
    icon: Boxes,
    title: "Bulk & Wholesale",
    description: "Large volume orders for garages, construction firms, and fleet operators at competitive wholesale pricing.",
  },
  {
    icon: Truck,
    title: "Fast Local Delivery",
    description: "Reliable delivery across Dar es Salaam and upcountry Tanzania within agreed timelines.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Expert guidance on part compatibility, specifications, and sourcing for complex requirements.",
  },
  {
    icon: ShoppingBag,
    title: "Custom Orders",
    description: "Specialized or hard-to-find parts sourced on request from our international supplier network.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description: "Every item inspected before delivery. We stand behind everything we supply.",
  },
];

export default function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Our services overview"
      className="relative py-20 md:py-28 bg-[#060E1A] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E6FDB]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1E6FDB]/4 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E6FDB]/10 border border-[#1E6FDB]/20 text-[#6BADF5] text-xs font-semibold uppercase tracking-widest mb-4">
              How We Work
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Services That Keep{" "}
              <span className="gradient-text-static">Business Moving</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="flex-shrink-0 inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors group"
          >
            All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group p-6 rounded-2xl glass-card glass-card-hover cursor-default"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#1E6FDB]/15 border border-[#1E6FDB]/20 mb-4 group-hover:bg-[#1E6FDB]/25 group-hover:border-[#1E6FDB]/40 transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#1E6FDB]" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#60a5fa] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-[#1E6FDB]/50 transition-all duration-200 text-sm font-medium group"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
