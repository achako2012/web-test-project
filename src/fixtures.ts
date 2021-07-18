import env from "./env";
import {Customer} from "./types";

export const BASE_URL = 'https://demoqa.com'

export const CUSTOMER: Customer = {
    email: 'test.kindgeek@gmail.com',
    password: 'Test123!',
}

export const {HEADLESS} = env();