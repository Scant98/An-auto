"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Boxes, Headphones, Truck, ShoppingBag, BadgeCheck } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  { icon: Search,       title: "Parts Sourcing",        description: "We source genuine and aftermarket parts from verified global suppliers across Asia, Europe and the Middle East." },
  { icon: Boxes,        title: "Bulk & Wholesale",       description: "Large volume orders for garages, construction firms, and fleet operators at competitive wholesale pricing." },
  { icon: Truck,        title: "Fast Local Delivery",    description: "Reliable delivery across Dar es Salaam and upcountry Tanzania within agreed timelines." },
  { icon: Headphones,   title: "Technical Support",      description: "Expert guidance on part compatibility, specifications, and sourcing for complex requirements." },
  { icon: ShoppingBag,  title: "Custom Orders",          description: "Specialized or hard-to-find parts sourced on request from our international supplier network." },
  { icon: BadgeCheck,   title: "Quality Assurance",      description: "Every item inspected before delivery. We stand behind everything we supply." },
];

export default function ServicesPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} aria-label="Services overview" className="relative bg-[#060D1C] py-24 md:py-32 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0077FF]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0077FF]/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative wrap">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-flex items-center gap-2 text-[#0077FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="block w-5 h-px bg-[#0077FF]" />
              How We Work
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-white leading-tight">
              Services That Keep<br />
              <span className="gradient-text-static">Business Moving</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors group"
            >
              All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* ── Numbered editorial list ── */}
        <div className="flex flex-col">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, ease, delay: i * 0.09 }}
                className="group relative"
              >
                {/* Top rule */}
                <div className="absolute top-0 inset-x-0 h-px bg-white/[0.07] group-hover:bg-[#0077FF]/30 transition-colors duration-300" />

                <div className="flex items-start gap-6 md:gap-10 py-8 md:py-10">
                  {/* Number */}
                  <span className="text-[3rem] md:text-[4rem] font-black text-white/[0.06] group-hover:text-[#0077FF]/20 transition-colors duration-300 leading-none flex-shrink-0 select-none w-16 text-right">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="mt-2 flex-shrink-0">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#0077FF]/12 border border-[#0077FF]/20 group-hover:bg-[#0077FF] group-hover:border-[#0077FF] transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#0077FF] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#60AEFF] transition-colors duration-200 mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed max-w-xl">
                      {svc.description}
                    </p>
                  </div>

                  {/* Arrow on hover */}
                  <div className="hidden md:flex items-center self-center">
                    <ArrowRight className="w-5 h-5 text-white/0 group-hover:text-[#0077FF] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
          {/* Bottom rule */}
          <div className="h-px bg-white/[0.07]" />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7, ease }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-[#0077FF]/50 hover:bg-[#0077FF]/8 transition-all duration-200 text-sm font-semibold group"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
