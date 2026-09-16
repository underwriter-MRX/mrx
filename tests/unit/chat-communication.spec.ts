import { afterEach, describe, expect, it, vi } from 'vitest';
import { activeGuides } from '../../src/data/guides';
import { createOpenAIStream } from '../../src/lib/platform/openai';
import type { PersonaSlug } from '../../src/lib/platform/types';

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

describe('shared communication skill at the model boundary', () => {
  it.each(activeGuides)(
    'loads the shared skill and only the selected voice for $name',
    async (guide) => {
      vi.stubEnv('OPENAI_API_KEY', 'test-only');
      const fetchMock = vi.fn().mockResolvedValue(new Response('data: [DONE]\n\n'));
      vi.stubGlobal('fetch', fetchMock);
      await createOpenAIStream({
        message: 'Help me understand the next useful step.',
        persona: guide.slug as PersonaSlug,
        citations: [],
        context: { firstName: 'Billy', bookingDeclined: true, discoveryDeclined: true },
        history: [{ role: 'user', content: 'I only want to learn here today.' }],
      });
      const [url, options] = fetchMock.mock.calls[0];
      const request = JSON.parse(options.body);
      expect(url).toBe('https://api.openai.com/v1/responses');
      expect(request.instructions).toContain('Shared communication skill (alex-ai-mrx-2026-09-16)');
      expect(request.instructions).toContain(`Selected guide voice:\n${guide.name}:`);
      for (const other of activeGuides.filter((item) => item.slug !== guide.slug))
        expect(request.instructions).not.toContain(`\n${other.name}:`);
      expect(request.instructions).toContain('The visitor declined calls or scheduling.');
      expect(request.instructions).toContain('The visitor declined discovery questions.');
      expect(request.instructions).toContain(
        'Never invent or calculate a personalized mineral value',
      );
      expect(request.instructions).toContain(
        'The verified interface owns the delayed optional account invitation',
      );
      expect(request.instructions).toContain('The visitor asked to be called Billy.');
      expect(request.input[0].content[0].text).toBe('I only want to learn here today.');
      expect(request.store).toBe(false);
    },
  );

  it('does not present model unavailability as a completed response', async () => {
    vi.stubEnv('OPENAI_API_KEY', 'test-only');
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('Unavailable', { status: 503 })));
    await expect(
      createOpenAIStream({ message: 'Help', persona: 'travis', citations: [] }),
    ).rejects.toThrow('OpenAI response failed (503)');
  });
});
