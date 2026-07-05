"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

function useCounter(end: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let raf: number;
    const t0 = performance.now();
    const run = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const e = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(e * end));
      if (p < 1) raf = requestAnimationFrame(run);
      else setCount(end);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration]);
  return count;
}

const stats = [
  { value: 20,   suffix: "+", label: "Years in Business", sub: "Since 2004" },
  { value: 5000, suffix: "+", label: "Parts Supplied",    sub: "OEM & aftermarket" },
  { value: 200,  suffix: "+", label: "Business Clients",  sub: "Across Tanzania" },
  { value: 24,   suffix: "h", label: "Response Time",     sub: "Fast turnaround" },
];

function Stat({ s, started }: { s: typeof stats[0]; started: boolean }) {
  const n = useCounter(s.value, 2000, started);
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease }}
      className="flex flex-col items-center text-center relative"
    >
      <span className="text-[clamp(3rem,7vw,5.5rem)] font-black text-white leading-none tabular-nums">
        {n.toLocaleString()}
        <span className="text-[#0077FF]">{s.suffix}</span>
      </span>
      <span className="mt-3 text-sm font-bold text-white/75 uppercase tracking-widest">{s.label}</span>
      <span className="mt-1 text-xs text-white/35">{s.sub}</span>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Company statistics"
      className="relative py-24 bg-[#060D1C] overflow-hidden africa-texture"
    >
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[300px] bg-[#0077FF]/7 rounded-full blur-[120px]" />
      </div>

      {/* Top / bottom rules */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0077FF]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0077FF]/20 to-transparent" />

      <div className="relative wrap">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#0077FF] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="block w-6 h-px bg-[#0077FF]" />
            By the Numbers
            <span className="block w-6 h-px bg-[#0077FF]" />
          </span>
        </motion.div>

        {/* Stats grid with vertical dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#060D1C] px-8 py-10 relative">
              <Stat s={s} started={inView} />
            </div>
          ))}
        </div>

        {/* Tanzania pride line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-10 text-center text-white/25 text-sm"
        >
          Proudly serving Tanzania&apos;s businesses since 2004 · Dar es Salaam, East Africa
        </motion.p>
      </div>
    </section>
  );
}
