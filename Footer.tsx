/**
 * Wasatch Climate Co. — Footer Component
 * Design: Precision Teal — dark slate footer with NAP, links, and service areas
 */
import { Link } from "wouter";
import { Phone, MapPin, Clock, Facebook, Instagram, Star } from "lucide-react";

const SERVICES = [
  { label: "AC Repair & Installation", href: "/services/ac-repair" },
  { label: "Furnace Repair & Heating", href: "/services/furnace-repair" },
  { label: "HVAC Maintenance", href: "/services/hvac-maintenance" },
  { label: "Indoor Air Quality", href: "/services/indoor-air-quality" },
  { label: "Heat Pumps", href: "/services/heat-pumps" },
  { label: "Ductless Mini-Splits", href: "/services/mini-splits" },
];

const AREAS = [
  "American Fork", "Lehi", "Orem", "Provo", "Pleasant Grove",
  "Highland", "Lindon", "Eagle Mountain", "Saratoga Springs",
  "Spanish Fork", "Springville", "Draper",
];

export default function Footer() {
  return (
    <footer className="bg-[#1A2332] text-white pb-20 lg:pb-0">
      {/* CTA Banner */}
      <div className="bg-[#0B6B6B] py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Ready to Restore Your Comfort?
            </h2>
            <p className="text-teal-100 mt-1">24/7 emergency service — we answer every call.</p>
          </div>
          <a
            href="tel:+13852002308"
            className="flex items-center gap-3 bg-[#E8820C] hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-lg text-xl transition-all hover:scale-[1.03] active:scale-[0.97] shadow-lg whitespace-nowrap"
          >
            <Phone size={22} />
            (385) 200-2308
          </a>
        </div>
      </div>

      {/* Footer content */}
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img
            src="/images/wasatch_logo.png"
            alt="Wasatch Climate Co."
            className="h-14 w-auto mb-4 brightness-0 invert"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Utah County's trusted HVAC contractor. Locally owned, licensed, and committed to your comfort year-round.
          </p>
          <div className="flex items-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-[#E8820C] text-[#E8820C]" />
            ))}
            <span className="text-gray-300 text-sm ml-2">4.9 · 247 Reviews</span>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E8820C] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E8820C] transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Our Services
          </h3>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-gray-400 hover:text-[#0B6B6B] text-sm transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Service Areas
          </h3>
          <ul className="space-y-2">
            {AREAS.map((area) => (
              <li key={area}>
                <Link
                  href={`/service-areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-400 hover:text-[#0B6B6B] text-sm transition-colors"
                >
                  {area}, UT
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Contact Us
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-[#0B6B6B] mt-0.5 flex-shrink-0" />
              <div>
                <a href="tel:+13852002308" className="text-white font-semibold hover:text-[#E8820C] transition-colors">
                  (385) 200-2308
                </a>
                <p className="text-gray-400 text-xs">24/7 Emergency Service</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-[#0B6B6B] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white text-sm">1551 S 400 E</p>
                <p className="text-gray-400 text-sm">American Fork, UT 84003</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-[#0B6B6B] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white text-sm">Mon–Sun: 8am–8pm</p>
                <p className="text-gray-400 text-xs">24/7 Emergency Available</p>
              </div>
            </div>
          </div>
          {/* Embedded map */}
          <div className="mt-4 rounded-lg overflow-hidden border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.5!2d-111.7956!3d40.3768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzM2LjUiTiAxMTHCsDQ3JzQ0LjIiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="120"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Wasatch Climate Co. Location"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="container py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Wasatch Climate Co. All rights reserved. | 1551 S 400 E, American Fork, UT 84003 | (385) 200-2308</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
