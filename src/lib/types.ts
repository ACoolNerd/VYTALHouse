export type Role = "owner" | "admin" | "clinical" | "operations" | "marketing" | "vendor" | "member";

export type GovernanceStatus =
  | "draft"
  | "planned"
  | "requested"
  | "quote-needed"
  | "ready-draft"
  | "approval-needed"
  | "complete"
  | "target";

export interface GovernedRecord<TMetadata = unknown> {
  id: string;
  entity: "VYTAL House";
  type: string;
  name: string;
  status: string;
  owner: Role;
  updatedAt: string;
  metadata: TMetadata;
}

export interface MembershipMetadata {
  monthlyPrice: number;
  projectedMembers: number;
  benefits: string;
}

export interface VendorMetadata {
  product: string;
  website: string;
  phone: string;
  email: string;
  priority: string;
}

export interface LocationMetadata {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  fullAddress: string;
  market: string;
  use: string;
  gate: string;
}

export interface LaunchGoalMetadata {
  phase: string;
  gate: string;
  due: string;
  source: string;
}

export interface RiskMetadata {
  severity: string;
  likelihood: string;
  control: string;
  source: string;
}

export interface IntegrationMetadata {
  provider: string;
  target: string;
  mode: string;
  gate: string;
}

export interface PortalUserMetadata {
  role: Role;
  email: string;
  demoCode: string;
  scope: string;
}

export interface PortalSessionMetadata {
  role: Role;
  email: string;
  scope: string;
  issuedAt: string;
  prototypeOnly: true;
}
