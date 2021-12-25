import {AxiosInstance} from "axios";
import AxiosMockAdapter from 'axios-mock-adapter';
import {GetUserResponse} from "../../types/ApiResponse";


export default function mockWrapper(axiosInstance: AxiosInstance) {

    let mockAdapter = new AxiosMockAdapter(axiosInstance, { delayResponse: 2000 });

    let getUserResponse: GetUserResponse = {
        code: 'OK0000',
        data: {
            id: 'it001',
            name: 'Tom'
        }
    }
    mockAdapter.onPost('/api/v1/login').reply(200, getUserResponse);
}
