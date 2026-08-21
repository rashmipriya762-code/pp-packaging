"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { productInquiryOptions, siteConfig } from "@/lib/content";
import { submitEnquiry } from "@/lib/submit-enquiry";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

const EMPTY = { name: "", phone: "", email: "", product: "", message: "", website: "" };

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function EnquiryModal({ isOpen, onClose, defaultProduct }: EnquiryModalProps) {
  const [form, setForm] = useState({ ...EMPTY, product: defaultProduct ?? "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Adjust state during render rather than inside an effect (React 19 guidance).
  const [prevProduct, setPrevProduct] = useState(defaultProduct);
  if (defaultProduct !== prevProduct) {
    setPrevProduct(defaultProduct);
    setForm((f) => ({ ...f, product: defaultProduct ?? "" }));
  }

  const dialogRef = useRef<HTMLDivElement>(null);
  const restoreFocusTo = useRef<HTMLElement | null>(null);
  const ids = useId();
  const titleId = `${ids}-title`;

  const close = useCallback(() => {
    onClose();
    // Reset so the next open starts clean.
    setSubmitted(false);
    setError(null);
    setForm({ ...EMPTY, product: defaultProduct ?? "" });
  }, [onClose, defaultProduct]);

  // Lock scroll, trap focus, close on Escape, restore focus on unmount.
  useEffect(() => {
    if (!isOpen) return;

    restoreFocusTo.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const raf = requestAnimationFrame(() => focusables()[0]?.focus());
    document.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      restoreFocusTo.current?.focus?.();
    };
  }, [isOpen, close]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await submitEnquiry({ kind: "enquiry", ...form });

    setLoading(false);
    if (result.ok) setSubmitted(true);
    else setError(result.message);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi, I'm interested in ${form.product || "your packaging solutions"}. My name is ${form.name || "[Name]"} and my number is ${form.phone || "[Phone]"}. ${form.message || ""}`
    );
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${msg}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const fieldClass =
    "w-full border border-cream-dark rounded-lg px-4 py-2.5 text-sm font-body text-teal-900 focus:outline-none focus:border-gold-600 focus:ring-2 focus:ring-gold-600/20 transition-all placeholder:text-teal-900/40";
  const labelClass =
    "block text-xs font-body font-semibold text-teal-900/70 mb-1.5 tracking-wide";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
          />

          {/* Modal */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-white rounded-2xl overflow-y-auto max-h-[90vh] shadow-card-hover"
          >
            {/* Header */}
            <div className="bg-teal-900 px-6 sm:px-8 py-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <button
                type="button"
                onClick={close}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-1"
                aria-label="Close enquiry form"
              >
                <X size={20} />
              </button>
              <p className="eyebrow text-gold-400 mb-2 relative">Get in Touch</p>
              <h2 id={titleId} className="font-display text-2xl text-white relative">
                Request a Free Quote
              </h2>
              <p className="text-white/70 font-body text-sm mt-1 relative">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-gold-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-gold-600" aria-hidden="true">
                      ✓
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-teal-900 mb-2">Thank You</h3>
                  <p className="font-body text-text-muted text-sm">
                    We&apos;ve received your enquiry. Our team will contact you within 24 hours.
                  </p>
                  <button type="button" onClick={close} className="btn-pill btn-teal mt-6">
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot — hidden from people, irresistible to bots. */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor={`${ids}-website`}>Website</label>
                    <input
                      id={`${ids}-website`}
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={`${ids}-name`} className={labelClass}>
                        Your Name *
                      </label>
                      <input
                        id={`${ids}-name`}
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rahul Sharma"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor={`${ids}-phone`} className={labelClass}>
                        Phone *
                      </label>
                      <input
                        id={`${ids}-phone`}
                        type="tel"
                        name="phone"
                        required
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={`${ids}-email`} className={labelClass}>
                      Email Address
                    </label>
                    <input
                      id={`${ids}-email`}
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@company.com"
                      className={fieldClass}
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor={`${ids}-product`} className={labelClass}>
                      Product Interest *
                    </label>
                    <select
                      id={`${ids}-product`}
                      name="product"
                      required
                      value={form.product}
                      onChange={handleChange}
                      className={`${fieldClass} appearance-none bg-white`}
                    >
                      <option value="">Select a product category</option>
                      {productInquiryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-9 text-teal-900/40 pointer-events-none"
                      size={16}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <label htmlFor={`${ids}-message`} className={labelClass}>
                      Message / Requirements
                    </label>
                    <textarea
                      id={`${ids}-message`}
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your packaging requirements — quantity, size, material, etc."
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <p role="alert" className="font-body text-sm text-[#B3261E]">
                      {error}
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-pill btn-teal flex-1 justify-center"
                    >
                      {loading ? "Sending…" : "Send Enquiry"}
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="btn-pill justify-center gap-2 px-4 bg-[#25D366] text-white hover:bg-[#1DAF5A] transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
