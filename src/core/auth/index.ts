import {JSONWebToken} from "../domain/common/JSONWebToken";

const storage_name = 'jwt';

export function SetJWT(jwt: JSONWebToken) {
    if(jwt != null) {
        localStorage.setItem(storage_name, JSON.stringify(jwt));
    }
}
export function GetJWT(): JSONWebToken | null {
    const jwt = localStorage.getItem(storage_name)

    if(jwt != null) {
        return JSON.parse(jwt) as JSONWebToken;
    }

    return null;
}
export function RemoveJWT() {
    localStorage.removeItem(storage_name);
}

export function GetToken(): string | null {
    const jwt = GetJWT();

    if(jwt != null) {
        return jwt.token;
    }

    return null;
}
export function GetTokenExpiration(): string | null {
    const jwt = GetJWT();

    if(jwt != null) {
        return jwt.tokenExpirationTime;
    }

    return null;
}
export function GetRefreshToken(): string | null {
    const jwt = GetJWT();

    if(jwt != null) {
        return jwt.refreshToken;
    }

    return null;
}
