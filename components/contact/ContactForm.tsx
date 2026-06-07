"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  "Auto Spare Parts",
  "Forklift Parts",
  "Truck & Commercial Parts",
  "Building Materials",
  "Industrial Machine Parts",
  "Custom / Special Order",
  "General Enquiry",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center text-center py-16 px-8"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1E6FDB]/15 border border-[#1E6FDB]/30 mb-5">
              <CheckCircle className="w-8 h-8 text-[#1E6FDB]" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-[#0A1628] mb-2">Message Sent!</h3>
            <p className="text-[#0A1628]/60 text-sm max-w-xs">
              Thank you for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm text-[#1E6FDB] hover:underline font-medium"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-[#0A1628]/80">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Ahmed Hassan"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0A1628] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6FDB]/40 focus:border-[#1E6FDB] transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-[#0A1628]/80">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+255 7XX XXX XXX"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0A1628] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6FDB]/40 focus:border-[#1E6FDB] transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-[#0A1628]/80">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0A1628] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6FDB]/40 focus:border-[#1E6FDB] transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="category" className="text-sm font-medium text-[#0A1628]/80">
                Enquiry Type
              </label>
              <select
                id="category"
                name="category"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0A1628] text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6FDB]/40 focus:border-[#1E6FDB] transition-all appearance-none cursor-pointer"
              >
                <option value="">Select a category...</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-[#0A1628]/80">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Describe what you need — part numbers, vehicle make/model, quantities, or any other details..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0A1628] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6FDB]/40 focus:border-[#1E6FDB] transition-all resize-none"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 px-4 py-3 rounded-xl">
                <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                Something went wrong. Please try again or call us directly.
              </div>
            )}

            <Button
              type="submit"
              variant="default"
              size="lg"
              disabled={status === "loading"}
              className={cn("w-full group mt-1", status === "loading" && "opacity-80")}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </>
              )}
            </Button>

            <p className="text-xs text-center text-[#0A1628]/35">
              We reply within 24 hours. For urgent enquiries, call{" "}
              <a href="tel:+255713503780" className="text-[#1E6FDB] hover:underline font-medium">
                +255 713 503 780
              </a>
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
