"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Package, Clock } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

function useCounter(end: number, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let raf: number;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setCount(end);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration]);
  return count;
}

const stats = [
  { icon: TrendingUp, value: 20, suffix: "+", label: "Years of Experience", desc: "Serving Tanzania since 2004" },
  { icon: Package, value: 5000, suffix: "+", label: "Parts Supplied", desc: "Genuine & aftermarket parts" },
  { icon: Users, value: 200, suffix: "+", label: "Business Clients", desc: "Garages, contractors & fleets" },
  { icon: Clock, value: 24, suffix: "h", label: "Response Time", desc: "Fast enquiry turnaround" },
];

function StatCard({ stat, started }: { stat: typeof stats[0]; started: boolean }) {
  const count = useCounter(stat.value, 1800, started);
  const Icon = stat.icon;
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative flex flex-col items-center text-center p-8 rounded-2xl glass-card glass-card-hover"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1E6FDB]/15 border border-[#1E6FDB]/20 mb-5 group-hover:bg-[#1E6FDB]/25 group-hover:border-[#1E6FDB]/40 transition-all duration-300">
        <Icon className="w-5 h-5 text-[#1E6FDB]" aria-hidden="true" />
      </div>
      <div className="text-4xl font-black text-white mb-2 tabular-nums">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-sm font-semibold text-white/80 mb-1">{stat.label}</div>
      <div className="text-xs text-white/40 leading-relaxed">{stat.desc}</div>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Company statistics"
      className="relative py-20 md:py-28 bg-[#0A1628] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#1E6FDB]/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} started={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
