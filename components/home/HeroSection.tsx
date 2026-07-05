"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Shield, Globe, Zap, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";

const ease = [0.22, 1, 0.36, 1] as const;

const stat = (v: string, l: string) => ({ value: v, label: l });
const floatStats = [
  stat("20+", "Years Experience"),
  stat("5,000+", "Parts Supplied"),
  stat("200+", "Happy Clients"),
];

const heroSlides = [
  { src: "/images/shipment.jpg",            alt: "Shipment and delivery logistics",           label: "Express Delivery" },
  { src: "/images/sparepart.jpg",           alt: "Motor vehicle spare parts",                 label: "Spare Parts" },
  { src: "/images/industrial.png",          alt: "Industrial machinery components",            label: "Industrial Parts" },
  { src: "/images/agricultural-machinery.jpg", alt: "Agricultural machinery",                 label: "Agricultural Parts" },
  { src: "/images/tyres.jpg",               alt: "Tyres and lubricants",                       label: "Tyres & Lubricants" },
  { src: "/images/marine-machinery.jpg",    alt: "Marine equipment and vessel machinery",      label: "Marine Equipment" },
  { src: "/images/building-material.png",   alt: "Building and construction materials",        label: "Building Materials" },
  { src: "/images/electrical-appliance.avif", alt: "Electrical equipment and appliances",     label: "Electrical Equipment" },
  { src: "/images/plumbing.avif",           alt: "Plumbing and hardware materials",            label: "Hardware & Plumbing" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const imageY   = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const fade     = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, scale: d > 0 ? 1.06 : 0.94 }),
    center: { opacity: 1, scale: 1 },
    exit:  (d: number) => ({ opacity: 0, scale: d > 0 ? 0.94 : 1.06 }),
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#060D1C]"
      aria-label="Hero section"
    >
      {/* ── Tanzania flag stripe — green / yellow / black / yellow / blue ── */}
      <div className="absolute top-0 inset-x-0 z-30 flex h-[3px]">
        <div className="flex-1 bg-[#1EB53A]" />
        <div className="w-6 bg-[#FCD116]" />
        <div className="flex-1 bg-[#000000]" />
        <div className="w-6 bg-[#FCD116]" />
        <div className="flex-1 bg-[#00A3DD]" />
      </div>

      {/* ── Layout grid ── */}
      <div className="relative grid lg:grid-cols-[55%_45%] min-h-screen">

        {/* ═══ LEFT — content ═══ */}
        <motion.div
          style={{ y: contentY, opacity: fade }}
          className="relative z-20 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 pt-28 pb-16"
        >
          {/* Ambient left glow */}
          <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0077FF]/8 rounded-full blur-[120px] pointer-events-none" />

          {/* Sparkles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <SparklesCore
              id="hero-sparkles"
              background="transparent"
              minSize={0.3}
              maxSize={1.0}
              particleDensity={40}
              className="w-full h-full"
              particleColor="#0077FF"
              speed={0.9}
            />
          </div>

          {/* Location pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="relative inline-flex items-center gap-2 self-start mb-8 px-4 py-2 rounded-full border border-[#0077FF]/25 bg-[#0077FF]/8 text-[#4DA8FF] text-xs font-semibold uppercase tracking-widest backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
            <MapPin className="w-3 h-3" />
            Dar es Salaam · Tanzania
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.18 }}
            className="relative text-[clamp(2.8rem,6vw,5rem)] font-black text-white leading-[0.93] tracking-tight"
          >
            Quality Goods.<br />
            Every Industry.<br />
            <span className="gradient-text-static">Globally Sourced,</span><br />
            Tanzania-Delivered.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="relative mt-7 text-base sm:text-lg text-white/55 max-w-lg leading-relaxed"
          >
            A.N Auto Trading & General Supplies is a company dealing with the importation and supply of spare parts for motor vehicles, forklifts, trucks, industrial machinery, building materials, and electrical equipment & appliances —
            sourced directly from trusted global suppliers.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="relative flex flex-wrap gap-2 mt-6"
          >
            {[
              { icon: Shield, text: "Quality Assured" },
              { icon: Globe,  text: "Globally Sourced" },
              { icon: Zap,    text: "Fast Delivery" },
            ].map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.05] text-white/50 text-xs font-medium"
              >
                <Icon className="w-3 h-3 text-[#0077FF]" />
                {text}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="relative mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/products">
              <Button
                size="xl"
                className="group w-full sm:w-auto shadow-xl shadow-[#0077FF]/20 hover:shadow-[#0077FF]/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                Browse Products
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="xl" variant="outline-white" className="w-full sm:w-auto hover:-translate-y-0.5 transition-all duration-200">
                Get a Free Quote
              </Button>
            </Link>
          </motion.div>

          {/* Mini stat bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.72 }}
            className="relative mt-14 flex items-center gap-8 border-t border-white/[0.08] pt-8"
          >
            {floatStats.map((s, i) => (
              <div key={s.label}>
                {i > 0 && <div className="absolute h-7 w-px bg-white/10" style={{ left: `${i * 33.33}%` }} />}
                <p className="text-2xl font-black text-white">{s.value}</p>
                <p className="text-[11px] text-white/40 mt-0.5 uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ═══ RIGHT — slideshow ═══ */}
        <div className="relative hidden lg:block overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: imageY }}>
            {/* Crossfade images */}
            <AnimatePresence initial={false} custom={direction} mode="sync">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease }}
                className="absolute inset-0"
              >
                <Image
                  src={heroSlides[current].src}
                  alt={heroSlides[current].alt}
                  fill
                  priority={current === 0}
                  className="object-cover object-center"
                  sizes="45vw"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D1C] via-[#060D1C]/20 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060D1C]/40 via-transparent to-[#060D1C]/60 z-10" />
          <div className="absolute inset-0 bg-[#0077FF]/8 mix-blend-multiply z-10" />

          {/* Slide label */}
          <div className="absolute top-32 left-8 z-20">
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/15 backdrop-blur-sm text-white/70 text-xs font-semibold uppercase tracking-widest"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0077FF]" />
                {heroSlides[current].label}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Prev / Next controls */}
          <div className="absolute bottom-36 left-8 z-20 flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous image"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-black/40 border border-white/15 text-white backdrop-blur-sm hover:bg-[#0077FF] hover:border-[#0077FF] transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-black/40 border border-white/15 text-white backdrop-blur-sm hover:bg-[#0077FF] hover:border-[#0077FF] transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            {/* Dot indicators */}
            <div className="flex items-center gap-1.5 ml-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-5 h-1.5 bg-[#0077FF]" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-20">
            <motion.div
              key={current}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 4.5, ease: "linear" }}
              className="h-full bg-[#0077FF] origin-left"
            />
          </div>

          {/* Floating glass card — Response time */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.9 }}
            className="absolute bottom-24 left-8 z-20 glass-dark rounded-2xl p-5 min-w-[180px] shadow-xl"
          >
            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Response Time</p>
            <p className="text-4xl font-black text-white">24h</p>
            <p className="text-[#16A34A] text-xs font-semibold mt-1.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse inline-block" />
              Always available
            </p>
          </motion.div>

          {/* Floating card — Trusted by */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.05 }}
            className="absolute top-1/3 right-8 z-20 glass-dark rounded-2xl p-4 max-w-[200px] shadow-xl"
          >
            <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Trusted By</p>
            {["Tanzania Ports Authority", "TRC", "Dawasco", "ACTL"].map((name) => (
              <div key={name} className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0077FF] flex-shrink-0" />
                <span className="text-white/80 text-xs font-medium">{name}</span>
              </div>
            ))}
          </motion.div>

          {/* Decorative blue line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.6 }}
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#0077FF]/60 to-transparent z-20 origin-top"
          />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 text-white/25"
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.25em] uppercase font-semibold">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.div>
    </section>
  );
}
