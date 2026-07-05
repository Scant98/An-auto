import { Car, Cog, Truck, Factory, Building2, Wrench, Forklift, Package } from "lucide-react";

const industries = [
  { icon: Car,       label: "Motor Vehicles" },
  { icon: Forklift,  label: "Forklifts" },
  { icon: Truck,     label: "Heavy Trucks" },
  { icon: Factory,   label: "Industrial Machines" },
  { icon: Building2, label: "Building Materials" },
  { icon: Wrench,    label: "Auto Parts" },
  { icon: Cog,       label: "Machinery Parts" },
  { icon: Package,   label: "General Supplies" },
];

const doubled = [...industries, ...industries];

export default function IndustriesStrip() {
  return (
    <section
      aria-label="Industries we serve"
      className="relative py-4 bg-[#060D1C] border-y border-[#0077FF]/15 overflow-hidden"
    >
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#060D1C] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#060D1C] to-transparent pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap will-change-transform" aria-hidden="true">
        {doubled.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={`${item.label}-${i}`} className="inline-flex items-center gap-3 mx-8 flex-shrink-0 group">
              <div className="flex items-center justify-center w-6 h-6 rounded bg-[#0077FF]/12 border border-[#0077FF]/18 group-hover:bg-[#0077FF]/22 transition-colors">
                <Icon className="w-3 h-3 text-[#0077FF]" aria-hidden="true" />
              </div>
              <span className="text-white/40 text-xs font-semibold tracking-widest uppercase group-hover:text-white/65 transition-colors">
                {item.label}
              </span>
              <span className="text-[#0077FF]/20 text-base" aria-hidden="true">·</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
