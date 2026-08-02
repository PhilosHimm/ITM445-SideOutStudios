import { neon } from "@neondatabase/serverless";

type SqlClient = ReturnType<typeof neon>;

let client: SqlClient | null = null;

/**
 * Returns the Neon SQL client, created on first use.
 *
 * DATABASE_URL is a full-privilege connection string, so it must stay
 * server-side. Never expose it through a NEXT_PUBLIC_ variable, and only
 * call this from route handlers or server components.
 *
 * The client is built lazily rather than at module load so a missing
 * DATABASE_URL fails the request that needs it instead of the build.
 */
export function getSql(): SqlClient {
  if (!client) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL is not set");
    }
    client = neon(connectionString);
  }
  return client;
}
