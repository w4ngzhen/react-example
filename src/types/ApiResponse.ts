import User from "./User";

export interface ApiResponse<T> {
    code: string,
    message?: string,
    data: T
}

export type GetUserResponse = ApiResponse<User>
