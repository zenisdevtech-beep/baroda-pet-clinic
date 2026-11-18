import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Stethoscope, Activity, Pill, Scissors, ShieldCheck, 
  Sparkles, Heart, ShoppingBag, CheckCircle, Clock, 
  ArrowRight, Search, CheckCircle2, ChevronRight, AlertCircle 
} from 'lucide-react';
import { servicesData, clinicInfo } from '../data/clinicData';
import ScrollReveal from '../components/ScrollReveal';

const iconMap = {
  Stethoscope,
  Activity,
  Pill,
  Scissors,
  ShieldCheck,
  Sparkles,
  Heart,
  ShoppingBag
};

export default function ServicesPage({ onSelectService }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();

  const categories = [
    'All',
    'General Medicine',
    'Specialized Medicine',
    'In-House Pharmacy',
    'Surgical Care',
    'Preventive Care',
    'Dermatology',
    'Feline Care'
  ];

  const filteredServices = servicesData.filter(svc => {
    const matchesCategory = selectedCategory === 'All' || svc.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleBookService = (serviceTitle) => {
    onSelectService(serviceTitle);
    navigate('/book');
  };

  return (
    <div className="pt-28 sm:pt-32 pb-16 page-enter">
      
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-emerald-50/90 via-slate-50 to-white py-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-down" delay={50}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
              <Link to="/" className="hover:text-emerald-800">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-emerald-800 font-bold">Services & Medical Care</span>
            </div>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <ScrollReveal animation="fade-up" delay={100} className="max-w-2xl space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Clinical Veterinary Care</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
                Veterinary Medical Specialties & Clinical Treatments
              </h1>
              <p className="text-sm sm:text-base text-slate-600">
                Ground-level animal healthcare with compassionate physical checkups, evidence-backed pseudopregnancy cure, and aseptic surgery in Akota, Vadodara.
              </p>
            </ScrollReveal>

            {/* Search Input */}
            <ScrollReveal animation="fade-up" delay={200} className="w-full md:w-80 shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search treatments, tests..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700 bg-white shadow-sm"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                  >
                    Clear
                  </button>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Department Filter Pills */}
          <ScrollReveal animation="fade-up" delay={250}>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 mt-8 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-emerald-800 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Services Grid with Staggered On-Scroll Animation */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, idx) => {
              const IconComponent = iconMap[service.icon] || Stethoscope;
              const isExpanded = expandedId === service.id;

              return (
                <ScrollReveal key={service.id} animation="fade-up" delay={(idx % 3) * 120}>
                  <div
                    className="rounded-2xl border border-slate-200 hover:border-emerald-300 bg-white p-6 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group h-full"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                          {service.badge}
                        </span>
                      </div>

                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                          {service.category}
                        </span>
                        <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors mt-0.5">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {isExpanded ? service.fullDesc : service.shortDesc}
                      </p>

                      <button
                        onClick={() => setExpandedId(isExpanded ? null : service.id)}
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline inline-block"
                      >
                        {isExpanded ? 'Show less' : 'Read clinical protocol →'}
                      </button>

                      <div className="pt-2 border-t border-slate-100 space-y-1.5">
                        {service.highlights.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{service.duration}</span>
                      </div>

                      <button
                        onClick={() => handleBookService(service.title)}
                        className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 transition-all flex items-center gap-1.5 shadow-sm"
                      >
                        <span>Book Slot</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
              <p className="text-slate-600 font-semibold text-sm">No services found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-2 text-xs text-emerald-700 font-bold underline"
              >
                Reset filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Pre-Visit Pet Preparation Guide */}
      <section className="py-12 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span>Pet Parent Checklist: What to Bring to Your Visit</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-xs text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <p className="font-bold text-slate-900 text-sm">1. Vaccination Book</p>
                  <p className="text-slate-600">Bring current immunization record card to track booster dates and deworming history.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <p className="font-bold text-slate-900 text-sm">2. Leash or Cat Carrier</p>
                  <p className="text-slate-600">Ensure dogs are secured on a leash; cats should always travel inside a secure carrier.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <p className="font-bold text-slate-900 text-sm">3. Fasting for Surgery</p>
                  <p className="text-slate-600">If your pet is scheduled for anesthesia or surgery, fast food for 8-12 hours prior to arrival.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <p className="font-bold text-slate-900 text-sm">4. Photos / Videos</p>
                  <p className="text-slate-600">Videos of irregular coughing, limping gait, or photos of stool help the doctor diagnose accurately.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
