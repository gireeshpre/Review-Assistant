import {test , expect} from '../fixtures/loginFixture'; 

test.describe('OrangeHRM Login Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test("Verify Login" , async ({loginPage}) => {
        await loginPage.wait(5);
        await loginPage.login('Admin', 'admin123');
    }
    );

    // test('Verify invalid password', async ({ loginPage }) => {
    //     await loginPage.login('Admin','WrongPassword');
    // }
    // );

});