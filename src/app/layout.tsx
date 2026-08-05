import type { Metadata } from "next";
import "./globals.css";
import "./public.css";

export const metadata: Metadata = {
  title: {
    default: "VYTAL House | Renew • Restore • Recharge",
    template: "%s | VYTAL House",
  },
  description: "VYTAL House is a premium Columbia, Maryland wellness ecosystem connecting restorative services, membership, hospitality, VYTAL Pouches, and VYTAL Air.",
  metadataBase: new URL("https://vytalhouse.com"),
  openGraph: {
    title: "VYTAL House",
    description: "Renew • Restore • Recharge",
    url: "https://vytalhouse.com",
    siteName: "VYTAL House",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
