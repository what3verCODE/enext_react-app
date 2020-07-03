import {UserEntity} from "../core/domain/entities/UserEntity";
import {GetJWT} from "../core/auth";

export function getName(user: UserEntity) {
    return user.lastName + " " +
        user.firstName[0] + "." +
        user.middleName[0] + ". ";
}

export function textShortener(text: string, maxLength: number) {
    return text;
}

export function isAuthenticated(user: UserEntity) {
    const jwt = GetJWT();

    if(user == null || jwt == null)
        return false;

    return true;
}
