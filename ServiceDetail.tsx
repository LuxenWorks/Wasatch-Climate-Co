/**
 * Wasatch Climate Co. — Service Detail Page (dynamic)
 * Design: Precision Teal — rich service page with SEO content, FAQs, CTAs
 */
import { useParams } from "wouter";
import { Phone, CheckCircle, ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const SERVICE_DATA: Record<string, {
  title: string;
  metaDesc: string;
  heroHeading: string;
  heroSub: string;
  img: string;
  intro: string;
  body: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
}> = {
  "ac-repair": {
    title: "AC Repair & Installation in American Fork, UT",
    metaDesc: "Expert AC repair and installation in American Fork, UT. Same-day service, upfront pricing. Call Wasatch Climate Co. at (385) 200-2308.",
    heroHeading: "AC Repair & Installation",
    heroSub: "Fast, reliable air conditioning service across Utah County. Same-day repairs, upfront pricing.",
    img: "/images/service_ac.jpg",
    intro: "When your air conditioning fails during a Utah summer, you need help fast. Wasatch Climate Co. provides same-day AC repair and installation services to homeowners throughout American Fork and Utah County. Our NATE-certified technicians diagnose the problem quickly, give you a clear upfront price, and get your home cool again — often within the same day.",
    body: "We service all major AC brands including Carrier, Lennox, Trane, Goodman, Rheem, and more. Whether you need a simple capacitor replacement or a complete system installation, our team has the expertise and parts to handle it right. We also offer free second opinions if you've been told you need a costly repair or full replacement.",
    bullets: [
      "Same-day AC repair throughout Utah County",
      "New AC system installation with free estimates",
      "All brands and models serviced",
      "Refrigerant recharge and leak detection",
      "Compressor, capacitor, and coil replacement",
      "Thermostat installation and programming",
      "Ductwork inspection and sealing",
      "Energy-efficient system upgrades",
    ],
    faqs: [
      {
        q: "How much does AC repair cost in American Fork, UT?",
        a: "AC repair costs in American Fork typically range from $150 for minor repairs (like a capacitor) to $1,200+ for major repairs (like a compressor). We always provide upfront pricing before starting work. Call (385) 200-2308 for a same-day diagnosis.",
      },
      {
        q: "How long does an AC installation take?",
        a: "A standard central AC installation takes 4–8 hours. Our team works efficiently and cleans up completely before leaving. We can usually schedule installations within 1–3 business days.",
      },
      {
        q: "What AC brands do you recommend?",
        a: "We're authorized dealers for Carrier and Lennox, and we also install and service Trane, Goodman, Rheem, and other major brands. We'll recommend the best system for your home's size, budget, and efficiency goals.",
      },
    ],
    relatedServices: ["Furnace Repair & Heating", "HVAC Maintenance", "Indoor Air Quality"],
  },
  "furnace-repair": {
    title: "Furnace Repair & Heating in American Fork, UT",
    metaDesc: "24/7 emergency furnace repair in American Fork, UT. NATE-certified technicians, upfront pricing. Call Wasatch Climate Co. at (385) 200-2308.",
    heroHeading: "Furnace Repair & Heating",
    heroSub: "24/7 emergency furnace repair and heating installation across Utah County. We answer every call.",
    img: "/images/service_furnace.jpg",
    intro: "Utah winters are brutal. When your furnace stops working, you need a trusted HVAC company that answers the phone at any hour. Wasatch Climate Co. provides 24/7 emergency furnace repair throughout American Fork and all of Utah County. Our certified technicians arrive fast, diagnose accurately, and restore your heat — day or night.",
    body: "We service all types of heating systems including gas furnaces, electric furnaces, heat pumps, and boilers. Our technicians are trained to handle everything from simple igniter replacements to complex heat exchanger repairs. We also perform thorough safety inspections to ensure your system isn't producing dangerous carbon monoxide levels.",
    bullets: [
      "24/7 emergency furnace repair",
      "Gas and electric furnace service",
      "Heat exchanger inspection and replacement",
      "Igniter, flame sensor, and blower motor repair",
      "New furnace installation with free estimates",
      "Carbon monoxide testing and safety inspection",
      "Thermostat replacement and programming",
      "All major brands serviced",
    ],
    faqs: [
      {
        q: "My furnace won't turn on — what should I do?",
        a: "First, check your thermostat settings and replace the battery if needed. Check your circuit breaker and make sure the furnace switch is on. If it still won't start, call Wasatch Climate Co. at (385) 200-2308 — we offer 24/7 emergency service.",
      },
      {
        q: "How much does furnace repair cost in Utah County?",
        a: "Furnace repair costs vary by issue. Common repairs like igniter replacement run $150–$300. More complex repairs like heat exchanger work can run $500–$1,500. We always provide upfront pricing before any work begins.",
      },
      {
        q: "When should I replace my furnace instead of repairing it?",
        a: "Consider replacement if your furnace is over 15 years old, requires repairs costing more than 50% of a new unit, or has a cracked heat exchanger. We offer honest assessments — we'll never push you toward a replacement you don't need.",
      },
    ],
    relatedServices: ["AC Repair & Installation", "HVAC Maintenance", "Heat Pumps"],
  },
  "hvac-maintenance": {
    title: "HVAC Maintenance & Tune-Up in American Fork, UT",
    metaDesc: "Professional HVAC maintenance and seasonal tune-ups in American Fork, UT. Prevent breakdowns, extend system life. Call (385) 200-2308.",
    heroHeading: "HVAC Maintenance & Tune-Up",
    heroSub: "Seasonal tune-ups that prevent breakdowns and extend your system's life. Starting at just $89.",
    img: "/images/service_maintenance.jpg",
    intro: "The best HVAC repair is the one you never need. Regular maintenance by a certified technician prevents 85% of HVAC breakdowns, extends system life by 5–10 years, and keeps your energy bills low. Wasatch Climate Co. offers comprehensive seasonal tune-ups for both heating and cooling systems throughout Utah County.",
    body: "Our maintenance visits include a 21-point inspection of your entire HVAC system. We clean coils, check refrigerant levels, test electrical connections, lubricate moving parts, inspect the heat exchanger, and replace filters. We also provide a written report of your system's condition and any recommended repairs.",
    bullets: [
      "21-point HVAC inspection",
      "Spring AC tune-up",
      "Fall furnace tune-up",
      "Filter replacement",
      "Coil cleaning and refrigerant check",
      "Electrical connection testing",
      "Heat exchanger inspection",
      "Annual maintenance plans available",
    ],
    faqs: [
      {
        q: "How often should I have my HVAC serviced?",
        a: "We recommend twice yearly: a spring AC tune-up before cooling season and a fall furnace tune-up before heating season. This keeps your system running efficiently and catches small issues before they become expensive breakdowns.",
      },
      {
        q: "How much does HVAC maintenance cost?",
        a: "Our standard tune-up starts at $89 per visit. Our annual maintenance plan covers both spring and fall tune-ups for a discounted rate, plus priority scheduling and discounts on repairs.",
      },
      {
        q: "What's included in your HVAC tune-up?",
        a: "Our 21-point inspection covers thermostat calibration, filter replacement, coil cleaning, refrigerant level check, electrical connection testing, lubrication of moving parts, heat exchanger inspection, and a full written report.",
      },
    ],
    relatedServices: ["AC Repair & Installation", "Furnace Repair & Heating", "Indoor Air Quality"],
  },
  "indoor-air-quality": {
    title: "Indoor Air Quality Solutions in American Fork, UT",
    metaDesc: "Whole-home air purifiers, UV lights, and humidifiers in American Fork, UT. Breathe cleaner air. Call Wasatch Climate Co. at (385) 200-2308.",
    heroHeading: "Indoor Air Quality Solutions",
    heroSub: "Breathe cleaner, healthier air in your Utah County home. Whole-home purification systems installed by certified experts.",
    img: "/images/service_iaq.jpg",
    intro: "Utah's air quality challenges don't stop at your front door. Indoor air can be 2–5 times more polluted than outdoor air, containing allergens, bacteria, viruses, and volatile organic compounds. Wasatch Climate Co. provides comprehensive indoor air quality solutions that integrate directly with your existing HVAC system for whole-home protection.",
    body: "Our IAQ specialists assess your home's specific air quality needs and recommend the right combination of solutions. From whole-home air purifiers that eliminate 99.97% of airborne particles to UV light systems that destroy bacteria and viruses, we have the technology to make your home's air genuinely clean.",
    bullets: [
      "Whole-home air purifiers (HEPA)",
      "UV light germicidal systems",
      "Whole-home humidifiers",
      "Whole-home dehumidifiers",
      "Advanced media filters",
      "Air quality testing and assessment",
      "Duct cleaning and sanitization",
      "Carbon monoxide detectors",
    ],
    faqs: [
      {
        q: "What's the best air purifier for a Utah home?",
        a: "For Utah's specific challenges (inversion smog, dust, pollen, wildfire smoke), we recommend a whole-home HEPA air purifier combined with a UV light system. This combination removes particles AND neutralizes biological contaminants.",
      },
      {
        q: "Do I need a humidifier in Utah?",
        a: "Yes — Utah's climate is very dry, especially in winter. Low humidity causes dry skin, static electricity, wood damage, and increased susceptibility to respiratory illness. A whole-home humidifier maintains optimal 35–50% humidity levels automatically.",
      },
      {
        q: "How much does a whole-home air purifier cost?",
        a: "Whole-home air purifiers typically cost $500–$1,500 installed, depending on the system. UV light systems run $300–$600 installed. Call us for a free assessment and quote.",
      },
    ],
    relatedServices: ["HVAC Maintenance", "AC Repair & Installation", "Furnace Repair & Heating"],
  },
  "heat-pumps": {
    title: "Heat Pump Installation & Repair in American Fork, UT",
    metaDesc: "Heat pump installation and repair in American Fork, UT. Efficient heating and cooling in one system. Call Wasatch Climate Co. at (385) 200-2308.",
    heroHeading: "Heat Pump Installation & Repair",
    heroSub: "One system for year-round comfort. Heat pumps heat AND cool your home with up to 50% less energy.",
    img: "/images/why_choose_us.jpg",
    intro: "Heat pumps are the most energy-efficient way to heat and cool your Utah home. Unlike traditional furnaces that generate heat, heat pumps move heat — making them 2–3 times more efficient. Modern cold-climate heat pumps work effectively even in Utah's coldest winters, providing year-round comfort from a single system.",
    body: "Wasatch Climate Co. installs and services all major heat pump brands. We'll assess your home's specific needs, calculate the right size system, and provide a transparent quote. Our certified installers ensure your new heat pump is properly sized, correctly charged, and optimally configured for maximum efficiency.",
    bullets: [
      "Heat pump installation (all brands)",
      "Heat pump repair and service",
      "Dual-fuel hybrid systems",
      "Cold-climate heat pumps",
      "Air-source heat pump installation",
      "Energy efficiency consultation",
      "Rebate and incentive assistance",
      "Financing available",
    ],
    faqs: [
      {
        q: "Do heat pumps work in Utah's cold winters?",
        a: "Modern cold-climate heat pumps work efficiently down to -15°F. For Utah's climate, we often recommend a dual-fuel system that uses the heat pump for mild weather and a gas furnace as backup during extreme cold — giving you maximum efficiency and reliability.",
      },
      {
        q: "How much can I save with a heat pump?",
        a: "Homeowners who switch from electric resistance heating to a heat pump typically save 30–50% on heating costs. Savings vary based on your current system, home size, and energy rates. We can provide a detailed energy analysis.",
      },
      {
        q: "Are there rebates for heat pump installation in Utah?",
        a: "Yes! Federal tax credits cover 30% of heat pump installation costs (up to $2,000) through the Inflation Reduction Act. Rocky Mountain Power also offers rebates. We'll help you navigate all available incentives.",
      },
    ],
    relatedServices: ["AC Repair & Installation", "Furnace Repair & Heating", "HVAC Maintenance"],
  },
  "mini-splits": {
    title: "Ductless Mini-Split Installation in American Fork, UT",
    metaDesc: "Ductless mini-split installation and repair in American Fork, UT. Perfect for additions, garages, and older homes. Call (385) 200-2308.",
    heroHeading: "Ductless Mini-Split Systems",
    heroSub: "Zoned comfort without ductwork. Perfect for additions, garages, and homes without existing duct systems.",
    img: "/images/service_iaq.jpg",
    intro: "Ductless mini-split systems are the ideal solution for spaces that can't be served by your central HVAC system. Whether you're adding a room, finishing a basement, converting a garage, or dealing with a home that has no ductwork, mini-splits provide efficient, zoned heating and cooling with minimal installation disruption.",
    body: "Wasatch Climate Co. installs single-zone and multi-zone mini-split systems from leading brands including Mitsubishi, Daikin, and LG. Our certified installers handle everything from equipment selection and sizing to installation and commissioning. Mini-splits are also one of the most energy-efficient HVAC options available.",
    bullets: [
      "Single-zone mini-split installation",
      "Multi-zone system installation",
      "Garage and workshop heating/cooling",
      "Home addition HVAC solutions",
      "No ductwork required",
      "Zoned temperature control",
      "Mini-split repair and maintenance",
      "All major brands serviced",
    ],
    faqs: [
      {
        q: "How much does a mini-split cost to install?",
        a: "Single-zone mini-split installations typically cost $2,000–$4,500 installed. Multi-zone systems run $4,000–$10,000+ depending on the number of zones. We provide free estimates with no obligation.",
      },
      {
        q: "How long does mini-split installation take?",
        a: "A single-zone installation typically takes 4–6 hours. Multi-zone systems may take 1–2 days. Our team minimizes disruption and cleans up completely before leaving.",
      },
      {
        q: "Can a mini-split heat my garage in Utah winters?",
        a: "Yes! Modern mini-splits work effectively in very cold temperatures. We recommend cold-climate models for Utah garages and workshops. They're far more efficient than electric space heaters and provide cooling in summer too.",
      },
    ],
    relatedServices: ["AC Repair & Installation", "Heat Pumps", "HVAC Maintenance"],
  },
};

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#1A2332] pr-4" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
          {q}
        </span>
        {open ? <ChevronUp size={20} className="text-[#0B6B6B] flex-shrink-0" /> : <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white border-t border-gray-100">
          <p className="text-gray-600 leading-relaxed pt-3">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const service = SERVICE_DATA[slug];

  if (!service) {
    return (
      <div className="min-h-screen" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-black text-[#1A2332] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Service Not Found
          </h1>
          <Link href="/services" className="text-[#0B6B6B] font-semibold">← Back to All Services</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      <Header />

      {/* Hero */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          backgroundImage: `url('${service.img}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/50" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <Link href="/services" className="text-teal-300 text-sm font-semibold mb-4 inline-flex items-center gap-1 hover:text-white transition-colors">
              ← All Services
            </Link>
            <h1
              className="text-4xl md:text-6xl font-black text-white uppercase mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {service.heroHeading}
            </h1>
            <p className="text-gray-200 text-lg mb-6">{service.heroSub}</p>
            <a
              href="tel:+13852002308"
              className="inline-flex items-center gap-2 bg-[#E8820C] hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-[1.03]"
            >
              <Phone size={18} />
              Call (385) 200-2308
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{service.intro}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{service.body}</p>

              <h2
                className="text-2xl font-black text-[#1A2332] mb-5 uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                What's Included
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {service.bullets.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#0B6B6B] flex-shrink-0" />
                    <span className="text-gray-700">{b}</span>
                  </div>
                ))}
              </div>

              <h2
                className="text-2xl font-black text-[#1A2332] mb-5 uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {service.faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Call CTA */}
              <div className="bg-[#0B6B6B] rounded-xl p-6 text-white text-center">
                <h3 className="text-xl font-black mb-2 uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Need Service Today?
                </h3>
                <p className="text-teal-100 text-sm mb-4">We offer same-day service across Utah County</p>
                <a
                  href="tel:+13852002308"
                  className="flex items-center justify-center gap-2 bg-[#E8820C] hover:bg-amber-600 text-white font-bold px-6 py-4 rounded-lg transition-all hover:scale-[1.02] w-full"
                >
                  <Phone size={18} />
                  (385) 200-2308
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 border border-white/50 text-white px-6 py-3 rounded-lg mt-3 hover:bg-white/10 transition-all text-sm"
                >
                  Request an Estimate
                </Link>
              </div>

              {/* Trust badges */}
              <div className="bg-[#F8F6F2] rounded-xl p-6">
                <h3 className="font-bold text-[#1A2332] mb-4" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
                  Why Choose Us
                </h3>
                {[
                  "Licensed & Insured in Utah",
                  "NATE-Certified Technicians",
                  "Upfront, Honest Pricing",
                  "Same-Day Service Available",
                  "100% Satisfaction Guarantee",
                  "4.9★ Google Rating (247 reviews)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 py-2 border-b border-gray-100 last:border-0">
                    <CheckCircle size={16} className="text-[#0B6B6B] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Related services */}
              <div className="bg-white border border-gray-100 rounded-xl p-6" style={{ borderLeft: "4px solid #0B6B6B" }}>
                <h3 className="font-bold text-[#1A2332] mb-4" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
                  Related Services
                </h3>
                {service.relatedServices.map((s) => (
                  <Link
                    key={s}
                    href={`/services/${s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                    className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 text-[#0B6B6B] hover:text-[#084f4f] text-sm font-medium group"
                  >
                    {s}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading={`${service.heroHeading} — Call Today`}
        subheading="Same-day service available across American Fork and Utah County."
        variant="teal"
      />

      <Footer />
    </div>
  );
}

