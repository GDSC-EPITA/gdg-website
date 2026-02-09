import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email : null;

  if (!email) {
    return NextResponse.json(
      { ok: false, error: "Email manquant." },
      { status: 400 }
    );
  }

  return NextResponse.json({ ok: true });
}
