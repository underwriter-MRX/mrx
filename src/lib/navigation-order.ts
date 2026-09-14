/** Stable public navigation independent of content-loader/filesystem order. */
export function compareCanonicalPaths(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0;
}

export function orderNavigationCategories<T extends { data: { label: string; slug: string } }>(
  categories: readonly T[],
): T[] {
  return [...categories].sort(
    (a, b) =>
      a.data.label.localeCompare(b.data.label, 'en') ||
      compareCanonicalPaths(a.data.slug, b.data.slug),
  );
}
