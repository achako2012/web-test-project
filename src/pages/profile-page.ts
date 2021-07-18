import BasePage from "./base-page";
import {page} from "../context";

class ProfilePage extends BasePage {

    private searchBox = '#searchBox'

    private booksContainer = 'div[class*="Table"]'

    // TODO: The element doesn't have any unique attribute; add custom one in the frontend project
    private logoutButton = 'text="Log out"'

    async isDisplayed(): Promise<boolean> {
        return this.waitForElements([this.searchBox, this.booksContainer])
    }

    async clickOnLogout(): Promise<void> {
        await page.click(this.logoutButton)
    }

    async isBookDisplayed(value: string): Promise<boolean> {
        const selector = `text="${value}"`
        return this.waitForElements([selector])
    }
}

export default ProfilePage