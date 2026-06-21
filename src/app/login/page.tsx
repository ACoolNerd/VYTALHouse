import { Footer } from "@/components/Footer";
import { LoginPanel } from "@/components/LoginPanel";
import { Nav } from "@/components/Nav";

export default function LoginPage() {
  return (
    <main className="page-shell">
      <Nav />
      <LoginPanel standalone />
      <Footer />
    </main>
  );
}
