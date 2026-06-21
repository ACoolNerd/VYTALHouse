"use client";

import { useCallback, useMemo, useState } from "react";
import { LoginPanel } from "@/components/LoginPanel";
import { sessionStorageKey } from "@/lib/session-constants";
import type { PortalSessionRecord } from "@/lib/session";
import type { GovernedRecord, Role } from "@/lib/types";

type PublicPortalUser = GovernedRecord<{ role: Role; email: string; scope: string }>;
type DocumentLink = {
  title: string;
  href: string;
  status: string;
  owner: Role;
};

type PortalDashboardProps = {
  address: string;
  metrics: { label: string; value: string; note: string }[];
  roleAccess: Record<string, Role[]>;
  users: PublicPortalUser[];
  launchGoals: GovernedRecord[];
  risks: GovernedRecord[];
  integrations: GovernedRecord[];
  memberships: GovernedRecord[];
  services: GovernedRecord[];
  vendors: GovernedRecord[];
  bookings: GovernedRecord[];
  socialPosts: GovernedRecord[];
  quality: GovernedRecord[];
  documents: DocumentLink[];
};

function hasAccess(role: Role, roles: Role[] = []) {
  return roles.includes(role);
}

function FieldList({ record }: { record: GovernedRecord }) {
  const metadata = record.metadata as Record<string, unknown>;
  const entries = Object.entries(metadata).slice(0, 4);
  return (
    <div className="record-metadata">
      {entries.map(([key, value]) => (
        <span key={key}><strong>{key}</strong> {String(value)}</span>
      ))}
    </div>
  );
}

function RecordGrid({ records }: { records: GovernedRecord[] }) {
  return (
    <div className="record-grid">
      {records.map((record) => (
        <article className="record-row" key={record.id}>
          <div>
            <p className="eyebrow">{record.type}</p>
            <h3>{record.name}</h3>
            <FieldList record={record} />
          </div>
          <div className="record-status">
            <span>{record.status}</span>
            <small>{record.owner} · {record.updatedAt}</small>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PortalDashboard(props: PortalDashboardProps) {
  const [session, setSession] = useState<PortalSessionRecord | null>(null);

  const role = session?.metadata.role;
  const visibleSections = useMemo(() => {
    if (!role) return new Set<string>();
    return new Set(
      Object.entries(props.roleAccess)
        .filter(([, roles]) => hasAccess(role, roles))
        .map(([surface]) => surface),
    );
  }, [props.roleAccess, role]);

  const signOut = useCallback(() => {
    window.localStorage.removeItem(sessionStorageKey);
    setSession(null);
  }, []);

  if (!session || !role) {
    return <LoginPanel onSession={setSession} />;
  }

  const canSeeLaunch = visibleSections.has("launchGoals") || role === "owner";
  const canSeeAdmin = visibleSections.has("adminDashboard") || role === "owner";
  const canSeeVendor = visibleSections.has("vendorCrm") || role === "owner";
  const canSeeContent = visibleSections.has("contentCalendar") || role === "owner";
  const canSeeIntegrations = visibleSections.has("integrationReadiness") || role === "owner";
  const canSeeDocuments = visibleSections.has("documentVault") || role === "owner";

  return (
    <section className="section portal-dashboard">
      <div className="portal-hero wide-panel">
        <div>
          <p className="eyebrow">VYTAL House command portal</p>
          <h1>Project Ready Dashboard</h1>
          <p className="hero-copy">{props.address}</p>
          <p className="muted">Signed in as {session.name}. Scope: {session.metadata.scope}</p>
        </div>
        <div className="portal-session">
          <span>{role}</span>
          <button className="pill-button" type="button" onClick={signOut}>Sign out</button>
        </div>
      </div>

      <div className="metric-grid">
        {props.metrics.map((metric) => (
          <article className="card metric-card" key={metric.label}>
            <p className="eyebrow">{metric.label}</p>
            <div className="stat">{metric.value}</div>
            <p className="muted">{metric.note}</p>
          </article>
        ))}
      </div>

      <section className="section portal-section">
        <div className="section-head">
          <h2>Role Access</h2>
          <p className="muted">Separation of duties is visible in the portal before Firebase custom claims are activated.</p>
        </div>
        <div className="record-grid">
          {props.users.map((user) => (
            <article className={user.metadata.role === role ? "record-row active-record" : "record-row"} key={user.id}>
              <div>
                <p className="eyebrow">{user.metadata.role}</p>
                <h3>{user.name}</h3>
                <p className="muted">{user.metadata.scope}</p>
              </div>
              <div className="record-status">
                <span>{user.status}</span>
                <small>{user.metadata.email}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      {canSeeLaunch ? (
        <section className="section portal-section">
          <div className="section-head">
            <h2>Project Ready Goals</h2>
            <p className="muted">Goals are ready to execute only after owner/professional approval where required.</p>
          </div>
          <RecordGrid records={props.launchGoals} />
        </section>
      ) : null}

      {canSeeAdmin ? (
        <section className="section portal-section">
          <div className="section-head">
            <h2>Risk and Quality</h2>
            <p className="muted">Quality records and open risks for controlled launch planning.</p>
          </div>
          <div className="grid two">
            <RecordGrid records={props.risks} />
            <RecordGrid records={props.quality} />
          </div>
        </section>
      ) : null}

      {canSeeIntegrations ? (
        <section className="section portal-section">
          <div className="section-head">
            <h2>Firebase and Google Cloud</h2>
            <p className="muted">Ready-draft manifests only. No live project, bucket, Drive, payment, or vendor mutation is created here.</p>
          </div>
          <RecordGrid records={props.integrations} />
        </section>
      ) : null}

      {canSeeDocuments ? (
        <section className="section portal-section">
          <div className="section-head">
            <h2>Documents and Manifests</h2>
            <p className="muted">Local repo documents updated for project readiness and review.</p>
          </div>
          <div className="doc-grid">
            {props.documents.map((doc) => (
              <a className="record-row" href={doc.href} key={doc.href}>
                <div>
                  <p className="eyebrow">{doc.owner}</p>
                  <h3>{doc.title}</h3>
                </div>
                <div className="record-status">
                  <span>{doc.status}</span>
                  <small>Open file</small>
                </div>
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section portal-section">
        <div className="section-head">
          <h2>Operating Records</h2>
          <p className="muted">Visible records are filtered by the active role.</p>
        </div>
        {role === "member" ? <RecordGrid records={[...props.memberships, ...props.bookings, ...props.services]} /> : null}
        {role === "vendor" ? <RecordGrid records={props.vendors} /> : null}
        {role === "clinical" ? <RecordGrid records={[...props.services, ...props.risks]} /> : null}
        {role === "marketing" || canSeeContent ? <RecordGrid records={props.socialPosts} /> : null}
        {role === "operations" || canSeeVendor ? <RecordGrid records={[...props.vendors, ...props.bookings]} /> : null}
        {role === "owner" || role === "admin" ? <RecordGrid records={[...props.services, ...props.memberships, ...props.vendors, ...props.bookings]} /> : null}
      </section>
    </section>
  );
}
