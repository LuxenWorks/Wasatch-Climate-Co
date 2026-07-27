/**
 * Wasatch Climate Co. — Service Areas Overview Page
 * Design: Precision Teal — grid of all service areas with local SEO content
 */
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Header from "./Header";
import Footer from "./Footer";
import CTASection from "./CTASection";

const AREAS = [
  {
    name: "American Fork",
    slug: "american-fork",
    desc: "Our home base. We provide the fastest response times in American Fork for all HVAC emergencies.",
    zip: "84003",
  },
  {
    name: "Lehi",
    slug: "lehi",
    desc: "Serving Lehi's rapidly growing communities with expert heating and cooling solutions.",
    zip: "84043",
  },
  {
    name: "Orem",
    slug: "orem",
    desc: "Comprehensive HVAC services for Orem homeowners, from University Avenue to the foothills.",
    zip: "84057",
  },
  {
    name: "Provo",
    slug: "provo",
    desc: "Trusted HVAC contractor serving Provo residents and commercial properties throughout Utah County's largest city.",
    zip: "84601",
  },
  {
    name: "Pleasant Grove",
    slug: "pleasant-grove",
    desc: "Fast, reliable HVAC service for Pleasant Grove families. Same-day appointments available.",
    zip: "84062",
  },
  {
    name: "Highland",
    slug: "highland",
    desc: "Premium HVAC service for Highland's upscale communities. We service all high-end systems.",
    zip: "84003",
  },
  {
    name: "Lindon",
    slug: "lindon",
    desc: "Serving Lindon homeowners and businesses with expert heating and cooling solutions.",
    zip: "84042",
  },
  {
    name: "Eagle Mountain",
    slug: "eagle-mountain",
    desc: "Fast HVAC service to Eagle Mountain's growing communities. We know the area well.",
    zip: "84005",
  },
  {
    name: "Saratoga Springs",
    slug: "saratoga-springs",
    desc: "Reliable heating and cooling service for Saratoga Springs families and new construction.",
    zip: "84045",
  },
  {
    name: "Spanish Fork",
    slug: "spanish-fork",
    desc: "Expert HVAC service for Spanish Fork residents. Emergency service available 24/7.",
    zip: "84660",
  },
  {
    name: "Springville",
    slug: "springville",
    desc: "Trusted HVAC contractor serving Springville and surrounding communities.",
    zip: "84663",
  },
  {
    name: "Draper",
    slug: "draper",
    desc: "Serving Draper homeowners with fast, professional HVAC service across all neighborhoods.",
    zip: "84020",
  },
];

export default function ServiceAreas() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      <Header />

      {/* Hero */}
      <section className="bg-[#1A2332] py-16">
        <div className="container text-center">
          <p className="text-[#0B6B6B] font-semibold text-sm uppercase tracking-widest mb-2">Where We Work</p>
          <h1
            className="text-4xl md:text-6xl font-black text-white uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            HVAC Service Areas
            <br />
            <span className="text-[#E8820C]">Across Utah County</span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Based in American Fork, we provide fast HVAC service to every community in Utah County. Same-day and emergency service available.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="bg-[#F8F6F2] py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                style={{ borderLeft: "4px solid #0B6B6B" }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#0B6B6B]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} className="text-[#0B6B6B]" />
                  </div>
                  <div>
                    <h2
                      className="font-bold text-[#1A2332] text-xl mb-1"
                      style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}
                    >
                      {area.name}, UT {area.zip}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{area.desc}</p>
                    <span className="text-[#0B6B6B] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Services <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Don't See Your City? Call Us."
        subheading="We serve all of Utah County and surrounding areas. Call (385) 200-2308 to confirm service to your location."
        variant="slate"
      />

      <Footer />
    </div>
  );
}
