import BasePage from "./base-page";
import {page} from "../context";

class BookStorePage extends BasePage{

    async clickOnBook(value:string):Promise<void>{
        const selector=`text="${value}"`
        await page.click(selector)
    }
}

export default BookStorePage