/**
 * Wasatch Climate Co. — Location Detail Page (dynamic)
 * Design: Precision Teal — local SEO page for each service area city
 */
import { useParams } from "wouter";
import { Phone, MapPin, CheckCircle, Star } from "lucide-react";
import { Link } from "wouter";
import Header from "./Header";
import Footer from "./Footer";
import CTASection from "./CTASection";

const LOCATION_DATA: Record<string, {
  name: string;
  state: string;
  zip: string;
  heading: string;
  intro: string;
  body: string;
  services: string[];
  review: { name: string; text: string };
}> = {
  "american-fork": {
    name: "American Fork",
    state: "UT",
    zip: "84003",
    heading: "HVAC Services in American Fork, UT",
    intro: "Wasatch Climate Co. is based right here in American Fork, UT. When you call us for HVAC service, you're calling your neighbors — and we respond faster than any other contractor in the area.",
    body: "American Fork homeowners trust Wasatch Climate Co. for all their heating and cooling needs. From emergency furnace repairs during January cold snaps to AC installations before the summer heat arrives, we're the local HVAC company that shows up on time, fixes it right, and charges a fair price. Our office is located at 1551 S 400 E, American Fork, UT 84003 — just minutes from most neighborhoods we serve.",
    services: ["AC Repair & Installation", "Furnace Repair & Heating", "HVAC Maintenance", "Indoor Air Quality", "Heat Pumps", "Ductless Mini-Splits"],
    review: {
      name: "Sarah M., American Fork",
      text: "Best HVAC company in American Fork. They were at my door within 90 minutes of my call and fixed my AC the same day. Honest pricing and professional service.",
    },
  },
  "lehi": {
    name: "Lehi",
    state: "UT",
    zip: "84043",
    heading: "HVAC Services in Lehi, UT",
    intro: "Lehi's rapid growth means more homes that need reliable HVAC service. Wasatch Climate Co. serves all of Lehi's neighborhoods — from Thanksgiving Point to Traverse Mountain — with fast, professional heating and cooling solutions.",
    body: "Whether you're in a new construction home in Lehi or an established neighborhood near Main Street, our certified technicians provide the same high-quality service. We understand Lehi's unique climate challenges and the specific HVAC needs of Utah County's fastest-growing city.",
    services: ["AC Repair & Installation", "Furnace Repair & Heating", "HVAC Maintenance", "Indoor Air Quality", "Heat Pumps", "Ductless Mini-Splits"],
    review: {
      name: "David K., Lehi",
      text: "Called at midnight when my furnace died. Wasatch Climate Co. answered immediately and had a tech at my Lehi home by 1am. Incredible service.",
    },
  },
  "orem": {
    name: "Orem",
    state: "UT",
    zip: "84057",
    heading: "HVAC Services in Orem, UT",
    intro: "Wasatch Climate Co. provides expert HVAC services throughout Orem, UT. From the neighborhoods near UVU to the foothills above University Parkway, our certified technicians deliver fast, reliable heating and cooling service.",
    body: "Orem homeowners rely on Wasatch Climate Co. for everything from emergency AC repairs during summer heat waves to complete furnace replacements before winter. We're familiar with Orem's diverse housing stock — from older homes near the city center to newer developments in the north.",
    services: ["AC Repair & Installation", "Furnace Repair & Heating", "HVAC Maintenance", "Indoor Air Quality", "Heat Pumps", "Ductless Mini-Splits"],
    review: {
      name: "Mike R., Orem",
      text: "Got a full AC system replacement in my Orem home. The team was professional, clean, and finished ahead of schedule. Highly recommend.",
    },
  },
  "provo": {
    name: "Provo",
    state: "UT",
    zip: "84601",
    heading: "HVAC Services in Provo, UT",
    intro: "Wasatch Climate Co. serves homeowners and property managers throughout Provo, UT. As Utah County's largest city, Provo has diverse HVAC needs — and our certified team is equipped to handle all of them.",
    body: "From historic homes near BYU to modern developments in south Provo, we provide expert heating and cooling service to every neighborhood. Our Provo customers appreciate our fast response times, honest pricing, and the fact that we're a local Utah County company — not a national chain.",
    services: ["AC Repair & Installation", "Furnace Repair & Heating", "HVAC Maintenance", "Indoor Air Quality", "Heat Pumps", "Ductless Mini-Splits"],
    review: {
      name: "Tom B., Provo",
      text: "Quick response, fair pricing, and the tech was incredibly knowledgeable. Diagnosed the problem in minutes. Highly recommend to everyone in Provo.",
    },
  },
  "pleasant-grove": {
    name: "Pleasant Grove",
    state: "UT",
    zip: "84062",
    heading: "HVAC Services in Pleasant Grove, UT",
    intro: "Wasatch Climate Co. provides fast, reliable HVAC service to Pleasant Grove homeowners. Located just minutes away in American Fork, we offer some of the fastest response times in the area.",
    body: "Pleasant Grove families trust us for everything from seasonal tune-ups to emergency repairs. We know the area well and take pride in serving our Pleasant Grove neighbors with the same honesty and professionalism we'd want for our own families.",
    services: ["AC Repair & Installation", "Furnace Repair & Heating", "HVAC Maintenance", "Indoor Air Quality", "Heat Pumps", "Ductless Mini-Splits"],
    review: {
      name: "Jennifer T., Pleasant Grove",
      text: "I've used three different HVAC companies. Wasatch Climate Co. is by far the best. Honest, on time, and they explained everything clearly.",
    },
  },
  "eagle-mountain": {
    name: "Eagle Mountain",
    state: "UT",
    zip: "84005",
    heading: "HVAC Services in Eagle Mountain, UT",
    intro: "Eagle Mountain's growing communities deserve reliable HVAC service. Wasatch Climate Co. serves all of Eagle Mountain — from Ranches neighborhoods to the newer developments near Pony Express Parkway.",
    body: "Eagle Mountain's location and climate create unique HVAC demands. Our certified technicians understand the specific heating and cooling needs of this community and provide fast, professional service to keep your family comfortable year-round.",
    services: ["AC Repair & Installation", "Furnace Repair & Heating", "HVAC Maintenance", "Indoor Air Quality", "Heat Pumps", "Ductless Mini-Splits"],
    review: {
      name: "Lisa H., Eagle Mountain",
      text: "Annual maintenance plan is worth every penny. They caught a cracked heat exchanger before it became dangerous. Thank you Wasatch Climate Co.!",
    },
  },
};

