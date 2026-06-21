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
        <div className="hero-actions">
          <a className="pill-button primary" href="/portal">Open member portal</a>
          <a className="pill-button" href="/login">Role login</a>
        </div>
      </section>
      <section className="section">

        <RecordTable records={bookingRecords} />
      </section>
      <Footer />
    </main>
  );
}
