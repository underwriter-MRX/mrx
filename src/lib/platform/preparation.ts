import type { OwnerGoal } from './rapport';

export const additionalPreparationQuestion =
  'We can build on what you’ve already shared. Is there anything else you’d like the underwriter to focus on during your call? You can also leave the rest for the call.';

export const preparationStorageKey = 'mrx_appointment_preparation';
export type PreparationEntry = {
  appointmentId: string;
  conversationId: string;
  expiresAt: number;
  state: 'pending' | 'started';
  question: string;
};

// A navigation marker is only a UX hint. Callers must match it to server appointment rows.
export function readPreparation(
  storage: Pick<Storage, 'getItem'>,
  now = Date.now(),
): PreparationEntry | null {
  try {
    const entry = JSON.parse(storage.getItem(preparationStorageKey) || 'null');
    return entry &&
      typeof entry.appointmentId === 'string' &&
      typeof entry.conversationId === 'string' &&
      entry.conversationId &&
      Number.isFinite(entry.expiresAt) &&
      entry.expiresAt > now &&
      ['pending', 'started'].includes(entry.state) &&
      typeof entry.question === 'string'
      ? entry
      : null;
  } catch {
    return null;
  }
}

export function upcomingAppointment(rows: unknown[], now = Date.now()) {
  return rows
    .filter(
      (row: any) =>
        row &&
        row.status === 'confirmed' &&
        typeof row.id === 'string' &&
        Date.parse(row.starts_at) > now &&
        Date.parse(row.ends_at) > Date.parse(row.starts_at),
    )
    .sort((a: any, b: any) => Date.parse(a.starts_at) - Date.parse(b.starts_at))[0] as
    | {
        id: string;
        ghl_appointment_id?: string;
        starts_at: string;
        ends_at: string;
        timezone?: string;
        status: string;
      }
    | undefined;
}

export function preparationMatches(
  entry: PreparationEntry | null,
  conversationId: string,
  rows: unknown[],
) {
  return Boolean(
    entry &&
    entry.conversationId === conversationId &&
    rows.some(
      (row: any) =>
        upcomingAppointment([row]) &&
        (row.id === entry.appointmentId || row.ghl_appointment_id === entry.appointmentId),
    ),
  );
}

export function preparationQuestion(goal: OwnerGoal | null, location: string, declined: boolean) {
  if (declined) return 'You can leave preparation for the call, or keep researching here.';
  if (!goal || goal === 'human-call' || goal === 'other')
    return 'Before your call, what would you most like the underwriter to help you understand? You can also leave this for the call.';
  if (!location)
    return 'To help prepare for your review, which county and state are the minerals in? It’s okay if you’re not sure yet.';
  return additionalPreparationQuestion;
}
