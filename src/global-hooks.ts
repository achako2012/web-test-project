import {browser, initializeApi, launchBrowser} from "./context";
import {HEADLESS} from "./fixtures";


before('Initialize tests', async function () {
    await launchBrowser({ headless: HEADLESS });
    await initializeApi();
});


after('Close browser', async function () {
    await browser.close();
});