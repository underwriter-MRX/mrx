import { expect, test, type Page } from '@playwright/test';
async function saved(page: Page) {
  await page.route('**/api/chat/session', (r) =>
    r.fulfill({
      json: {
        ok: true,
        messages: [
          { id: 'qa1', role: 'user', content: 'Keep my question.' },
          {
            id: 'qa2',
            role: 'assistant',
            persona: 'graham',
            content: 'Your saved conversation is still here.',
          },
        ],
        appointments: [],
        interests: [],
        permissions: {},
      },
    }),
  );
  await page.route('**/api/chat/events', (r) => r.fulfill({ json: { ok: true } }));
}
test('Graham chat follows the keyboard viewport, preserves drafts and restores focus', async ({
  page,
}, info) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await saved(page);
  await page.goto('/team/graham/', { waitUntil: 'domcontentloaded' });
  // The development-only Astro toolbar is absent from production.
  await page.addStyleTag({ content: 'astro-dev-toolbar { display:none !important; }' });
  await page.evaluate(() => window.scrollTo({ top: 40, behavior: 'instant' }));
  const ask = page.getByRole('button', { name: 'Ask Graham a question', exact: true });
  await ask.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(page.locator('.page')).toHaveJSProperty('inert', true);
  const input = page.getByTestId('travis-composer-input');
  await expect(input).not.toBeFocused();
  // Simulate a keyboard shrinking the visual viewport without shrinking the layout viewport.
  await page.evaluate(() => {
    const vv = visualViewport!;
    Object.defineProperty(vv, 'height', { configurable: true, get: () => 400 });
    Object.defineProperty(vv, 'offsetTop', { configurable: true, get: () => 24 });
    vv.dispatchEvent(new Event('resize'));
  });
  await expect(dialog).toHaveClass(/travis-panel--compact/);
  await input.fill('Draft remains here');
  await expect.poll(async () => Math.abs((await dialog.boundingBox())!.y - 24)).toBeLessThan(0.5);
  const panel = await dialog.boundingBox();
  const box = await input.boundingBox();
  expect(panel!.y).toBeCloseTo(24, 0);
  expect(panel!.height).toBeCloseTo(400, 0);
  expect(box!.y).toBeGreaterThanOrEqual(24);
  expect(box!.y + box!.height).toBeLessThanOrEqual(424);
  expect((await page.locator('.travis-messages').boundingBox())!.height).toBeGreaterThan(100);
  await expect(page.locator('.travis-more-options')).not.toHaveAttribute('open', '');
  await page.screenshot({ path: info.outputPath('graham-keyboard.png'), animations: 'disabled' });
  await page.getByRole('button', { name: 'Close conversation with Graham' }).click();
  await expect(page.locator('.page')).toHaveJSProperty('inert', false);
  await expect(ask).toBeFocused();
  expect(await page.evaluate(() => document.body.style.position)).toBe('');
  expect(await page.evaluate(() => scrollY)).toBeCloseTo(40, 0);
  await ask.click();
  await expect(input).toHaveValue('Draft remains here');
});
for (const width of [320, 375, 430, 768, 1440])
  test(`contact controls at ${width}px`, async ({ page }, info) => {
    await page.setViewportSize({ width, height: 812 });
    await saved(page);
    await page.goto('/team/graham/', { waitUntil: 'domcontentloaded' });
    // The development-only Astro toolbar is absent from production.
    await page.addStyleTag({ content: 'astro-dev-toolbar { display:none !important; }' });
    const phone = page.locator('.header a[href^="tel:"]');
    await expect(phone).toBeVisible();
    await expect(phone).toHaveAttribute('href', /^tel:\+\d{10,15}$/);
    const p = await phone.boundingBox(),
      t = await page.locator('.header__ask').boundingBox();
    expect(p!.width).toBeGreaterThanOrEqual(44);
    expect(p!.height).toBeGreaterThanOrEqual(44);
    expect(p!.x + p!.width).toBeLessThanOrEqual(t!.x + 1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
      width,
    );
    const bar = page.locator('.mobile-contact-bar');
    if (width <= 767) {
      await expect(bar).toBeVisible();
      await expect(bar.getByRole('link', { name: /Call/ })).toHaveAttribute(
        'href',
        (await phone.getAttribute('href')) as string,
      );
      await page.getByRole('button', { name: 'Ask Graham a question', exact: true }).click();
      await expect(bar).not.toBeVisible();
      await page.getByRole('button', { name: 'Close conversation with Graham' }).click();
      const travis = bar.getByRole('button', { name: 'Ask Travis', exact: true });
      await travis.click();
      await expect(page.locator('#travis-title')).toHaveText('Talking with Travis');
      await expect(
        page.getByText('Your saved conversation is still here.', { exact: true }),
      ).toBeVisible();
      await page.getByRole('button', { name: 'Close conversation with Travis' }).click();
      await expect(travis).toBeFocused();
      await page.screenshot({
        path: info.outputPath('mobile-contact.png'),
        animations: 'disabled',
      });
      await page.locator('.footer__bottom').scrollIntoViewIfNeeded();
      const footer = await page.locator('.footer__bottom').boundingBox(),
        b = await bar.boundingBox();
      expect(footer!.y + footer!.height).toBeLessThanOrEqual(b!.y);
    } else await expect(bar).not.toBeVisible();
    await page.locator('.header__ask').click();
    await expect(page.locator('#travis-title')).toHaveText('Talking with Travis');
  });

