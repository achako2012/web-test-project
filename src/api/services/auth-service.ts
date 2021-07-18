import BaseService from "./base-service";
import {AxiosInstance} from "axios";
import httpClient from "../http-client";
import {Header} from "../type";
import qs from 'qs';

export interface GetTokenData {
    email: string;
    password: string;
}

export interface GetTokenResponse {
    userId: string;
    token: string
}

class AuthService extends BaseService {

    constructor(httpClient: AxiosInstance) {
        super(httpClient);
    }

    /** Get authorization token. */
    async getToken({email, password,}: GetTokenData): Promise<GetTokenResponse> {
        const response = await httpClient.request<GetTokenResponse>({
            method: 'POST',
            url: `${this.baseUrl}/Account/v1/Login`,
            headers: {
                [Header.ContentType]: 'application/json'
            },
            data: {
                userName: email,
                password: password
            }
        });

        return response.data;
    }
}

export default AuthService