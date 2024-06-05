// testDownload.test.js
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const LoginPage = require('../pages/LoginPage');
const SearchPage = require('../pages/SearchPage');
const DownloadPage = require('../pages/DownloadPage');
const Logger = require('../Logger');

describe('Загрузка книги на tl.rulate.ru', () => {
    let driver;

    beforeAll(async () => {
        const options = new chrome.Options();
        options.addArguments('--start-maximized');
        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Загрузка книги', async () => {
        const loginPage = new LoginPage(driver);
        const searchPage = new SearchPage(driver);
        const downloadPage = new DownloadPage(driver);

        try {
            // Авторизация
            await loginPage.open('https://tl.rulate.ru');
            Logger.log('Открыта главная страница');
            await loginPage.login('Rovelzo', '20030406'); // Замените на свои учетные данные

            // Поиск книги
            await searchPage.searchForItem('Атака Титанов: Тайна');

            // Нажатие на ссылку книги
            await searchPage.clickBookLink();

            // Выбор главы для загрузки
            await downloadPage.selectChapterForDownload();

            // Нажатие на кнопку загрузки
            await downloadPage.clickDownloadButton();
            Logger.log('Загрузка книги-Успешно');

            // Проверка успешной загрузки книги (вставьте ваш код проверки)
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    }, 100000);
});
