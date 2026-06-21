import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { RecordTable } from "@/components/RecordTable";
import { bookingRecords } from "@/lib/data";

export default function Page() {
  return (
    <main className="page-shell">
      <Nav />
      <section className="section">
        <p className="eyebrow">VYTAL House</p>
        <h1>Member App</h1>
        <p className="hero-copy">Prototype member dashboard with booking and wellness placeholders.</p>
      </section>
      <section className="section">

        <RecordTable records={bookingRecords} />
      </section>
      <Footer />
    </main>
  );
}
