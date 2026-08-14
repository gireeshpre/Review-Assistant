/**
 * Test user credentials for SauceDemo.
 *
 * Credentials are read from environment variables so they are never
 * hard-coded in test files and can be overridden per environment.
 *
 * Usage:
 *   import { USERS } from '../testData/users.js';
 *   await page.getByLabel('Username').fill(USERS.standard.username);
 */
export const USERS = {
  standard: {
    username: process.env.SAUCE_USERNAME ?? 'standard_user',
    password: process.env.SAUCE_PASSWORD ?? 'secret_sauce',
  },
};
