import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PharmacyPage from './pages/PharmacyPage';
import AboutPage from './pages/AboutPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import ReviewModal from './components/ReviewModal';
import PrescriptionRefillModal from './components/PrescriptionRefillModal';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isRefillOpen, setIsRefillOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Comprehensive Clinical Checkups & Diagnosis');

  const handleOpenBookingModal = (serviceName = '') => {
    if (serviceName) setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-600 selection:text-white">
        
        {/* Fixed Top Navigation Bar */}
        <Navbar
          onOpenBooking={() => handleOpenBookingModal()}
          onOpenRefill={() => setIsRefillOpen(true)}
        />

        {/* Main Routed Page Content */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenBooking={(svc) => handleOpenBookingModal(svc)} 
                  onOpenRefill={() => setIsRefillOpen(true)} 
                />
              } 
            />
            <Route 
              path="/services" 
              element={
                <ServicesPage 
                  onSelectService={(svc) => setSelectedService(svc)} 
                />
              } 
            />
            <Route 
              path="/pharmacy" 
              element={
                <PharmacyPage 
                  onOpenRefill={() => setIsRefillOpen(true)} 
                />
              } 
            />
            <Route 
              path="/about" 
              element={<AboutPage />} 
            />
            <Route 
              path="/reviews" 
              element={
                <ReviewsPage 
                  onOpenReviewModal={() => setIsReviewOpen(true)} 
                />
              } 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            <Route 
              path="/book" 
              element={
                <BookingPage 
                  preselectedService={selectedService} 
                />
              } 
            />
            {/* Fallback */}
            <Route 
              path="*" 
              element={
                <HomePage 
                  onOpenBooking={(svc) => handleOpenBookingModal(svc)} 
                  onOpenRefill={() => setIsRefillOpen(true)} 
                />
              } 
            />
          </Routes>
        </main>

        {/* Comprehensive Footer */}
        <Footer
          onOpenBooking={() => handleOpenBookingModal()}
          onOpenRefill={() => setIsRefillOpen(true)}
        />

        {/* Floating Actions on Mobile & Scroll-to-Top */}
        <FloatingActions
          onOpenBooking={() => handleOpenBookingModal()}
        />

        {/* Global Modals */}
        <AppointmentModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          preselectedService={selectedService}
        />

        <ReviewModal
          isOpen={isReviewOpen}
          onClose={() => setIsReviewOpen(false)}
        />

        <PrescriptionRefillModal
          isOpen={isRefillOpen}
          onClose={() => setIsRefillOpen(false)}
        />

      </div>
    </BrowserRouter>
  );
}
