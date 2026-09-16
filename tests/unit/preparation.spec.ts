import { describe, it, expect } from 'vitest';
import {
  upcomingAppointment,
  readPreparation,
  preparationMatches,
  preparationQuestion,
} from '../../src/lib/platform/preparation';
const future = new Date(Date.now() + 86400000).toISOString();
const end = new Date(Date.now() + 90000000).toISOString();
const row = {
  id: 'a',
  ghl_appointment_id: 'provider-a',
  status: 'confirmed',
  starts_at: future,
  ends_at: end,
};
const marker = {
  appointmentId: 'provider-a',
  conversationId: 'c',
  expiresAt: Date.now() + 60000,
  state: 'pending' as const,
  question: 'Preparation?',
};
describe('post-booking preparation boundaries', () => {
  it('requires an actual future confirmed server appointment and matching conversation', () => {
    expect(preparationMatches(marker, 'c', [row])).toBe(true);
    expect(preparationMatches(marker, 'other-owner', [row])).toBe(false);
    expect(preparationMatches(marker, 'c', [])).toBe(false);
    expect(preparationMatches(marker, 'c', [{ ...row, status: 'cancelled' }])).toBe(false);
    expect(preparationMatches(marker, 'c', [{ ...row, starts_at: '2020-01-01' }])).toBe(false);
    expect(preparationMatches(marker, 'c', [{ ...row, ends_at: '2020-01-01' }])).toBe(false);
  });
  it('chooses the nearest valid upcoming booking', () => {
    expect(upcomingAppointment([{ ...row, starts_at: 'bad' }, row])?.id).toBe('a');
    expect(upcomingAppointment([{ ...row, status: 'pending' }])).toBeUndefined();
  });
  it('rejects absent, corrupt and expired navigation hints', () => {
    for (const value of [
      null,
      'bad',
      JSON.stringify({ ...marker, expiresAt: 1 }),
      JSON.stringify({ ...marker, conversationId: '' }),
    ])
      expect(readPreparation({ getItem: () => value })).toBeNull();
    expect(readPreparation({ getItem: () => JSON.stringify(marker) })).toEqual(marker);
  });
  it('asks one optional goal question when only scheduling is known', () => {
    expect(preparationQuestion('human-call', '', false)).toContain('what would you most like');
  });
  it('asks only missing location when goal is known', () => {
    const text = preparationQuestion('compare-offer', '', false);
    expect(text).toContain('which county and state');
    expect(text.match(/\?/g)).toHaveLength(1);
  });
  it('does not re-ask known location or infer a deadline from keyword mentions', () => {
    const text = preparationQuestion('compare-offer', 'Reeves County, Texas', false);
    expect(text).not.toContain('which county');
    expect(text).not.toContain('deadline');
    expect(text).toContain('anything else');
  });
  it('honors discovery refusal even with a booked call', () => {
    expect(preparationQuestion('compare-offer', '', true)).not.toContain('?');
  });
});
