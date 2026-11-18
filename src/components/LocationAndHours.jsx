import React, { useState } from 'react';
import { 
  MapPin, Clock, Phone, Navigation, Copy, Check, 
  ExternalLink, ShieldCheck, Car, Building2, Calendar 
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import { getClinicCurrentStatus } from '../utils/statusHelper';

export default function LocationAndHours({ onOpenBooking }) {
  const [copied, setCopied] = useState(false);
  const status = getClinicCurrentStatus();

  const handleCopyAddress = () => {
    const fullAddr = `${clinicInfo.address.line1}, ${clinicInfo.address.landmark}, ${clinicInfo.address.area}, ${clinicInfo.address.state} ${clinicInfo.address.pincode}`;
    navigator.clipboard.writeText(fullAddr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scheduleDays = [
    { day: "Monday – Saturday", morning: "10:00 AM – 1:00 PM", evening: "6:00 PM – 9:30 PM", type: "Daily Clinical Shifts" },
    { day: "Sunday", morning: "10:30 AM – 1:00 PM", evening: "Evening Closed (Emergency on call)", type: "Morning OPD Only" },
  ];

  return (
    <section id="location" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>Clinic Timings & Directions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Visit Baroda Pet Clinic at Pratham Plaza
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Situated right opposite Hotel Taj Vivanta in Akota, Vadodara, on Floor 0 (Ground Floor) with effortless pet accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timings, Address & Details (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Live Status Pill */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Clinic Status</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{status.message}</p>
                <p className="text-xs text-slate-600">{status.subtext}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 ${status.isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'}`}>
                {status.isOpen ? '● Open Now' : '● Closed / Break'}
              </span>
            </div>

            {/* Timings Table Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <Clock className="w-5 h-5 text-emerald-700" />
                <h3 className="font-bold text-base text-slate-900">Visiting & Shift Hours</h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                {scheduleDays.map((sched, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">{sched.day}</span>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {sched.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                      <div>
                        <span className="text-slate-500">Morning Shift:</span>
                        <p className="font-bold text-slate-800">{sched.morning}</p>
                      </div>
                      <div>
                        <span className="text-slate-500">Evening Shift:</span>
                        <p className="font-bold text-slate-800">{sched.evening}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-500 italic">
                * Note: The midday break (1:00 PM – 6:00 PM) allows thorough clinical sterilization and quiet inpatient rest. Emergency calls are accepted at 098252 42506.
              </p>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">Clinic Address & Landmark</h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 font-medium leading-relaxed">
                      {clinicInfo.address.line1},<br />
                      <strong className="text-emerald-900">{clinicInfo.address.landmark}</strong>,<br />
                      {clinicInfo.address.area}, {clinicInfo.address.state} {clinicInfo.address.pincode}
                    </p>
                    <p className="text-xs text-emerald-800 font-semibold mt-1">
                      {clinicInfo.address.floor}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs flex items-center gap-1 transition-colors shrink-0"
                  title="Copy full address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Plus Code Badge */}
              <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-100 text-xs flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-emerald-800 font-medium">Google Maps Plus Code:</span>
                  <p className="font-bold text-emerald-950 font-mono">{clinicInfo.address.plusCode}</p>
                </div>
                <a
                  href={clinicInfo.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs flex items-center gap-1 shadow-sm transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate</span>
                </a>
              </div>

              {/* Accessibility & Parking Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1 text-slate-600">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ample Parking at Pratham Plaza</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Floor 0 (No steps for sick dogs)</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Styled Map & Navigation Launcher (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 h-[420px] sm:h-[480px]">
              {/* Google Maps Embed iframe with fallback */}
              <iframe
                title="Baroda Pet Clinic Map Location"
                src="https://maps.google.com/maps?q=Baroda+Pet+Clinic+Pratham+Plaza+Akota+Vadodara+Gujarat&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    <p className="font-bold text-sm text-slate-900">Baroda Pet Clinic (બરોડા પેટ ક્લિનિક)</p>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Opp. Hotel Taj Vivanta · Floor 0, Pratham Plaza
                  </p>
                </div>

                <a
                  href={clinicInfo.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 rounded-xl font-bold text-xs bg-emerald-800 text-white hover:bg-emerald-900 shadow-sm flex items-center justify-center gap-1.5 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Quick Action row */}
            <div className="grid grid-cols-2 gap-3 text-center">
              <a
                href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
                className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 text-xs font-bold text-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Clinic Desk</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="p-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Slot Ahead</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
