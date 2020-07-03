import {apiInstance, ContentTypes} from "../../api";
import {GetToken} from "../../auth";
import {
    LoginCommand,
    LogoutCommand,
    RefreshTokenCommand,
    RegisterCommand
} from "../../domain/commands/IdentityCommands";

const prefix = 'identity'

export async function register(payload: RegisterCommand) {
    return apiInstance({
        method: 'post',
        url: `${prefix}/register`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON
        },
        data: payload
    })
}

export async function login(payload: LoginCommand) {
    return apiInstance({
        method: 'post',
        url: `${prefix}/login`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON
        },
        data: payload
    })
}

export async function logout(payload: LogoutCommand) {
    return apiInstance({
        method: 'post',
        url: `${prefix}/logout`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        },
        data: payload
    })
}

export async function refreshToken(payload: RefreshTokenCommand) {
    return apiInstance({
        method: 'post',
        url: `${prefix}/refreshToken`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        },
        data: payload
    })
}

export async function me() {
    return apiInstance({
        method: 'get',
        url: `${prefix}/me`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        }
    })
}

