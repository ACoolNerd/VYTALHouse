import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Zap, Droplets, Activity, ArrowRight, CheckCircle2, Package, Info, AlertCircle, ShoppingBag, Layers, Eye } from 'lucide-react';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import { BRAND_SUBTAGLINE, PRISM_ASSETS } from '../data/masterSpecData';

export default function VytalPouches() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [preorderModalOpen, setPreorderModalOpen] = useState(false);
  const [activeVisualMode, setActiveVisualMode] = useState('standalone'); // 'standalone' vs 'trio'

  const products = [
    {
      id: 'energy',
      name: 'VYTAL Energy + Drive',
      tagline: 'ENERGIZE & FOCUS',
      flavor: 'Sour Soursop Lime',
      color: 'from-amber-500/20 to-amber-900/10',
      borderColor: 'border-[#C6FC06]/40',
      badgeColor: 'text-[#C6FC06] bg-[#C6FC06]/10 border-[#C6FC06]/30',
      img: '/assets/pouches/vytal-tin-energy.png',
      standaloneImg: '/assets/pouches/vytal-tin-energy.png',
      accentColor: '#C6FC06',
      desc: 'Bright, clean energy oral pouch formulation engineered for sustained cognitive drive and physical stamina without jitters.',
      ingredients: ['Natural Soursop Extract', 'Sour Lime Zest', 'Organic Green Coffee Bean Caffeine (50mg)', 'L-Theanine', 'Electrolyte Complex'],
      specs: '30 Pouches per Reusable Aluminum Tin • Zero Tobacco • Zero Nicotine'
    },
    {
      id: 'tidal',
      name: 'VYTAL Tidal',
      tagline: 'FLOW & MINERAL HYDRATION',
      flavor: 'Sea Moss Cucumber Lime',
      color: 'from-emerald-500/20 to-teal-900/10',
      borderColor: 'border-[#00F0FF]/40',
      badgeColor: 'text-[#00F0FF] bg-[#00F0FF]/10 border-[#00F0FF]/30',
      img: '/assets/pouches/vytal-tin-tidal.png',
      standaloneImg: '/assets/pouches/vytal-tin-tidal.png',
      accentColor: '#00F0FF',
      desc: 'Nourishing botanical blend combining wildcrafted sea moss, crisp cucumber, and key lime for ocean mineral hydration.',
      ingredients: ['Wildcrafted St. Lucia Sea Moss', 'Crisp Cucumber Essence', 'Key Lime Extract', 'Trace Sea Minerals', 'Magnesium Glycinate'],
      specs: '30 Pouches per Reusable Aluminum Tin • Zero Tobacco • Zero Nicotine'
    },
    {
      id: 'nad-support',
      name: 'VYTAL NAD+ Support',
      tagline: 'CELLULAR LONGEVITY',
      flavor: 'Blue Soursop Yuzu',
      color: 'from-sky-500/20 to-blue-900/10',
      borderColor: 'border-[#CDB8FF]/40',
      badgeColor: 'text-[#CDB8FF] bg-[#CDB8FF]/10 border-[#CDB8FF]/30',
      img: '/assets/pouches/vytal-tin-nad.png',
      standaloneImg: '/assets/pouches/vytal-tin-nad.png',
      accentColor: '#CDB8FF',
      desc: 'Next-generation sublingual pouch delivering NAD+ precursors and botanical antioxidants for mitochondrial longevity.',
      ingredients: ['Nicotinamide Mononucleotide (NMN)', 'Blue Soursop Extract', 'Japanese Yuzu Citrus', 'Trans-Resveratrol', 'Vitamin B-Complex'],
      specs: '30 Pouches per Reusable Aluminum Tin • Zero Tobacco • Zero Nicotine'
    },
    {
      id: 'starter-kit',
      name: 'VYTAL Starter Kit Box',
      tagline: 'MASTER RITUAL UNBOXING',
      flavor: 'Complete Performance System',
      color: 'from-purple-500/20 to-slate-900/10',
      borderColor: 'border-[#B7BDC6]/40',
      badgeColor: 'text-white bg-slate-800/60 border-slate-700',
      img: '/assets/pouches/vytal-starter-kit.png',
      standaloneImg: '/assets/pouches/vytal-starter-kit.png',
      accentColor: '#B7BDC6',
      desc: 'Soft-touch matte-black presentation box containing 1 CNC Permanent Tin, 2 Refill Packs (60 Pouches), and 1 Matte Black Hydration Flask.',
      ingredients: ['1 CNC Machined Aluminum Can', '60 Total Sublingual Pouches', '1 Stainless Hydration Flask', 'Custom Molded Foam Insert'],
      specs: 'Rigid Presentation Unboxing Box • Refill & Reuse Protocol'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F17] text-gray-100 font-sans pb-24">
      {/* Hero Section with Official Design System Monogram */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-[#232D40] bg-gradient-to-b from-[#111827] via-[#0B0F17] to-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-amber-500/10 border border-amber-500/30 text-[#C5A059]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MSO RETAIL INNOVATION LINE</span>
                </div>
                <span className="text-xs font-mono font-bold text-[#C5A059] tracking-widest border border-[#C5A059]/40 px-3 py-1 rounded-full bg-[#1A2234]">
                  {BRAND_SUBTAGLINE}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#1E293B] to-[#0F172A] border border-[#C5A059] flex items-center justify-center shadow-gold-glow">
                    <span className="font-heading font-black text-sm text-[#C5A059] tracking-tighter">VH</span>
                  </div>
                  <span className="font-heading font-extrabold text-2xl text-gray-300">VYTAL HOUSE BRAND SYSTEM</span>
                </div>

                <h1 className="font-heading font-black text-4xl sm:text-6xl tracking-tight text-white leading-tight">
                  VYTAL <span className="text-[#C5A059]">POUCHES</span>
                </h1>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Sublingual functional pouches engineered in three targeted formulations — <strong>VYTAL Energy</strong>, <strong>VYTAL Tidal</strong>, and <strong>VYTAL NAD Support</strong>. Delivered in sleek matte-black aluminum tins featuring thin neon accent rings and the metallic V monogram.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setPreorderModalOpen(true)}
                  className="px-6 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-[#C5A059] text-black hover:bg-[#E6C687] transition shadow-gold-glow flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>REQUEST EARLY ACCESS PILOT</span>
                </button>
                <a
                  href="#products"
                  className="px-6 py-3 rounded-xl text-xs font-mono font-semibold tracking-wider border border-gray-700 hover:border-gray-500 text-gray-300 transition flex items-center gap-2"
                >
                  <span>EXPLORE THE LINE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-800 text-xs font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Matte-Black Tins</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>15 Pouches / Can</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero Tobacco / Nicotine</span>
                </div>
              </div>
            </div>

            {/* Trio Hero Visual with Standalone Switcher */}
            <div className="relative flex flex-col justify-center items-center gap-4">
              <div className="absolute w-80 h-80 rounded-full bg-[#C5A059]/10 blur-3xl -z-10 animate-pulse"></div>

              {/* View Switcher */}
              <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#131A26] border border-gray-800 text-xs font-mono">
                <button
                  onClick={() => setActiveVisualMode('standalone')}
                  className={`px-3 py-1.5 rounded-lg transition font-bold ${
                    activeVisualMode === 'standalone'
                      ? 'bg-[#C5A059] text-black shadow'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  STANDALONE TINS
                </button>
                <button
                  onClick={() => setActiveVisualMode('trio')}
                  className={`px-3 py-1.5 rounded-lg transition font-bold ${
                    activeVisualMode === 'trio'
                      ? 'bg-[#C5A059] text-black shadow'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  TRIO COLLECTION
                </button>
              </div>

              <div className="p-6 rounded-3xl bg-[#131A26]/80 border border-[#C5A059]/30 shadow-2xl backdrop-blur-sm group hover:border-[#C5A059]/60 transition-all duration-300 w-full max-w-md flex flex-col items-center">
                {activeVisualMode === 'trio' ? (
                  <img
                    src="/assets/pouches/vytal-trio.png"
                    alt="VYTAL Pouches Collection — Energy, Tidal, NAD Support"
                    className="w-full h-72 object-contain transition transform group-hover:scale-105 duration-500"
                  />
                ) : (
                  <div className="grid grid-cols-2 gap-4 w-full py-4 items-center justify-items-center">
                    <img
                      src="/assets/pouches/vytal-tidal-tin.png"
                      alt="VYTAL Tidal Tin"
                      className="h-44 w-auto object-contain transition transform hover:scale-105"
                    />
                    <img
                      src="/assets/pouches/vytal-nad-support-tin.png"
                      alt="VYTAL NAD Support Tin"
                      className="h-44 w-auto object-contain transition transform hover:scale-105"
                    />
                  </div>
                )}

                <div className="text-center pt-3 pb-1 border-t border-gray-800/80 w-full">
                  <span className="text-[11px] font-mono tracking-widest text-[#C5A059] uppercase font-bold">
                    VYTAL POUCH SYSTEM • MATTE-BLACK EDITION
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Ritual Sequence Strip */}
      <section className="py-8 bg-[#0F1522] border-b border-[#232D40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-[#C5A059]" />
              <span className="font-heading font-bold text-sm text-white tracking-widest uppercase">
                THE VYTAL POUCH RITUAL SEQUENCE ({BRAND_SUBTAGLINE})
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto text-xs font-mono">
              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/20 flex items-center gap-3 accent-ring-gold">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-amber-400 font-bold block">01 MORNING • ENERGIZE</span>
                  <span className="text-gray-400 text-[11px]">Soursop Lime</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 flex items-center gap-3 accent-ring-lime">
                <Droplets className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-emerald-400 font-bold block">02 MID-DAY • FLOW</span>
                  <span className="text-gray-400 text-[11px]">Sea Moss Cucumber Lime</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-sky-950/30 border border-sky-500/20 flex items-center gap-3 accent-ring-sky">
                <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <span className="text-sky-400 font-bold block">03 EVENING • BASELINE</span>
                  <span className="text-gray-400 text-[11px]">Blue Soursop Yuzu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Product Portfolio */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
              Three Formulations. One System.
            </h2>
            <p className="text-gray-400 text-sm">
              Each pouch is formulated with clean ingredients, natural botanical essences, and zero fillers. Designed for direct sublingual release in matte-black tin packaging.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <div
                key={p.id}
                className={`rounded-2xl p-6 bg-gradient-to-b ${p.color} border ${p.borderColor} flex flex-col justify-between space-y-6 hover:border-[#C5A059] transition duration-300 relative group shadow-lg`}
              >
                {/* Product Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase border ${p.badgeColor}`}>
                      {p.tagline}
                    </span>
                    <PlaceholderBadge text="RETAIL MSO" />
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl text-white">{p.name}</h3>
                  <p className="text-xs font-mono text-[#C5A059] font-semibold">{p.flavor}</p>
                </div>

                {/* Product Image Showcase */}
                <div className="relative py-4 flex justify-center items-center bg-[#080B11]/80 rounded-xl border border-gray-800/80">
                  <img
                    src={p.standaloneImg}
                    alt={p.name}
                    className="h-56 w-auto object-contain transition duration-300 group-hover:scale-105 drop-shadow-2xl"
                  />
                </div>

                {/* Description & Ingredients */}
                <div className="space-y-4 text-xs font-mono">
                  <p className="text-gray-300 font-sans leading-relaxed text-xs">{p.desc}</p>

                  <div className="space-y-2 pt-2 border-t border-gray-800">
                    <span className="text-gray-400 text-[11px] font-bold block uppercase tracking-wider">Key Ingredients:</span>
                    <ul className="space-y-1 text-gray-300">
                      {p.ingredients.map((ing, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.accentColor }}></span>
                          <span>{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-400 text-[10px]">{p.specs}</span>
                  <button
                    onClick={() => {
                      setSelectedProduct(p);
                      setPreorderModalOpen(true);
                    }}
                    className="px-3.5 py-2 rounded-lg bg-[#C5A059]/20 hover:bg-[#C5A059] text-[#C5A059] hover:text-black font-bold border border-[#C5A059]/40 transition"
                  >
                    REQUEST ACCESS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CPOM & Legal Governance Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-6 rounded-2xl bg-[#0F1522] border border-[#232D40] space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase">
              MSO RETAIL PRODUCT GOVERNANCE & CLAIMS DISCLAIMER
            </h4>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed font-mono">
            VYTAL Pouches are oral wellness retail consumer items commercialized exclusively by <strong>VYTAL HOUSE MANAGEMENT, LLC (MSO)</strong> ⚑. They are dietary supplements and non-nicotine botanical oral pouches. They do not constitute medical treatments, prescriptions, or clinical procedures provided by VYTAL HOUSE MEDICAL, P.C. ⚑.
          </p>
        </div>
      </section>

      {/* Pre-Order Pilot Modal */}
      {preorderModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0B0F17] border border-[#C5A059]/50 rounded-2xl max-w-lg w-full p-6 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setPreorderModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-sm font-mono"
            >
              ✕
            </button>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-wider">
                  FOUNDERS PILOT EARLY ACCESS
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-xl text-white">
                Request Early Access: {selectedProduct ? selectedProduct.name : 'VYTAL Pouches Line'}
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                Join the exclusive pilot list for VYTAL Pouches first production run.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-start gap-2 text-xs font-mono text-amber-300">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>⚑ [TODO: Decision Pending] Launch pricing and distribution dates for VYTAL Pouches are currently pending final MSO partner sign-off.</span>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your interest in VYTAL Pouches has been recorded."); setPreorderModalOpen(false); }} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-gray-300 mb-1">FULL NAME</label>
                <input required type="text" placeholder="John Doe" className="w-full bg-[#131A26] border border-gray-700 rounded-lg p-2.5 text-white focus:border-[#C5A059] focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">EMAIL ADDRESS</label>
                <input required type="email" placeholder="john@example.com" className="w-full bg-[#131A26] border border-gray-700 rounded-lg p-2.5 text-white focus:border-[#C5A059] focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">PREFERRED FORMULATION</label>
                <select className="w-full bg-[#131A26] border border-gray-700 rounded-lg p-2.5 text-white focus:border-[#C5A059] focus:outline-none">
                  <option>VYTAL Trio Collection (All 3 Flavors)</option>
                  <option>VYTAL Energy (Soursop Lime)</option>
                  <option>VYTAL Tidal (Sea Moss Cucumber Lime)</option>
                  <option>VYTAL NAD Support (Blue Soursop Yuzu)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-[#C5A059] text-black hover:bg-[#E6C687] transition shadow-gold-glow"
              >
                SUBMIT PILOT REQUEST
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
