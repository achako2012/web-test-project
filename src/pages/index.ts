import LoginPage from "./login-page";
import MainPage from "./main-page";
import AccountPage from "./account-page";

const sharedPageObjects = {
    mainPage: new MainPage(),
    loginPage: new LoginPage(),
    accountPage: new AccountPage()
}

const pageObjects = () => ({...sharedPageObjects})

export default pageObjects;