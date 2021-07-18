import {AxiosInstance} from "axios";
import { BASE_URL } from '../config';
import httpClient from '../http-client';

export type StaticThis<T> = { new (...args: any[]): T };

type HttpClient = AxiosInstance;


class BaseService{

    protected readonly httpClient: HttpClient;

    protected readonly baseUrl: string;

    constructor(httpClient: AxiosInstance) {
        this.httpClient = httpClient;
        this.baseUrl = BASE_URL;
    }

    static create<T extends BaseService>(this: StaticThis<T>): T {

        return new this(httpClient);
    }
}

export default BaseService