"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Boxes, Headphones, Truck, ShoppingBag, BadgeCheck } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const services = [
  {
    icon: Search,
    title: "Parts Sourcing & Importation",
    description:
      "We import directly from verified manufacturers and distributors across Asia, Europe, and the Middle East. Our procurement team identifies the best source for each part — balancing quality, availability, and cost.",
    highlights: ["Genuine OEM & quality aftermarket parts", "Global supplier network", "Part number lookup", "Spec-based sourcing"],
  },
  {
    icon: Boxes,
    title: "Wholesale & Bulk Supply",
    description:
      "Operating a garage, fleet, or construction firm? We support high-volume orders with competitive bulk pricing, consistent stock levels, and dedicated account management for repeat clients.",
    highlights: ["Volume pricing available", "Fleet & contractor supply", "Consistent stock levels", "Account management"],
  },
  {
    icon: Headphones,
    title: "Technical Consultation",
    description:
      "Not sure which part fits? Our experienced team offers honest, knowledgeable advice on part compatibility, brand comparisons, and the right specification for your application.",
    highlights: ["Part compatibility checks", "Brand & grade comparisons", "Spec identification", "OEM vs aftermarket advice"],
  },
  {
    icon: Truck,
    title: "Express Local Delivery",
    description:
      "We deliver across Dar es Salaam and ship upcountry through reliable freight partners. Urgent orders are handled with priority dispatch — because we know downtime costs money.",
    highlights: ["Dar es Salaam delivery", "Upcountry shipping via freight", "Priority dispatch for urgent orders", "Order tracking support"],
  },
  {
    icon: ShoppingBag,
    title: "Custom Parts Ordering",
    description:
      "Need a part that's hard to find locally? Give us the part number, model, or specification and we'll source it from our international network. No request is too specific.",
    highlights: ["Hard-to-find parts", "Custom specification sourcing", "Part number matching", "International procurement"],
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description:
      "We inspect all items before dispatch. Our QA process checks parts against order specifications, packaging integrity, and supplier certification. You receive what you ordered — every time.",
    highlights: ["Pre-dispatch inspection", "Specification verification", "Supplier certification check", "Packaging integrity review"],
  },
];

export default function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      aria-label="Our services"
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E6FDB]/10 border border-[#1E6FDB]/20 text-[#1E6FDB] text-xs font-semibold uppercase tracking-widest mb-4">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1628] leading-tight">
            Six Services. One Purpose.{" "}
            <span className="gradient-text-static">Keeping You Operational.</span>
          </h2>
          <p className="mt-5 text-[#0A1628]/55 max-w-xl mx-auto leading-relaxed">
            From a single replacement part to a complete fleet supply contract — we have the capability and the expertise to deliver.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group p-7 rounded-2xl border border-slate-200 bg-white hover:border-[#1E6FDB]/40 hover:shadow-[0_4px_32px_rgba(30,111,219,0.10)] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1E6FDB]/10 border border-[#1E6FDB]/20 group-hover:bg-[#1E6FDB] group-hover:border-[#1E6FDB] transition-all duration-300 flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#1E6FDB] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-[#0A1628]/30 uppercase tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0A1628] mb-3 group-hover:text-[#1E6FDB] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-sm text-[#0A1628]/60 leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-[#0A1628]/50">
                      <span className="w-1 h-1 rounded-full bg-[#1E6FDB] flex-shrink-0" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
