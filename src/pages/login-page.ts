import BasePage from "./base-page";
import {page} from "../context";
import {LogInData} from "../types";
import logger from "../logger";

class LoginPage extends BasePage {

    private userNameInput = '#userName'

    private passwordInput = '#password'

    private loginButton = '#login'

    async isDisplayed(): Promise<boolean> {
        return await this.waitForElements([this.userNameInput, this.passwordInput])
    }

    async typeUserName(value: string): Promise<void> {
        await page.type(this.userNameInput, value)
    }

    async typePassword(value: string): Promise<void> {
        await page.type(this.passwordInput, value)
    }

    async clickOnLogin(): Promise<void> {
        await page.click(this.loginButton)
    }

    async loginAs(loginData: LogInData): Promise<void> {
        logger.info('Logging into the app');

        await this.typeUserName(loginData.email);
        await this.typePassword(loginData.password);
        await this.clickOnLogin();
    }

}

export default LoginPage