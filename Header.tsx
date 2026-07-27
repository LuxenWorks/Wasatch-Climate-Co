/**
 * Wasatch Climate Co. — Header Component
 * Design: Precision Teal — sticky header with transparent-to-teal scroll transition
 * Brand: Deep Teal primary, Amber CTA, Barlow Condensed headlines
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AC Repair & Installation", href: "/services/ac-repair" },
      { label: "Furnace Repair & Heating", href: "/services/furnace-repair" },
      { label: "HVAC Maintenance", href: "/services/hvac-maintenance" },
      { label: "Indoor Air Quality", href: "/services/indoor-air-quality" },
      { label: "Heat Pumps", href: "/services/heat-pumps" },
      { label: "Ductless Mini-Splits", href: "/services/mini-splits" },
    ],
  },
  {
    label: "Service Areas",
    href: "/service-areas",
    children: [
      { label: "American Fork", href: "/service-areas/american-fork" },
      { label: "Lehi", href: "/service-areas/lehi" },
      { label: "Orem", href: "/service-areas/orem" },
      { label: "Provo", href: "/service-areas/provo" },
      { label: "Pleasant Grove", href: "/service-areas/pleasant-grove" },
      { label: "Eagle Mountain", href: "/service-areas/eagle-mountain" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const isHomePage = location === "/";

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-[#1A2332] text-white text-sm py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <span className="text-gray-300">Serving American Fork & All of Utah County</span>
          <div className="flex items-center gap-6">
            <span className="text-gray-300">Mon–Sun: Open 24/7 for Emergencies</span>
            <a
              href="tel:+13852002308"
              className="flex items-center gap-2 text-[#E8820C] font-semibold hover:text-amber-400 transition-colors"
            >
              <Phone size={14} />
              (385) 200-2308
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled || !isHomePage
            ? "bg-white/95 backdrop-blur-xl shadow-md"
            : "bg-white"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/wasatch_logo.png"
              alt="Wasatch Climate Co. Logo"
              className="h-10 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-[#1A2332] font-semibold text-sm hover:text-[#0B6B6B] transition-colors">
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-xl border border-gray-100 rounded-lg py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-[#1A2332] hover:bg-[#0B6B6B] hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-[#1A2332] font-semibold text-sm hover:text-[#0B6B6B] transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+13852002308"
              className="flex items-center gap-2 bg-[#E8820C] hover:bg-amber-600 text-white font-bold px-5 py-3 rounded-lg transition-all duration-160 hover:scale-[1.03] active:scale-[0.97] shadow-md"
            >
              <Phone size={16} />
              (385) 200-2308
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#1A2332]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="container py-4 flex flex-col gap-1">
              <a
                href="tel:+13852002308"
                className="flex items-center justify-center gap-2 bg-[#E8820C] text-white font-bold px-4 py-4 rounded-lg mb-3 text-lg"
              >
                <Phone size={20} />
                Call Now: (385) 200-2308
              </a>
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block px-3 py-3 text-[#1A2332] font-semibold border-b border-gray-50 hover:text-[#0B6B6B]"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 bg-gray-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-[#0B6B6B]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile sticky call bar */}
      <a
        href="tel:+13852002308"
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-3 bg-[#1A6B3A] text-white font-bold py-4 text-lg shadow-2xl lg:hidden"
        style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}
      >
        <Phone size={20} />
        Tap to Call — (385) 200-2308
      </a>
    </>
  );
}
