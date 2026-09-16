import { test, expect } from '@playwright/test';
import { stubAnonymousSession } from './helpers/stub-session';

test.describe('Returning owner access', () => {
  test('recovers from a network failure while preserving the sign-in email', async ({ page }) => {
    await stubAnonymousSession(page);
    let count = 0;
    await page.route('**/api/account/auth-link', (route) =>
      ++count === 1
        ? route.abort('failed')
        : route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }),
    );
    await page.goto('/account/');
    await page
      .getByRole('textbox', { name: 'Email', exact: true })
      .fill('returning@example.invalid');
    await page.getByRole('button', { name: 'Send sign-in link', exact: true }).click();
    await expect(page.getByRole('alert')).toContainText('please try again');
    await expect(page.getByRole('textbox', { name: 'Email', exact: true })).toHaveValue(
      'returning@example.invalid',
    );
    await page.getByRole('button', { name: 'Send sign-in link', exact: true }).click();
    await expect(page.getByRole('status')).toContainText('If an account matches this email');
  });

  test('defaults to email-only sign-in and retains inputs when switching modes', async ({
    page,
  }) => {
    await stubAnonymousSession(page);
    await page.goto('/account/');
    await expect(page.getByRole('heading', { name: 'Sign in to your MRX account' })).toBeVisible();
    await expect(page.getByLabel('Full name', { exact: true })).toHaveCount(0);
    await expect(page.getByRole('textbox', { name: 'Phone', exact: true })).toHaveCount(0);
    await page
      .getByRole('textbox', { name: 'Email', exact: true })
      .fill('returning@example.invalid');
    await page.getByRole('button', { name: 'Create account', exact: true }).click();
    await expect(page.getByRole('button', { name: 'Create account', exact: true })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    await page.getByLabel('Full name', { exact: true }).fill('Riley Owner');
    await page.getByRole('textbox', { name: 'Phone', exact: true }).fill('(432) 555-0101');
    await expect(page.getByRole('textbox', { name: 'Email', exact: true })).toHaveValue(
      'returning@example.invalid',
    );
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await expect(page.getByRole('textbox', { name: 'Phone', exact: true })).toHaveCount(0);
    await page.getByRole('button', { name: 'Create account', exact: true }).click();
    await expect(page.getByLabel('Full name', { exact: true })).toHaveValue('Riley Owner');
    await expect(page.getByRole('textbox', { name: 'Phone', exact: true })).toHaveValue(
      '(432) 555-0101',
    );
  });

  test('sends only email, prevents duplicate pending requests, and confirms without account enumeration', async ({
    page,
  }) => {
    await stubAnonymousSession(page);
    let requests = 0;
    let release: () => void = () => {};
    const pending = new Promise<void>((resolve) => {
      release = resolve;
    });
    await page.route('**/api/account/auth-link', async (route) => {
      requests += 1;
      expect(route.request().postDataJSON()).toEqual({ email: 'returning@example.invalid' });
      await pending;
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
    });
    await page.route('**/api/chat/identity', () => {
      throw new Error('Sign-in must not create an account');
    });
    await page.goto('/account/');
    await page
      .getByRole('textbox', { name: 'Email', exact: true })
      .fill('returning@example.invalid');
    await page.getByRole('button', { name: 'Send sign-in link', exact: true }).click();
    await expect(page.getByRole('button', { name: 'Requesting sign-in link…' })).toBeDisabled();
    await expect(page.getByRole('button', { name: 'Create account', exact: true })).toBeDisabled();
    await expect.poll(() => requests).toBe(1);
    release();
    await expect(page.getByRole('status')).toContainText('If an account matches this email');
    await expect(
      page.getByRole('button', { name: 'Send sign-in link', exact: true }),
    ).toBeEnabled();
    await expect(page.getByRole('heading', { name: 'Sign in to your MRX account' })).toBeVisible();
  });

  test('preserves email after a service failure and supports retry', async ({ page }) => {
    await stubAnonymousSession(page);
    let count = 0;
    await page.route('**/api/account/auth-link', (route) =>
      route.fulfill({
        status: ++count === 1 ? 503 : 200,
        contentType: 'application/json',
        body: count === 1 ? '{"ok":false}' : '{"ok":true}',
      }),
    );
    await page.goto('/account/');
    await page
      .getByRole('textbox', { name: 'Email', exact: true })
      .fill('returning@example.invalid');
    await page.getByRole('button', { name: 'Send sign-in link', exact: true }).click();
    await expect(page.getByRole('alert')).toContainText('please try again');
    await expect(page.getByRole('textbox', { name: 'Email', exact: true })).toHaveValue(
      'returning@example.invalid',
    );
    await page.getByRole('button', { name: 'Send sign-in link', exact: true }).click();
    await expect(page.getByRole('status')).toContainText('If an account matches this email');
    expect(count).toBe(2);
  });

  test('recovers a failed account load without treating it as a signed-out result', async ({
    page,
  }) => {
    let failing = true;
    await stubAnonymousSession(page);
    await page.route('**/api/chat/session', async (route) => {
      if (failing)
        await route.fulfill({ status: 503, contentType: 'application/json', body: '{"ok":false}' });
      else await route.fallback();
    });
    await page.goto('/account/');
    await expect(
      page.getByRole('heading', { name: 'We couldn’t load your account' }),
    ).toBeVisible();
    await expect(page.getByRole('button', { name: 'Create account', exact: true })).toHaveCount(0);
    failing = false;
    await page.getByRole('button', { name: 'Try again', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Sign in to your MRX account' })).toBeVisible();
  });

  test('does not block existing device access on an unavailable optional checklist', async ({
    page,
  }) => {
    await stubAnonymousSession(page);
    await page.route('**/api/chat/session', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          ok: true,
          deviceAccess: true,
          profile: { first_name: 'Riley' },
          permissions: {},
        }),
      }),
    );
    await page.route('**/api/account/underwriting-checklist', (route) => route.abort('failed'));
    await page.goto('/account/');
    await expect(page.getByRole('heading', { name: 'Welcome back, Riley' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Send sign-in link', exact: true })).toHaveCount(
      0,
    );
  });

  test('keeps sign-in usable on narrow screens with keyboard focus', async ({ page }) => {
    await stubAnonymousSession(page);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/account/');
    const signIn = page.getByRole('button', { name: 'Sign in', exact: true });
    await signIn.focus();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button', { name: 'Create account', exact: true })).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('textbox', { name: 'Email', exact: true })).toBeFocused();
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    ).toBe(true);
  });
});
