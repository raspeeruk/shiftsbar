import { NextRequest } from "next/server";
import { generateSbarStream } from "@/lib/ai/generate-sbar";

export async function POST(req: NextRequest) {
  try {
    const { text, shiftType, unit } = await req.json();

    if (!text || typeof text !== "string" || text.length < 20) {
      return new Response(
        JSON.stringify({ error: "Text must be at least 20 characters" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of generateSbarStream(
            text,
            shiftType || "day",
            unit || "Med-Surg"
          )) {
            const data = `data: ${JSON.stringify(chunk)}\n\n`;
            controller.enqueue(encoder.encode(data));
          }
          controller.close();
        } catch (err) {
          const errorMsg = `data: ${JSON.stringify({
            type: "error",
            content:
              err instanceof Error ? err.message : "Generation failed",
          })}\n\n`;
          controller.enqueue(encoder.encode(errorMsg));
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid request" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}
