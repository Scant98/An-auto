"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

const featured = [
  {
    id: "auto",
    title: "Auto Spare Parts",
    description: "Genuine and aftermarket parts for all major vehicle makes — engines, brakes, suspension, electrical and more. Keeping Tanzania's roads moving.",
    image: "/images/sparepart.jpg",
    alt: "Auto spare parts and components",
    tag: "Most Popular",
    span: true,
  },
  {
    id: "forklift",
    title: "Forklift & Heavy Equipment",
    description: "Hydraulic systems, tyres, and engine components for forklifts and warehouse machinery.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80&auto=format&fit=crop",
    alt: "Industrial machinery and forklift equipment",
    tag: "Industrial",
    span: false,
  },
  {
    id: "trucks",
    title: "Truck & Commercial Parts",
    description: "Drive shafts, air brakes, and body parts for heavy commercial trucks across East Africa.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=700&q=80&auto=format&fit=crop",
    alt: "Heavy commercial trucks on East African roads",
    tag: "Commercial",
    span: false,
  },
];

export default function ProductsPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} aria-label="Featured products" className="relative bg-[#EEF4FF] py-24 md:py-32 overflow-hidden">
      {/* Warm background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EEF4FF] via-[#E4EEFF] to-[#EEF4FF]" />

      <div className="relative wrap">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-[#0077FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="block w-5 h-px bg-[#0077FF]" />
              What We Supply
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#060D1C] leading-tight">
              Products Built for<br />
              <span className="gradient-text-static">Tanzania&apos;s Industry</span>
            </h2>
          </div>
          <Link href="/products" className="flex-shrink-0">
            <Button
              variant="outline"
              className="group border-[#060D1C]/20 text-[#060D1C] hover:bg-[#060D1C] hover:text-white hover:border-[#060D1C] transition-all duration-200"
            >
              View All Products
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[280px]">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: i * 0.12 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                p.span ? "md:col-span-7 md:row-span-2" : "md:col-span-5"
              }`}
              whileHover={{ scale: 1.015, transition: { type: "spring", stiffness: 360, damping: 28 } }}
            >
              {/* Image */}
              <Image
                src={p.image}
                alt={p.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={p.span ? "(max-width:768px) 100vw, 58vw" : "(max-width:768px) 100vw, 42vw"}
              />

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${
                p.span
                  ? "from-[#060D1C]/90 via-[#060D1C]/30 to-transparent"
                  : "from-[#060D1C]/85 via-[#060D1C]/25 to-transparent"
              }`} />

              {/* Gold tint on hover */}
              <div className="absolute inset-0 bg-[#0077FF]/0 group-hover:bg-[#0077FF]/8 transition-all duration-500" />

              {/* Tag */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0077FF] text-white text-xs font-bold tracking-wide shadow-lg">
                {p.tag}
              </div>

              {/* Content */}
              <div className={`absolute inset-x-0 bottom-0 p-6 ${p.span ? "p-8" : ""}`}>
                <h3 className={`font-black text-white mb-2 group-hover:text-[#60AEFF] transition-colors ${
                  p.span ? "text-2xl sm:text-3xl" : "text-xl"
                }`}>
                  {p.title}
                </h3>
                <p className={`text-white/60 leading-relaxed mb-4 ${p.span ? "text-sm max-w-xs" : "text-xs"}`}>
                  {p.description}
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-[#0077FF] text-sm font-semibold hover:text-[#60AEFF] transition-colors group/link"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* Border highlight on hover */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.05] group-hover:ring-[#0077FF]/30 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* ── Also supplying ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="mt-10 text-center text-[#060D1C]/45 text-sm"
        >
          Also supplying{" "}
          {["Agricultural Machinery Parts", "Marine Equipment", "Tyres & Lubricants", "Electrical Equipment", "Hardware & Plumbing"].map((item, i, arr) => (
            <span key={item}>
              <Link href="/products" className="text-[#0077FF] hover:underline font-medium">{item}</Link>
              {i < arr.length - 1 ? " · " : ""}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
