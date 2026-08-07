import React from 'react';
import { MASTER_OS_ASSETS } from '../data/masterSpecData';

export default function VytalArc() {
  return (
    <div className="bg-[#0B0C0E] text-[#B7BDC6] min-h-screen pb-24">
      <section className="pt-20 sm:pt-28 pb-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-[.9fr_1.1fr] gap-10 items-end">
          <div>
            <p className="text-[11px] tracking-[0.3em] text-[#C6FC06] uppercase mb-5">VYTAL ARC • Sub-brand System</p>
            <h1 className="font-heading font-light text-5xl sm:text-7xl tracking-[0.15em] text-white leading-[1.05]">THERAPY.<br />RECOVERY.<br />LONGEVITY.</h1>
          </div>
          <p className="text-gray-400 max-w-2xl lg:ml-auto">VYTAL Arc is the precision recovery expression inside the VYTAL ecosystem. It inherits the approved platinum V, obsidian field, titanium type, and acid-lime signal hierarchy.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="border border-white/10 bg-black/30 p-2">
            <img src="/assets/brand/master-os/10-vytal-arc-sub-brand.png" onError={(e) => { e.currentTarget.src = MASTER_OS_ASSETS.overview; }} alt="VYTAL Arc approved brand direction" className="w-full" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-10">
          <div><p className="text-[11px] tracking-[0.3em] text-[#C6FC06] uppercase mb-4">Positioning</p><h2 className="font-heading font-light text-4xl sm:text-5xl tracking-[0.12em] text-white">PRECISION RECOVERY.</h2><p className="mt-6 text-gray-400 leading-relaxed">The approved positioning communicates restoration, recovery, performance, and longevity without separating Arc from the master VYTAL visual system.</p></div>
          <div className="border border-[#C6FC06]/25 bg-[#C6FC06]/[0.025] p-6 text-sm text-gray-400 leading-relaxed"><span className="text-[#C6FC06] text-[10px] tracking-[0.2em] uppercase block mb-3">Verification status</span>Brand direction is approved. Hardware specifications, modalities, biometric capabilities, medical use, performance claims, pricing, and commercial availability remain subject to technical, clinical, legal, and regulatory verification before live claims.</div>
        </div>
      </section>
    </div>
  );
}
