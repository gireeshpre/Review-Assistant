// pages/LoginPage.js

import BasePage from './BasePage.js';

export default class LoginPage extends BasePage {

    constructor(page) {

        super(page);

        this.usernameTextbox = page.locator('input[name="username"]');
        this.passwordTextbox = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async enterUsername(username) {

        await this.enterText(this.usernameTextbox, username);
        
    }

    async enterPassword(password) {

        await this.enterText(this.passwordTextbox, password);

    }

    async clickLoginButton() {

        await this.click(this.loginButton);

    }

    async login(username, password) {

        await this.enterUsername(username);
        await this.wait(2);
        await this.enterPassword(password);
        await this.wait(2);
        await this.clickLoginButton();
        await this.wait(5);

    }

}