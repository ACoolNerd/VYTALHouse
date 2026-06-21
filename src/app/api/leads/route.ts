import { NextResponse } from "next/server";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  interest: z.string().min(2),
  tier: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const result = LeadSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid lead payload" }, { status: 400 });
  }
  const record = {
    id: `lead-${Date.now()}`,
    entity: "VYTAL House",
    type: "lead",
    name: result.data.name,
    status: "captured-local-prototype",
    owner: "marketing",
    updatedAt: new Date().toISOString().slice(0, 10),
    metadata: result.data,
  };
  return NextResponse.json({ ok: true, record });
}
