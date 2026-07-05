import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <span className="inline-flex items-center gap-2 text-[#0077FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">
          <span className="block w-5 h-px bg-[#0077FF]" />
          Get in Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
          We&apos;re Ready to{" "}
          <span className="gradient-text-static">Help You</span>
        </h2>
        <p className="text-white/50 leading-relaxed">
          Whether you have a part number, a vehicle make, or just a description — reach out and we&apos;ll find what you need.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <a
          href="https://maps.google.com/?q=Sikukuu+Mbaruku+Street+Dar+es+Salaam+Tanzania"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 p-5 rounded-2xl glass-dark glass-dark-hover"
          aria-label="View on Google Maps"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0077FF]/12 border border-[#0077FF]/20 flex-shrink-0 group-hover:bg-[#0077FF] group-hover:border-[#0077FF] transition-all duration-300">
            <MapPin className="w-4 h-4 text-[#0077FF] group-hover:text-white transition-colors duration-300" />
          </div>
          <div>
            <p className="text-xs font-bold text-white/35 uppercase tracking-widest mb-1">Location</p>
            <p className="text-sm text-white leading-relaxed">
              Sikukuu / Mbaruku Street<br />P.O. Box 7405, Dar es Salaam<br />Tanzania
            </p>
          </div>
        </a>

        <a
          href="tel:+255685604910"
          className="group flex items-center gap-4 p-5 rounded-2xl glass-dark glass-dark-hover"
          aria-label="Call +255 685 604 910"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0077FF]/12 border border-[#0077FF]/20 flex-shrink-0 group-hover:bg-[#0077FF] group-hover:border-[#0077FF] transition-all duration-300">
            <Phone className="w-4 h-4 text-[#0077FF] group-hover:text-white transition-colors duration-300" />
          </div>
          <div>
            <p className="text-xs font-bold text-white/35 uppercase tracking-widest mb-0.5">Phone</p>
            <p className="text-sm text-white font-medium">+255 685 604 910</p>
            <p className="text-xs text-white/40 mt-0.5">+255 714 662 878</p>
          </div>
        </a>

        <a
          href="mailto:info@anauto.co.tz"
          className="group flex items-center gap-4 p-5 rounded-2xl glass-dark glass-dark-hover"
          aria-label="Email info@anauto.co.tz"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0077FF]/12 border border-[#0077FF]/20 flex-shrink-0 group-hover:bg-[#0077FF] group-hover:border-[#0077FF] transition-all duration-300">
            <Mail className="w-4 h-4 text-[#0077FF] group-hover:text-white transition-colors duration-300" />
          </div>
          <div>
            <p className="text-xs font-bold text-white/35 uppercase tracking-widest mb-0.5">Email</p>
            <p className="text-sm text-white font-medium">info@anauto.co.tz</p>
          </div>
        </a>

        <div className="flex items-start gap-4 p-5 rounded-2xl glass-dark">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0077FF]/12 border border-[#0077FF]/20 flex-shrink-0">
            <Clock className="w-4 h-4 text-[#0077FF]" />
          </div>
          <div>
            <p className="text-xs font-bold text-white/35 uppercase tracking-widest mb-1">Business Hours</p>
            <p className="text-sm text-white">Mon – Fri: 8:00 AM – 5:00 PM</p>
            <p className="text-sm text-white/55">Sat: 8:00 AM – 1:00 PM</p>
            <p className="text-xs text-white/35 mt-2 flex items-center gap-1.5">
              <MessageSquare className="w-3 h-3" />
              Enquiries responded within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
