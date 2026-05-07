import { Link } from "react-router";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-symbol.svg" alt="Hospital logo" className="w-10 h-10 rounded-full object-cover" />
              <span className="font-display text-white text-lg font-bold leading-tight">
                Dr. N.R. Acharya<br />Memorial Hospital
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Your Health Is Our Mission! Providing compassionate, affordable
              healthcare to rural communities since 1983.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Departments", href: "/departments" },
                { label: "Diagnostics", href: "/diagnostics" },
                { label: "Contact", href: "/contact" },
              ].map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-teal-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                <span>
                  N.H.-66, Koteshwara, Kundapura Taluk, Udupi district - 576222
                </span>
              </div>
              <div className="space-y-1">
                {[
                  "6363-767-805",
                  "6363-793-603",
                  "7676-831-270",
                  "7676-802-114",
                ].map(num => (
                  <a
                    key={num}
                    href={`tel:+91${num.replace(/-/g, "")}`}
                    className="flex items-center gap-2 text-white/70 hover:text-teal-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                    {num}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-white/50 text-sm">
          © 2026 Dr. N.R. Acharya Memorial Hospital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
