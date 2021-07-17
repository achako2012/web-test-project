import {closePage, openPage, page} from "../context";
import {BASE_URL, CUSTOMER} from "../fixtures";
import pageObjects from "../pages";
import {expect} from 'chai';

describe('Login test', function () {
    const web = pageObjects()
    const customer = CUSTOMER

    before('Open new page', async () => {
        await openPage();
    })

    after('Close page', async () => {
        await closePage()
    })

    it('Login & Logout', async () => {
        await page.goto(BASE_URL)

        await web.mainPage.clickOnLogin()

        await web.loginPage.typeEmail(customer.email)
        await web.loginPage.typePassword(customer.password)
        await web.loginPage.clickOnSubmit()

        expect(await web.accountPage.isDisplayed(), 'Expected account page is displayed').to.be.true
    })
})