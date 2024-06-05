// testEvaluation.test.js
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const LoginPage = require('../pages/LoginPage');
const SearchPage = require('../pages/SearchPage');
const EvaluationPage = require('../pages/EvaluationPage');
const Logger = require('../Logger');

describe('Оценка книги на tl.rulate.ru', () => {
    let driver;

    beforeAll(async () => {
        const options = new chrome.Options();
        options.addArguments('--start-maximized');
        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Оценка книги', async () => {
        const loginPage = new LoginPage(driver);
        const searchPage = new SearchPage(driver);
        const evaluationPage = new EvaluationPage(driver);

        try {
            // Авторизация
            await loginPage.open('https://tl.rulate.ru');
            Logger.log('Открыта главная страница');
            await loginPage.login('Rovelzo', '20030406'); // Замените на свои учетные данные

            // Поиск книги
            await searchPage.searchForItem('Атака Титанов: Тайна');
            Logger.log('Поиск книга');
            // Нажатие на ссылку книги
            await searchPage.clickBookLink();
            Logger.log('Книга');
            // Нажатие на звезду с оценкой 3
            await evaluationPage.clickStarRating();
            Logger.log('Оценка-Успешно');
            // Проверка успешной оценки книги (вставьте ваш код проверки)
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    }, 100000);
});
