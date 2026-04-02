"use client";

import { useState } from "react";
import Textarea from "./ui/textarea";
import Button from "./ui/button";

export default function TextFallback({
  onSubmit,
  disabled = false,
}: {
  onSubmit: (text: string) => void;
  disabled?: boolean;
}) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    const trimmed = text.trim();
    if (trimmed.length < 20) return;
    onSubmit(trimmed);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs text-text-secondary">
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
        <span>Or type your shift notes instead</span>
      </div>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Patient in room 412, Mrs. J, 72-year-old female admitted for CHF exacerbation. Currently on Lasix 40mg IV BID, potassium 20mEq TID. Vitals stable — BP 132/78, HR 76, SpO2 96% on 2L NC. I&O negative 500mL this shift. BMP from this morning showed potassium 3.4, slightly low. She's been ambulating to the chair with PT. Pending: echo in the morning, possible switch to PO Lasix if tolerated. Family visited, daughter asking about discharge timeline..."
        rows={8}
        disabled={disabled}
      />
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-text-secondary font-mono">
          {text.length} chars {text.length < 20 && text.length > 0 && "— need at least 20"}
        </span>
        <Button
          onClick={handleSubmit}
          disabled={disabled || text.trim().length < 20}
        >
          Generate SBAR Report
        </Button>
      </div>
    </div>
  );
}
