import { test, expect, type Page } from '@playwright/test';

const conversationId = '00000000-0000-4000-8000-000000000001';
const appointment = {
  id: 'appt-1',
  status: 'confirmed',
  starts_at: '2030-07-16T22:00:00.000Z',
  ends_at: '2030-07-16T22:30:00.000Z',
  timezone: 'America/New_York',
};
const question =
  'To help prepare for your review, which county and state are the minerals in? It’s okay if you’re not sure yet.';
async function fixture(
  page: Page,
  {
    valid = true,
    declined = false,
    location = false,
    marker = true,
    delay = 0,
    accountRefused = true,
  } = {},
) {
  const messages: any[] = [
    { id: 'known-goal', role: 'user', content: 'I want to compare an offer.' },
    {
      id: 'known-answer',
      role: 'assistant',
      persona: 'travis',
      content: 'We can use the written offer to understand its terms.',
    },
  ];
  const payloads: any[] = [];
  await page.route('**/api/**', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true }),
    }),
  );
  await page.route('**/api/chat/session', async (route) => {
    if (delay) await new Promise((resolve) => setTimeout(resolve, delay));
    return route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        ok: true,
        conversationId,
        authenticated: false,
        deviceAccess: true,
        profile: { first_name: 'Billy', email: 'billy@example.test' },
        messages,
        ownerFacts: location ? { mineral_location: 'Reeves County, Texas' } : {},
        facts: [],
        interests: [],
        documents: [],
        conversations: [],
        permissions: {},
        appointments: valid ? [appointment] : [],
        documentUploadsEnabled: false,
        documentProcessingEnabled: false,
      }),
    });
  });
  await page.route('**/api/chat/events', async (route) => {
    const body = route.request().postDataJSON();
    messages.push({
      id: `m-${messages.length}`,
      role: body.role,
      content: body.content,
      persona: body.persona,
    });
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, id: `m-${messages.length - 1}` }),
    });
  });
  await page.route('**/api/chat/message', async (route) => {
    const body = route.request().postDataJSON();
    payloads.push(body);
    messages.push({ id: `m-${messages.length}`, role: 'user', content: body.message });
    const answer = body.context.discoveryDeclined
      ? 'Of course. You can leave the rest for your call.'
      : 'Reeves County, Texas. Is there a deadline for responding to the offer?';
    messages.push({
      id: `m-${messages.length}`,
      role: 'assistant',
      content: answer,
      persona: 'elena',
    });
    await route.fulfill({
      status: 200,
      contentType: 'text/event-stream',
      body: `event: message.delta\ndata: ${JSON.stringify({ type: 'message.delta', delta: answer, persona: 'elena' })}\n\nevent: done\ndata: {"type":"done"}\n\n`,
    });
  });
  await page.addInitScript(
    ({ conversationId, question, declined, marker, accountRefused }) => {
      if (!sessionStorage.getItem('fixture-initialized')) {
        sessionStorage.setItem('fixture-initialized', '1');
        if (accountRefused) sessionStorage.setItem('mrx_account_prompt_closed', '1');
        if (marker)
          sessionStorage.setItem(
            'mrx_appointment_preparation',
            JSON.stringify({
              appointmentId: 'appt-1',
              conversationId,
              expiresAt: Date.now() + 600000,
              state: 'pending',
              question,
            }),
          );
        if (declined) sessionStorage.setItem('mrx_discovery_declined', '1');
      }
    },
    { conversationId, question, declined, marker, accountRefused },
  );
  return { messages, payloads };
}

