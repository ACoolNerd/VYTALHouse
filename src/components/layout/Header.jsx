import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'HOUSE', path: '/' },
  { label: 'VYTAL AIR', path: '/products/vytal-air' },
  { label: 'VYTAL ARC', path: '/vytal-arc' },
  { label: 'VYTAL ONE', path: '/vytal-one' },
  { label: 'PRODUCTS', path: '/products/pouches' },
  { label: 'MEMBERSHIP', path: '/membership' },
  { label: 'ABOUT', path: '/team' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-[#0B0C0E]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-5">
        <Link to="/" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
          <div className="w-11 h-11 border border-white/15 bg-black flex items-center justify-center overflow-hidden">
            <span className="font-heading text-2xl font-light text-white">V</span>
          </div>
          <div className="min-w-0">
            <span className="block text-white font-heading font-light tracking-[0.28em] text-lg sm:text-xl whitespace-nowrap">VYTAL HOUSE</span>
            <span className="block text-[9px] tracking-[0.24em] text-[#B7BDC6] mt-1 whitespace-nowrap">RENEW <span className="text-[#C6FC06]">•</span> RESTORE <span className="text-[#C6FC06]">•</span> RECHARGE</span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-6" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = item.path === '/' ? pathname === '/' : pathname.startsWith(item.path);
            return <Link key={item.path} to={item.path} className={`relative py-2 text-[10px] tracking-[0.19em] transition ${active ? 'text-white' : 'text-[#B7BDC6] hover:text-white'}`}>{item.label}{active && <span className="absolute left-0 right-0 -bottom-1 h-px bg-[#C6FC06]" />}</Link>;
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <Link to="/contact" className="px-4 py-2.5 border border-[#C6FC06]/55 text-white text-[10px] font-semibold tracking-[0.18em] hover:bg-[#C6FC06] hover:text-black transition">CONTACT</Link>
        </div>

        <button className="xl:hidden text-white p-2 border border-white/10" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-white/10 bg-[#0B0C0E] px-5 py-6">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navItems.map((item) => <Link key={item.path} to={item.path} onClick={() => setOpen(false)} className="py-3 border-b border-white/10 text-xs tracking-[0.2em] text-gray-200">{item.label}</Link>)}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-5 py-3 text-center border border-[#C6FC06] text-[#C6FC06] text-xs tracking-[0.2em]">CONTACT</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
