import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles, TimerReset } from "lucide-react";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { Nav } from "@/components/Nav";
import { brand, membershipRecords, monthlyMembershipRevenue, serviceRecords } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="page-shell">
      <Nav />
      <section className="hero">
        <div>
          <p className="eyebrow">Maryland recovery and wellness club</p>
          <h1>{brand.name}</h1>
          <p className="hero-copy">{brand.description}</p>
          <div className="hero-actions">
            <a className="pill-button primary" href="#waitlist">Join waitlist <ArrowRight size={16} /></a>
            <a className="pill-button" href="/facility">View facility plan</a>
          </div>
        </div>
        <div className="hero-panel">
          <Image src="/images/vytal-floor-plan.png" alt="VYTAL House conceptual floor plan" width={1000} height={563} priority />
        </div>
      </section>
      <section className="section">
        <div className="grid">
          <div className="card"><Sparkles /><h3>Spacecraft ambience</h3><p className="muted">Dark cinematic lounges, crisp typography, chrome textures, warm gold, and therapy-specific glow.</p></div>
          <div className="card"><TimerReset /><h3>Recurring recovery</h3><p className="muted">Core, Elite, and Black membership tiers are modeled for $179,700 in monthly membership revenue at target mix.</p></div>
          <div className="card"><ShieldCheck /><h3>Governed launch</h3><p className="muted">No live medical intake, payments, vendor sends, or external workspace changes before approval.</p></div>
        </div>
      </section>
      <section className="section">
        <div className="section-head">
          <h2>Therapy System</h2>
          <p className="muted">Service lanes are source-backed and marked for clinical review before live launch.</p>
        </div>
        <div className="grid">
          {serviceRecords.slice(0, 6).map((service) => (
            <article className="card" key={service.id}>
              <h3>{service.name}</h3>
              <p className="muted">{service.metadata.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-head">
          <h2>Membership Model</h2>
          <p className="stat">${monthlyMembershipRevenue.toLocaleString()}/mo</p>
        </div>
        <div className="grid">
          {membershipRecords.map((tier) => (
            <article className="card" key={tier.id}>
              <p className="eyebrow">{tier.name}</p>
              <div className="stat">${tier.metadata.monthlyPrice}</div>
              <p className="muted">{tier.metadata.benefits}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section" id="waitlist">
        <div className="section-head">
          <h2>Founder Waitlist</h2>
          <p className="muted">Prototype captures interest only. It does not collect protected health information or process payments.</p>
        </div>
        <LeadForm />
      </section>
      <Footer />
    </main>
  );
}
