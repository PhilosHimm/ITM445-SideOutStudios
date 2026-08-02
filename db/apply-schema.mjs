// Applies db/schema.sql to the database in DATABASE_URL.
//
//   node db/apply-schema.mjs
//
// Reads DATABASE_URL from the environment, falling back to .env.local.
// The schema is idempotent, so re-running it is safe.

import { readFile } from "node:fs/promises";
import { neon } from "@neondatabase/serverless";

async function resolveConnectionString() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;

  let envFile;
  try {
    envFile = await readFile(new URL("../.env.local", import.meta.url), "utf8");
  } catch {
    throw new Error("DATABASE_URL is not set and .env.local was not found");
  }

  for (const line of envFile.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    if (trimmed.slice(0, eq).trim() !== "DATABASE_URL") continue;
    return trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
  }

  throw new Error("DATABASE_URL was not found in .env.local");
}

const connectionString = await resolveConnectionString();
const sql = neon(connectionString);

const schema = await readFile(new URL("./schema.sql", import.meta.url), "utf8");
const statements = schema
  .split(";")
  .map((s) => s.trim())
  .filter((s) => s && !s.split("\n").every((line) => line.trim().startsWith("--")));

for (const statement of statements) {
  const label = statement.replace(/\s+/g, " ").slice(0, 70);
  await sql.query(statement);
  console.log(`ok  ${label}`);
}

const tables = await sql.query(
  `select table_name from information_schema.tables
   where table_schema = 'public' order by table_name`
);
console.log(`\nTables now present: ${tables.map((r) => r.table_name).join(", ")}`);
