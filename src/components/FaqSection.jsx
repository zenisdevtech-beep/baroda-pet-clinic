import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Phone, MessageSquare } from 'lucide-react';
import { faqData, clinicInfo } from '../data/clinicData';

export default function FaqSection({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pet Parent Questions Answered</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Everything you need to know about our clinic timings, location opposite Taj Vivanta, and medical appointments.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`w-full p-5 text-left font-bold text-sm sm:text-base flex items-center justify-between gap-4 transition-colors ${
                    isOpen ? 'bg-emerald-50/80 text-emerald-950' : 'bg-white text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex-1">{faq.q}</span>
                  <div className={`p-1 rounded-lg transition-transform ${isOpen ? 'rotate-180 text-emerald-700' : 'text-slate-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 bg-emerald-50/80 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-emerald-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Have a specific question about your pet's condition?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Call our friendly clinic front desk at {clinicInfo.phone} or chat with us on WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call Us</span>
            </a>

            <a
              href={`https://wa.me/${clinicInfo.whatsappNumber}?text=Hello%20Baroda%20Pet%20Clinic,%20I%20have%20a%20question`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white shadow-sm transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
