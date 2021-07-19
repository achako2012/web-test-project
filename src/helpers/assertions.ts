import {ApiServices} from "../api/services";
import logger from "../logger";
import {Customer} from "../types";

export const isBookAdded = async (api: ApiServices, data: { customer: Customer, bookTitle: string }): Promise<boolean> => {
    logger.info('Checking if book is added');

    const {token, userId} = await api.authService.getToken(data.customer)
    const {books} = await api.userService.getUserData(token, userId)

    const result = books.some((elem)=>elem.title === data.bookTitle)

    if (Array.isArray(books) && !books.length) {
        logger.info("User doesn't have books");
        return false;
    }

    return result;

}

const assertions = { isBookAdded };
export default assertions;