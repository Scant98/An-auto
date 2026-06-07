"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Search, PackageCheck, Truck } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Send Your Enquiry",
    description: "Call, email, or fill in our contact form with your part details — part number, vehicle model, or a description works fine.",
  },
  {
    step: "02",
    icon: Search,
    title: "We Source It",
    description: "Our team checks stock, contacts our supplier network, and finds the best option for your needs within 24 hours.",
  },
  {
    step: "03",
    icon: PackageCheck,
    title: "Quote & Confirm",
    description: "We send you a clear quote with pricing and availability. Once confirmed, your order is processed immediately.",
  },
  {
    step: "04",
    icon: Truck,
    title: "Delivery to You",
    description: "Parts are inspected, packed, and dispatched to your location — across Dar es Salaam or upcountry via our freight partners.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="How our process works"
      className="relative py-20 md:py-28 bg-[#0A1628] overflow-hidden"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#1E6FDB]/7 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E6FDB]/10 border border-[#1E6FDB]/20 text-[#6BADF5] text-xs font-semibold uppercase tracking-widest mb-4">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Simple Process.{" "}
            <span className="gradient-text-static">Fast Results.</span>
          </h2>
          <p className="mt-5 text-white/50 max-w-md mx-auto leading-relaxed">
            Getting your parts is straightforward — just four steps from enquiry to delivery.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {/* Connector line (desktop) */}
          <div className="absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-[#1E6FDB]/30 to-transparent hidden lg:block pointer-events-none" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="group flex flex-col items-center text-center p-7 rounded-2xl glass-card glass-card-hover"
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#1E6FDB] to-[#1a5fbf] shadow-lg shadow-[#1E6FDB]/30 group-hover:shadow-[#1E6FDB]/50 transition-shadow">
                    <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#060E1A] border border-[#1E6FDB]/40 flex items-center justify-center text-[9px] font-black text-[#1E6FDB]">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#60a5fa] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
