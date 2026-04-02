export async function transcribeAudio(audioBlob: Blob): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY not configured");

  const formData = new FormData();
  formData.append("file", audioBlob, "recording.webm");
  formData.append("model", "whisper-1");
  formData.append("language", "en");
  formData.append(
    "prompt",
    "Nursing shift report with medical terminology: vitals, medications, diagnoses, labs, I&O, PRN, BID, TID, QID, IV, PO, IM, SubQ, NPO, DNR, code status, isolation, ambulation, neuro checks, pain scale."
  );

  const res = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}` },
    body: formData,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `Whisper API error: ${res.status}`);
  }

  const data = await res.json();
  return data.text;
}
