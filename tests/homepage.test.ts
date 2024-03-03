import { test, expect } from '@playwright/test';

test('top header', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("MERN Store");
});