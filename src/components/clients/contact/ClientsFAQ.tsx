"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What is your minimum order quantity?",
    answer: "Our minimum order quantity typically starts at 500 units for standard custom packaging. For highly specialized or complex structural designs, the MOQ might be higher. Contact our team to discuss your specific requirements."
  },
  {
    question: "What materials do you use?",
    answer: "We use a wide range of premium materials including FSC-certified paperboards, corrugated kraft, rigid boards, textured specialty papers, organic cotton, and eco-friendly jute. We can also source specific materials upon request."
  },
  {
    question: "How long does it take to get a custom quote?",
    answer: "Once we have all your specifications (dimensions, material, print requirements, and quantity), we typically provide a detailed custom quote within 24 to 48 hours."
  },
  {
    question: "Do you offer samples before bulk order?",
    answer: "Yes, we highly recommend sampling. We can provide unprinted structural mockups or fully printed pre-production samples so you can verify the quality, fit, and finish before proceeding with the full production run."
  },
  {
    question: "Can you help with design and branding?",
    answer: "Absolutely! We have an in-house team of structural designers and graphic artists who can help bring your vision to life, ensuring your artwork translates perfectly to the final printed product."
  },
  {
    question: "What are your payment terms?",
    answer: "Our standard terms are 50% advance to initiate production, with the remaining 50% due before dispatch. For long-term corporate clients, we can discuss customized credit terms."
  }
];

export function ClientsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-cream pb-16 lg:pb-24">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-4">
          <div>
            <span className="text-gold-600 font-bold tracking-widest text-xs uppercase mb-3 block">
              FAQS
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-teal-900">
              Frequently Asked Questions
            </h2>
          </div>
          
          <button className="btn-pill btn-white">
            View All FAQs <ArrowRight size={16} strokeWidth={1.5} className="ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-[#E5DCC9] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-gold-600/30 hover:shadow-sm"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between p-5 lg:p-6">
                  <h4 className={`font-body font-medium text-sm lg:text-base pr-4 transition-colors ${isOpen ? 'text-gold-600' : 'text-teal-900'}`}>
                    {faq.question}
                  </h4>
                  <div className="shrink-0 text-teal-900">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>
                
                {/* Accordion content */}
                <div 
                  className={`px-5 lg:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                  }`}
                >
                  <div className="w-8 h-[1px] bg-gold-600 mb-4"></div>
                  <p className="font-body text-sm text-teal-900/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
