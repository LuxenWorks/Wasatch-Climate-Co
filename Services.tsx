/**
 * Wasatch Climate Co. — Services Overview Page
 * Design: Precision Teal — grid of all services with descriptions
 */
import { Wind, Flame, Wrench, Leaf, Zap, Layers, Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Header from "./Header";
import Footer from "./Footer";
import CTASection from "./CTASection";

const SERVICES = [
  {
    icon: Wind,
    title: "AC Repair & Installation",
    href: "/services/ac-repair",
    img: "/images/service_ac.jpg",
    desc: "From emergency AC repairs to complete new system installations, we handle all makes and models. Our certified technicians diagnose fast and fix right the first time.",
    bullets: ["Same-day AC repair", "New system installation", "Refrigerant recharge", "Compressor replacement", "All brands serviced"],
  },
  {
    icon: Flame,
    title: "Furnace Repair & Heating",
    href: "/services/furnace-repair",
    img: "/images/service_furnace.jpg",
    desc: "Don't spend a cold Utah night without heat. We provide 24/7 emergency furnace repair and high-efficiency heating system installations across Utah County.",
    bullets: ["24/7 emergency furnace repair", "Gas & electric furnace service", "Heat exchanger inspection", "New furnace installation", "Boiler service"],
  },
  {
    icon: Wrench,
    title: "HVAC Maintenance",
    href: "/services/hvac-maintenance",
    img: "/images/service_maintenance.jpg",
    desc: "Preventive maintenance is the single best investment you can make in your HVAC system. Our seasonal tune-ups prevent 85% of breakdowns and extend system life.",
    bullets: ["Spring AC tune-up", "Fall furnace tune-up", "Filter replacement", "Duct inspection", "Annual maintenance plans"],
  },
  {
    icon: Leaf,
    title: "Indoor Air Quality",
    href: "/services/indoor-air-quality",
    img: "/images/service_iaq.jpg",
    desc: "Utah's air quality challenges demand better indoor solutions. We install whole-home air purifiers, UV systems, humidifiers, and advanced filtration.",
    bullets: ["Whole-home air purifiers", "UV light systems", "Humidifiers & dehumidifiers", "HEPA filtration", "Air quality testing"],
  },
  {
    icon: Zap,
    title: "Heat Pumps",
    href: "/services/heat-pumps",
    img: "/images/why_choose_us.jpg",
    desc: "Modern heat pumps provide efficient heating AND cooling in a single system. Perfect for Utah's climate, they can cut energy bills by up to 50%.",
    bullets: ["Heat pump installation", "Heat pump repair", "Dual-fuel systems", "Energy efficiency upgrades", "All major brands"],
  },
  {
    icon: Layers,
    title: "Ductless Mini-Splits",
    href: "/services/mini-splits",
    img: "/images/service_iaq.jpg",
    desc: "Perfect for additions, garages, and homes without ductwork. Mini-split systems provide zoned comfort with maximum efficiency and minimal installation disruption.",
    bullets: ["Single & multi-zone systems", "No ductwork required", "Year-round comfort", "Energy-efficient operation", "Quiet operation"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      <Header />

      {/* Hero */}
      <section className="bg-[#1A2332] py-16">
        <div className="container text-center">
          <p className="text-[#0B6B6B] font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
          <h1
            className="text-4xl md:text-6xl font-black text-white uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            HVAC Services in
            <br />
            <span className="text-[#E8820C]">American Fork, UT</span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Complete heating, cooling, and air quality solutions for Utah County homeowners. Licensed, insured, and available 24/7.
          </p>
          <a
            href="tel:+13852002308"
            className="inline-flex items-center gap-2 bg-[#E8820C] hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-lg text-lg mt-6 transition-all hover:scale-[1.03]"
          >
            <Phone size={18} />
            Call for Same-Day Service
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#F8F6F2] py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ borderLeft: "4px solid #0B6B6B" }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={service.img}
                    alt={`${service.title} in American Fork, UT`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <service.icon size={20} className="text-[#0B6B6B]" />
                    <h2
                      className="font-bold text-[#1A2332] text-xl"
                      style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}
                    >
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <ul className="space-y-1 mb-5">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0B6B6B] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="flex items-center gap-1 text-[#0B6B6B] font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Need HVAC Service Today?"
        subheading="Call now for same-day service across American Fork and Utah County."
        variant="teal"
      />

      <Footer />
    </div>
  );
}
