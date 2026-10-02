import { test, expect } from '@playwright/test';

for (const scenario of ['provider-failure', 'blocked', 'partial', 'network'] as const) {
  test(`answer delivery reports ${scenario} truthfully and preserves the answer`, async ({
    page,
  }) => {
    let deliveries = 0;
    await page.route('**/api/chat/**', async (route) => {
      const path = new URL(route.request().url()).pathname.replace(/\/$/, '');
      if (path.endsWith('/session'))
        return route.fulfill({
          json: {
            ok: true,
            messages: [
              {
                id: 'saved',
                role: 'assistant',
                persona: 'travis',
                content: 'Your mineral-rights answer remains available.',
              },
            ],
            profile: { first_name: 'Test', phone: '+12125550199', email: 'test@example.com' },
            ownerFacts: {},
            facts: [],
            appointments: [],
            permissions: {},
          },
        });
      if (path.endsWith('/delivery')) {
        deliveries++;
        const payload = route.request().postDataJSON();
        expect(payload.answer).toBe('Your mineral-rights answer remains available.');
        expect(payload.profile.permissions.sms).toBe(true);
        if (scenario === 'network') return route.abort('failed');
        return route.fulfill({
          status: scenario === 'partial' ? 200 : 502,
          json: {
            ok: scenario === 'partial',
            sent: scenario === 'partial' ? ['email'] : [],
            failures: ['sms'],
            failureReasons: {
              sms: scenario === 'blocked' ? 'delivery_channel_blocked' : 'provider_delivery_failed',
            },
          },
        });
      }
      return route.fulfill({ json: { ok: true } });
    });
    await page.goto('/team/wade/', { waitUntil: 'domcontentloaded' });
    await page.getByRole('button', { name: 'Ask Wade a question', exact: true }).click();
    const dialog = page.getByRole('dialog');
    await dialog.getByRole('button', { name: /^Send me this answer/ }).click();
    await dialog
      .getByRole('button', {
        name: scenario === 'partial' ? 'Email and text' : 'Text it',
        exact: false,
      })
      .click();
    if (scenario === 'partial') {
      await expect(dialog.getByText(/Is it okay for MRX to email this answer/)).toBeVisible();
      await dialog.getByRole('button', { name: /^Yes(?: |$)/ }).click();
    }
    await expect(dialog.getByText(/Is it okay for MRX to text the related link/)).toBeVisible();
    await dialog.getByRole('button', { name: /^Yes(?: |$)/ }).click();
    const expected =
      scenario === 'blocked'
        ? 'The messaging provider has this contact blocked'
        : scenario === 'partial'
          ? 'The other requested delivery method failed'
          : 'MRX couldn’t confirm the message was sent';
    await expect(dialog.getByText(expected, { exact: false })).toBeVisible();
    await expect(dialog.getByText('nothing left the site', { exact: false })).toHaveCount(0);
    await expect(
      dialog.getByText('Your mineral-rights answer remains available.', { exact: true }),
    ).toHaveCount(1);
    expect(deliveries).toBe(1);
  });
}
