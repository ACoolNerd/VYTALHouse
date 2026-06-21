import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { RecordTable } from "@/components/RecordTable";
import type { GovernedRecord } from "@/lib/types";

// Mock entities matching the VYTAL 7-field schema
const entityRecords: GovernedRecord[] = [
  {
    id: "ent-trust",
    entity: "VYTAL House",
    type: "Trust",
    name: "VYTAL Trust",
    status: "Planned",
    owner: "owner",
    updatedAt: "2026-06-21",
    metadata: { details: "Sovereign asset protection vehicle holding 100% of VYTAL Holdings LLC." }
  },
  {
    id: "ent-holdings",
    entity: "VYTAL House",
    type: "Holdings LLC",
    name: "VYTAL Holdings LLC",
    status: "Planned",
    owner: "owner",
    updatedAt: "2026-06-21",
    metadata: { details: "Umbrella company holding operational, IP, and property subsidiaries." }
  },
  {
    id: "ent-operations",
    entity: "VYTAL House",
    type: "Operations LLC",
    name: "VYTAL Operations LLC",
    status: "Planned",
    owner: "operations",
    updatedAt: "2026-06-21",
    metadata: { details: "Operating business managing spa services, booking, and staff." }
  },
  {
    id: "ent-ip",
    entity: "VYTAL House",
    type: "IP LLC",
    name: "VYTAL IP LLC",
    status: "Planned",
    owner: "owner",
    updatedAt: "2026-06-21",
    metadata: { details: "Holds trademarks, patents, software copyright, and branding rights." }
  },
  {
    id: "ent-property",
    entity: "VYTAL House",
    type: "Property LLC",
    name: "VYTAL Property LLC",
    status: "Planned",
    owner: "owner",
    updatedAt: "2026-06-21",
    metadata: { details: "Holds leasehold interests, real estate assets, and physical improvements." }
  },
  {
    id: "ent-spvs",
    entity: "VYTAL House",
    type: "Special Purpose Vehicle",
    name: "Future Location SPVs",
    status: "Planned",
    owner: "owner",
    updatedAt: "2026-06-21",
    metadata: { details: "Segregated entities for future modality expansion or locations." }
  }
];

