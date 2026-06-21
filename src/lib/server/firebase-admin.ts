import "server-only";

import { cert, getApps, initializeApp, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required server configuration: ${name}`);
  return value;
}

function getServiceAccount() {
  const raw = required("FIREBASE_SERVICE_ACCOUNT_JSON");
  const parsed = JSON.parse(raw) as { project_id?: string; client_email?: string; private_key?: string };

  if (!parsed.project_id || !parsed.client_email || !parsed.private_key) {
    throw new Error("FIREBASE_SERVICE_ACCOUNT_JSON is incomplete");
  }

  return {
    projectId: parsed.project_id,
    clientEmail: parsed.client_email,
    privateKey: parsed.private_key.replace(/\\n/g, "\n"),
  };
}

export function getAdminApp(): App {
  return getApps()[0] ?? initializeApp({ credential: cert(getServiceAccount()) });
}

export function getAdminDb(): Firestore {
  return getFirestore(getAdminApp());
}
