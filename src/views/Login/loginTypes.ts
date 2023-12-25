import { BaseResponse } from "../../types/baseResponse";

export type LoginRequest = {
    username: string
    password: string
}

export type LoginData = {
    token: string
    user: User
}

export type User = {
    _id: string
    username: string
    password: string
    date: string
}

export type LoginResponse = BaseResponse<LoginData>