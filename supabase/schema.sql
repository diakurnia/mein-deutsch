-- Tabel progress per pengguna per topik
create table if not exists public.user_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  topic_id text not null,
  status text not null default 'dipelajari' check (status in ('belum','dipelajari','selesai')),
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, topic_id)
);

alter table public.user_progress enable row level security;

-- Tiap pengguna hanya boleh akses barisnya sendiri
create policy "own progress - select" on public.user_progress
  for select using (auth.uid() = user_id);
create policy "own progress - insert" on public.user_progress
  for insert with check (auth.uid() = user_id);
create policy "own progress - update" on public.user_progress
  for update using (auth.uid() = user_id);
create policy "own progress - delete" on public.user_progress
  for delete using (auth.uid() = user_id);
