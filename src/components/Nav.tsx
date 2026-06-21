import Link from "next/link";

const links = [
  ["Portal", "/portal"],
  ["Services", "/services"],
  ["Memberships", "/memberships"],
  ["Facility", "/facility"],
  ["Member", "/member"],
  ["Admin", "/admin"],
  ["Vendor CRM", "/vendor"],
  ["Ownership", "/ownership"],
  ["Login", "/login"],
];

export function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand-lockup" aria-label="VYTAL House home">
          <strong>VYTAL HOUSE</strong>
          <span>Recharge. Recover. Evolve.</span>
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
