-- Durable, idempotent guide requests and immutable disclosure receipts.
alter table public.communication_dispatches
  drop constraint if exists communication_dispatches_status_check;
alter table public.communication_dispatches
  add constraint communication_dispatches_status_check
  check (status in ('queued', 'suppressed', 'sent', 'delivered', 'failed', 'unknown', 'cancelled', 'revoked'));

create table if not exists public.guide_requests (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  guide_id text not null,
  identity_key text not null,
  phone_key text,
  dedupe_day date not null default (now() at time zone 'utc')::date,
  idempotency_key uuid not null unique,
  requested_channels text[] not null default '{}',
  shared_consents_recorded boolean not null default false,
  retry_claimed_at timestamptz,
  retry_claim_token uuid,
  status text not null default 'accepted'
    check (status in ('accepted', 'provider_accepted', 'provider_partial', 'provider_failed', 'suppressed')),
  provider_status jsonb not null default '{}'::jsonb,
  accepted_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create unique index if not exists guide_requests_daily_identity_key
  on public.guide_requests(guide_id, identity_key, dedupe_day);

create index if not exists guide_requests_identity_window_idx
  on public.guide_requests(guide_id, identity_key, accepted_at desc);
create index if not exists guide_requests_phone_audit_idx
  on public.guide_requests(guide_id, phone_key, accepted_at desc)
  where phone_key is not null;

create table if not exists public.guide_consent_receipts (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references public.guide_requests(id) on delete restrict,
  profile_id uuid not null references public.profiles(id) on delete restrict,
  guide_id text not null,
  channel text not null
    check (channel in ('email_transactional', 'sms_transactional', 'email_marketing', 'human_call')),
  granted boolean not null,
  disclosure_version text not null,
  disclosure_text text not null,
  disclosure_sha256 text not null,
  source_url text not null,
  client_timestamp timestamptz,
  server_timestamp timestamptz not null default now(),
  suppression_state jsonb not null default '{}'::jsonb,
  observation_stage text not null default 'submission'
    check (observation_stage in ('submission', 'provider_observation', 'preference_revision')),
  created_at timestamptz not null default now(),
  unique (request_id, channel, observation_stage, disclosure_sha256, granted)
);

create or replace function public.reject_guide_consent_receipt_mutation()
returns trigger
language plpgsql
as $$
begin
  raise exception 'guide consent receipts are immutable';
end;
$$;

drop trigger if exists guide_consent_receipts_immutable on public.guide_consent_receipts;
create trigger guide_consent_receipts_immutable
  before update or delete on public.guide_consent_receipts
  for each row execute function public.reject_guide_consent_receipt_mutation();

create or replace function public.create_guide_request_with_receipts(
  request_row jsonb,
  receipt_rows jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  created_request public.guide_requests;
  existing_request public.guide_requests;
begin
  update public.profiles
  set first_name = request_row->>'first_name',
      last_name = request_row->>'last_name',
      email = request_row->>'email',
      normalized_email = request_row->>'normalized_email',
      phone = coalesce(nullif(request_row->>'phone', ''), phone),
      normalized_phone = coalesce(nullif(request_row->>'normalized_phone', ''), normalized_phone),
      last_seen_at = now(),
      updated_at = now()
  where id = (request_row->>'profile_id')::uuid;

  insert into public.guide_requests(
    profile_id, guide_id, identity_key, phone_key, dedupe_day,
    idempotency_key, requested_channels, status, provider_status
  ) values (
    (request_row->>'profile_id')::uuid,
    request_row->>'guide_id',
    request_row->>'identity_key',
    nullif(request_row->>'phone_key', ''),
    (request_row->>'dedupe_day')::date,
    (request_row->>'idempotency_key')::uuid,
    array(select jsonb_array_elements_text(request_row->'requested_channels')),
    'accepted',
    '{"state":"not_attempted"}'::jsonb
  )
  on conflict (guide_id, identity_key, dedupe_day) do nothing
  returning * into created_request;

  if created_request.id is null then
    select * into existing_request
    from public.guide_requests
    where guide_id = request_row->>'guide_id'
      and identity_key = request_row->>'identity_key'
      and dedupe_day = (request_row->>'dedupe_day')::date
    limit 1;
    if existing_request.idempotency_key <> (request_row->>'idempotency_key')::uuid then
      insert into public.guide_consent_receipts(
        request_id, profile_id, guide_id, channel, granted,
        disclosure_version, disclosure_text, disclosure_sha256, source_url,
        client_timestamp, server_timestamp, suppression_state, observation_stage
      )
      select
        existing_request.id,
        (row->>'profile_id')::uuid,
        row->>'guide_id',
        row->>'channel',
        (row->>'granted')::boolean,
        row->>'disclosure_version',
        row->>'disclosure_text',
        row->>'disclosure_sha256',
        row->>'source_url',
        nullif(row->>'client_timestamp', '')::timestamptz,
        (row->>'server_timestamp')::timestamptz,
        coalesce(row->'suppression_state', '{}'::jsonb),
        'preference_revision'
      from jsonb_array_elements(receipt_rows) row
      on conflict do nothing;

      update public.guide_requests
      set requested_channels = array(
        select distinct unnest(requested_channels ||
          array(select jsonb_array_elements_text(request_row->'requested_channels')))
      )
      where id = existing_request.id;
    end if;
    return jsonb_build_object(
      'created', false,
      'id', existing_request.id,
      'status', existing_request.status,
      'provider_status', existing_request.provider_status,
      'idempotency_key', existing_request.idempotency_key,
      'shared_consents_recorded', existing_request.shared_consents_recorded
    );
  end if;

  insert into public.guide_consent_receipts(
    request_id, profile_id, guide_id, channel, granted,
    disclosure_version, disclosure_text, disclosure_sha256, source_url,
    client_timestamp, server_timestamp, suppression_state, observation_stage
  )
  select
    created_request.id,
    (row->>'profile_id')::uuid,
    row->>'guide_id',
    row->>'channel',
    (row->>'granted')::boolean,
    row->>'disclosure_version',
    row->>'disclosure_text',
    row->>'disclosure_sha256',
    row->>'source_url',
    nullif(row->>'client_timestamp', '')::timestamptz,
    (row->>'server_timestamp')::timestamptz,
    coalesce(row->'suppression_state', '{}'::jsonb),
    coalesce(row->>'observation_stage', 'submission')
  from jsonb_array_elements(receipt_rows) row;

  return jsonb_build_object(
    'created', true,
    'id', created_request.id,
    'status', created_request.status,
    'provider_status', created_request.provider_status,
    'idempotency_key', created_request.idempotency_key,
    'shared_consents_recorded', created_request.shared_consents_recorded
  );
end;
$$;

revoke all on function public.create_guide_request_with_receipts(jsonb, jsonb)
  from public, anon, authenticated;
grant execute on function public.create_guide_request_with_receipts(jsonb, jsonb) to service_role;

create or replace function public.claim_guide_delivery_attempt(
  target_request_id uuid,
  claim_token uuid,
  desired_channels text[]
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  current_request public.guide_requests;
  claimed_channels jsonb;
  current_unknown jsonb;
begin
  select * into current_request
  from public.guide_requests
  where id = target_request_id
    and status in ('accepted', 'provider_failed', 'provider_partial')
    and (retry_claimed_at is null or retry_claimed_at < now() - interval '5 minutes')
  for update;
  if current_request.id is null then
    return jsonb_build_object('claimed', false);
  end if;
  if coalesce(current_request.provider_status->>'state', 'not_attempted') = 'not_attempted' then
    claimed_channels := to_jsonb(desired_channels);
  else
    select coalesce(jsonb_agg(value), '[]'::jsonb) into claimed_channels
    from jsonb_array_elements_text(
      coalesce(current_request.provider_status->'failedChannels', '[]'::jsonb)
    ) value
    where value = any(desired_channels);
  end if;
  if jsonb_array_length(claimed_channels) = 0 then
    return jsonb_build_object('claimed', false, 'provider_status', current_request.provider_status);
  end if;
  select coalesce(jsonb_agg(distinct value), '[]'::jsonb) into current_unknown
  from jsonb_array_elements(
    coalesce(current_request.provider_status->'unknownChannels', '[]'::jsonb) || claimed_channels
  );
  update public.guide_requests
  set retry_claimed_at = now(),
      retry_claim_token = claim_token,
      provider_status = jsonb_set(
        jsonb_set(
          jsonb_set(provider_status, '{failedChannels}', '[]'::jsonb, true),
          '{unknownChannels}', current_unknown, true
        ),
        '{state}', '"in_flight"'::jsonb, true
      )
  where id = target_request_id;
  return jsonb_build_object(
    'claimed', true,
    'claimed_channels', claimed_channels,
    'provider_status', jsonb_set(
      jsonb_set(
        jsonb_set(current_request.provider_status, '{failedChannels}', '[]'::jsonb, true),
        '{unknownChannels}', current_unknown, true
      ),
      '{state}', '"in_flight"'::jsonb, true
    )
  );
end;
$$;

create or replace function public.release_guide_failed_retry(target_request_id uuid, claim_token uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  released_count integer;
begin
  update public.guide_requests
  set retry_claimed_at = null, retry_claim_token = null
  where id = target_request_id and retry_claim_token = claim_token;
  get diagnostics released_count = row_count;
  return released_count = 1;
end;
$$;

revoke all on function public.claim_guide_delivery_attempt(uuid, uuid, text[])
  from public, anon, authenticated;
revoke all on function public.release_guide_failed_retry(uuid, uuid) from public, anon, authenticated;
grant execute on function public.claim_guide_delivery_attempt(uuid, uuid, text[]) to service_role;
grant execute on function public.release_guide_failed_retry(uuid, uuid) to service_role;

alter table public.guide_requests enable row level security;
alter table public.guide_consent_receipts enable row level security;

create policy "Owners and assigned staff read guide requests"
  on public.guide_requests for select
  using (
    exists (
      select 1 from public.profiles p
      where p.id = profile_id
        and (p.user_id = auth.uid() or public.can_access_profile(p.id))
    )
  );

create policy "Owners and assigned staff read guide consent receipts"
  on public.guide_consent_receipts for select
  using (
    exists (
      select 1 from public.profiles p
      where p.id = profile_id
        and (p.user_id = auth.uid() or public.can_access_profile(p.id))
    )
  );
