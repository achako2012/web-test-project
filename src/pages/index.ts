import LoginPage from "./login-page";
import NavigationBar from "./navigation-bar";
import ProfilePage from "./profile-page";
import BookStorePage from "./book-store-page";
import BookInfoPage from "./book-info-page";


const sharedPageObjects = {
    loginPage: new LoginPage(),
    navigationBar: new NavigationBar(),
    profilePage: new ProfilePage(),
    bookStorePage: new BookStorePage(),
    bookInfoPage: new BookInfoPage()

}

const pageObjects = () => ({...sharedPageObjects})

export default pageObjects;