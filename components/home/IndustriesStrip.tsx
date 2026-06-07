import { Car, Cog, Truck, Factory, Building2, Wrench, Forklift, Package } from "lucide-react";

const industries = [
  { icon: Car, label: "Motor Vehicles" },
  { icon: Forklift, label: "Forklifts" },
  { icon: Truck, label: "Heavy Trucks" },
  { icon: Factory, label: "Industrial Machines" },
  { icon: Building2, label: "Building Materials" },
  { icon: Wrench, label: "Auto Parts" },
  { icon: Cog, label: "Machinery Parts" },
  { icon: Package, label: "General Supplies" },
];

const doubled = [...industries, ...industries];

export default function IndustriesStrip() {
  return (
    <section
      aria-label="Industries we serve"
      className="relative py-5 bg-[#060E1A] border-y border-white/[0.06] overflow-hidden"
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#060E1A] to-transparent pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#060E1A] to-transparent pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap will-change-transform" aria-hidden="true">
        {doubled.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.label}-${i}`}
              className="inline-flex items-center gap-3 mx-6 flex-shrink-0 group"
            >
              <div className="flex items-center justify-center w-7 h-7 rounded-md bg-[#1E6FDB]/15 border border-[#1E6FDB]/20 group-hover:bg-[#1E6FDB]/25 transition-colors">
                <Icon className="w-3.5 h-3.5 text-[#1E6FDB]" aria-hidden="true" />
              </div>
              <span className="text-white/50 text-sm font-medium tracking-wide uppercase group-hover:text-white/75 transition-colors">
                {item.label}
              </span>
              <span className="mx-3 text-white/15 text-lg font-thin" aria-hidden="true">·</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
