-- Side-Out Studios schema (Neon Postgres 17).
-- Apply to a fresh database with:
--   node db/apply-schema.mjs
-- (or psql "$DATABASE_URL" -f db/schema.sql, if you have psql installed)

create table if not exists public.poll_votes (
  id          bigint generated always as identity primary key,
  option_id   smallint not null,
  created_at  timestamptz not null default now(),
  constraint poll_votes_option_id_range check (option_id between 1 and 4)
);

-- Supports the grouped count in GET /api/poll.
create index if not exists poll_votes_option_id_idx
  on public.poll_votes (option_id);

create table if not exists public.highlight_comments (
  id          bigint generated always as identity primary key,
  name        text,
  body        text not null,
  created_at  timestamptz not null default now(),
  constraint highlight_comments_body_len
    check (char_length(body) between 1 and 500),
  constraint highlight_comments_name_len
    check (name is null or char_length(name) between 1 and 50)
);

-- Supports "order by created_at desc limit 50" in GET /api/comments.
create index if not exists highlight_comments_created_at_idx
  on public.highlight_comments (created_at desc);
