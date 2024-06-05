// FeedbackPage.js
const { By } = require('selenium-webdriver');
const Page = require('../Page');

class FeedbackPage extends Page {
    constructor(driver) {
        super(driver);
        this.blogLink = By.css('a[href="/book/104529/blog"]');
        this.writePostLink = By.css('a.act[href="/book/104529/blog/edit"]');
        this.titleInput = By.css('input#BlogPost_title.span6');
        this.textArea = By.css('body.cke_editable p');
        this.saveButton = By.css('button.btn.btn-primary[name="yt0"]');
    }

    async clickBlogLink() {
        const link = await this.findElement(this.blogLink);
        await this.click(link);
    }

    async clickWritePostLink() {
        const link = await this.findElement(this.writePostLink);
        await this.click(link);
    }

    async enterTitle(title) {
        const input = await this.findElement(this.titleInput);
        await input.clear();
        await input.sendKeys(title);
    }

    async enterText(text) {
        const textarea = await this.findElement(this.textArea);
        await textarea.clear();
        await textarea.sendKeys(text);
    }

    async clickSaveButton() {
        const button = await this.findElement(this.saveButton);
        await this.click(button);
    }
}

module.exports = FeedbackPage;
