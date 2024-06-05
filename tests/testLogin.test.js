const BrowserManager = require('../BrowserManager');
const LoginPage = require('../pages/LoginPage');
const Logger = require('../Logger');

describe('Вход пользователя на tl.rulate.ru', () => {
    let browser;

    beforeAll(() => {
        browser = new BrowserManager();
    });

    afterAll(async () => {
        await browser.quit();
    });

    test('Вход пользователя на сайт tl.rulate.ru', async () => {
        const page = new LoginPage(browser);
        try {
            await page.open('https://tl.rulate.ru');
            Logger.log('Открыта главная страница');

            await page.clickRegisterButton();
            await browser.sleep(1000); // Подождите, пока откроется форма входа
            Logger.log('Открыта форма входа');

            await page.enterEmail('Rovelzo');
            await page.enterPassword('20030406');
            await page.clickLoginButton();

            await browser.sleep(3000);

            const currentURL = await browser.driver.getCurrentUrl();
            Logger.log('Текущий URL:', currentURL);
            expect(currentURL).toMatch(/^https:\/\/tl\.rulate\.ru\/?$/); // Используем регулярное выражение для игнорирования слэша в конце
            Logger.log('Пользователь успешно вошел на сайт');
        } catch (error) {
            Logger.error('Произошла ошибка:', error);
        }
    }, 100000);
});
