// testFeedback.test.js
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const LoginPage = require('../pages/LoginPage');
const SearchPage = require('../pages/SearchPage');
const FeedbackPage = require('../pages/FeedbackPage');
const Logger = require('../Logger');

describe('Написание отзыва на tl.rulate.ru', () => {
    let driver;

    beforeAll(async () => {
        const options = new chrome.Options();
        options.addArguments('--start-maximized');
        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Написание отзыва', async () => {
        const loginPage = new LoginPage(driver);
        const searchPage = new SearchPage(driver);
        const feedbackPage = new FeedbackPage(driver);

        try {
            // Авторизация
            await loginPage.open('https://tl.rulate.ru');
            Logger.log('Открыта главная страница');
            await loginPage.login('Rovelzo', '20030406'); // Замените на свои учетные данные
            Logger.log('Открыта форма входа');
            // Поиск книги
            await searchPage.searchForItem('Атака Титанов: Тайна');
            Logger.log('Поиск книги');
            // Нажатие на ссылку книги
            await searchPage.clickBookLink();

            // Нажатие на ссылку блога
            await feedbackPage.clickBlogLink();

            // Нажатие на ссылку написать пост
            await feedbackPage.clickWritePostLink();

            // Ввод заголовка
            await feedbackPage.enterTitle('Мой отзыв');

            // Ввод текста
            await feedbackPage.enterText('Это мой отзыв о книге.');

            Logger.log('Пишемь отзыв');
            // Нажатие на кнопку сохранить
            await feedbackPage.clickSaveButton();
            Logger.log('Нажатие на кнопку сохранить-Успешно');
            // Проверка успешного создания отзыва (вставьте ваш код проверки)
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    }, 100000);
});