export default function OwnershipPage() {
  return (
    <main className="page-shell">
      <Nav />
      
      {/* Hero Section */}
      <section className="section">
        <p className="eyebrow">Governance & Structure</p>
        <h1>Ownership & Trust</h1>
        <p className="hero-copy">
          Overview of the equity split, asset holding structures, and the 6-layer trust framework.
        </p>
      </section>

      {/* Cap Table Splitting */}
      <section className="section">
        <div className="section-head">
          <h2>Cap Table & Principals</h2>
          <p className="muted">50/50 Founding Partner Allocation</p>
        </div>
        <div className="grid two">
          <div className="card">
            <p className="eyebrow" style={{ color: "var(--cyan)" }}>Founding Principal & President</p>
            <h3>Kathy Ha</h3>
            <div className="stat">50%</div>
            <p className="muted" style={{ marginTop: 8 }}>
              Directs operational control, compliance, and government relations. Qualifies as the socially and economically disadvantaged individual (SEDI) for the SBA 8(a) certification strategy.
            </p>
          </div>
          <div className="card">
            <p className="eyebrow" style={{ color: "var(--lavender)" }}>Founding Principal & VP</p>
            <h3>Chauncey Gardner</h3>
            <div className="stat">50%</div>
            <p className="muted" style={{ marginTop: 8 }}>
              Oversees technology stack, clinical partner networking, and capital equipment planning. Collaborates on long-term growth and facility build-out.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Hierarchy */}
      <section className="section">
        <div className="section-head">
          <h2>Trust Entity Structure</h2>
          <p className="muted">Hierarchy mapping from VYTAL Trust down to SPVs</p>
        </div>
        <div className="card" style={{ padding: "32px 20px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            
            {/* Level 1 */}
            <div style={{ border: "2px solid var(--gold)", padding: "12px 24px", borderRadius: 8, background: "rgba(200, 164, 107, 0.1)", textAlign: "center" }}>
              <span className="eyebrow">Level 1: Asset Protection</span>
              <h3 style={{ margin: "4px 0 0" }}>VYTAL Trust</h3>
              <p className="muted" style={{ fontSize: 12, margin: 0 }}>Sovereign trust holding entity</p>
            </div>
            
            <div style={{ width: 2, height: 24, background: "rgba(255,255,255,0.2)" }}></div>
            
            {/* Level 2 */}
            <div style={{ border: "1px solid rgba(255,255,255,0.2)", padding: "12px 24px", borderRadius: 8, background: "rgba(255,255,255,0.02)", textAlign: "center" }}>
              <span className="eyebrow" style={{ color: "var(--cyan)" }}>Level 2: Equity Holder</span>
              <h3 style={{ margin: "4px 0 0" }}>VYTAL Holdings LLC</h3>
              <p className="muted" style={{ fontSize: 12, margin: 0 }}>Umbrella company controlled by Principals</p>
            </div>
            
            <div style={{ width: 2, height: 24, background: "rgba(255,255,255,0.2)" }}></div>
            
            {/* Level 3 */}
            <div style={{ width: "100%", maxWidth: 800 }}>
              <p className="eyebrow" style={{ textAlign: "center", marginBottom: 12 }}>Level 3: Operating Subsidiaries (100% Owned)</p>
              <div className="grid" style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
                <div style={{ border: "1px solid rgba(255,255,255,0.1)", padding: 12, borderRadius: 8, textAlign: "center", background: "rgba(255,255,255,0.01)" }}>
                  <h4 style={{ margin: 0 }}>Operations LLC</h4>
                  <p className="muted" style={{ fontSize: 11, margin: "4px 0 0" }}>Spa, hiring, sales</p>
                </div>
                <div style={{ border: "1px solid rgba(255,255,255,0.1)", padding: 12, borderRadius: 8, textAlign: "center", background: "rgba(255,255,255,0.01)" }}>
                  <h4 style={{ margin: 0 }}>IP LLC</h4>
                  <p className="muted" style={{ fontSize: 11, margin: "4px 0 0" }}>Trademarks, codes</p>
                </div>
                <div style={{ border: "1px solid rgba(255,255,255,0.1)", padding: 12, borderRadius: 8, textAlign: "center", background: "rgba(255,255,255,0.01)" }}>
                  <h4 style={{ margin: 0 }}>Property LLC</h4>
                  <p className="muted" style={{ fontSize: 11, margin: "4px 0 0" }}>Lease, fixtures</p>
                </div>
                <div style={{ border: "1px solid rgba(255,255,255,0.1)", padding: 12, borderRadius: 8, textAlign: "center", background: "rgba(255,255,255,0.01)" }}>
                  <h4 style={{ margin: 0 }}>Future SPVs</h4>
                  <p className="muted" style={{ fontSize: 11, margin: "4px 0 0" }}>New locations</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6-Layer Framework */}
      <section className="section">
        <div className="section-head">
          <h2>The 6-Layer Trust Framework</h2>
          <p className="muted">Principal architectural design pillars</p>
        </div>
        <div className="grid">
          <div className="card">
            <h3>1. Ownership</h3>
            <p className="muted" style={{ fontSize: 13 }}>Sovereign trust protection, equity clarity, and long-term asset lock between founders.</p>
          </div>
          <div className="card">
            <h3>2. Governance</h3>
            <p className="muted" style={{ fontSize: 13 }}>Clear separation of duties (RACI), voting splits, managing member direct control structures.</p>
          </div>
          <div className="card">
            <h3>3. Operations</h3>
            <p className="muted" style={{ fontSize: 13 }}>Vendor CRM outreach, clinical equipment quotes, member scheduling, and facility zones SOPs.</p>
          </div>
          <div className="card">
            <h3>4. Compliance</h3>
            <p className="muted" style={{ fontSize: 13 }}>Medical Director oversight protocols, HIPAA boundaries, state SDAT business registration.</p>
          </div>
          <div className="card">
            <h3>5. Technology</h3>
            <p className="muted" style={{ fontSize: 13 }}>React / Next.js app, Firebase security rules, and local-first reproducible artifacts.</p>
          </div>
          <div className="card">
            <h3>6. Member Experience</h3>
            <p className="muted" style={{ fontSize: 13 }}>Atmospheric spacecraft lounge aesthetic, structured contrast therapy suites, concierge check-in.</p>
          </div>
        </div>
      </section>

      {/* Governed Entity Records */}
      <section className="section">
        <div className="section-head">
          <h2>Governed Entity Records</h2>
          <p className="muted">Structure database records conforming to the 7-field schema</p>
        </div>
        <RecordTable records={entityRecords} />
      </section>

      <Footer />
    </main>
  );
}
