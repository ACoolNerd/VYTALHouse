"use client";

import { useState } from "react";

export function LeadForm() {
  const [state, setState] = useState<"idle" | "sent" | "error">("idle");

  async function submit(formData: FormData) {
    setState("idle");
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setState(response.ok ? "sent" : "error");
  }

  return (
    <form action={submit} className="wide-panel">
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required placeholder="Founder member name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required placeholder="name@example.com" />
        </div>
        <div className="field">
          <label htmlFor="interest">Interest</label>
          <select id="interest" name="interest" defaultValue="Founding membership">
            <option>Founding membership</option>
            <option>Book a tour</option>
            <option>Vendor partnership</option>
            <option>Investor conversation</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="tier">Membership tier</label>
          <select id="tier" name="tier" defaultValue="Elite">
            <option>Core</option>
            <option>Elite</option>
            <option>Black</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} placeholder="Tell the VYTAL team what you want to explore." />
        </div>
      </div>
      <div className="hero-actions">
        <button className="pill-button primary" type="submit">Submit inquiry</button>
        {state === "sent" ? <span className="muted">Inquiry captured locally by the prototype API.</span> : null}
        {state === "error" ? <span className="muted">Check required fields and try again.</span> : null}
      </div>
    </form>
  );
}
