import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";

const OPTION_IDS = [1, 2, 3, 4] as const;

type CountRow = { option_id: number; votes: number };

async function readCounts(): Promise<Record<number, number>> {
  const sql = getSql();
  const rows = (await sql`
    select option_id, count(*)::int as votes
    from poll_votes
    group by option_id
  `) as CountRow[];

  const counts: Record<number, number> = {};
  for (const id of OPTION_IDS) counts[id] = 0;
  for (const row of rows) counts[row.option_id] = row.votes;
  return counts;
}

// GET /api/poll — returns vote counts per option
export async function GET() {
  try {
    return NextResponse.json({ counts: await readCounts() });
  } catch (error) {
    console.error("GET /api/poll failed:", error);
    return NextResponse.json({ error: "Could not load poll results" }, { status: 500 });
  }
}

// POST /api/poll — submits a vote
export async function POST(request: Request) {
  let optionId: number;

  try {
    const body = await request.json();
    optionId = Number(body.option_id);
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!OPTION_IDS.includes(optionId as (typeof OPTION_IDS)[number])) {
    return NextResponse.json({ error: "Invalid option" }, { status: 400 });
  }

  try {
    const sql = getSql();
    await sql`insert into poll_votes (option_id) values (${optionId})`;
    return NextResponse.json({ counts: await readCounts() });
  } catch (error) {
    console.error("POST /api/poll failed:", error);
    return NextResponse.json({ error: "Could not record your vote" }, { status: 500 });
  }
}
