import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <p><strong>VYTAL House</strong> — Renew • Restore • Recharge</p>
      <p>
        <Link href="/services">Services</Link> · <Link href="/memberships">Memberships</Link> · <Link href="/pouches">VYTAL Pouches</Link> · <Link href="/vytal-air">VYTAL Air</Link> · <Link href="/portal">Portal</Link>
      </p>
      <p>Concept, product, clinical, legal, financial, vendor, and payment elements remain subject to approval before activation.</p>
    </footer>
  );
}
