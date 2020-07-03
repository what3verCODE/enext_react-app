import React from "react";
import {IAppRoute} from "../../core/domain/common/IAppRoute";

const areaPrefix = '/teach';

const HomePage: IAppRoute = {
     exact: true,
     path: `${areaPrefix}/`,
     component: React.lazy(() => import('./home'))
};

const CoursesPage: IAppRoute = {
     exact: true,
     path: `${areaPrefix}/courses`,
     component: React.lazy(() => import('./courses'))
};

const CoursePage: IAppRoute = {
     exact: true,
     path: `${areaPrefix}/course/:id`,
     component: React.lazy(() => import('./course'))
};

const CourseDetailedStatistics: IAppRoute = {
     exact: true,
     path: `${areaPrefix}/course/:id/statistics/detailed`,
     component: React.lazy(() => import('./course-detailed-statistics'))
}

const CourseEditInfoPage: IAppRoute = {
     exact: true,
     path: `${areaPrefix}/course/:id/edit-info`,
     component: React.lazy(() => import('./course-edit-info'))
};

const CourseEditSchedulePage: IAppRoute = {
     exact: true,
     path: `${areaPrefix}/course/:id/edit-schedule`,
     component: React.lazy(() => import('./course-edit-schedule'))
};

const LessonEditPage: IAppRoute = {
     exact: true,
     path: `${areaPrefix}/lesson/:id/edit`,
     component: React.lazy(() => import('./lesson-edit'))
};

export const TeacherBoard = {
     HomePage,
     CoursesPage,
     CoursePage,
     CourseDetailedStatistics,
     CourseEditInfoPage,
     CourseEditSchedulePage,
     LessonEditPage
};
