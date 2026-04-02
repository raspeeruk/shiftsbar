"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-bg/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-accent rec-dot" />
          <span className="font-heading font-bold text-lg tracking-tight text-text group-hover:text-accent transition-colors">
            ShiftSBAR
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <Link
            href="/record"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            Record
          </Link>
          <Link
            href="/guides/what-is-sbar-nursing"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            Guides
          </Link>
          <Link
            href="/pricing"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/record"
            className="bg-accent hover:bg-accent-hover text-bg font-semibold px-4 py-1.5 rounded-md text-sm transition-colors"
          >
            Start Report
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-text-secondary p-1"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-border px-4 py-3 flex flex-col gap-3 bg-bg">
          <Link
            href="/record"
            className="text-text-secondary hover:text-accent transition-colors text-sm"
            onClick={() => setOpen(false)}
          >
            Record
          </Link>
          <Link
            href="/guides/what-is-sbar-nursing"
            className="text-text-secondary hover:text-accent transition-colors text-sm"
            onClick={() => setOpen(false)}
          >
            Guides
          </Link>
          <Link
            href="/pricing"
            className="text-text-secondary hover:text-accent transition-colors text-sm"
            onClick={() => setOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/record"
            className="bg-accent hover:bg-accent-hover text-bg font-semibold px-4 py-2 rounded-md text-sm text-center transition-colors"
            onClick={() => setOpen(false)}
          >
            Start Report
          </Link>
        </div>
      )}
    </nav>
  );
}
