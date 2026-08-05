import Link from "next/link";
import { ArrowRight, Check, Cloud, Cpu, Gauge, ShieldCheck, Smartphone, Wind } from "lucide-react";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { Nav } from "@/components/Nav";

const modes = [
  {
    name: "Focus",
    description: "A guided experience concept for moments that call for intention, clarity, and a deliberate pause.",
    icon: Gauge,
  },
  {
    name: "Reset",
    description: "A calming ritual concept designed around breath, environment, and simple user-confirmed guidance.",
    icon: Wind,
  },
  {
    name: "Restore",
    description: "A recovery-oriented concept that may complement the broader VYTAL member journey after validation.",
    icon: Cloud,
  },
];

const platform = [
  ["VYTAL Air Device", "Premium reusable hardware with controlled delivery, status indication, lockouts, and traceability."],
  ["Sealed Air Cartridges", "Single-purpose, batch-traceable consumables developed only with qualified formulation and manufacturing partners."],
  ["VYTAL Guidance", "A future digital layer for approved instructions, user confirmation, replenishment, and usage records."],
];

const gates = [
  "Determine the final product category and regulatory pathway before public claims or sales.",
  "Complete formulation, materials, toxicology, emissions, stability, and human-factors review as applicable.",
  "Use child-resistant, tamper-evident, batch-traceable packaging and responsible age gating where required.",
  "Do not position the concept as diagnosing, treating, curing, or preventing disease.",
  "Keep commerce, subscriptions, and member recommendations disabled until the approval stack is complete.",
];

export const metadata = {
  title: "VYTAL Air | VYTAL House",
  description: "Explore the VYTAL Air connected inhalation-platform concept and its responsible development roadmap.",
};

export default function VytalAirPage() {
  return (
    <main className="page-shell public-site product-page air-page">
      <Nav />

      <section className="product-hero air-hero">
        <div>
          <p className="eyebrow">VYTAL Air • Connected breath ritual concept</p>
          <h1>A more intentional way to <span>pause.</span></h1>
          <p className="hero-copy">VYTAL Air is a premium inhalation-platform concept exploring controlled delivery, sealed consumables, guided user confirmation, and a connected wellness ritual within the VYTAL ecosystem.</p>
          <div className="hero-actions">
            <Link className="pill-button primary" href="#air-platform">Explore the platform <ArrowRight size={16} /></Link>
            <Link className="pill-button" href="#air-founders">Join concept updates</Link>
          </div>
          <p className="micro-notice prominent">Development concept only. No therapeutic claims, approved formulations, or commercial availability are represented.</p>
        </div>

        <div className="air-device-stage" aria-label="VYTAL Air device concept graphic">
          <div className="air-halo halo-one" />
          <div className="air-halo halo-two" />
          <div className="air-device">
            <div className="air-mouthpiece" />
            <div className="air-display"><Wind size={22} /><span>READY</span></div>
            <div className="air-mark">V</div>
            <small>VYTAL AIR</small>
            <div className="air-light" />
          </div>
          <div className="air-cartridge"><span>RESET</span></div>
        </div>
      </section>

      <section className="section">
        <div className="section-head editorial-head">
          <div>
            <p className="eyebrow">Experience architecture</p>
            <h2>Three guided modes. One disciplined platform.</h2>
          </div>
          <p className="muted section-intro">The experience language can be developed now while technical, scientific, regulatory, and manufacturing questions remain clearly gated.</p>
        </div>
        <div className="air-mode-grid">
          {modes.map((mode) => {
            const Icon = mode.icon;
            return (
              <article className="air-mode-card" key={mode.name}>
                <Icon size={26} />
                <h3>{mode.name}</h3>
                <p className="muted">{mode.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section air-platform" id="air-platform">
        <div className="platform-visual">
          <div className="platform-center"><span>V</span><strong>VYTAL AIR</strong></div>
          <div className="platform-node node-device"><Wind size={20} />DEVICE</div>
          <div className="platform-node node-cartridge"><Cpu size={20} />CARTRIDGE</div>
          <div className="platform-node node-guidance"><Smartphone size={20} />GUIDANCE</div>
          <div className="platform-line line-a" />
          <div className="platform-line line-b" />
          <div className="platform-line line-c" />
        </div>
        <div>
          <p className="eyebrow">Connected by design</p>
          <h2>Hardware, consumables, and guidance developed as one system.</h2>
          <div className="platform-list">
            {platform.map(([title, description]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p className="muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section air-safety">
        <div>
          <p className="eyebrow">Development responsibility</p>
          <h2>The safety and regulatory pathway comes before launch.</h2>
          <p className="muted">VYTAL Air should move through documented stage gates from concept and intellectual-property review to engineering validation, formulation evidence, compliance, pilot testing, and only then controlled commercialization.</p>
          <div className="standards-list">
            {gates.map((gate) => <p key={gate}><Check size={17} />{gate}</p>)}
          </div>
        </div>
        <div className="safety-seal">
          <ShieldCheck size={42} />
          <span>VYTAL AIR</span>
          <strong>VALIDATE BEFORE ACTIVATION</strong>
          <small>Rights • Disclosure • Proof</small>
        </div>
      </section>

      <section className="section founder-section" id="air-founders">
        <div className="founder-copy">
          <p className="eyebrow">VYTAL Air development list</p>
          <h2>Follow the concept from validation to pilot.</h2>
          <p className="muted">Receive approved development updates, concept reveals, pilot milestones, and future partner or founders opportunities.</p>
        </div>
        <LeadForm />
      </section>

      <Footer />
    </main>
  );
}