test('continues with one question, saves the answer, honors pause, and restores without reopening', async ({
  page,
}) => {
  const { messages, payloads } = await fixture(page, { accountRefused: false });
  await page.goto('/account/?welcome=appointment&prepare=1');
  const dialog = page.getByTestId('ask-travis-dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText('which county and state', { exact: false })).toBeVisible();
  await expect(dialog.getByText('How may I help you?', { exact: true })).toHaveCount(0);
  const input = page.getByTestId('travis-composer-input');
  await expect(input).toBeFocused();
  await input.fill('Reeves County, Texas');
  await input.press('Enter');
  await expect(
    dialog.getByText('Is there a deadline for responding to the offer?', { exact: false }),
  ).toBeVisible();
  await input.fill('Skip');
  await input.press('Enter');
  await expect(
    dialog.getByText('You can leave the rest for your call.', { exact: false }),
  ).toBeVisible();
  expect(payloads.at(-1).context.discoveryDeclined).toBe(true);
  expect(messages.filter((m) => m.content === question)).toHaveLength(1);
  await page.reload();
  await expect(page.getByTestId('ask-travis-open')).toHaveAttribute('data-chat-ready', 'true');
  await expect(dialog).toBeHidden();
  await page.getByTestId('ask-travis-open').click();
  await expect(dialog.getByText('Reeves County, Texas', { exact: true })).toBeVisible();
  expect(messages.filter((m) => m.content === question)).toHaveLength(1);
  await expect(page.getByTestId('travis-account-prompt')).toHaveCount(0);
});

test('uses saved location instead of re-asking it', async ({ page }) => {
  await fixture(page, { location: true });
  await page.goto('/account/?welcome=appointment&prepare=1');
  const dialog = page.getByTestId('ask-travis-dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText('Is there anything else', { exact: false })).toBeVisible();
  await expect(dialog.getByText('which county and state', { exact: false })).toHaveCount(0);
});

test('respects an earlier discovery refusal across the redirect', async ({ page }) => {
  await fixture(page, { declined: true });
  await page.goto('/account/?welcome=appointment&prepare=1');
  await expect(page.getByTestId('ask-travis-dialog')).toBeVisible();
  await expect(
    page.getByText('You can leave preparation for the call, or keep researching here.'),
  ).toBeVisible();
  await expect(page.getByText('which county and state', { exact: false })).toHaveCount(0);
});

for (const config of [
  { name: 'query alone', marker: false },
  { name: 'unverified appointment', valid: false },
])
  test(`does not start preparation from ${config.name}`, async ({ page }) => {
    await fixture(page, config);
    await page.goto('/account/?welcome=appointment&prepare=1');
    await expect(page.getByTestId('ask-travis-open')).toHaveAttribute('data-chat-ready', 'true');
    await expect(page.getByTestId('ask-travis-dialog')).toBeHidden();
  });

test('waits for appointment context before opening intake for an authenticated visitor', async ({
  page,
  baseURL,
}) => {
  test.skip(!baseURL?.includes('127.0.0.1'), 'Local synthetic auth configuration only');
  await fixture(page, { delay: 900 });
  let claimed = false;
  await page.route('**/api/account/claim', (route) => {
    claimed = true;
    return route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
  });
  await page.addInitScript(() => {
    const token = `${btoa(JSON.stringify({ alg: 'none', typ: 'JWT' }))}.${btoa(JSON.stringify({ sub: 'test-owner', role: 'authenticated', exp: 4102444800 }))}.test`;
    localStorage.setItem(
      'sb-supabase-auth-token',
      JSON.stringify({
        access_token: token,
        refresh_token: 'test',
        expires_at: 4102444800,
        expires_in: 3600,
        token_type: 'bearer',
        user: {
          id: 'test-owner',
          aud: 'authenticated',
          role: 'authenticated',
          email: 'billy@example.test',
          app_metadata: {},
          user_metadata: {},
          created_at: '2026-09-16T00:00:00Z',
        },
      }),
    );
    (window as any).__intakeEverOpened = false;
    new MutationObserver(() => {
      if (document.querySelector('.elena-intake')) (window as any).__intakeEverOpened = true;
    }).observe(document, { childList: true, subtree: true });
  });
  await page.goto('/account/?welcome=appointment&prepare=1');
  await expect(page.getByTestId('ask-travis-dialog')).toBeVisible();
  await expect.poll(() => claimed).toBe(true);
  await expect(page.locator('.elena-intake')).toHaveCount(0);
  expect(await page.evaluate(() => (window as any).__intakeEverOpened)).toBe(false);
});
