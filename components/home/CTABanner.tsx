"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} aria-label="Call to action" className="relative py-28 md:py-36 overflow-hidden">
      {/* Full-bleed azure gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003EA6] via-[#0077FF] to-[#0055CC]" />
      {/* Dark overlay to deepen */}
      <div className="absolute inset-0 bg-[#060D1C]/40" />

      {/* Africa texture */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 2 L26 14 L14 26 L2 14 Z' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial light centre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#60AEFF]/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Top/bottom lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/20" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 text-white text-xs font-bold uppercase tracking-[0.18em] mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Ready to Get Started?
          </div>

          {/* Headline */}
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-white leading-[0.95] tracking-tight mb-6">
            Need Parts Delivered<br />
            <span className="text-[#60AEFF]">Across Tanzania?</span>
          </h2>

          <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Contact our team today for a fast quote on any spare part, bulk order, or custom sourcing request. We respond within 24 hours.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="xl"
                className="group w-full sm:w-auto bg-white text-[#060D1C] hover:bg-[#60AEFF] border-0 shadow-xl shadow-black/25 hover:-translate-y-0.5 transition-all duration-200 font-bold"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+255685604910" className="w-full sm:w-auto">
              <Button
                size="xl"
                className="group w-full border-2 border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white/60 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone className="mr-2 w-4 h-4" />
                +255 685 604 910
              </Button>
            </a>
          </div>

          {/* Trust note */}
          <p className="mt-10 text-white/40 text-sm">
            Dar es Salaam · Serving All of Tanzania · Est. 2004
          </p>
        </motion.div>
      </div>
    </section>
  );
}
