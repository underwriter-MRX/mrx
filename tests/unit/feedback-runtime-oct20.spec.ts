import { afterEach, expect, it, vi } from 'vitest';
vi.mock('../../src/lib/platform/runtime-env', () => ({
  runtimeEnv: (name: string) =>
    name === 'OPENAI_API_KEY' ? 'synthetic-no-provider-key' : undefined,
}));
import { createOpenAIStream } from '../../src/lib/platform/openai';
afterEach(() => vi.unstubAllGlobals());
it.each(['travis', 'connor', 'clay', 'owen', 'laurel', 'elena', 'graham'] as const)(
  'carries known property and declined booking into outbound %s request',
  async (persona) => {
    let payload: any;
    vi.stubGlobal(
      'fetch',
      vi.fn(async (_url, options) => {
        payload = JSON.parse(options.body);
        return new Response('data: synthetic\n\n', { status: 200 });
      }),
    );
    const history = [
      {
        role: 'user' as const,
        content: 'My property is in Dawson County, Texas. I have one offer and 6 NMA.',
      },
      { role: 'assistant' as const, content: 'We can review the stated terms without booking.' },
    ];
    await createOpenAIStream({
      persona,
      message: 'NRI is 12.5 percent. I do not want to book.',
      citations: [],
      history,
      context: {
        location: 'Dawson County, Texas',
        bookingDeclined: true,
        facts: [{ key: 'nma', value: '6', source: 'visitor' }],
      },
    });
    expect(payload.instructions).toContain('Dawson County, Texas');
    expect(payload.instructions).toContain(
      'do not upload or share documents subject to confidentiality restrictions',
    );
    expect(payload.instructions).toContain('NRI means net revenue interest');
    expect(payload.input[0].content[0].text).toBe(history[0].content);
    expect(payload.input.at(-1).content[0].text).toContain('I do not want to book');
    expect(payload.store).toBe(false);
  },
);
