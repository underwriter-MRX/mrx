import { test, expect, type Page } from '@playwright/test';
import { stubAnonymousSession } from './helpers/stub-session';

type VoiceHarness = {
  starts: number;
  stops: number;
  aborts: number;
  finalOnStop?: string;
  stopDelay?: number;
  late?: () => void;
  emit: (transcript: string, isFinal?: boolean) => void;
  fail: (error: string) => void;
};

declare global {
  interface Window {
    __voiceHarness: VoiceHarness;
  }
}

async function installSpeechRecognition(page: Page) {
  await page.addInitScript(() => {
    const harness: VoiceHarness & { instance?: FakeSpeechRecognition } = {
      starts: 0,
      stops: 0,
      aborts: 0,
      emit(transcript, isFinal = true) {
        harness.instance?.onresult?.({
          resultIndex: 0,
          results: [{ 0: { transcript }, isFinal }],
        });
      },
      fail(error) {
        harness.instance?.onerror?.({ error });
      },
    };

    class FakeSpeechRecognition {
      continuous = false;
      interimResults = false;
      lang = '';
      onstart: (() => void) | null = null;
      onresult:
        | ((event: {
            resultIndex: number;
            results: Array<{ 0: { transcript: string }; isFinal: boolean }>;
          }) => void)
        | null = null;
      onerror: ((event: { error: string }) => void) | null = null;
      onend: (() => void) | null = null;

      constructor() {
        harness.instance = this;
      }

      start() {
        harness.starts += 1;
        const capturedResultHandler = this.onresult;
        harness.late = () =>
          capturedResultHandler?.({
            resultIndex: 0,
            results: [{ 0: { transcript: 'Stale words' }, isFinal: true }],
          });
        queueMicrotask(() => this.onstart?.());
      }

      stop() {
        harness.stops += 1;
        setTimeout(() => {
          if (harness.finalOnStop) harness.emit(harness.finalOnStop);
          this.onend?.();
        }, harness.stopDelay ?? 100);
      }

      abort() {
        harness.aborts += 1;
        queueMicrotask(() => this.onend?.());
      }
    }

    window.__voiceHarness = harness;
    Object.defineProperty(window, 'SpeechRecognition', {
      configurable: true,
      value: FakeSpeechRecognition,
    });
    Object.defineProperty(window, 'webkitSpeechRecognition', {
      configurable: true,
      value: undefined,
    });
  });
}

async function openReadyChat(page: Page) {
  await page.goto('/?ask=1', { waitUntil: 'domcontentloaded' });
  await expect(page.getByTestId('ask-travis-dialog')).toBeVisible();
  await expect(page.getByTestId('travis-composer-input')).toBeEnabled();
}

test.describe('Ask Travis voice input', () => {
  test('starts by user gesture, preserves the draft, transcribes, and never auto-sends', async ({
    page,
  }) => {
    await installSpeechRecognition(page);
    await stubAnonymousSession(page);
    await openReadyChat(page);

    const input = page.getByTestId('travis-composer-input');
    const microphone = page.getByTestId('travis-voice-button');
    await input.fill('Existing draft.');
    await microphone.click();

    await expect(microphone).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByRole('status')).toContainText('Listening');
    expect(await page.evaluate(() => window.__voiceHarness.starts)).toBe(1);

    await page.evaluate(() => window.__voiceHarness.emit('I inherited', false));
    await expect(input).toHaveValue('Existing draft. I inherited');
    await expect(page.getByRole('status')).toContainText('Transcribing');

    await page.evaluate(() => window.__voiceHarness.emit('I inherited mineral rights', true));
    await expect(input).toHaveValue('Existing draft. I inherited mineral rights');
    await expect(page.locator('.travis-message--user')).toHaveCount(0);

    await microphone.click();
    await expect(microphone).toHaveAttribute('aria-pressed', 'false');
    await expect(page.getByRole('status')).toContainText('Review your words');
    await expect(input).toHaveValue('Existing draft. I inherited mineral rights');
    expect(await page.evaluate(() => window.__voiceHarness.stops)).toBe(1);
  });

  test('aborts on close, preserves the draft, and ignores stale recognition work', async ({
    page,
  }) => {
    await installSpeechRecognition(page);
    await stubAnonymousSession(page);
    await openReadyChat(page);

    const input = page.getByTestId('travis-composer-input');
    await input.fill('Keep this draft');
    await page.getByTestId('travis-voice-button').click();
    await expect(page.getByTestId('travis-voice-button')).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('button', { name: 'Close Ask Travis' }).click();
    expect(await page.evaluate(() => window.__voiceHarness.aborts)).toBe(1);
    await page.evaluate(() => window.__voiceHarness.late?.());

    await page
      .getByRole('button', { name: 'Ask Travis for mineral-rights help', exact: true })
      .click();
    await expect(page.getByTestId('travis-composer-input')).toHaveValue('Keep this draft');
    await expect(page.getByTestId('travis-voice-button')).toHaveAttribute('aria-pressed', 'false');
  });

  test('reports permission denial without clearing the draft', async ({ page }) => {
    await installSpeechRecognition(page);
    await stubAnonymousSession(page);
    await openReadyChat(page);

    const input = page.getByTestId('travis-composer-input');
    await input.fill('Unsent owner question');
    await page.getByTestId('travis-voice-button').click();
    await page.evaluate(() => window.__voiceHarness.fail('not-allowed'));

    await expect(page.getByRole('status')).toContainText('Microphone access was denied');
    await expect(input).toHaveValue('Unsent owner question');
    await expect(page.getByTestId('travis-voice-button')).toHaveAttribute('aria-pressed', 'false');
  });

  test('truthfully disables unsupported voice input and points to device dictation', async ({
    page,
  }) => {
    await page.addInitScript(() => {
      Object.defineProperty(window, 'SpeechRecognition', { configurable: true, value: undefined });
      Object.defineProperty(window, 'webkitSpeechRecognition', {
        configurable: true,
        value: undefined,
      });
    });
    await stubAnonymousSession(page);
    await openReadyChat(page);

    await expect(page.getByTestId('travis-voice-button')).toBeDisabled();
    await expect(page.getByRole('status')).toContainText('not supported in this browser');
    await expect(page.getByRole('status')).toContainText('device keyboard’s microphone');
  });
});

