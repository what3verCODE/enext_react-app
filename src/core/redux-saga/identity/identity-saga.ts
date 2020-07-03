import { takeLatest, call, put } from "redux-saga/effects";
import {IdentityActions} from "../../redux/actions/identity-actions";
import {Action} from "redux-actions";
import {
    LoginCommand,
    LogoutCommand,
    RefreshTokenCommand,
    RegisterCommand
} from "../../domain/commands/IdentityCommands";
import {login, logout, me, refreshToken, register} from "./identity-api";
import {push} from "react-router-redux";
import {JSONWebToken} from "../../domain/common/JSONWebToken";
import {RemoveJWT, SetJWT} from "../../auth";
import {UserEntity} from "../../domain/entities/UserEntity";
import {message} from "antd";

function* RegisterWorker(action: Action<RegisterCommand>) {
    try {
        const response = yield call(register, action.payload);

        if(response.status === 200) {
            yield put(push(`/identity/login`))
            message.success('Успешная регистрация! Сейчас вы будете перенаправлены на страницу аутентификации');
        }
    } catch (e) {
        console.error(e);
    }
}

function* LoginWorker(action: Action<LoginCommand>) {
    try {
        const response = yield call(login, action.payload);

        if(response.status === 200) {
            const user = response.data.user as UserEntity;
            const token = response.data.token as JSONWebToken;
            yield call(SetJWT, token);
            yield put(IdentityActions.setIdentity({...user}));
            yield put(push(`/`));
            message.success('Успешная аутентификация!');
        }
    } catch (e) {
        console.error(e);
    }
}

function* LogoutWorker(action: Action<LogoutCommand>) {
    try {
        const response = yield call(logout, action.payload);

        if(response.status === 200) {
            yield call(RemoveJWT);
            yield put(push(`/`));
        }
    } catch (e) {
        console.error(e);
    }
}

function* RefreshTokenWorker(action: Action<RefreshTokenCommand>) {
    try {
        const response = yield call(refreshToken, action.payload);

        if(response.status === 200) {

        }
    } catch (e) {
        console.error(e);
    }
}

function* MeWorker() {
    try {
        const response = yield call(me);

        if(response.status === 200) {
            const user = response.data as UserEntity;
            yield put(IdentityActions.setIdentity({...user}));
        }
    } catch (e) {
        console.error(e);
    }
}

export default function* identitySaga() {
    yield takeLatest(IdentityActions.register,RegisterWorker);
    yield takeLatest(IdentityActions.login,LoginWorker);
    yield takeLatest(IdentityActions.logout,LogoutWorker);
    yield takeLatest(IdentityActions.refreshToken,RefreshTokenWorker);
    yield takeLatest(IdentityActions.me,MeWorker);
}
