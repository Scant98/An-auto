import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      {/* Intro */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E6FDB]/10 border border-[#1E6FDB]/20 text-[#1E6FDB] text-xs font-semibold uppercase tracking-widest mb-4">
          Get in Touch
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
          We&apos;re Ready to{" "}
          <span className="gradient-text-static">Help You</span>
        </h2>
        <p className="text-white/55 leading-relaxed">
          Whether you have a part number, a vehicle make, or just a description — reach out and we&apos;ll find what you need.
        </p>
      </div>

      {/* Contact details */}
      <div className="flex flex-col gap-5">
        <a
          href="https://maps.google.com/?q=Sikukuu+Mbaruku+Street+Dar+es+Salaam+Tanzania"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 p-5 rounded-2xl glass-card glass-card-hover"
          aria-label="View on Google Maps"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1E6FDB]/15 border border-[#1E6FDB]/20 flex-shrink-0 group-hover:bg-[#1E6FDB] group-hover:border-[#1E6FDB] transition-all">
            <MapPin className="w-4 h-4 text-[#1E6FDB] group-hover:text-white transition-colors" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-1">Location</p>
            <p className="text-sm text-white leading-relaxed">
              Sikukuu / Mbaruku Street<br />P.O. Box 7405, Dar es Salaam<br />Tanzania
            </p>
          </div>
        </a>

        <div className="flex flex-col gap-3">
          <a
            href="tel:+255713503780"
            className="group flex items-center gap-4 p-5 rounded-2xl glass-card glass-card-hover"
            aria-label="Call +255 713 503 780"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1E6FDB]/15 border border-[#1E6FDB]/20 flex-shrink-0 group-hover:bg-[#1E6FDB] group-hover:border-[#1E6FDB] transition-all">
              <Phone className="w-4 h-4 text-[#1E6FDB] group-hover:text-white transition-colors" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-0.5">Phone</p>
              <p className="text-sm text-white font-medium">+255 713 503 780</p>
              <p className="text-xs text-white/40 mt-0.5">+255 762 554 850</p>
            </div>
          </a>

          <a
            href="mailto:an2auto@yahoo.com"
            className="group flex items-center gap-4 p-5 rounded-2xl glass-card glass-card-hover"
            aria-label="Email an2auto@yahoo.com"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1E6FDB]/15 border border-[#1E6FDB]/20 flex-shrink-0 group-hover:bg-[#1E6FDB] group-hover:border-[#1E6FDB] transition-all">
              <Mail className="w-4 h-4 text-[#1E6FDB] group-hover:text-white transition-colors" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-0.5">Email</p>
              <p className="text-sm text-white font-medium">an2auto@yahoo.com</p>
            </div>
          </a>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-2xl glass-card">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1E6FDB]/15 border border-[#1E6FDB]/20 flex-shrink-0">
            <Clock className="w-4 h-4 text-[#1E6FDB]" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-1">Business Hours</p>
            <p className="text-sm text-white">Mon – Fri: 8:00 AM – 5:00 PM</p>
            <p className="text-sm text-white/60">Sat: 8:00 AM – 1:00 PM</p>
            <p className="text-xs text-white/35 mt-1.5 flex items-center gap-1.5">
              <MessageSquare className="w-3 h-3" aria-hidden="true" />
              Enquiries responded within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
