import { BaseResponse } from "../../types/baseResponse";

export type LoginRequest = {
    username: string
    password: string
}

export type LoginData = {
    accessToken: string
    refreshToken: string
    user: User
}

export type User = {
    _id: string
    username: string
    password: string
    date: string
}


export type RefreshTokenRequest = {
    refreshToken: string
}

export type RefreshTokenData = {
    accessToken: string
    refreshToken: string
}

export type LoginResponse = BaseResponse<LoginData>
export type RefreshTokenResponse = BaseResponse<RefreshTokenData>