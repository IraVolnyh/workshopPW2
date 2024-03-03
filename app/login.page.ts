import { Page } from '@playwright/test';

export const login = (page: Page) => ({
        async open() {
            await page.goto('https://shopdemo-alex-hot.koyeb.app/login')
        },

        async doLogin(email: "jqfhkjhwf@jjj.com", password: "password") {
            await this.open();
            await page.getByRole('link', { name: 'Welcome! ' }).click();
            await page.getByRole('menuitem', { name: 'Login' }).click();
            await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill(email);
            await page.getByPlaceholder('Please Enter Your Password').fill(password);
            await page.getByRole('button', { name: 'Login' }).click();
        }
    });