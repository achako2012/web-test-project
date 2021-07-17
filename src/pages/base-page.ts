import logger from "../logger";
import {page} from "../context";

class BasePage{

    protected async waitForElement(selector: string) {
        logger.info(`Waiting for element "${selector}" to be exist in DOM`);
        try {
            await page.waitForSelector(selector, {state: 'attached', timeout: 6 * 1000});
        } catch (error) {
            logger.error(`The element ${selector} isn't present at DOM`);
        }
    }

    protected async waitForElements(selectors: string[]) {
        for (const selector of selectors) {
            logger.info(`Checking if ${selector} is displayed as expected`);
            try {
                await this.waitForElement(selector);
                return await page.isVisible(selector);
            } catch (error) {
                logger.error(`The element ${selector} isn't visible.`);

                return false;
            }
        }

        return true;
    }

    protected async refresh(): Promise<void> {
        await page.reload();
        await page.waitForLoadState('networkidle');
    }

}
export default BasePage