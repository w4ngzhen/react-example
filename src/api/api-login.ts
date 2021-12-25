import axiosHelper from "./axios-helper";
import User from "../types/User";

export function doLogin(): Promise<User> {
    return axiosHelper.post('/api/v1/login');
}
