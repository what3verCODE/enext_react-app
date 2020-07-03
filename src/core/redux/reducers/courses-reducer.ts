import {handleActions} from "redux-actions";
import {CoursesActions} from "../actions/courses-actions";
import {CourseEntity} from "../../domain/entities/CourseEntity";

const singleState = null;
const allState = null;

export const CourseReducer = handleActions<CourseEntity | null, CourseEntity>({
    [CoursesActions.Type.SetSingle]: (state, action) => action.payload,
}, singleState)

export const CoursesReducer = handleActions<CourseEntity[] | null, CourseEntity[]>({
    [CoursesActions.Type.SetAll]: (state, action) => action.payload,
}, allState);
