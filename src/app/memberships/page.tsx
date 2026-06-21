import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { RecordTable } from "@/components/RecordTable";
import { membershipRecords } from "@/lib/data";

export default function Page() {
  return (
    <main className="page-shell">
      <Nav />
      <section className="section">
        <p className="eyebrow">VYTAL House</p>
        <h1>Memberships</h1>
        <p className="hero-copy">Compare recurring access tiers.</p>
      </section>
      <section className="section">

        <RecordTable records={membershipRecords} />
      </section>
      <Footer />
    </main>
  );
}
