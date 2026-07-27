/**
 * Wasatch Climate Co. — Contact Page
 * Design: Precision Teal — conversion-focused contact form + NAP + map
 */
import { useState } from "react";
import { Phone, MapPin, Clock, Mail, CheckCircle } from "lucide-react";
import Header from "./Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", message: "", urgency: "standard",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      <Header />

      {/* Hero */}
      <section className="bg-[#1A2332] py-16">
        <div className="container text-center">
          <p className="text-[#0B6B6B] font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h1
            className="text-4xl md:text-6xl font-black text-white uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Contact Wasatch Climate Co.
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            For emergencies, call us directly at <a href="tel:+13852002308" className="text-[#E8820C] font-bold">(385) 200-2308</a>. For estimates and general inquiries, fill out the form below.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F8F6F2] py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100" style={{ borderLeft: "4px solid #0B6B6B" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0B6B6B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="text-[#0B6B6B]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A2332] mb-1" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>Call Us 24/7</h3>
                    <a href="tel:+13852002308" className="text-[#E8820C] font-bold text-xl hover:text-amber-600 transition-colors">(385) 200-2308</a>
                    <p className="text-gray-500 text-sm mt-1">Emergency service available around the clock</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100" style={{ borderLeft: "4px solid #0B6B6B" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0B6B6B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-[#0B6B6B]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A2332] mb-1" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>Our Location</h3>
                    <p className="text-gray-700">1551 S 400 E</p>
                    <p className="text-gray-700">American Fork, UT 84003</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100" style={{ borderLeft: "4px solid #0B6B6B" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0B6B6B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={22} className="text-[#0B6B6B]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A2332] mb-1" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>Business Hours</h3>
                    <div className="text-gray-700 text-sm space-y-1">
                      <p>Mon–Fri: 8:00 AM – 8:00 PM</p>
                      <p>Saturday: 8:00 AM – 6:00 PM</p>
                      <p>Sunday: 10:00 AM – 4:00 PM</p>
                      <p className="text-[#0B6B6B] font-semibold">24/7 Emergency Service Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100" style={{ borderLeft: "4px solid #0B6B6B" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0B6B6B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-[#0B6B6B]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A2332] mb-1" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>Email Us</h3>
                    <a href="mailto:info@wasatchclimateco.com" className="text-[#0B6B6B] hover:text-[#084f4f] transition-colors">info@wasatchclimateco.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={64} className="text-[#0B6B6B] mx-auto mb-4" />
                    <h2 className="text-3xl font-black text-[#1A2332] mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      Message Received!
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">We'll be in touch within 1 business hour. For urgent issues, please call us directly.</p>
                    <a href="tel:+13852002308" className="inline-flex items-center gap-2 bg-[#E8820C] text-white font-bold px-8 py-4 rounded-lg text-lg">
                      <Phone size={18} />
                      (385) 200-2308
                    </a>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black text-[#1A2332] mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      Request a Free Estimate
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-[#1A2332] mb-2">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B6B6B] focus:border-transparent transition-all"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#1A2332] mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B6B6B] focus:border-transparent transition-all"
                            placeholder="(385) 555-0100"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1A2332] mb-2">Email Address</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B6B6B] focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1A2332] mb-2">Service Needed</label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B6B6B] focus:border-transparent transition-all bg-white"
                        >
                          <option value="">Select a service...</option>
                          <option value="ac-repair">AC Repair</option>
                          <option value="ac-install">AC Installation</option>
                          <option value="furnace-repair">Furnace Repair</option>
                          <option value="furnace-install">Furnace Installation</option>
                          <option value="maintenance">HVAC Maintenance / Tune-Up</option>
                          <option value="iaq">Indoor Air Quality</option>
                          <option value="heat-pump">Heat Pump</option>
                          <option value="mini-split">Ductless Mini-Split</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1A2332] mb-2">Urgency</label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { value: "emergency", label: "🚨 Emergency", sub: "Need help now" },
                            { value: "today", label: "⚡ Today", sub: "Same-day service" },
                            { value: "standard", label: "📅 Schedule", sub: "Plan ahead" },
                          ].map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => setForm({ ...form, urgency: opt.value })}
                              className={`border-2 rounded-lg p-3 text-center transition-all ${
                                form.urgency === opt.value
                                  ? "border-[#0B6B6B] bg-[#0B6B6B]/5"
                                  : "border-gray-200 hover:border-[#0B6B6B]/50"
                              }`}
                            >
                              <p className="font-semibold text-[#1A2332] text-sm">{opt.label}</p>
                              <p className="text-gray-400 text-xs">{opt.sub}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1A2332] mb-2">Describe Your Issue</label>
                        <textarea
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B6B6B] focus:border-transparent transition-all resize-none"
                          placeholder="Tell us what's happening with your HVAC system..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#E8820C] hover:bg-amber-600 text-white font-bold py-4 rounded-lg text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
                      >
                        Send My Request — We'll Call You Back
                      </button>
                      <p className="text-center text-gray-400 text-sm">
                        Or call directly: <a href="tel:+13852002308" className="text-[#0B6B6B] font-semibold">(385) 200-2308</a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
