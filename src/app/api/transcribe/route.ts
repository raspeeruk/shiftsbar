import { NextRequest, NextResponse } from "next/server";
import { transcribeAudio } from "@/lib/voice/transcribe";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const audioFile = formData.get("audio");

    if (!audioFile || !(audioFile instanceof Blob)) {
      return NextResponse.json(
        { error: "No audio file provided" },
        { status: 400 }
      );
    }

    if (audioFile.size > 25 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Audio file too large (max 25MB)" },
        { status: 400 }
      );
    }

    const text = await transcribeAudio(audioFile);

    return NextResponse.json({ text });
  } catch (err) {
    console.error("Transcription error:", err);
    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : "Failed to transcribe audio",
      },
      { status: 500 }
    );
  }
}
