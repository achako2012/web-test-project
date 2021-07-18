import BaseService from "./base-service";
import {AxiosInstance} from "axios";
import {Header} from "../type";

export interface GetUserDataResponse {
    userId: string;
    username: string;
    books: {
        isbn: string;
        title: string;
        subTitle: string;
        author: string;
        publish_date: string;
        publisher: string;
        pages: number
        description: string;
        website: string;
    }[]
}

class UserService extends BaseService {

    constructor(httpClient: AxiosInstance) {
        super(httpClient);
    }

    async getUserData(token: string, userId:string): Promise<GetUserDataResponse> {
        const response = await this.httpClient.request<GetUserDataResponse>({
            method: 'GET',
            url: `${this.baseUrl}/Account/v1/User/${userId}`,
            headers: {
                [Header.Authorization]: `Bearer ${token}`
            }
        });

        return response.data;
    }

}

export default UserService