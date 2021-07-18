import BasePage from "./base-page";
import {page} from "../context";

class BookInfoPage extends BasePage{

    private addToCollectionButton = 'text="Add To Your Collection"'

    async clickOnAddToCollection ():Promise<void>{
        await page.click(this.addToCollectionButton)
    }

}

export default BookInfoPage