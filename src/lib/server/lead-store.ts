import "server-only";

import { FieldValue } from "firebase-admin/firestore";
import { getAdminDb } from "./firebase-admin";

export type LeadInput = {
  name: string;
  email: string;
  interest: string;
  tier?: string;
  message?: string;
};

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export async function persistLead(input: LeadInput, requestId: string) {
  const db = getAdminDb();
  const email = normalizeEmail(input.email);
  const leadRef = db.collection("leads").doc();

  const record = {
    id: leadRef.id,
    entity: "VYTAL House",
    type: "founder-waitlist-lead",
    name: input.name.trim(),
    email,
    interest: input.interest.trim(),
    tier: input.tier?.trim() || null,
    message: input.message?.trim() || null,
    status: "new",
    source: "public-waitlist",
    requestId,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  };

  await db.runTransaction(async (transaction) => {
    const duplicates = await transaction.get(
      db.collection("leads").where("email", "==", email).where("status", "in", ["new", "contacted", "qualified"]).limit(1),
    );

    if (!duplicates.empty) {
      const existing = duplicates.docs[0];
      transaction.update(existing.ref, {
        name: record.name,
        interest: record.interest,
        tier: record.tier,
        message: record.message,
        requestId,
        updatedAt: FieldValue.serverTimestamp(),
      });
      return;
    }

    transaction.set(leadRef, record);
  });

  return { id: leadRef.id, email };
}
