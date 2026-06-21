import type { GovernedRecord, Role } from "./types";

export const requiredFields = ["id", "entity", "type", "name", "status", "owner", "updatedAt"] as const;

export const roleAccess: Record<string, Role[]> = {
  publicWebsite: ["owner", "admin", "marketing", "operations", "member"],
  memberApp: ["owner", "admin", "member"],
  adminDashboard: ["owner", "admin", "operations"],
  commandPortal: ["owner", "admin", "operations", "clinical", "marketing", "vendor", "member"],
  launchGoals: ["owner", "admin", "operations", "clinical"],
  clinicalReview: ["owner", "clinical"],
  vendorCrm: ["owner", "admin", "operations", "vendor"],
  contentCalendar: ["owner", "admin", "marketing"],
  documentVault: ["owner", "admin", "operations"],
  integrationReadiness: ["owner", "admin"],
};

export function isGovernedRecord(value: unknown): value is GovernedRecord {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  return requiredFields.every((field) => typeof record[field] === "string") && record.entity === "VYTAL House";
}

export function assertGovernedRecord(value: unknown): GovernedRecord {
  if (!isGovernedRecord(value)) {
    throw new Error("Record does not satisfy the VYTAL 7-field schema.");
  }
  return value;
}

export function canAccess(surface: keyof typeof roleAccess, role: Role): boolean {
  return roleAccess[surface].includes(role);
}
