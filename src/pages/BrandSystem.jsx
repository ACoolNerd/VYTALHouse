import React from 'react';
import VytalBrandSystem from '../components/ui/VytalBrandSystem';
import { MASTER_OS_ASSETS } from '../data/masterSpecData';

const gallery = [
  ['Logo Standards', MASTER_OS_ASSETS.logoStandards],
  ['Color + Typography', MASTER_OS_ASSETS.colorTypography],
  ['Icon Library', MASTER_OS_ASSETS.iconLibrary],
  ['Product Packaging', MASTER_OS_ASSETS.productPackaging],
  ['Digital + App', MASTER_OS_ASSETS.digitalAppEcosystem],
  ['Environmental Signage', MASTER_OS_ASSETS.environmentalSignage],
  ['01 / Pouch Collection Board', '/assets/brand/master-os/pouches-boards/01-pouch-collection-board.jpg'],
  ['02 / Refill Pouch Lineup', '/assets/brand/master-os/pouches-boards/02-refill-pouch-lineup.jpg'],
  ['03 / Master Brand System', '/assets/brand/master-os/pouches-boards/03-master-brand-system.jpg'],
  ['04 / Canisters & Tins Showcase', '/assets/brand/master-os/pouches-boards/04-canisters-tins-showcase.jpg'],
  ['05 / Master Pouch Ecosystem', '/assets/brand/master-os/pouches-boards/05-master-pouch-ecosystem.jpg'],
  ['06 / System At A Glance', '/assets/brand/master-os/pouches-boards/06-system-at-a-glance.jpg'],
  ['07 / Functional Experiences Anatomy', '/assets/brand/master-os/pouches-boards/07-functional-experiences-anatomy.jpg'],
  ['08 / Botanical Energy & Performance', '/assets/brand/master-os/pouches-boards/08-botanical-energy-performance.jpg'],
  ['09 / Powered By Nature & Science', '/assets/brand/master-os/pouches-boards/09-powered-by-nature-science.jpg'],
  ['10 / Flagship Variety Pack & Retail Display', '/assets/brand/master-os/pouches-boards/10-flagship-variety-pack-display.jpg'],
];

export default function BrandSystem() {
  return (
    <div className="bg-[#0B0C0E] text-[#B7BDC6] min-h-screen">
      <section className="pt-20 sm:pt-28 pb-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-10 items-end">
          <div><p className="text-[11px] tracking-[0.3em] text-[#C6FC06] uppercase mb-5">Master Brand System • V1.0</p><h1 className="font-heading font-light text-5xl sm:text-7xl tracking-[0.15em] text-white leading-[1.05]">CONTROLLED.<br />CONSISTENT.<br />SCALABLE.</h1></div>
          <p className="text-gray-400 max-w-2xl lg:ml-auto">The VYTAL House system governs logo use, color, material, typography, icons, digital surfaces, packaging, environmental signage, and the architecture of every VYTAL extension.</p>
        </div>
      </section>

      <section className="py-14 border-b border-white/10"><div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10"><div className="border border-white/10 bg-black/30 p-2"><img src={MASTER_OS_ASSETS.brandBookCover} alt="VYTAL House brand book" className="w-full" /></div></div></section>

      <VytalBrandSystem />

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-5">
            {gallery.map(([title, image]) => <figure key={title} className="m-0 border border-white/10 bg-black/30 p-2"><img src={image} alt={`VYTAL House ${title}`} className="w-full" /><figcaption className="px-2 py-4 text-[10px] tracking-[0.22em] uppercase text-gray-300">{title}</figcaption></figure>)}
          </div>
        </div>
      </section>
    </div>
  );
}
