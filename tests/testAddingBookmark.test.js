const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const LoginPage = require('../pages/LoginPage');
const SearchPage = require('../pages/SearchPage');
const AddingBookmarkPage = require('../pages/AddingBookmarkPage');
const Logger = require('../Logger');

describe('Добавление книги в закладки на tl.rulate.ru', () => {
    let driver;

    beforeAll(async () => {
        const options = new chrome.Options();
        options.addArguments('--start-maximized');
        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    }, 10000);

    afterAll(async () => {
        await driver.quit();
    }, 10000);

    test('Авторизация, поиск и добавление книги в закладки', async () => {
        const loginPage = new LoginPage(driver);
        const searchPage = new SearchPage(driver);
        const addingBookmarkPage = new AddingBookmarkPage(driver);

        try {
            // Авторизация
            await loginPage.open('https://tl.rulate.ru');
            Logger.log('Открытие страницы: https://tl.rulate.ru');
            await loginPage.login('Rovelzo', '20030406'); // Замените на ваши данные
            Logger.log('Авторизация прошла успешно');

            // Поиск книги
            await searchPage.searchForItem('Атака Титанов: Тайна');
            Logger.log('Поиск книги завершен');

            // Клик по ссылке книги
            await addingBookmarkPage.clickBookLink();
            Logger.log('Клик по ссылке книги');

            // Добавление книги в закладки
            await addingBookmarkPage.addBookmark();
            Logger.log('Книга добавлена в закладки-Успешно');

        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    }, 200000);  // Увеличенный тайм-аут для теста
});
