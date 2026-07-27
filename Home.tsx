/**
 * Wasatch Climate Co. — Homepage
 * Design: Precision Teal — asymmetric Swiss-precision layouts, technical proof blocks,
 *   dominant teal brand field, direct/specific copy, Barlow Condensed headlines
 * Style Decisions:
 *   - Every section has one asymmetric move (offset columns, staggered cards, oversized numerals, diagonal cuts)
 *   - Trust claims shown as technical proof blocks with bold numerals, teal rules, local place names
 *   - Teal is the dominant brand field, amber is disciplined conversion color only
 *   - Imagery: technicians, equipment, branded vehicles, Utah County terrain
 * Goal: Generate phone calls to (385) 200-2308
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  Phone, Star, Shield, Clock, Award, CheckCircle, ThumbsUp,
  Wind, Flame, Wrench, Leaf, ArrowRight, ChevronDown, ChevronUp,
  MapPin, Zap, TrendingUp, Users
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const SERVICES = [
  {
    icon: Wind,
    title: "AC Repair & Installation",
    tag: "COOLING",
    desc: "Same-day diagnosis. All makes and models. We carry the most common parts on every truck.",
    href: "/services/ac-repair",
    img: "/images/service_ac.jpg",
  },
  {
    icon: Flame,
    title: "Furnace Repair & Heating",
    tag: "HEATING",
    desc: "24/7 emergency furnace repair. We've fixed thousands of furnaces across Utah County.",
    href: "/services/furnace-repair",
    img: "/images/service_furnace.jpg",
  },
  {
    icon: Wrench,
    title: "HVAC Maintenance",
    tag: "MAINTENANCE",
    desc: "Seasonal tune-ups that prevent 85% of breakdowns. Starting at $89.",
    href: "/services/hvac-maintenance",
    img: "/images/service_maintenance.jpg",
  },
  {
    icon: Leaf,
    title: "Indoor Air Quality",
    tag: "AIR QUALITY",
    desc: "Whole-home purifiers, UV systems, and humidifiers for Utah's challenging air.",
    href: "/services/indoor-air-quality",
    img: "/images/service_iaq.jpg",
  },
];

const PROOF_STATS = [
  { num: "1,500+", label: "Utah County Homes Served", sub: "American Fork to Provo" },
  { num: "4.9★", label: "Google Rating", sub: "247 verified reviews" },
  { num: "<2hr", label: "Emergency Response", sub: "Avg. dispatch time" },
  { num: "100%", label: "Satisfaction Guarantee", sub: "Or we come back free" },
];

const WHY_US = [
  {
    icon: Zap,
    title: "Same-Day Dispatch",
    desc: "Certified technician at your door within hours — not days. We stock parts on every truck.",
  },
  {
    icon: Shield,
    title: "Upfront Pricing",
    desc: "You see the exact cost before we start. No surprise fees. No hidden charges. Ever.",
  },
  {
    icon: Award,
    title: "NATE-Certified",
    desc: "Every tech holds the highest industry certification. We fix it right the first time.",
  },
  {
    icon: CheckCircle,
    title: "100% Guarantee",
    desc: "Not satisfied? We come back and make it right — no questions, no charge.",
  },
];

const REVIEWS = [
  {
    name: "Sarah M.",
    city: "American Fork",
    rating: 5,
    text: "Our AC went out on the hottest day of the year. Wasatch Climate Co. had a tech at our door within 2 hours. Fixed it fast and the price was fair. These guys are the real deal.",
  },
  {
    name: "David K.",
    city: "Lehi",
    rating: 5,
    text: "Furnace stopped working at midnight in January. Called Wasatch Climate Co. and they actually answered! Tech arrived by 1am and had heat back on before 2am. Incredible service.",
  },
  {
    name: "Jennifer T.",
    city: "Pleasant Grove",
    rating: 5,
    text: "I've used three different HVAC companies over the years. Wasatch Climate Co. is by far the best. Honest, on time, and they explained everything clearly. Won't use anyone else.",
  },
  {
    name: "Mike R.",
    city: "Orem",
    rating: 5,
    text: "Got a full AC system replacement. The team was professional, clean, and finished ahead of schedule. The new system is amazing and energy bills are already lower.",
  },
  {
    name: "Lisa H.",
    city: "Eagle Mountain",
    rating: 5,
    text: "Annual maintenance plan is worth every penny. They caught a cracked heat exchanger before it became a carbon monoxide issue. Literally saved my family. Thank you!",
  },
  {
    name: "Tom B.",
    city: "Provo",
    rating: 5,
    text: "Quick response, fair pricing, and the tech was incredibly knowledgeable. Diagnosed the problem in minutes. I highly recommend Wasatch Climate Co. to everyone in Utah County.",
  },
];

const FAQS = [
  {
    q: "How quickly can you respond to an HVAC emergency in American Fork?",
    a: "We offer same-day and emergency service throughout American Fork and Utah County. For true emergencies, we typically dispatch a technician within 1–2 hours. Call us at (385) 200-2308 any time, day or night.",
  },
  {
    q: "How much does AC repair cost in Utah County?",
    a: "AC repair costs vary depending on the issue. Minor repairs like capacitor replacements typically run $150–$350. More complex repairs involving refrigerant or compressor work range from $400–$1,200. We always provide upfront, transparent pricing before beginning any work.",
  },
  {
    q: "Should I repair or replace my HVAC system?",
    a: "If your system is over 12–15 years old, requires repairs costing more than 50% of a new system's price, or uses R-22 refrigerant (phased out), replacement is usually the smarter investment. We offer free estimates and honest recommendations — we'll never push you toward a replacement you don't need.",
  },
  {
    q: "How often should I have my HVAC system serviced?",
    a: "We recommend a professional tune-up twice a year: once in spring before cooling season and once in fall before heating season. Regular maintenance prevents 85% of HVAC breakdowns and extends system life by 5–10 years.",
  },
  {
    q: "Do you offer financing for new HVAC installations?",
    a: "Yes! We offer flexible financing options to make new HVAC installations affordable for any budget. Ask about our 0% interest financing plans when you call for a free estimate.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve all of Utah County including American Fork, Lehi, Orem, Provo, Pleasant Grove, Highland, Lindon, Eagle Mountain, Saratoga Springs, Spanish Fork, Springville, and Draper.",
  },
];

const SERVICE_AREAS = [
  "American Fork", "Lehi", "Orem", "Provo", "Pleasant Grove",
  "Highland", "Lindon", "Eagle Mountain", "Saratoga Springs",
  "Spanish Fork", "Springville", "Draper", "Mapleton", "Payson",
  "Salem", "Elk Ridge", "Santaquin", "Vineyard", "Cedar Hills",
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left hover:text-[#0B6B6B] transition-colors"
      >
        <span className="font-semibold text-[#1A2332] pr-4 text-lg" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
          {q}
        </span>
        {open ? <ChevronUp size={20} className="text-[#0B6B6B] flex-shrink-0" /> : <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      <Header />

      {/* ===== HERO — asymmetric 60/40 split ===== */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/images/hero_bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-transparent" />
        {/* Teal left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0B6B6B]" />

        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-[640px]">
            {/* Location tag */}
            <div className="inline-flex items-center gap-2 border border-[#0B6B6B] text-[#0B6B6B] bg-[#0B6B6B]/10 backdrop-blur text-xs font-bold px-3 py-1.5 rounded mb-6 uppercase tracking-widest">
              <MapPin size={12} />
              American Fork, UT 84003
            </div>

            <h1
              className="text-6xl md:text-8xl font-black text-white uppercase leading-none mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "-0.02em" }}
            >
              Emergency
              <br />
              <span className="text-[#E8820C]">HVAC</span>
              <br />
              Service.
            </h1>
            <div className="w-16 h-1 bg-[#0B6B6B] mb-6 mt-4" />
            <p className="text-gray-200 text-lg md:text-xl mb-2 font-semibold">
              24/7 · Licensed · Utah County's #1 Rated
            </p>
            <p className="text-gray-400 text-base mb-8 max-w-lg leading-relaxed">
              We've restored comfort to over 1,500 Utah County homes. When your HVAC fails, we answer — day or night, weekends, holidays.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+13852002308"
                className="flex items-center justify-center gap-3 bg-[#E8820C] hover:bg-amber-600 text-white font-black px-8 py-5 rounded-lg text-xl transition-all hover:scale-[1.03] active:scale-[0.97] shadow-xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                <Phone size={22} />
                (385) 200-2308
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-8 py-5 rounded-lg text-lg hover:border-white hover:bg-white/10 transition-all"
              >
                Free Estimate
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Inline proof */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
              {["Licensed & Insured", "4.9★ · 247 Reviews", "Same-Day Service", "100% Guarantee"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0B6B6B]" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diagonal cut */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path d="M0 60 L1440 0 L1440 60 Z" fill="#F8F6F2" />
          </svg>
        </div>
      </section>

      {/* ===== PROOF STATS — technical block with teal rules ===== */}
      <section className="bg-[#F8F6F2] pt-8 pb-0">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            {PROOF_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-6 md:p-8 ${i < PROOF_STATS.length - 1 ? "border-r border-gray-100" : ""} flex flex-col`}
              >
                <div className="w-8 h-0.5 bg-[#0B6B6B] mb-3" />
                <p
                  className="text-4xl md:text-5xl font-black text-[#0B6B6B] leading-none mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {stat.num}
                </p>
                <p className="font-bold text-[#1A2332] text-sm mb-0.5" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
                  {stat.label}
                </p>
                <p className="text-gray-400 text-xs">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES — staggered grid with teal left borders ===== */}
      <section className="bg-[#F8F6F2] py-20">
        <div className="container">
          {/* Asymmetric header — left-anchored */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-[#0B6B6B]" />
                <p className="text-[#0B6B6B] font-bold text-xs uppercase tracking-widest">What We Fix</p>
              </div>
              <h2
                className="text-4xl md:text-6xl font-black text-[#1A2332] uppercase leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                HVAC Services
                <br />
                <span className="text-[#0B6B6B]">Utah County Trusts</span>
              </h2>
            </div>
            <a
              href="tel:+13852002308"
              className="flex-shrink-0 flex items-center gap-2 bg-[#E8820C] hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-lg transition-all hover:scale-[1.03] text-sm"
            >
              <Phone size={16} />
              Same-Day Service
            </a>
          </div>

          {/* Staggered 2+2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service, i) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row ${i % 2 === 1 ? "md:mt-8" : ""}`}
                style={{ borderLeft: "4px solid #0B6B6B" }}
              >
                <div className="md:w-48 flex-shrink-0 overflow-hidden">
                  <img
                    src={service.img}
                    alt={`${service.title} - Wasatch Climate Co.`}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-black text-[#0B6B6B] tracking-widest bg-[#0B6B6B]/10 px-2 py-0.5 rounded">
                        {service.tag}
                      </span>
                    </div>
                    <h3
                      className="font-black text-[#1A2332] text-xl mb-2"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                  <span className="text-[#0B6B6B] font-bold text-sm flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#0B6B6B] font-bold border-2 border-[#0B6B6B] px-6 py-3 rounded-lg hover:bg-[#0B6B6B] hover:text-white transition-all">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 3-STEP PROCESS — teal dominant section ===== */}
      <section
        className="py-20 relative bg-[#0B6B6B]"
        style={{
          clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
          marginTop: "-2rem",
          paddingTop: "6rem",
          marginBottom: "-2rem",
          paddingBottom: "6rem",
        }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-white/40" />
                <p className="text-teal-200 font-bold text-xs uppercase tracking-widest">How It Works</p>
              </div>
              <h2
                className="text-4xl md:text-6xl font-black text-white uppercase leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Comfort Restored
                <br />
                in 3 Steps.
              </h2>
            </div>
            <a
              href="tel:+13852002308"
              className="flex-shrink-0 flex items-center gap-2 bg-[#E8820C] hover:bg-amber-600 text-white font-black px-8 py-4 rounded-lg text-lg transition-all hover:scale-[1.03] shadow-xl"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              <Phone size={20} />
              Start Step 1 Now
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-white/20 z-0" />
            {[
              { num: "01", title: "Call Us 24/7", desc: "Describe your issue. We dispatch a certified tech — often within the hour. We answer every call." },
              { num: "02", title: "We Diagnose & Price", desc: "Tech arrives on time. Identifies the problem. Gives you the exact cost upfront. No surprises." },
              { num: "03", title: "Enjoy Total Comfort", desc: "Heat or cooling restored. Backed by 100% satisfaction guarantee and parts warranty." },
            ].map((step, i) => (
              <div key={step.num} className={`relative z-10 p-6 md:p-8 ${i === 1 ? "md:border-x border-white/20" : ""}`}>
                <p
                  className="text-9xl font-black text-white/10 leading-none mb-0 -mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {step.num}
                </p>
                <div className="w-8 h-0.5 bg-[#E8820C] mb-4" />
                <h3
                  className="text-2xl font-black text-white mb-3 uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-teal-100 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US — asymmetric split with proof block ===== */}
      <section className="bg-white py-20 mt-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left: image + proof badge */}
            <div className="lg:col-span-2 relative">
              <img
                src="/images/about_team.jpg"
                alt="Wasatch Climate Co. HVAC team — American Fork, Utah"
                className="rounded-2xl shadow-2xl w-full object-cover"
                loading="lazy"
              />
              {/* Proof badge — overlapping */}
              <div className="absolute -bottom-6 -right-4 bg-[#1A2332] text-white p-5 rounded-xl shadow-xl border-l-4 border-[#E8820C]">
                <p className="text-4xl font-black text-[#E8820C]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>247+</p>
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wide">5-Star Reviews</p>
                <p className="text-xs text-gray-500">Utah County, UT</p>
              </div>
            </div>

            {/* Right: content */}
            <div className="lg:col-span-3 lg:pt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#0B6B6B]" />
                <p className="text-[#0B6B6B] font-bold text-xs uppercase tracking-widest">Why Wasatch Climate Co.</p>
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-[#1A2332] uppercase leading-none mb-6"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Utah County's Most
                <br />
                <span className="text-[#0B6B6B]">Trusted HVAC Team</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Over 1,500 Utah County homeowners call us first — and keep coming back. Here's why.
              </p>

              {/* Technical proof grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {WHY_US.map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:border-[#0B6B6B]/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#0B6B6B]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-[#0B6B6B]" />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-[#1A2332] mb-1 text-sm"
                        style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="tel:+13852002308"
                className="inline-flex items-center gap-2 bg-[#0B6B6B] hover:bg-[#084f4f] text-white font-black px-8 py-4 rounded-lg text-lg transition-all hover:scale-[1.03]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                <Phone size={18} />
                Call (385) 200-2308
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS — staggered grid with teal left borders ===== */}
      <section className="bg-[#F8F6F2] py-20">
        <div className="container">
          {/* Left-anchored header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-[#0B6B6B]" />
                <p className="text-[#0B6B6B] font-bold text-xs uppercase tracking-widest">Verified Reviews</p>
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-[#1A2332] uppercase leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                What Your
                <br />
                <span className="text-[#0B6B6B]">Neighbors Say</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-5 py-3 shadow-sm">
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#E8820C] text-[#E8820C]" />
                  ))}
                </div>
                <p className="text-[#1A2332] font-black text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>4.9 / 5.0</p>
                <p className="text-gray-400 text-xs">247 Google Reviews</p>
              </div>
            </div>
          </div>

          {/* Staggered review grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.map((review, i) => (
              <div
                key={review.name}
                className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 ${i % 3 === 1 ? "md:mt-6" : ""} ${i % 3 === 2 ? "md:mt-3" : ""}`}
                style={{ borderLeft: "4px solid #0B6B6B" }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={13} className="fill-[#E8820C] text-[#E8820C]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">"{review.text}"</p>
                <div className="flex items-center gap-2 pt-3 border-t border-gray-50">
                  <div className="w-8 h-8 rounded-full bg-[#0B6B6B] flex items-center justify-center text-white text-sm font-black">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-[#1A2332] text-sm">{review.name}</p>
                    <p className="text-gray-400 text-xs flex items-center gap-1">
                      <MapPin size={10} />
                      {review.city}, UT
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT — asymmetric offset with teal field ===== */}
      <section className="bg-[#1A2332] py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
            {/* Left: teal panel */}
            <div className="bg-[#0B6B6B] p-10 md:p-14 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-0.5 bg-white/40" />
                  <p className="text-teal-200 font-bold text-xs uppercase tracking-widest">About Us</p>
                </div>
                <h2
                  className="text-4xl md:text-5xl font-black text-white uppercase leading-none mb-6"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Your Neighbors.
                  <br />
                  Your HVAC Experts.
                </h2>
                <p className="text-teal-100 leading-relaxed mb-4">
                  Wasatch Climate Co. is locally owned and based right here in American Fork, UT. We're not a franchise. We're your neighbors — and we treat your home like our own.
                </p>
                <p className="text-teal-100 leading-relaxed mb-8">
                  NATE-certified technicians. Honest pricing. Same-day service. That's the Wasatch standard — on every single call, from Lehi to Provo.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { num: "1,500+", label: "Homes Served" },
                    { num: "4.9★", label: "Google Rating" },
                    { num: "24/7", label: "Emergency" },
                  ].map((s) => (
                    <div key={s.label} className="border border-white/20 rounded-lg p-3 text-center">
                      <p className="text-2xl font-black text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.num}</p>
                      <p className="text-teal-200 text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Link href="/about" className="flex items-center gap-2 border border-white/40 text-white font-bold px-5 py-3 rounded-lg hover:bg-white/10 transition-all text-sm">
                  Our Story <ArrowRight size={14} />
                </Link>
                <a href="tel:+13852002308" className="flex items-center gap-2 bg-[#E8820C] hover:bg-amber-600 text-white font-bold px-5 py-3 rounded-lg transition-all text-sm">
                  <Phone size={14} />
                  Call Now
                </a>
              </div>
            </div>
            {/* Right: image */}
            <div className="relative min-h-[300px] lg:min-h-0">
              <img
                src="/images/why_choose_us.jpg"
                alt="Utah family comfortable at home — Wasatch Climate Co."
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREAS ===== */}
      <section className="bg-[#F8F6F2] py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-0.5 bg-[#0B6B6B]" />
                <p className="text-[#0B6B6B] font-bold text-xs uppercase tracking-widest">Coverage Map</p>
              </div>
              <h2
                className="text-3xl md:text-4xl font-black text-[#1A2332] uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Serving All of <span className="text-[#0B6B6B]">Utah County</span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">Fast HVAC service to every community — typically within 60 minutes</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area}
                href={`/service-areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#0B6B6B] hover:text-[#0B6B6B] text-[#1A2332] px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-sm"
              >
                <MapPin size={11} className="text-[#0B6B6B]" />
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ — left-anchored layout ===== */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left sticky header */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-[#0B6B6B]" />
                  <p className="text-[#0B6B6B] font-bold text-xs uppercase tracking-widest">FAQ</p>
                </div>
                <h2
                  className="text-4xl md:text-5xl font-black text-[#1A2332] uppercase leading-none mb-6"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  HVAC Questions?
                  <br />
                  <span className="text-[#0B6B6B]">Real Answers.</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Straight answers from our certified technicians. No jargon, no runaround.
                </p>
                <a
                  href="tel:+13852002308"
                  className="inline-flex items-center gap-2 bg-[#E8820C] hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-lg transition-all hover:scale-[1.03] text-sm"
                >
                  <Phone size={16} />
                  Ask Us Directly
                </a>
              </div>
            </div>
            {/* Right: FAQ accordion */}
            <div className="lg:col-span-3">
              {FAQS.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <CTASection
        heading="Your Furnace Quit at 2am. We Answer."
        subheading="24/7 emergency HVAC service across Utah County. Call now — we pick up."
        variant="teal"
      />

      <Footer />
    </div>
  );
}
