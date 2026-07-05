"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Search, PackageCheck, Truck } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  { step: "01", icon: MessageSquare, title: "Send Your Enquiry",  description: "Call, email, or fill in our contact form with your part details — part number, vehicle model, or a description works fine." },
  { step: "02", icon: Search,        title: "We Source It",        description: "Our team checks stock, contacts our supplier network, and finds the best option for your needs within 24 hours." },
  { step: "03", icon: PackageCheck,  title: "Quote & Confirm",     description: "We send you a clear quote with pricing and availability. Once confirmed, your order is processed immediately." },
  { step: "04", icon: Truck,         title: "Delivery to You",     description: "Parts are inspected, packed, and dispatched — across Dar es Salaam or upcountry via our freight partners." },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} aria-label="How our process works" className="relative py-24 md:py-32 bg-[#060D1C] overflow-hidden africa-texture">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#0077FF]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#0077FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="block w-5 h-px bg-[#0077FF]" />
            How It Works
            <span className="block w-5 h-px bg-[#0077FF]" />
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-white leading-tight">
            Simple Process.{" "}
            <span className="gradient-text-static">Fast Results.</span>
          </h2>
          <p className="mt-5 text-white/45 max-w-md mx-auto leading-relaxed">
            Getting your parts is straightforward — just four steps from enquiry to delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connector line (desktop) */}
          <div className="absolute top-[3.2rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#0077FF]/30 to-transparent hidden lg:block pointer-events-none" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, ease, delay: i * 0.1 }}
                className="group flex flex-col items-center text-center p-7 rounded-2xl glass-dark glass-dark-hover"
              >
                <div className="relative mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#0077FF] to-[#0055CC] shadow-lg shadow-[#0077FF]/30 group-hover:shadow-[#0077FF]/50 transition-shadow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-1 w-5 h-5 rounded-full bg-[#060D1C] border border-[#0077FF]/50 flex items-center justify-center text-[9px] font-black text-[#0077FF]">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#60AEFF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
