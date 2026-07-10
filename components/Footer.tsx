import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const year = new Date().getFullYear();

const quickLinks = [
  { label: "Home",       href: "/" },
  { label: "About Us",   href: "/about" },
  { label: "Products",   href: "/products" },
  { label: "Services",   href: "/services" },
  { label: "Contact",    href: "/contact" },
];

const products = [
  "Auto Spare Parts",
  "Forklift Parts",
  "Truck Parts",
  "Building Materials",
  "Industrial Machine Parts",
  "Electrical Equipment & Appliances",
  "Plumbing & Fittings",
];

export default function Footer() {
  return (
    <footer className="bg-[#040910] text-white" role="contentinfo">
      {/* Tanzania flag stripe — green / yellow / black / yellow / blue */}
      <div className="flex h-[3px]">
        <div className="flex-1 bg-[#1EB53A]" />
        <div className="w-6 bg-[#FCD116]" />
        <div className="flex-1 bg-[#000000]" />
        <div className="w-6 bg-[#FCD116]" />
        <div className="flex-1 bg-[#00A3DD]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <Image
                src="/logo1.png"
                alt="A.N Auto Trading Logo"
                width={48}
                height={48}
                className="object-contain flex-shrink-0"
              />
              <div>
                <p className="text-white font-bold text-sm leading-tight group-hover:text-[#60AEFF] transition-colors">
                  A.N Auto Trading Limited
                </p>
                <p className="text-white/35 text-xs leading-tight">&amp; General Supplies</p>
              </div>
            </Link>

            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-6">
              Tanzania&apos;s trusted importer and supplier of quality spare parts, building materials, electrical equipment &amp; appliances, plumbing fittings, and industrial supplies — sourced globally, delivered locally.
            </p>

            {/* Tanzania flag mini */}
            <div className="flex h-1 w-24 rounded-full overflow-hidden mb-6">
              <div className="flex-1 bg-[#1EB53A]" />
              <div className="w-2 bg-[#FCD116]" />
              <div className="flex-1 bg-[#000000]" />
              <div className="w-2 bg-[#FCD116]" />
              <div className="flex-1 bg-[#00A3DD]" />
            </div>

            <p className="text-white/20 text-xs">Serving Tanzania since <span className="text-white/40">2004</span></p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0077FF] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-5">
              What We Supply
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {products.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-white/50">
                  <span className="w-1 h-1 rounded-full bg-[#0077FF] flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-5">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-5" role="list">
              <li>
                <a
                  href="https://maps.google.com/?q=Sikukuu+Mbaruku+Street+Dar+es+Salaam+Tanzania"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-white/50 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#0077FF] flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">
                    Sikukuu / Mbaruku Street<br />
                    P.O. Box 7405<br />
                    Dar es Salaam, Tanzania
                  </span>
                </a>
              </li>
              <li className="flex flex-col gap-2">
                <a href="tel:+255685604910" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm">
                  <Phone className="w-4 h-4 text-[#0077FF] flex-shrink-0" />
                  +255 685 604 910
                </a>
                <a href="tel:+255714662878" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm ml-7">
                  +255 714 662 878
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@anautotrading.co.tz"
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm group"
                >
                  <Mail className="w-4 h-4 text-[#0077FF] flex-shrink-0" />
                  info@anautotrading.co.tz
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            &copy; {year} A.N Auto Trading Limited &amp; General Supplies. All rights reserved.
          </p>
          <p className="text-white/12 text-xs">Dar es Salaam, Tanzania</p>
        </div>
      </div>
    </footer>
  );
}
