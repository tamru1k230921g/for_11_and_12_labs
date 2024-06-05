// EvaluationPage.js
const { By } = require('selenium-webdriver');
const Page = require('../Page');

class EvaluationPage extends Page {
    constructor(driver) {
        super(driver);
        this.starRating = By.css('a.star[data-num="3"]');
    }

    async clickStarRating() {
        const star = await this.findElement(this.starRating);
        await this.click(star);
    }
}

module.exports = EvaluationPage;
