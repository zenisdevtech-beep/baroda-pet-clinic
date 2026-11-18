import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, MessageCircle, Clock, ShieldCheck, 
  Heart, Star, ArrowUp, Navigation 
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function Footer({ onOpenBooking, onOpenRefill }) {
  return (
    <footer className="bg-forest-950 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Brand & Gujarati Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-emerald-800 text-emerald-400 flex items-center justify-center border border-emerald-600/40 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-4H7v-2h4V7h2v4h4v2h-4v4z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-white tracking-tight">
                  {clinicInfo.name}
                </h3>
                <p className="font-gujarati text-emerald-400 text-sm font-semibold">
                  {clinicInfo.gujaratiName}
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-gujarati text-emerald-200/90">
              "તમારા પાલતુ પ્રાણીઓનું ઉત્તમ સ્વાસ્થ્ય અને દીર્ઘાયુ અમારી સર્વોચ્ચ પ્રાથમિકતા છે."
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Premier animal hospital in Akota, Vadodara. Renowned across 789+ Google reviews for humble, composed doctor care, accurate diagnostics, complex pseudopregnancy resolution, and a fully stocked on-site pet pharmacy.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-emerald-900/40 border border-emerald-800/60 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">4.6 / 5.0</span>
              <span className="text-slate-400">•</span>
              <span className="text-emerald-300">789 Google Reviews</span>
            </div>
          </div>

          {/* Quick Nav Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs sm:text-sm">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-emerald-300">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-emerald-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-300 transition-colors">
                  Clinical Services
                </Link>
              </li>
              <li>
                <Link to="/pharmacy" className="hover:text-emerald-300 transition-colors">
                  In-House Pharmacy
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-300 transition-colors">
                  About Doctor & Philosophy
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-emerald-300 transition-colors">
                  Google Reviews (4.6★)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-300 transition-colors">
                  Timings & Map
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-emerald-300 transition-colors font-bold text-emerald-400">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinical Shift Timings (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs sm:text-sm">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Visiting Hours</span>
            </h4>
            
            <div className="p-3 rounded-xl bg-emerald-900/30 border border-emerald-800/50 space-y-2">
              <div>
                <p className="text-xs font-bold text-emerald-200">Monday – Saturday (Split Shifts)</p>
                <p className="text-xs text-white mt-0.5">
                  <strong>Morning:</strong> 10:00 AM – 1:00 PM<br />
                  <strong>Evening:</strong> 6:00 PM – 9:30 PM
                </p>
              </div>

              <div className="pt-2 border-t border-emerald-800/40">
                <p className="text-xs font-bold text-emerald-200">Sunday Routine</p>
                <p className="text-xs text-white mt-0.5">
                  <strong>Morning:</strong> 10:30 AM – 1:00 PM<br />
                  <span className="text-slate-400 text-[11px]">(Hospital Sterilization & Inpatient rest)</span>
                </p>
              </div>
            </div>

            <div className="pt-1">
              <Link
                to="/book"
                className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow transition-all block text-center"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>

          {/* Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs sm:text-sm">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Contact & Address</span>
            </h4>

            <div className="space-y-2 text-slate-300 text-xs">
              <p className="leading-relaxed">
                <strong>Floor 0 (B/GF 5-6), Pratham Plaza,</strong><br />
                Vadodara Rd, <span className="text-amber-300 font-semibold">opp. Hotel Taj Vivanta</span>,<br />
                Munjmahuda, Akota, Vadodara, Gujarat 390007
              </p>

              <p className="text-emerald-300 font-mono text-[11px]">
                Plus Code: {clinicInfo.address.plusCode}
              </p>

              <div className="pt-2 flex flex-col gap-1.5">
                <a
                  href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 text-white hover:text-amber-300 font-bold"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{clinicInfo.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${clinicInfo.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiries</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white pt-1"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open Directions & Map</span>
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Legal, Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Baroda Pet Clinic (બરોડા પેટ ક્લિનિક). All rights reserved.
          </p>
          <p className="text-slate-400 text-center sm:text-right max-w-md">
            Animal Hospital & Registered In-House Pet Pharmacy in Akota, Vadodara, Gujarat.
          </p>
        </div>

      </div>
    </footer>
  );
}
