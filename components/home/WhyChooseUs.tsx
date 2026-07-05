"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, DollarSign, Clock, Globe2, HeadphonesIcon, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

const reasons = [
  { icon: ShieldCheck,     title: "Verified Quality",         description: "Every part sourced from verified manufacturers. No counterfeits, no compromises." },
  { icon: DollarSign,      title: "Competitive Pricing",      description: "Direct importing cuts the middleman. Savings go straight to you." },
  { icon: Clock,           title: "Fast Turnaround",          description: "Enquiries answered within 24 hours. We know downtime is costly." },
  { icon: Globe2,          title: "Global Sourcing Network",  description: "Supplier relationships across Asia, Europe and the Middle East." },
  { icon: HeadphonesIcon,  title: "Expert Consultation",      description: "Honest advice on compatibility, specifications, and the right part for your application." },
  { icon: Package,         title: "Flexible Order Sizes",     description: "Single-unit repairs to full fleet supply — we scale with your needs." },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} aria-label="Why choose A.N Auto Trading" className="relative bg-[#060E1D] py-24 md:py-32 overflow-hidden">
      {/* Africa texture */}
      <div className="absolute inset-0 africa-texture" />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] bg-[#0077FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative wrap">
        <div className="grid lg:grid-cols-[42%_55%] gap-16 lg:gap-20 items-start">

          {/* ── Left — bold statement ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-flex items-center gap-2 text-[#0077FF] text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <span className="block w-5 h-px bg-[#0077FF]" />
              Why Choose Us
            </span>

            <h2 className="text-[clamp(2.4rem,4.5vw,3.8rem)] font-black text-white leading-[1.0] tracking-tight mb-6">
              Why 200+<br />
              businesses<br />
              trust{" "}
              <span className="gradient-text-static">A.N Auto</span>
            </h2>

            <p className="text-white/50 leading-relaxed text-base mb-10 max-w-sm">
              Over two decades in Tanzania&apos;s spare parts market. We know what businesses need — and we deliver it every time.
            </p>

            <Link href="/contact">
              <Button
                size="lg"
                className="group shadow-xl shadow-[#0077FF]/20 hover:shadow-[#0077FF]/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                Start a Conversation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            {/* Divider with Tanzania text */}
            <div className="mt-14 pt-8 border-t border-white/[0.07]">
              <p className="text-xs text-white/25 uppercase tracking-widest">
                Serving Tanzania since 2004 · BRELA Reg. No. 148379
              </p>
            </div>
          </motion.div>

          {/* ── Right — feature grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 32 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, ease, delay: 0.1 + i * 0.08 }}
                  className="group relative p-6 rounded-2xl glass-dark glass-dark-hover overflow-hidden"
                >
                  {/* Number watermark */}
                  <span className="absolute top-3 right-4 text-5xl font-black text-white/[0.025] select-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#0077FF]/12 border border-[#0077FF]/20 mb-4 group-hover:bg-[#0077FF] group-hover:border-[#0077FF] transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#0077FF] group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 group-hover:text-[#60AEFF] transition-colors duration-200">
                    {r.title}
                  </h3>
                  <p className="text-xs text-white/45 leading-relaxed">
                    {r.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
