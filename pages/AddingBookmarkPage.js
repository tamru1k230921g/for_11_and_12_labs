const { By } = require('selenium-webdriver');
const Page = require('../Page');

class AddingBookmarkPage extends Page {
    constructor(driver) {
        super(driver);
        this.bookLink = By.css('a[href="/book/104529"]');
        this.addBookmarkButton = By.css('a[href="/book/104529/bm"].btn.btn-warning');
    }

    async clickBookLink() {
        const bookLinkElement = await this.driver.findElement(this.bookLink);
        await bookLinkElement.click();
    }

    async addBookmark() {
        const bookmarkButtonElement = await this.driver.findElement(this.addBookmarkButton);
        await bookmarkButtonElement.click();
    }
}

module.exports = AddingBookmarkPage;