for (const path of [
  '/',
  '/contact/',
  '/blog/how-do-i-find-an-oklahoma-pooling-order-after-getting-a-notice/',
]) {
  test(`mobile contact remains usable on ${path}`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await saved(page);
    await page.goto(path, { waitUntil: 'domcontentloaded' });
    await page.addStyleTag({ content: 'astro-dev-toolbar { display:none !important; }' });
    const bar = page.getByRole('navigation', { name: 'Quick contact' });
    await expect(bar).toBeInViewport();
    await expect(bar.getByRole('link', { name: /Call/ })).toHaveAttribute(
      'href',
      /^tel:\+\d{10,15}$/,
    );
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
      375,
    );
    await bar.getByRole('button', { name: 'Ask Travis', exact: true }).click();
    await expect(page.locator('#travis-title')).toHaveText('Talking with Travis');
    await expect(page.getByTestId('travis-composer-input')).toBeInViewport();
  });
}

for (const width of [320, 375, 430])
  test(`mobile conversation keeps reading space at ${width}px`, async ({ page }, info) => {
    await page.setViewportSize({ width, height: 740 });
    await page.route('**/api/chat/session', (r) =>
      r.fulfill({
        json: {
          ok: true,
          authenticated: false,
          appointments: [],
          permissions: {},
          interests: [],
          messages: [
            { id: '1', role: 'user', content: 'I received an offer for my mineral rights.' },
            {
              id: '2',
              role: 'assistant',
              persona: 'graham',
              content: 'We can organize the offer and your questions for a human underwriter.',
            },
            {
              id: '3',
              role: 'user',
              content: 'The minerals are in Reeves County, Texas. What should I bring to the call?',
            },
            {
              id: '4',
              role: 'assistant',
              persona: 'graham',
              content:
                'Bring the written offer and any ownership records you already have. A human underwriter can review them with you. Missing documents are okay; we can identify the next useful step together.',
            },
          ],
        },
      }),
    );
    await page.route('**/api/chat/events', (r) => r.fulfill({ json: { ok: true } }));
    await page.goto('/team/graham/');
    await page.addStyleTag({ content: 'astro-dev-toolbar { display:none !important; }' });
    await page.getByRole('button', { name: 'Ask Graham a question', exact: true }).click();
    const input = page.getByTestId('travis-composer-input');
    await expect(input).toHaveAttribute('placeholder', 'Message Graham…');
    const account = page.getByTestId('travis-account-prompt');
    await expect(account).toBeVisible();
    await expect(account).not.toHaveAttribute('open', '');
    await expect(page.getByRole('button', { name: 'Create a free account' })).not.toBeVisible();
    await expect(page.locator('.travis-more-options')).not.toHaveAttribute('open', '');
    expect((await page.locator('.travis-messages').boundingBox())!.height).toBeGreaterThan(480);
    expect((await page.locator('.travis-composer').boundingBox())!.height).toBeLessThan(150);
    expect((await input.boundingBox())!.height).toBeLessThan(60);
    await account.scrollIntoViewIfNeeded();
    await page.screenshot({
      path: info.outputPath('clean-mobile-chat.png'),
      animations: 'disabled',
    });
    await account.locator('summary').click();
    await expect(
      page.getByText('A free account keeps your questions and records together.', { exact: false }),
    ).toBeVisible();
    await page.getByRole('button', { name: 'Keep chatting for now' }).click();
    await expect(account).toHaveCount(0);
    const summary = page.locator('.travis-more-options > summary');
    await summary.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('.travis-more-options')).toHaveAttribute('open', '');
    await expect(
      page.getByRole('button', { name: 'Schedule a human underwriter call' }),
    ).toBeVisible();
    await expect(
      page.getByText('Dictate with the microphone, review your words, then tap Send.', {
        exact: false,
      }),
    ).toBeVisible();
    await input.fill('Keep my draft while opening options');
    await summary.click();
    await expect(input).toHaveValue('Keep my draft while opening options');
    await expect(
      page.getByText('Bring the written offer and any ownership records you already have.', {
        exact: false,
      }),
    ).toBeVisible();
  });
