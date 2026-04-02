"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VoiceRecorder from "@/components/VoiceRecorder";
import TextFallback from "@/components/TextFallback";
import Card from "@/components/ui/card";
import { hipaaWarning } from "@/data/disclaimers";
import { shiftTypes, commonUnits } from "@/data/sbar-fields";

export default function RecordPage() {
  const router = useRouter();
  const [shiftType, setShiftType] = useState<string>("day");
  const [unit, setUnit] = useState<string>("Med-Surg");
  const [generating, setGenerating] = useState(false);
  const [mode, setMode] = useState<"voice" | "text">("voice");

  const handleInput = async (text: string) => {
    setGenerating(true);
    try {
      sessionStorage.setItem(
        "shiftsbar_input",
        JSON.stringify({ text, shiftType, unit })
      );
      router.push("/report");
    } catch {
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-dvh flex flex-col">
      <Nav />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        <div className="mb-6">
          <h1 className="font-heading font-bold text-2xl mb-1">
            Record Your Shift
          </h1>
          <p className="text-text-secondary text-sm">
            Speak or type your brain dump. AI handles the rest.
          </p>
        </div>

        {/* Shift context */}
        <Card className="mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-text-secondary font-mono mb-1.5">
                SHIFT TYPE
              </label>
              <select
                value={shiftType}
                onChange={(e) => setShiftType(e.target.value)}
                className="w-full bg-bg border border-border rounded-md px-3 py-2 text-sm text-text focus:outline-none focus:border-accent/50"
              >
                {shiftTypes.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-text-secondary font-mono mb-1.5">
                UNIT
              </label>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-full bg-bg border border-border rounded-md px-3 py-2 text-sm text-text focus:outline-none focus:border-accent/50"
              >
                {commonUnits.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Card>

        {/* Input mode tabs */}
        <div className="flex gap-1 mb-4 bg-surface rounded-lg p-1 border border-border">
          <button
            onClick={() => setMode("voice")}
            className={`flex-1 text-sm py-2 rounded-md transition-colors cursor-pointer ${
              mode === "voice"
                ? "bg-bg text-accent font-semibold"
                : "text-text-secondary hover:text-text"
            }`}
          >
            Voice
          </button>
          <button
            onClick={() => setMode("text")}
            className={`flex-1 text-sm py-2 rounded-md transition-colors cursor-pointer ${
              mode === "text"
                ? "bg-bg text-accent font-semibold"
                : "text-text-secondary hover:text-text"
            }`}
          >
            Type
          </button>
        </div>

        {/* Recording / Text input */}
        <Card className="mb-6">
          {mode === "voice" ? (
            <VoiceRecorder
              onTranscription={handleInput}
              disabled={generating}
            />
          ) : (
            <TextFallback onSubmit={handleInput} disabled={generating} />
          )}
        </Card>

        {/* HIPAA warning */}
        <div className="bg-warning/5 border border-warning/20 rounded-md p-3 text-xs text-warning/80">
          <span className="font-semibold">Privacy note:</span> {hipaaWarning}
        </div>
      </main>
      <Footer />
    </div>
  );
}
