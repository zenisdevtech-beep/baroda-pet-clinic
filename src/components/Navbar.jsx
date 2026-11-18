import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Phone, Clock, MapPin, Calendar, Menu, X, ShieldCheck,
  Sparkles, MessageCircle, ChevronRight, Pill, Heart, Star
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import { getClinicCurrentStatus } from '../utils/statusHelper';

export default function Navbar({ onOpenBooking, onOpenRefill }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [clinicStatus, setClinicStatus] = useState(getClinicCurrentStatus());
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      setClinicStatus(getClinicCurrentStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'In-House Pharmacy', path: '/pharmacy' },
    { name: 'About Doctor', path: '/about' },
    { name: 'Reviews (789+)', path: '/reviews' },
    { name: 'Timings & Map', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">

      {/* Top Utility Announcement Bar */}
      <div className="bg-forest-950 text-slate-200 text-xs py-2 px-4 border-b border-emerald-900/60 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">

          {/* Left: Dynamic Live Clinic Shift Status */}
          <div className="flex items-center gap-2.5 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <span className={`w-2 h-2 rounded-full ${clinicStatus.isOpen ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
              <span className={`w-2 h-2 rounded-full absolute ${clinicStatus.isOpen ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
              {clinicStatus.shift}
            </span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-emerald-100/90 text-xs truncate max-w-xs sm:max-w-none">
              {clinicStatus.message}
            </span>
          </div>

          {/* Right: Direct Contacts & Landmark */}
          <div className="flex items-center gap-4 text-xs">
            <div className="hidden lg:flex items-center gap-1 text-emerald-200/80">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Opp. Hotel Taj Vivanta, Akota, Vadodara</span>
            </div>

            <a
              href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-white hover:text-amber-300 font-bold transition-colors"
              title="Call Baroda Pet Clinic directly"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
              <span>{clinicInfo.phone}</span>
            </a>

            <a
              href={`https://wa.me/${clinicInfo.whatsappNumber}?text=Hello%20Baroda%20Pet%20Clinic`}
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
      <nav className={`w-full transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-md py-2.5 border-b border-slate-200/90'
          : 'bg-white/90 backdrop-blur-md py-3.5 border-b border-slate-200/70 shadow-xs'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">

          {/* Logo & Brand Identity (Clean, unified layout with no awkward gaps) */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none shrink-0">
            {/* Custom Emblem */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-800 to-forest-950 flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300 border border-emerald-700/50">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400 group-hover:text-amber-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-4H7v-2h4V7h2v4h4v2h-4v4z" />
              </svg>
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
              </span>
            </div>

            {/* Brand Text Block */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-base sm:text-lg text-slate-900 tracking-tight leading-none group-hover:text-emerald-800 transition-colors whitespace-nowrap">
                  Baroda Pet Clinic
                </span>
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-amber-100 text-amber-900 border border-amber-200/80">
                  <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                  <span>4.6</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-500 font-medium">
                <span className="font-gujarati text-emerald-800 font-bold tracking-wide">
                  {clinicInfo.gujaratiName}
                </span>
                <span>•</span>
                <span className="hidden xs:inline text-slate-600">Animal Hospital</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `px-3.5 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${isActive
                    ? 'text-emerald-900 bg-emerald-100/70 font-bold shadow-xs'
                    : 'text-slate-700 hover:text-emerald-800 hover:bg-slate-100/70'
                  }`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenRefill}
              className="px-3.5 py-2 text-xs xl:text-sm font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 rounded-xl transition-all flex items-center gap-1.5"
            >
              <Pill className="w-3.5 h-3.5 text-emerald-700" />
              <span>Pharmacy Refill</span>
            </button>

            <Link
              to="/book"
              className="px-4 py-2 text-xs xl:text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-200" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/book"
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-emerald-800 rounded-lg shadow-sm"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-slide-up shadow-2xl">
            {/* Shift banner */}
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-emerald-950">Current Clinic Shift</p>
                <p className="text-[11px] text-emerald-800">{clinicStatus.message}</p>
              </div>
              <a
                href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
                className="px-3 py-1 bg-emerald-800 text-white text-xs font-bold rounded-lg shadow-sm"
              >
                Call
              </a>
            </div>

            <div className="grid grid-cols-1 divide-y divide-slate-100 pt-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => `py-2.5 px-2 text-sm font-semibold flex items-center justify-between rounded-lg ${isActive ? 'text-emerald-900 bg-emerald-50 font-bold' : 'text-slate-700 hover:text-emerald-800'
                    }`}
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                to="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center font-bold text-white bg-emerald-800 rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Priority Appointment</span>
              </Link>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRefill();
                }}
                className="w-full py-2.5 text-center font-semibold text-emerald-900 bg-emerald-100/70 hover:bg-emerald-100 rounded-xl text-xs flex items-center justify-center gap-1.5"
              >
                <Pill className="w-3.5 h-3.5 text-emerald-700" />
                <span>Prescription Refill / Pet Food Check</span>
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                <span>Opp. Hotel Taj Vivanta, Akota</span>
                <span className="font-bold text-emerald-800">Floor 0 · Pratham Plaza</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
