// CommentPage.js
const { By } = require('selenium-webdriver');
const Page = require('../Page');

class CommentPage extends Page {
    constructor(driver) {
        super(driver);
        this.commentTextarea = By.css('textarea[name="body"]');
        this.addButton = By.css('button[type="submit"]');
    }

    async enterComment(comment) {
        const commentField = await this.findElement(this.commentTextarea);
        await this.sendKeys(commentField, comment);
    }

    async clickAddButton() {
        const addButton = await this.findElement(this.addButton);
        await this.click(addButton);
    }
}

module.exports = CommentPage;
