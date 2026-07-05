"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Handshake, Users, Globe2, Eye, Target } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const values = [
  { icon: ShieldCheck, title: "Transparency & Accountability", description: "We excel in leadership, openness, and accuracy in all dealings. Honest pricing and clear communication are non-negotiable." },
  { icon: Users,       title: "Equality",                      description: "We do not discriminate our esteemed customers on the basis of locality or scale — every client receives the same dedication." },
  { icon: Handshake,   title: "Client-Centred Service",        description: "Our experience is sounding to the appreciation of our clients. We build lasting partnerships rooted in reliability and genuine care." },
  { icon: Globe2,      title: "Global Reach, Local Roots",     description: "We import quality products from trusted international suppliers while remaining deeply embedded in Tanzania's business community." },
  { icon: Eye,         title: "Our Vision",                    description: "To make sure we import and distribute quality and affordable products to our clients across all sectors and regions." },
  { icon: Target,      title: "Our Mission",                   description: "To extend our services to up-country cities and towns across Tanzania and to the wider East African bloc." },
];

export default function ValuesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} aria-label="Core values" className="relative py-24 md:py-32 bg-[#060D1C] overflow-hidden africa-texture">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0077FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#0077FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="block w-5 h-px bg-[#0077FF]" />
            What Drives Us
            <span className="block w-5 h-px bg-[#0077FF]" />
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-white leading-tight">
            Core Values, Vision{" "}
            <span className="gradient-text-static">&amp; Mission</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, ease, delay: i * 0.08 }}
                className="group relative p-7 rounded-2xl glass-dark glass-dark-hover overflow-hidden"
              >
                <span className="absolute top-4 right-5 text-5xl font-black text-white/[0.025] select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#0077FF]/12 border border-[#0077FF]/20 mb-5 group-hover:bg-[#0077FF] group-hover:border-[#0077FF] transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#0077FF] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2.5 group-hover:text-[#60AEFF] transition-colors duration-200">
                  {v.title}
                </h3>
                <p className="text-xs text-white/45 leading-relaxed">{v.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
