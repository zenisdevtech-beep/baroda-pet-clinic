import React, { useState, useEffect } from 'react';
import { 
  X, Calendar, Clock, CheckCircle2, MessageCircle, 
  MapPin, AlertTriangle, Sparkles, Copy, Check 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { clinicInfo, servicesData } from '../data/clinicData';

export default function AppointmentModal({ isOpen, onClose, preselectedService }) {
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('Dog');
  const [petAge, setPetAge] = useState('');
  const [service, setService] = useState('Comprehensive Clinical Checkups & Diagnosis');
  const [preferredShift, setPreferredShift] = useState('Evening Shift (6:00 PM – 9:30 PM)');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    // Default to tomorrow's date
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    setPreferredDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomCode = 'BPC-' + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(randomCode);
    setBookingConfirmed(true);

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.5 }
      });
    } catch (err) {}
  };

  const getWhatsAppBookingUrl = () => {
    const text = `🐾 *Baroda Pet Clinic - Appointment Request*
*Ref Code:* ${bookingRef}
*Owner:* ${ownerName}
*Phone:* ${phone}
*Pet:* ${petName} (${petType}, ${petAge || 'Age not specified'})
*Service:* ${service}
*Preferred Date:* ${preferredDate}
*Preferred Shift:* ${preferredShift}
*Urgent Case:* ${isUrgent ? 'YES' : 'No'}
*Notes / Symptoms:* ${notes || 'Standard consultation'}
📍 Floor 0, Pratham Plaza, opp. Taj Vivanta, Akota`;

    return `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleCopySummary = () => {
    const summary = `Appointment Ref: ${bookingRef} | Baroda Pet Clinic | Pet: ${petName} | Date: ${preferredDate} (${preferredShift}) | Address: Floor 0, Pratham Plaza, opp. Taj Vivanta, Akota, Vadodara`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 p-5 sm:p-6 text-white flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold font-display flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-300" />
              <span>Book Priority Veterinary Visit</span>
            </h3>
            <p className="text-xs text-emerald-200">
              Baroda Pet Clinic · Floor 0, Pratham Plaza, opp. Hotel Taj Vivanta
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {bookingConfirmed ? (
          /* Confirmation Screen */
          <div className="p-6 sm:p-8 space-y-5 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-900 border border-amber-200">
                Reference: {bookingRef}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                Appointment Slot Reserved!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1">
                We have registered your appointment for <strong className="text-slate-900">{petName}</strong> on <strong className="text-slate-900">{preferredDate}</strong> ({preferredShift}).
              </p>
            </div>

            {/* Appointment Ticket Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500">Service:</span>
                <span className="font-bold text-slate-900">{service}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500">Owner Contact:</span>
                <span className="font-bold text-slate-900">{ownerName} ({phone})</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500">Location:</span>
                <span className="font-bold text-emerald-800">Pratham Plaza (Floor 0), opp. Taj Vivanta</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Clinic Contact:</span>
                <span className="font-bold text-slate-900">{clinicInfo.phone}</span>
              </div>
            </div>

            {/* WhatsApp Sync Button */}
            <div className="space-y-2 pt-2">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all flex items-center justify-center gap-2 text-xs sm:text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Confirmation to Clinic on WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Summary Copied' : 'Copy Booking Slip'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setBookingConfirmed(false);
                    onClose();
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-emerald-800 hover:bg-emerald-50 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            
            {/* Shift timings reminder badge */}
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-900 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                <span><strong>Shift Timings:</strong> Morning 10AM–1PM | Evening 6PM–9:30PM</span>
              </div>
            </div>

            {/* Owner Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder="e.g. Kajal Savanur"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Mobile Phone (India) *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 98250 12345"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700"
                />
              </div>
            </div>

            {/* Pet Details */}
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="col-span-1">
                <label className="block font-bold text-slate-700 mb-1">Pet Type *</label>
                <select
                  value={petType}
                  onChange={(e) => setPetType(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700 bg-white"
                >
                  <option value="Dog">Dog 🐕</option>
                  <option value="Cat">Cat 🐈</option>
                  <option value="Puppy">Puppy 🐶</option>
                  <option value="Kitten">Kitten 🐱</option>
                  <option value="Bird">Bird 🦜</option>
                  <option value="Other">Other Small Pet</option>
                </select>
              </div>

              <div className="col-span-1">
                <label className="block font-bold text-slate-700 mb-1">Pet Name *</label>
                <input
                  type="text"
                  required
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  placeholder="e.g. Bella"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700"
                />
              </div>

              <div className="col-span-1">
                <label className="block font-bold text-slate-700 mb-1">Age / Breed</label>
                <input
                  type="text"
                  value={petAge}
                  onChange={(e) => setPetAge(e.target.value)}
                  placeholder="e.g. 10 mos (Golden)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700"
                />
              </div>
            </div>

            {/* Service & Shift selection */}
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Requested Veterinary Service *</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700 bg-white"
                >
                  {servicesData.map(s => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="General Health Consultation">General Health Consultation</option>
                  <option value="Emergency Evaluation">Emergency Evaluation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700 bg-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Preferred Shift *</label>
                  <select
                    value={preferredShift}
                    onChange={(e) => setPreferredShift(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700 bg-white"
                  >
                    <option value="Morning Shift (10:00 AM – 1:00 PM)">Morning Shift (10:00 AM – 1:00 PM)</option>
                    <option value="Evening Shift (6:00 PM – 9:30 PM)">Evening Shift (6:00 PM – 9:30 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notes / Symptoms */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Pet Symptoms or Medical Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Swelling, vomiting since yesterday, false pregnancy symptoms, due for annual rabies booster..."
                className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700 text-xs"
              />
            </div>

            {/* Urgent flag */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-50/60 border border-amber-200 text-xs">
              <input
                type="checkbox"
                id="urgent-check"
                checked={isUrgent}
                onChange={(e) => setIsUrgent(e.target.checked)}
                className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
              />
              <label htmlFor="urgent-check" className="font-semibold text-amber-900 cursor-pointer">
                This is an urgent case needing same-day priority evaluation
              </label>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-800 hover:bg-emerald-900 text-white shadow-md transition-all flex items-center gap-1.5"
              >
                <Calendar className="w-4 h-4 text-emerald-200" />
                <span>Confirm Appointment</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
