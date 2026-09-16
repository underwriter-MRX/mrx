import { test, expect } from '@playwright/test';
import { stubAnonymousSession } from './helpers/stub-session';
import { routeGuideDecision } from '../../src/data/guides';

async function reply(page: any, value: string) {
  const input = page.getByTestId('travis-composer-input');
  await input.fill(value);
  await input.press('Enter');
}

test.describe('Ask Travis conversational experience', () => {
  test('honors no-booking research, explicit guide correction, and a later change of mind', async ({
    page,
  }) => {
    await stubAnonymousSession(page);
    await page.route('**/api/chat/facts', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      }),
    );
    const payloads: any[] = [];
    await page.route('**/api/chat/message', async (route) => {
      const payload = route.request().postDataJSON();
      payloads.push(payload);
      const decision = routeGuideDecision(
        payload.message,
        payload.context.currentPersona,
        payload.context.preserveCurrentPersona,
      );
      const events: any[] = [];
      if (decision.shouldHandoff)
        events.push({
          type: 'persona.handoff',
          from: decision.from.slug,
          to: decision.guide.slug,
          message: decision.handoffMessage,
        });
      events.push(
        {
          type: 'message.delta',
          delta:
            'You can keep researching here. Start with the deed and any division orders you already have.',
          persona: decision.guide.slug,
        },
        { type: 'done' },
      );
      await route.fulfill({
        status: 200,
        contentType: 'text/event-stream',
        body: events
          .map((event) => `event: ${event.type}\ndata: ${JSON.stringify(event)}\n\n`)
          .join(''),
      });
    });
    await page.goto('/');
    await page.locator('[data-open-home-chat]').first().click();
    await reply(page, 'Alex');
    await expect(page.getByTestId('travis-composer-input')).toHaveAttribute(
      'name',
      'mrx-chat-open',
    );
    await reply(
      page,
      'This is a QA test with fictional details. I inherited mineral rights in Texas and want to know which documents to gather first. I am only researching and do not want calls or a booking.',
    );
    await expect(page.getByText('Talking with Connor', { exact: true })).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Schedule a human underwriter call', exact: true }),
    ).toHaveCount(0);
    await expect(page.getByText('Want me to send this answer?', { exact: true })).toBeVisible();
    await expect(page.getByText(/or help you set up a phone conversation/)).toHaveCount(0);
    expect(payloads.at(-1).context.bookingDeclined).toBe(true);
    await reply(
      page,
      'Please keep this with Travis. I do not want to schedule anything. Can I keep researching without creating an account?',
    );
    await expect(page.getByText('Talking with Travis', { exact: true })).toBeVisible();
    await expect(page.getByTestId('travis-composer-input')).toHaveAccessibleName('Reply to Travis');
    await expect(
      page.getByRole('button', { name: 'Schedule a human underwriter call', exact: true }),
    ).toHaveCount(0);
    await page.reload();
    await page.locator('[data-open-home-chat]').first().click();
    await expect(
      page.getByRole('button', { name: 'Schedule a human underwriter call', exact: true }),
    ).toHaveCount(0);
    await reply(page, 'Please book a call with an underwriter.');
    await expect(page.getByText('Talking with Elena', { exact: true })).toBeVisible();
    await expect(page.getByTestId('travis-composer-input')).toHaveAttribute(
      'name',
      'mrx-chat-booking-timezone',
    );
  });

  test('labels the header account control as Log In', async ({ page }) => {
    await stubAnonymousSession(page);
    await page.goto('/');

    const banner = page.getByRole('banner');
    await expect(banner.getByRole('button', { name: 'Log In', exact: true })).toBeVisible();
    await expect(banner.getByText(/Owner sign in/i)).toHaveCount(0);
  });

  test('opens the on-screen help window from the top Ask Travis control', async ({ page }) => {
    await stubAnonymousSession(page);
    await page.goto('/');

    await page
      .getByRole('banner')
      .getByRole('button', { name: 'Ask Travis for mineral-rights help', exact: true })
      .click();

    await expect(page.getByTestId('ask-travis-dialog')).toBeVisible();
  });

  test('keeps keyboard focus in the dialog and returns it to the header opener', async ({
    page,
  }) => {
    await stubAnonymousSession(page);
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    const opener = page
      .getByRole('banner')
      .getByRole('button', { name: 'Ask Travis for mineral-rights help', exact: true });
    await opener.focus();
    await opener.press('Enter');
    const dialog = page.getByTestId('ask-travis-dialog');
    await expect(dialog).toBeVisible();
    const close = dialog.getByRole('button', { name: 'Close Ask Travis' });
    await close.focus();
    await page.keyboard.press('Shift+Tab');
    expect(await dialog.evaluate((element) => element.contains(document.activeElement))).toBe(true);
    await page.keyboard.press('Tab');
    await expect(close).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(dialog).toHaveCount(0);
    await expect(opener).toBeFocused();

    await opener.press('Enter');
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: 'Close Ask Travis' }).click();
    await expect(opener).toBeFocused();
  });

  test('returns focus to the floating launcher after closing the chat', async ({ page }) => {
    await stubAnonymousSession(page);
    await page.goto('/about/', { waitUntil: 'domcontentloaded' });
    const launcher = page.getByTestId('ask-travis-open');
    await expect(launcher).toHaveAttribute('data-chat-ready', 'true');
    await launcher.focus();
    await launcher.press('Enter');
    const dialog = page.getByTestId('ask-travis-dialog');
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: 'Close Ask Travis' }).click();
    await expect(launcher).toBeFocused();
  });

  test('returns focus to the mobile menu toggle when the chat opener is hidden', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await stubAnonymousSession(page);
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(
      () => (window as typeof window & { __mrxChatReady?: boolean }).__mrxChatReady === true,
    );
    const menuToggle = page.getByRole('button', { name: 'Open navigation menu' });
    await menuToggle.click();
    await page.locator('.mobile-nav__ask').click();
    const dialog = page.getByTestId('ask-travis-dialog');
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: 'Close Ask Travis' }).click();
    await expect(menuToggle).toBeFocused();
    await expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
  });

  test('retains the mobile opener when chat loads after the menu click', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await stubAnonymousSession(page);
    let releaseChatBundle: () => void = () => {};
    const chatBundleGate = new Promise<void>((resolve) => {
      releaseChatBundle = resolve;
    });
    await page.route('**/_astro/AskTravis.*.js', async (route) => {
      await chatBundleGate;
      await route.continue();
    });
    try {
      await page.goto('/', { waitUntil: 'domcontentloaded' });
      const menuToggle = page.getByRole('button', { name: 'Open navigation menu' });
      await menuToggle.click();
      await page.locator('.mobile-nav__ask').click();
      await expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
      releaseChatBundle();
      const dialog = page.getByTestId('ask-travis-dialog');
      await expect(dialog).toBeVisible();
      await dialog.getByRole('button', { name: 'Close Ask Travis' }).click();
      await expect(menuToggle).toBeFocused();
    } finally {
      releaseChatBundle();
    }
  });

  test('names the enabled private upload action as a photo/document', async ({ page }) => {
    await page.route('**/api/chat/session', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          ok: true,
          messages: [],
          appointments: [],
          authenticated: false,
          documentUploadsEnabled: true,
          documentProcessingEnabled: true,
        }),
      });
    });
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page
      .getByRole('banner')
      .getByRole('button', { name: 'Ask Travis for mineral-rights help' })
      .click();
    const upload = page.getByTestId('travis-document-button');
    await expect(upload).toBeEnabled();
    await expect(upload).toHaveAccessibleName('Upload a photo/document');
    await expect(upload).toHaveAttribute(
      'title',
      'Upload a private photo/document for security scanning',
    );
    await expect(page.locator('.travis-file-input')).toHaveAttribute(
      'accept',
      '.pdf,.jpg,.jpeg,.png',
    );
  });

  test('starts rapport-first, honors name refusal, and keeps direct scheduling available', async ({
    page,
  }) => {
    await stubAnonymousSession(page);
    await page.goto('/');
    await page.locator('[data-open-home-chat]').first().click();

    await expect(
      page.getByText('Hi, I’m Travis, a fictional MRX AI guide. What’s your first name?'),
    ).toBeVisible();
    await expect(page.getByTestId('travis-account-prompt')).toHaveCount(0);
    await expect(
      page.getByRole('button', { name: 'Schedule a human underwriter call' }),
    ).toBeVisible();

    await reply(page, 'I do not want to share my name');
    await expect(page.getByText('You can stay anonymous.')).toBeVisible();
    await expect(page.getByTestId('travis-composer-input')).toHaveAttribute(
      'name',
      'mrx-chat-open',
    );
    await expect(page.getByTestId('travis-account-prompt')).toHaveCount(0);
  });

  test('opens homepage intent navigation in the assistant and routes inherited-rights help to Connor', async ({
    page,
  }) => {
    await stubAnonymousSession(page);
    await page.route('**/api/chat/message', async (route) => {
      const payload = route.request().postDataJSON();
      expect(payload.message).toContain('inherited mineral rights');
      const body = [
        'event: persona.handoff',
        `data: ${JSON.stringify({
          type: 'persona.handoff',
          from: 'travis',
          to: 'connor',
          reason: 'ownership and county records',
          message:
            'Connor is the right MRX guide for ownership and county records. I am bringing Connor into the conversation.',
        })}`,
        '',
        'event: message.delta',
        `data: ${JSON.stringify({
          type: 'message.delta',
          delta:
            'I can help you organize the inherited-interest records and the next document to find.',
          persona: 'connor',
        })}`,
        '',
        'event: done',
        'data: {"type":"done"}',
        '',
        '',
      ].join('\n');
      await route.fulfill({ status: 200, contentType: 'text/event-stream', body });
    });

    await page.goto('/');
    await page.waitForFunction(() =>
      Boolean((window as Window & { __mrxChatReady?: boolean }).__mrxChatReady),
    );
    const primaryNav = page.getByRole('navigation', { name: 'Primary' });
    await primaryNav.getByRole('link', { name: 'Inherited Rights', exact: true }).click();

    await expect(page.getByTestId('ask-travis-dialog')).toBeVisible();
    await expect(
      page.getByText('Hi, I’m Travis, a fictional MRX AI guide. What’s your first name?'),
    ).toBeVisible();
    await reply(page, 'Skip');
    await expect(page.getByText(/I have your focus as:.*inherited mineral rights/i)).toBeVisible();
    await reply(page, 'Yes');
    await expect(page.getByText('What happened that made you look into it now?')).toBeVisible();
    await reply(page, 'I inherited mineral rights and need to organize the ownership records.');
    await expect(page.getByText('Talking with Connor', { exact: true })).toBeVisible();
    await expect(
      page.getByText(
        'I can help you organize the inherited-interest records and the next document to find.',
      ),
    ).toBeVisible();
  });

  test('answers one question at a time and keeps the composer conversational', async ({ page }) => {
    await stubAnonymousSession(page);
    await page.route('**/api/chat/message', async (route) => {
      const payload = route.request().postDataJSON();
      const answer = payload.message.includes('Reeves County')
        ? 'Reeves County gives us a useful starting point. Do you have the written offer amount?'
        : 'Before you sign anything, I can help you slow it down and compare the complete offer.';
      const body = [
        'event: message.delta',
        `data: ${JSON.stringify({ type: 'message.delta', delta: answer, persona: 'travis' })}`,
        '',
        // A stale server may still send this event during a rolling deploy. The
        // client must ignore it instead of interrupting the mineral conversation.
        'event: profile.request',
        'data: {"type":"profile.request","fields":["firstName","lastName","email","phone"],"reason":"Remember this conversation securely."}',
        '',
        'event: done',
        'data: {"type":"done"}',
        '',
        '',
      ].join('\n');
      await route.fulfill({ status: 200, contentType: 'text/event-stream', body });
    });

    await page.goto('/');
    await page.locator('[data-open-home-chat]').first().click();
    await expect(page.getByTestId('ask-travis-dialog')).toBeVisible();
    await expect(
      page.getByText('Hi, I’m Travis, a fictional MRX AI guide. What’s your first name?'),
    ).toBeVisible();
    await expect(page.getByText('Skip for now', { exact: true })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Document uploads unavailable' })).toBeDisabled();
    await expect(
      page.getByRole('button', { name: 'Schedule a human underwriter call' }),
    ).toBeVisible();
    await reply(page, 'I received an offer for my mineral rights.');
    await expect(
      page.getByText(
        'Before you sign anything, I can help you slow it down and compare the complete offer.',
      ),
    ).toBeVisible();
    await expect(page.getByText('What first name should I use?')).toHaveCount(0);
    await expect(page.getByTestId('travis-composer-input')).toHaveAttribute(
      'placeholder',
      'Ask Travis anything about your minerals…',
    );
    await expect(page.getByTestId('travis-composer-input')).toHaveAttribute(
      'name',
      'mrx-chat-open',
    );

    await expect(page.getByTestId('travis-account-prompt')).toHaveCount(0);

    await reply(page, 'The property is in Reeves County, Texas.');
    await expect(
      page.getByText(
        'Reeves County gives us a useful starting point. Do you have the written offer amount?',
      ),
    ).toBeVisible();
    await expect(page.getByText('What first name should I use?')).toHaveCount(0);
    await expect(page.getByTestId('travis-composer-input')).toHaveAttribute(
      'name',
      'mrx-chat-open',
    );
    await expect(page.getByTestId('travis-account-prompt')).toBeVisible();
    await expect(
      page.getByText('Save this conversation for a human underwriter review'),
    ).toBeVisible();
    await expect(page.getByRole('button', { name: 'Create a free account' })).toBeVisible();
    await page.getByRole('button', { name: 'Keep chatting for now' }).click();
    await expect(page.getByTestId('travis-account-prompt')).toHaveCount(0);
  });

  test('records a corrected prefilled intent once and keeps the opening value guide', async ({
    page,
  }) => {
    await stubAnonymousSession(page);
    const submitted: Array<Record<string, unknown>> = [];
    await page.route('**/api/chat/message', async (route) => {
      submitted.push(route.request().postDataJSON());
      const body = [
        'event: message.delta',
        `data: ${JSON.stringify({
          type: 'message.delta',
          delta:
            'The full written offer and the exact rights conveyed are the right starting point.',
          persona: 'clay',
        })}`,
        '',
        'event: done',
        'data: {"type":"done"}',
        '',
        '',
      ].join('\n');
      await route.fulfill({ status: 200, contentType: 'text/event-stream', body });
    });

    await page.goto('/');
    await page.waitForFunction(() =>
      Boolean((window as Window & { __mrxChatReady?: boolean }).__mrxChatReady),
    );
    await page.evaluate(() =>
      window.dispatchEvent(
        new CustomEvent('mrx:open-chat', {
          detail: { prompt: 'How much are my mineral rights worth?' },
        }),
      ),
    );
    await expect(page.getByText(/Hi, I’m Clay, a fictional MRX AI guide/)).toBeVisible();
    await reply(page, 'Billy');
    await expect(
      page.getByText(/I have your focus as:.*How much are my mineral rights worth/i),
    ).toBeVisible();
    await reply(page, 'No, I want to compare a written offer.');

    await expect(
      page.getByText(
        'The full written offer and the exact rights conveyed are the right starting point.',
      ),
    ).toBeVisible();
    expect(submitted).toHaveLength(1);
    expect(submitted[0]).toMatchObject({
      message: 'No, I want to compare a written offer.',
      context: { currentPersona: 'clay', preserveCurrentPersona: true },
    });
    await expect(
      page.getByText('No, I want to compare a written offer.', { exact: true }),
    ).toHaveCount(1);
  });

  test('persists a discovery-question refusal across a refresh', async ({ page }) => {
    await stubAnonymousSession(page);
    const contexts: Array<Record<string, unknown>> = [];
    await page.route('**/api/chat/message', async (route) => {
      const payload = route.request().postDataJSON();
      contexts.push(payload.context ?? {});
      const body = [
        'event: message.delta',
        `data: ${JSON.stringify({
          type: 'message.delta',
          delta: 'A division order confirms the decimal used to distribute production proceeds.',
          persona: 'travis',
        })}`,
        '',
        'event: done',
        'data: {"type":"done"}',
        '',
        '',
      ].join('\n');
      await route.fulfill({ status: 200, contentType: 'text/event-stream', body });
    });

    await page.goto('/');
    await page.locator('[data-open-home-chat]').first().click();
    await reply(page, 'Skip');
    await reply(page, 'Just answer and stop asking questions.');
    await expect(page.getByText(/A division order confirms the decimal/)).toBeVisible();
    expect(contexts.at(-1)).toMatchObject({ discoveryDeclined: true });

    await page.reload();
    await page.locator('[data-open-home-chat]').first().click();
    await reply(page, 'Tell me what a division order does.');
    await expect(page.getByText(/A division order confirms the decimal/).last()).toBeVisible();
    expect(contexts.at(-1)).toMatchObject({ discoveryDeclined: true });
  });

  test('collects the basic owner profile before document upload', async ({ page }) => {
    await stubAnonymousSession(page);
    await page.goto('/account/?welcome=1');

    await expect(
      page.getByRole('heading', { level: 2, name: 'Sign in to upload your document' }),
    ).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Full name', exact: true })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Email', exact: true })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Phone', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Create account and continue' })).toBeVisible();
    await expect(page.getByText(/continue on this device right away/i)).toBeVisible();
    await expect(
      page.getByText(/does not give MRX permission to send updates or place calls/i),
    ).toBeVisible();
  });

  test('renders an Ask Travis map card from a grounded location event', async ({ page }) => {
    await stubAnonymousSession(page);
    await page.route('**/api/chat/message', async (route) => {
      const body = [
        'event: location.card',
        `data: ${JSON.stringify({
          type: 'location.card',
          card: {
            label: 'Martin County, Texas',
            url: 'https://www.google.com/maps/search/?api=1&q=32.305%2C-101.951',
            latitude: 32.305,
            longitude: -101.951,
            precision: 'coordinates',
            confidence: 0.97,
            source: 'Known mineral-interest geography',
            basin: 'Permian Basin',
            note: 'Map pin is from stored mineral-interest geography. It is not a street address unless the owner supplied one.',
          },
        })}`,
        '',
        'event: message.delta',
        `data: ${JSON.stringify({
          type: 'message.delta',
          delta:
            'The document-supported location I have is Martin County, Texas. I am showing a map pin from the stored coordinates, not inventing a street address.',
          persona: 'travis',
        })}`,
        '',
        'event: done',
        'data: {"type":"done"}',
        '',
        '',
      ].join('\n');
      await route.fulfill({ status: 200, contentType: 'text/event-stream', body });
    });

    await page.goto('/');
    await page.locator('[data-open-home-chat]').first().click();
    await expect(page.getByTestId('ask-travis-dialog')).toBeVisible();
    await reply(page, 'where are my rights located?');

    const card = page.getByRole('link', { name: /Open map for Martin County, Texas/i });
    await expect(card).toBeVisible();
    await expect(card).toHaveAttribute('href', /q=32\.305%2C-101\.951/);
    await expect(page.getByText(/not inventing a street address/i)).toBeVisible();
  });

  test('books a requested time conversationally and honors separate confirmation choices', async ({
    page,
  }) => {
    test.setTimeout(75_000);
    await stubAnonymousSession(page);
    await page.route('**/api/appointments/availability**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          ok: true,
          options: [
            {
              id: '2030-07-16T21:00:00.000Z',
              start: '2030-07-16T21:00:00.000Z',
              end: '2030-07-16T21:30:00.000Z',
              label: 'Tuesday, Jul 16 at 5:00 PM',
              timezone: 'America/New_York',
            },
            {
              id: '2030-07-16T22:00:00.000Z',
              start: '2030-07-16T22:00:00.000Z',
              end: '2030-07-16T22:30:00.000Z',
              label: 'Tuesday, Jul 16 at 6:00 PM',
              timezone: 'America/New_York',
            },
          ],
        }),
      });
    });
    await page.route('**/api/appointments', async (route) => {
      const payload = route.request().postDataJSON();
      expect(payload.option.label).toContain('6:00 PM');
      expect(payload.profile.permissions).toEqual({
        email: true,
        sms: true,
        marketingSms: false,
        call: true,
        aiVoice: true,
      });
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          ok: true,
          appointmentId: 'appt-1',
          notifications: ['email', 'sms'],
          notificationFailures: [],
          memberAccess: {
            status: 'link_sent',
            linkSent: true,
            redirectTo: 'http://127.0.0.1:4321/account/?welcome=appointment',
          },
        }),
      });
    });

    await page.goto('/?book=1');
    await expect(page.getByTestId('ask-travis-dialog')).toBeVisible();
    await expect(page.getByText('I’m Elena, the MRX scheduling guide.')).toBeVisible();
    await expect(
      page.getByText('I’ll check the live MRX calendar and offer a few real openings.'),
    ).toBeVisible();
    await page.locator('[data-reply="timezone-confirm"]').click();
    await expect(
      page.getByText(
        'What works better for you: tomorrow afternoon, tomorrow evening, or the next available time?',
      ),
    ).toBeVisible();
    await page.locator('[data-reply="tomorrow-evening"]').click();
    await expect(page.getByText('I found these openings.')).toBeVisible();
    await page.locator('[data-reply="2030-07-16T22:00:00.000Z"]').click();

    await expect(page.getByText('What first name should I put on the appointment?')).toBeVisible();
    await expect(page.getByTestId('travis-composer-input')).toHaveAttribute(
      'name',
      'mrx-chat-booking-name',
    );
    await reply(page, 'Daryl');
    await expect(
      page.getByText(
        'What email should I use for your appointment details and secure MRX member access?',
      ),
    ).toBeVisible();
    await expect(page.getByTestId('travis-composer-input')).toHaveAttribute(
      'name',
      'mrx-chat-booking-email',
    );
    await expect(page.getByTestId('travis-composer-input')).toHaveAttribute('autocomplete', 'off');
    await expect(page.getByTestId('travis-composer-input')).toHaveAttribute('inputmode', 'email');
    await reply(page, 'daryl@example.com');
    await expect(
      page.getByText('What phone number should a senior MRX underwriter team member call?'),
    ).toBeVisible();
    await reply(page, '212-555-0199');
    await expect(
      page.getByText('May MRX call 212-555-0199 for this specific appointment?'),
    ).toBeVisible();
    await page.locator('[data-reply="yes"]').click();
    await expect(page.getByText('May MRX email the appointment confirmation')).toBeVisible();
    await page.locator('[data-reply="yes"]').click();
    await expect(page.getByText('May MRX also text the appointment confirmation')).toBeVisible();
    await page.locator('[data-reply="yes"]').click();
    await expect(
      page.getByText('May Elena, MRX’s AI scheduling guide, use AI-generated voice technology'),
    ).toBeVisible();
    await expect(page.getByText('This AI-voice permission is optional')).toBeVisible();
    await page.locator('[data-reply="yes"]').click();

    await expect(page).toHaveURL(/\/account\/\?welcome=appointment$/);

    await page.goto('/');
    await page.evaluate(() =>
      window.dispatchEvent(new CustomEvent('mrx:open-chat', { detail: { booking: true } })),
    );
    await expect(page.getByTestId('travis-appointment-status')).toHaveText('✓ Call booked');
    await expect(page.getByText('I won’t book another one.').last()).toBeVisible();
    await expect(page.getByText('already have a phone appointment booked')).toBeVisible();

    await page.reload();
    await page.evaluate(() =>
      window.dispatchEvent(new CustomEvent('mrx:open-chat', { detail: { booking: true } })),
    );
    await expect(page.getByTestId('travis-appointment-status')).toHaveText('✓ Call booked');
    await expect(page.getByText('I won’t book another one.').last()).toBeVisible();
  });
});

