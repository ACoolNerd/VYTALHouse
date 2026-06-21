import { portalUserRecords } from "./data";
import { sessionStorageKey } from "./session-constants";
import type { GovernedRecord, PortalSessionMetadata, PortalUserMetadata, Role } from "./types";

export type PortalSessionRecord = GovernedRecord<PortalSessionMetadata>;
export { sessionStorageKey };

export function publicPortalUsers() {
  return portalUserRecords.map(({ metadata, ...record }) => ({
    ...record,
    metadata: {
      role: metadata.role,
      email: metadata.email,
      scope: metadata.scope,
    },
  }));
}

export function authenticatePrototypePortalUser(role: Role, demoCode: string): PortalSessionRecord | null {
  const user = portalUserRecords.find(
    (record: GovernedRecord<PortalUserMetadata>) =>
      record.metadata.role === role && record.metadata.demoCode === demoCode.trim().toUpperCase(),
  );
  if (!user) return null;

  return {
    id: `session-${user.metadata.role}-${Date.now()}`,
    entity: "VYTAL House",
    type: "portalSession",
    name: `${user.name} session`,
    status: "authenticated-local-prototype",
    owner: user.metadata.role,
    updatedAt: new Date().toISOString().slice(0, 10),
    metadata: {
      role: user.metadata.role,
      email: user.metadata.email,
      scope: user.metadata.scope,
      issuedAt: new Date().toISOString(),
      prototypeOnly: true,
    },
  };
}
