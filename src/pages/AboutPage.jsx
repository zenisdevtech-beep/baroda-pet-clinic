import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, Award, BookOpen, ShieldCheck, Smile, 
  Sparkles, CheckCircle2, UserCheck, Stethoscope, 
  ChevronRight, Calendar, ArrowRight, Clock, MapPin 
} from 'lucide-react';
import { doctorHighlights, clinicInfo } from '../data/clinicData';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutPage() {
  const doctorTags = [
    { label: "humble doctor", count: "4+ mentions" },
    { label: "composed doctor", count: "2+ mentions" },
    { label: "calm doctor", count: "2+ mentions" },
    { label: "experienced doctor", count: "4+ mentions" },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-16 page-enter">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-emerald-50/90 via-slate-50 to-white py-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-down" delay={50}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
              <Link to="/" className="hover:text-emerald-800">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-emerald-800 font-bold">About Doctor & Clinical Science</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100} className="max-w-3xl space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5" />
              <span>Veterinary Clinical Philosophy</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
              Where Compassion Meets Clinical Precision
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Founded on the belief that veterinary medicine must combine advanced clinical pharmacology with soft-spoken empathy and patient handling for pets and their worried families.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* Doctor Tags Cloud */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" delay={150}>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Top Attributes from 789+ Google Reviews
                </p>
                <p className="text-sm text-slate-600 mt-0.5">
                  Reflected in pet parents' authentic testimonials:
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {doctorTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 text-slate-800 font-bold text-xs sm:text-sm shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="capitalize">{tag.label}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                      {tag.count}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Story & Pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual with quote (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal animation="zoom-in" delay={100}>
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80"
                    alt="Veterinary examination at Baroda Pet Clinic"
                    className="w-full h-96 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/25 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Clinical Standard
                    </p>
                    <p className="text-base sm:text-lg font-medium italic leading-snug">
                      “Even if for a very minor complaint, we always conduct a thorough basic physical examination to assess the patient’s true physiological state.”
                    </p>
                    <p className="text-xs text-emerald-200 font-bold">
                      — Baroda Pet Clinic Medical Team
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-950 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900">Floor 0, Pratham Plaza, Akota</p>
                    <p className="text-slate-600">Opposite Hotel Taj Vivanta · Step-free ground access</p>
                  </div>
                  <Link
                    to="/book"
                    className="px-3.5 py-2 rounded-xl bg-emerald-800 text-white font-bold text-xs shadow-sm hover:bg-emerald-900 transition-colors"
                  >
                    Book Visit
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* 4 Pillars Grid (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {doctorHighlights.map((pillar, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 120}>
                  <div
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-emerald-300 hover:shadow-card transition-all duration-300 space-y-2.5 h-full"
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
                </ScrollReveal>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Evidence-Based Resolution Spotlight */}
      <section className="py-14 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                Clinical Case Study
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Canine Pseudopregnancy (False Pregnancy) & Prolactin Suppression
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
                As verified in client reviews (e.g., Kajal Savanur's 10-month-old Golden Retriever who had suffered for 2 months without resolution from multiple prior veterinarians), Baroda Pet Clinic uses targeted endocrine protocols. Based on clinical research, targeted prolactin suppression halts milk synthesis and relieves maternal agitation safely without invasive procedures.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 underline"
                >
                  <span>Read more about our endocrine treatments</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
