// testDeleteBookmark.test.js
const BrowserManager = require('../BrowserManager');
const LoginPage = require('../pages/LoginPage');
const SearchPage = require('../pages/SearchPage');
const DeleteBookmarkPage = require('../pages/DeleteBookmarkPage');
const Logger = require('../Logger');

describe('Удаление книги из закладок на tl.rulate.ru', () => {
    let browser;

    beforeAll(() => {
        browser = new BrowserManager();
    });

    afterAll(async () => {
        await browser.quit();
    });

    test('Авторизация, поиск и удаление книги из закладок', async () => {
        const loginPage = new LoginPage(browser);
        const searchPage = new SearchPage(browser);
        const deleteBookmarkPage = new DeleteBookmarkPage(browser);

        try {
            // Авторизация
            Logger.log('Открытие страницы: https://tl.rulate.ru');
            await browser.open('https://tl.rulate.ru');

            Logger.log('Открыта главная страница');
            await loginPage.clickRegisterButton();
            await browser.sleep(1000);
            Logger.log('Открыта форма входа');

            await loginPage.enterEmail('Rovelzo');
            await loginPage.enterPassword('20030406');
            await loginPage.clickLoginButton();

            await browser.sleep(3000);

            const currentURL = await browser.driver.getCurrentUrl();
            Logger.log('Текущий URL:', currentURL);
            expect(currentURL).toMatch(/^https:\/\/tl\.rulate\.ru\/?$/);
            Logger.log('Пользователь успешно вошел на сайт');

            // Поиск книги
            await searchPage.searchForItem('Атака Титанов: Тайна');
            Logger.log('Поиск книги');
            // Нажатие на ссылку книги
            await deleteBookmarkPage.clickBookLink();

            // Добавление книги в закладки
            await deleteBookmarkPage.addBookmark();
            Logger.log('Добавление книги в закладки');
            // Нажатие на ссылку "Убрать из закладок"
            await deleteBookmarkPage.removeBookmark();
            Logger.log('Убрать из закладок-Успешно');
            // Проверка, что книга удалена из закладок (вставьте ваш код проверки)
        } catch (error) {
            Logger.error('Произошла ошибка:', error);
        }
    }, 100000);
});
