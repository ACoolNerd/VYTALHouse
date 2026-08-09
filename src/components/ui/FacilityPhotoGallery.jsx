import React from 'react';
import { Sparkles, ShieldCheck, Stethoscope, Activity, Heart, Flame } from 'lucide-react';

export default function FacilityPhotoGallery() {
  const galleryItems = [
    {
      title: "SOCIAL ICE PLUNGE CONTRAST SUITE",
      category: "THERMAL CONTRAST RITUAL",
      description: "Sub-45°F cold plunge immersion tubs engineered for deep neural regulation, mitochondrial biogenesis, and guided breathwork.",
      img: "/images/house/thermal-contrast-plunge-suite.png",
      badge: "MSO Facility",
      tagColor: "border-[#C6FC06] text-[#C6FC06]"
    },
    {
      title: "CLINICAL IV CELLULAR RECHARGE LOUNGE",
      category: "PHYSICIAN MEDICAL SERVICES",
      description: "Custom NAD+ cellular infusions, high-dose antioxidant matrixes, and hydration drips under Dr. Abasi Bomani, MD medical authority.",
      img: "/images/house/physician-diagnostic-suite.png",
      badge: "PC Medical Service",
      tagColor: "border-sky-500 text-sky-400"
    },
    {
      title: "MEMBER LOUNGE & HYDRATION BAR",
      category: "SOCIAL WELLNESS LOUNGE",
      description: "Adaptogenic tea service, soft-touch seating, and acoustic entrainment lighting surrounding our signature dark stone water wall.",
      img: "/images/house/member-lounge-hydration-bar.png",
      badge: "MSO Lounge",
      tagColor: "border-[#B7BDC6] text-[#B7BDC6]"
    },
    {
      title: "HYPERBARIC OXYGEN CHAMBER BAY",
      category: "CELLULAR RECOVERY",
      description: "Pressurized 100% cellular oxygen therapy chambers promoting systemic anti-inflammatory signaling and micro-vascular repair.",
      img: "/images/house/hyperbaric-pemf-bay.png",
      badge: "MSO Tech Bay",
      tagColor: "border-purple-500 text-purple-400"
    },
    {
      title: "INFRARED HYPERTHERMIC SAUNA SUITE",
      category: "THERMAL RITUAL",
      description: "Full-spectrum infrared heat chambers promoting cellular detox, heat shock protein expression, and cardiovascular vasodilation.",
      img: "/images/house/infrared-sauna.png",
      badge: "MSO Thermal",
      tagColor: "border-amber-500 text-amber-400"
    },
    {
      title: "WHOLE-BODY CRYO ADAPTATION CHAMBER",
      category: "CLINICAL DIAGNOSTICS & CRYOTHERAPY",
      description: "Sub-zero cold vapor chamber providing rapid neuro-vascular constriction and metabolic activation.",
      img: "/images/house/cryotherapy-chamber.png",
      badge: "MSO Cryo Suite",
      tagColor: "border-sky-500 text-sky-400"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
            ARCHITECTURAL & ATMOSPHERIC SHOWCASE
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1 font-heading">
            VYTAL HOUSE ATMOSPHERE & RESTORATION ROOMS
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Explore our physician-led clinical suites, social contrast plunge tubs, and advanced recovery tech.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059]">
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
          <span>High-Impact Visual Architecture</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {galleryItems.map((item) => (
          <div 
            key={item.title} 
            className="group relative rounded-2xl overflow-hidden glass-panel border border-[#232D40] hover:border-[#C5A059]/60 transition duration-500 flex flex-col h-[460px]"
          >
            {/* Image Layer */}
            <div className="relative h-3/5 overflow-hidden">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700 filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent" />
              <span className={`absolute top-4 left-4 text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#0B0F17]/80 backdrop-blur-md border ${item.tagColor}`}>
                {item.badge}
              </span>
            </div>

            {/* Content Layer */}
            <div className="p-6 flex-1 flex flex-col justify-between bg-[#0B0F17]">
              <div>
                <span className="text-[10px] font-mono text-gray-400 tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 className="font-bold text-lg text-white font-heading leading-tight group-hover:text-[#C5A059] transition">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#232D40] flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span>VYTAL HOUSE • MARYLAND</span>
                <span className="text-[#C5A059] font-bold">CPOM Segregated</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
