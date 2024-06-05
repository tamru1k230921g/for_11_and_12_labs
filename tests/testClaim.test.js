// testClaim.test.js
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const LoginPage = require('../pages/LoginPage');
const SearchPage = require('../pages/SearchPage');
const ClaimPage = require('../pages/ClaimPage');

describe('Отправка жалобы на проект на tl.rulate.ru', () => {
    let driver;

    beforeAll(async () => {
        const options = new chrome.Options();
        options.addArguments('--start-maximized');
        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Авторизация, поиск и отправка жалобы на проект', async () => {
        const loginPage = new LoginPage(driver);
        const searchPage = new SearchPage(driver);
        const claimPage = new ClaimPage(driver);

        try {
            // Авторизация
            await loginPage.open('https://tl.rulate.ru');
            Logger.log('Открыта главная страница');
            await loginPage.login('Rovelzo', '20030406'); // Замените на свои учетные данные

            // Поиск книги
            await searchPage.searchForItem('Атака Титанов: Тайна');
            Logger.log('Поиск книги');
            // Нажатие на ссылку книги
            await claimPage.clickBookLink();

            // Нажатие на ссылку "Написать жалобу на проект"
            await claimPage.clickClaimButton();
            Logger.log('Нажатие на ссылку "Написать жалобу на проект"');
            // Ввод текста жалобы
            const claimDescription = "Это тестовая жалоба на проект";
            await claimPage.enterClaimDescription(claimDescription);
            Logger.log('Ввод текста жалобы');
            // Нажатие на кнопку "Отправить"
            await claimPage.clickSubmitButton();
            Logger.log('отменить отправку жалобы-Успешно');
            // Проверка успешной отправки жалобы (вставьте ваш код проверки)
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    },100000);
});
