"use client";

import { useState } from "react";

const interestHref =
  "mailto:hq@rogergroup.xyz?subject=ShiftSBAR%20acquisition%20interest";

export default function AcquisitionNotice() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside
      aria-label="ShiftSBAR acquisition opportunity"
      className="fixed bottom-4 right-4 z-40 w-[calc(100%-2rem)] max-w-sm overflow-hidden rounded-lg border border-border bg-surface text-text shadow-2xl shadow-black/50"
    >
      <div className="h-1.5 bg-accent" />
      <div className="relative p-4 sm:p-5">
        <button
          type="button"
          aria-label="Dismiss acquisition notice"
          onClick={() => setVisible(false)}
          className="absolute right-2 top-2 flex min-h-11 min-w-11 items-center justify-center rounded-md text-xl text-text-secondary transition-colors hover:bg-white/5 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <p className="mb-2 pr-10 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Ownership handoff
        </p>
        <p className="mb-2 pr-8 font-heading text-lg font-bold leading-tight sm:text-xl">
          ShiftSBAR is available to acquire.
        </p>
        <p className="mb-4 text-[13px] leading-relaxed text-text-secondary sm:text-sm">
          Buy this nurse handoff app on its own, or ask about the healthcare
          bundle with CarePlanHQ and CEU Tracker.
        </p>
        <a
          href={interestHref}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          Register acquisition interest
        </a>
      </div>
    </aside>
  );
}
