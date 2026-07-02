"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Could not subscribe right now");
        setStatus("error");
        return;
      }
      setStatus("success");
      setEmail("");
    } catch {
      setError("Could not subscribe right now");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-accent text-xs font-mono" role="status">
        Signed on. Handoff notes incoming.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@nightshift.com"
          aria-label="Email address"
          className="flex-1 min-w-0 bg-surface border border-border rounded-md px-3 py-1.5 text-xs text-text placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 font-body"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-accent hover:bg-accent-hover text-bg font-semibold px-3 py-1.5 rounded-md text-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shrink-0"
        >
          {status === "sending" ? "Sending..." : "Sign up"}
        </button>
      </div>
      {/* Honeypot: humans never see or fill this field */}
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute w-px h-px overflow-hidden opacity-0 pointer-events-none -left-[9999px]"
      />
      {status === "error" && (
        <p className="text-danger text-[10px] mt-1.5 font-mono" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
