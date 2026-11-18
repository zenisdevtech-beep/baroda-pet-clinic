import React from 'react';
import { 
  Heart, Award, BookOpen, ShieldCheck, Smile, 
  Sparkles, CheckCircle2, UserCheck, Stethoscope 
} from 'lucide-react';
import { doctorHighlights, clinicInfo } from '../data/clinicData';

export default function DoctorAndPhilosophy({ onOpenBooking }) {
  const doctorTags = [
    { label: "humble doctor", count: "4+" },
    { label: "composed doctor", count: "2+" },
    { label: "calm doctor", count: "2+" },
    { label: "experienced doctor", count: "4+" },
  ];

  return (
    <section id="doctor" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-emerald-700" />
            <span>Clinical Philosophy & Medical Care</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Why Pet Parents Across Vadodara Trust Baroda Pet Clinic
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A veterinary practice founded on clinical rigor, calm animal handling, and humble communication that makes both pets and parents feel completely at ease.
          </p>
        </div>

        {/* Doctor Badges Cloud (From Google Reviews Analysis) */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 mb-14 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Top Attributes Mentioned by Pet Owners on Google Maps
            </p>
            <p className="text-sm text-slate-600 mt-0.5">
              Reflected consistently across 789 verified reviews:
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {doctorTags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200 text-slate-800 font-bold text-xs sm:text-sm shadow-sm hover:border-emerald-400 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="capitalize">{tag.label}</span>
                <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                  {tag.count}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* 2-Column Story & Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual & Quote (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80"
                alt="Gentle veterinary care at Baroda Pet Clinic"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Doctor's Pledge
                </p>
                <p className="text-base sm:text-lg font-medium italic leading-snug">
                  “Even for the most minor complaint, we always conduct a thorough basic physical examination to understand the patient’s true physiological state.”
                </p>
                <p className="text-xs text-emerald-200 font-semibold">
                  — Baroda Pet Clinic Medical Team
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-950 flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="font-bold text-slate-900">Floor 0, Pratham Plaza, Akota</p>
                <p className="text-slate-600">Opposite Hotel Taj Vivanta · Easy ground-level entrance</p>
              </div>
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 rounded-lg bg-emerald-800 text-white font-bold text-xs shadow-sm hover:bg-emerald-900 transition-colors shrink-0"
              >
                Book Visit
              </button>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {doctorHighlights.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-300 hover:shadow-card transition-all duration-300 space-y-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  {idx === 0 && <Smile className="w-5 h-5 text-emerald-700" />}
                  {idx === 1 && <BookOpen className="w-5 h-5 text-emerald-700" />}
                  {idx === 2 && <ShieldCheck className="w-5 h-5 text-emerald-700" />}
                  {idx === 3 && <Sparkles className="w-5 h-5 text-emerald-700" />}
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
