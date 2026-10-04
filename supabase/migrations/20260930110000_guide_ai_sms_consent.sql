-- Preserve existing one-time consent; only new explicit v2 consent authorizes AI text replies.
alter table public.guide_consent_receipts
  drop constraint if exists guide_consent_receipts_channel_check;
alter table public.guide_consent_receipts
  add constraint guide_consent_receipts_channel_check
  check (channel in ('email_transactional', 'sms_transactional', 'email_marketing', 'human_call', 'sms_ai_conversation'));
