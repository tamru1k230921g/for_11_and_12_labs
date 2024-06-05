// testComment.test.js
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const LoginPage = require('../pages/LoginPage');
const SearchPage = require('../pages/SearchPage');
const CommentPage = require('../pages/CommentPage');
const Logger = require('../Logger');

describe('Добавление комментария на tl.rulate.ru', () => {
    let driver;

    beforeAll(async () => {
        const options = new chrome.Options();
        options.addArguments('--start-maximized');
        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Добавление комментария', async () => {
        const loginPage = new LoginPage(driver);
        const searchPage = new SearchPage(driver);
        const commentPage = new CommentPage(driver);

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

            // Нажатие на кнопку "читать"
            await searchPage.clickReadButton();

            // Ввод комментария
            const commentText = 'Это тестовый комментарий';
            await commentPage.enterComment(commentText);
            Logger.log('Ввод комментария');
            // Добавление комментария
            await commentPage.clickAddButton();
            Logger.log('Добавление комментария-Успешно');
            // Проверка успешного добавления комментария (вставьте ваш код проверки)
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    }, 100000);
});
