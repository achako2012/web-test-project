import env from "./env";
import {Customer} from "./types";


export const BASE_URL = 'http://automationpractice.com'

export const CUSTOMER: Customer = {
    email: 'test.kindgeek@gmail.com',
    password: 'Test123!',
}

export const {HEADLESS} = env();