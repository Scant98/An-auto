"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Handshake, Users, Globe2, Eye, Target } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const values = [
  {
    icon: ShieldCheck,
    title: "Transparency & Accountability",
    description: "We excel in leadership, openness, and accuracy in all dealings with our clients. Honest pricing and clear communication are non-negotiable.",
  },
  {
    icon: Users,
    title: "Equality",
    description: "We believe in equal opportunity. We do not discriminate our esteemed customers on the basis of locality or scale — every client receives the same dedication.",
  },
  {
    icon: Handshake,
    title: "Client-Centred Service",
    description: "Our experience is sounding to the appreciation of our clients. We build lasting partnerships rooted in reliability and genuine care.",
  },
  {
    icon: Globe2,
    title: "Global Reach, Local Roots",
    description: "We import quality products from trusted international suppliers while remaining deeply embedded in Tanzania's business community.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To make sure we import and distribute quality and affordable products to our clients across all sectors and regions.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description: "To extend our services to up-country cities and towns across the United Republic of Tanzania and to the wider East African bloc.",
  },
];

export default function ValuesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Our core values"
      className="relative py-20 md:py-28 bg-[#0A1628] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#1E6FDB]/7 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E6FDB]/10 border border-[#1E6FDB]/20 text-[#6BADF5] text-xs font-semibold uppercase tracking-widest mb-4">
            What Drives Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Core Values, Vision{" "}
            <span className="gradient-text-static">&amp; Mission</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="group p-7 rounded-2xl glass-card glass-card-hover"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1E6FDB]/15 border border-[#1E6FDB]/20 mb-5 group-hover:bg-[#1E6FDB]/25 group-hover:border-[#1E6FDB]/40 transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#1E6FDB]" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-white mb-2.5 group-hover:text-[#60a5fa] transition-colors duration-200">
                  {value.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
