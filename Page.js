class Page {
    constructor(driver) {
        this.driver = driver;
    }

    async open(url) {
        await this.driver.open(url);
    }

    async findElement(locator) {
        return await this.driver.findElement(locator);
    }

    async findElements(locator) {
        return await this.driver.findElements(locator);
    }

    async click(element) {
        await this.driver.click(element);
    }

    async sendKeys(element, keys) {
        await this.driver.sendKeys(element, keys);
    }

    async waitForElement(locator, timeout) {
        await this.driver.waitForElement(locator, timeout);
    }

    async executeScript(script, ...args) {
        return await this.driver.executeScript(script, ...args);
    }
}

module.exports = Page;