test.describe('Ask Travis mobile conversation', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('shows the Ask Travis panel before the hero copy and keeps its main input above the fold', async ({
    page,
  }) => {
    await page.goto('/');
    const preview = page.locator('.mrx-chat-preview');
    const askInput = page.locator('.mrx-chat-preview__input');
    await expect(preview).toBeVisible();
    await expect(askInput).toBeVisible();
    const layout = await page.evaluate(() => {
      const bounds = (selector: string) =>
        document.querySelector(selector)?.getBoundingClientRect().toJSON() as DOMRect;
      return {
        preview: bounds('.mrx-chat-preview'),
        copy: bounds('.mrx-home-hero__copy'),
        askInput: bounds('.mrx-chat-preview__input'),
        viewportHeight: window.innerHeight,
        pageWidth: document.documentElement.scrollWidth,
        viewportWidth: document.documentElement.clientWidth,
      };
    });
    expect(layout.preview.top).toBeLessThan(layout.copy.top);
    expect(layout.preview.top).toBeLessThan(layout.viewportHeight / 2);
    expect(layout.askInput.bottom).toBeLessThan(layout.viewportHeight);
    expect(layout.pageWidth).toBeLessThanOrEqual(layout.viewportWidth);
  });

  test('uses the full mobile viewport without horizontal overflow', async ({ page }) => {
    await stubAnonymousSession(page);
    await page.goto('/');
    await page.locator('[data-open-home-chat]').first().click();
    const dialog = page.getByTestId('ask-travis-dialog');
    await expect(dialog).toBeVisible();
    await expect(
      page.getByText('Hi, I’m Travis, a fictional MRX AI guide. What’s your first name?'),
    ).toBeVisible();
    await page.waitForTimeout(350);
    const dimensions = await dialog.evaluate((element) => ({
      width: element.getBoundingClientRect().width,
      viewport: document.documentElement.clientWidth,
      scrollWidth: element.scrollWidth,
    }));
    expect(dimensions.width).toBeLessThanOrEqual(dimensions.viewport);
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.width + 1);
  });
});
