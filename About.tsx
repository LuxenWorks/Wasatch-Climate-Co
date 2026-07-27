/**
 * Wasatch Climate Co. — About Page
 * Design: Precision Teal — story, team, values, certifications
 */
import { Phone, Shield, Award, Heart, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const VALUES = [
  {
    icon: Shield,
    title: "Honesty First",
    desc: "We diagnose the real problem and give you the real price — upfront. No upselling, no scare tactics, no surprises on your bill.",
  },
  {
    icon: Award,
    title: "Technical Excellence",
    desc: "Every technician on our team is NATE-certified and undergoes continuous training on the latest HVAC systems and technologies.",
  },
  {
    icon: Heart,
    title: "Community Roots",
    desc: "We live and work in Utah County. When we service your home, we're taking care of our neighbors — and that means everything to us.",
  },
  {
    icon: CheckCircle,
    title: "Guaranteed Results",
    desc: "Our 100% satisfaction guarantee isn't marketing language. If you're not happy, we come back and make it right. Period.",
  },
];

const CERTIFICATIONS = [
  "NATE-Certified Technicians",
  "Utah HVAC Contractor License",
  "EPA 608 Certified",
  "Fully Bonded & Insured",
  "Carrier Authorized Dealer",
  "Lennox Premier Dealer",
  "Trane Comfort Specialist",
  "BBB Accredited Business",
];

export default function About() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      <Header />

      {/* Hero */}
      <section className="bg-[#1A2332] py-16">
        <div className="container text-center">
          <p className="text-[#0B6B6B] font-semibold text-sm uppercase tracking-widest mb-2">Our Story</p>
          <h1
            className="text-4xl md:text-6xl font-black text-white uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            About Wasatch Climate Co.
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Locally owned. NATE-certified. Committed to your comfort since day one.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#0B6B6B] font-semibold text-sm uppercase tracking-widest mb-2">Who We Are</p>
              <h2
                className="text-4xl md:text-5xl font-black text-[#1A2332] uppercase mb-6"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Built on Trust,
                <br />
                <span className="text-[#0B6B6B]">Driven by Results</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Wasatch Climate Co. was founded with a single mission: to provide American Fork and Utah County homeowners with the kind of HVAC service they actually deserve — fast, honest, and done right the first time.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We started as a small team of certified technicians who were tired of seeing homeowners get overcharged and underserved by large, impersonal HVAC companies. We knew we could do better. So we did.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, we've served over 1,500 Utah County families, earned a 4.9-star rating across 247+ Google reviews, and built a reputation as the HVAC company that actually answers the phone at 2am when your furnace quits in January.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { num: "1,500+", label: "Homes Served" },
                  { num: "4.9★", label: "Google Rating" },
                  { num: "24/7", label: "Emergency Service" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-[#F8F6F2] rounded-xl">
                    <p className="text-2xl font-black text-[#0B6B6B]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {stat.num}
                    </p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
              <a
                href="tel:+13852002308"
                className="inline-flex items-center gap-2 bg-[#E8820C] hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-[1.03]"
              >
                <Phone size={18} />
                Call (385) 200-2308
              </a>
            </div>
            <div>
              <img
                src="/images/about_team.jpg"
                alt="Wasatch Climate Co. team in American Fork, Utah"
                className="rounded-2xl shadow-2xl w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8F6F2] py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2
              className="text-4xl md:text-5xl font-black text-[#1A2332] uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Our Core <span className="text-[#0B6B6B]">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm flex gap-5" style={{ borderLeft: "4px solid #0B6B6B" }}>
                <div className="w-12 h-12 bg-[#0B6B6B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <v.icon size={22} className="text-[#0B6B6B]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2332] text-lg mb-2" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
                    {v.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#1A2332] py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-black text-white uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Certifications & <span className="text-[#E8820C]">Credentials</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 bg-white/10 text-white px-5 py-3 rounded-full text-sm font-medium"
              >
                <CheckCircle size={14} className="text-[#0B6B6B]" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Experience the Wasatch Difference?"
        subheading="Call today for honest pricing, same-day service, and a team that actually cares."
        variant="teal"
      />

      <Footer />
    </div>
  );
}

