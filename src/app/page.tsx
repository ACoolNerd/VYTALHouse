import Link from "next/link";
import { Activity, ArrowRight, CalendarDays, Check, MapPin, ShieldCheck, ShoppingBag, Sparkles, Wind } from "lucide-react";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { Nav } from "@/components/Nav";
import { membershipRecords, serviceRecords } from "@/lib/data";

const ecosystem = [
  {
    eyebrow: "The flagship",
    title: "VYTAL House",
    description: "A premium Columbia, Maryland wellness destination built around guided recovery, restorative performance, member programming, and hospitality.",
    href: "/services",
    cta: "Explore the House",
    icon: Sparkles,
  },
  {
    eyebrow: "The portable ritual",
    title: "VYTAL Pouches",
    description: "A product concept for pocket-sized botanical rituals, designed to extend the VYTAL experience beyond the physical House.",
    href: "/pouches",
    cta: "Discover Pouches",
    icon: ShoppingBag,
  },
  {
    eyebrow: "The breath platform",
    title: "VYTAL Air",
    description: "A responsibly gated inhalation-platform concept focused on premium ritual, controlled formulation, and connected user guidance.",
    href: "/vytal-air",
    cta: "Explore VYTAL Air",
    icon: Wind,
  },
];

const moments = [
  ["Before the day", "Prepare with a personalized wellness ritual."],
  ["Between demands", "Reset with efficient, member-guided experiences."],
  ["After performance", "Restore through structured recovery programming."],
  ["Everywhere else", "Continue the ritual through VYTAL products and digital guidance."],
];

export default function HomePage() {
  return (
    <main className="page-shell public-site">
      <Nav />

      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">Columbia, Maryland • Premium wellness ecosystem</p>
          <h1>A new standard for how you <span>renew.</span></h1>
          <p className="hero-copy">
            VYTAL House brings restorative services, membership, hospitality, intelligent guidance, and product innovation into one elevated experience—built to help people renew, restore, and recharge.
          </p>
          <div className="hero-actions">
            <Link className="pill-button primary" href="/memberships">Explore memberships <ArrowRight size={16} /></Link>
            <Link className="pill-button" href="#waitlist">Join founders access</Link>
            <Link className="pill-button subtle" href="/portal">Open member portal</Link>
          </div>
          <div className="hero-proof" aria-label="VYTAL House experience pillars">
            <span><ShieldCheck size={16} /> Governed wellness</span>
            <span><CalendarDays size={16} /> Membership-led</span>
            <span><Activity size={16} /> Data-informed</span>
          </div>
        </div>

        <div className="ecosystem-orbit" aria-label="VYTAL House ecosystem graphic">
          <div className="orbit-ring orbit-one" />
          <div className="orbit-ring orbit-two" />
          <div className="orbit-ring orbit-three" />
          <div className="orbit-core">
            <span>VH</span>
            <strong>VYTAL</strong>
            <small>HOUSE</small>
          </div>
          <div className="orbit-label label-house">HOUSE</div>
          <div className="orbit-label label-pouches">POUCHES</div>
          <div className="orbit-label label-air">AIR</div>
        </div>
      </section>

      <section className="experience-band">
        <div><strong>THE HOUSE</strong><span>Flagship wellness destination</span></div>
        <div><strong>THE RITUAL</strong><span>Personalized member journeys</span></div>
        <div><strong>THE PRODUCTS</strong><span>Portable VYTAL experiences</span></div>
      </section>

      <section className="section" id="experience">
        <div className="section-head editorial-head">
          <div>
            <p className="eyebrow">One brand. Three connected experiences.</p>
            <h2>The VYTAL ecosystem</h2>
          </div>
          <p className="muted section-intro">The website now gives every major VYTAL concept a clear home while keeping the flagship wellness center as the primary brand experience.</p>
        </div>
        <div className="ecosystem-grid">
          {ecosystem.map((item) => {
            const Icon = item.icon;
            return (
              <article className="ecosystem-card" key={item.title}>
                <div className="ecosystem-icon"><Icon size={24} /></div>
                <p className="eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p className="muted">{item.description}</p>
                <Link href={item.href}>{item.cta} <ArrowRight size={15} /></Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section ritual-section">
        <div className="section-head editorial-head">
          <div>
            <p className="eyebrow">Built around real life</p>
            <h2>Your VYTAL day</h2>
          </div>
          <p className="muted section-intro">A connected experience designed for executives, athletes, caregivers, first responders, teams, and anyone who wants a more intentional wellness rhythm.</p>
        </div>
        <div className="moment-grid">
          {moments.map(([title, description], index) => (
            <article className="moment-card" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p className="muted">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section service-preview">
        <div className="section-head editorial-head">
          <div>
            <p className="eyebrow">The flagship experience</p>
            <h2>Wellness, thoughtfully orchestrated</h2>
          </div>
          <Link className="text-link" href="/services">View all services <ArrowRight size={16} /></Link>
        </div>
        <div className="service-list">
          {serviceRecords.slice(0, 6).map((service, index) => (
            <article className="service-row" key={service.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{service.name}</h3>
                <p className="muted">{service.metadata.description}</p>
              </div>
              <Check size={18} />
            </article>
          ))}
        </div>
        <p className="micro-notice">Services, protocols, claims, and clinical activation remain subject to professional, regulatory, and site-specific approval.</p>
      </section>

      <section className="section membership-showcase">
        <div className="section-head editorial-head">
          <div>
            <p className="eyebrow">More than appointments</p>
            <h2>Membership creates the rhythm</h2>
          </div>
          <Link className="text-link" href="/memberships">Compare memberships <ArrowRight size={16} /></Link>
        </div>
        <div className="membership-grid">
          {membershipRecords.map((tier, index) => (
            <article className={`membership-card ${index === 1 ? "featured" : ""}`} key={tier.id}>
              {index === 1 && <span className="recommended">Most popular</span>}
              <p className="eyebrow">{tier.name}</p>
              <div className="membership-price">${tier.metadata.monthlyPrice}<small>/month</small></div>
              <p className="muted">{tier.metadata.benefits}</p>
              <Link href="/#waitlist">Request founders access <ArrowRight size={15} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section location-story">
        <div className="location-copy">
          <p className="eyebrow">Columbia, Maryland</p>
          <h2>A flagship built to feel unlike a clinic—or a gym.</h2>
          <p className="muted">The proposed VYTAL House environment blends restorative technology, hospitality, private treatment zones, social wellness, and a cinematic premium atmosphere.</p>
          <div className="hero-actions">
            <Link className="pill-button primary" href="/facility">View facility concept <ArrowRight size={16} /></Link>
            <span className="location-chip"><MapPin size={16} /> Location details released after site approval</span>
          </div>
        </div>
        <div className="location-visual">
          <div className="space-line" />
          <div className="space-room room-one">RESET</div>
          <div className="space-room room-two">RESTORE</div>
          <div className="space-room room-three">RECHARGE</div>
          <div className="space-mark">VH</div>
        </div>
      </section>

      <section className="section founder-section" id="waitlist">
        <div className="founder-copy">
          <p className="eyebrow">Founders access</p>
          <h2>Help shape the first VYTAL House.</h2>
          <p className="muted">Join the priority list for membership updates, private previews, launch announcements, VYTAL Pouches, and VYTAL Air concept news.</p>
        </div>
        <LeadForm />
      </section>

      <Footer />
    </main>
  );
}
