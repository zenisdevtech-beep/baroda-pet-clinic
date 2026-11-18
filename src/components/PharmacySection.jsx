import React, { useState } from 'react';
import { 
  Pill, ShoppingBag, ShieldCheck, Search, CheckCircle2, 
  MessageSquare, ArrowRight, Sparkles, AlertCircle 
} from 'lucide-react';
import { pharmacyProducts, clinicInfo } from '../data/clinicData';

export default function PharmacySection({ onOpenRefill }) {
  const [filterCat, setFilterCat] = useState('All');

  const categories = ['All', 'Prescription Diets', 'Therapeutic Food', 'Medicines & Spot-Ons', 'Vitamins & Joint Care', 'Medicated Grooming', 'Clinical Accessories'];

  const filteredProducts = pharmacyProducts.filter(item => {
    return filterCat === 'All' || item.category === filterCat;
  });

  return (
    <section id="pharmacy" className="py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner quote from verified Google reviews */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-emerald-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 border border-emerald-700/60">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-700/80 flex items-center justify-center shrink-0 text-amber-300">
              <Pill className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-emerald-300 font-bold">
                From Verified Google Reviews
              </p>
              <p className="text-sm sm:text-base font-medium italic text-emerald-50">
                “Well stocked supplies of pet food, medicine and accessories.”
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenRefill}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-300 text-slate-900 transition-all shadow-md"
            >
              Order / Inquire Prescription
            </button>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>On-Site Dispensary</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Complete In-House Veterinary Pharmacy & Pet Supplies
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            No wandering between human chemist shops. Get authentic veterinarian-prescribed medications, clinical diets, and recovery accessories right at our clinic.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCat(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                filterCat === cat
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    {prod.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    100% Genuine
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  {prod.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {prod.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {prod.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Pick up at Floor 0, Pratham Plaza</span>
                <button
                  onClick={onOpenRefill}
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 group"
                >
                  <span>Inquire Stock</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Convenient prescription refill notice */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4 text-emerald-700" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Prescription Refill or Home Delivery Inquiry
              </p>
              <p className="text-xs text-slate-600">
                Send your pet's prescription slip via WhatsApp to reserve required medications before visiting the clinic.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${clinicInfo.whatsappNumber}?text=Hello%20Baroda%20Pet%20Clinic,%20I%20want%20to%20check%20availability%20for%20pet%20medicines/food`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-white hover:bg-emerald-50 border border-emerald-300 shadow-sm transition-all shrink-0 flex items-center gap-1.5"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Prescription Refill</span>
          </a>
        </div>

      </div>
    </section>
  );
}
