import {browser, launchBrowser} from "./context";
import {HEADLESS} from "./fixtures";


before('Initialize tests', async function () {
    await launchBrowser({ headless: HEADLESS });
});


after('Close browser', async function () {
    await browser.close();
});