"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Car, Forklift, Truck, Building2, Cog, Anchor, Zap, Hammer, Gauge, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const products = [
  {
    id: "motor-vehicle-parts",
    icon: Car,
    title: "Motor Vehicle Spare Parts",
    tagline: "For all major vehicle makes & models",
    description:
      "From engines and transmissions to braking systems and electrics — we stock and source a complete range of genuine and quality aftermarket parts for passenger cars, SUVs, and light commercial vehicles.",
    image: "/images/sparepart.jpg",
    alt: "Motor vehicle spare parts",
    features: [
      "Engine components & rebuilds",
      "Transmission & gearbox parts",
      "Braking systems (pads, discs, callipers)",
      "Suspension & steering",
      "Electrical & ignition systems",
      "Cooling & fuel system parts",
      "Body parts & panels",
      "Filters, oils & service items",
    ],
    brands: ["Toyota", "Mitsubishi", "Nissan", "Isuzu", "Hino", "And more"],
  },
  {
    id: "industrial-machinery-parts",
    icon: Cog,
    title: "Industrial Machinery Parts",
    tagline: "For factories, plants & processing",
    description:
      "We supply critical components for industrial machinery used in manufacturing, processing, and extraction. Bearings, belts, seals, hydraulic parts, and more — sourced from trusted global suppliers.",
    image: "/images/industrial.png",
    alt: "Industrial machinery and mechanical components",
    features: [
      "Bearings (ball, roller, thrust)",
      "Belts, chains & drives",
      "Mechanical seals & O-rings",
      "Hydraulic & pneumatic components",
      "Electric motors & pumps",
      "Gear boxes & speed reducers",
      "Coupling & shaft components",
      "Valves, gauges & instrumentation",
    ],
    brands: ["SKF", "NSK", "Bosch", "Parker", "Gates", "And more"],
  },
  {
    id: "agricultural-machinery-parts",
    icon: Leaf,
    title: "Agricultural Machinery Parts",
    tagline: "Keep farms & plantations productive",
    description:
      "Quality spare parts for tractors, harvesters, irrigation pumps, and all agricultural machinery. We help Tanzania's farming sector stay operational with fast access to reliable replacement parts.",
    image: "/images/agricultural-machinery.jpg",
    alt: "Agricultural machinery parts and tractors",
    features: [
      "Tractor engine & drivetrain parts",
      "PTO shafts & gearboxes",
      "Hydraulic lift & cylinder parts",
      "Harvester & thresher components",
      "Irrigation pump parts",
      "Filters & service consumables",
      "Tyres & wheels for farm equipment",
      "Electrical & lighting components",
    ],
    brands: ["Massey Ferguson", "John Deere", "Kubota", "New Holland", "And more"],
  },
  {
    id: "tyres-lubricants",
    icon: Gauge,
    title: "Tyres, Tubes, Flaps & Lubricants",
    tagline: "For motor vehicles, heavy machinery & forklifts",
    description:
      "A comprehensive range of tyres, tubes, and flaps for motor vehicles, heavy machinery, and forklifts — paired with quality lubricants and oils to keep every machine running at peak performance.",
    image: "/images/tyres.jpg",
    alt: "Tyres and lubricants for vehicles and machinery",
    features: [
      "Passenger & commercial vehicle tyres",
      "Heavy machinery & OTR tyres",
      "Forklift solid & pneumatic tyres",
      "Inner tubes & flap sets",
      "Engine oils & gear oils",
      "Hydraulic & transmission fluids",
      "Greases & specialty lubricants",
      "Brake & coolant fluids",
    ],
    brands: ["Bridgestone", "Michelin", "Pirelli", "Total", "Shell", "And more"],
  },
  {
    id: "marine-equipment-parts",
    icon: Anchor,
    title: "Marine Equipment Parts",
    tagline: "For vessels, boats & port machinery",
    description:
      "Reliable spare parts for marine engines, vessel systems, and port equipment. Serving Tanzania's coastal and inland waterway operators with quality components sourced internationally.",
    image: "/images/marine-machinery.jpg",
    alt: "Marine equipment and vessel machinery parts",
    features: [
      "Marine engine parts & overhauls",
      "Propeller shafts & rudder components",
      "Pumps, valves & sea cocks",
      "Winch & anchor windlass parts",
      "Electrical & navigation equipment",
      "Hull fittings & deck hardware",
      "Cooling & fuel system parts",
      "Filters, seals & service kits",
    ],
    brands: ["Yanmar", "Volvo Penta", "Cummins Marine", "Caterpillar", "And more"],
  },
  {
    id: "building-materials",
    icon: Building2,
    title: "Building Materials",
    tagline: "For construction & infrastructure",
    description:
      "Supporting Tanzania's growing construction sector with quality building hardware, pipes, fittings, and fasteners imported from reliable international suppliers.",
    image: "/images/building-material.png",
    alt: "Building materials and construction supplies",
    features: [
      "Pipes, tubes & fittings (GI, PVC, HDPE)",
      "Roofing hardware & accessories",
      "Bolts, nuts & fasteners",
      "Structural steel sections",
      "Construction adhesives & sealants",
      "Safety equipment & signage",
      "Cement, blocks & binding materials",
      "Scaffolding & formwork hardware",
    ],
    brands: ["Local & imported brands available on request"],
  },
  {
    id: "electrical-equipment",
    icon: Zap,
    title: "Electrical Equipment, Appliances & Fittings",
    tagline: "For industrial & commercial installations",
    description:
      "A broad range of electrical equipment, appliances, and fittings for industrial, commercial, and residential installations. Sourced from verified suppliers to ensure safety and reliability.",
    image: "/images/electrical-appliance.avif",
    alt: "Electrical equipment, appliances and fittings",
    features: [
      "Switchgear & circuit breakers",
      "Cable trays & conduit fittings",
      "Industrial plugs, sockets & connectors",
      "Electric motors & starters",
      "Transformers & voltage stabilisers",
      "Lighting fixtures & fittings",
      "Control panels & distribution boards",
      "Wiring accessories & terminals",
    ],
    brands: ["ABB", "Schneider Electric", "Legrand", "Siemens", "LG", "And more"],
  },
  {
    id: "hardware-plumbing",
    icon: Hammer,
    title: "Hardware, Plumbing & Woodworking Materials",
    tagline: "Tools, fittings & workshop essentials",
    description:
      "Everything from hand tools and power tool accessories to plumbing fittings and woodworking materials. We supply workshops, contractors, and industrial clients across Tanzania.",
    image: "/images/plumbing.avif",
    alt: "Hardware, plumbing and woodworking materials",
    features: [
      "Hand tools & power tool accessories",
      "Cutting, drilling & grinding tools",
      "Plumbing pipes, fittings & valves",
      "Taps, mixers & sanitary ware",
      "Woodworking machinery parts",
      "Adhesives, sealants & fillers",
      "Safety & protective equipment",
      "Fasteners, anchors & fixings",
    ],
    brands: ["Stanley", "Bosch", "DeWalt", "Local & imported brands", "And more"],
  },
];

