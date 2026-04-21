-- Run in Supabase → SQL Editor (new project). Then add keys in supabase.config.js
-- (see supabase/SETUP.txt).

create table if not exists public.scores (
    id uuid primary key default gen_random_uuid(),
    player_name text not null,
    score int not null check (score >= 0 and score <= 100),
    accuracy int not null check (accuracy >= 0 and accuracy <= 100),
    created_at timestamptz not null default now()
);

create index if not exists scores_score_desc on public.scores (score desc, created_at desc);

alter table public.scores enable row level security;

create policy "scores_select_anon" on public.scores for select using (true);
create policy "scores_insert_anon" on public.scores for insert with check (true);
