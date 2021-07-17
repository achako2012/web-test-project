import BasePage from "./base-page";
import {page} from "../context";

class LoginPage extends BasePage {

    private emailInput = '#email'

    private passwordInput = '#passwd'

    private submitButton = '#SubmitLogin'

    async typeEmail(value:string):Promise<void>{
        await page.type(this.emailInput, value)
    }

    async typePassword(value:string):Promise<void>{
        await page.type(this.passwordInput, value)
    }

    async clickOnSubmit():Promise<void>{
        await page.click(this.submitButton)
    }

}

export default LoginPage