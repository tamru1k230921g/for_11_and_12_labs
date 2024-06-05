// BuyAbonimentPage.js
const { By } = require('selenium-webdriver');
const Page = require('../Page');

class BuyAbonimentPage extends Page {
    constructor(driver) {
        super(driver);
        this.buyTicketButton = By.css('a.btn.btn-warning.ticket-btn[data-id="1"]');
        this.downloadButton = By.css('input[type="submit"][name="download_p"]');
    }

    async clickBuyTicketButton() {
        const button = await this.findElement(this.buyTicketButton);
        await this.click(button);
    }

    async clickDownloadButton() {
        const button = await this.findElement(this.downloadButton);
        await this.click(button);
    }
}

module.exports = BuyAbonimentPage;
