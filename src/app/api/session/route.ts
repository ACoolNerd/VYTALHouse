import { NextResponse } from "next/server";
import { z } from "zod";
import { authenticatePrototypePortalUser } from "@/lib/session";

const SessionRequestSchema = z.object({
  role: z.enum(["owner", "admin", "clinical", "operations", "marketing", "vendor", "member"]),
  demoCode: z.string().min(4),
});

export async function POST(request: Request) {
  const body = await request.json();
  const result = SessionRequestSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid session payload" }, { status: 400 });
  }

  const session = authenticatePrototypePortalUser(result.data.role, result.data.demoCode);
  if (!session) {
    return NextResponse.json({ error: "Invalid prototype access code" }, { status: 401 });
  }

  return NextResponse.json({ ok: true, session });
}
