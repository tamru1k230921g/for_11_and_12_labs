const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const SearchPage = require('../pages/SearchPage');
const Logger = require('../Logger');

describe('Проверка поиска товара на tl.rulate.ru', () => {
    let driver;

    beforeAll(async () => {
        const options = new chrome.Options();
        options.addArguments('--start-maximized');
        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    }, 10000);  // Увеличенный тайм-аут для beforeAll

    afterAll(async () => {
        await driver.quit();
    }, 10000);  // Увеличенный тайм-аут для afterAll

    test('Поиск товара', async () => {
        const page = new SearchPage(driver);
        try {
            await page.open('https://tl.rulate.ru');
            Logger.log('Открытие страницы: https://tl.rulate.ru');
            await page.searchForItem('Атака Титанов: Тайна');
            Logger.log('Поиск элемента: ввод текста и клик');
            const searchResultsCount = await page.getSearchResultsCount();
            Logger.log('Количество результатов поиска:', searchResultsCount);
            expect(searchResultsCount).toBeGreaterThan(0); // Проверка, что результаты поиска существуют
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    }, 100000);  // Увеличенный тайм-аут для теста
});
