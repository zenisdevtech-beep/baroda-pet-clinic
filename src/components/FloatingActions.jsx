import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Navigation, ArrowUp } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function FloatingActions({ onOpenBooking }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="hidden sm:flex fixed bottom-6 right-6 z-40 p-3 rounded-full bg-emerald-800/90 hover:bg-emerald-800 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 focus:outline-none items-center justify-center border border-emerald-600/40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Mobile Bottom Sticky Bar (Visible on mobile/tablet) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl flex items-center justify-between gap-1.5">
        
        {/* Call button */}
        <a
          href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
          className="flex-1 py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex flex-col items-center justify-center transition-colors"
        >
          <Phone className="w-4 h-4 text-emerald-700" />
          <span className="text-[10px] font-bold mt-0.5">Call Doctor</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${clinicInfo.whatsappNumber}?text=Hello%20Baroda%20Pet%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 flex flex-col items-center justify-center transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span className="text-[10px] font-bold mt-0.5">WhatsApp</span>
        </a>

        {/* Book */}
        <button
          onClick={onOpenBooking}
          className="flex-1 py-2 px-1 rounded-xl bg-emerald-800 text-white flex flex-col items-center justify-center shadow-md active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4 text-emerald-200" />
          <span className="text-[10px] font-bold mt-0.5">Book Visit</span>
        </button>

        {/* Directions */}
        <a
          href={clinicInfo.address.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex flex-col items-center justify-center transition-colors"
        >
          <Navigation className="w-4 h-4 text-amber-600" />
          <span className="text-[10px] font-bold mt-0.5">Directions</span>
        </a>

      </div>
    </>
  );
}
