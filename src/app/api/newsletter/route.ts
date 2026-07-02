import { NextRequest, NextResponse } from "next/server";

const COLLECTOR_URL = "https://rogerson-signups.netlify.app/";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let email = "";
  let website = "";

  try {
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await req.json();
      email = typeof body.email === "string" ? body.email.trim() : "";
      website = typeof body.website === "string" ? body.website.trim() : "";
    } else {
      const form = await req.formData();
      email = String(form.get("email") || "").trim();
      website = String(form.get("website") || "").trim();
    }
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot filled: pretend success, drop silently
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 });
  }

  try {
    const res = await fetch(COLLECTOR_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "newsletter",
        email,
        site: "shiftsbar.com",
        source: "footer",
      }).toString(),
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Could not subscribe right now" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not subscribe right now" },
      { status: 502 }
    );
  }
}
