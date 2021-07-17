import {closePage, openPage, page} from "../context";
import {BASE_URL} from "../fixtures";
import pageObjects from "../pages";

describe('Login test', function () {
    const web = pageObjects()

    before('Open new page', async () => {
        await openPage();
    })

    after('Close page', async () => {
        await closePage()
    })

    it('Login & Logout', async () => {
        await page.goto(BASE_URL)

        await web.loginPage.clickOnLogin()

        await page.pause()

    })
})