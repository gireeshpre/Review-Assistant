import { test as base , expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

export const test = base.extend(
    {
        loginPage : async ({page}, use) => {
            const loginpage = new LoginPage(page);
            await use(loginpage);
        }
    }
);

export { expect };