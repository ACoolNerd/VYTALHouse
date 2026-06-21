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
