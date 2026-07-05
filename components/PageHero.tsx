"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface Breadcrumb { label: string; href?: string; }

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  breadcrumbs?: Breadcrumb[];
  accentWord?: string;
  className?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function PageHero({ title, subtitle, imageSrc, imageAlt, breadcrumbs, accentWord, className }: PageHeroProps) {
  const parts = accentWord ? title.split(accentWord) : [title];

  return (
    <section
      className={cn("relative min-h-[56vh] flex flex-col items-center justify-center overflow-hidden bg-[#060D1C]", className)}
      aria-label={`${title} page header`}
    >
      {/* Tanzania flag stripe */}
      <div className="absolute top-0 inset-x-0 z-30 flex h-[3px]">
        <div className="flex-1 bg-[#1EB53A]" />
        <div className="w-6 bg-[#FCD116]" />
        <div className="flex-1 bg-[#000000]" />
        <div className="w-6 bg-[#FCD116]" />
        <div className="flex-1 bg-[#00A3DD]" />
      </div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060D1C]/70 via-[#060D1C]/40 to-[#060D1C]" />
        {/* Warm amber tint */}
        <div className="absolute inset-0 bg-[#0077FF]/6 mix-blend-multiply" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0077FF]/8 rounded-full blur-[100px] z-[1] pointer-events-none" />

      {/* Africa texture */}
      <div
        className="absolute inset-0 z-[1] opacity-100 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 2 L26 14 L14 26 L2 14 Z' fill='none' stroke='rgba(0,119,255,0.06)' stroke-width='0.7'/%3E%3C/svg%3E")`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Content */}
      <div className="relative z-[3] w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-16 flex flex-col items-center text-center">

        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.1 }}
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-white/35 mb-7"
          >
            <Link href="/" className="hover:text-white/65 transition-colors flex items-center gap-1">
              <Home className="w-3 h-3" />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3" />
                {crumb.href
                  ? <Link href={crumb.href} className="hover:text-white/65 transition-colors">{crumb.label}</Link>
                  : <span className="text-white/60">{crumb.label}</span>
                }
              </span>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.15 }}
          className="text-[clamp(2.8rem,6vw,5rem)] font-black text-white leading-[1.0] tracking-tight"
        >
          {accentWord ? (
            <>{parts[0]}<span className="gradient-text-static">{accentWord}</span>{parts[1]}</>
          ) : title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mt-5 text-lg text-white/50 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Amber underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-8 h-[2px] w-16 bg-gradient-to-r from-[#0077FF] to-[#60AEFF] rounded-full"
        />
      </div>
    </section>
  );
}
