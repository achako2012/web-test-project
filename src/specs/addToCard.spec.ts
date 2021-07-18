import {browser, closePage, openPage, page} from "../context";
import pageObjects from "../pages";
import {BASE_URL, CUSTOMER} from "../fixtures";
import {expect} from "chai";

describe('Buy book', function () {
    const web = pageObjects()
    const customer = CUSTOMER

    before('Open new page', async () => {
        await openPage();
    })

    before('Log into the app', async function () {
        await page.goto(BASE_URL);
        await web.navigationBar.clickOnBookStoreApplication()
        await web.navigationBar.clickOnLogin()
        await web.loginPage.loginAs(customer);
        await page.waitForTimeout(1000)
    });

    after('Close page', async () => {
        await closePage()
    })

    it('Buy book', async () => {
        await web.navigationBar.clickOnBooksStore()

        const bookTitle = 'Eloquent JavaScript, Second Edition'

        await web.bookStorePage.clickOnBook(bookTitle)

        await web.bookInfoPage.clickOnAddToCollection()

        await web.navigationBar.clickOnProfile()

        const isBookDisplayed = await web.profilePage.isBookDisplayed(bookTitle)
        expect(isBookDisplayed, 'Expected that book in user collection list').to.be.true
    })
})