"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import PulseBar from "./PulseBar";
import Button from "./ui/button";

export default function VoiceRecorder({
  onTranscription,
  disabled = false,
}: {
  onTranscription: (text: string) => void;
  disabled?: boolean;
}) {
  const [recording, setRecording] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const startRecording = useCallback(async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
          ? "audio/webm;codecs=opus"
          : "audio/webm",
      });
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        if (timerRef.current) clearInterval(timerRef.current);

        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        if (blob.size < 1000) {
          setError("Recording too short. Try speaking for at least a few seconds.");
          setRecording(false);
          return;
        }

        setProcessing(true);
        try {
          const formData = new FormData();
          formData.append("audio", blob, "recording.webm");

          const res = await fetch("/api/transcribe", {
            method: "POST",
            body: formData,
          });

          if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            throw new Error(errData.error || "Transcription failed");
          }

          const data = await res.json();
          onTranscription(data.text);
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "Failed to transcribe audio"
          );
        } finally {
          setProcessing(false);
          setElapsed(0);
        }
      };

      mediaRecorder.start(1000);
      setRecording(true);
      setElapsed(0);
      timerRef.current = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);
    } catch {
      setError(
        "Microphone access denied. Please allow microphone access or use the text input below."
      );
    }
  }, [onTranscription]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  }, []);

  return (
    <div className="space-y-4">
      <PulseBar active={recording || processing} />

      <div className="flex flex-col items-center gap-3">
        {recording && (
          <div className="flex items-center gap-2 text-sm font-mono text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-danger rec-dot" />
            <span>REC {formatTime(elapsed)}</span>
          </div>
        )}

        {processing && (
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-accent pulse-glow" />
            <span>Transcribing audio...</span>
          </div>
        )}

        <Button
          onClick={recording ? stopRecording : startRecording}
          disabled={disabled || processing}
          variant={recording ? "danger" : "primary"}
          className="min-w-[200px] py-3 text-base"
        >
          {processing
            ? "Processing..."
            : recording
            ? "Stop Recording"
            : "Start Recording"}
        </Button>

        {!recording && !processing && (
          <p className="text-text-secondary text-xs text-center">
            Speak your shift brain dump — medications, vitals, assessments,
            everything. AI will sort it into SBAR format.
          </p>
        )}
      </div>

      {error && (
        <div className="bg-danger/10 border border-danger/20 rounded-md p-3 text-sm text-danger">
          {error}
        </div>
      )}
    </div>
  );
}
