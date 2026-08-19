import { ArrowRight, MapPin, Phone, Mail, Globe, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin size={20} className="text-gold-600" />,
    title: "Our Office",
    details: ["123 Packaging Street,", "Mumbai, Maharashtra 400001, India"],
  },
  {
    icon: <Phone size={20} className="text-gold-600" />,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 22 1234 5678"],
  },
  {
    icon: <Mail size={20} className="text-gold-600" />,
    title: "Email Us",
    details: ["hello@pppackaging.com", "info@pppackaging.com"],
  },
  {
    icon: <Globe size={20} className="text-gold-600" />,
    title: "Website",
    details: ["www.pppackaging.com"],
  },
  {
    icon: <MessageSquare size={20} className="text-gold-600" />,
    title: "Live Chat",
    details: ["Chat with our support team", "Mon - Sat | 9:00 AM - 6:00 PM"],
    isAction: true,
  },
];

export function ClientsContactForm() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-[55%]">
            <h2 className="font-display text-3xl text-teal-900 mb-2">Send Us a Message</h2>
            <div className="w-12 h-0.5 bg-gold-600 mb-6"></div>
            <p className="font-body text-teal-900/70 text-sm mb-10">
              Fill out the form below and our team will get back to you shortly.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-body text-sm font-bold text-teal-900">Full Name *</label>
                  <input type="text" placeholder="Enter your name" className="w-full bg-white border border-teal-900/10 rounded-lg px-4 py-3.5 font-body text-sm text-teal-900 focus:outline-none focus:border-gold-600 transition-colors" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-body text-sm font-bold text-teal-900">Email Address *</label>
                  <input type="email" placeholder="Enter your email" className="w-full bg-white border border-teal-900/10 rounded-lg px-4 py-3.5 font-body text-sm text-teal-900 focus:outline-none focus:border-gold-600 transition-colors" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-body text-sm font-bold text-teal-900">Phone Number</label>
                  <input type="tel" placeholder="Enter your phone number" className="w-full bg-white border border-teal-900/10 rounded-lg px-4 py-3.5 font-body text-sm text-teal-900 focus:outline-none focus:border-gold-600 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-body text-sm font-bold text-teal-900">Company Name</label>
                  <input type="text" placeholder="Enter your company name" className="w-full bg-white border border-teal-900/10 rounded-lg px-4 py-3.5 font-body text-sm text-teal-900 focus:outline-none focus:border-gold-600 transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-body text-sm font-bold text-teal-900">I'm Interested In *</label>
                <select className="w-full bg-white border border-teal-900/10 rounded-lg px-4 py-3.5 font-body text-sm text-teal-900/70 focus:outline-none focus:border-gold-600 transition-colors appearance-none" required>
                  <option value="" disabled selected>Select a service</option>
                  <option value="custom-packaging">Custom Packaging</option>
                  <option value="bulk-order">Bulk Order</option>
                  <option value="sample-request">Sample Request</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-body text-sm font-bold text-teal-900">Your Message *</label>
                <textarea rows={5} placeholder="Tell us about your requirements..." className="w-full bg-white border border-teal-900/10 rounded-lg px-4 py-3.5 font-body text-sm text-teal-900 focus:outline-none focus:border-gold-600 transition-colors resize-none" required></textarea>
              </div>

              <button type="submit" className="btn-pill btn-teal px-8 py-3.5 mt-2">
                Send Message <ArrowRight size={16} strokeWidth={2} className="ml-2" />
              </button>

              <div className="flex items-center gap-2 mt-4 text-teal-900/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <p className="font-body text-xs">We respect your privacy. Your information is safe with us.</p>
              </div>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="w-full lg:w-[45%]">
            <h2 className="font-display text-3xl text-teal-900 mb-2">Contact Information</h2>
            <div className="w-12 h-0.5 bg-gold-600 mb-10"></div>

            <div className="flex flex-col gap-4">
              {contactInfo.map((info, idx) => (
                <div key={idx} className={`flex items-start gap-5 p-5 rounded-2xl border ${info.isAction ? 'border-gold-600/30 bg-white/50 cursor-pointer hover:bg-white transition-colors group' : 'border-teal-900/10 bg-white'}`}>
                  <div className="w-12 h-12 rounded-xl bg-teal-900 flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-body font-bold text-teal-900 text-base mb-1">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="font-body text-sm text-teal-900/70 leading-relaxed">{detail}</p>
                    ))}
                  </div>
                  {info.isAction && (
                    <div className="flex items-center justify-center h-full self-center">
                      <ArrowRight size={18} className="text-gold-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