test('keeps the asynchronous final result after Stop and waits before Send', async ({ page }) => {
  await installSpeechRecognition(page);
  await stubAnonymousSession(page);
  await openReadyChat(page);
  const input = page.getByTestId('travis-composer-input');
  await input.fill('My question:');
  await page.getByTestId('travis-voice-button').click();
  await page.evaluate(() => {
    window.__voiceHarness.finalOnStop = 'Which county records do I need?';
  });
  await expect(page.getByRole('button', { name: 'Send reply', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Stop dictation', exact: true }).last().click();
  await expect(input).toHaveValue('My question: Which county records do I need?');
  await expect(page.getByRole('button', { name: 'Send reply', exact: true })).toBeEnabled();
  await expect(page.locator('#travis-voice-panel')).toHaveCount(0);
});

test('editing and leaving the page stop capture and preserve the text', async ({ page }) => {
  await installSpeechRecognition(page);
  await stubAnonymousSession(page);
  await openReadyChat(page);
  const input = page.getByTestId('travis-composer-input');
  await page.getByTestId('travis-voice-button').click();
  await page.evaluate(() => window.__voiceHarness.emit('Original question'));
  await input.fill('Corrected question');
  await page.evaluate(() => window.__voiceHarness.emit('Late result'));
  await expect(input).toHaveValue('Corrected question');
  await page.getByTestId('travis-voice-button').click();
  await page.evaluate(() => window.dispatchEvent(new Event('pagehide')));
  await expect(page.getByTestId('travis-voice-button')).toHaveAttribute('aria-pressed', 'false');
  await expect(input).toHaveValue('Corrected question');
  expect(await page.evaluate(() => window.__voiceHarness.aborts)).toBe(2);
});

for (const persona of ['travis', 'connor', 'clay', 'owen', 'laurel', 'elena']) {
  test(`mobile microphone works in the ${persona} conversation`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await installSpeechRecognition(page);
    await stubAnonymousSession(page);
    await page.route('**/api/chat/session', (route) =>
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify({
          ok: true,
          conversationId: '00000000-0000-4000-8000-000000000001',
          authenticated: false,
          messages: [
            { id: 'qa-guide', role: 'assistant', persona, content: 'What would you like to know?' },
          ],
          ownerFacts: {},
          facts: [],
          interests: [],
          documents: [],
          appointments: [],
          permissions: {},
        }),
      }),
    );
    await openReadyChat(page);
    await expect(
      page.getByText(`Talking with ${persona[0].toUpperCase() + persona.slice(1)}`, {
        exact: true,
      }),
    ).toBeVisible();
    const mic = page.getByTestId('travis-voice-button');
    // Wait for the chat's opening transform to settle before measuring its target.
    await expect.poll(async () => (await mic.boundingBox())?.width ?? 0).toBeGreaterThanOrEqual(44);
    await expect
      .poll(async () => (await mic.boundingBox())?.height ?? 0)
      .toBeGreaterThanOrEqual(44);
    await mic.click();
    await expect(page.locator('#travis-voice-panel')).toBeVisible();
    await page.evaluate(() => window.__voiceHarness.emit('Where do I begin?'));
    if (persona === 'travis')
      await page.screenshot({ path: testInfo.outputPath('mobile-voice-listening.png') });
    await mic.click();
    await expect(page.getByTestId('travis-composer-input')).toHaveValue('Where do I begin?');
    await expect(mic).toHaveAttribute('aria-pressed', 'false');
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    ).toBe(true);
  });
}