const DEFAULT_LOCATION = {
  name: "Utah County",
  state: "UT",
  zip: "",
  heading: "HVAC Services in Utah County, UT",
  intro: "Wasatch Climate Co. provides expert HVAC services throughout Utah County. Based in American Fork, we serve all communities with fast, professional heating and cooling solutions.",
  body: "Our certified technicians are familiar with every corner of Utah County. Whether you're in a city we've listed or a smaller community nearby, call us at (385) 200-2308 and we'll confirm service to your area.",
  services: ["AC Repair & Installation", "Furnace Repair & Heating", "HVAC Maintenance", "Indoor Air Quality", "Heat Pumps", "Ductless Mini-Splits"],
  review: {
    name: "Utah County Customer",
    text: "Excellent service from a truly local HVAC company. Fast response, honest pricing, and professional technicians.",
  },
};

export default function LocationDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const location = LOCATION_DATA[slug] || DEFAULT_LOCATION;

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      <Header />

      {/* Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `url('/images/about_team.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/60" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <Link href="/service-areas" className="text-teal-300 text-sm font-semibold mb-4 inline-flex items-center gap-1 hover:text-white transition-colors">
              ← All Service Areas
            </Link>
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={18} className="text-[#E8820C]" />
              <span className="text-[#E8820C] font-semibold">{location.name}, {location.state}</span>
            </div>
            <h1
              className="text-4xl md:text-6xl font-black text-white uppercase mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {location.heading}
            </h1>
            <p className="text-gray-200 text-lg mb-6">{location.intro}</p>
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
            <div className="lg:col-span-2">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{location.body}</p>

              <h2
                className="text-2xl font-black text-[#1A2332] mb-5 uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Services Available in {location.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {location.services.map((s) => (
                  <Link
                    key={s}
                    href={`/services/${s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                    className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:border-[#0B6B6B] hover:bg-[#0B6B6B]/5 transition-all group"
                  >
                    <CheckCircle size={18} className="text-[#0B6B6B] flex-shrink-0" />
                    <span className="text-gray-700 group-hover:text-[#0B6B6B] font-medium text-sm">{s}</span>
                  </Link>
                ))}
              </div>

              {/* Local review */}
              <div className="bg-[#F8F6F2] rounded-xl p-6" style={{ borderLeft: "4px solid #0B6B6B" }}>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#E8820C] text-[#E8820C]" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-3">"{location.review.text}"</p>
                <p className="text-gray-500 text-sm font-semibold">— {location.review.name}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#0B6B6B] rounded-xl p-6 text-white text-center">
                <h3 className="text-xl font-black mb-2 uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  HVAC Service in {location.name}
                </h3>
                <p className="text-teal-100 text-sm mb-4">Same-day service available</p>
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

              <div className="bg-[#F8F6F2] rounded-xl p-6">
                <h3 className="font-bold text-[#1A2332] mb-3" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
                  Our Location
                </h3>
                <div className="flex items-start gap-2 text-gray-600 text-sm">
                  <MapPin size={16} className="text-[#0B6B6B] mt-0.5 flex-shrink-0" />
                  <div>
                    <p>1551 S 400 E</p>
                    <p>American Fork, UT 84003</p>
                    <p className="text-[#0B6B6B] font-semibold mt-1">Serving all of Utah County</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading={`HVAC Service in ${location.name} — Call Today`}
        subheading="Same-day service available. We answer every call, 24/7."
        variant="teal"
      />

      <Footer />
    </div>
  );
}

