/**
 * Wasatch Climate Co. — Reusable CTA Section
 * Design: Precision Teal — high-contrast amber CTA on teal background
 */
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  variant?: "teal" | "slate" | "amber";
}

export default function CTASection({
  heading = "Your Furnace Quit at 2am. We Answer.",
  subheading = "24/7 emergency HVAC service across Utah County. Call now — we pick up.",
  variant = "teal",
}: CTASectionProps) {
  const bgClass =
    variant === "teal"
      ? "bg-[#0B6B6B]"
      : variant === "slate"
      ? "bg-[#1A2332]"
      : "bg-[#E8820C]";

  return (
    <section className={`${bgClass} py-16 md:py-20`}>
      <div className="container text-center">
        <h2
          className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-wide"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {heading}
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13852002308"
            className="flex items-center justify-center gap-3 bg-[#E8820C] hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-lg text-xl transition-all hover:scale-[1.03] active:scale-[0.97] shadow-lg"
          >
            <Phone size={22} />
            Call Now — (385) 200-2308
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#0B6B6B] transition-all"
          >
            Get a Free Estimate
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

