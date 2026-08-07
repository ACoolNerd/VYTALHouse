import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MASTER_OS_ASSETS } from '../data/masterSpecData';

const brandPillars = ['PRECISE', 'SCIENTIFIC', 'DISCIPLINED', 'ELEVATED', 'ENDURING'];

const ecosystem = [
  { id: '01', name: 'VYTAL AIR', tagline: 'BREATHE • FOCUS • PERFORM', path: '/products/vytal-air', copy: 'The daily performance and breathing-focused extension of the VYTAL master system.' },
  { id: '02', name: 'VYTAL ARC', tagline: 'THERAPY • RECOVERY • LONGEVITY', path: '/vytal-arc', copy: 'The precision recovery expression for therapy, restoration, performance, and longevity.' },
  { id: '03', name: 'VYTAL ONE', tagline: 'OPTIMIZE • TRACK • ELEVATE', path: '/vytal-one', copy: 'The access, membership, protocol, score, insight, and digital layer connecting the ecosystem.' },
];

export default function Home() {
  return (
    <div className="bg-[#0B0C0E] text-[#B7BDC6]">
      <section className="relative min-h-[88vh] flex items-end overflow-hidden border-b border-white/10">
        <img src={MASTER_OS_ASSETS.overview} alt="VYTAL House approved master brand system" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-[#0B0C0E]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/55" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-16 sm:pb-20 pt-32">
          <div className="max-w-4xl space-y-7">
            <p className="text-[11px] sm:text-xs tracking-[0.32em] uppercase text-[#C6FC06] font-semibold">Master Brand System • V1.0</p>
            <h1 className="font-heading font-light text-5xl sm:text-7xl lg:text-8xl tracking-[0.14em] text-white leading-[0.98]">RENEW.<br />RESTORE.<br />RECHARGE.</h1>
            <p className="max-w-3xl text-base sm:text-lg text-gray-300 font-light leading-relaxed">One controlled VYTAL world across the House, VYTAL Air, VYTAL Arc, VYTAL One, products, digital experiences, and environmental design.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#ecosystem" className="inline-flex items-center gap-2 px-6 py-3 border border-[#C6FC06] bg-[#C6FC06] text-black text-xs font-bold tracking-[0.18em] uppercase">Explore Ecosystem <ArrowRight className="w-4 h-4" /></a>
              <Link to="/brand-system" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 bg-black/35 text-white text-xs font-semibold tracking-[0.18em] uppercase hover:border-[#C6FC06] transition">Brand System</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5">
          {brandPillars.map((pillar) => <div key={pillar} className="px-4 py-5 border-r border-b md:border-b-0 border-white/10 text-center text-[10px] sm:text-xs tracking-[0.24em] text-gray-300">{pillar}</div>)}
        </div>
      </section>

      <section id="ecosystem" className="py-24 sm:py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-10">
            <div><p className="text-[11px] tracking-[0.3em] text-[#C6FC06] uppercase mb-4">VYTAL Umbrella</p><h2 className="font-heading font-light text-4xl sm:text-6xl tracking-[0.12em] text-white leading-tight">ONE MASTER SYSTEM.<br />DISTINCT EXPRESSIONS.</h2></div>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl lg:ml-auto">The iridescent platinum V, obsidian environments, titanium typography, acid-lime signal, and disciplined copy hierarchy remain consistent while each sub-brand carries a focused role.</p>
          </div>
          <div className="border border-white/10 bg-black/30 p-2 mb-5"><img src={MASTER_OS_ASSETS.overview} alt="VYTAL umbrella architecture" className="w-full" /></div>
          <div className="grid md:grid-cols-3 gap-4">
            {ecosystem.map((brand) => (
              <Link key={brand.id} to={brand.path} className="group relative min-h-[330px] border border-white/10 bg-[#101216] p-7 hover:border-[#C6FC06]/60 transition overflow-hidden">
                <span className="text-[10px] tracking-[0.25em] text-[#C6FC06]">{brand.id}</span>
                <div className="mt-16"><h3 className="font-heading font-light text-3xl tracking-[0.2em] text-white">{brand.name}</h3><p className="mt-3 text-[10px] sm:text-xs tracking-[0.2em] text-gray-200">{brand.tagline}</p><p className="mt-6 text-sm text-gray-500 leading-relaxed">{brand.copy}</p></div>
                <ArrowRight className="absolute right-6 bottom-6 w-5 h-5 text-[#C6FC06] group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-[1.15fr_.85fr] gap-10 items-center">
          <div className="border border-white/10 bg-black/30 p-2"><img src={MASTER_OS_ASSETS.environmentalSignage} alt="VYTAL House environmental signage and spatial experience" className="w-full" /></div>
          <div className="lg:pl-6"><p className="text-[11px] tracking-[0.3em] text-[#C6FC06] uppercase mb-4">The House</p><h2 className="font-heading font-light text-4xl sm:text-5xl tracking-[0.12em] text-white">BRAND BECOMES SPACE.</h2><p className="mt-6 text-gray-400 leading-relaxed">Black architectural stone, smoked glass, brushed titanium, natural planting, controlled lighting, and iridescent platinum signage form one continuous arrival-to-experience language.</p><div className="mt-8 space-y-3 text-xs tracking-[0.16em] uppercase text-gray-300">{['Reception + arrival','Wayfinding + lounge','Illuminated V monogram','Architectural light + material discipline'].map((item) => <div key={item} className="border-t border-white/10 pt-3 flex gap-3"><span className="text-[#C6FC06]">•</span>{item}</div>)}</div></div>
        </div>
      </section>

      <section className="py-24 sm:py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-[.85fr_1.15fr] gap-10 items-center">
          <div><p className="text-[11px] tracking-[0.3em] text-[#C6FC06] uppercase mb-4">Products + Ritual</p><h2 className="font-heading font-light text-4xl sm:text-5xl tracking-[0.12em] text-white">A SCALABLE PRODUCT FAMILY.</h2><p className="mt-6 text-gray-400 leading-relaxed">Matte black packaging, the platinum V, titanium type, restrained function color-coding, and the same visual hierarchy across pouches, bottles, kits, membership, and shipping.</p><Link to="/products/pouches" className="inline-flex mt-8 items-center gap-2 px-5 py-3 border border-[#C6FC06]/60 text-white text-xs tracking-[0.18em] uppercase hover:bg-[#C6FC06] hover:text-black transition">View Products <ArrowRight className="w-4 h-4" /></Link></div>
          <div className="border border-white/10 bg-black/30 p-2"><img src={MASTER_OS_ASSETS.productPackaging} alt="VYTAL House product packaging system" className="w-full" /></div>
        </div>
      </section>

      <section className="py-24 sm:py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-10"><div><p className="text-[11px] tracking-[0.3em] text-[#C6FC06] uppercase mb-4">Digital System</p><h2 className="font-heading font-light text-4xl sm:text-6xl tracking-[0.12em] text-white">THE SAME LANGUAGE<br />ON EVERY SCREEN.</h2></div><p className="text-gray-400">Desktop, mobile, membership, app dashboards, navigation, cards, CTAs, and utility icons use the same obsidian, titanium, prism-silver, and signal-lime hierarchy.</p></div>
          <div className="border border-white/10 bg-black/30 p-2"><img src={MASTER_OS_ASSETS.digitalAppEcosystem} alt="VYTAL House digital and app ecosystem" className="w-full" /></div>
        </div>
      </section>

      <section className="py-24 sm:py-28 text-center"><div className="max-w-5xl mx-auto px-5"><p className="font-heading font-light text-3xl sm:text-5xl tracking-[0.13em] text-white leading-snug">DAILY ADVANTAGES THAT COMPOUND FOR A LIFETIME.</p><p className="mt-7 text-[11px] tracking-[0.32em] text-[#C6FC06] uppercase">Science • Discipline • Longevity</p></div></section>
    </div>
  );
}
