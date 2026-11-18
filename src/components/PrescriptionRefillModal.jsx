import React, { useState } from 'react';
import { X, Pill, ShoppingBag, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { clinicInfo } from '../data/clinicData';

export default function PrescriptionRefillModal({ isOpen, onClose }) {
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [itemName, setItemName] = useState('Royal Canin Veterinary Diet (Gastro/Urinary)');
  const [quantity, setQuantity] = useState('1 Pack / Bottle');
  const [pickupShift, setPickupShift] = useState('Evening Shift (6:00 PM – 9:30 PM)');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 50, spread: 50 });
    } catch (err) {}
  };

  const getWhatsAppRefillUrl = () => {
    const text = `💊 *Baroda Pet Clinic - Pharmacy / Pet Food Inquiry*
*Owner:* ${ownerName}
*Phone:* ${phone}
*Pet:* ${petName}
*Item / Food Requested:* ${itemName}
*Quantity:* ${quantity}
*Preferred Pickup:* ${pickupShift}
*Notes:* ${additionalNotes || 'Please confirm availability'}
📍 Floor 0, Pratham Plaza, opp. Taj Vivanta, Akota`;

    return `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 p-5 text-white flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-bold font-display flex items-center gap-2">
              <Pill className="w-5 h-5 text-emerald-300" />
              <span>In-House Pharmacy & Food Order</span>
            </h3>
            <p className="text-xs text-emerald-200">
              Check stock or reserve prescription diets & medications
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">
              Refill Request Prepared!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              To guarantee instant reservation at our dispensary counter, click below to send this directly to the clinic WhatsApp desk.
            </p>

            <div className="space-y-2 pt-2">
              <a
                href={getWhatsAppRefillUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all flex items-center justify-center gap-2 text-xs sm:text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send WhatsApp Order to Clinic ({clinicInfo.phone})</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 pt-1"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder="e.g. Rahul Patel"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 98252..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Pet Name & Type</label>
                <input
                  type="text"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  placeholder="e.g. Bruno (Dog)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Quantity</label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 2 kg bag / 1 strip"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700"
                />
              </div>
            </div>

            <div className="text-xs space-y-1">
              <label className="block font-bold text-slate-700">Prescription Diet or Medicine Name *</label>
              <input
                type="text"
                required
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="e.g. Royal Canin Gastrointestinal 2kg, Simparica 10-20kg, Prednisolone..."
                className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700"
              />
            </div>

            <div className="text-xs space-y-1">
              <label className="block font-bold text-slate-700">Preferred Pickup Shift</label>
              <select
                value={pickupShift}
                onChange={(e) => setPickupShift(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700 bg-white"
              >
                <option value="Morning Shift (10:00 AM – 1:00 PM)">Morning Shift (10:00 AM – 1:00 PM)</option>
                <option value="Evening Shift (6:00 PM – 9:30 PM)">Evening Shift (6:00 PM – 9:30 PM)</option>
              </select>
            </div>

            <div className="text-xs space-y-1">
              <label className="block font-bold text-slate-700">Special Notes</label>
              <textarea
                rows={2}
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                placeholder="Any special packaging or dietary query..."
                className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-700"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Reserve / Inquire Item</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
