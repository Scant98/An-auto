"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Anchor, Train, Droplets, ArrowRight, Building2 } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const clients = [
  {
    icon: Anchor,
    abbr: "TPA",
    name: "Tanzania Ports Authority",
    sector: "Ports & Maritime",
    description:
      "Supplying critical marine, mechanical, and port machinery parts to keep East Africa's largest port in Dar es Salaam running around the clock.",
    color: "#0077FF",
  },
  {
    icon: Train,
    abbr: "TRC",
    name: "Tanzania Railways Corporation",
    sector: "Rail Transport",
    description:
      "Providing locomotive components, rail maintenance parts, and heavy machinery supplies for Tanzania's national rail infrastructure.",
    color: "#0077FF",
  },
  {
    icon: Droplets,
    abbr: "DAWASCO",
    name: "Dawasco",
    sector: "Water & Utilities",
    description:
      "Delivering pump components, mechanical fittings, and pipe system parts for Dar es Salaam's essential water supply operations.",
    color: "#0077FF",
  },
];

export default function TrustedBy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Trusted by Tanzania's leading organisations"
      className="relative py-24 md:py-32 overflow-hidden bg-[#060D1C]"
    >
      {/* Background image — Dar es Salaam port at low opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=2000&q=70&auto=format&fit=crop"
          alt="Dar es Salaam port"
          fill
          className="object-cover object-center opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060D1C]/80 via-[#060D1C]/60 to-[#060D1C]" />
      </div>

      {/* Azure glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0077FF]/6 rounded-full blur-[120px] pointer-events-none z-[1]" />

      {/* Top/bottom rules */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0077FF]/30 to-transparent z-[1]" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0077FF]/20 to-transparent z-[1]" />

      <div className="relative z-[2] wrap">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-flex items-center gap-2 text-[#0077FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="block w-5 h-px bg-[#0077FF]" />
              Major Clients
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-white leading-tight">
              Trusted by Tanzania&apos;s<br />
              <span className="gradient-text-static">Key Institutions</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-dark"
          >
            <Building2 className="w-5 h-5 text-[#0077FF] flex-shrink-0" />
            <div>
              <p className="text-white text-sm font-bold">200+ Active Clients</p>
              <p className="text-white/40 text-xs">Across all industries in Tanzania</p>
            </div>
          </motion.div>
        </div>

        {/* Client cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {clients.map((client, i) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.abbr}
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, ease, delay: 0.1 + i * 0.12 }}
                className="group relative rounded-2xl overflow-hidden glass-dark glass-dark-hover p-8"
              >
                {/* Large watermark abbrev */}
                <span className="absolute bottom-4 right-5 text-5xl font-black text-white/[0.04] select-none pointer-events-none leading-none">
                  {client.abbr}
                </span>

                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#0077FF]/12 border border-[#0077FF]/25 mb-5 group-hover:bg-[#0077FF] group-hover:border-[#0077FF] transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#0077FF] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Sector badge */}
                <span className="inline-block mb-3 px-3 py-1 rounded-full border border-[#0077FF]/25 bg-[#0077FF]/8 text-[#4DA8FF] text-xs font-bold uppercase tracking-wide">
                  {client.sector}
                </span>

                <h3 className="text-base font-black text-white mb-3 group-hover:text-[#60AEFF] transition-colors leading-tight">
                  {client.name}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  {client.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#0077FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55, ease }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.07]"
        >
          <p className="text-white/30 text-sm text-center sm:text-left">
            Plus hundreds of garages, workshops, construction firms and fleet operators across Tanzania.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[#0077FF] text-sm font-semibold hover:text-[#60AEFF] transition-colors group/link flex-shrink-0"
          >
            Partner with us
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
