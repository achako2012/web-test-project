import BasePage from "./base-page";
import {page} from "../context";

class NavigationBar extends BasePage {

    // TODO: The element doesn't have any unique attribute; add custom one in the frontend project
    private bookStoreApplication = 'text="Book Store Application"'

    // TODO: The element doesn't have any unique attribute; add custom one in the frontend project
    private loginTab = 'text="Login"'

    // TODO: The element doesn't have any unique attribute; add custom one in the frontend project
    private booksStoreTab = 'text="Book Store"'

    // TODO: The element doesn't have any unique attribute; add custom one in the frontend project
    private profileTab = 'text="Profile"'

    async clickOnBookStoreApplication(): Promise<void> {
        await page.click(this.bookStoreApplication)
    }

    async clickOnLogin(): Promise<void> {
        await page.click(this.loginTab)
    }

    async clickOnBooksStore():Promise<void>{
        await page.click(this.booksStoreTab)
    }

    async clickOnProfile():Promise<void>{
        await page.click(this.profileTab)
    }


}

export default NavigationBar