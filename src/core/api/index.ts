import axios from 'axios';
import {GetJWT, GetRefreshToken, GetToken} from "../auth";
import {push} from "react-router-redux";
import {Dispatch} from 'redux';
import store from "../redux";
import {IdentityActions} from "../redux/actions/identity-actions";

export const apiInstance = axios.create({
    baseURL: 'http://194.58.114.121/',
    //baseURL: 'http://192.168.0.101:5000/',
});

apiInstance.interceptors.response.use(
    function (onFulfilled) {
        console.warn(onFulfilled);
        return onFulfilled;
    },
    function (onRejected) {
        const {config, response: { status }} = onRejected;

        if(status === 401) {
            const jwt = GetJWT();
            if(jwt != null) {
                store.dispatch(IdentityActions.refreshToken({...jwt}))

                config.headers['Authorization'] = `Bearer ${GetToken()}`;
                return apiInstance(config);
            } else {
                push(`/identity/login`)
            }
        }

        return onRejected;
    }
);

export enum ContentTypes {
    APPLICATION_JSON = 'application/json',
    MULTIPART_FORM_DATA = 'multipart/form-data',
}
