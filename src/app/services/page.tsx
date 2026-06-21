import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { RecordTable } from "@/components/RecordTable";
import { serviceRecords } from "@/lib/data";

export default function Page() {
  return (
    <main className="page-shell">
      <Nav />
      <section className="section">
        <p className="eyebrow">VYTAL House</p>
        <h1>Services</h1>
        <p className="hero-copy">Explore VYTAL therapy lanes.</p>
      </section>
      <section className="section">

        <RecordTable records={serviceRecords} />
      </section>
      <Footer />
    </main>
  );
}
