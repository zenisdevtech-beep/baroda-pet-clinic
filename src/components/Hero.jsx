import React, { useState, useEffect } from 'react';
import { 
  Phone, Calendar, MapPin, Star, ShieldCheck, Heart, 
  Clock, ArrowRight, CheckCircle2, Pill, Stethoscope, ChevronRight 
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import { getClinicCurrentStatus } from '../utils/statusHelper';

export default function Hero({ onOpenBooking, onOpenRefill, onSelectSymptomTriage }) {
  const [clinicStatus, setClinicStatus] = useState(getClinicCurrentStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setClinicStatus(getClinicCurrentStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-slate-50 to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-emerald-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand, Value Proposition & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <a 
                href="#reviews"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-emerald-100 text-xs sm:text-sm font-semibold text-slate-800 hover:border-emerald-300 transition-all group"
              >
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="ml-1 font-bold text-slate-900">{clinicInfo.rating}</span>
                </div>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600 group-hover:text-emerald-800">
                  <strong className="text-slate-900">{clinicInfo.reviewCount}+</strong> Google Reviews
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200 text-xs font-bold text-emerald-900">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span className="font-gujarati">{clinicInfo.gujaratiName}</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Compassionate, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700">Science-Driven</span> Veterinary Care
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                Vadodara’s trusted animal hospital for accurate clinical diagnosis, gentle pet handling, sterile surgery, and complex hormonal resolutions. Fully equipped with an on-site pet pharmacy.
              </p>
            </div>

            {/* Location & Accessibility callout */}
            <div className="p-3.5 rounded-xl bg-white/90 border border-emerald-100 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-3 text-left">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-emerald-700" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-bold text-slate-900">
                  Prime Ground Floor Location in Akota
                </p>
                <p className="text-slate-600">
                  B/GF 5-6, Pratham Plaza (opp. Hotel Taj Vivanta), Munjmahuda · 
                  <span className="text-emerald-800 font-medium"> Zero steps/lift hassle for sick or heavy dogs.</span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 rounded-xl shadow-lg shadow-emerald-900/15 hover:shadow-xl hover:shadow-emerald-900/20 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-emerald-200" />
                <span>Book Priority Appointment</span>
              </button>

              <a
                href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
                className="px-5 py-3.5 text-sm sm:text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-emerald-300 rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group"
              >
                <Phone className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                <span>Call {clinicInfo.phone}</span>
              </a>

              <a
                href="#location"
                className="px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-800 hover:bg-emerald-50/50 rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Timings & Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Key trust bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/70 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Humble & Calm Doctor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Stocked In-House Pharmacy</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Pseudopregnancy Care</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase & Interactive Shift Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Main Visual Image Card with Floating Badges */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80"
                alt="Veterinarian examining gentle golden retriever at Baroda Pet Clinic"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                loading="eager"
              />
              
              {/* Image Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-slate-900 shadow-md flex items-center gap-1.5 border border-white/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Opp. Hotel Taj Vivanta</span>
                </div>
                
                <span className="px-2.5 py-1 rounded-full bg-emerald-900/80 backdrop-blur-md text-[11px] font-semibold text-emerald-200 border border-emerald-500/30">
                  Akota, Vadodara
                </span>
              </div>

              {/* Bottom Image Card Content */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                      Veterinary Excellence
                    </p>
                    <p className="text-base sm:text-lg font-bold leading-tight">
                      Accurate Differential Diagnosis & Compassionate Care
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Specialized treatment for canines & felines with patient handling
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Shift & Timings Live Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-card border border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs sm:text-sm font-bold text-slate-900">Today's Clinic Timings</span>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  clinicStatus.isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {clinicStatus.isOpen ? '● Clinic Open Now' : '● Reopening at 6:00 PM'}
                </span>
              </div>

              {/* Split Shift Schedule Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-[11px] font-medium text-slate-500">Morning Session</p>
                  <p className="font-bold text-slate-900 text-sm mt-0.5">10:00 AM – 1:00 PM</p>
                  <p className="text-[10px] text-emerald-700 font-semibold mt-1">OPD & Surgeries</p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-[11px] font-medium text-slate-500">Evening Session</p>
                  <p className="font-bold text-slate-900 text-sm mt-0.5">6:00 PM – 9:30 PM</p>
                  <p className="text-[10px] text-emerald-700 font-semibold mt-1">OPD & Pharmacy</p>
                </div>
              </div>

              {/* Live Status Note */}
              <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-emerald-900">
                  <Pill className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span className="font-medium text-[11px] sm:text-xs">
                    Need emergency advice or prescription food?
                  </span>
                </div>
                <button
                  onClick={onOpenRefill}
                  className="font-bold text-emerald-800 hover:text-emerald-950 underline text-[11px] shrink-0 ml-2"
                >
                  Quick Check
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* 4 Key Pillars Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 sm:mt-16 pt-8 border-t border-slate-200/70">
          {clinicInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all text-center lg:text-left"
            >
              <p className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-bold text-emerald-800 mt-1">
                {stat.label}
              </p>
              <p className="text-xs text-slate-500 mt-0.5 hidden sm:block">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
