import {api, browser, closePage, openPage, page} from "../context";
import pageObjects from "../pages";
import {BASE_URL, CUSTOMER} from "../fixtures";
import {expect} from "chai";
import assertions from "../helpers/assertions";

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

        const {token, userId} = await api.authService.getToken(customer)
        const {books} = await api.userService.getUserData(token, userId)
        console.log(books)
        await page.pause()


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

        const {token, userId} = await api.authService.getToken(customer)
        const {books} = await api.userService.getUserData(token, userId)
        console.log(books)
        await page.pause()

        expect(await assertions.isBookAdded(api,{customer, bookTitle}), 'Expected book added to user').to.be.true
    })
})

