create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  email text not null,
  messaggio text not null,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "Anon can insert leads"
  on public.leads
  for insert
  to anon
  with check (true);
