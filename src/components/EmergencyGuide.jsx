import React from 'react';
import { 
  AlertTriangle, Phone, Flame, Skull, HeartCrack, 
  Droplet, ArrowRight, ShieldAlert 
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function EmergencyGuide() {
  const emergencyScenarios = [
    {
      title: "Heatstroke & Excessive Panting",
      subtitle: "Frequent during Vadodara summer heat",
      icon: Flame,
      color: "text-amber-600 bg-amber-50",
      actions: [
        "Move pet immediately to a shaded, air-conditioned room.",
        "Wet paws and abdomen with room-temperature water (never ice water).",
        "Offer small sips of cool water; do not force drink."
      ]
    },
    {
      title: "Accidental Toxic Ingestion",
      subtitle: "Chocolates, onions, rat poison, medications",
      icon: Skull,
      color: "text-rose-600 bg-rose-50",
      actions: [
        "Identify what was swallowed and save the packaging/wrapper.",
        "Do not induce vomiting unless explicitly instructed by our vet.",
        "Rush to clinic with the substance sample immediately."
      ]
    },
    {
      title: "Severe Bleeding & Sudden Trauma",
      subtitle: "Dog fights, road accidents or deep cuts",
      icon: Droplet,
      color: "text-red-600 bg-red-50",
      actions: [
        "Apply firm, continuous pressure with a clean cloth.",
        "Keep the injured pet calm, wrapped in a blanket to prevent shock.",
        "Avoid applying tourniquets without veterinary guidance."
      ]
    },
    {
      title: "Sudden Bloat or Restless Gagging",
      subtitle: "Critical surgical emergency in deep-chested dogs",
      icon: HeartCrack,
      color: "text-purple-600 bg-purple-50",
      actions: [
        "Check for swollen tight abdomen and unproductive retching.",
        "Gastric Dilation-Volvulus (GDV) requires immediate clinical decompression.",
        "Call 098252 42506 while en route so our sterile suite is ready."
      ]
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-slate-900 text-white border-b border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              <span>Pet Emergency First-Aid</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
              What to Do in a Pet Medical Emergency
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Immediate stabilization steps while you prepare transport to Baroda Pet Clinic, opp. Hotel Taj Vivanta.
            </p>
          </div>

          <div className="bg-rose-950/50 p-4 rounded-2xl border border-rose-500/30 flex items-center gap-4 shrink-0">
            <div>
              <p className="text-[11px] font-bold text-rose-300 uppercase tracking-wider">Emergency Hot-Dial</p>
              <a
                href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
                className="text-lg sm:text-xl font-display font-black text-white hover:text-rose-200 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-rose-400 animate-pulse" />
                <span>{clinicInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergencyScenarios.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-700">
                    {item.actions.map((act, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0">›</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 italic">
                  Keep patient calm & bring to Pratham Plaza, Akota.
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
