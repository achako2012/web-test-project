import {Browser, BrowserContext, chromium, LaunchOptions, Page} from 'playwright';
import {ApiServices, initializeApiServices} from "./api/services";

export let page: Page;

export let browser: Browser;

export let context: BrowserContext;

export let api: ApiServices;

export const launchBrowser = async (options?: LaunchOptions): Promise<void> => {
    browser = await chromium.launch(options);
};

export const openPage = async () => {
    context = await browser.newContext();
    page = await context.newPage();
}

export const closePage = async () => {
    await context.close();
    await page.close();
}

export const initializeApi = async (): Promise<void> => {
    api = await initializeApiServices();
};

