import React from 'react';
import { Link } from 'react-router-dom';

const ecosystemLinks = [
  ['VYTAL Air', '/products/vytal-air'],
  ['VYTAL Arc', '/vytal-arc'],
  ['VYTAL One', '/vytal-one'],
  ['Products', '/products/pouches'],
];

const companyLinks = [
  ['Membership', '/membership'],
  ['About', '/team'],
  ['Contact', '/contact'],
  ['Journal', '/journal'],
];

export default function Footer() {
  return (
    <footer className="bg-[#07080A] border-t border-white/10 text-[#8F949D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-14 pb-8">
        <div className="grid md:grid-cols-[1.4fr_.6fr_.6fr] gap-10 pb-12">
          <div>
            <div className="text-white font-heading font-light tracking-[0.28em] text-xl">VYTAL HOUSE</div>
            <div className="mt-2 text-[10px] tracking-[0.22em]">RENEW <span className="text-[#C6FC06]">•</span> RESTORE <span className="text-[#C6FC06]">•</span> RECHARGE</div>
            <p className="mt-6 max-w-xl text-sm leading-relaxed">At the intersection of science, discipline, and longevity. VYTAL House is a unified ecosystem across physical experience, recovery, products, digital access, and membership.</p>
          </div>

          <div>
            <h4 className="text-white text-[10px] tracking-[0.22em] mb-4">ECOSYSTEM</h4>
            <div className="space-y-2 text-xs">{ecosystemLinks.map(([label, path]) => <Link key={path} to={path} className="block hover:text-[#C6FC06] transition">{label}</Link>)}</div>
          </div>

          <div>
            <h4 className="text-white text-[10px] tracking-[0.22em] mb-4">EXPLORE</h4>
            <div className="space-y-2 text-xs">{companyLinks.map(([label, path]) => <Link key={path} to={path} className="block hover:text-[#C6FC06] transition">{label}</Link>)}</div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col lg:flex-row gap-4 justify-between text-[10px] tracking-[0.12em] uppercase">
          <span>© 2026 VYTAL House. All rights reserved.</span>
          <span>Precise <span className="text-[#C6FC06]">•</span> Scientific <span className="text-[#C6FC06]">•</span> Disciplined <span className="text-[#C6FC06]">•</span> Elevated <span className="text-[#C6FC06]">•</span> Enduring</span>
          <span className="max-w-xl normal-case tracking-normal">Product, pricing, clinical, regulatory, biometric, and commerce details remain subject to final verification before live public claims.</span>
        </div>
      </div>
    </footer>
  );
}
