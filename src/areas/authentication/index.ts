import React from "react";
import {IAppRoute} from "../../core/domain/common/IAppRoute";

const areaPrefix = '/identity';

const LoginPage: IAppRoute = {
    exact: true,
    path: `${areaPrefix}/login`,
    component: React.lazy(() => import('./login'))
};

const RegisterPage: IAppRoute = {
    exact: true,
    path: `${areaPrefix}/register`,
    component: React.lazy(() => import('./register'))
};

export const Authentication = {
    LoginPage, RegisterPage
};
