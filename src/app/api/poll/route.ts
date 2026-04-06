import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
);

// GET /api/poll — returns vote counts per option
export async function GET() {
  const { data, error } = await supabase
    .from("poll_votes")
    .select("option_id");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };
  for (const row of data) {
    counts[row.option_id] = (counts[row.option_id] ?? 0) + 1;
  }

  return NextResponse.json({ counts });
}

// POST /api/poll — submits a vote
export async function POST(request: Request) {
  const body = await request.json();
  const optionId = Number(body.option_id);

  if (!optionId || optionId < 1 || optionId > 4) {
    return NextResponse.json({ error: "Invalid option" }, { status: 400 });
  }

  const { error } = await supabase
    .from("poll_votes")
    .insert({ option_id: optionId });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Return updated counts
  const { data, error: fetchError } = await supabase
    .from("poll_votes")
    .select("option_id");

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };
  for (const row of data) {
    counts[row.option_id] = (counts[row.option_id] ?? 0) + 1;
  }

  return NextResponse.json({ counts });
}
