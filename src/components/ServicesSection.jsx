import React, { useState } from 'react';
import { 
  Stethoscope, Activity, Pill, Scissors, ShieldCheck, 
  Sparkles, Heart, ShoppingBag, CheckCircle, Clock, 
  ArrowRight, Search, Filter 
} from 'lucide-react';
import { servicesData } from '../data/clinicData';

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

export default function ServicesSection({ onSelectService }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);

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

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Veterinary Medical Services</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              Evidence-Based Veterinary Care & Clinical Specialties
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              From general physical examinations to specialized canine pseudopregnancy resolution and surgical interventions, we deliver gold-standard animal healthcare.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments or tests..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 bg-slate-50/50"
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
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Stethoscope;
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="rounded-2xl border border-slate-200 hover:border-emerald-300 bg-white p-6 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                      {service.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors mt-0.5">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isExpanded ? service.fullDesc : service.shortDesc}
                  </p>

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : service.id)}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline inline-block"
                  >
                    {isExpanded ? 'Show less' : 'Read clinical protocol →'}
                  </button>

                  {/* Highlights Checklist */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Duration + CTA */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.duration}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-800 hover:text-white transition-all flex items-center gap-1"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
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
  );
}
