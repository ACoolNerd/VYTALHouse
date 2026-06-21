import type { GovernedRecord, Role } from "./types";

export const requiredFields = ["id", "entity", "type", "name", "status", "owner", "updatedAt"] as const;

export const roleAccess: Record<string, Role[]> = {
  publicWebsite: ["owner", "admin", "marketing", "operations", "member"],
  memberApp: ["owner", "admin", "member"],
  adminDashboard: ["owner", "admin", "operations"],
  clinicalReview: ["owner", "clinical"],
  vendorCrm: ["owner", "admin", "operations", "vendor"],
  contentCalendar: ["owner", "admin", "marketing"],
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
