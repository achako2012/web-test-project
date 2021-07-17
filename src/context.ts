import {Browser, BrowserContext, chromium, LaunchOptions, Page} from 'playwright';

export let page: Page;

export let browser: Browser;

export let context: BrowserContext;

export const launchBrowser = async (options?: LaunchOptions): Promise<void> => {
    browser = await chromium.launch(options);
};

export const openPage = async () => {
    context = await browser.newContext();
    page = await context.newPage();
}

export const closePage = async () => {
    await browser.close()
    await context.close()
}

