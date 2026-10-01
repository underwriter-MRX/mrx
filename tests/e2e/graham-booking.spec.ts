import { expect, test } from '@playwright/test';

async function reply(page: any, value: string) {
  const input = page.getByTestId('travis-composer-input');
  await input.fill(value);
  await page.getByRole('button', { name: 'Send reply' }).click();
}

test('Graham books first, prepares progressively, preserves the appointment, and retries note save', async ({
  page,
}) => {
  test.setTimeout(90_000);
  await page.route('**/api/chat/session', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        ok: true,
        conversationId: '00000000-0000-4000-8000-000000000001',
        authenticated: false,
        profile: null,
        messages: [],
        ownerFacts: {},
        facts: [],
        interests: [],
        documents: [],
        appointments: [],
        conversations: [],
        permissions: {},
        documentUploadsEnabled: false,
        documentProcessingEnabled: false,
      }),
    }),
  );
  await page.route('**/api/chat/events', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }),
  );
  await page.route('**/api/chat/facts', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }),
  );
  await page.route('**/api/appointments/availability**', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        ok: true,
        options: [
          {
            id: '2030-10-08T20:00:00.000Z',
            start: '2030-10-08T20:00:00.000Z',
            end: '2030-10-08T20:30:00.000Z',
            label: 'Tuesday, Oct 8 at 3:00 PM',
            timezone: 'America/Chicago',
          },
        ],
      }),
    }),
  );
  await page.route('**/api/appointments', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        ok: true,
        appointmentId: 'ghl-appointment-1',
        notifications: [],
        notificationFailures: [],
        memberAccess: { status: 'unavailable', linkSent: false, redirectTo: null },
      }),
    }),
  );
  let preparationAttempts = 0;
  const preparationPayloads: any[] = [];
  await page.route('**/api/appointments/preparation', async (route) => {
    preparationAttempts += 1;
    preparationPayloads.push(route.request().postDataJSON());
    await route.fulfill({
      status: preparationAttempts === 1 ? 502 : 200,
      contentType: 'application/json',
      body: JSON.stringify(
        preparationAttempts === 1
          ? {
              ok: false,
              error: 'preparation_partially_saved',
              appointmentPreserved: true,
              staffPortalSaved: true,
              ghlSyncStatus: 'failed',
            }
          : {
              ok: true,
              appointmentPreserved: true,
              staffPortalSaved: true,
              ghlSyncStatus: 'synced',
              ghlMessageIds: ['ghl-message-1'],
              assignedUnderwriter: 'Verified Underwriter',
            },
      ),
    });
  });

  await page.goto('/team/graham/', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('button', { name: 'Explore investing' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Bring an opportunity' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Ask about a project' })).toBeVisible();
  await page.getByRole('button', { name: 'Bring an opportunity' }).click();

  await expect(page.getByTestId('ask-travis-dialog')).toBeVisible();
  await expect(
    page.getByText('Would you like to go over the opportunity with an MRX underwriter?'),
  ).toBeVisible();
  await expect(page.getByTestId('travis-composer-input')).toHaveAttribute(
    'placeholder',
    'Ask Graham about your mineral-rights question…',
  );
  await expect(page.getByText('MRX remembers this conversation on this device.')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close conversation with Graham' })).toBeVisible();
  await expect(page.getByText('Ask Travis anything about your minerals…')).toHaveCount(0);
  await expect(page.getByText('Who is the operator?')).toHaveCount(0);
  await expect(page.getByText('What’s your first name?')).toHaveCount(0);
  await page.locator('[data-reply="book"]').click();

  await page.locator('[data-reply="timezone-confirm"]').click();
  await page.locator('[data-reply="next-available"]').click();
  await page.locator('[data-reply="2030-10-08T20:00:00.000Z"]').click();
  await reply(page, 'Riley');
  await reply(page, 'riley@example.com');
  await reply(page, '432-555-0101');
  await page.locator('[data-reply="yes"]').click();
  await page.locator('[data-reply="no"]').click();
  await page.locator('[data-reply="no"]').click();
  await page.locator('[data-reply="no"]').click();

  await expect(page.getByText('You’re booked for Tuesday, Oct 8 at 3:00 PM.')).toBeVisible();
  await expect(
    page.getByText('May I ask a few questions to help the underwriter prepare'),
  ).toBeVisible();
  await page.locator('[data-reply="yes"]').click();
  await page.locator('[data-reply="project-provider"]').click();

  const answers = [
    'Acme Operating',
    'Wolfcamp A',
    'Midland County, Texas',
    'Four wells planned',
    '75 percent NRI',
    'wellbore-only',
    'unknown',
  ];
  const questions = [
    'Who is the operator?',
    'What formation is being drilled?',
    'What county and state is it in?',
    'How many wells are included or planned?',
    'What is the net revenue interest (NRI) being offered?',
    'Is the interest a leasehold assignment or wellbore-only?',
    'What is the planned frac size in pounds per foot?',
  ];
  for (let index = 0; index < questions.length; index += 1) {
    await expect(page.getByText(questions[index], { exact: true })).toBeVisible();
    await reply(page, answers[index]);
  }

  await expect(
    page.getByText(
      'If you have a project summary or supporting documents, please send those over too.',
      { exact: false },
    ),
  ).toBeVisible();
  await reply(page, 'Correction: the NRI is supplied as 72 percent, not verified.');
  await expect(page.getByText('I added that correction.')).toBeVisible();
  await page.locator('[data-reply="yes"]').click();

  await expect(page.getByText('Your appointment is still confirmed.')).toBeVisible();
  await expect(page.locator('[data-reply="retry"]')).toBeVisible();
  await page.locator('[data-reply="retry"]').click();
  await expect(page.getByText('Verified Underwriter, the assigned case reviewer')).toBeVisible();
  await expect(page.getByText('This confirms receipt, not project approval')).toBeVisible();

  expect(preparationAttempts).toBe(2);
  expect(preparationPayloads[0]).toEqual(preparationPayloads[1]);
  expect(preparationPayloads[0]).toMatchObject({
    appointmentId: 'ghl-appointment-1',
    inquiryType: 'project-provider',
    consent: true,
  });
  expect(preparationPayloads[0].answers).toHaveLength(7);
  expect(preparationPayloads[0].answers[4].answer).toContain('72 percent');
});

