// ClaimPage.js
const { By } = require('selenium-webdriver');
const Page = require('../Page');

class ClaimPage extends Page {
    constructor(driver) {
        super(driver);
        this.claimButton = By.css('a[data-target="#claim"]');
        this.claimDescriptionField = By.css('textarea[name="description"]');
        this.submitButton = By.css('button[type="button"][data-dismiss="modal"]');
    }

    async clickClaimButton() {
        const claimButtonElement = await this.findElement(this.claimButton);
        await claimButtonElement.click();
    }

    async enterClaimDescription(description) {
        const claimDescriptionFieldElement = await this.findElement(this.claimDescriptionField);
        await claimDescriptionFieldElement.sendKeys(description);
    }

    async clickSubmitButton() {
        const submitButtonElement = await this.findElement(this.submitButton);
        await submitButtonElement.click();
    }
}

module.exports = ClaimPage;
