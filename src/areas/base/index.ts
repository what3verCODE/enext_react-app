import React from "react";
import {IAppRoute} from "../../core/domain/common/IAppRoute";
import AppRoute from "../../router/appRoute";

const appRoute = new AppRoute('');

const areaPrefix = '/';

const HomePage: IAppRoute = {
    exact: true,
    path: `${areaPrefix}`,
    component: React.lazy(() => import('./home'))
};

const CoursesPage: IAppRoute = {
    exact: true,
    path: `${areaPrefix}courses`,
    component: React.lazy(() => import('./courses'))
};

const CourseDetailsPage: IAppRoute = {
    exact: true,
    path: `${areaPrefix}course-details`,
    component: React.lazy(() => import('./course-details'))
};

const ProfilePage: IAppRoute = {
    exact: true,
    path: `${areaPrefix}profile`,
    component: React.lazy(() => import('./profile'))
};

const MyCoursesPage: IAppRoute = {
    exact: true,
    path: `${areaPrefix}my-courses`,
    component: React.lazy(() => import('./my-courses'))
};

const SettingsPage: IAppRoute = {
    exact: true,
    path: `${areaPrefix}settings`,
    component: React.lazy(() => import('./settings'))
};

const UsersPage: IAppRoute = {
    exact: true,
    path: `${areaPrefix}u`,
    component: React.lazy(() => import('./users'))
};

export const Base = {
    HomePage, CoursesPage, CourseDetailsPage, ProfilePage, MyCoursesPage, SettingsPage, UsersPage
};
