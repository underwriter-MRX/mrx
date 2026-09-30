-- Consented, booking-first Graham preparation. This record never changes the
-- appointment row, so a notes failure cannot cancel or downgrade a booking.
create table if not exists public.appointment_preparations (
  id uuid primary key default gen_random_uuid(),
  appointment_id uuid not null unique references public.appointments(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  conversation_id uuid references public.conversations(id) on delete set null,
  inquiry_type text not null check (inquiry_type in ('investor', 'project-provider', 'specific-project')),
  answers jsonb not null default '[]'::jsonb,
  summary text not null check (char_length(summary) between 1 and 10000),
  supplied_fact_status text not null default 'visitor_supplied_unverified'
    check (supplied_fact_status = 'visitor_supplied_unverified'),
  consented boolean not null check (consented = true),
  disclosure_version text not null,
  source_url text not null,
  staff_queue_status text not null default 'ready'
    check (staff_queue_status in ('ready', 'partial', 'reviewed')),
  ghl_sync_status text not null default 'pending'
    check (ghl_sync_status in ('pending', 'synced', 'failed', 'not_configured')),
  ghl_message_ids text[] not null default '{}',
  ghl_sync_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists appointment_preparations_profile_created_idx
  on public.appointment_preparations(profile_id, created_at desc);

alter table public.appointment_preparations enable row level security;

drop policy if exists appointment_preparations_staff_select on public.appointment_preparations;
create policy appointment_preparations_staff_select
  on public.appointment_preparations for select
  using (
    public.is_mrx_admin()
    or exists (
      select 1
      from public.case_assignments ca
      join public.staff_profiles sp on sp.id = ca.staff_profile_id
      where ca.profile_id = appointment_preparations.profile_id
        and sp.user_id = auth.uid()
        and sp.active = true
    )
  );

notify pgrst, 'reload schema';
