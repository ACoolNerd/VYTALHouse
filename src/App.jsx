import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import Reset from './pages/Reset';
import Restorations from './pages/Restorations';
import RestorationDetail from './pages/RestorationDetail';
import Modalities from './pages/Modalities';
import MedicalIndex from './pages/MedicalIndex';
import MedicalIV from './pages/MedicalIV';
import MedicalBloodwork from './pages/MedicalBloodwork';
import MedicalAesthetics from './pages/MedicalAesthetics';
import Membership from './pages/Membership';
import VytalIndexPage from './pages/VytalIndexPage';
import House from './pages/House';
import Team from './pages/Team';
import Events from './pages/Events';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import BookRouter from './pages/BookRouter';
import AccountPortal from './pages/AccountPortal';
import LegalPage from './pages/legal/LegalPage';
import VytalPouches from './pages/VytalPouches';
import VytalAir from './pages/VytalAir';
import VytalArc from './pages/VytalArc';
import VytalOne from './pages/VytalOne';
import BrandSystem from './pages/BrandSystem';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0C0E] text-[#B7BDC6] font-sans selection:bg-[#C6FC06] selection:text-black">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/restorations" element={<Restorations />} />
          <Route path="/restorations/:slug" element={<RestorationDetail />} />
          <Route path="/modalities" element={<Modalities />} />
          <Route path="/medical" element={<MedicalIndex />} />
          <Route path="/medical/iv" element={<MedicalIV />} />
          <Route path="/medical/bloodwork" element={<MedicalBloodwork />} />
          <Route path="/medical/aesthetics" element={<MedicalAesthetics />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/index" element={<VytalIndexPage />} />
          <Route path="/house" element={<House />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookRouter />} />
          <Route path="/account" element={<AccountPortal />} />
          <Route path="/products/pouches" element={<VytalPouches />} />
          <Route path="/vytal-pouches" element={<VytalPouches />} />
          <Route path="/products/vytal-air" element={<VytalAir />} />
          <Route path="/vytal-air" element={<VytalAir />} />
          <Route path="/vytal-arc" element={<VytalArc />} />
          <Route path="/vytal-one" element={<VytalOne />} />
          <Route path="/experience" element={<House />} />
          <Route path="/location" element={<House />} />
          <Route path="/services" element={<Modalities />} />
          <Route path="/founders" element={<Team />} />
          <Route path="/brand-system" element={<BrandSystem />} />
          <Route path="/legal/:slug" element={<LegalPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
