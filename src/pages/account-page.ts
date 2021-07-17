import BasePage from "./base-page";

class AccountPage extends BasePage {

    // TODO: The element doesn't have any unique attribute; add custom one in the frontend project
    private orderHistory = 'a[title="Orders"]'

    // TODO: The element doesn't have any unique attribute; add custom one in the frontend project
    private creditSlips = 'a[title="Credit slips"]'

    // TODO: The element doesn't have any unique attribute; add custom one in the frontend project
    private myAddresses = 'a[title="Addresses"]'

    // TODO: The element doesn't have any unique attribute; add custom one in the frontend project
    private myInformation = 'a[title="Information"]'

    // TODO: The element doesn't have any unique attribute; add custom one in the frontend project
    private myWishlist = 'a[title="My wishlists"]'

    async isDisplayed(): Promise<boolean> {
        return await this.waitForElements(
            [
                this.orderHistory,
                this.creditSlips,
                this.myAddresses,
                this.myInformation,
                this.myWishlist
            ]
        )
    }
}

export default AccountPage