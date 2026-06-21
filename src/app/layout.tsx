import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VYTAL House",
  description: "Recharge. Recover. Evolve.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
