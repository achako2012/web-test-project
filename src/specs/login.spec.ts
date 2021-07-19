import {closePage, openPage, page} from "../context";
import {BASE_URL, CUSTOMER} from "../fixtures";
import pageObjects from "../pages";
import {expect} from 'chai';

describe('Login test', function () {
    const web = pageObjects()
    const customer = CUSTOMER

    before('Open new page', async function () {
        await openPage();
    })

    after('Close page', async function () {
        await closePage()
    })

    it('Login & Logout', async () => {
        await page.goto(BASE_URL)

        await web.navigationBar.clickOnBookStoreApplication()
        await web.navigationBar.clickOnLogin()

        await web.loginPage.typeUserName(customer.email)
        await web.loginPage.typePassword(customer.password)
        await web.loginPage.clickOnLogin()

        const isProfilePageDisplayed = await web.profilePage.isDisplayed()
        expect(isProfilePageDisplayed, 'User should see Profile page after logging in').to.be.true

        await web.profilePage.clickOnLogout()

        const isLoginPageDisplayed = await web.loginPage.isDisplayed()
        expect(isLoginPageDisplayed, 'User should see Login page after logging out').to.be.true
    })
})