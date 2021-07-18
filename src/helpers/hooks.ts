import {ApiServices} from "../api/services";
import {Customer} from "../types";

export const deleteDebitCard = async (api: ApiServices, data: { customer: Customer }): Promise<void> => {
    const { customer } = data;

    logger.info('Checking if user already have debit card');

    const token = await api.authService.getCustomerToken(customer);

    const { cardTokens } = await api.debitCardRepaymentService.getDebitCards(token, customer.accountId);

    if (Array.isArray(cardTokens) && !cardTokens.length) {
        logger.info("User doesn't have debit card");
        return;
    }

    const cardsId = cardTokens.map((elem) => elem.repaymentCardId);

    for (const id of cardsId) {
        logger.info(`Deleting the card with id: ${id}`);
        await api.debitCardRepaymentService.deleteDebitCard(token, customer.accountId, id);
    }
};