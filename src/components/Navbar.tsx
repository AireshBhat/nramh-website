import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Diagnostics", href: "/diagnostics" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || location.pathname !== "/"
          ? "bg-[#0A2540]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-symbol.svg" alt="Hospital logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-display text-white text-lg font-bold leading-tight hidden sm:block">
              Dr. N.R. Acharya<br className="sm:hidden" /> Memorial Hospital
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === link.href
                    ? "text-teal-400"
                    : "text-white/80 hover:text-teal-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Emergency CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+916363767805"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" />
              Emergency: 6363-767-805
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A2540]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`block text-sm font-medium py-2 ${
                  location.pathname === link.href
                    ? "text-teal-400"
                    : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+916363767805"
              className="inline-flex items-center gap-2 bg-teal-500 text-white text-sm font-semibold px-4 py-2 rounded-full mt-2"
            >
              <Phone className="w-4 h-4" />
              Emergency: 6363-767-805
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
