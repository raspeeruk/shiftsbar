import { getAnthropicClient } from "./client";
import { SBAR_SYSTEM_PROMPT, buildUserPrompt } from "./prompts";
import type { SbarReport } from "@/types";

export async function* generateSbarStream(
  transcript: string,
  shiftType: string,
  unit: string
): AsyncGenerator<{ type: "text" | "done"; content: string }> {
  const client = getAnthropicClient();

  const stream = client.messages.stream({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    system: SBAR_SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: buildUserPrompt(transcript, shiftType, unit),
      },
    ],
  });

  let fullText = "";

  for await (const event of stream) {
    if (
      event.type === "content_block_delta" &&
      event.delta.type === "text_delta"
    ) {
      fullText += event.delta.text;
      yield { type: "text", content: event.delta.text };
    }
  }

  yield { type: "done", content: fullText };
}

export function parseSbarReport(json: string): SbarReport {
  const cleaned = json
    .replace(/```json\s*/g, "")
    .replace(/```\s*/g, "")
    .trim();

  return JSON.parse(cleaned) as SbarReport;
}
