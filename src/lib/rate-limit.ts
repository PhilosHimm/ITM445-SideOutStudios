/**
 * A fixed-window rate limiter for the public write endpoints.
 *
 * State lives in a module-level Map, which means it is per-instance and
 * best-effort: Vercel recycles serverless instances and may run several at
 * once, so a client can get more than `limit` requests through by landing on
 * a cold or different instance. That is enough to stop one person looping
 * curl at the database, which is what these endpoints need. Enforcing a hard
 * global limit would take a shared store (Redis, or a counter table in
 * Postgres) and a round trip on every write.
 */

type Window = { count: number; resetAt: number };

const windows = new Map<string, Window>();

// Bounds the Map so a flood of distinct keys cannot grow it without limit.
const MAX_TRACKED_KEYS = 10_000;

function prune(now: number) {
  for (const [key, window] of windows) {
    if (window.resetAt <= now) windows.delete(key);
  }
  // Everything is still live and we are over budget: drop oldest-expiring
  // first, since those keys are closest to being forgotten anyway.
  if (windows.size > MAX_TRACKED_KEYS) {
    const byExpiry = [...windows].sort((a, b) => a[1].resetAt - b[1].resetAt);
    for (const [key] of byExpiry.slice(0, windows.size - MAX_TRACKED_KEYS)) {
      windows.delete(key);
    }
  }
}

/**
 * Identifies the caller for rate-limiting purposes.
 *
 * Behind Vercel's proxy the client address is the first entry in
 * x-forwarded-for. The header is spoofable in general, but Vercel overwrites
 * it at the edge, so the leading value is trustworthy in production. Requests
 * with no forwarding headers (local dev) share a single bucket.
 */
export function clientKey(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export type RateLimitResult = {
  ok: boolean;
  /** Seconds until the window resets. Only meaningful when `ok` is false. */
  retryAfter: number;
};

export function checkRateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number }
): RateLimitResult {
  const now = Date.now();
  prune(now);

  const window = windows.get(key);
  if (!window || window.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfter: 0 };
  }

  if (window.count >= limit) {
    return { ok: false, retryAfter: Math.ceil((window.resetAt - now) / 1000) };
  }

  window.count += 1;
  return { ok: true, retryAfter: 0 };
}

/** Builds the 429 response body and headers for a rejected request. */
export function rateLimitedResponseInit(retryAfter: number) {
  return {
    status: 429,
    headers: { "Retry-After": String(retryAfter) },
  } as const;
}