test('long dictation expands upward, follows speech, and stays editable after Stop', async ({
  page,
}, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await installSpeechRecognition(page);
  await stubAnonymousSession(page);
  await openReadyChat(page);
  const input = page.getByTestId('travis-composer-input');
  const initial = await input.boundingBox();
  await page.getByTestId('travis-voice-button').click();
  const transcript =
    'I inherited mineral rights and would like to understand the records before making a decision. '
      .repeat(12)
      .trim();
  await page.evaluate((text) => window.__voiceHarness.emit(text), transcript);
  await expect(input).toHaveValue(transcript);
  await expect.poll(async () => (await input.boundingBox())!.height).toBeGreaterThan(150);
  const expanded = (await input.boundingBox())!;
  expect(expanded.y).toBeLessThan(initial!.y);
  expect(expanded.height).toBeLessThanOrEqual(180);
  expect(await input.evaluate((el) => el.scrollTop + el.clientHeight >= el.scrollHeight - 2)).toBe(
    true,
  );
  await page.getByRole('button', { name: 'Stop dictation', exact: true }).last().click();
  await expect(page.locator('#travis-voice-panel')).toHaveCount(0);
  await expect(input).toHaveValue(transcript);
  await input.evaluate((el) => {
    el.scrollTop = 0;
  });
  expect(await input.evaluate((el) => el.scrollTop)).toBe(0);
  await page.screenshot({ path: testInfo.outputPath('mobile-dictation-review.png') });
  await input.fill('My corrected question.');
  await expect(input).toHaveValue('My corrected question.');
  await expect(page.locator('.travis-message--user')).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Send reply', exact: true })).toBeEnabled();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('the arrow finishes dictation and submits the final words exactly once', async ({ page }) => {
  await installSpeechRecognition(page);
  await stubAnonymousSession(page);
  await openReadyChat(page);
  await page.getByTestId('travis-voice-button').click();
  await page.evaluate(() => {
    window.__voiceHarness.emit('Prefer not', false);
    window.__voiceHarness.finalOnStop = 'Prefer not to say';
    window.__voiceHarness.stopDelay = 500;
  });
  await page.getByRole('button', { name: 'Send reply', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Finishing');
  await expect(page.locator('.travis-message--user')).toHaveCount(0);
  await expect(page.locator('.travis-message--user')).toHaveText(['Prefer not to say']);
  await expect(page.getByTestId('travis-composer-input')).toHaveValue('');
  expect(await page.evaluate(() => window.__voiceHarness.stops)).toBe(1);
});

test('closing while the arrow finishes cancels submission and preserves the draft', async ({
  page,
}) => {
  await installSpeechRecognition(page);
  await stubAnonymousSession(page);
  await openReadyChat(page);
  await page.getByTestId('travis-voice-button').click();
  await page.evaluate(() => {
    window.__voiceHarness.emit('Keep my question');
    window.__voiceHarness.finalOnStop = 'Do not send this';
    window.__voiceHarness.stopDelay = 1500;
  });
  await page.getByRole('button', { name: 'Send reply', exact: true }).click();
  await page.getByRole('button', { name: 'Close Ask Travis' }).click();
  await page
    .getByRole('button', { name: 'Ask Travis for mineral-rights help', exact: true })
    .click();
  await expect(page.getByTestId('travis-composer-input')).toHaveValue('Keep my question');
  await page.evaluate(() => window.__voiceHarness.late?.());
  await expect(page.locator('.travis-message--user')).toHaveCount(0);
  expect(await page.evaluate(() => window.__voiceHarness.aborts)).toBe(1);
});

test('Shift+Enter keeps a newline for editing and Enter sends the reviewed draft', async ({
  page,
}) => {
  await stubAnonymousSession(page);
  await openReadyChat(page);
  const input = page.getByTestId('travis-composer-input');
  await input.fill('Prefer not to say');
  await input.press('Shift+Enter');
  await expect(input).toHaveValue('Prefer not to say\n');
  await expect(page.locator('.travis-message--user')).toHaveCount(0);
  await input.press('Enter');
  await expect(page.locator('.travis-message--user')).toHaveText(['Prefer not to say']);
});
