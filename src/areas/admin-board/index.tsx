import React from "react";
import {IAppRoute} from "../../core/domain/common/IAppRoute";

const areaPrefix = 'ab';

const Home = React.lazy(() => import('./home'));

export const TeacherBoard = {
     Home,
};

const HomePage: IAppRoute = {
     exact: true,
     path: `/${areaPrefix}/home`,
     component: React.lazy(() => import('./home'))
};

export const AdministatorBoard = {
     HomePage
};

