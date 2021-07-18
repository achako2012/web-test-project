import AuthService from "./auth-service";
import UserService from "./user-service";
import BookService from "./book-service";

export interface ApiServices {
    authService: AuthService;
    userService: UserService;
    bookService: BookService;
}

export const initializeApiServices = async (): Promise<ApiServices> => {
    return {
        authService: AuthService.create(),
        userService: UserService.create(),
        bookService: BookService.create()
    }
}