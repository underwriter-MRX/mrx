import type { APIRoute } from 'astro';
import { z } from 'zod';
import { appendGhlConversationText } from '../../../lib/platform/ghl';
import { resolveOwnerSession } from '../../../lib/platform/identity';
import { getSupabaseServer, saveMessage } from '../../../lib/platform/supabase';
import {
  assertRateLimit,
  assertSameOrigin,
  clientKey,
  json,
  safeError,
} from '../../../lib/platform/security';
import { grahamPreparationSummary } from '../../../lib/platform/graham';

const DISCLOSURE_VERSION = '2026-09-30-graham-appointment-preparation';
const sensitivePattern =
  /\b(?:social security|ssn|bank account|routing number|credit card|passport number|tax return)\b/i;

const Schema = z.object({
  appointmentId: z.string().min(1).max(200),
  inquiryType: z.enum(['investor', 'project-provider', 'specific-project']),
  consent: z.literal(true),
  sourceUrl: z.string().url().max(2_000),
  answers: z
    .array(
      z.object({
        question: z.string().min(1).max(500),
        answer: z.string().min(1).max(1_000),
      }),
    )
    .min(1)
    .max(8),
});

function assignedUnderwriterName(rows: unknown) {
  if (!Array.isArray(rows)) return null;
  for (const row of rows as any[]) {
    const staff = Array.isArray(row?.assigned_staff) ? row.assigned_staff[0] : row?.assigned_staff;
    if (staff?.active === true && staff?.role === 'underwriter' && staff?.display_name)
      return String(staff.display_name);
  }
  return null;
}

export const POST: APIRoute = async (context) => {
  try {
    assertSameOrigin(context.request);
    assertRateLimit(`appointment-preparation:${clientKey(context)}`, 12, 10 * 60_000);
    const parsed = Schema.safeParse(await context.request.json());
    if (!parsed.success)
      return json(
        { ok: false, error: 'invalid_preparation', appointmentPreserved: true },
        { status: 400 },
      );
    const summary = grahamPreparationSummary(parsed.data.inquiryType, parsed.data.answers);
    if (sensitivePattern.test(summary))
      return json(
        { ok: false, error: 'sensitive_information_not_accepted', appointmentPreserved: true },
        { status: 400 },
      );

    const session = await resolveOwnerSession(context);
    const supabase = getSupabaseServer();
    if (!supabase)
      return json(
        { ok: false, error: 'preparation_storage_unavailable', appointmentPreserved: true },
        { status: 503 },
      );

    const { data: appointment, error: appointmentError } = await supabase
      .from('appointments')
      .select('id,profile_id,conversation_id,ghl_appointment_id,ghl_contact_id,status')
      .eq('profile_id', session.profileId)
      .eq('ghl_appointment_id', parsed.data.appointmentId)
      .eq('status', 'confirmed')
      .maybeSingle();
    if (appointmentError) throw appointmentError;
    if (!appointment)
      return json(
        { ok: false, error: 'confirmed_appointment_not_found', appointmentPreserved: true },
        { status: 404 },
      );

    const { data: saved, error: saveError } = await supabase
      .from('appointment_preparations')
      .upsert(
        {
          appointment_id: appointment.id,
          profile_id: session.profileId,
          conversation_id: appointment.conversation_id || session.conversationId,
          inquiry_type: parsed.data.inquiryType,
          answers: parsed.data.answers,
          summary,
          supplied_fact_status: 'visitor_supplied_unverified',
          consented: true,
          disclosure_version: DISCLOSURE_VERSION,
          source_url: parsed.data.sourceUrl,
          staff_queue_status: 'ready',
          ghl_sync_status: 'pending',
          ghl_sync_error: null,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'appointment_id' },
      )
      .select('id')
      .single();
    if (saveError) throw saveError;

    const messageId = await saveMessage({
      conversationId: appointment.conversation_id || session.conversationId,
      role: 'system',
      persona: 'graham',
      eventType: 'consent',
      content: summary,
      metadata: {
        appointmentPreparationId: saved.id,
        appointmentId: appointment.id,
        disclosureVersion: DISCLOSURE_VERSION,
        consented: true,
        visibility: 'human_review',
        factStatus: 'visitor_supplied_unverified',
      },
    });
    if (!messageId)
      return json(
        {
          ok: false,
          error: 'preparation_partially_saved',
          appointmentPreserved: true,
          staffPortalSaved: true,
          ghlSyncStatus: 'pending',
        },
        { status: 502 },
      );
    const { error: conversationUpdateError } = await supabase
      .from('conversations')
      .update({ summary, updated_at: new Date().toISOString() })
      .eq('id', appointment.conversation_id || session.conversationId);
    if (conversationUpdateError)
      return json(
        {
          ok: false,
          error: 'preparation_partially_saved',
          appointmentPreserved: true,
          staffPortalSaved: true,
          ghlSyncStatus: 'pending',
        },
        { status: 502 },
      );

    let ghlSyncStatus: 'synced' | 'failed' | 'not_configured' = 'not_configured';
    let ghlSyncError: string | null = null;
    let ghlMessageIds: string[] = [];
    try {
      if (!appointment.ghl_contact_id) throw new Error('GHL contact is not connected');
      ghlMessageIds = await appendGhlConversationText({
        contactId: appointment.ghl_contact_id,
        source: 'consented Graham appointment preparation',
        text: summary,
        occurredAt: new Date().toISOString(),
        externalId: `appointment-preparation:${saved.id}`,
      });
      if (!ghlMessageIds.length) throw new Error('GHL did not return a preparation receipt');
      ghlSyncStatus = 'synced';
    } catch (error) {
      ghlSyncStatus = appointment.ghl_contact_id ? 'failed' : 'not_configured';
      ghlSyncError = error instanceof Error ? error.message.slice(0, 500) : 'sync_failed';
    }
    const { error: syncStatusUpdateError } = await supabase
      .from('appointment_preparations')
      .update({
        ghl_sync_status: ghlSyncStatus,
        ghl_sync_error: ghlSyncError,
        ghl_message_ids: ghlMessageIds,
        staff_queue_status: ghlSyncStatus === 'synced' ? 'ready' : 'partial',
        updated_at: new Date().toISOString(),
      })
      .eq('id', saved.id);
    if (syncStatusUpdateError)
      return json(
        {
          ok: false,
          error: 'preparation_partially_saved',
          appointmentPreserved: true,
          staffPortalSaved: true,
          ghlSyncStatus: 'pending',
        },
        { status: 502 },
      );

    const { data: assignments } = await supabase
      .from('case_assignments')
      .select(
        'assigned_staff:staff_profiles!case_assignments_staff_profile_id_fkey(display_name,role,active)',
      )
      .eq('profile_id', session.profileId);
    const assignedUnderwriter = assignedUnderwriterName(assignments);

    if (ghlSyncStatus !== 'synced')
      return json(
        {
          ok: false,
          error: 'preparation_partially_saved',
          appointmentPreserved: true,
          staffPortalSaved: true,
          ghlSyncStatus,
          assignedUnderwriter,
        },
        { status: 502 },
      );

    return json({
      ok: true,
      appointmentPreserved: true,
      staffPortalSaved: true,
      ghlSyncStatus,
      ghlMessageIds,
      assignedUnderwriter,
    });
  } catch (error) {
    return safeError(error);
  }
};
