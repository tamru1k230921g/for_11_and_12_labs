const { By, until, Key } = require('selenium-webdriver');
const Page = require('../Page');

class SearchPage extends Page {
    constructor(driver) {
        super(driver);
        this.searchInput = By.css('input.input-medium.search-query.span3');
        this.searchButton = By.css('input.btn');
        this.searchResults = By.css('.meta');
    }

    async open(url) {
        await this.driver.get(url);
    }

    async searchForItem(keyword) {
        const searchInput = await this.driver.findElement(this.searchInput);
        await searchInput.sendKeys(keyword);
        const searchButton = await this.driver.findElement(this.searchButton);
        await searchButton.click();
        await this.driver.wait(until.elementsLocated(this.searchResults), 20000);
    }

    async getSearchResultsCount() {
        const searchResults = await this.driver.findElements(this.searchResults);
        return searchResults.length;
    }
}

module.exports = SearchPage;
