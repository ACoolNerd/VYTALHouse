import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { RecordTable } from "@/components/RecordTable";
import { vendorRecords } from "@/lib/data";

export default function Page() {
  return (
    <main className="page-shell">
      <Nav />
      <section className="section">
        <p className="eyebrow">VYTAL House</p>
        <h1>Vendor CRM</h1>
        <p className="hero-copy">Track equipment suppliers and outreach stages.</p>
      </section>
      <section className="section">

        <RecordTable records={vendorRecords} />
      </section>
      <Footer />
    </main>
  );
}
