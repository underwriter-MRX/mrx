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
  await page.evaluate(() => window.scrollTo({ top: 150, behavior: 'instant' }));
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
  expect(await page.evaluate(() => scrollY)).toBeGreaterThan(0);
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
