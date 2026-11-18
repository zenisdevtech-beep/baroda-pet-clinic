import React, { useState, useEffect } from 'react';
import { 
  Phone, Clock, MapPin, Calendar, Menu, X, ShieldCheck, 
  Sparkles, ExternalLink, MessageCircle
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import { getClinicCurrentStatus } from '../utils/statusHelper';

export default function Header({ onOpenBooking, onOpenRefill }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [clinicStatus, setClinicStatus] = useState(getClinicCurrentStatus());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Update status every 60 seconds
    const interval = setInterval(() => {
      setClinicStatus(getClinicCurrentStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: 'Services & Care', href: '#services' },
    { name: 'In-House Pharmacy', href: '#pharmacy' },
    { name: 'Symptom Triage', href: '#triage' },
    { name: 'Why Us', href: '#doctor' },
    { name: 'Reviews (4.6★)', href: '#reviews' },
    { name: 'Timings & Map', href: '#location' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-forest-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-emerald-950/60 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Dynamic Live Clinic Shift Status */}
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <span className={`w-2 h-2 rounded-full ${clinicStatus.isOpen ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
              <span className="w-2 h-2 rounded-full absolute bg-emerald-400"></span>
              {clinicStatus.shift}
            </span>
            <span className="text-slate-300 text-xs hidden sm:inline">|</span>
            <span className="text-emerald-100/90 text-xs truncate max-w-xs sm:max-w-none">
              {clinicStatus.message}
            </span>
          </div>

          {/* Right: Quick Contacts & Gujarati Tagline */}
          <div className="flex items-center gap-4 text-xs">
            <div className="hidden lg:flex items-center gap-1.5 text-emerald-200/90">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Opp. Hotel Taj Vivanta, Akota, Vadodara</span>
            </div>
            
            <a 
              href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-white hover:text-amber-300 font-semibold transition-colors"
              title="Call Baroda Pet Clinic directly"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
              <span>{clinicInfo.phone}</span>
            </a>

            <a 
              href={`https://wa.me/${clinicInfo.whatsappNumber}?text=Hello%20Baroda%20Pet%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-200 px-2.5 py-0.5 rounded-full border border-emerald-500/30 transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300 border border-emerald-700/50">
              {/* Pet Paw with Medical Cross overlay */}
              <svg className="w-7 h-7 text-emerald-400 group-hover:text-amber-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-4H7v-2h4V7h2v4h4v2h-4v4z"/>
              </svg>
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-none group-hover:text-emerald-800 transition-colors">
                  Baroda Pet Clinic
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                  4.6 ★
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5 text-xs text-slate-500 font-medium">
                <span className="font-gujarati text-emerald-700 font-semibold tracking-wide">
                  {clinicInfo.gujaratiName}
                </span>
                <span>•</span>
                <span className="hidden xs:inline">Animal Hospital & Pharmacy</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenRefill}
              className="px-3.5 py-2 text-xs xl:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-all"
            >
              Order Pharmacy / Diets
            </button>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4 text-emerald-200" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-emerald-700 rounded-lg shadow-sm"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-emerald-900">Current Clinic Shift</p>
                <p className="text-xs text-emerald-700">{clinicStatus.message}</p>
              </div>
              <a 
                href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
                className="px-3 py-1 bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm"
              >
                Call
              </a>
            </div>

            <div className="grid grid-cols-1 divide-y divide-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-sm font-semibold text-slate-800 hover:text-emerald-700 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-slate-400 text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Priority Appointment</span>
              </button>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRefill();
                }}
                className="w-full py-2.5 text-center font-semibold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-100 rounded-xl"
              >
                Prescription Refill / Pet Food Check
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                <span>Opp. Hotel Taj Vivanta, Akota</span>
                <span className="font-semibold text-emerald-800">Floor 0 · Pratham Plaza</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
