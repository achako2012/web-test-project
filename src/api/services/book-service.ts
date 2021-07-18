import BaseService from "./base-service";
import {AxiosInstance} from "axios";
import {Header} from "../type";


class BookService extends BaseService {

    constructor(httpClient: AxiosInstance) {
        super(httpClient);
    }

    async deleteBookFromUser(token: string, userId: string, isbn: string): Promise<void> {
        await this.httpClient.request({
            method: 'DELETE',
            url: `${this.baseUrl}/BookStore/v1/Book`,
            headers: {
                [Header.Authorization]: `Bearer ${token}`
            },
            data: {
                isbn: isbn,
                userId: userId
            }
        });
    }

}

export default BookService