import React from 'react';
import { MASTER_OS_ASSETS } from '../data/masterSpecData';

export default function VytalOne() {
  return (
    <div className="bg-[#0B0C0E] text-[#B7BDC6] min-h-screen pb-24">
      <section className="pt-20 sm:pt-28 pb-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-[.9fr_1.1fr] gap-10 items-end">
          <div>
            <p className="text-[11px] tracking-[0.3em] text-[#C6FC06] uppercase mb-5">VYTAL ONE • Sub-brand System</p>
            <h1 className="font-heading font-light text-5xl sm:text-7xl tracking-[0.15em] text-white leading-[1.05]">OPTIMIZE.<br />TRACK.<br />ELEVATE.</h1>
          </div>
          <p className="text-gray-400 max-w-2xl lg:ml-auto">VYTAL One is the envisioned all-in-one access point connecting membership, daily guidance, protocols, scores, insights, support, and ecosystem experiences through one consistent interface.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="border border-white/10 bg-black/30 p-2">
            <img src={MASTER_OS_ASSETS.digitalAppEcosystem} alt="VYTAL One digital and membership direction" className="w-full" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-10">
          <div><p className="text-[11px] tracking-[0.3em] text-[#C6FC06] uppercase mb-4">Digital Layer</p><h2 className="font-heading font-light text-4xl sm:text-5xl tracking-[0.12em] text-white">ONE SYSTEM.<br />ONE STANDARD.</h2><p className="mt-6 text-gray-400 leading-relaxed">The brand direction supports a cohesive framework for membership, protocol guidance, analytics, benefits, support, commerce, and connected experiences.</p></div>
          <div className="border border-[#C6FC06]/25 bg-[#C6FC06]/[0.025] p-6 text-sm text-gray-400 leading-relaxed"><span className="text-[#C6FC06] text-[10px] tracking-[0.2em] uppercase block mb-3">Verification status</span>VYTAL One is presented as an approved brand direction and proposed digital product. Scores, biometrics, personalized protocols, connected devices, benefits, and e-commerce functionality remain subject to product, clinical, privacy, security, and operational verification before live production claims.</div>
        </div>
      </section>
    </div>
  );
}
