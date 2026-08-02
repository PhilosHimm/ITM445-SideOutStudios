import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";

const MAX_BODY = 500;
const MAX_NAME = 50;

type Comment = {
  id: string;
  name: string | null;
  body: string;
  created_at: string;
};

// GET /api/comments — returns the 50 most recent comments, newest first
export async function GET() {
  try {
    const sql = getSql();
    const comments = (await sql`
      select id::text, name, body, created_at
      from highlight_comments
      order by created_at desc
      limit 50
    `) as Comment[];
    return NextResponse.json({ comments });
  } catch (error) {
    console.error("GET /api/comments failed:", error);
    return NextResponse.json({ error: "Could not load comments" }, { status: 500 });
  }
}

// POST /api/comments — submits a comment
export async function POST(request: Request) {
  let commentBody: string;
  let commentName: string | null;

  try {
    const payload = await request.json();
    commentBody = String(payload.body ?? "").trim();
    commentName = String(payload.name ?? "").trim().slice(0, MAX_NAME) || null;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!commentBody || commentBody.length > MAX_BODY) {
    return NextResponse.json({ error: "Invalid comment" }, { status: 400 });
  }

  try {
    const sql = getSql();
    const rows = (await sql`
      insert into highlight_comments (name, body)
      values (${commentName}, ${commentBody})
      returning id::text, name, body, created_at
    `) as Comment[];
    return NextResponse.json({ comment: rows[0] });
  } catch (error) {
    console.error("POST /api/comments failed:", error);
    return NextResponse.json({ error: "Could not post your comment" }, { status: 500 });
  }
}
