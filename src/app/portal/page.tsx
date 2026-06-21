import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PortalDashboard } from "@/components/PortalDashboard";
import {
  bookingRecords,
  brand,
  integrationRecords,
  launchGoalRecords,
  launchReadiness,
  membershipRecords,
  monthlyMembershipRevenue,
  qualityRecords,
  riskRecords,
  serviceRecords,
  socialRecords,
  vendorRecords,
} from "@/lib/data";
import { roleAccess } from "@/lib/governance";
import { publicPortalUsers } from "@/lib/session";

const documents = [
  { title: "Project Ready Goals", href: "/docs/project-ready-goals", status: "ready-draft", owner: "admin" as const },
  { title: "Firebase and Google Cloud Manifest", href: "/docs/firebase-google-cloud-manifest", status: "ready-draft", owner: "admin" as const },
  { title: "Desktop and Downloads Import Audit", href: "/docs/desktop-downloads-import-audit", status: "complete", owner: "operations" as const },
  { title: "Concept to Creation Manifest", href: "/docs/concept-to-creation-manifest", status: "ready-draft", owner: "marketing" as const },
  { title: "Delivery Manifest", href: "/docs/delivery-manifest", status: "updated", owner: "operations" as const },
];

export default function PortalPage() {
  const metrics = [
    { label: "Target site", value: "Columbia", note: brand.targetAddress },
    { label: "Modeled MRR", value: `$${monthlyMembershipRevenue.toLocaleString()}`, note: "Membership-only projection from seed model" },
    { label: "Open goals", value: String(launchReadiness.openGoals), note: "All require owner or professional review before live action" },
    { label: "Quote targets", value: String(launchReadiness.quoteTargets), note: "No vendor outreach sent from this repo" },
  ];

  return (
    <main className="page-shell">
      <Nav />
      <PortalDashboard
        address={brand.targetAddress}
        metrics={metrics}
        roleAccess={roleAccess}
        users={publicPortalUsers()}
        launchGoals={launchGoalRecords}
        risks={riskRecords}
        integrations={integrationRecords}
        memberships={membershipRecords}
        services={serviceRecords}
        vendors={vendorRecords}
        bookings={bookingRecords}
        socialPosts={socialRecords}
        quality={qualityRecords}
        documents={documents}
      />
      <Footer />
    </main>
  );
}
