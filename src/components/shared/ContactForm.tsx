"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { productInquiryOptions } from "@/lib/content";

export function ContactForm() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="font-heading text-2xl font-bold text-primary mb-2">Message Sent!</h3>
        <p className="font-body text-neutral-600 text-sm">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-body font-semibold text-neutral-600 mb-1.5">Name *</label>
          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-sm font-body text-neutral-800 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-neutral-400" />
        </div>
        <div>
          <label className="block text-xs font-body font-semibold text-neutral-600 mb-1.5">Company</label>
          <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company name" className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-sm font-body text-neutral-800 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-neutral-400" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-body font-semibold text-neutral-600 mb-1.5">Phone *</label>
          <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-sm font-body text-neutral-800 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-neutral-400" />
        </div>
        <div>
          <label className="block text-xs font-body font-semibold text-neutral-600 mb-1.5">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-sm font-body text-neutral-800 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-neutral-400" />
        </div>
      </div>
      <div className="relative">
        <label className="block text-xs font-body font-semibold text-neutral-600 mb-1.5">Product Interest *</label>
        <select name="product" required value={form.product} onChange={handleChange} className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-sm font-body text-neutral-800 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all appearance-none bg-white">
          <option value="">Select category</option>
          {productInquiryOptions.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown className="absolute right-3 top-9 text-neutral-400 pointer-events-none" size={16} />
      </div>
      <div>
        <label className="block text-xs font-body font-semibold text-neutral-600 mb-1.5">Message / Requirements *</label>
        <textarea name="message" required rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your packaging requirements — quantity, size, material, branding, etc." className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-sm font-body text-neutral-800 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none placeholder:text-neutral-400" />
      </div>
      <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
        {loading ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  );
}
