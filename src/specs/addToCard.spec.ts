import {api, closePage, openPage, page} from "../context";
import pageObjects from "../pages";
import {BASE_URL, CUSTOMER} from "../fixtures";
import {expect} from "chai";
import assertions from "../helpers/assertions";
import hooks from "../helpers/hooks";

describe('Buy book', function () {
    const web = pageObjects()
    const customer = CUSTOMER

    before('Open new page', async function () {
        await openPage();
    })

    before('Check if a book is added. If yes - remove it before test', async () => {
        await hooks.deleteBooks(api, {customer});
    });

    before('Log into the app', async function () {
        await page.goto(BASE_URL);
        await web.navigationBar.clickOnBookStoreApplication()
        await web.navigationBar.clickOnLogin()
        await web.loginPage.loginAs(customer);
        await page.waitForTimeout(1000)
    });

    after('Close page', async function () {
        await closePage()
    })

    it('Add book to the profile list', async () => {
        await web.navigationBar.clickOnBooksStore()

        const bookTitle = 'Eloquent JavaScript, Second Edition'

        await web.bookStorePage.clickOnBook(bookTitle)

        await web.bookInfoPage.clickOnAddToCollection()

        await web.navigationBar.clickOnProfile()

        const isBookDisplayed = await web.profilePage.isBookDisplayed(bookTitle)
        expect(isBookDisplayed, 'Expected that book in user collection list').to.be.true

        expect(await assertions.isBookAdded(api, {customer, bookTitle}), 'Expected book added to user').to.be.true
    })
})