export default function ProductsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      aria-label="Product catalogue"
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
          <span className="inline-flex items-center gap-2 text-[#0077FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="block w-5 h-px bg-[#0077FF]" />
            Our Full Range
            <span className="block w-5 h-px bg-[#0077FF]" />
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-[#060D1C] leading-tight">
            Eight Categories. One Trusted Supplier.
          </h2>
          <p className="mt-4 text-[#060D1C]/50 max-w-xl mx-auto">
            Click any category to see what&apos;s included, then contact us for a fast quote.
          </p>
        </motion.div>

        {/* Product cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-6"
        >
          {products.map((product) => {
            const Icon = product.icon;
            const isOpen = active === product.id;

            return (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className={cn(
                  "rounded-2xl overflow-hidden border transition-all duration-300",
                  isOpen
                    ? "border-[#0077FF]/40 shadow-[0_0_40px_rgba(0,119,255,0.12)]"
                    : "border-slate-200 hover:border-[#0077FF]/30 shadow-sm hover:shadow-md"
                )}
              >
                {/* Card header — always visible */}
                <button
                  onClick={() => setActive(isOpen ? null : product.id)}
                  className="w-full text-left bg-white"
                  aria-expanded={isOpen}
                  aria-controls={`product-${product.id}`}
                >
                  <div className="flex items-center gap-5 p-6">
                    <div className={cn(
                      "flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl border transition-all duration-300",
                      isOpen
                        ? "bg-[#0077FF] border-[#0077FF] shadow-lg shadow-[#0077FF]/30"
                        : "bg-[#0077FF]/10 border-[#0077FF]/20"
                    )}>
                      <Icon className={cn("w-5 h-5 transition-colors", isOpen ? "text-white" : "text-[#0077FF]")} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-bold text-[#060D1C]">{product.title}</h3>
                        <span className="text-xs text-[#0077FF] font-medium bg-[#0077FF]/8 px-2.5 py-0.5 rounded-full">
                          {product.tagline}
                        </span>
                      </div>
                      <p className="text-sm text-[#060D1C]/50 mt-1 line-clamp-1">{product.description}</p>
                    </div>
                    <div className={cn(
                      "flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300",
                      isOpen ? "bg-[#0077FF] border-[#0077FF]" : "bg-slate-50 border-slate-200"
                    )}>
                      <ArrowRight className={cn("w-4 h-4 transition-all duration-300", isOpen ? "text-white rotate-90" : "text-slate-400")} aria-hidden="true" />
                    </div>
                  </div>
                </button>

                {/* Expanded detail */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`product-${product.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border-t border-slate-100">
                        {/* Image */}
                        <div className="relative h-56 lg:h-auto lg:col-span-2 overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 lg:to-white/0" />
                        </div>

                        {/* Details */}
                        <div className="p-8 lg:col-span-3 bg-slate-50/50">
                          <p className="text-[#060D1C]/70 text-sm leading-relaxed mb-6">{product.description}</p>

                          <div className="mb-6">
                            <p className="text-xs font-bold uppercase tracking-widest text-[#060D1C]/40 mb-3">What&apos;s included</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {product.features.map((f) => (
                                <li key={f} className="flex items-start gap-2 text-sm text-[#060D1C]/70">
                                  <Check className="w-4 h-4 text-[#0077FF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <Link href="/contact">
                              <Button variant="default" className="group">
                                Enquire Now
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                              </Button>
                            </Link>
                            <a href="tel:+255685604910" className="text-sm text-[#060D1C]/50 hover:text-[#0077FF] transition-colors font-medium">
                              Or call +255 685 604 910
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center p-10 rounded-2xl bg-[#060D1C] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0077FF]/10 to-transparent pointer-events-none" />
          <h3 className="text-2xl font-black text-white mb-3 relative">Can&apos;t find what you&apos;re looking for?</h3>
          <p className="text-white/55 text-sm mb-6 relative">We source custom and hard-to-find parts on request. Send us your part number or specification.</p>
          <Link href="/contact" className="relative">
            <Button variant="default" size="lg">
              Send a Custom Enquiry
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
