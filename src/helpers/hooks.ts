import {ApiServices} from "../api/services";
import {Customer} from "../types";
import logger from "../logger";

export const deleteBooks = async (api: ApiServices, data: { customer: Customer }): Promise<void> => {
    const { customer } = data;

    logger.info('Checking if user already have debit card');

    const {token} = await api.authService.getToken(customer);

    const { books } = await api.userService.getUserData(token, customer.id);

    if (Array.isArray(books) && !books.length) {
        logger.info("User doesn't have books");
        return;
    }

    const bookIsbn = books.map((elem) => elem.isbn);

    for (const isbn of bookIsbn) {
        logger.info(`Deleting the book with isbn: ${isbn}`);
        await api.bookService.deleteBookFromUser(token, customer.id, isbn);
    }
};

const hooks = {
    deleteBooks
};

export default hooks;