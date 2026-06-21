import Image from "next/image";
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
        <h1>Facility</h1>
        <p className="hero-copy">Conceptual layout and CAD handoff zones.</p>
      </section>
      <section className="section">

        <div className="hero-panel" style={{ marginBottom: 18 }}>
          <Image src="/images/vytal-interior-reference.png" alt="VYTAL House ambient interior reference" width={1000} height={563} />
        </div>

        <RecordTable records={serviceRecords} />
      </section>
      <Footer />
    </main>
  );
}
