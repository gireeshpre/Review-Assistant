export default class BasePage {

    constructor(page) {
        this.page = page;
    }

    // Navigate to URL
    async navigate(url) {
        await this.page.goto(url);
    }

    // Click Element
    async click(locator) {
        await locator.click();
    }

    // Enter Text
    async enterText(locator, text) {
        await locator.fill(text);
    }

    // Get Text
    async getText(locator) {
        return await locator.textContent();
    }

    // Wait for Element
    async waitForElement(locator) {
        await locator.waitFor({
            state: 'visible'
        });
    }

    // Select Dropdown by Value
    async selectByValue(locator, value) {
        await locator.selectOption(value);
    }

    // Check Checkbox
    async check(locator) {
        await locator.check();
    }

    // Wait
    async wait(seconds) {
        await this.page.waitForTimeout(seconds * 1000);
    }

}


