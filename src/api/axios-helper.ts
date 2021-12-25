import axios, {AxiosResponse} from 'axios';
import {ApiResponse} from "../types/ApiResponse";
import mockWrapper from "./mock/mock-wrapper";

const axiosHelper = axios.create({
    timeout: 5000,
    responseType: "json",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})

// Add a request interceptor
axiosHelper.interceptors.request.use(function (config) {
    // Do something before request is sent

    config.headers = {
        ...config.headers,
        token: 'Bearer ' + '[this is a request token]'
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosHelper.interceptors.response.use(function (
    response: AxiosResponse<ApiResponse<any>>) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    let {code, message, data} = response.data;

    if (code === 'OK0000') {
        return data;
    }

    return Promise.reject({code, message});
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

// fixme this is a mock！！！
mockWrapper(axiosHelper);

export default axiosHelper;
