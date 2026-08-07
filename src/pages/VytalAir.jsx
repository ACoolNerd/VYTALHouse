import React from 'react';
import { MASTER_OS_ASSETS } from '../data/masterSpecData';

export default function VytalAir() {
  return (
    <div className="bg-[#0B0C0E] text-[#B7BDC6] min-h-screen pb-24">
      <section className="pt-20 sm:pt-28 pb-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-[.9fr_1.1fr] gap-10 items-end">
          <div>
            <p className="text-[11px] tracking-[0.3em] text-[#C6FC06] uppercase mb-5">VYTAL AIR • Core Sub-brand</p>
            <h1 className="font-heading font-light text-5xl sm:text-7xl tracking-[0.15em] text-white leading-[1.05]">BREATHE.<br />FOCUS.<br />PERFORM.</h1>
          </div>
          <p className="text-gray-400 max-w-2xl lg:ml-auto">VYTAL Air carries the master brand into a daily performance and breathing-focused expression while preserving the platinum V, matte-black product language, titanium typography, and acid-lime energy signal.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="border border-white/10 bg-black/30 p-2"><img src={MASTER_OS_ASSETS.overview} alt="VYTAL umbrella architecture including VYTAL Air" className="w-full" /></div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-[11px] tracking-[0.3em] text-[#C6FC06] uppercase mb-4">Design Constants</p>
            <h2 className="font-heading font-light text-4xl sm:text-5xl tracking-[0.12em] text-white">ONE VYTAL LANGUAGE.</h2>
            <div className="mt-8 space-y-3 text-xs tracking-[0.16em] uppercase text-gray-300">{['Iridescent platinum V','Obsidian + graphite field','Titanium silver typography','Acid-lime signal accent'].map((item) => <div key={item} className="border-t border-white/10 pt-3 flex gap-3"><span className="text-[#C6FC06]">•</span>{item}</div>)}</div>
          </div>
          <div className="border border-[#C6FC06]/25 bg-[#C6FC06]/[0.025] p-6 text-sm text-gray-400 leading-relaxed"><span className="text-[#C6FC06] text-[10px] tracking-[0.2em] uppercase block mb-3">Verification status</span>Brand architecture is approved. Final product composition, category, regulatory classification, performance claims, directions, warnings, packaging copy, pricing, manufacturing specifications, and launch timing require verification before public sale or clinical representation.</div>
        </div>
      </section>
    </div>
  );
}
