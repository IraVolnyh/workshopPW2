import { test, expect, Page } from '@playwright/test';
import { doLogin } from '../steps/login';
import { login } from '../app/login.page';

test('test', async ({ page }) => {
    const loginPage = login(page);
    await loginPage.doLogin('jqfhkjhwf@jjj.com', 'password');

    await doLogin(page, "iryna.volnykh@vaimo.com", "password");
    await page.getByRole('link', { name: 'Brands ' }).click();
    await page.getByRole('menuitem', { name: 'Nizhyn cannery' }).click();
    await page.getByRole('link', { name: 'CHERRY TOMATOES By Nizhyn' }).click();
    await page.getByRole('button', { name: 'Add To Bag' }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    // await expect(page.locator('.order-success').locator('h2').first()).toContainText('Thank you for your order.');
    await expect(page.locator('h2', { hasText: 'Thank you for your order.' })).toBeVisible();
  });
