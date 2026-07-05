import {test , expect} from '../fixtures/loginFixture'; 
import ExcelUtil from '../utils/ExcelUtil.js';

test.describe('OrangeHRM Login Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test("Verify Login" , async ({page , loginPage}) => {
        await loginPage.wait(5);
        const data = ExcelUtil.getRowData('./testData/Login.xlsx','Login',0);
        await loginPage.login(data.username, data.password);
        console.log('The title of the page is : >>>>:: '+await page.title());
        await expect(page).toHaveTitle('OrangeHRM');
    }
    );

    // test('Verify invalid password', async ({ loginPage }) => {
    //     await loginPage.login('Admin','WrongPassword');
    // }
    // );

});