import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { RecordTable } from "@/components/RecordTable";
import { qualityRecords } from "@/lib/data";

export default function Page() {
  return (
    <main className="page-shell">
      <Nav />
      <section className="section">
        <p className="eyebrow">VYTAL House</p>
        <h1>Admin Dashboard</h1>
        <p className="hero-copy">Operations, quality score, and launch readiness.</p>
      </section>
      <section className="section">

        <RecordTable records={qualityRecords} />
      </section>
      <Footer />
    </main>
  );
}
