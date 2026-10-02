import { expect, test } from '@playwright/test';

const guideNames = [
  'Travis',
  'Connor',
  'Clay',
  'Owen',
  'Laurel',
  'Elena',
  'Wade',
  'Graham',
  'Cora',
  'Marisol',
  'Paige',
];
const directoryNames = ['Wade', 'Cora', 'Marisol', 'Paige'];
for (const name of guideNames) {
  test(`${name} profile is compact and reopens existing history`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 375, height: 812 });
    let writes = 0;
    await page.route('**/api/chat/session', async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 350));
      await route.fulfill({
        json: {
          ok: true,
          conversationId: '00000000-0000-4000-8000-000000000011',
          authenticated: false,
          messages: [
            { id: 'user-1', role: 'user', content: 'Please keep our earlier discussion.' },
            {
              id: 'answer-1',
              role: 'assistant',
              content: 'Your earlier discussion is here.',
              persona: 'clay',
            },
          ],
          profile: null,
          ownerFacts: {},
          facts: [],
          interests: [],
          documents: [],
          appointments: [],
          conversations: [],
          permissions: {},
          documentUploadsEnabled: false,
          documentProcessingEnabled: false,
        },
      });
    });
    await page.route('**/api/chat/events', (route) => route.fulfill({ json: { ok: true } }));
    await page.route('**/api/chat/message', (route) => {
      writes++;
      return route.fulfill({ status: 500 });
    });
    await page.goto(`/team/${name.toLowerCase()}/`, { waitUntil: 'domcontentloaded' });
    const ask = page.getByRole('button', { name: `Ask ${name} a question`, exact: true });
    const portrait = page.locator('.mrx-guide-profile > img');
    await expect(ask).toBeVisible();
    const buttonPortrait = ask.locator('img');
    await expect(buttonPortrait).toHaveAttribute(
      'src',
      `/assets/team/${name.toLowerCase()}-256.webp`,
    );
    await expect
      .poll(() =>
        buttonPortrait.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0),
      )
      .toBe(true);
    await expect(ask.locator('small')).toHaveText('Straight answers, 24/7');
    for (const width of [320, 375]) {
      await page.setViewportSize({ width, height: 812 });
      const imageBox = await portrait.boundingBox();
      const buttonBox = await ask.boundingBox();
      expect(imageBox?.width).toBeLessThanOrEqual(80);
      expect(imageBox?.height).toBeLessThanOrEqual(80);
      expect(buttonBox?.height).toBeGreaterThanOrEqual(44);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
      ).toBe(true);
    }
    if (name === 'Graham') {
      await page.screenshot({ path: testInfo.outputPath('graham-mobile.png') });
      await ask.screenshot({ path: testInfo.outputPath('graham-avatar-button.png') });
    }
    await ask.click();
    const dialog = page.getByRole('dialog');
    const responder = directoryNames.includes(name) ? 'Travis' : name;
    await expect(dialog).toBeVisible();
    await expect(dialog.locator('#travis-title')).toContainText(`Talking with ${responder}`);
    await expect(
      dialog.getByText('Your earlier discussion is here.', { exact: true }),
    ).toBeVisible();
    await expect(dialog.locator('.travis-message')).toHaveCount(2);
    if (directoryNames.includes(name))
      await expect(
        dialog.getByRole('status').filter({ hasText: `${name} is a directory-only guide` }),
      ).toContainText(`${name} is a directory-only guide`);
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
    await expect(ask).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(dialog).toBeVisible();
    await expect(dialog.locator('.travis-message')).toHaveCount(2);
    await expect(page.getByTestId('travis-composer-input')).toBeInViewport();
    expect(writes).toBe(0);
    if (name === 'Graham')
      await page.screenshot({
        path: testInfo.outputPath('graham-chat-resumed.png'),
        animations: 'disabled',
      });
  });
}

test('fresh Connor conversation uses Connor without a fabricated user prompt', async ({ page }) => {
  await page.route('**/api/chat/session', (route) =>
    route.fulfill({
      json: { ok: true, messages: [], appointments: [], interests: [], permissions: {} },
    }),
  );
  await page.route('**/api/chat/events', (route) => route.fulfill({ json: { ok: true } }));
  await page.goto('/team/connor/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Ask Connor a question' }).click();
  await expect(
    page
      .getByRole('dialog')
      .getByText('Hi, I’m Connor, a fictional MRX AI guide. What’s your first name?', {
        exact: true,
      }),
  ).toBeVisible();
  await expect(page.locator('.travis-message--user')).toHaveCount(0);
});
