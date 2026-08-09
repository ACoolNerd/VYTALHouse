import React from 'react';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import { Building, MapPin, Camera, Zap, ShieldCheck, Sparkles } from 'lucide-react';
import { PRISM_ASSETS, BRAND_SUBTAGLINE } from '../data/masterSpecData';

export default function House() {
  const galleryImages = [
    { title: "Thermal Contrast Plunge Suite", category: "RITUAL", src: "/images/house/thermal-contrast-plunge-suite.png" },
    { title: "Hyperbaric Oxygen & PEMF Bay", category: "ELEVATE TECH", src: "/images/house/hyperbaric-pemf-bay.png" },
    { title: "Infrared Hyperthermic Sauna", category: "THERMAL RITUAL", src: "/images/house/infrared-sauna.png" },
    { title: "Physician Readout & Diagnostic Suite", category: "PC CLINICAL", src: "/images/house/physician-diagnostic-suite.png" },
    { title: "Whole-Body Cryo Adaptation Chamber", category: "FORGE", src: "/images/house/cryotherapy-chamber.png" },
    { title: "Member Lounge & Hydration Bar", category: "HOUSE ACCESS", src: "/images/house/member-lounge-hydration-bar.png" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ENVIRONMENTAL ARCHITECTURE & SIGNAGE</span>
        </div>
        <h1 className="text-4xl font-extrabold text-white">THE HOUSE</h1>
        <p className="text-sm text-gray-300">
          Designed for optimal thermal contrast, acoustic entrainment, and medical diagnostic flow.
        </p>
      </div>

      {/* Official Environmental Samples Showcase (Prism Silver Edition) */}
      <div className="p-8 rounded-3xl bg-[#131A26] border border-[#00F0FF]/40 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-gray-800">
          <div>
            <span className="text-[10px] font-mono font-bold text-[#00F0FF] tracking-widest uppercase">
              07 / 10 • ENVIRONMENTAL SAMPLES
            </span>
            <h3 className="text-xl font-heading font-black text-white">
              Flagship Signage, Wayfinding & Interior Identity
            </h3>
          </div>
          <span className="text-xs font-mono font-bold text-[#CCFF00] border border-[#CCFF00]/40 px-3 py-1 rounded-full bg-[#0B0F17]">
            {BRAND_SUBTAGLINE}
          </span>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-800 bg-black group relative">
          <img
            src={PRISM_ASSETS.environmentalSamples}
            alt="VYTAL House Environmental Samples Architecture"
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition duration-500"
          />
        </div>
      </div>

      {/* Site Comparison Card (Open Decision ⚑) */}
      <div className="p-8 rounded-2xl glass-gold-panel border border-[#C5A059]/40 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#C5A059]/30">
          <div>
            <h3 className="font-mono text-xl font-bold text-white uppercase">
              SITE LOCATION EVALUATION STATUS
            </h3>
            <p className="text-xs text-gray-400">Drives primary address, facility layout, and launch market positioning.</p>
          </div>
          <PlaceholderBadge text="Site Choice Pending ⚑" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="p-6 rounded-xl bg-[#0B0F17] border border-gray-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-base">OPTION A: ELKRIDGE, MD</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">CECLI By-Right</span>
            </div>
            <p className="text-gray-300 font-mono">6785 Business Parkway • 5,760 SF • Dock Doors</p>
            <p className="text-gray-400 leading-relaxed">
              Industrial high-volume footprint ideal for multi-chamber HBOT, cold contrast plunge suites, and dedicated medical lab rooms.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0B0F17] border border-gray-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-base">OPTION B: CHEVY CHASE, MD</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono">DPZ Pending</span>
            </div>
            <p className="text-gray-300 font-mono">6807 Wisconsin Ave • Prime Retail Footprint</p>
            <p className="text-gray-400 leading-relaxed">
              High-density luxury corridor positioning targeting executive members and clinical clientele.
            </p>
          </div>
        </div>
      </div>

      {/* Equipment Tier Discipline Badge */}
      <div className="p-6 rounded-xl bg-[#131A26] border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        <div>
          <span className="text-white font-bold block">ELEVE EQUIPMENT TIER DECISION</span>
          <span className="text-gray-400 block">Tier A ($18,440) / Tier B ($99,885) / Tier C ($521,870)</span>
        </div>
        <PlaceholderBadge text="Equipment Tier Pending ⚑" />
      </div>

      {/* PHOTO GALLERY SHOWCASE */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#232D40] pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase">INTERIOR PHOTOGRAPHY & SUITES</span>
            <h2 className="text-2xl font-bold text-white font-heading">HOUSE ROOMS & MODALITIES</h2>
          </div>
          <span className="text-xs font-mono text-gray-400">Curated Restoration Environments</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden glass-panel border border-[#232D40] hover:border-[#C5A059]/50 transition">
              <div className="h-64 overflow-hidden bg-gray-900">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-85 group-hover:opacity-100"
                />
              </div>
              <div className="p-5 bg-[#0B0F17]/90 border-t border-[#232D40] space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#C5A059] block">{img.category}</span>
                <h3 className="font-bold text-base text-white">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
