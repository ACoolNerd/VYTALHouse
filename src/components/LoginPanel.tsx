"use client";

import { useEffect, useState } from "react";
import { sessionStorageKey } from "@/lib/session-constants";
import type { PortalSessionRecord } from "@/lib/session";
import type { Role } from "@/lib/types";

const roleOptions: { role: Role; label: string; code: string }[] = [
  { role: "admin", label: "Admin", code: "VYTAL-ADMIN" },
  { role: "owner", label: "Owner", code: "VYTAL-OWNER" },
  { role: "operations", label: "Operations", code: "VYTAL-OPS" },
  { role: "clinical", label: "Clinical", code: "VYTAL-CLINICAL" },
  { role: "marketing", label: "Marketing", code: "VYTAL-MARKETING" },
  { role: "vendor", label: "Vendor", code: "VYTAL-VENDOR" },
  { role: "member", label: "Member", code: "VYTAL-MEMBER" },
];

export function LoginPanel({
  onSession,
  standalone = false,
}: {
  onSession?: (session: PortalSessionRecord) => void;
  standalone?: boolean;
}) {
  const [role, setRole] = useState<Role>("admin");
  const [demoCode, setDemoCode] = useState("VYTAL-ADMIN");
  const [state, setState] = useState<"idle" | "loading" | "error" | "signed-in">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem(sessionStorageKey);
    if (!saved) return;
    try {
      const session = JSON.parse(saved) as PortalSessionRecord;
      setState("signed-in");
      onSession?.(session);
    } catch {
      window.localStorage.removeItem(sessionStorageKey);
    }
  }, [onSession]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");
    const response = await fetch("/api/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role, demoCode }),
    });
    const payload = await response.json();
    if (!response.ok) {
      setState("error");
      setMessage(payload.error ?? "Unable to start prototype session.");
      return;
    }

    const session = payload.session as PortalSessionRecord;
    window.localStorage.setItem(sessionStorageKey, JSON.stringify(session));
    setState("signed-in");
    onSession?.(session);
    if (!onSession) {
      window.location.href = "/portal";
    }
  }

  function chooseRole(nextRole: Role, nextCode: string) {
    setRole(nextRole);
    setDemoCode(nextCode);
    setState("idle");
    setMessage("");
  }

  return (
    <section className={standalone ? "section login-section" : "login-section"}>
      <div className="section-head">
        <div>
          <p className="eyebrow">Governed access</p>
          <h1>{standalone ? "Portal Login" : "Sign in to continue"}</h1>
        </div>
        <p className="muted">Local prototype login only. Production access must use Firebase Auth with MFA and custom role claims.</p>
      </div>

      <div className="grid two">
        <form className="wide-panel" onSubmit={submit}>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="role">Role</label>
              <select id="role" value={role} onChange={(event) => setRole(event.target.value as Role)}>
                {roleOptions.map((option) => (
                  <option key={option.role} value={option.role}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="demoCode">Prototype access code</label>
              <input
                id="demoCode"
                value={demoCode}
                onChange={(event) => setDemoCode(event.target.value)}
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="hero-actions">
            <button className="pill-button primary" type="submit" disabled={state === "loading"}>
              {state === "loading" ? "Checking access" : "Enter portal"}
            </button>
            {state === "signed-in" ? <span className="muted">Prototype session is active.</span> : null}
            {state === "error" ? <span className="muted">{message}</span> : null}
          </div>
        </form>

        <div className="card">
          <h3>Demo access codes</h3>
          <p className="muted">These codes are for local project review. They are not production credentials.</p>
          <div className="role-grid">
            {roleOptions.map((option) => (
              <button
                className={option.role === role ? "role-chip active" : "role-chip"}
                key={option.role}
                type="button"
                onClick={() => chooseRole(option.role, option.code)}
              >
                <strong>{option.label}</strong>
                <span>{option.code}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
