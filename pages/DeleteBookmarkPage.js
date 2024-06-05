// DeleteBookmarkPage.js
const { By } = require('selenium-webdriver');
const Page = require('../Page');

class DeleteBookmarkPage extends Page {
    constructor(driver) {
        super(driver);
        this.bookLink = By.css('a[href="/book/104529"]');
        this.addBookmarkButton = By.css('a[href="/book/104529/bm"].btn.btn-warning');
        this.removeBookmarkButton = By.css('a[href="/book/104529/bm_remove"].btn.btn-warning');
    }

    async clickBookLink() {
        const bookLinkElement = await this.findElement(this.bookLink);
        await bookLinkElement.click();
    }

    async addBookmark() {
        const bookmarkButtonElement = await this.findElement(this.addBookmarkButton);
        await bookmarkButtonElement.click();
    }

    async removeBookmark() {
        const removeBookmarkButtonElement = await this.findElement(this.removeBookmarkButton);
        await removeBookmarkButtonElement.click();
    }
}

module.exports = DeleteBookmarkPage;
