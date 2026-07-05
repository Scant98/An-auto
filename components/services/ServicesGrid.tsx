"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Search, Boxes, Headphones, Truck, ShoppingBag, BadgeCheck } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    icon: Search,
    title: "Parts Sourcing & Importation",
    description: "We import directly from verified manufacturers and distributors across Asia, Europe, and the Middle East. Our procurement team identifies the best source for each part — balancing quality, availability, and cost.",
    highlights: ["Genuine OEM & quality aftermarket parts", "Global supplier network", "Part number lookup", "Spec-based sourcing"],
    image: "/images/sparepart.jpg",
    imageAlt: "Spare parts sourcing and importation",
  },
  {
    icon: Boxes,
    title: "Wholesale & Bulk Supply",
    description: "Operating a garage, fleet, or construction firm? We support high-volume orders with competitive bulk pricing, consistent stock levels, and dedicated account management for repeat clients.",
    highlights: ["Volume pricing available", "Fleet & contractor supply", "Consistent stock levels", "Account management"],
    image: "/images/industrial.png",
    imageAlt: "Industrial wholesale and bulk supply",
  },
  {
    icon: Headphones,
    title: "Technical Consultation",
    description: "Not sure which part fits? Our experienced team offers honest, knowledgeable advice on part compatibility, brand comparisons, and the right specification for your application.",
    highlights: ["Part compatibility checks", "Brand & grade comparisons", "Spec identification", "OEM vs aftermarket advice"],
    image: "/images/electrical-appliance.avif",
    imageAlt: "Technical consultation for electrical and mechanical parts",
  },
  {
    icon: Truck,
    title: "Express Local Delivery",
    description: "We deliver across Dar es Salaam and ship upcountry through reliable freight partners. Urgent orders are handled with priority dispatch — because we know downtime costs money.",
    highlights: ["Dar es Salaam delivery", "Upcountry shipping via freight", "Priority dispatch for urgent orders", "Order tracking support"],
    image: "/images/shipment.jpg",
    imageAlt: "Express delivery and shipment logistics",
  },
  {
    icon: ShoppingBag,
    title: "Custom Parts Ordering",
    description: "Need a part that's hard to find locally? Give us the part number, model, or specification and we'll source it from our international network. No request is too specific.",
    highlights: ["Hard-to-find parts", "Custom specification sourcing", "Part number matching", "International procurement"],
    image: "/images/agricultural-machinery.jpg",
    imageAlt: "Custom parts ordering for agricultural and specialty machinery",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description: "We inspect all items before dispatch. Our QA process checks parts against order specifications, packaging integrity, and supplier certification. You receive what you ordered — every time.",
    highlights: ["Pre-dispatch inspection", "Specification verification", "Supplier certification check", "Packaging integrity review"],
    image: "/images/building-material.png",
    imageAlt: "Quality assurance and inspection of building and industrial materials",
  },
];

export default function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} aria-label="Our services" className="relative py-24 md:py-32 bg-[#EEF4FF] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#EEF4FF] via-[#E4EEFF] to-[#EEF4FF]" />

      <div className="relative wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#0077FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="block w-5 h-px bg-[#0077FF]" />
            What We Do
            <span className="block w-5 h-px bg-[#0077FF]" />
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#060D1C] leading-tight">
            Six Services. One Purpose.{" "}
            <span className="gradient-text-static">Keeping You Operational.</span>
          </h2>
          <p className="mt-5 text-[#060D1C]/50 max-w-xl mx-auto leading-relaxed">
            From a single replacement part to a complete fleet supply contract — we have the capability and expertise to deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, ease, delay: i * 0.09 }}
                className="group rounded-2xl bg-white border border-[#C8D8F8] hover:border-[#0077FF]/40 hover:shadow-[0_4px_40px_rgba(0,119,255,0.10)] transition-all duration-300 overflow-hidden"
              >
                {/* Card image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={svc.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 group-hover:bg-[#0077FF] group-hover:border-[#0077FF] transition-all duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute bottom-4 left-4 text-xs font-bold text-white/60 uppercase tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card content */}
                <div className="p-7">
                  <h3 className="text-base font-bold text-[#060D1C] mb-3 group-hover:text-[#0077FF] transition-colors duration-200">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-[#060D1C]/55 leading-relaxed mb-5">
                    {svc.description}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {svc.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-[#060D1C]/45">
                        <span className="w-1 h-1 rounded-full bg-[#0077FF] flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
