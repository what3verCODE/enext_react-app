import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {UserEntity} from "../../domain/entities/UserEntity";
import {IdentityReducer} from "./identity-reducer";
import {CourseEntity} from "../../domain/entities/CourseEntity";
import {CourseReducer, CoursesReducer} from "./courses-reducer";
import {LessonEntity} from "../../domain/entities/LessonEntity";
import {LessonReducer} from "./lessons-reducer";
import {ProgressEntity} from "../../domain/entities/ProgressEntity";
import {ProgressesReducer, ProgressReducer} from "./progresses-reducer";

export interface IRootState {
    router: any,
    identity: UserEntity,
    course: CourseEntity,
    courses: CourseEntity[],
    lesson: LessonEntity,
    progress: ProgressEntity,
    progresses: ProgressEntity[]
}

export const rootReducer = combineReducers<IRootState>({
    router: routerReducer as any,
    identity: IdentityReducer as any,
    course: CourseReducer as any,
    courses: CoursesReducer as any,
    lesson: LessonReducer as any,
    progress: ProgressReducer as any,
    progresses: ProgressesReducer as any
});
