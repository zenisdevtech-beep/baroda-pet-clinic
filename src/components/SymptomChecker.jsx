import React, { useState } from 'react';
import { 
  AlertTriangle, CheckCircle, Clock, Stethoscope, 
  HelpCircle, ArrowRight, ShieldAlert, Phone, Sparkles, Heart 
} from 'lucide-react';
import { symptomTriageData, clinicInfo } from '../data/clinicData';

export default function SymptomChecker({ onSelectServiceBooking }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeSymptom = symptomTriageData[selectedIdx];

  return (
    <section id="triage" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Interactive Pet Health Triage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Is Your Pet Unwell? Check Symptoms & Next Steps
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Select what your pet is experiencing for preliminary veterinary guidelines and priority booking at Baroda Pet Clinic.
          </p>
        </div>

        {/* Interactive Layout: Left selector pills, Right triage card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Symptoms List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2">
              Common Clinical Signs
            </p>
            {symptomTriageData.map((item, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-md scale-[1.01]'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40'
                  }`}
                >
                  <div className="pr-3">
                    <p className={`font-bold text-sm sm:text-base ${isSelected ? 'text-white' : 'text-slate-900 group-hover:text-emerald-800'}`}>
                      {item.symptom}
                    </p>
                    <p className={`text-xs mt-0.5 font-gujarati ${isSelected ? 'text-emerald-200' : 'text-slate-500'}`}>
                      {item.gujarati}
                    </p>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-bold shrink-0 ${
                    isSelected 
                      ? 'bg-emerald-700 text-emerald-100' 
                      : 'bg-slate-100 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-800'
                  }`}>
                    {item.severity}
                  </span>
                </button>
              );
            })}

            {/* Quick emergency notice */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1 mt-4">
              <div className="flex items-center gap-1.5 font-bold text-amber-800">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Urgent Emergency Notice</span>
              </div>
              <p className="text-amber-800/90 leading-relaxed">
                If your pet has collapsed, is having seizures, or has pale blue gums, do not wait. Call our doctor directly at{' '}
                <a href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`} className="font-bold underline text-amber-950">
                  {clinicInfo.phone}
                </a>.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Clinical Guidance & Action Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-emerald-100 space-y-6">
            
            {/* Header with Urgency Pill */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Clinical Evaluation
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  {activeSymptom.symptom}
                </h3>
                <p className="text-xs font-gujarati text-emerald-700 font-semibold mt-0.5">
                  {activeSymptom.gujarati}
                </p>
              </div>

              <div className="self-start sm:self-center">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{activeSymptom.urgency}</span>
                </span>
              </div>
            </div>

            {/* What this means */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Veterinary Perspective & Observations
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                {activeSymptom.description}
              </p>
            </div>

            {/* Doctor's Pre-Visit Care Tips */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-2 text-xs sm:text-sm text-emerald-950">
              <p className="font-bold flex items-center gap-1.5 text-emerald-900">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Doctor's Safe Pre-Visit Instructions</span>
              </p>
              <ul className="space-y-1.5 text-emerald-800 pl-1">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Never administer human painkillers (Crocin/Paracetamol/Ibuprofen) as they cause fatal organ failure in dogs and cats.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>For swollen teats or false pregnancy: Avoid touching or stimulating mammary glands, as tactile stimulation triggers prolactin release.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Bring any previous vaccination book, treatment history, or photos of stool/vomit if applicable.</span>
                </li>
              </ul>
            </div>

            {/* Action Box */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500">Recommended Clinic Service:</p>
                <p className="text-sm font-bold text-slate-900">{activeSymptom.recommendedService}</p>
              </div>

              <button
                onClick={() => onSelectServiceBooking(activeSymptom.recommendedService)}
                className="px-5 py-3 rounded-xl font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <span>Book for this Symptom</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
