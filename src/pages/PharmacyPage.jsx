import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Pill, ShoppingBag, ShieldCheck, Search, CheckCircle2, 
  MessageSquare, ArrowRight, Sparkles, ChevronRight, Phone, 
  Clock, Package, AlertCircle 
} from 'lucide-react';
import { pharmacyProducts, clinicInfo } from '../data/clinicData';
import ScrollReveal from '../components/ScrollReveal';

export default function PharmacyPage({ onOpenRefill }) {
  const [filterCat, setFilterCat] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Prescription Diets',
    'Therapeutic Food',
    'Medicines & Spot-Ons',
    'Vitamins & Joint Care',
    'Medicated Grooming',
    'Clinical Accessories'
  ];

  const filteredProducts = pharmacyProducts.filter(item => {
    const matchesCat = filterCat === 'All' || item.category === filterCat;
    const matchesQuery = searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

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
              <span className="text-emerald-800 font-bold">In-House Pharmacy & Supplies</span>
            </div>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <ScrollReveal animation="fade-up" delay={100} className="max-w-2xl space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Pill className="w-3.5 h-3.5" />
                <span>On-Site Dispensary · Floor 0</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
                Complete In-House Veterinary Pharmacy & Pet Supplies
              </h1>
              <p className="text-sm sm:text-base text-slate-600">
                100% genuine veterinary pharmaceuticals, specialized prescription kibbles (Royal Canin, Farmina), tick-flea chewables, and post-operative recovery accessories.
              </p>
            </ScrollReveal>

            {/* Search */}
            <ScrollReveal animation="fade-up" delay={200} className="w-full md:w-80 shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search food, medicine, spot-ons..."
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

          {/* Categories */}
          <ScrollReveal animation="fade-up" delay={250}>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 mt-8 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCat(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    filterCat === cat
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

      {/* Verified Quote Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  From Verified Google Reviews
                </p>
                <p className="text-sm sm:text-base font-semibold italic text-white">
                  “Well stocked supplies of pet food, medicine and accessories.”
                </p>
              </div>
            </div>

            <button
              onClick={onOpenRefill}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs sm:text-sm transition-all shrink-0"
            >
              Order / Check Availability
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* Products Grid with Staggered On-Scroll Animation */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod, idx) => (
              <ScrollReveal key={prod.id} animation="fade-up" delay={(idx % 3) * 120}>
                <div
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                        {prod.category}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        100% Genuine
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-slate-900 mt-1">
                      {prod.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {prod.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {prod.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Available at Floor 0</span>
                    <button
                      onClick={onOpenRefill}
                      className="px-3.5 py-1.5 rounded-xl bg-emerald-800 text-white font-bold text-xs hover:bg-emerald-900 transition-colors flex items-center gap-1"
                    >
                      <span>Inquire / Order</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
              <p className="text-slate-600 font-semibold text-sm">No items found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setFilterCat('All'); }}
                className="mt-2 text-xs text-emerald-700 font-bold underline"
              >
                Reset filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* WhatsApp Refill Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <ScrollReveal animation="fade-up">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg font-bold text-slate-900">
                Need a Recurring Prescription Refill or Specialized Diet?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Send a photo of your prescription slip to our clinic WhatsApp desk at {clinicInfo.phone} to set it aside for convenient pickup during our morning or evening shift.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${clinicInfo.whatsappNumber}?text=Hello%20Baroda%20Pet%20Clinic,%20I%20would%20like%20to%20order%20prescription%20food/medicine`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md transition-all flex items-center gap-2 text-xs sm:text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Prescription Refill</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
