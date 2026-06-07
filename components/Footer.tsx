import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const products = [
  "Auto Spare Parts",
  "Forklift Parts",
  "Truck Parts",
  "Building Materials",
  "Industrial Machine Parts",
];

export default function Footer() {
  return (
    <footer className="bg-[#040B15] border-t border-white/[0.06] text-white" role="contentinfo">
      {/* Top accent */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#1E6FDB]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E6FDB] to-[#1a5fbf] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#1E6FDB]/20 group-hover:shadow-[#1E6FDB]/40 transition-shadow">
                <span className="text-white font-black text-base">AN</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight group-hover:text-[#60a5fa] transition-colors">
                  A.N Auto Trading
                </p>
                <p className="text-white/40 text-xs leading-tight">
                  & General Supplies
                </p>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Tanzania&apos;s trusted importer and supplier of quality spare parts for motor
              vehicles, forklifts, trucks, industrial machines, and building materials.
            </p>
            <div className="mt-6 pt-6 border-t border-white/[0.08]">
              <p className="text-white/25 text-xs">
                Serving businesses across Tanzania since{" "}
                <span className="text-white/45">2010</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#1E6FDB] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
              What We Supply
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {products.map((product) => (
                <li key={product}>
                  <span className="text-white/55 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#1E6FDB] flex-shrink-0" aria-hidden="true" />
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-5" role="list">
              <li>
                <a
                  href="https://maps.google.com/?q=Sikukuu+Mbaruku+Street+Dar+es+Salaam+Tanzania"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-white/55 hover:text-white transition-colors"
                  aria-label="View location on Google Maps"
                >
                  <MapPin className="w-4 h-4 text-[#1E6FDB] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm leading-relaxed">
                    Sikukuu / Mbaruku Street
                    <br />P.O. Box 7405
                    <br />Dar es Salaam, Tanzania
                  </span>
                </a>
              </li>
              <li className="flex flex-col gap-2">
                <a
                  href="tel:+255713503780"
                  className="flex items-center gap-3 text-white/55 hover:text-white transition-colors text-sm"
                  aria-label="Call +255 713 503 780"
                >
                  <Phone className="w-4 h-4 text-[#1E6FDB] flex-shrink-0" aria-hidden="true" />
                  +255 713 503 780
                </a>
                <a
                  href="tel:+255762554850"
                  className="flex items-center gap-3 text-white/55 hover:text-white transition-colors text-sm ml-7"
                  aria-label="Call +255 762 554 850"
                >
                  +255 762 554 850
                </a>
              </li>
              <li>
                <a
                  href="mailto:an2auto@yahoo.com"
                  className="flex items-center gap-3 text-white/55 hover:text-white transition-colors text-sm group"
                  aria-label="Email an2auto@yahoo.com"
                >
                  <Mail className="w-4 h-4 text-[#1E6FDB] flex-shrink-0" aria-hidden="true" />
                  an2auto@yahoo.com
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs text-center sm:text-left">
            &copy; {currentYear} A.N Auto Trading &amp; General Supplies. All rights reserved.
          </p>
          <p className="text-white/15 text-xs">
            Dar es Salaam, Tanzania
          </p>
        </div>
      </div>
    </footer>
  );
}
