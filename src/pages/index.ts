import LoginPage from "./login-page";

const sharedPageObjects = {
    loginPage: new LoginPage(),
}

const pageObjects = () => ({...sharedPageObjects})

export default pageObjects;