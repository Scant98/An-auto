"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#060E1D]/96 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/30"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077FF] rounded-lg"
              aria-label="A.N Auto Trading — Home"
            >
              <Image
                src="/logo1.png"
                alt="A.N Auto Trading Logo"
                width={48}
                height={48}
                className="object-contain flex-shrink-0"
              />
              <div className="hidden sm:block">
                <p className="text-white font-bold text-sm leading-tight group-hover:text-[#60AEFF] transition-colors duration-200">
                  A.N Auto Trading Limited
                </p>
                <p className="text-white/40 text-xs leading-tight">
                  & General Supplies
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077FF]",
                      isActive
                        ? "text-white"
                        : "text-white/65 hover:text-white hover:bg-white/[0.07]"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#0077FF] to-[#60AEFF] rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+255685604910"
                className="hidden lg:flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077FF] rounded-md px-2 py-1"
                aria-label="Call +255 685 604 910"
              >
                <Phone className="w-3.5 h-3.5 text-[#0077FF]" aria-hidden="true" />
                <span>+255 685 604 910</span>
              </a>
              <Link href="/contact">
                <Button variant="default" size="sm" className="hidden md:inline-flex">
                  Get a Quote
                </Button>
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-white rounded-md hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077FF]"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#08111F] border-l border-white/[0.08] shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.08]">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <Image
                    src="/logo1.png"
                    alt="A.N Auto Trading Logo"
                    width={36}
                    height={36}
                    className="object-contain flex-shrink-0"
                  />
                  <span className="text-white font-bold text-sm">A.N Auto Trading Limited</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-white/60 hover:text-white rounded-md hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 px-4 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                          isActive
                            ? "bg-[#0077FF]/15 text-white border border-[#0077FF]/30"
                            : "text-white/70 hover:text-white hover:bg-white/[0.07]"
                        )}
                      >
                        {link.label}
                        <ChevronRight className={cn("w-4 h-4 transition-colors", isActive ? "text-[#0077FF]" : "text-white/30")} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="px-4 pb-8 flex flex-col gap-3 border-t border-white/[0.08] pt-4">
                <a
                  href="tel:+255685604910"
                  className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white text-sm transition-colors rounded-lg hover:bg-white/[0.07]"
                >
                  <Phone className="w-4 h-4 text-[#0077FF]" />
                  +255 685 604 910
                </a>
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="default" className="w-full">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
