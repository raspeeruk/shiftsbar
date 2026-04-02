"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SbarReportViewer from "@/components/SbarReportViewer";
import PdfExportButton from "@/components/PdfExportButton";
import PulseBar from "@/components/PulseBar";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { parseSbarReport } from "@/lib/ai/generate-sbar";
import type { SbarReport } from "@/types";

export default function ReportPage() {
  const router = useRouter();
  const [report, setReport] = useState<SbarReport | null>(null);
  const [generating, setGenerating] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rawText, setRawText] = useState("");

  const generate = useCallback(async () => {
    const stored = sessionStorage.getItem("shiftsbar_input");
    if (!stored) {
      router.push("/record");
      return;
    }

    const { text, shiftType, unit } = JSON.parse(stored);
    setGenerating(true);
    setError(null);
    setRawText("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, shiftType, unit }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate report");
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No response stream");

      const decoder = new TextDecoder();
      let buffer = "";
      let fullText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = JSON.parse(line.slice(6));

          if (data.type === "text") {
            fullText += data.content;
            setRawText(fullText);
          } else if (data.type === "done") {
            const parsed = parseSbarReport(data.content);
            setReport(parsed);
            sessionStorage.setItem("shiftsbar_report", JSON.stringify(parsed));
          } else if (data.type === "error") {
            throw new Error(data.content);
          }
        }
      }

      // If stream ended without a done event, try parsing what we have
      if (!report && fullText) {
        const parsed = parseSbarReport(fullText);
        setReport(parsed);
        sessionStorage.setItem("shiftsbar_report", JSON.stringify(parsed));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate report");
    } finally {
      setGenerating(false);
    }
  }, [router, report]);

  useEffect(() => {
    // Check for cached report first
    const cached = sessionStorage.getItem("shiftsbar_report");
    if (cached) {
      try {
        setReport(JSON.parse(cached));
        setGenerating(false);
        return;
      } catch {
        // Fall through to generate
      }
    }
    generate();
  }, [generate]);

  return (
    <div className="min-h-dvh flex flex-col">
      <Nav />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        {generating && (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="font-heading font-bold text-xl mb-2">
                Generating SBAR Report
              </h1>
              <p className="text-text-secondary text-sm">
                AI is structuring your shift notes...
              </p>
            </div>
            <PulseBar active />
            {rawText && (
              <Card>
                <pre className="text-xs font-mono text-text-secondary whitespace-pre-wrap max-h-48 overflow-y-auto">
                  {rawText}
                </pre>
              </Card>
            )}
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="skeleton h-32 rounded-lg" />
              ))}
            </div>
          </div>
        )}

        {error && (
          <div className="space-y-4">
            <div className="bg-danger/10 border border-danger/20 rounded-lg p-4 text-danger text-sm">
              {error}
            </div>
            <div className="flex gap-3">
              <Button onClick={() => { setReport(null); generate(); }}>
                Try Again
              </Button>
              <Button variant="secondary" onClick={() => router.push("/record")}>
                Record Again
              </Button>
            </div>
          </div>
        )}

        {report && !generating && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="font-heading font-bold text-xl">SBAR Report</h1>
              <div className="flex gap-2">
                <PdfExportButton report={report} />
                <Button
                  variant="secondary"
                  onClick={() => {
                    sessionStorage.removeItem("shiftsbar_report");
                    router.push("/record");
                  }}
                >
                  New Report
                </Button>
              </div>
            </div>
            <SbarReportViewer report={report} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
