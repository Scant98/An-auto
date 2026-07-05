"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const slides = [
  {
    src: "/images/sparepart.jpg",
    alt: "Motor vehicle spare parts",
    label: "Motor Vehicle Spare Parts",
    caption: "Genuine OEM and quality aftermarket parts for all major makes",
  },
  {
    src: "/images/shipment.jpg",
    alt: "Shipment and delivery logistics",
    label: "Express Delivery",
    caption: "Fast dispatch across Dar es Salaam and upcountry freight",
  },
  {
    src: "/images/industrial.png",
    alt: "Industrial machinery components",
    label: "Industrial Machinery Parts",
    caption: "Bearings, seals, pumps and components for factories and plants",
  },
  {
    src: "/images/agricultural-machinery.jpg",
    alt: "Agricultural machinery and tractors",
    label: "Agricultural Machinery Parts",
    caption: "Keep Tanzania's farms and plantations productive",
  },
  {
    src: "/images/tyres.jpg",
    alt: "Tyres and lubricants",
    label: "Tyres, Tubes & Lubricants",
    caption: "For motor vehicles, heavy machinery and forklifts",
  },
  {
    src: "/images/marine-machinery.jpg",
    alt: "Marine equipment and vessel machinery",
    label: "Marine Equipment Parts",
    caption: "Reliable components for vessels, boats and port machinery",
  },
  {
    src: "/images/building-material.png",
    alt: "Building and construction materials",
    label: "Building Materials",
    caption: "Quality hardware and construction supplies for Tanzania's growth",
  },
  {
    src: "/images/electrical-appliance.avif",
    alt: "Electrical equipment and appliances",
    label: "Electrical Equipment & Appliances",
    caption: "Industrial and commercial electrical fittings from verified suppliers",
  },
  {
    src: "/images/plumbing.avif",
    alt: "Plumbing and hardware materials",
    label: "Hardware & Plumbing",
    caption: "Tools, fittings and workshop essentials for every trade",
  },
];

export default function ImageSlideshow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next, paused]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: "0%", opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section
      ref={ref}
      aria-label="Product image gallery"
      className="relative py-24 md:py-32 bg-[#060D1C] overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060D1C] via-[#0A1628] to-[#060D1C]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,119,255,0.06)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#0077FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="block w-5 h-px bg-[#0077FF]" />
            What We Supply
            <span className="block w-5 h-px bg-[#0077FF]" />
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-white leading-tight">
            Everything Your Operation Needs,{" "}
            <span className="gradient-text-static">In One Place.</span>
          </h2>
        </motion.div>

        {/* Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main slide */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-[#0A1628] shadow-2xl shadow-black/60">
            <AnimatePresence initial={false} custom={direction} mode="sync">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[current].src}
                  alt={slides[current].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 90vw"
                  priority={current === 0}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="inline-block text-[#60AEFF] text-xs font-bold uppercase tracking-widest mb-2"
                  >
                    {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                  </motion.span>
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.25 }}
                    className="text-white text-xl md:text-3xl font-black leading-tight mb-1"
                  >
                    {slides[current].label}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.32 }}
                    className="text-white/55 text-sm md:text-base max-w-lg"
                  >
                    {slides[current].caption}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next buttons */}
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 border border-white/15 text-white backdrop-blur-sm hover:bg-[#0077FF] hover:border-[#0077FF] transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 border border-white/15 text-white backdrop-blur-sm hover:bg-[#0077FF] hover:border-[#0077FF] transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Progress bar */}
            {!paused && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-10">
                <motion.div
                  key={current}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 4, ease: "linear" }}
                  className="h-full bg-[#0077FF] origin-left"
                />
              </div>
            )}
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-6 h-2 bg-[#0077FF]"
                    : "w-2 h-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="mt-5 grid grid-cols-9 gap-2">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`View ${slide.label}`}
                className={`relative rounded-lg overflow-hidden aspect-square transition-all duration-300 ${
                  i === current
                    ? "ring-2 ring-[#0077FF] ring-offset-2 ring-offset-[#060D1C] opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="10vw"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
