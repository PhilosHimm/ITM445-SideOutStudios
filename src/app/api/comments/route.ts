import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

function getClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
  );
}

// GET /api/comments — returns all comments ordered newest-first
export async function GET() {
  const supabase = getClient();
  const { data, error } = await supabase
    .from("highlight_comments")
    .select("id, name, body, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ comments: data });
}

// POST /api/comments — submits a comment
export async function POST(request: Request) {
  const supabase = getClient();
  const body = await request.json();

  const commentBody = String(body.body ?? "").trim();
  const commentName = String(body.name ?? "").trim().slice(0, 50) || null;

  if (!commentBody || commentBody.length > 500) {
    return NextResponse.json({ error: "Invalid comment" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("highlight_comments")
    .insert({ name: commentName, body: commentBody })
    .select("id, name, body, created_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ comment: data });
}
