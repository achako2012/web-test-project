import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import {Header, HttpError} from "./type";
import logger from "../logger";

const httpClient = axios.create({
    headers: {
        [Header.ContentType]: 'application/json',
        [Header.Accept]: '*/*'
    }
});

const onRequest = (request: AxiosRequestConfig) => {
    const { method, url, data } = request;

    logger.info(`--> ${method?.toUpperCase()} ${url} ${data ? `Body: ${JSON.stringify(data)}` : ''}`);

    return request;
};

const onResponse = <T>(response: AxiosResponse<T>) => {
    const { status, config } = response;

    logger.info(`<-- ${status} ${config.url}`);

    return response;
};

const onError = (error: AxiosError) => {
    const { message, response, config } = error;

    if (response) {
        logger.error(`<-- ${response.status} ${config.url} Body: ${JSON.stringify(response.data)}`);

        throw new HttpError(message, response.status, response.headers, response.data);
    }

    throw error;
};

httpClient.interceptors.request.use((request) => onRequest(request));
httpClient.interceptors.response.use(
    (response) => onResponse(response),
    (error) => onError(error)
);

export default httpClient;
