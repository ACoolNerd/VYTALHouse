"use client";

import { useState } from "react";

type SubmitState = "idle" | "sending" | "sent" | "error";

export function LeadForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function submit(formData: FormData) {
    setState("sending");
    setMessage("");

    try {
      const payload = Object.fromEntries(formData.entries());
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-request-id": crypto.randomUUID() },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("lead_capture_failed");
      setState("sent");
      setMessage("Inquiry received. Our concierge team will follow up soon.");
    } catch (error) {
      console.error("lead_form_submit_failed", error);
      setState("error");
      setMessage("Your inquiry could not be submitted. Please try again shortly.");
    }
  }

  return (
    <form action={submit} className="wide-panel">
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required autoComplete="name" placeholder="Founder member name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required autoComplete="email" placeholder="name@example.com" />
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
          <textarea id="message" name="message" rows={4} maxLength={2000} placeholder="Tell the VYTAL team what you want to explore." />
        </div>
        <div aria-hidden="true" className="sr-only">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <div className="hero-actions">
        <button className="pill-button primary" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Submitting..." : "Submit inquiry"}
        </button>
        <span className="muted" aria-live="polite">{message}</span>
      </div>
    </form>
  );
}
