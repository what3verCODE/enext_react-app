import {createAction} from "redux-actions";
import {
    LoginCommand,
    LogoutCommand,
    RefreshTokenCommand,
    RegisterCommand
} from "../../domain/commands/IdentityCommands";
import {UserEntity} from "../../domain/entities/UserEntity";

enum Type {
    Set = '[IDENTITY] SET',
    Register = '[IDENTITY] REGISTER',
    Login = '[IDENTITY] LOGIN',
    Logout = '[IDENTITY] LOGOUT',
    RefreshToken = '[IDENTITY] REFRESH TOKEN',
    Me = '[IDENTITY] ME',
}

const setIdentity = createAction<UserEntity>(Type.Set);
const register = createAction<RegisterCommand>(Type.Register);
const login = createAction<LoginCommand>(Type.Login);
const logout = createAction<LogoutCommand>(Type.Logout);
const refreshToken = createAction<RefreshTokenCommand>(Type.RefreshToken);
const me = createAction(Type.Me);

export const IdentityActions = {
    Type,

    setIdentity,
    register,
    login,
    logout,
    refreshToken,
    me,
};

export type IdentityActions = Omit<typeof IdentityActions, 'Type'>;
