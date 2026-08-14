import { test, expect } from '@playwright/test';
import { USERS } from '../testData/users.js';

test('should login successfully with valid credentials', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Username').fill(USERS.standard.username);
  await page.getByLabel('Password').fill(USERS.standard.password);

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('/inventory.html');
  await expect(page.getByText('Products')).toBeVisible();
});
