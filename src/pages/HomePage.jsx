import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, Calendar, Phone, MapPin, ShieldCheck, Clock, 
  ArrowRight, CheckCircle2, Pill, Stethoscope, Sparkles, 
  Heart, ChevronRight, Activity, Scissors, AlertTriangle 
} from 'lucide-react';
import { clinicInfo, servicesData, pharmacyProducts, reviewsData } from '../data/clinicData';
import { getClinicCurrentStatus } from '../utils/statusHelper';
import SymptomChecker from '../components/SymptomChecker';
import EmergencyGuide from '../components/EmergencyGuide';
import ScrollReveal from '../components/ScrollReveal';

export default function HomePage({ onOpenBooking, onOpenRefill }) {
  const clinicStatus = getClinicCurrentStatus();

  return (
    <div className="pt-28 sm:pt-32 pb-16 page-enter">
      
      {/* 1. HERO SECTION (Redesigned with On-Scroll Animations) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 via-slate-50 to-white pt-6 pb-16 lg:pt-8 lg:pb-24 border-b border-slate-100">
        
        {/* Decorative Blurred Gradient Spheres */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Value Props & Actions (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <ScrollReveal animation="fade-down" delay={100}>
                {/* Badges Row */}
                <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                  <Link 
                    to="/reviews"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-emerald-100 text-xs sm:text-sm font-bold text-slate-800 hover:border-emerald-300 transition-all group"
                  >
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="ml-1 font-black text-slate-900">{clinicInfo.rating}</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-600 group-hover:text-emerald-800">
                      <strong className="text-slate-900">{clinicInfo.reviewCount}+</strong> Google Reviews
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-xs font-bold text-emerald-950">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    <span className="font-gujarati">{clinicInfo.gujaratiName}</span>
                  </span>
                </div>
              </ScrollReveal>

              {/* Main Headline */}
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.12]">
                    Compassionate, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700">Science-Driven</span> Veterinary Care
                  </h1>
                  <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                    Vadodara’s premier animal hospital for accurate differential diagnosis, calm pet handling, sterile surgery, complex endocrine resolutions, and an on-site pet pharmacy.
                  </p>
                </div>
              </ScrollReveal>

              {/* Floor 0 & Taj Vivanta Callout */}
              <ScrollReveal animation="fade-up" delay={300}>
                <div className="p-4 rounded-2xl bg-white/95 border border-emerald-100 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-3.5 text-left">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold text-slate-900">
                      Ground Floor (Floor 0) at Pratham Plaza
                    </p>
                    <p className="text-slate-600">
                      B/GF 5-6, Vadodara Rd, <strong className="text-emerald-900">opp. Hotel Taj Vivanta</strong>, Munjmahuda, Akota · 
                      <span className="text-emerald-800 font-semibold"> Easy walk-in with zero stairs or lift hassles for sick pets.</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal animation="fade-up" delay={400}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
                  <Link
                    to="/book"
                    className="px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-emerald-800 to-forest-950 hover:from-emerald-700 hover:to-forest-900 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-emerald-200" />
                    <span>Book Priority Appointment</span>
                  </Link>

                  <a
                    href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
                    className="px-5 py-3.5 text-sm sm:text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-emerald-300 rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group"
                  >
                    <Phone className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                    <span>Call {clinicInfo.phone}</span>
                  </a>

                  <Link
                    to="/contact"
                    className="px-4 py-3.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-emerald-900 hover:bg-emerald-50/60 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Timings & Map</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </ScrollReveal>

              {/* Trust badges */}
              <ScrollReveal animation="fade-up" delay={500}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-700">Humble & Calm Doctor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-700">Stocked In-House Pharmacy</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-700">Pseudopregnancy Care</span>
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* Right Column: Visual Image & Interactive Shift Live Card (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              <ScrollReveal animation="zoom-in" delay={200}>
                {/* Photo Showcase with Glass Overlays */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80"
                    alt="Veterinarian examining gentle golden retriever at Baroda Pet Clinic"
                    className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                    loading="eager"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />

                  {/* Floating Map Pill */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-900 shadow-md flex items-center gap-1.5 border border-white/50">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Opp. Hotel Taj Vivanta</span>
                    </div>
                    
                    <span className="px-2.5 py-1 rounded-full bg-forest-950/80 backdrop-blur-md text-[11px] font-bold text-emerald-300 border border-emerald-500/30">
                      Akota, Vadodara
                    </span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                      Evidence-Based Animal Hospital
                    </p>
                    <p className="text-base sm:text-lg font-bold leading-tight">
                      Accurate Diagnosis & Gentle Patient Handling
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Floor 0, Pratham Plaza · Comprehensive care for canines & felines
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Live Shift Status Card */}
              <ScrollReveal animation="fade-up" delay={350}>
                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-card border border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs sm:text-sm font-bold text-slate-900">Today's Shift Hours</span>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      clinicStatus.isOpen ? 'bg-emerald-100 text-emerald-900' : 'bg-amber-100 text-amber-900'
                    }`}>
                      {clinicStatus.isOpen ? '● Clinic Open Now' : '● Reopening at 6:00 PM'}
                    </span>
                  </div>

                  {/* Timetable Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="text-[11px] font-semibold text-slate-500">Morning Shift</p>
                      <p className="font-bold text-slate-900 text-sm mt-0.5">10:00 AM – 1:00 PM</p>
                      <p className="text-[10px] text-emerald-700 font-bold mt-0.5">OPD & Surgeries</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="text-[11px] font-semibold text-slate-500">Evening Shift</p>
                      <p className="font-bold text-slate-900 text-sm mt-0.5">6:00 PM – 9:30 PM</p>
                      <p className="text-[10px] text-emerald-700 font-bold mt-0.5">OPD & Pharmacy</p>
                    </div>
                  </div>

                  {/* Pharmacy quick check */}
                  <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-900">
                      <Pill className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span className="font-medium text-[11px] sm:text-xs">
                        Looking for prescription food or medicines?
                      </span>
                    </div>
                    <button
                      onClick={onOpenRefill}
                      className="font-bold text-emerald-900 hover:text-emerald-950 underline text-[11px] shrink-0 ml-2"
                    >
                      Quick Check
                    </button>
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>

          {/* 4 Trust Metrics */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 sm:mt-16 pt-8 border-t border-slate-200/80">
              {clinicInfo.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-card hover:border-emerald-300 transition-all text-center lg:text-left group"
                >
                  <p className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight group-hover:text-emerald-800 transition-colors">
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
          </ScrollReveal>

        </div>
      </section>

      {/* 2. INTERACTIVE SYMPTOM CHECKER & TRIAGE (On-Scroll) */}
      <ScrollReveal animation="fade-up" delay={150}>
        <SymptomChecker onSelectServiceBooking={() => onOpenBooking()} />
      </ScrollReveal>

      {/* 3. FEATURED CLINICAL SERVICES PREVIEW */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="space-y-2 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>Our Medical Services</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                  Gold-Standard Veterinary Clinical Care
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">
                  From basic health checkups to specialized pseudopregnancy resolution and surgical interventions.
                </p>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 hover:underline shrink-0"
              >
                <span>Explore All 8 Specialties</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesData.slice(0, 3).map((service, idx) => (
              <ScrollReveal key={service.id} animation="fade-up" delay={idx * 150}>
                <div
                  className="p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 bg-white shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                        {service.category}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="pt-2 space-y-1 text-xs text-slate-700">
                      {service.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">{service.duration}</span>
                    <Link
                      to="/services"
                      className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
                    >
                      <span>Details & Protocol</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IN-HOUSE PHARMACY SPOTLIGHT */}
      <section className="py-16 sm:py-20 bg-emerald-900 text-white border-b border-emerald-950 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <ScrollReveal animation="slide-left" delay={100}>
                <span className="px-3 py-1 rounded-full bg-emerald-800 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-700">
                  On-Site Dispensary
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight leading-tight mt-2">
                  “Well Stocked Supplies of Pet Food, Medicine and Accessories.”
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-xl mt-2">
                  No need to search human pharmacies across Vadodara. Our ground floor clinic houses Royal Canin & Farmina clinical diets, vet-grade antibiotics, tick-flea chewables, supplements, and recovery accessories.
                </p>

                <div className="flex flex-wrap gap-2 pt-3">
                  <span className="px-3 py-1 rounded-lg bg-emerald-800/80 text-xs font-bold text-emerald-200 border border-emerald-700">
                    ✓ Royal Canin Gastro / Urinary
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-emerald-800/80 text-xs font-bold text-emerald-200 border border-emerald-700">
                    ✓ Farmina Vet Life
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-emerald-800/80 text-xs font-bold text-emerald-200 border border-emerald-700">
                    ✓ Bravecto & Simparica
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-emerald-800/80 text-xs font-bold text-emerald-200 border border-emerald-700">
                    ✓ Multivitamins & Liver Tonics
                  </span>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <Link
                    to="/pharmacy"
                    className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-md"
                  >
                    View Pharmacy Inventory
                  </Link>
                  <button
                    onClick={onOpenRefill}
                    className="px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all border border-emerald-600"
                  >
                    Order / Refill via WhatsApp
                  </button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3 text-slate-900">
              {pharmacyProducts.slice(0, 4).map((p, i) => (
                <ScrollReveal key={p.id} animation="zoom-in" delay={i * 120}>
                  <div className="p-4 rounded-xl bg-white shadow-md space-y-1">
                    <p className="text-[10px] font-bold text-emerald-700 uppercase">{p.category}</p>
                    <p className="font-bold text-xs sm:text-sm text-slate-900">{p.name}</p>
                    <p className="text-[11px] text-slate-500 truncate">{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. REVIEWS SPOTLIGHT (4.6★ with 789 reviews) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>4.6 ★ Google Rating</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                Verified Feedback from Vadodara Pet Parents
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Trusted by over 789 pet families for our humble, composed doctor and scientific cures.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviewsData.slice(0, 2).map((rev, idx) => (
              <ScrollReveal key={rev.id} animation="fade-up" delay={idx * 150}>
                <div
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between h-full"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-sm text-slate-900">{rev.author}</h3>
                        <p className="text-[11px] text-slate-500">{rev.badge}</p>
                      </div>
                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 italic">
                      "{rev.content}"
                    </p>

                    {rev.ownerResponse && (
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-950 space-y-1">
                        <p className="font-bold text-emerald-900 text-[11px]">Response from Baroda Pet Clinic:</p>
                        <p className="text-[11px] text-emerald-800">"{rev.ownerResponse}"</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-bold text-emerald-800">#{rev.tags[0]}</span>
                    <span>{rev.date}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="mt-8 text-center">
              <Link
                to="/reviews"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 hover:underline"
              >
                <span>View All 789+ Reviews & Leave Feedback</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. EMERGENCY FIRST-AID GUIDE */}
      <ScrollReveal animation="fade-up">
        <EmergencyGuide />
      </ScrollReveal>

      {/* 7. LOCATION & DIRECTIONS TEASER */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="zoom-in" delay={100}>
            <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-900 via-forest-900 to-forest-950 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center lg:text-left">
                <span className="px-3 py-1 rounded-full bg-emerald-800 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-700">
                  Ground Floor Clinic
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
                  Visit Us at Pratham Plaza, Opp. Hotel Taj Vivanta
                </h2>
                <p className="text-xs sm:text-sm text-emerald-200/90 max-w-xl">
                  B/GF 5-6, Vadodara Rd, Munjmahuda, Akota, Vadodara 390007. Ample parking, ground floor step-free entrance, and split shifts for calm visits.
                </p>
                <p className="text-xs text-amber-300 font-mono">
                  Plus Code: {clinicInfo.address.plusCode}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-md text-center"
                >
                  View Map & Shift Timings
                </Link>
                <Link
                  to="/book"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md text-center"
                >
                  Book Priority Slot
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
