"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const milestones = [
  { year: "2004", event: "Founded and registered with BRELA as a private partnership in Dar es Salaam" },
  { year: "2008", event: "Expanded product range to include industrial and agricultural machinery parts" },
  { year: "2012", event: "Established direct supplier relationships across Asia, Europe and the Middle East" },
  { year: "2016", event: "Added marine equipment parts, electrical equipment, and building materials" },
  { year: "Today", event: "Trusted supplier to Tanzania Ports Authority, Tanzania Railways Corporation, and Dawasco" },
];

export default function StorySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} aria-label="Our company story" className="relative py-24 md:py-32 bg-[#EEF4FF] overflow-hidden">
      {/* Subtle warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EEF4FF] via-[#E4EEFF] to-[#EEF4FF]" />

      <div className="relative wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Image side ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden h-[340px] shadow-2xl shadow-[#060D1C]/20">
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=85&auto=format&fit=crop"
                alt="Dar es Salaam port — East Africa's logistics hub"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#060D1C]/50 via-transparent to-[#0077FF]/10" />
            </div>

            {/* Second image — Agricultural machinery */}
            <div className="relative rounded-2xl overflow-hidden h-[200px] mt-3 shadow-xl shadow-[#060D1C]/15">
              <Image
                src="/images/agricultural-machinery.jpg"
                alt="Agricultural machinery parts — keeping Tanzania's farms productive"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#060D1C]/60 via-transparent to-[#0077FF]/8" />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-[#060D1C]/70 backdrop-blur-sm border border-white/10">
                <p className="text-white/70 text-xs font-semibold">Tanzania · East Africa</p>
              </div>
            </div>

            {/* Float stat — bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
              className="absolute -bottom-5 -right-5 bg-[#060D1C] text-white px-6 py-5 rounded-2xl shadow-2xl border border-[#0077FF]/20 z-10"
            >
              <div className="text-4xl font-black text-white">20+</div>
              <div className="text-xs text-white/50 mt-0.5 uppercase tracking-widest">Years in Business</div>
            </motion.div>

            {/* Float badge — top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.55 }}
              className="absolute -top-4 -left-4 bg-white border border-[#E4EEFF] px-4 py-3 rounded-2xl shadow-xl z-10 flex items-center gap-3"
            >
              <Image
                src="/logo1.png"
                alt="A.N Auto Trading Logo"
                width={40}
                height={40}
                className="object-contain flex-shrink-0"
              />
              <div>
                <p className="text-xs font-bold text-[#060D1C] leading-tight">A.N Auto Trading Limited</p>
                <p className="text-[10px] text-[#060D1C]/45">Est. 2004 · Dar es Salaam</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Text side ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 text-[#0077FF] text-xs font-bold uppercase tracking-[0.2em] mb-5">
              <span className="block w-5 h-px bg-[#0077FF]" />
              Our Story
            </span>

            <h2 className="text-[clamp(2rem,3.8vw,3.2rem)] font-black text-[#060D1C] leading-tight mb-7">
              Built on Trust.{" "}
              <span className="gradient-text-static">Grown on Results.</span>
            </h2>

            <p className="text-[#060D1C]/60 leading-relaxed mb-5 text-base">
              A.N Auto Trading &amp; General Supplies is a private partnership enterprise established and registered with the Business Registration and Licensing Authority (BRELA) in 2004 under Certificate of Registration No. <strong className="text-[#060D1C]/80">148379</strong>.
            </p>
            <p className="text-[#060D1C]/60 leading-relaxed mb-5 text-base">
              For over two decades, we have been importers and sellers of spare parts for motor vehicles, industrial and agricultural machinery, marine equipment, tyres and lubricants, building materials, and electrical equipment — serving retailers, government institutions, and businesses countrywide.
            </p>
            <p className="text-[#060D1C]/60 leading-relaxed mb-10 text-base">
              Our major clients include <strong className="text-[#060D1C]/80">Tanzania Ports Authority</strong>, <strong className="text-[#060D1C]/80">Tanzania Railways Corporation</strong>, and <strong className="text-[#060D1C]/80">Dawasco</strong> — a testament to the trust we have built through transparency, quality, and reliability.
            </p>

            {/* Timeline */}
            <div className="flex flex-col gap-4">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, ease, delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex items-center gap-2 flex-shrink-0 w-20">
                    <CheckCircle2 className="w-4 h-4 text-[#0077FF] flex-shrink-0" />
                    <span className="text-xs font-bold text-[#0077FF] w-12">{m.year}</span>
                  </div>
                  <span className="text-sm text-[#060D1C]/55 leading-relaxed">{m.event}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
