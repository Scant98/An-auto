"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Call to action"
      className="relative py-24 bg-[#0A1628] overflow-hidden"
    >
      {/* Sparkles */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="cta-sparkles"
          background="transparent"
          minSize={0.3}
          maxSize={1.1}
          particleDensity={35}
          className="w-full h-full"
          particleColor="#1E6FDB"
          speed={0.8}
        />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#1E6FDB]/10 rounded-full blur-[100px] z-[1] pointer-events-none animate-glow-pulse" />

      {/* Top / bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E6FDB]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E6FDB]/40 to-transparent" />

      <div className="relative z-[2] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1E6FDB]/30 bg-[#1E6FDB]/8 text-[#6BADF5] text-xs font-semibold uppercase tracking-widest mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E6FDB] animate-pulse" aria-hidden="true" />
            Ready to Get Started?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Need a Reliable Parts Supplier{" "}
            <span className="gradient-text-static">in Dar es Salaam?</span>
          </h2>

          <p className="text-lg text-white/55 leading-relaxed max-w-xl mx-auto mb-10">
            Contact our team today for a fast quote on any spare part, bulk order, or custom sourcing request.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="xl" variant="default" className="group w-full sm:w-auto shadow-lg shadow-[#1E6FDB]/25 hover:shadow-[#1E6FDB]/40">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
            <a href="tel:+255713503780" className="w-full sm:w-auto">
              <Button size="xl" variant="outline-white" className="w-full group">
                <Phone className="mr-2 w-4 h-4 text-[#1E6FDB]" aria-hidden="true" />
                Call Now
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
