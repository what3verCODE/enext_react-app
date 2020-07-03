export interface LoginCommand {
    email: string;
    password: string;
}

export interface LogoutCommand {
    refreshToken: string;
}

export interface RegisterCommand {
    email: string;
    password: string;
    firstName: string;
    middleName: string;
    lastName: string;
}

export interface RefreshTokenCommand {
    token: string;
    refreshToken: string;
}
