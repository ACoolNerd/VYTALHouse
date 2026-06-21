import { NextResponse } from "next/server";
import { z } from "zod";
import { persistLead } from "@/lib/server/lead-store";

export const runtime = "nodejs";

const LeadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  interest: z.string().trim().min(2).max(100),
  tier: z.string().trim().max(100).optional(),
  message: z.string().trim().max(2_000).optional(),
  website: z.string().max(0).optional(),
});

function requestId(request: Request): string {
  return request.headers.get("x-request-id") ?? crypto.randomUUID();
}

export async function POST(request: Request) {
  const id = requestId(request);

  try {
    const body: unknown = await request.json();
    const result = LeadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid lead payload", requestId: id },
        { status: 400, headers: { "x-request-id": id } },
      );
    }

    // Honeypot field: acknowledge without retaining automated submissions.
    if (result.data.website) {
      return NextResponse.json({ ok: true, requestId: id }, { headers: { "x-request-id": id } });
    }

    const record = await persistLead(result.data, id);
    return NextResponse.json(
      { ok: true, id: record.id, requestId: id },
      { status: 201, headers: { "x-request-id": id } },
    );
  } catch (error) {
    console.error("lead_capture_failed", { requestId: id, error });
    return NextResponse.json(
      { error: "Unable to submit inquiry. Please try again later.", requestId: id },
      { status: 503, headers: { "x-request-id": id } },
    );
  }
}
