import { test, expect } from '@playwright/test';
import { randomUUID } from 'crypto';
import { login } from '../app/login.page';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Contact Us' }).first().click();
  await page.getByPlaceholder('You Full Name').click();
  await page.getByPlaceholder('You Full Name').fill('kejfkjef');
  await page.getByPlaceholder('Your Email Address').fill(`xotabu4+${randomUUID()}@gmail.com`);
  await page.getByPlaceholder('Please Describe Your Message').fill('Wow wow worshop');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByPlaceholder('Your Email Address').press('Enter');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByPlaceholder('Please Describe Your Message')).toBeEmpty();
});


