const { By } = require('selenium-webdriver');
const Page = require('../Page');

class LoginPage extends Page {
    constructor(driver) {
        super(driver);
        this.registerButton = By.css('div.main-header-profile');
        this.emailInput = By.css('input[name="login[login]"]');
        this.passwordInput = By.css('input[name="login[pass]"]');
        this.loginButton = By.xpath('//input[@value="Войти"]');
    }

    async clickRegisterButton() {
        await this.click(await this.findElement(this.registerButton));
    }

    async enterEmail(email) {
        const emailField = await this.findElement(this.emailInput);
        await this.sendKeys(emailField, email);
    }

    async enterPassword(password) {
        const passwordField = await this.findElement(this.passwordInput);
        await this.sendKeys(passwordField, password);
    }

    async clickLoginButton() {
        await this.click(await this.findElement(this.loginButton));
    }
}

module.exports = LoginPage;