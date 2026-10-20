import { test, expect } from '@playwright/test';
test('one offer, independent NRI/NRA inputs and confidentiality', async ({ page }) => {
  test.setTimeout(120_000);
  await page.goto('/mineral-rights-offer-comparison/', {
    waitUntil: 'domcontentloaded',
    timeout: 90_000,
  });
  await expect(
    page.getByText('Do not upload or share documents subject to confidentiality restrictions.', {
      exact: false,
    }),
  ).toBeVisible();
  await page.locator('#offer-a-interest').selectOption('mineral');
  await page.locator('#offer-a-total').fill('12000');
  await page.locator('#offer-a-nma').fill('6');
  await expect(page.locator('[data-per-acre="a"]')).toHaveText('$2,000.00');
  await expect(page.locator('[data-question-count="b"]')).toHaveText(
    'One-offer review: use Offer A.',
  );
  await page.locator('[name="offer-a-nri"]').fill('12.5');
  await page.locator('[name="offer-a-nri-unit"]').selectOption('decimal');
  await expect(page.locator('[data-questions="a"]')).toContainText('Check NRI');
  await page.locator('[name="offer-a-nri-unit"]').selectOption('percent');
  await expect(page.locator('[data-questions="a"]')).not.toContainText('Check NRI');
  await page.locator('[name="offer-a-nra"]').fill('12');
  await page.locator('[name="offer-a-nra-basis"]').fill('1/8 basis');
  await page.locator('[name="offer-a-county"]').fill('Dawson County, Texas');
  await expect(page.locator('[data-per-acre="a"]')).toHaveText('$2,000.00');
  await page.locator('#offer-a-nma').fill('');
  await expect(page.locator('[data-per-acre="a"]')).not.toHaveText('$1,000.00');
  await page.locator('[data-reset-comparison]').click();
  await expect(page.locator('[name="offer-a-county"]')).toHaveValue('');
});
