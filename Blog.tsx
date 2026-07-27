/**
 * Wasatch Climate Co. — Blog Page
 * Design: Precision Teal — SEO content hub with HVAC tips and guides
 */
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Link } from "wouter";
import Header from "./Header";
import Footer from "./Footer";
import CTASection from "@/components/CTASection";

const POSTS = [
  {
    slug: "how-often-replace-hvac-filter",
    title: "How Often Should You Replace Your HVAC Filter in Utah?",
    excerpt: "Utah's dusty, dry climate means your HVAC filter works harder than average. Here's exactly how often to replace it — and what happens if you don't.",
    category: "Maintenance",
    readTime: "5 min read",
    date: "January 15, 2025",
    img: "/images/service_maintenance.jpg",
  },
  {
    slug: "signs-furnace-needs-repair",
    title: "7 Warning Signs Your Furnace Needs Repair Before Winter",
    excerpt: "Don't wait for a breakdown on the coldest night of the year. These 7 warning signs mean your furnace needs attention now — before it fails completely.",
    category: "Heating",
    readTime: "6 min read",
    date: "October 3, 2024",
    img: "/images/service_furnace.jpg",
  },
  {
    slug: "ac-not-cooling-house",
    title: "AC Running But Not Cooling? Here's Why (and What to Do)",
    excerpt: "Your AC is running but the house won't cool down. This frustrating problem has several common causes — some you can fix yourself, others need a pro.",
    category: "Cooling",
    readTime: "7 min read",
    date: "June 20, 2024",
    img: "/images/service_ac.jpg",
  },
  {
    slug: "heat-pump-vs-furnace-utah",
    title: "Heat Pump vs. Furnace: Which Is Better for Utah Homes?",
    excerpt: "Utah's climate is unique — cold winters, hot summers, and high altitude. We break down the pros and cons of heat pumps vs. gas furnaces for Utah homeowners.",
    category: "Heating",
    readTime: "8 min read",
    date: "September 12, 2024",
    img: "/images/why_choose_us.jpg",
  },
  {
    slug: "improve-indoor-air-quality-utah",
    title: "How to Improve Indoor Air Quality in Your Utah Home",
    excerpt: "Utah's inversion season and wildfire smoke make indoor air quality a real concern. Here are the most effective ways to clean the air inside your home.",
    category: "Air Quality",
    readTime: "6 min read",
    date: "February 8, 2025",
    img: "/images/service_iaq.jpg",
  },
  {
    slug: "hvac-maintenance-checklist",
    title: "The Complete HVAC Maintenance Checklist for Utah Homeowners",
    excerpt: "A comprehensive seasonal checklist to keep your HVAC system running efficiently year-round. Includes DIY tasks and when to call a professional.",
    category: "Maintenance",
    readTime: "9 min read",
    date: "March 1, 2025",
    img: "/images/service_maintenance.jpg",
  },
];

const CATEGORIES = ["All", "Heating", "Cooling", "Maintenance", "Air Quality", "Installation"];

export default function Blog() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      <Header />

      {/* Hero */}
      <section className="bg-[#1A2332] py-16">
        <div className="container text-center">
          <p className="text-[#0B6B6B] font-semibold text-sm uppercase tracking-widest mb-2">HVAC Tips & Guides</p>
          <h1
            className="text-4xl md:text-6xl font-black text-white uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            The Wasatch Climate
            <br />
            <span className="text-[#E8820C]">HVAC Resource Center</span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Expert HVAC tips, guides, and advice for Utah County homeowners. Written by our certified technicians.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-gray-100 py-4">
        <div className="container flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:border-[#0B6B6B] hover:text-[#0B6B6B] transition-all"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-[#F8F6F2] py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#0B6B6B] bg-[#0B6B6B]/10 px-2 py-1 rounded-full">
                      <Tag size={10} />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2
                    className="font-bold text-[#1A2332] text-lg mb-2 leading-snug group-hover:text-[#0B6B6B] transition-colors"
                    style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{post.date}</span>
                    <span className="text-[#0B6B6B] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Questions About Your HVAC System?"
        subheading="Our certified technicians are ready to help. Call now for expert advice and same-day service."
        variant="teal"
      />

      <Footer />
    </div>
  );
}
