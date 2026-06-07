"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const featured = [
  {
    title: "Auto Spare Parts",
    description: "Genuine and aftermarket parts for all major vehicle makes. Engines, brakes, suspension, electrical and more.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80&auto=format&fit=crop",
    alt: "Car engine spare parts",
    tag: "Most Popular",
  },
  {
    title: "Forklift & Heavy Equipment",
    description: "Forks, masts, hydraulic systems, tyres, and engine components for forklifts and warehouse equipment.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop",
    alt: "Forklift in industrial warehouse",
    tag: "Industrial",
  },
  {
    title: "Truck & Commercial Parts",
    description: "Drive shafts, gear systems, air brakes, exhaust components, and body parts for heavy commercial trucks.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format&fit=crop",
    alt: "Heavy commercial truck",
    tag: "Commercial",
  },
];

export default function ProductsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Featured products"
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E6FDB]/10 border border-[#1E6FDB]/20 text-[#1E6FDB] text-xs font-semibold uppercase tracking-widest mb-4">
              What We Supply
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628] leading-tight">
              Products Built for{" "}
              <span className="gradient-text-static">Tanzania&apos;s Industry</span>
            </h2>
          </div>
          <Link href="/products" className="flex-shrink-0">
            <Button variant="outline" size="default" className="group border-[#0A1628]/20 text-[#0A1628] hover:bg-[#0A1628] hover:text-white hover:border-[#0A1628]">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
          </Link>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featured.map((product) => (
            <motion.div
              key={product.title}
              variants={fadeInUp}
              className="group relative rounded-2xl overflow-hidden bg-[#0A1628] cursor-pointer"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/20 to-transparent" />
                {/* Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1E6FDB]/80 backdrop-blur-sm text-white text-xs font-semibold">
                  {product.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#60a5fa] transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed mb-5">
                  {product.description}
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-[#1E6FDB] text-sm font-medium hover:text-[#60a5fa] transition-colors group/link"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </Link>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 rounded-2xl border border-white/[0.05] group-hover:border-[#1E6FDB]/30 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-[#0A1628]/50 text-sm">
            Also supplying{" "}
            <Link href="/products" className="text-[#1E6FDB] hover:underline font-medium">
              Agricultural Machinery Parts
            </Link>
            {", "}
            <Link href="/products" className="text-[#1E6FDB] hover:underline font-medium">
              Marine Equipment Parts
            </Link>
            {", "}
            <Link href="/products" className="text-[#1E6FDB] hover:underline font-medium">
              Tyres &amp; Lubricants
            </Link>
            {", "}
            <Link href="/products" className="text-[#1E6FDB] hover:underline font-medium">
              Electrical Equipment
            </Link>
            {" &amp; "}
            <Link href="/products" className="text-[#1E6FDB] hover:underline font-medium">
              Hardware &amp; Plumbing Materials
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
