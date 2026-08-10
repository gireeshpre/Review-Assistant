import { test, expect } from '@playwright/test';

test('AI PR practice', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.waitForTimeout(5000);

    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('secret_sauce');

    await page.locator('//input[@type="submit"]').click();

});