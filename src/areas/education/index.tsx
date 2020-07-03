import React from 'react';
import {IAppRoute} from "../../core/domain/common/IAppRoute";

const areaPrefix = '/education';

const ContentPage: IAppRoute = {
    exact: true,
    path: `${areaPrefix}/:courseId/lesson/:lessonId`,
    component: React.lazy(() => import('./_layout/Layout'))
};

const ContinuePage: IAppRoute = {
    exact: true,
    path: `${areaPrefix}/:courseId/continue`,
    component: React.lazy(() => import('./continue'))
}

export const Education = {
    ContentPage, ContinuePage
};
