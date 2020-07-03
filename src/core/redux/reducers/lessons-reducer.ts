import {handleActions} from "redux-actions";
import {LessonsActions} from "../actions/lessons-actions";
import {LessonEntity} from "../../domain/entities/LessonEntity";

const singleState = null;

export const LessonReducer = handleActions<LessonEntity | null, LessonEntity>({
    [LessonsActions.Type.Set]: (state, action) => action.payload,
}, singleState);
