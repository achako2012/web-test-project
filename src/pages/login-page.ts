import BasePage from "./base-page";
import {page} from "../context";

class LoginPage extends BasePage {

    private loginButton = '.login'

    async clickOnLogin ():Promise<void>{
        await page.click(this.loginButton)
    }
}

export default LoginPage