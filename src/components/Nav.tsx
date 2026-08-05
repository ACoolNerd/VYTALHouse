import Link from "next/link";

const links = [
  ["Experience", "/#experience"],
  ["Services", "/services"],
  ["Memberships", "/memberships"],
  ["VYTAL Pouches", "/pouches"],
  ["VYTAL Air", "/vytal-air"],
  ["Facility", "/facility"],
  ["Founders", "/#waitlist"],
  ["Portal", "/portal"],
];

export function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand-lockup" aria-label="VYTAL House home">
          <strong>VYTAL HOUSE</strong>
          <span>Renew • Restore • Recharge</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
