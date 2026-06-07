"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Zap, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const badges = [
  { icon: Shield, text: "Quality Assured" },
  { icon: Globe, text: "Globally Sourced" },
  { icon: Zap, text: "Fast Delivery" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A1628]"
      aria-label="Hero section"
    >
      {/* Parallax background image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=2000&q=85&auto=format&fit=crop"
          alt="Industrial engine parts workshop"
          fill
          priority
          className="object-cover object-center opacity-[0.18]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/50 via-[#0A1628]/30 to-[#0A1628]" />
      </motion.div>

      {/* Sparkles */}
      <div className="absolute inset-0 z-[1]">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.3}
          maxSize={1.2}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#1E6FDB"
          speed={1.2}
        />
      </div>

      {/* Radial gradient mask */}
      <div className="absolute inset-0 z-[2] [mask-image:radial-gradient(ellipse_85%_85%_at_50%_40%,transparent_30%,black)]" />

      {/* Large blue glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1E6FDB]/8 rounded-full blur-[120px] z-[1] pointer-events-none animate-glow-pulse" />

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1E6FDB] to-transparent z-[3]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-[4] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col items-center text-center"
      >
        {/* Badge row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex items-center gap-3 mb-8 flex-wrap justify-center"
        >
          {badges.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1E6FDB]/30 bg-[#1E6FDB]/8 text-[#6BADF5] text-xs font-medium backdrop-blur-sm"
            >
              <Icon className="w-3 h-3" aria-hidden="true" />
              {text}
            </div>
          ))}
        </motion.div>

        {/* Location badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.05}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium mb-6 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" aria-hidden="true" />
          Based in Dar es Salaam · Serving All Tanzania
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.12}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight max-w-5xl text-balance"
        >
          Import-Grade Spare Parts.{" "}
          <span className="relative inline-block">
            <span className="gradient-text-static">Delivered Across</span>
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="absolute -bottom-1 left-0 w-full"
              height="5"
              viewBox="0 0 300 5"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 2.5 Q75 0.5 150 2.5 Q225 4.5 300 2.5"
                stroke="url(#heroGrad)"
                strokeWidth="2"
                fill="none"
              />
              <defs>
                <linearGradient id="heroGrad" x1="0" y1="0" x2="300" y2="0">
                  <stop offset="0%" stopColor="#1E6FDB" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
              </defs>
            </motion.svg>
          </span>{" "}
          Tanzania.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.22}
          className="mt-7 text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed"
        >
          A.N Auto Trading supplies quality spare parts for motor vehicles,
          forklifts, trucks, industrial machines, and building materials —
          sourced directly from trusted global suppliers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.32}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="/products">
            <Button size="xl" variant="default" className="group w-full sm:w-auto shadow-lg shadow-[#1E6FDB]/25 hover:shadow-[#1E6FDB]/40">
              Browse Products
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="xl" variant="outline-white" className="w-full sm:w-auto">
              Get a Free Quote
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 border-t border-white/[0.08] pt-10 w-full max-w-2xl mx-auto"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "5,000+", label: "Parts Supplied" },
            { value: "200+", label: "Happy Clients" },
            { value: "24h", label: "Response Time" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-white">{stat.value}</p>
              <p className="text-xs sm:text-sm text-white/45 mt-1 leading-tight">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[4] flex flex-col items-center gap-2 text-white/30"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
