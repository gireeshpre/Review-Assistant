import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Use semantic locators — resilient to DOM changes
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  // Role-based locator instead of XPath
  await page.getByRole('button', { name: 'Login' }).click();

  // Assert successful login by verifying post-login URL
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Assert a key element on the inventory page is visible
  await expect(page.getByText('Products')).toBeVisible();
});
