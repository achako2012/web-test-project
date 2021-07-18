import env from "./env";
import {Customer} from "./types";

export const BASE_URL = 'https://demoqa.com'

export const CUSTOMER: Customer = {
    id:'f532c2ee-847b-4897-b3d8-04b5353c498b',
    email: 'test.kindgeek@gmail.com',
    password: 'Test123!',
}

export const {HEADLESS} = env();