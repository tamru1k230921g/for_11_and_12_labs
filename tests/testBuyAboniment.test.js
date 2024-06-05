// testBuyAboniment.test.js
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const LoginPage = require('../pages/LoginPage');
const SearchPage = require('../pages/SearchPage');
const BuyAbonimentPage = require('../pages/BuyAbonimentPage');
const Logger = require('../Logger');

describe('Покупка абонемента на tl.rulate.ru', () => {
    let driver;

    beforeAll(async () => {
        const options = new chrome.Options();
        options.addArguments('--start-maximized');
        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Покупка абонемента', async () => {
        const loginPage = new LoginPage(driver);
        const searchPage = new SearchPage(driver);
        const buyAbonimentPage = new BuyAbonimentPage(driver);

        try {
            // Авторизация
            await loginPage.open('https://tl.rulate.ru');
            Logger.log('Открыта главная страница');
            await loginPage.login('Rovelzo', '20030406'); // Замените на свои учетные данные

            // Поиск книги
            await searchPage.searchForItem('Атака Титанов: Тайна');
            Logger.log('Поиск книги');
            // Нажатие на ссылку книги
            await searchPage.clickBookLink();
            Logger.log('Нажатие на ссылку книги');
            // Нажатие на кнопку покупки абонемента
            await buyAbonimentPage.clickBuyTicketButton();
            Logger.log('Нажатие на кнопку покупки абонемента');
            // Нажатие на кнопку покупки
            await buyAbonimentPage.clickDownloadButton();
            Logger.log('Покупка абонемента-Успешно(не покупает без подтверждения)');
            // Проверка успешной покупки абонемента (вставьте ваш код проверки)
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    }, 100000);
});
