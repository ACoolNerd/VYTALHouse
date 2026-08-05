import Link from "next/link";
import { ArrowRight, Check, Leaf, ShieldCheck, Sparkles, Waves } from "lucide-react";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { Nav } from "@/components/Nav";

const products = [
  {
    name: "VYTAL Energy",
    flavor: "Soursop Lime",
    mode: "Energize",
    description: "A bright botanical concept designed for an upbeat, portable VYTAL ritual.",
    accent: "lime",
    icon: Sparkles,
  },
  {
    name: "VYTAL Tidal",
    flavor: "Sea Moss • Cucumber • Lime",
    mode: "Flow",
    description: "A cool, spa-inspired concept aligned with the restorative side of the VYTAL brand.",
    accent: "aqua",
    icon: Waves,
  },
  {
    name: "VYTAL NAD Support",
    flavor: "Blue Soursop • Yuzu",
    mode: "Baseline",
    description: "A refined daily-support concept that remains subject to formulation and regulatory review.",
    accent: "blue",
    icon: Leaf,
  },
];

const standards = [
  "Final ingredients, serving size, category, and claims require specialist review.",
  "No product should imply diagnosis, treatment, cure, or disease prevention.",
  "Packaging must include approved directions, warnings, traceability, and testing information.",
  "Public sales stay disabled until formulation, manufacturing, labeling, and legal gates are cleared.",
];

export const metadata = {
  title: "VYTAL Pouches | VYTAL House",
  description: "Explore the VYTAL Pouches botanical product concept and join founders access.",
};

export default function PouchesPage() {
  return (
    <main className="page-shell public-site product-page">
      <Nav />

      <section className="product-hero pouch-hero">
        <div>
          <p className="eyebrow">VYTAL Pouches • Portable wellness ritual</p>
          <h1>Wellness that moves <span>with you.</span></h1>
          <p className="hero-copy">VYTAL Pouches extends the premium VYTAL House experience into a compact botanical format—designed around ritual, flavor, responsible formulation, and elevated everyday use.</p>
          <div className="hero-actions">
            <Link className="pill-button primary" href="#collection">Explore the collection <ArrowRight size={16} /></Link>
            <Link className="pill-button" href="#pouch-founders">Join founders access</Link>
          </div>
          <p className="micro-notice prominent">Concept preview only. Products are not currently offered for sale.</p>
        </div>

        <div className="pouch-stage" aria-label="VYTAL Pouches product concept graphic">
          <div className="pouch-tin tin-left"><span>V</span><strong>ENERGY</strong><small>SOURSOP LIME</small></div>
          <div className="pouch-tin tin-center"><span>V</span><strong>TIDAL</strong><small>SEA MOSS • LIME</small></div>
          <div className="pouch-tin tin-right"><span>V</span><strong>NAD</strong><small>BLUE SOURSOP • YUZU</small></div>
        </div>
      </section>

      <section className="section" id="collection">
        <div className="section-head editorial-head">
          <div>
            <p className="eyebrow">Founders collection</p>
            <h2>Three moods. One visual world.</h2>
          </div>
          <p className="muted section-intro">Each concept has its own flavor, accent system, and moment while remaining unmistakably VYTAL.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article className={`product-card accent-${product.accent}`} key={product.name}>
                <div className="product-card-top">
                  <div className="product-icon"><Icon size={22} /></div>
                  <span>{product.mode}</span>
                </div>
                <div className="mini-tin"><span>V</span></div>
                <h3>{product.name}</h3>
                <p className="product-flavor">{product.flavor}</p>
                <p className="muted">{product.description}</p>
                <div className="concept-tag">FORMULATION IN DEVELOPMENT</div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section ritual-story">
        <div className="section-head editorial-head">
          <div>
            <p className="eyebrow">The portable ritual</p>
            <h2>Simple, intentional, and unmistakably premium.</h2>
          </div>
        </div>
        <div className="ritual-steps">
          <article><span>01</span><h3>Choose your mode</h3><p className="muted">Select the VYTAL concept aligned with the moment and approved directions.</p></article>
          <article><span>02</span><h3>Follow the label</h3><p className="muted">Use only the finalized serving instructions, warnings, and age restrictions.</p></article>
          <article><span>03</span><h3>Track your ritual</h3><p className="muted">Future digital guidance can support consistency without making medical promises.</p></article>
          <article><span>04</span><h3>Replenish responsibly</h3><p className="muted">Subscription and commerce activate only after product and compliance approval.</p></article>
        </div>
      </section>

      <section className="section standards-section">
        <div className="standards-visual">
          <ShieldCheck size={34} />
          <span>VYTAL QUALITY GATE</span>
          <strong>Proof before promise.</strong>
        </div>
        <div>
          <p className="eyebrow">Quality and responsibility</p>
          <h2>Premium design must be matched by disciplined execution.</h2>
          <div className="standards-list">
            {standards.map((standard) => <p key={standard}><Check size={17} />{standard}</p>)}
          </div>
        </div>
      </section>

      <section className="section founder-section" id="pouch-founders">
        <div className="founder-copy">
          <p className="eyebrow">VYTAL Pouches founders access</p>
          <h2>Be first to experience the collection.</h2>
          <p className="muted">Join the list for approved product updates, testing milestones, packaging reveals, and future launch access.</p>
        </div>
        <LeadForm />
      </section>

      <Footer />
    </main>
  );
}
