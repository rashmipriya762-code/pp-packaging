"use client";

import { useId, useState } from "react";
import { ArrowRight, MapPin, Phone, Mail, Globe, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { submitEnquiry } from "@/lib/submit-enquiry";

const SERVICES = [
  { value: "Custom Packaging", label: "Custom Packaging" },
  { value: "Bulk Order", label: "Bulk Order" },
  { value: "Sample Request", label: "Sample Request" },
  { value: "Other", label: "Other" },
];

// Contact details come from siteConfig so the footer and this page can never
// disagree again. Update them in one place: src/lib/content.ts.
const contactInfo = [
  {
    icon: <MapPin size={20} className="text-gold-600" aria-hidden="true" />,
    title: "Our Office",
    details: [siteConfig.address],
  },
  {
    icon: <Phone size={20} className="text-gold-600" aria-hidden="true" />,
    title: "Call Us",
    details: [siteConfig.phone],
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: <Mail size={20} className="text-gold-600" aria-hidden="true" />,
    title: "Email Us",
    details: [siteConfig.email],
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: <Globe size={20} className="text-gold-600" aria-hidden="true" />,
    title: "Website",
    details: [siteConfig.url.replace(/^https?:\/\//, "")],
    href: siteConfig.url,
  },
  {
    icon: <MessageSquare size={20} className="text-gold-600" aria-hidden="true" />,
    title: "WhatsApp",
    details: ["Chat with our team", "Mon - Sat | 9:00 AM - 6:00 PM"],
    href: `https://wa.me/${siteConfig.whatsapp}`,
    external: true,
  },
];

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  company: "",
  product: "",
  message: "",
  website: "",
};

export function ClientsContactForm() {
  const ids = useId();
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Previously this form had no onSubmit and no action at all, so pressing
  // "Send Message" navigated away and dropped everything the visitor typed.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const result = await submitEnquiry({ kind: "contact", ...form });
    setStatus(result.ok ? "done" : "error");
    setMessage(result.message);
    if (result.ok) setForm(EMPTY);
  };

  const fieldClass =
    "w-full bg-white border border-teal-900/10 rounded-lg px-4 py-3.5 font-body text-sm text-teal-900 focus:outline-none focus:border-gold-600 transition-colors";
  const labelClass = "font-body text-sm font-bold text-teal-900";

  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column: Form */}
          <div className="w-full lg:w-[55%]">
            <h2 className="font-display text-3xl text-teal-900 mb-2">Send Us a Message</h2>
            <div className="divider-gold mb-6" />
            <p className="font-body text-teal-900/70 text-sm mb-10">
              Fill out the form below and our team will get back to you shortly.
            </p>

            {status === "done" ? (
              <div
                role="status"
                className="bg-white border border-cream-dark rounded-2xl p-10 text-center"
              >
                <div className="w-14 h-14 bg-gold-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-gold-600" aria-hidden="true">
                    ✓
                  </span>
                </div>
                <h3 className="font-display text-2xl text-teal-900 mb-2">Message Sent</h3>
                <p className="font-body text-sm text-teal-900/70">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor={`${ids}-website`}>Website</label>
                  <input
                    id={`${ids}-website`}
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor={`${ids}-name`} className={labelClass}>
                      Full Name *
                    </label>
                    <input
                      id={`${ids}-name`}
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={fieldClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor={`${ids}-email`} className={labelClass}>
                      Email Address *
                    </label>
                    <input
                      id={`${ids}-email`}
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor={`${ids}-phone`} className={labelClass}>
                      Phone Number
                    </label>
                    <input
                      id={`${ids}-phone`}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={fieldClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor={`${ids}-company`} className={labelClass}>
                      Company Name
                    </label>
                    <input
                      id={`${ids}-company`}
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor={`${ids}-product`} className={labelClass}>
                    I&apos;m Interested In *
                  </label>
                  <select
                    id={`${ids}-product`}
                    name="product"
                    required
                    value={form.product}
                    onChange={handleChange}
                    className={`${fieldClass} appearance-none`}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor={`${ids}-message`} className={labelClass}>
                    Your Message *
                  </label>
                  <textarea
                    id={`${ids}-message`}
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p role="alert" className="font-body text-sm text-[#B3261E]">
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-pill btn-teal px-8 py-3.5 mt-2"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                  <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                </button>

                <div className="flex items-center gap-2 mt-4 text-teal-900/60">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <p className="font-body text-xs">
                    We respect your privacy. Your information is safe with us.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Info */}
          <div className="w-full lg:w-[45%]">
            <h2 className="font-display text-3xl text-teal-900 mb-2">Contact Information</h2>
            <div className="divider-gold mb-10" />

            <div className="flex flex-col gap-4">
              {contactInfo.map((info) => {
                const inner = (
                  <>
                    <div className="w-12 h-12 rounded-xl bg-teal-900 flex items-center justify-center shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="font-body font-bold text-teal-900 text-base mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail) => (
                        <p
                          key={detail}
                          className="font-body text-sm text-teal-900/70 leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                    {info.href && (
                      <ArrowRight
                        size={18}
                        aria-hidden="true"
                        className="self-center text-gold-600 group-hover:translate-x-1 transition-transform"
                      />
                    )}
                  </>
                );

                const className = `flex items-start gap-5 p-5 rounded-2xl border ${
                  info.href
                    ? "border-gold-600/30 bg-white/50 hover:bg-white transition-colors group"
                    : "border-teal-900/10 bg-white"
                }`;

                return info.href ? (
                  <a
                    key={info.title}
                    href={info.href}
                    className={className}
                    {...(info.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={info.title} className={className}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
