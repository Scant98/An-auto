"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

const milestones = [
  { year: "2004", event: "Founded and registered with BRELA as a private partnership in Dar es Salaam" },
  { year: "2008", event: "Expanded product range to include industrial and agricultural machinery parts" },
  { year: "2012", event: "Established direct supplier relationships across Asia, Europe and the Middle East" },
  { year: "2016", event: "Added marine equipment parts, electrical equipment, and building materials" },
  { year: "Today", event: "Trusted supplier to government institutions including Tanzania Ports Authority, Tanzania Railways Corporation, and Dawasco" },
];

export default function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Our company story"
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden h-[480px] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=85&auto=format&fit=crop"
                alt="Industrial logistics warehouse in Tanzania"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1628]/40 to-transparent" />
            </div>

            {/* Float stat card */}
            <div className="absolute -bottom-5 -right-5 bg-[#0A1628] text-white p-5 rounded-xl shadow-xl border border-white/10 z-10">
              <div className="text-3xl font-black text-white">20+</div>
              <div className="text-xs text-white/55 mt-0.5">Years in Business</div>
            </div>

            {/* Float badge */}
            <div className="absolute -top-4 -left-4 bg-white border border-slate-100 p-3 rounded-xl shadow-lg z-10 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#1E6FDB] flex items-center justify-center">
                <span className="text-white font-black text-sm">AN</span>
              </div>
              <div>
                <p className="text-xs font-bold text-[#0A1628] leading-tight">A.N Auto Trading</p>
                <p className="text-[10px] text-[#0A1628]/45">Est. 2004 · Dar es Salaam</p>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E6FDB]/10 border border-[#1E6FDB]/20 text-[#1E6FDB] text-xs font-semibold uppercase tracking-widest mb-5">
              Our Story
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1628] leading-tight mb-6">
              Built on Trust.{" "}
              <span className="gradient-text-static">Grown on Results.</span>
            </h2>
            <p className="text-[#0A1628]/65 leading-relaxed mb-5">
              A.N Auto Trading &amp; General Supplies is a private partnership enterprise established and registered with the Business Registration and Licensing Authority (BRELA) in 2004 under Certificate of Registration No. <strong>148379</strong>.
            </p>
            <p className="text-[#0A1628]/65 leading-relaxed mb-5">
              For over two decades, we have been importers and sellers of spare parts for motor vehicles, industrial and agricultural machinery, marine equipment, tyres and lubricants, building materials, electrical equipment, and hardware — serving retailers, government institutions, and businesses countrywide.
            </p>
            <p className="text-[#0A1628]/65 leading-relaxed mb-8">
              Our major clients include <strong>Tanzania Ports Authority</strong>, <strong>Tanzania Railways Corporation</strong>, and <strong>Dar es Salaam Water Supply Company (Dawasco)</strong> — a testament to the trust we have built through transparency, quality, and reliability.
            </p>

            {/* Timeline */}
            <div className="flex flex-col gap-3">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-start gap-3">
                  <div className="flex items-center gap-2 flex-shrink-0 w-16">
                    <CheckCircle2 className="w-4 h-4 text-[#1E6FDB] flex-shrink-0" aria-hidden="true" />
                    <span className="text-xs font-bold text-[#1E6FDB] w-10">{m.year}</span>
                  </div>
                  <span className="text-sm text-[#0A1628]/60 leading-relaxed">{m.event}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
