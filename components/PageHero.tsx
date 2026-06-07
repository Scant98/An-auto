"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  breadcrumbs?: Breadcrumb[];
  accentWord?: string;
  className?: string;
}

export default function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  breadcrumbs,
  accentWord,
  className,
}: PageHeroProps) {
  const titleParts = accentWord
    ? title.split(accentWord)
    : [title];

  return (
    <section
      className={cn(
        "relative min-h-[52vh] flex flex-col items-center justify-center overflow-hidden bg-[#0A1628]",
        className
      )}
      aria-label={`${title} page header`}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/70 via-[#0A1628]/50 to-[#0A1628]" />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1E6FDB]/10 rounded-full blur-[80px] z-[1] pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1E6FDB]/60 to-transparent z-[2]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div className="relative z-[3] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex flex-col items-center text-center">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-white/40 mb-6"
          >
            <Link href="/" className="hover:text-white/70 transition-colors flex items-center gap-1">
              <Home className="w-3 h-3" aria-hidden="true" />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white/70 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight"
        >
          {accentWord ? (
            <>
              {titleParts[0]}
              <span className="gradient-text-static">{accentWord}</span>
              {titleParts[1]}
            </>
          ) : (
            title
          )}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="mt-5 text-lg text-white/55 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 h-[2px] w-16 bg-gradient-to-r from-[#1E6FDB] to-[#60a5fa] rounded-full"
        />
      </div>
    </section>
  );
}
