"use client";

import { useState } from "react";
import Button from "./ui/button";
import type { SbarReport } from "@/types";

export default function PdfExportButton({ report }: { report: SbarReport }) {
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/export/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(report),
      });

      if (!res.ok) throw new Error("PDF export failed");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `SBAR-${report.patient.initials}-${report.patient.room}-${new Date().toISOString().slice(0, 10)}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("PDF export error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleExport} disabled={loading} variant="secondary">
      {loading ? "Exporting..." : "Download PDF"}
    </Button>
  );
}