test('Explore investing CTA keeps Graham as the booking origin', async ({ page }) => {
  await page.route('**/api/chat/session', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        ok: true,
        conversationId: '00000000-0000-4000-8000-000000000002',
        authenticated: false,
        profile: null,
        messages: [],
        ownerFacts: {},
        facts: [],
        interests: [],
        documents: [],
        appointments: [],
        conversations: [],
        permissions: {},
      }),
    }),
  );
  await page.route('**/api/chat/events', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }),
  );
  await page.goto('/team/graham/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Explore investing' }).click();
  await expect(page.getByText('Talking with Graham', { exact: true })).toBeVisible();
  await expect(
    page.getByText('Would you like to go over the opportunity with an MRX underwriter?'),
  ).toBeVisible();
  await expect(page.locator('[data-reply="book"]')).toBeVisible();
});

test('returning confirmed visitor enters Graham preparation without rebooking', async ({
  page,
}) => {
  let bookingCalls = 0;
  await page.route('**/api/chat/session', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        ok: true,
        conversationId: '00000000-0000-4000-8000-000000000003',
        authenticated: false,
        profile: { first_name: 'Riley', timezone: 'America/Chicago' },
        messages: [],
        ownerFacts: {},
        facts: [],
        interests: [],
        documents: [],
        appointments: [
          {
            id: '55555555-5555-4555-8555-555555555555',
            ghl_appointment_id: 'ghl-returning-1',
            starts_at: '2030-10-09T20:00:00.000Z',
            ends_at: '2030-10-09T20:30:00.000Z',
            timezone: 'America/Chicago',
            status: 'confirmed',
            created_at: '2030-10-01T12:00:00.000Z',
          },
        ],
        conversations: [],
        permissions: {},
      }),
    }),
  );
  await page.route('**/api/chat/events', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }),
  );
  await page.route('**/api/appointments**', (route) => {
    bookingCalls += 1;
    return route.fulfill({ status: 500, body: 'must not book again' });
  });

  await page.goto('/team/graham/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Ask about a project' }).click();
  await expect(page.getByText('Talking with Graham', { exact: true })).toBeVisible();
  await expect(page.getByText('Your appointment remains confirmed.')).toBeVisible();
  await expect(
    page.getByText('May I ask a few optional questions to help the underwriter prepare?'),
  ).toBeVisible();
  await expect(page.locator('[data-reply="yes"]')).toBeVisible();
  expect(bookingCalls).toBe(0);
});
