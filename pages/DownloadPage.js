// DownloadPage.js
const { By } = require('selenium-webdriver');
const Page = require('../Page');

class DownloadPage extends Page {
    constructor(driver) {
        super(driver);
        this.downloadCheckbox = By.css('input[type="checkbox"][name="download_chapter[]"][value="3655775"]');
        this.downloadButton = By.css('input[type="submit"][name="download_p"]');
    }

    async selectChapterForDownload() {
        const checkbox = await this.findElement(this.downloadCheckbox);
        await this.click(checkbox);
    }

    async clickDownloadButton() {
        const button = await this.findElement(this.downloadButton);
        await this.click(button);
    }
}

module.exports = DownloadPage;
