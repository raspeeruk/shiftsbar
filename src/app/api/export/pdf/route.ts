import { NextRequest, NextResponse } from "next/server";
import { generateSbarPdf } from "@/lib/export/pdf-generator";
import type { SbarReport } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const report: SbarReport = await req.json();

    if (!report.patient || !report.situation || !report.background) {
      return NextResponse.json(
        { error: "Invalid SBAR report data" },
        { status: 400 }
      );
    }

    const doc = generateSbarPdf(report);
    const pdfBytes = doc.output("arraybuffer");

    return new Response(pdfBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="SBAR-${report.patient.initials}-${report.patient.room}-${new Date().toISOString().slice(0, 10)}.pdf"`,
      },
    });
  } catch (err) {
    console.error("PDF generation error:", err);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
