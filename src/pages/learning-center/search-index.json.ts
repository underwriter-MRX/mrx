import type { APIRoute } from 'astro';
import { getLearningCenterData } from '../../lib/learning-center';

export const prerender = true;

const normalizeSearchText = (value: string) =>
  value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
    .replace(/\s+/g, ' ');

export const GET: APIRoute = async () => {
  const { items } = await getLearningCenterData();
  const searchItems = items.map((item) => ({
    ...item,
    searchText: normalizeSearchText(
      [
        item.slug,
        item.title,
        item.excerpt,
        item.description,
        item.categoryLabel,
        item.author,
        ...item.tags,
      ].join(' '),
    ),
  }));

  return new Response(JSON.stringify({ items: searchItems }), {
    headers: {
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
};
