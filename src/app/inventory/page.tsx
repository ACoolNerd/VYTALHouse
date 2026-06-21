import { Footer } from "@/components/Footer";
import { InventoryClient } from "@/components/InventoryClient";
import { Nav } from "@/components/Nav";

export default function InventoryPage() {
  return (
    <main className="page-shell">
      <Nav />
      <InventoryClient />
      <Footer />
    </main>
  );
}
